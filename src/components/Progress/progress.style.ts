import { css } from "lit";
export default css`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  .progress {
    background-color: #e4e7ec;
    border-radius: 0.3125rem;
    font-size: 0.75rem;
    height: 1rem;
  }
  .progress {
    display: flex;
    overflow: hidden;
  }
  .mb-3 {
    margin-bottom: 1rem !important;
  }
  /** scss */

  :host {
    --progress-height: 1rem;
    --progress-font-size: 0.75rem;
    display: block;
  }

  .progress {
    height: var(--progress-height);
  }
`;