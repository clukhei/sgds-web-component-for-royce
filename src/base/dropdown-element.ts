import type { StrictModifiers } from "@popperjs/core";
import * as Popper from "@popperjs/core";
import { Dropdown } from "bootstrap";
import { property, query, state } from "lit/decorators.js";
import { Ref, createRef } from "lit/directives/ref.js";
import { SgdsDropdownItem } from "../components/Dropdown/sgds-dropdown-item";
import genId from "../utils/generateId";
import mergeDeep from "../utils/mergeDeep";
import SgdsElement from "./sgds-element";

const ARROW_DOWN = "ArrowDown";
const ARROW_UP = "ArrowUp";
const ESC = "Escape";
const ENTER = "Enter";

export type DropDirection = "left" | "right" | "up" | "down";

/**
 * @event sgds-show - Emitted event when show instance is called
 * @event sgds-after-show - Emitted event when dropdown has been made visible to the user and CSS transitions have completed
 * @event sgds-hide - Emitted event when hide instance is called
 * @event sgds-after-hide - Emitted event when dropdown has hidden to the user and CSS transitions have completed
 * @event sgds-select - Emitted event when a slot item is selected
 */

export class DropdownElement extends SgdsElement {
  static styles = SgdsElement.styles;
  /**@internal */
  @query("ul.dropdown-menu") menu: HTMLUListElement;
  /** @internal */
  myDropdown: Ref<HTMLElement> = createRef();
  /** @internal */
  bsDropdown: Dropdown = null;

  /** @internal Controls auto-flipping of menu */
  @property({ type: Boolean, state: true })
  protected noFlip = false;

  /** @internal When true, aligns right edge of menu with right edge of button */
  @property({ type: Boolean, reflect: true, state: true })
  protected menuAlignRight = false;

  /** @internal The drop position of menu relative to the toggle button */
  @property({ type: String, reflect: true, state: true })
  protected drop: DropDirection = "down";

  /**  Additional configuration to pass to Popper.js. See https://popper.js.org/ for config opts */
  @property({ type: Object })
  popperOpts = {};

  /** @internal Forwards value to id attribute of toggle button of Dropdown. An unique id generated by default */
  protected togglerId: string = genId("dropdown", "button");

  /** Sets the text content of Dropdown button */
  @property({ type: String })
  togglerText = "";

  /** When true, dropdown menu shows on first load */
  @property({ type: Boolean, reflect: true })
  menuIsOpen = false;

  /** Controls the close behaviour of dropdown menu. By default menu auto-closes when SgdsDropdownItem or area outside dropdown is clicked */
  @property({ type: String })
  close: "outside" | "default" | "inside" = "default";

  /** Disables the dropdown toggle */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** @internal */
  @state()
  nextDropdownItemNo = 0;
  /** @internal */
  @state()
  prevDropdownItemNo = -1;
  /** @internal */
  @state()
  dropdownConfig: Partial<Popper.Options>;
  /** @internal */
  @state()
  modifierOpt: StrictModifiers[] = [];

  firstUpdated() {
    this.bsDropdown = new Dropdown(this.myDropdown.value, {
      // autoClose not working as bootstrap is using attribute data-bs-toggle="dropdown" to configure autoclose. But it doesnt look into this attribute in the shadow dom
      reference: "toggle", // working
      popperConfig: (defaultConfig?: Partial<Popper.Options>) => {
        //working
        this.dropdownConfig = {
          placement: "bottom-start",
          modifiers: !this.noFlip
            ? this.modifierOpt
            : [
                ...this.modifierOpt,
                {
                  name: "flip",
                  options: { fallbackPlacements: [] }
                }
              ]
        };

        switch (this.drop) {
          case "up":
            this.dropdownConfig.placement = this.menuAlignRight ? "top-end" : "top-start";
            break;
          case "right":
            this.dropdownConfig.placement = "right-start";
            break;
          case "left":
            this.dropdownConfig.placement = "left-start";
            break;
          case "down":
            this.dropdownConfig.placement = this.menuAlignRight ? "bottom-end" : "bottom-start";
            break;
          default:
            this.dropdownConfig.placement = undefined;
            break;
        }
        return mergeDeep(defaultConfig, mergeDeep(this.dropdownConfig, this.popperOpts));
      }
    });

    this.myDropdown.value.addEventListener("show.bs.dropdown", () => {
      this.menuIsOpen = true;
      this.emit("sgds-show");
    });

    this.myDropdown.value.addEventListener("shown.bs.dropdown", () => {
      this.menuIsOpen = true;
      this.emit("sgds-after-show");
    });

    this.myDropdown.value.addEventListener("hide.bs.dropdown", () => {
      this.menuIsOpen = false;
      this.emit("sgds-hide");
    });

    this.myDropdown.value.addEventListener("hidden.bs.dropdown", () => {
      this.menuIsOpen = false;
      this.emit("sgds-after-hide");
    });

    this.addEventListener("keydown", this._handleKeyboardEvent);
    if (this.close !== "inside") {
      this.addEventListener("blur", e => {
        // when clicking outside of the dropdown component, it becomes null, hide the dropdown
        return e.relatedTarget === null ? this.bsDropdown.hide() : e.stopPropagation();
      });
      addEventListener("click", e => this._handleClickOutOfElement(e, this));
    }
  }
  /** When invoked, opens the dropdown menu */
  public showMenu() {
    this.bsDropdown.show();
  }

