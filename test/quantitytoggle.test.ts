import { assert, expect, fixture, waitUntil } from "@open-wc/testing";
import { sendKeys } from "@web/test-runner-commands";
import { html } from "lit";
import sinon from "sinon";
import { SgdsButton } from "../src/Button";
import "../src/QuantityToggle/sgds-quantity-toggle";
import { SgdsQuantityToggle } from "../src/QuantityToggle/sgds-quantity-toggle";

describe("sgds-quantity-toggle", () => {
  it("is defined", () => {
    const el = document.createElement("sgds-quantity-toggle");
    assert.instanceOf(el, SgdsQuantityToggle);
  });
});

describe("when minusBtn or plusBtn is clicked", () => {
  it("should decrease and increase the count by 1 respectively", async () => {
    const el = await fixture<SgdsQuantityToggle>(html`<sgds-quantity-toggle count="10"></sgds-quantity-toggle>`);
    const minusBtn = el.shadowRoot?.querySelector(".button-group_button-first") as SgdsButton;
    const plusBtn = el.shadowRoot?.querySelector(".button-group_button-last") as SgdsButton;

    const minusclickHandler = sinon.spy();
    el.addEventListener("click", minusclickHandler);
    minusBtn.click();
    await waitUntil(() => minusclickHandler.calledOnce);

    expect(el.count).to.equal(9);

    const plusclickHandler = sinon.spy();
    el.addEventListener("click", plusclickHandler);
    plusBtn.click();
    await waitUntil(() => plusclickHandler.calledOnce);

    expect(el.count).to.equal(10);
  });
});

describe("when count change", () => {
  it("fires sgds-input event when value is entered", async () => {
    const el = await fixture<SgdsQuantityToggle>(html`<sgds-quantity-toggle count="10"></sgds-quantity-toggle>`);
    const inputEl = el.shadowRoot?.querySelector("input.form-control") as HTMLInputElement;
    const inputHandler = sinon.spy();
    inputEl.focus();
    el.addEventListener("sgds-input", inputHandler);
    await sendKeys({ press: "0" });
    waitUntil(() => inputHandler.calledOnce);
    expect(inputHandler).to.have.been.calledOnce;
  });
});

describe("when step", () => {
  it("should decrease and increase with steps", async () => {
    const el = await fixture<SgdsQuantityToggle>(
      html`<sgds-quantity-toggle count="10" step="91"></sgds-quantity-toggle>`
    );
    const minusBtn = el.shadowRoot?.querySelector(".button-group_button-first") as SgdsButton;
    const plusBtn = el.shadowRoot?.querySelector(".button-group_button-last") as SgdsButton;

    const minusclickHandler = sinon.spy();
    el.addEventListener("click", minusclickHandler);
    minusBtn.click();
    await waitUntil(() => minusclickHandler.calledOnce);

    expect(el.count).to.equal(0);

    const plusclickHandler = sinon.spy();
    el.addEventListener("click", plusclickHandler);
    plusBtn.click();
    await waitUntil(() => plusclickHandler.calledOnce);

    expect(el.count).to.equal(91);
  });
});
