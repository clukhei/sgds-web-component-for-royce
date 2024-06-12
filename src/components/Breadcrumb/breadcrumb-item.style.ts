import { css } from "lit";
import anchorStyles from "../../styles/anchor";

export default css`
  ${anchorStyles}

  slot[name=separator]::slotted(*) {
    display: inline-block;
    align-items: center;
    padding-left: 0.25rem;
    padding-right: 0.5rem;
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item + .breadcrumb-item {
    padding-left: var(--sgds-breadcrumb-item-padding-x);
  }
  .breadcrumb-item + .breadcrumb-item:before {
    color: var(--sgds-breadcrumb-divider-color);
    content: var(--sgds-breadcrumb-divider, "/");
    float: left;
    padding-right: var(--sgds-breadcrumb-item-padding-x);
  }
  .breadcrumb-item.active {
    color: var(--sgds-breadcrumb-item-active-color);
  }
`;