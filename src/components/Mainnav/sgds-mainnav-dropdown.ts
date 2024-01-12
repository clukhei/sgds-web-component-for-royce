import { html } from "lit";
import { property, queryAsync } from "lit/decorators.js";
import { ref } from "lit/directives/ref.js";
import { DropdownElement } from "../../base/dropdown-element";
import styles from "./sgds-mainnav-dropdown.scss";
import { DropdownListElement } from "../../base/dropdown-list-element";
import genId from "../../utils/generateId";
import { classMap } from "lit/directives/class-map.js";

/**
 * @slot default - The menu items. Pass in sgds-dropdown-item as the menu items
 * @slot toggler - The content of the toggler to pass in html content. `togglerText` property takes precedence over this slot when both are defined.
 */
export class SgdsMainnavDropdown extends DropdownListElement {
  static styles = [DropdownElement.styles, styles];

  /**@internal */
  @queryAsync("a")
  private dropdownRef: Promise<HTMLAnchorElement>;

  /** @internal Forwards value to id attribute of toggle button of Dropdown. An unique id generated by default */
  private togglerId: string = genId("dropdown", "button");

  /** Sets the text content of Dropdown button */
  @property({ type: String })
  togglerText = "";

  /** When true,  applies active styles on the dropdown button */
  @property({ type: Boolean })
  active = false;

  async firstUpdated() {
    super.firstUpdated();
    if (this.menuIsOpen) {
      await this.dropdownRef;
      this.showMenu();
    }
  }

  render() {
    return html`
      <li class="sgds nav-item dropdown">
        <a
          class="${classMap({
            "dropdown-toggle": true,
            "nav-link": true,
            active: this.active
          })}"
          ?disabled=${this.disabled}
          aria-expanded="${this.menuIsOpen}"
          ${ref(this.myDropdown)}
          @click=${() => this.toggleMenu()}
          id=${this.togglerId}
          tabindex=${this.disabled ? "-1" : "0"}
          role="button"
        >
          ${this.togglerText ? this.togglerText : html`<slot name="toggler"></slot>`}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </a>
        <ul class="dropdown-menu" role="menu" part="menu">
          <slot id="default" @click=${this.handleSelectSlot}></slot>
        </ul>
      </li>
    `;
  }
}

export default SgdsMainnavDropdown;
