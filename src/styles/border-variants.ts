import { css } from "lit";

export default css`

.border-primary {
  --sgds-border-opacity: 1;
  border-color: rgba(
    var(--sgds-primary-rgb),
    var(--sgds-border-opacity)
  ) !important;
}
.border-secondary {
  --sgds-border-opacity: 1;
  border-color: rgba(
    var(--sgds-secondary-rgb),
    var(--sgds-border-opacity)
  ) !important;
}
.border-success {
  --sgds-border-opacity: 1;
  border-color: rgba(
    var(--sgds-success-rgb),
    var(--sgds-border-opacity)
  ) !important;
}
.border-info {
  --sgds-border-opacity: 1;
  border-color: rgba(
    var(--sgds-info-rgb),
    var(--sgds-border-opacity)
  ) !important;
}
.border-warning {
  --sgds-border-opacity: 1;
  border-color: rgba(
    var(--sgds-warning-rgb),
    var(--sgds-border-opacity)
  ) !important;
}
.border-danger {
  --sgds-border-opacity: 1;
  border-color: rgba(
    var(--sgds-danger-rgb),
    var(--sgds-border-opacity)
  ) !important;
}
.border-light {
  --sgds-border-opacity: 1;
  border-color: rgba(
    var(--sgds-light-rgb),
    var(--sgds-border-opacity)
  ) !important;
}
.border-dark {
  --sgds-border-opacity: 1;
  border-color: rgba(
    var(--sgds-dark-rgb),
    var(--sgds-border-opacity)
  ) !important;
}
`