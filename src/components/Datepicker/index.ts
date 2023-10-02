import { SgdsDatepicker } from "./sgds-datepicker";

customElements.define("sgds-datepicker", SgdsDatepicker);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-datepicker": SgdsDatepicker;
  }
}
