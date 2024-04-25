import { css } from "lit";

export default css`
.btn-close {
  --sgds-btn-close-color: #909090;
  --sgds-btn-close-bg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23909090'%3E%3Cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3E%3C/svg%3E");
  --sgds-btn-close-opacity: 0.5;
  --sgds-btn-close-hover-opacity: 0.75;
  --sgds-btn-close-focus-shadow: 0 0 0 0.25rem rgba(89, 66, 219, 0.25);
  --sgds-btn-close-focus-opacity: 1;
  --sgds-btn-close-disabled-opacity: 0.25;
  --sgds-btn-close-white-filter: invert(1) grayscale(100%) brightness(200%);
  background: transparent var(--sgds-btn-close-bg) center/1em auto no-repeat;
  border: 0;
  border-radius: 0.3125rem;
  box-sizing: content-box;
  height: 1em;
  opacity: var(--sgds-btn-close-opacity);
  padding: 0.25em;
  width: 1em;
}
.btn-close,.btn-close:hover {
  color: var(--sgds-btn-close-color);
}
.btn-close:hover {
  opacity: var(--sgds-btn-close-hover-opacity);
  text-decoration: none;
}
.btn-close:focus {
  box-shadow: var(--sgds-btn-close-focus-shadow);
  opacity: var(--sgds-btn-close-focus-opacity);
  outline: 0;
}
.btn-close.disabled,.btn-close:disabled {
  opacity: var(--sgds-btn-close-disabled-opacity);
  pointer-events: none;
  user-select: none;
}
.btn-close-white {
  filter: var(--sgds-btn-close-white-filter);
}
.btn-close:hover {
  background: transparent
    url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%235D5D5D'%3E%3Cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3E%3C/svg%3E")
    50%/1em auto no-repeat;
}
`