import { ScopedElementsMixin } from "@open-wc/scoped-elements/lit-element.js";
import { nothing } from "lit";
import { property, queryAssignedNodes } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit/static-html.js";
import SgdsElement from "../../base/sgds-element";
import { watch } from "../../utils/watch";
import SgdsCloseButton from "../CloseButton/sgds-close-button";
import alertStyle from "./alert.css";

export type AlertVariant = "info" | "success" | "danger" | "warning" | "neutral";
/**
 * @summary Alerts provide short, timely, and relevant information for your users. It can be a simple text message or customised HTML content with paragraphs, headings and links.
 *
 * @slot default - The alert's main content.
 * @slot icon - An icon to show in the alert. Pass in SVG elements.
 *
 * @event sgds-show - Emitted when the alert appears.
 * @event sgds-hide - Emitted after the alert closes.
 *
 * @cssproperty --sgds-alert-bg - The background color of alert
 * @cssproperty --sgds-alert-color - The text color of alert
 * @cssproperty --sgds-alert-border-color - The color of the border of alert
 * @cssproperty --sgds-alert-border-radius - The border radius of alert
 *
 */
export class SgdsAlert extends ScopedElementsMixin(SgdsElement) {
  static styles = [...SgdsElement.styles, alertStyle];
  /**@internal */
  static get scopedElements() {
    return {
      "sgds-close-button": SgdsCloseButton
    };
  }
  /** Controls the appearance of the alert  */
  @property({ type: Boolean, reflect: true }) show = false;

  /** Enables a close button that allows the user to dismiss the alert. */
  @property({ type: Boolean, reflect: true }) dismissible = false;

  /** The alert's theme variant. */
  @property({ type: String, reflect: true }) variant: AlertVariant = "info";

  /** Controls the alert visual between a lighter outline and a solid darker variant. */
  @property({ type: Boolean, reflect: true }) outlined = false;

  /** The title of the alert. Only text is allowed */
  @property({ type: String, reflect: true }) title: string;

  /** Closes the alert  */
  public close() {
    this.show = false;
  }
  /**@internal */
  @watch("show")
  _handleShowChange() {
    this.show ? this.emit("sgds-show") : this.emit("sgds-hide");
  }

  @queryAssignedNodes({ slot: "icon", flatten: true })
  _iconNodes!: Array<Node>;

  firstUpdated() {
    if (this._iconNodes.length === 0) {
      return this.shadowRoot.querySelector("slot[name='icon']")?.classList.add("d-none");
    } else return;
  }
  render() {
    return this.show
      ? html`
          <div
            class="${classMap({
              alert: true,
              show: this.show,
              [`alert-dismissible`]: this.dismissible,
              outlined: this.outlined
            })}"
            role="alert"
            aria-hidden=${this.show ? "false" : "true"}
          >
            <slot name="icon"></slot>
            <div class="alert-content">
              ${this.title ? html`<div class="alert-title">${this.title}</div>` : nothing}
              <slot></slot>
            </div>
            ${this.dismissible
              ? html`<sgds-close-button
                  aria-label="close the alert"
                  @click=${this.close}
                  variant=${this.outlined ? "dark" : "light"}
                ></sgds-close-button>`
              : nothing}
          </div>
        `
      : nothing;
  }
}

export default SgdsAlert;
