import { css } from "lit";

export default css`
  :host {
    .sgds {
      &.card {
        &[variant*="card-action"] {
          .card-body {
            ::slotted(svg) {
              margin-right: 1rem;
            }
          }
        }
      }
    }
  }

  .sgds.card[variant*="card-action"] {
    transition-duration: 0.3s;
    transition-property: box-shadow, border-color;
    transition-timing-function: ease-in-out;
  }
  .sgds.card[variant*="card-action"] .card-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .sgds.card[variant*="card-action"] .card-body i {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  .sgds.card[variant*="card-action"] .card-body > * {
    margin-bottom: 0;
  }
  .sgds.card[variant*="card-action"].is-active,
  .sgds.card[variant*="card-action"]:hover {
    border-color: transparent;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15), inset 0 0 0 2.1px #0950df;
  }
  .sgds.card[variant*="card-action"] .card-subtitle {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .sgds.card[variant*="card-action"] .card-subtitle div {
    align-items: center;
    display: flex;
  }
  .sgds.card[variant*="card-action"] .card-input input.form-check-input {
    margin-top: 0;
    min-height: 1.5rem;
    min-width: 1.5rem;
  }
  .sgds.card[variant="card-action-quantity-toggle"] .card-body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .sgds.card[variant="card-action-quantity-toggle"] div:not([class]) {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .sgds.card[variant="card-action-quantity-toggle"] div:not([class]) .btn,
  .sgds.card[variant="card-action-quantity-toggle"] div:not([class]) .input-group {
    margin-top: 0;
  }
  .sgds.card[variant="card-action-quantity-toggle"] div:not([class]) .input-group .btn i {
    margin-right: 0;
  }
  .sgds.card[variant="card-action-quantity-toggle"] div:not([class]) .input-group button,
  .sgds.card[variant="card-action-quantity-toggle"] div:not([class]) .input-group input {
    margin-top: 0;
  }
  .sgds.card[variant="card-action-quantity-toggle"] div:not([class]) .card-unit {
    flex-basis: 150%;
  }
  @media (max-width: 500px) {
    .sgds.card[variant="card-action-quantity-toggle"] div:not([class]):last-child {
      display: block;
    }
    .sgds.card[variant="card-action-quantity-toggle"] div:not([class]):last-child div.card-unit {
      margin-bottom: 1rem;
    }
  }
`;