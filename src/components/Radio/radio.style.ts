import { css } from "lit";

export default css`
  input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
  }
  fieldset {
    border: 0;
    margin: 0;
    min-width: 0;
    padding: 0;
  }
  .form-check {
    display: block;
    margin-bottom: 0.125rem;
    min-height: 2rem;
    padding-left: 1.625em;
  }
  .form-check .form-check-input {
    float: left;
    margin-left: -1.625em;
  }
  .form-check-reverse {
    padding-left: 0;
    padding-right: 1.625em;
    text-align: right;
  }
  .form-check-reverse .form-check-input {
    float: right;
    margin-left: 0;
    margin-right: -1.625em;
  }
  .form-check-input {
    --sgds-form-check-bg: var(--sgds-body-bg);
    appearance: none;
    background-color: var(--sgds-form-check-bg);
    background-image: var(--sgds-form-check-bg-image);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    border: var(--sgds-border-width) solid var(--sgds-border-color);
    flex-shrink: 0;
    height: 1.125em;
    margin-top: 0.4375em;
    print-color-adjust: exact;
    vertical-align: top;
    width: 1.125em;
  }
  .form-check-input[type="checkbox"] {
    border-radius: 0.25em;
  }
  .form-check-input[type="radio"] {
    border-radius: 50%;
  }
  .form-check-input:active {
    filter: brightness(90%);
  }
  .form-check-input:focus {
    border-color: #90b5ff;
    box-shadow: 0 0 0 0.25rem rgba(89, 66, 219, 0.25);
    outline: 0;
  }
  .form-check-input:checked {
    background-color: #216bff;
    border-color: #216bff;
  }
  .form-check-input:checked[type="checkbox"] {
    --sgds-form-check-bg-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff' viewBox='0 0 16 16'%3E%3Cpath d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E");
  }
  .form-check-input:checked[type="radio"] {
    --sgds-form-check-bg-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='2' fill='%23fff'/%3E%3C/svg%3E");
  }
  .form-check-input[type="checkbox"]:indeterminate {
    --sgds-form-check-bg-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3E%3C/svg%3E");
    background-color: #216bff;
    border-color: #216bff;
  }
  .form-check-input:disabled {
    filter: none;
    opacity: 0.5;
    pointer-events: none;
  }
  .form-check-input:disabled ~ .form-check-label,
  .form-check-input[disabled] ~ .form-check-label {
    cursor: default;
    opacity: 0.5;
  }
  .form-switch .form-check-input {
    --sgds-form-switch-bg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='rgba(0, 0, 0, 0.25)'/%3E%3C/svg%3E");
    background-image: var(--sgds-form-switch-bg);
    background-position: 0;
    border-radius: 2em;
    margin-left: -2.5em;
    transition: background-position 0.15s ease-in-out;
    width: 2em;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-switch .form-check-input {
      transition: none;
    }
  }
  .form-switch .form-check-input:focus {
    --sgds-form-switch-bg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%2390b5ff'/%3E%3C/svg%3E");
  }
  .form-switch .form-check-input:checked {
    --sgds-form-switch-bg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
    background-position: 100%;
  }
  .form-switch.form-check-reverse {
    padding-left: 0;
    padding-right: 2.5em;
  }
  .form-switch.form-check-reverse .form-check-input {
    margin-left: 0;
    margin-right: -2.5em;
  }
  .form-check-inline {
    display: inline-block;
    margin-right: 1rem;
  }
  .btn-check {
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
    position: absolute;
  }
  .btn-check:disabled + .btn,
  .btn-check[disabled] + .btn {
    filter: none;
    opacity: 0.65;
    pointer-events: none;
  }
  [data-bs-theme="dark"] .form-switch .form-check-input:not(:checked):not(:focus) {
    --sgds-form-switch-bg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='rgba(255, 255, 255, 0.25)'/%3E%3C/svg%3E");
  }
  [data-bs-theme="dark"] .form-check-input:checked {
    background-color: #538cff;
    border-color: #538cff;
  }
  .sgds.input-group .input-group-text .form-check-input {
    margin-top: 0;
  }
  .form-check-input.is-valid,
  .was-validated .form-check-input:valid {
    border-color: var(--sgds-form-valid-border-color);
  }
  .form-check-input.is-valid:checked,
  .was-validated .form-check-input:valid:checked {
    background-color: var(--sgds-form-valid-color);
  }
  .form-check-input.is-valid:focus,
  .was-validated .form-check-input:valid:focus {
    box-shadow: 0 0 0 0.25rem rgba(var(--sgds-success-rgb), 0.25);
  }
  .form-check-input.is-valid ~ .form-check-label,
  .was-validated .form-check-input:valid ~ .form-check-label {
    color: var(--sgds-form-valid-color);
  }
  .form-check-inline .form-check-input ~ .valid-feedback {
    margin-left: 0.5em;
  }
  .form-check-input.is-invalid,
  .was-validated .form-check-input:invalid {
    border-color: var(--sgds-form-invalid-border-color);
  }
  .form-check-input.is-invalid:checked,
  .was-validated .form-check-input:invalid:checked {
    background-color: var(--sgds-form-invalid-color);
  }
  .form-check-input.is-invalid:focus,
  .was-validated .form-check-input:invalid:focus {
    box-shadow: 0 0 0 0.25rem rgba(var(--sgds-danger-rgb), 0.25);
  }
  .form-check-input.is-invalid ~ .form-check-label,
  .was-validated .form-check-input:invalid ~ .form-check-label {
    color: var(--sgds-form-invalid-color);
  }
  .form-check-inline .form-check-input ~ .invalid-feedback {
    margin-left: 0.5em;
  }
  .btn-check + .btn:hover {
    background-color: var(--sgds-btn-bg);
    border-color: var(--sgds-btn-border-color);
    color: var(--sgds-btn-color);
  }
  .btn-check:focus-visible + .btn {
    border-color: var(--sgds-btn-hover-border-color);
    box-shadow: var(--sgds-btn-focus-box-shadow);
    outline: 0;
  }
  .btn-check:checked + .btn,
  :not(.btn-check) + .btn:active {
    background-color: var(--sgds-btn-active-bg);
    border-color: var(--sgds-btn-active-border-color);
    color: var(--sgds-btn-active-color);
  }
  .btn-check:checked + .btn:focus-visible,
  :not(.btn-check) + .btn:active:focus-visible {
    box-shadow: var(--sgds-btn-focus-box-shadow);
  }
  fieldset:disabled .btn {
    background-color: var(--sgds-btn-disabled-bg);
    border-color: var(--sgds-btn-disabled-border-color);
    color: var(--sgds-btn-disabled-color);
    opacity: var(--sgds-btn-disabled-opacity);
    pointer-events: none;
  }
  .btn-group-vertical > .btn-check:checked + .btn,
  .btn-group-vertical > .btn-check:focus + .btn,
  .btn-group > .btn-check:checked + .btn,
  .btn-group > .btn-check:focus + .btn {
    z-index: 1;
  }
  .btn-group > :not(.btn-check:first-child) + .btn {
    margin-left: -1px;
  }
  .btn-group > :not(.btn-check) + .btn {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  .sgds.card[variant*="card-action"] .card-input input.form-check-input {
    margin-top: 0;
    min-height: 1.5rem;
    min-width: 1.5rem;
  }
`;