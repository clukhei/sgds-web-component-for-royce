import { property, query, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { html } from "lit/static-html.js";
import SgdsElement from "../../base/sgds-element";
import { defaultValue } from "../../utils/defaultvalue";
import type { SgdsFormControl } from "../../utils/form";
import { FormSubmitController } from "../../utils/form";
import genId from "../../utils/generateId";
import { watch } from "../../utils/watch";

/**
 * @summary Text inputs allow your users to enter letters, numbers and symbols on a single line.
 *
 * @event sgds-change - Emitted when an alteration to the control's value is committed by the user.
 * @event sgds-input - Emitted when the control receives input and its value changes.
 * @event sgds-focus - Emitted when input is in focus.
 * @event sgds-blur - Emitted when input is not in focus.
 *
 */
export class SgdsInput extends SgdsElement implements SgdsFormControl {
  static styles = SgdsElement.styles;
  /**@internal */
  @query("input.form-control") input: HTMLInputElement;
  /**@internal */
  protected readonly formSubmitController = new FormSubmitController(this);
  /** The type of input which works the same as HTMLInputElement*/
  @property({ reflect: true }) type:
    | "date"
    | "datetime-local"
    | "email"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url" = "text";
  /** The input's label  */
  @property({ reflect: true }) label = "";
  /** The input's hint text below the label */
  @property({ reflect: true }) hintText = "";
  /**The input's name attribute */
  @property({ reflect: true }) name: string;
  /**Forwards classes to the native HTMLInputElement of the component. Can be used to insert any classes from bootstrap such as mt-2 */
  @property({ reflect: true }) inputClasses: string;
  /**Optional. Pass svg html of icons in string form*/
  @property({ type: String }) icon: string;
  /**Sets the minimum length of the input */
  @property({ type: Number, reflect: true }) minlength: number;
  /**Sets the maximum length of the input */
  @property({ type: Number, reflect: true }) maxlength: number;
  /**The input's placeholder text. */
  @property({ type: String, reflect: true }) placeholder = "placeholder";
  /**A pattern to validate input against. */
  @property({ type: String }) pattern: string;
  /**Autofocus the input */
  @property({ type: Boolean, reflect: true }) autofocus = false;
  /**Disables the input. */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /**Makes the input a required field. */
  @property({ type: Boolean, reflect: true }) required = false;
  /**Makes the input readonly. */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /**The input's value attribute. */
  @property({ reflect: true }) value = "";
  /**Gets or sets the default value used to reset this element. The initial value corresponds to the one originally specified in the HTML that created this element. */
  @defaultValue()
  defaultValue = "";

  /** Allows invalidFeedback, invalid and valid styles to be visible with the input */
  @property({ type: Boolean, reflect: true }) hasFeedback = false;
  /**Feedback text for error state when validated */
  @property({ type: String, reflect: true }) invalidFeedback = "";

  /**@internal */
  @state() invalid = false;
  /**@internal */
  @state() valid = false;

  /**@internal */
  protected inputId: string = genId("input", this.type);

  protected labelId: string = genId("label");

  /** Sets focus on the input. */
  public focus(options?: FocusOptions) {
    this.input.focus(options);
  }
  /** Sets blur on the input. */
  public blur() {
    this.input.blur();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  public reportValidity() {
    return this.input.reportValidity();
  }
  public setCustomValidity(err: string) {
    return this.input.setCustomValidity(err);
  }
  public setInvalid(bool: boolean) {
    this.invalid = bool;
  }
  protected _handleChange(event: string) {
    this.value = this.input.value;
    this.emit(event);
  }

  protected _handleFocus() {
    this.emit("sgds-focus");
  }

  protected _handleBlur() {
    this.emit("sgds-blur");
  }

  protected _handleKeyDown(event: KeyboardEvent) {
    const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

    // Pressing enter when focused on an input should submit the form like a native input, but we wait a tick before
    // submitting to allow users to cancel the keydown event if they need to
    if (event.key === "Enter" && !hasModifier) {
      setTimeout(() => {
        // Prevent submission when enter is click on a submission in an Input Method Editor with isComposing
        if (!event.defaultPrevented && !event.isComposing) {
          this.formSubmitController.submit();
        }
      });
    }
  }

  @watch("disabled", { waitUntilFirstUpdate: true })
  _handleDisabledChange() {
    // Disabled form controls are always valid, so we need to recheck validity when the state changes
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
  }

  @watch("value", { waitUntilFirstUpdate: true })
  _handleValueChange() {
    this.invalid = !this.input.checkValidity();
    this.valid = this.input.checkValidity();
    // remove validation for input that is not required, is already dirty and has empty value
    if (!this.required && this.value === "") {
      this.valid = false;
    }
  }
  protected _renderInput() {
    return html`<input
        class=${classMap({
          "form-control": true,
          "is-invalid": this.hasFeedback && this.invalid,
          "is-valid": this.hasFeedback && this.valid,
          [`${this.inputClasses}`]: this.inputClasses
        })}
        type=${this.type}
        id=${this.inputId}
        name=${ifDefined(this.name)}
        placeholder=${ifDefined(this.placeholder)}
        aria-invalid=${this.invalid ? "true" : "false"}
        pattern=${ifDefined(this.pattern)}
        ?autofocus=${this.autofocus}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        ?required=${this.required}
        .value=${live(this.value)}
        minlength=${ifDefined(this.minlength)}
        maxlength=${ifDefined(this.maxlength)}
        @input=${() => this._handleChange("sgds-input")}
        @change=${() => this._handleChange("sgds-change")}
        @keydown=${this._handleKeyDown}
        @invalid=${() => this.setInvalid(true)}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
        aria-describedby=${ifDefined(this.invalid && this.hasFeedback ? `${this.inputId}-invalid` : undefined)}
        aria-labelledby="${this.labelId} ${this.inputId}Help ${this.invalid && this.hasFeedback
          ? `${this.inputId}-invalid`
          : ""}"
      />
      ${this._renderFeedback()} `;
  }
  protected _renderFeedback() {
    return this.hasFeedback
      ? html`<div id="${this.inputId}-invalid" class="invalid-feedback">${this.invalidFeedback}</div>`
      : "";
  }
  protected _renderLabel() {
    const labelTemplate = html`
      <label for=${this.inputId} id=${this.labelId} class="form-label">${this.label}</label>
    `;
    return this.label && labelTemplate;
  }
  protected _renderHintText() {
    const hintTextTemplate = html`
      <small id="${this.inputId}Help" class="text-muted form-text">${this.hintText}</small>
    `;
    return this.hintText && hintTextTemplate;
  }
  render() {
    const input = html`${this._renderInput()}`;
    // if iconName is defined
    const inputWithIcon = html`
      <div class="sgds form-control-group ${this.inputClasses}">
        <span class="form-control-icon"> ${unsafeSVG(this.icon)} </span>
        ${input}
      </div>
    `;
    // if hintText is defined

    return html`
      <div class="d-flex flex-column w-100">
        ${html`${this._renderLabel()} ${this._renderHintText()} ${this.icon ? inputWithIcon : input} `}
      </div>
    `;
  }
}

export default SgdsInput;
