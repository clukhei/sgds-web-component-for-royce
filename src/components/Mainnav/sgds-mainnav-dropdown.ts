import { html } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import genId from "../../utils/generateId";
import dropdownStyle from "../Dropdown/dropdown.css";
import dropdownMenuStyle from "../Dropdown/dropdown-menu.css";
import mainnavDropdownStyle from "./mainnav-dropdown.css";
import SgdsDropdown from "../Dropdown/sgds-dropdown";
import SgdsDropdownItem from "../Dropdown/sgds-dropdown-item";
import SgdsIcon from "../Icon/sgds-icon";
import SgdsElement from "../../base/sgds-element";
/**
 * @slot default - The menu items. Pass in sgds-dropdown-item as the menu items
 * @slot toggler - The content of the toggler to pass in html content. `togglerText` property takes precedence over this slot when both are defined.
 */
export class SgdsMainnavDropdown extends SgdsElement {
  static styles = [...SgdsElement.styles, dropdownStyle, dropdownMenuStyle, mainnavDropdownStyle];
  static dependencies = {
    "sgds-dropdown": SgdsDropdown,
    "sgds-dropdown-item": SgdsDropdownItem,
    "sgds-icon": SgdsIcon
  };

  /** @internal Forwards value to id attribute of toggle button of Dropdown. An unique id generated by default */
  private togglerId: string = genId("dropdown", "button");

  /** Sets the text content of Dropdown button */
  @property({ type: String })
  togglerText = "";

  /** When true,  applies active styles on the dropdown button */
  @property({ type: Boolean })
  active = false;

  /** When true,  applies active styles on the dropdown button */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  render() {
    return html`
      <sgds-dropdown
        modifierOpt=${[
          {
            name: "offset",
            options: {
              offset: [0, 0]
            }
          }
        ]}
        ?disabled=${this.disabled}
      >
        <a
          class="${classMap({
            "nav-link": true,
            active: this.active,
            disabled: this.disabled
          })}"
          aria-disabled=${this.disabled ? "true" : "false"}
          id=${this.togglerId}
          tabindex=${this.disabled ? "-1" : "0"}
          role="button"
          slot="toggler"
        >
          ${this.togglerText ? this.togglerText : html`<slot name="toggler"></slot>`}
          <sgds-icon name="chevron-down"></sgds-icon>
        </a>
        <slot></slot>
      </sgds-dropdown>
    `;
  }
}

export default SgdsMainnavDropdown;
