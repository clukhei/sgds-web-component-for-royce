import { css } from "lit";

export default css`
  .bg-primary {
    --sgds-bg-opacity: 1;
    background-color: rgba(var(--sgds-primary-rgb), var(--sgds-bg-opacity)) !important;
  }
  .bg-secondary {
    --sgds-bg-opacity: 1;
    background-color: rgba(var(--sgds-secondary-rgb), var(--sgds-bg-opacity)) !important;
  }
  .bg-success {
    --sgds-bg-opacity: 1;
    background-color: rgba(var(--sgds-success-rgb), var(--sgds-bg-opacity)) !important;
  }
  .bg-info {
    --sgds-bg-opacity: 1;
    background-color: rgba(var(--sgds-info-rgb), var(--sgds-bg-opacity)) !important;
  }
  .bg-warning {
    --sgds-bg-opacity: 1;
    background-color: rgba(var(--sgds-warning-rgb), var(--sgds-bg-opacity)) !important;
  }
  .bg-danger {
    --sgds-bg-opacity: 1;
    background-color: rgba(var(--sgds-danger-rgb), var(--sgds-bg-opacity)) !important;
  }
  .bg-light {
    background-color: rgba(var(--sgds-light-rgb), var(--sgds-bg-opacity)) !important;
  }
  .bg-dark,
  .bg-light {
    --sgds-bg-opacity: 1;
  }
  .bg-dark {
    background-color: rgba(var(--sgds-dark-rgb), var(--sgds-bg-opacity)) !important;
  }
`;
