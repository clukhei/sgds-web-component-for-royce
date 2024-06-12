import { css } from "lit";
import svgStyle from "../../styles/svg";

export default css`
  ${svgStyle}
  .input-group.has-validation > .dropdown-toggle:nth-last-child(n + 4),.input-group.has-validation  > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu):not(    .form-floating  ),.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n + 3),.input-group:not(.has-validation)  > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(    .form-floating  ) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .input-group
    > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(
      .invalid-feedback
    ) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin-left: -1px;
  }
  .dropdown,
  .dropdown-center {
    position: relative;
  }
  .dropdown-toggle {
    white-space: nowrap;
  }
  .dropdown-toggle:after {
    border-bottom: 0;
    border-left: 0.3em solid transparent;
    border-right: 0.3em solid transparent;
    border-top: 0.3em solid;
    content: "";
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
  }
  .dropdown-toggle:empty:after {
    margin-left: 0;
  }
  .dropdown-menu {
    --sgds-dropdown-zindex: 1000;
    --sgds-dropdown-min-width: 10rem;
    --sgds-dropdown-padding-x: 0;
    --sgds-dropdown-padding-y: 0.5rem;
    --sgds-dropdown-spacer: 0.125rem;
    --sgds-dropdown-font-size: 1rem;
    --sgds-dropdown-color: var(--sgds-body-color);
    --sgds-dropdown-bg: var(--sgds-body-bg);
    --sgds-dropdown-border-color: var(--sgds-border-color-translucent);
    --sgds-dropdown-border-radius: var(--sgds-border-radius);
    --sgds-dropdown-border-width: var(--sgds-border-width);
    --sgds-dropdown-inner-border-radius: calc(var(--sgds-border-radius) - var(--sgds-border-width));
    --sgds-dropdown-divider-bg: var(--sgds-border-color-translucent);
    --sgds-dropdown-divider-margin-y: 0.5rem;
    --sgds-dropdown-box-shadow: var(--sgds-box-shadow);
    --sgds-dropdown-link-color: var(--sgds-body-color);
    --sgds-dropdown-link-hover-color: var(--sgds-body-color);
    --sgds-dropdown-link-hover-bg: var(--sgds-tertiary-bg);
    --sgds-dropdown-link-active-color: #fff;
    --sgds-dropdown-link-active-bg: #216bff;
    --sgds-dropdown-link-disabled-color: var(--sgds-tertiary-color);
    --sgds-dropdown-item-padding-x: 1rem;
    --sgds-dropdown-item-padding-y: 0.25rem;
    --sgds-dropdown-header-color: #5d5d5d;
    --sgds-dropdown-header-padding-x: 1rem;
    --sgds-dropdown-header-padding-y: 0.5rem;
    background-clip: padding-box;
    background-color: var(--sgds-dropdown-bg);
    border: var(--sgds-dropdown-border-width) solid var(--sgds-dropdown-border-color);
    border-radius: var(--sgds-dropdown-border-radius);
    color: var(--sgds-dropdown-color);
    display: none;
    font-size: var(--sgds-dropdown-font-size);
    list-style: none;
    margin: 0;
    min-width: var(--sgds-dropdown-min-width);
    padding: var(--sgds-dropdown-padding-y) var(--sgds-dropdown-padding-x);
    position: absolute;
    text-align: left;
    z-index: var(--sgds-dropdown-zindex);
  }
  .dropdown-menu[data-bs-popper] {
    left: 0;
    margin-top: var(--sgds-dropdown-spacer);
    top: 100%;
  }
  .dropdown-menu-start {
    --bs-position: start;
  }
  .dropdown-menu-start[data-bs-popper] {
    left: 0;
    right: auto;
  }
  .dropdown-menu-end {
    --bs-position: end;
  }
  .dropdown-menu-end[data-bs-popper] {
    left: auto;
    right: 0;
  }
  @media (min-width: 576px) {
    .dropdown-menu-sm-start {
      --bs-position: start;
    }
    .dropdown-menu-sm-start[data-bs-popper] {
      left: 0;
      right: auto;
    }
    .dropdown-menu-sm-end {
      --bs-position: end;
    }
    .dropdown-menu-sm-end[data-bs-popper] {
      left: auto;
      right: 0;
    }
  }
  @media (min-width: 768px) {
    .dropdown-menu-md-start {
      --bs-position: start;
    }
    .dropdown-menu-md-start[data-bs-popper] {
      left: 0;
      right: auto;
    }
    .dropdown-menu-md-end {
      --bs-position: end;
    }
    .dropdown-menu-md-end[data-bs-popper] {
      left: auto;
      right: 0;
    }
  }
  @media (min-width: 992px) {
    .dropdown-menu-lg-start {
      --bs-position: start;
    }
    .dropdown-menu-lg-start[data-bs-popper] {
      left: 0;
      right: auto;
    }
    .dropdown-menu-lg-end {
      --bs-position: end;
    }
    .dropdown-menu-lg-end[data-bs-popper] {
      left: auto;
      right: 0;
    }
  }
  @media (min-width: 1200px) {
    .dropdown-menu-xl-start {
      --bs-position: start;
    }
    .dropdown-menu-xl-start[data-bs-popper] {
      left: 0;
      right: auto;
    }
    .dropdown-menu-xl-end {
      --bs-position: end;
    }
    .dropdown-menu-xl-end[data-bs-popper] {
      left: auto;
      right: 0;
    }
  }
  @media (min-width: 1400px) {
    .dropdown-menu-xxl-start {
      --bs-position: start;
    }
    .dropdown-menu-xxl-start[data-bs-popper] {
      left: 0;
      right: auto;
    }
    .dropdown-menu-xxl-end {
      --bs-position: end;
    }
    .dropdown-menu-xxl-end[data-bs-popper] {
      left: auto;
      right: 0;
    }
  }
  .dropup .dropdown-menu[data-bs-popper] {
    bottom: 100%;
    margin-bottom: var(--sgds-dropdown-spacer);
    margin-top: 0;
    top: auto;
  }
  .dropup .dropdown-toggle:after {
    border-bottom: 0.3em solid;
    border-left: 0.3em solid transparent;
    border-right: 0.3em solid transparent;
    border-top: 0;
    content: "";
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
  }
  .dropup .dropdown-toggle:empty:after {
    margin-left: 0;
  }
  .dropend .dropdown-menu[data-bs-popper] {
    left: 100%;
    margin-left: var(--sgds-dropdown-spacer);
    margin-top: 0;
    right: auto;
    top: 0;
  }
  .dropend .dropdown-toggle:after {
    border-bottom: 0.3em solid transparent;
    border-left: 0.3em solid;
    border-right: 0;
    border-top: 0.3em solid transparent;
    content: "";
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
  }
  .dropend .dropdown-toggle:empty:after {
    margin-left: 0;
  }
  .dropend .dropdown-toggle:after {
    vertical-align: 0;
  }
  .dropstart .dropdown-menu[data-bs-popper] {
    left: auto;
    margin-right: var(--sgds-dropdown-spacer);
    margin-top: 0;
    right: 100%;
    top: 0;
  }
  .dropstart .dropdown-toggle:after {
    content: "";
    display: inline-block;
    display: none;
    margin-left: 0.255em;
    vertical-align: 0.255em;
  }
  .dropstart .dropdown-toggle:before {
    border-bottom: 0.3em solid transparent;
    border-right: 0.3em solid;
    border-top: 0.3em solid transparent;
    content: "";
    display: inline-block;
    margin-right: 0.255em;
    vertical-align: 0.255em;
  }
  .dropstart .dropdown-toggle:empty:after {
    margin-left: 0;
  }
  .dropstart .dropdown-toggle:before {
    vertical-align: 0;
  }
  .dropdown-divider {
    border-top: 1px solid var(--sgds-dropdown-divider-bg);
    height: 0;
    margin: var(--sgds-dropdown-divider-margin-y) 0;
    opacity: 1;
    overflow: hidden;
  }
  .dropdown-item {
    background-color: transparent;
    border: 0;
    border-radius: var(--sgds-dropdown-item-border-radius, 0);
    clear: both;
    color: var(--sgds-dropdown-link-color);
    display: block;
    font-weight: 400;
    padding: var(--sgds-dropdown-item-padding-y) var(--sgds-dropdown-item-padding-x);
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    /* width: 100%; */
  }
  .dropdown-item:focus,
  .dropdown-item:hover {
    background-color: var(--sgds-dropdown-link-hover-bg);
    color: var(--sgds-dropdown-link-hover-color);
  }
  .dropdown-item.active,
  .dropdown-item:active {
    background-color: var(--sgds-dropdown-link-active-bg);
    color: var(--sgds-dropdown-link-active-color);
    text-decoration: none;
  }
  .dropdown-item.disabled,
  .dropdown-item:disabled {
    background-color: transparent;
    color: var(--sgds-dropdown-link-disabled-color);
    pointer-events: none;
  }
  .dropdown-menu.show {
    display: block;
  }
  .dropdown-header {
    color: var(--sgds-dropdown-header-color);
    display: block;
    font-size: 0.875rem;
    margin-bottom: 0;
    padding: var(--sgds-dropdown-header-padding-y) var(--sgds-dropdown-header-padding-x);
    white-space: nowrap;
  }
  .dropdown-item-text {
    color: var(--sgds-dropdown-link-color);
    display: block;
    padding: var(--sgds-dropdown-item-padding-y) var(--sgds-dropdown-item-padding-x);
  }
  .dropdown-menu-dark {
    --sgds-dropdown-color: #b1b1b1;
    --sgds-dropdown-bg: #252525;
    --sgds-dropdown-border-color: var(--sgds-border-color-translucent);
    --sgds-dropdown-box-shadow: ;
    --sgds-dropdown-link-color: #b1b1b1;
    --sgds-dropdown-link-hover-color: #fff;
    --sgds-dropdown-divider-bg: var(--sgds-border-color-translucent);
    --sgds-dropdown-link-hover-bg: hsla(0, 0%, 100%, 0.15);
    --sgds-dropdown-link-active-color: #fff;
    --sgds-dropdown-link-active-bg: #216bff;
    --sgds-dropdown-link-disabled-color: #757575;
    --sgds-dropdown-header-color: #757575;
  }
  .sgds.dropdown .dropdown-toggle {
    align-items: center;
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
  }
  .sgds.dropdown .dropdown-toggle:after {
    content: none;
  }
  .sgds.dropdown-menu {
    border: 1px solid #909090;
    padding: 0;
  }
  .sgds.dropdown-menu li a.dropdown-item {
    padding: 1rem;
  }
  .sgds.dropdown-menu li a.dropdown-item.active,
  .sgds.dropdown-menu li a.dropdown-item:hover {
    background-color: #0950df;
    color: #fff;
  }
  .btn-group > .btn.dropdown-toggle-split:first-child,
  .btn-group > .btn:not(:last-child):not(.dropdown-toggle) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .dropdown-toggle-split {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .dropdown-toggle-split:after,
  .dropend .dropdown-toggle-split:after,
  .dropup .dropdown-toggle-split:after {
    margin-left: 0;
  }
  .dropstart .dropdown-toggle-split:before {
    margin-right: 0;
  }
  .btn-group-sm > .btn + .dropdown-toggle-split,
  .btn-sm + .dropdown-toggle-split {
    padding-left: 0.375rem;
    padding-right: 0.375rem;
  }
  .btn-group-lg > .btn + .dropdown-toggle-split,
  .btn-lg + .dropdown-toggle-split {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .nav-tabs .dropdown-menu {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-top: calc(var(--sgds-nav-tabs-border-width) * -1);
  }

  @media (min-width: 576px) {
    .navbar-expand-sm .navbar-nav .dropdown-menu {
      position: absolute;
    }
  }
  @media (min-width: 768px) {
    .navbar-expand-md .navbar-nav .dropdown-menu {
      position: absolute;
    }
  }
  @media (min-width: 992px) {
    .navbar-expand-lg .navbar-nav .dropdown-menu {
      position: absolute;
    }
  }
  @media (min-width: 1200px) {
    .navbar-expand-xl .navbar-nav .dropdown-menu {
      position: absolute;
    }
  }
  @media (min-width: 1400px) {
    .navbar-expand-xxl .navbar-nav .dropdown-menu {
      position: absolute;
    }
  }
  .navbar-expand .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .sgds.navbar .nav-item a.nav-link.dropdown-toggle {
    gap: 0.75rem;
  }
  .sgds.navbar .nav-item a.nav-link.dropdown-toggle.show {
    border-bottom: 0.125rem solid #9182e8;
    color: #9182e8;
  }
  .sgds.navbar .dropdown-menu.megamenu {
    left: 0;
    right: 0;
    width: 100%;
  }
  .sgds.combobox > .dropdown-menu {
    min-width: 100%;
  }
`;