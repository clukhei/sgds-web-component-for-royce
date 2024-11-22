import { html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";
import FormControlElement from "../../base/form-control-element";
import { defaultValue } from "../../utils/defaultvalue";
import { SgdsFormControl } from "../../utils/form";
import { SgdsFormValidatorMixin } from "../../utils/validator";
import { watch } from "../../utils/watch";
import checkboxStyle from "./checkbox.css";

/**
 * @summary Checkbox component is used when you require users to select multiple items from a list.
 *
 * @slot default - The label of checkbox.
 *
 * @event sgds-change - Emitted when the checked state changes.
 * @event sgds-blur - Emitted when input is not in focus.
 * @event sgds-focus - Emitted when input is in focus.
 * @event sgds-validity-change - Emitted when the invalid state changes. This event is used by sgds-checkbox-group to check the invalid state change of its children
 */
export class SgdsCheckbox extends SgdsFormValidatorMixin(FormControlElement) implements SgdsFormControl {
  static styles = [...FormControlElement.styles, checkboxStyle];

  /** Value of the HTML form control. Primarily used to differentiate a list of related checkboxes that have the same name. */
  @property({ type: String, reflect: true }) value: string;

  /** Draws the checkbox in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** Allows invalidFeedback, invalid and valid styles to be visible with the input */
  @property({ type: Boolean, reflect: true }) hasFeedback = false;

  /** Gets or sets the default value used to reset this element. The initial value corresponds to the one originally specified in the HTML that created this element. */
  @defaultValue("checked")
  defaultChecked = false;

  /** Marks the checkbox input as indeterminate , with indeterminate logo  */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  @state() private _isTouched = false;

  @watch("invalid", { waitUntilFirstUpdate: true })
  _handleInvalidChange() {
    this.emit("sgds-validity-change", {
      detail: { invalid: this.invalid, validationMessage: this.input.validationMessage }
    });
  }

  /** Simulates a click on the checkbox. */
  public click() {
    this.input.click();
  }
  /** Sets focus on the checkbox. */
  public focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the checkbox. */
  public blur() {
    this.input.blur();
  }

  private _handleChange(e: Event) {
    if (this.indeterminate) {
      this.indeterminate = !this.indeterminate;
    }

    this.checked = !this.checked;
    this.value = this.input.value;
    super._mixinHandleChange(e);
    this.emit("sgds-change", { detail: { checked: this.checked, value: this.value } });
  }

  private _handleKeyDown(event: KeyboardEvent) {
    const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.key === "Enter" && !hasModifier) {
      this.click();
    }
  }

  private _handleBlur() {
    this._isTouched = true;
    this.emit("sgds-blur");
  }

  private _handleFocus() {
    this.emit("sgds-focus");
  }

  private _handleInvalid(e: Event) {
    e.preventDefault();
    this.invalid = true;
  }

  /** @internal */
  @watch("disabled", { waitUntilFirstUpdate: true })
  _handleDisabledChange() {
    // Disabled form controls are always valid, so we need to recheck validity when the state changes
    this.setInvalid(false);
  }

  @watch("_isTouched", { waitUntilFirstUpdate: true })
  _handleIsTouched() {
    if (this._isTouched) {
      this.invalid = !this.input.checkValidity();
    }
  }
  private _mixinResetFormControl() {
    this._isTouched = false;
    this.checked = this.input.checked = this.defaultChecked;
    this.input.dispatchEvent(new InputEvent("reset"));
    this._mixinResetValidity(this.input);
  }
  /**
   * Checks for validity. Under the hood, HTMLFormElement's reportValidity method calls this method to check for component's validity state
   * Note that the native error popup is prevented for SGDS form components by default. Instead the validation message shows up in the feedback container of SgdsInput
   */
  public reportValidity(): boolean {
    return this._mixinReportValidity();
  }
  /**
   * Checks for validity without any native error popup message
   */
  public checkValidity(): boolean {
    return this._mixinCheckValidity();
  }
  /**
   * Returns the ValidityState object
   */
  public get validity(): ValidityState {
    return this._mixinGetValidity();
  }
  /**
   * Returns the validation message based on the ValidityState
   */
  public get validationMessage() {
    return this._mixinGetValidationMessage();
  }

  render() {
    return html`
      <div class="form-check">
        <div class="form-check-input-container">
          <input
            class=${classMap({
              "form-check-input": true,
              "is-invalid": this.hasFeedback && this.invalid
            })}
            type="checkbox"
            id=${this._controlId}
            aria-invalid=${this.invalid ? "true" : "false"}
            name=${ifDefined(this.name)}
            ?indeterminate=${this.indeterminate}
            ?required=${this.required}
            aria-disabled=${this.disabled ? "true" : "false"}
            aria-checked=${this.checked ? "true" : "false"}
            @change=${(e: Event) => this._handleChange(e)}
            @keydown=${this._handleKeyDown}
            @invalid=${(e: Event) => this._handleInvalid(e)}
            .checked=${live(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            @blur=${this._handleBlur}
            @focus=${this._handleFocus}
          />
        </div>
        <label for="${this._controlId}" class="form-check-label" id="${this._labelId}"><slot></slot></label>
      </div>
    `;
  }
}

export default SgdsCheckbox;