  /** When invoked, hides the dropdown menu */
  public hideMenu() {
    this.bsDropdown.hide();
  }

  _onClickButton() {
    this.bsDropdown.toggle();
  }

  _resetMenu() {
    this.nextDropdownItemNo = 0;
    this.prevDropdownItemNo = -1;
    // reset the tabindex
    const items = this._getMenuItems();
    items.forEach(i => {
      i.removeAttribute("tabindex");
    });
  }
  _getMenuItems(): SgdsDropdownItem[] {
    // for case when default slot is used e.g. dropdown, mainnavdropdown
    if (this.shadowRoot.querySelector("slot")) {
      return this.shadowRoot.querySelector("slot").assignedElements({ flatten: true }) as SgdsDropdownItem[];
    }
    // for case when there is no slot e.g. combobox
    if (this.menu.hasChildNodes()) {
      const menuItems = this.menu.children;

      return [...menuItems] as SgdsDropdownItem[];
    }
  }

  _getActiveMenuItems(): SgdsDropdownItem[] {
    return this._getMenuItems().filter(item => !item.disabled);
  }

  _setMenuItem(currentItemIdx: number, isArrowDown = true) {
    const items = this._getActiveMenuItems();
    if (items.length === 0) return;
    const item = items[currentItemIdx];
    this.nextDropdownItemNo = currentItemIdx + 1;
    this.prevDropdownItemNo = currentItemIdx - 1 < 0 ? items.length - 1 : currentItemIdx - 1;
    let activeItem: SgdsDropdownItem;
    if (item.disabled) {
      return this._setMenuItem(isArrowDown ? this.nextDropdownItemNo : this.prevDropdownItemNo);
    } else activeItem = item;

    // focus or blur items depending on active or not
    items.forEach(i => {
      i.setAttribute("tabindex", i === activeItem ? "0" : "-1");
      i === activeItem && i.focus();
    });
  }

  _handleSelectSlot(e: KeyboardEvent | MouseEvent) {
    const items = this._getActiveMenuItems();
    const currentItemNo = items.indexOf(e.target as SgdsDropdownItem);
    this.nextDropdownItemNo = currentItemNo + 1;
    this.prevDropdownItemNo = currentItemNo <= 0 ? items.length - 1 : currentItemNo - 1;

    /** Emitted event from SgdsDropdown element when a slot item is selected */
    const selectedItem = e.target as SgdsDropdownItem;
    if (!selectedItem.disabled) {
      this.emit("sgds-select");
      this.close !== "outside" && this.bsDropdown.hide();
    } else return;
  }
  _handleKeyboardEvent(e: KeyboardEvent) {
    const menuItems = this._getActiveMenuItems();
    switch (e.key) {
      case ARROW_DOWN:
        e.preventDefault();
        if (!this.menuIsOpen) return this.bsDropdown.show();
        if (this.nextDropdownItemNo === menuItems.length) {
          return this._setMenuItem(0);
        } else {
          return this._setMenuItem(this.nextDropdownItemNo > 0 ? this.nextDropdownItemNo : 0);
        }
      case ARROW_UP:
        e.preventDefault();
        if (!this.menuIsOpen) return this.bsDropdown.show();
        if (this.prevDropdownItemNo < 0) {
          return this._setMenuItem(menuItems.length - 1, false);
        } else {
          return this._setMenuItem(this.prevDropdownItemNo, false);
        }
      case ESC:
        return this.bsDropdown.hide();
      case ENTER:
        if (menuItems.includes(e.target as SgdsDropdownItem)) {
          return this._handleSelectSlot(e);
        }
        break;
      default:
        break;
    }
  }

  _handleClickOutOfElement(e: MouseEvent, self: DropdownElement) {
    if (!e.composedPath().includes(self)) {
      this.bsDropdown.hide();
    }
  }
}
