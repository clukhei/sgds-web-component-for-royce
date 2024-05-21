import { css } from "lit";

export default css`
  :host {
    display: inline-block;
    --button-padding-x: 1rem;
    --button-padding-y: 0.4375rem;
    --button-font-family: var(--sgds-font-sans-serif);
    --button-font-size: 1rem;
    --button-font-weight: 400;
    --button-line-height: 2;
    --button-color: var(--sgds-body-color);
    --button-bg: transparent;
    --button-border-width: 1px;
    --button-border-color: transparent;
    --button-border-radius: var(--sgds-border-radius);
    --button-hover-border-color: transparent;
    --button-box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
    --button-disabled-opacity: 0.65;
    --button-focus-box-shadow: 0 0 0 0.25rem rgba(var(--sgds-btn-focus-shadow-rgb), 0.5);
  }
  
  a {
    color: rgba(var(--sgds-link-color-rgb), var(--sgds-link-opacity, 1));
    text-decoration: underline;
  }
  a:hover {
    --sgds-link-color-rgb: var(--sgds-link-hover-color-rgb);
  }
  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }
  a > code {
    color: inherit;
  }
  button {
    border-radius: 0;
  }
  button:focus:not(:focus-visible) {
    outline: 0;
  }
  button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
  }
  button {
    text-transform: none;
  }
  button {
    -webkit-appearance: button;
  }
  button:not(:disabled) {
    cursor: pointer;
  }
  a {
    text-underline-offset: 0.25rem;
  }
  a[target="_blank"]:after {
    content: "";
    display: inline-block;
    font-family: bootstrap-icons;
    padding-left: 0.25rem;
    text-decoration-line: none;
  }
  .btn {
    background-color: var(--button-bg);
    border: var(--button-border-width) solid var(--button-border-color);
    border-radius: var(--button-border-radius);
    color: var(--button-color);
    cursor: pointer;
    display: inline-block;
    font-family: var(--button-font-family);
    font-size: var(--sgds-btn-font-size);
    font-weight: var(--button-font-weight);
    line-height: var(--button-line-height);
    padding: var(--button-padding-y) var(--button-padding-x);
    text-align: center;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    user-select: none;
    vertical-align: middle;
  }
  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }
  .btn:hover {
    background-color: var(--sgds-btn-hover-bg);
    border-color: var(--sgds-btn-hover-border-color);
    color: var(--sgds-btn-hover-color);
  }
  .btn:focus-visible {
    background-color: var(--sgds-btn-hover-bg);
    border-color: var(--sgds-btn-hover-border-color);
    box-shadow: var(--sgds-btn-focus-box-shadow);
    color: var(--sgds-btn-hover-color);
    outline: 0;
  }
  .btn.active,
  .btn.show,
  .btn:first-child:active {
    background-color: var(--sgds-btn-active-bg);
    border-color: var(--sgds-btn-active-border-color);
    color: var(--sgds-btn-active-color);
  }
  .btn.active:focus-visible,
  .btn.show:focus-visible,
  .btn:first-child:active:focus-visible {
    box-shadow: var(--sgds-btn-focus-box-shadow);
  }
  .btn.disabled,
  .btn:disabled {
    background-color: var(--sgds-btn-disabled-bg);
    border-color: var(--sgds-btn-disabled-border-color);
    color: var(--sgds-btn-disabled-color);
    opacity: var(--button-disabled-opacity);
    pointer-events: none;
  }
  .btn-primary {
    --button-color: #fff;
    --button-bg:   var(--sgds-primary-500);//#5942db;
    --button-border-color: #5942db;
    --sgds-btn-hover-color: #fff;
    --sgds-btn-hover-bg: color-mix(in srgb, var(--sgds-primary), black 15%); // #4c38ba; 
   --button-hover-border-color: var(--sgds-btn-hover-bg)//color-mix(in srgb, var(--sgds-primary), black 15%);// #4735af;
    --sgds-btn-focus-shadow-rgb: 114, 94, 224;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: color-mix(in srgb, var(--sgds-primary), black 15%);
    --sgds-btn-active-border-color: var( --sgds-btn-active-bg)
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: #fff;
    --sgds-btn-disabled-bg: #5942db;
    --sgds-btn-disabled-border-color: #5942db;
  }
  .btn-secondary {
    --button-color: #fff;
    --button-bg: var(--sgds-secondary-500);// #0a6679;
    --button-border-color: #0a6679;
    --sgds-btn-hover-color: #fff;
    --sgds-btn-hover-bg: #095767;
   --button-hover-border-color: #085261;
    --sgds-btn-focus-shadow-rgb: 47, 125, 141;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: #085261;
    --sgds-btn-active-border-color: #084d5b;
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: #fff;
    --sgds-btn-disabled-bg: #0a6679;
    --sgds-btn-disabled-border-color: #0a6679;
  }
  .btn-success {
    --button-color: #fff;
    --button-bg: #066e0e;
    --button-border-color: #066e0e;
    --sgds-btn-hover-color: #fff;
    --sgds-btn-hover-bg: #055e0c;
   --button-hover-border-color: #05580b;
    --sgds-btn-focus-shadow-rgb: 43, 132, 50;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: #05580b;
    --sgds-btn-active-border-color: #05530b;
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: #fff;
    --sgds-btn-disabled-bg: #066e0e;
    --sgds-btn-disabled-border-color: #066e0e;
  }
  .btn-info {
    --button-color: #fff;
    --button-bg: #0950df;
    --button-border-color: #0950df;
    --sgds-btn-hover-color: #fff;
    --sgds-btn-hover-bg: #0844be;
   --button-hover-border-color: #0740b2;
    --sgds-btn-focus-shadow-rgb: 46, 106, 228;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: #0740b2;
    --sgds-btn-active-border-color: #073ca7;
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: #fff;
    --sgds-btn-disabled-bg: #0950df;
    --sgds-btn-disabled-border-color: #0950df;
  }
  .btn-warning {
    --button-color: #fff;
    --button-bg: #88500d;
    --button-border-color: #88500d;
    --sgds-btn-hover-color: #fff;
    --sgds-btn-hover-bg: #74440b;
   --button-hover-border-color: #6d400a;
    --sgds-btn-focus-shadow-rgb: 154, 106, 49;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: #6d400a;
    --sgds-btn-active-border-color: #663c0a;
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: #fff;
    --sgds-btn-disabled-bg: #88500d;
    --sgds-btn-disabled-border-color: #88500d;
  }
  .btn-danger {
    --button-color: #fff;
    --button-bg: #b6220d;
    --button-border-color: #b6220d;
    --sgds-btn-hover-color: #fff;
    --sgds-btn-hover-bg: #9b1d0b;
   --button-hover-border-color: #921b0a;
    --sgds-btn-focus-shadow-rgb: 193, 67, 49;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: #921b0a;
    --sgds-btn-active-border-color: #891a0a;
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: #fff;
    --sgds-btn-disabled-bg: #b6220d;
    --sgds-btn-disabled-border-color: #b6220d;
  }
  .btn-light {
    --button-color: #000;
    --button-bg: #b1b1b1;
    --button-border-color: #b1b1b1;
    --sgds-btn-hover-color: #000;
    --sgds-btn-hover-bg: #969696;
   --button-hover-border-color: #8e8e8e;
    --sgds-btn-focus-shadow-rgb: 150, 150, 150;
    --sgds-btn-active-color: #000;
    --sgds-btn-active-bg: #8e8e8e;
    --sgds-btn-active-border-color: #858585;
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: #000;
    --sgds-btn-disabled-bg: #b1b1b1;
    --sgds-btn-disabled-border-color: #b1b1b1;
  }
  .btn-dark {
    --button-color: #fff;
    --button-bg: #252525;
    --button-border-color: #252525;
    --sgds-btn-hover-color: #fff;
    --sgds-btn-hover-bg: #464646;
   --button-hover-border-color: #3b3b3b;
    --sgds-btn-focus-shadow-rgb: 70, 70, 70;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: #515151;
    --sgds-btn-active-border-color: #3b3b3b;
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: #fff;
    --sgds-btn-disabled-bg: #252525;
    --sgds-btn-disabled-border-color: #252525;
  }
  .btn-outline-primary {
    --button-color: #5942db;
    --button-border-color: #5942db;
    --sgds-btn-hover-color: #fff;
    --sgds-btn-hover-bg: #5942db;
   --button-hover-border-color: #5942db;
    --sgds-btn-focus-shadow-rgb: 89, 66, 219;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: #5942db;
    --sgds-btn-active-border-color: #5942db;
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: #5942db;
    --sgds-btn-disabled-bg: transparent;
    --sgds-btn-disabled-border-color: #5942db;
    --sgds-gradient: none;
  }
  .btn-outline-secondary {
    --button-color: #0a6679;
    --button-border-color: #0a6679;
    --sgds-btn-hover-color: #fff;
    --sgds-btn-hover-bg: #0a6679;
   --button-hover-border-color: #0a6679;
    --sgds-btn-focus-shadow-rgb: 10, 102, 121;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: #0a6679;
    --sgds-btn-active-border-color: #0a6679;
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: #0a6679;
    --sgds-btn-disabled-bg: transparent;
    --sgds-btn-disabled-border-color: #0a6679;
    --sgds-gradient: none;
  }
  .btn-outline-success {
    --button-color: #066e0e;
    --button-border-color: #066e0e;
    --sgds-btn-hover-color: #fff;
    --sgds-btn-hover-bg: #066e0e;
   --button-hover-border-color: #066e0e;
    --sgds-btn-focus-shadow-rgb: 6, 110, 14;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: #066e0e;
    --sgds-btn-active-border-color: #066e0e;
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: #066e0e;
    --sgds-btn-disabled-bg: transparent;
    --sgds-btn-disabled-border-color: #066e0e;
    --sgds-gradient: none;
  }
  .btn-outline-info {
    --button-color: #0950df;
    --button-border-color: #0950df;
    --sgds-btn-hover-color: #fff;
    --sgds-btn-hover-bg: #0950df;
   --button-hover-border-color: #0950df;
    --sgds-btn-focus-shadow-rgb: 9, 80, 223;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: #0950df;
    --sgds-btn-active-border-color: #0950df;
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: #0950df;
    --sgds-btn-disabled-bg: transparent;
    --sgds-btn-disabled-border-color: #0950df;
    --sgds-gradient: none;
  }
  .btn-outline-warning {
    --button-color: #88500d;
    --button-border-color: #88500d;
    --sgds-btn-hover-color: #fff;
    --sgds-btn-hover-bg: #88500d;
   --button-hover-border-color: #88500d;
    --sgds-btn-focus-shadow-rgb: 136, 80, 13;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: #88500d;
    --sgds-btn-active-border-color: #88500d;
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: #88500d;
    --sgds-btn-disabled-bg: transparent;
    --sgds-btn-disabled-border-color: #88500d;
    --sgds-gradient: none;
  }
  .btn-outline-danger {
    --button-color: #b6220d;
    --button-border-color: #b6220d;
    --sgds-btn-hover-color: #fff;
    --sgds-btn-hover-bg: #b6220d;
    --button-hover-border-color: #b6220d;
    --sgds-btn-focus-shadow-rgb: 182, 34, 13;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: #b6220d;
    --sgds-btn-active-border-color: #b6220d;
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: #b6220d;
    --sgds-btn-disabled-bg: transparent;
    --sgds-btn-disabled-border-color: #b6220d;
    --sgds-gradient: none;
  }
  .btn-outline-light {
    --button-color: #b1b1b1;
    --button-border-color: #b1b1b1;
    --sgds-btn-hover-color: #000;
    --sgds-btn-hover-bg: #b1b1b1;
   --button-hover-border-color: #b1b1b1;
    --sgds-btn-focus-shadow-rgb: 177, 177, 177;
    --sgds-btn-active-color: #000;
    --sgds-btn-active-bg: #b1b1b1;
    --sgds-btn-active-border-color: #b1b1b1;
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: #b1b1b1;
    --sgds-btn-disabled-bg: transparent;
    --sgds-btn-disabled-border-color: #b1b1b1;
    --sgds-gradient: none;
  }
  .btn-outline-dark {
    --button-color: #252525;
    --button-border-color: #252525;
    --sgds-btn-hover-color: #fff;
    --sgds-btn-hover-bg: #252525;
   --button-hover-border-color: #252525;
    --sgds-btn-focus-shadow-rgb: 37, 37, 37;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: #252525;
    --sgds-btn-active-border-color: #252525;
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: #252525;
    --sgds-btn-disabled-bg: transparent;
    --sgds-btn-disabled-border-color: #252525;
    --sgds-gradient: none;
  }
  .btn-link {
    --button-font-weight: 400;
    --button-color: var(--sgds-link-color);
    --button-bg: transparent;
    --button-border-color: transparent;
    --sgds-btn-hover-color: var(--sgds-link-hover-color);
   --button-hover-border-color: transparent;
    --sgds-btn-active-color: var(--sgds-link-hover-color);
    --sgds-btn-active-border-color: transparent;
    --sgds-btn-disabled-color: #5d5d5d;
    --sgds-btn-disabled-border-color: transparent;
    --button-box-shadow: 0 0 0 #000;
    --sgds-btn-focus-shadow-rgb: 46, 106, 228;
    text-decoration: underline;
  }
  .btn-link:focus-visible {
    color: var(--button-color);
  }
  .btn-link:hover {
    color: var(--sgds-btn-hover-color);
  }
  .btn-lg {
    --button-padding-y: 0.5rem;
    --button-padding-x: 1rem;
   --button-font-size: 1.25rem;
    --button-border-radius: var(--sgds-border-radius-lg);
  }
  .btn-sm {
    --button-padding-y: 0.25rem;
    --button-padding-x: 0.5rem;
   --button-font-size: 0.875rem;
    --button-border-radius: var(--sgds-border-radius-sm);
  }
  /* [data-bs-theme="dark"] .btn-primary {
    --button-color: var(--sgds-white);
    --button-bg: var(--sgds-primary-bg-dark);
    --button-border-color: var(--sgds-primary-bg-dark);
    --sgds-btn-link-color: var(--sgds-primary-body-color);
    --sgds-btn-hover-color: var(--sgds-body-bg);
    --sgds-btn-hover-bg: var(--sgds-primary-bg-hover-dark);
   --button-hover-border-color: var(--sgds-primary-bg-hover-dark);
    --sgds-btn-focus-shadow-rgb: var(--sgds-primary-bg-dark-rgb);
    --sgds-btn-active-color: var(--sgds-body-bg);
    --sgds-btn-active-bg: var(--sgds-primary-bg-hover-dark);
    --sgds-btn-active-border-color: var(--sgds-primary-bg-hover-dark);
    --sgds-btn-active-shadow: none;
    --sgds-btn-disabled-color: var(--sgds-body-bg);
    --sgds-btn-disabled-bg: var(--sgds-primary-bg-dark);
    --sgds-btn-disabled-border-color: var(--sgds-primary-bg-dark);
  } */
  [data-bs-theme="dark"] .btn-outline-primary {
    --button-color: var(--sgds-primary-text-emphasis);
    --button-bg: var(--sgds-primary-bg-subtle);
    --button-border-color: var(--sgds-primary-border-subtle);
    --sgds-btn-hover-color: var(--sgds-body-bg);
    --sgds-btn-hover-bg: var(--sgds-primary-bg-hover-dark);
   --button-hover-border-color: var(--sgds-primary-bg-dark);
    --sgds-btn-focus-shadow-rgb: 89, 37, 220;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: var(--sgds-primary-outline-dark);
    --sgds-btn-active-border-color: var(--sgds-primary-outline-dark);
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: var(--sgds-primary-outline-dark);
    --sgds-btn-disabled-bg: transparent;
    --sgds-btn-disabled-border-color: var(--sgds-primary-outline-dark);
  }
  [data-bs-theme="dark"] .btn-secondary {
    --button-color: var(--sgds-white);
    --button-bg: var(--sgds-secondary-bg-dark);
    --button-border-color: var(--sgds-secondary-bg-dark);
    --sgds-btn-link-color: var(--sgds-secondary-body-color);
    --sgds-btn-hover-color: var(--sgds-body-bg);
    --sgds-btn-hover-bg: var(--sgds-secondary-bg-hover-dark);
   --button-hover-border-color: var(--sgds-secondary-bg-hover-dark);
    --sgds-btn-focus-shadow-rgb: var(--sgds-secondary-bg-dark-rgb);
    --sgds-btn-active-color: var(--sgds-body-bg);
    --sgds-btn-active-bg: var(--sgds-secondary-bg-hover-dark);
    --sgds-btn-active-border-color: var(--sgds-secondary-bg-hover-dark);
    --sgds-btn-active-shadow: none;
    --sgds-btn-disabled-color: var(--sgds-body-bg);
    --sgds-btn-disabled-bg: var(--sgds-secondary-bg-dark);
    --sgds-btn-disabled-border-color: var(--sgds-secondary-bg-dark);
  }
  [data-bs-theme="dark"] .btn-outline-secondary {
    --button-color: var(--sgds-secondary-text-emphasis);
    --button-bg: var(--sgds-secondary-bg-subtle);
    --button-border-color: var(--sgds-secondary-border-subtle);
    --sgds-btn-hover-color: var(--sgds-body-bg);
    --sgds-btn-hover-bg: var(--sgds-secondary-bg-hover-dark);
   --button-hover-border-color: var(--sgds-secondary-bg-dark);
    --sgds-btn-focus-shadow-rgb: 89, 37, 220;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: var(--sgds-secondary-outline-dark);
    --sgds-btn-active-border-color: var(--sgds-secondary-outline-dark);
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: var(--sgds-secondary-outline-dark);
    --sgds-btn-disabled-bg: transparent;
    --sgds-btn-disabled-border-color: var(--sgds-secondary-outline-dark);
  }
  [data-bs-theme="dark"] .btn-success {
    --button-color: var(--sgds-white);
    --button-bg: var(--sgds-success-bg-dark);
    --button-border-color: var(--sgds-success-bg-dark);
    --sgds-btn-link-color: var(--sgds-success-body-color);
    --sgds-btn-hover-color: var(--sgds-body-bg);
    --sgds-btn-hover-bg: var(--sgds-success-bg-hover-dark);
   --button-hover-border-color: var(--sgds-success-bg-hover-dark);
    --sgds-btn-focus-shadow-rgb: var(--sgds-success-bg-dark-rgb);
    --sgds-btn-active-color: var(--sgds-body-bg);
    --sgds-btn-active-bg: var(--sgds-success-bg-hover-dark);
    --sgds-btn-active-border-color: var(--sgds-success-bg-hover-dark);
    --sgds-btn-active-shadow: none;
    --sgds-btn-disabled-color: var(--sgds-body-bg);
    --sgds-btn-disabled-bg: var(--sgds-success-bg-dark);
    --sgds-btn-disabled-border-color: var(--sgds-success-bg-dark);
  }
  [data-bs-theme="dark"] .btn-outline-success {
    --button-color: var(--sgds-success-text-emphasis);
    --button-bg: var(--sgds-success-bg-subtle);
    --button-border-color: var(--sgds-success-border-subtle);
    --sgds-btn-hover-color: var(--sgds-body-bg);
    --sgds-btn-hover-bg: var(--sgds-success-bg-hover-dark);
   --button-hover-border-color: var(--sgds-success-bg-dark);
    --sgds-btn-focus-shadow-rgb: 89, 37, 220;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: var(--sgds-success-outline-dark);
    --sgds-btn-active-border-color: var(--sgds-success-outline-dark);
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: var(--sgds-success-outline-dark);
    --sgds-btn-disabled-bg: transparent;
    --sgds-btn-disabled-border-color: var(--sgds-success-outline-dark);
  }
  [data-bs-theme="dark"] .btn-info {
    --button-color: var(--sgds-white);
    --button-bg: var(--sgds-info-bg-dark);
    --button-border-color: var(--sgds-info-bg-dark);
    --sgds-btn-link-color: var(--sgds-info-body-color);
    --sgds-btn-hover-color: var(--sgds-body-bg);
    --sgds-btn-hover-bg: var(--sgds-info-bg-hover-dark);
   --button-hover-border-color: var(--sgds-info-bg-hover-dark);
    --sgds-btn-focus-shadow-rgb: var(--sgds-info-bg-dark-rgb);
    --sgds-btn-active-color: var(--sgds-body-bg);
    --sgds-btn-active-bg: var(--sgds-info-bg-hover-dark);
    --sgds-btn-active-border-color: var(--sgds-info-bg-hover-dark);
    --sgds-btn-active-shadow: none;
    --sgds-btn-disabled-color: var(--sgds-body-bg);
    --sgds-btn-disabled-bg: var(--sgds-info-bg-dark);
    --sgds-btn-disabled-border-color: var(--sgds-info-bg-dark);
  }
  [data-bs-theme="dark"] .btn-outline-info {
    --button-color: var(--sgds-info-text-emphasis);
    --button-bg: var(--sgds-info-bg-subtle);
    --button-border-color: var(--sgds-info-border-subtle);
    --sgds-btn-hover-color: var(--sgds-body-bg);
    --sgds-btn-hover-bg: var(--sgds-info-bg-hover-dark);
   --button-hover-border-color: var(--sgds-info-bg-dark);
    --sgds-btn-focus-shadow-rgb: 89, 37, 220;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: var(--sgds-info-outline-dark);
    --sgds-btn-active-border-color: var(--sgds-info-outline-dark);
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: var(--sgds-info-outline-dark);
    --sgds-btn-disabled-bg: transparent;
    --sgds-btn-disabled-border-color: var(--sgds-info-outline-dark);
  }
  [data-bs-theme="dark"] .btn-warning {
    --button-color: var(--sgds-white);
    --button-bg: var(--sgds-warning-bg-dark);
    --button-border-color: var(--sgds-warning-bg-dark);
    --sgds-btn-link-color: var(--sgds-warning-body-color);
    --sgds-btn-hover-color: var(--sgds-body-bg);
    --sgds-btn-hover-bg: var(--sgds-warning-bg-hover-dark);
   --button-hover-border-color: var(--sgds-warning-bg-hover-dark);
    --sgds-btn-focus-shadow-rgb: var(--sgds-warning-bg-dark-rgb);
    --sgds-btn-active-color: var(--sgds-body-bg);
    --sgds-btn-active-bg: var(--sgds-warning-bg-hover-dark);
    --sgds-btn-active-border-color: var(--sgds-warning-bg-hover-dark);
    --sgds-btn-active-shadow: none;
    --sgds-btn-disabled-color: var(--sgds-body-bg);
    --sgds-btn-disabled-bg: var(--sgds-warning-bg-dark);
    --sgds-btn-disabled-border-color: var(--sgds-warning-bg-dark);
  }
  [data-bs-theme="dark"] .btn-outline-warning {
    --button-color: var(--sgds-warning-text-emphasis);
    --button-bg: var(--sgds-warning-bg-subtle);
    --button-border-color: var(--sgds-warning-border-subtle);
    --sgds-btn-hover-color: var(--sgds-body-bg);
    --sgds-btn-hover-bg: var(--sgds-warning-bg-hover-dark);
   --button-hover-border-color: var(--sgds-warning-bg-dark);
    --sgds-btn-focus-shadow-rgb: 89, 37, 220;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: var(--sgds-warning-outline-dark);
    --sgds-btn-active-border-color: var(--sgds-warning-outline-dark);
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: var(--sgds-warning-outline-dark);
    --sgds-btn-disabled-bg: transparent;
    --sgds-btn-disabled-border-color: var(--sgds-warning-outline-dark);
  }
  [data-bs-theme="dark"] .btn-danger {
    --button-color: var(--sgds-white);
    --button-bg: var(--sgds-danger-bg-dark);
    --button-border-color: var(--sgds-danger-bg-dark);
    --sgds-btn-link-color: var(--sgds-danger-body-color);
    --sgds-btn-hover-color: var(--sgds-body-bg);
    --sgds-btn-hover-bg: var(--sgds-danger-bg-hover-dark);
   --button-hover-border-color: var(--sgds-danger-bg-hover-dark);
    --sgds-btn-focus-shadow-rgb: var(--sgds-danger-bg-dark-rgb);
    --sgds-btn-active-color: var(--sgds-body-bg);
    --sgds-btn-active-bg: var(--sgds-danger-bg-hover-dark);
    --sgds-btn-active-border-color: var(--sgds-danger-bg-hover-dark);
    --sgds-btn-active-shadow: none;
    --sgds-btn-disabled-color: var(--sgds-body-bg);
    --sgds-btn-disabled-bg: var(--sgds-danger-bg-dark);
    --sgds-btn-disabled-border-color: var(--sgds-danger-bg-dark);
  }
  [data-bs-theme="dark"] .btn-outline-danger {
    --button-color: var(--sgds-danger-text-emphasis);
    --button-bg: var(--sgds-danger-bg-subtle);
    --button-border-color: var(--sgds-danger-border-subtle);
    --sgds-btn-hover-color: var(--sgds-body-bg);
    --sgds-btn-hover-bg: var(--sgds-danger-bg-hover-dark);
   --button-hover-border-color: var(--sgds-danger-bg-dark);
    --sgds-btn-focus-shadow-rgb: 89, 37, 220;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: var(--sgds-danger-outline-dark);
    --sgds-btn-active-border-color: var(--sgds-danger-outline-dark);
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: var(--sgds-danger-outline-dark);
    --sgds-btn-disabled-bg: transparent;
    --sgds-btn-disabled-border-color: var(--sgds-danger-outline-dark);
  }
  [data-bs-theme="dark"] .btn-light {
    --button-color: var(--sgds-white);
    --button-bg: var(--sgds-light-bg-dark);
    --button-border-color: var(--sgds-light-bg-dark);
    --sgds-btn-link-color: var(--sgds-light-body-color);
    --sgds-btn-hover-color: var(--sgds-body-bg);
    --sgds-btn-hover-bg: var(--sgds-light-bg-hover-dark);
   --button-hover-border-color: var(--sgds-light-bg-hover-dark);
    --sgds-btn-focus-shadow-rgb: var(--sgds-light-bg-dark-rgb);
    --sgds-btn-active-color: var(--sgds-body-bg);
    --sgds-btn-active-bg: var(--sgds-light-bg-hover-dark);
    --sgds-btn-active-border-color: var(--sgds-light-bg-hover-dark);
    --sgds-btn-active-shadow: none;
    --sgds-btn-disabled-color: var(--sgds-body-bg);
    --sgds-btn-disabled-bg: var(--sgds-light-bg-dark);
    --sgds-btn-disabled-border-color: var(--sgds-light-bg-dark);
    --button-bg: var(--sgds-light);
  }
  [data-bs-theme="dark"] .btn-outline-light {
    --button-color: var(--sgds-light-text-emphasis);
    --button-bg: var(--sgds-light-bg-subtle);
    --button-border-color: var(--sgds-light-border-subtle);
    --sgds-btn-hover-color: var(--sgds-body-bg);
    --sgds-btn-hover-bg: var(--sgds-light-bg-hover-dark);
   --button-hover-border-color: var(--sgds-light-bg-dark);
    --sgds-btn-focus-shadow-rgb: 89, 37, 220;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: var(--sgds-light-outline-dark);
    --sgds-btn-active-border-color: var(--sgds-light-outline-dark);
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: var(--sgds-light-outline-dark);
    --sgds-btn-disabled-bg: transparent;
    --sgds-btn-disabled-border-color: var(--sgds-light-outline-dark);
  }
  [data-bs-theme="dark"] .btn-dark {
    --button-color: var(--sgds-white);
    --button-bg: var(--sgds-dark-bg-dark);
    --button-border-color: var(--sgds-dark-bg-dark);
    --sgds-btn-link-color: var(--sgds-dark-body-color);
    --sgds-btn-hover-color: var(--sgds-body-bg);
    --sgds-btn-hover-bg: var(--sgds-dark-bg-hover-dark);
   --button-hover-border-color: var(--sgds-dark-bg-hover-dark);
    --sgds-btn-focus-shadow-rgb: var(--sgds-dark-bg-dark-rgb);
    --sgds-btn-active-color: var(--sgds-body-bg);
    --sgds-btn-active-bg: var(--sgds-dark-bg-hover-dark);
    --sgds-btn-active-border-color: var(--sgds-dark-bg-hover-dark);
    --sgds-btn-active-shadow: none;
    --sgds-btn-disabled-color: var(--sgds-body-bg);
    --sgds-btn-disabled-bg: var(--sgds-dark-bg-dark);
    --sgds-btn-disabled-border-color: var(--sgds-dark-bg-dark);
    --sgds-btn-hover-color: var(--sgds-dark-text-emphasis);
  }
  [data-bs-theme="dark"] .btn-outline-dark {
    --button-color: var(--sgds-dark-text-emphasis);
    --button-bg: var(--sgds-dark-bg-subtle);
    --button-border-color: var(--sgds-dark-border-subtle);
    --sgds-btn-hover-color: var(--sgds-body-bg);
    --sgds-btn-hover-bg: var(--sgds-dark-bg-hover-dark);
   --button-hover-border-color: var(--sgds-dark-bg-dark);
    --sgds-btn-focus-shadow-rgb: 89, 37, 220;
    --sgds-btn-active-color: #fff;
    --sgds-btn-active-bg: var(--sgds-dark-outline-dark);
    --sgds-btn-active-border-color: var(--sgds-dark-outline-dark);
    --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --sgds-btn-disabled-color: var(--sgds-dark-outline-dark);
    --sgds-btn-disabled-bg: transparent;
    --sgds-btn-disabled-border-color: var(--sgds-dark-outline-dark);
    --sgds-btn-hover-color: var(--sgds-dark-text-emphasis);
  }
  .btn-light {
    --button-bg: var(--sgds-gray-100);
    --button-border-color: var(--sgds-gray-100);
  }
  .btn-outline-light {
    --button-color: var(--sgds-gray-400);
  }
  .btn-sm + .dropdown-toggle-split {
    padding-left: 0.375rem;
    padding-right: 0.375rem;
  }
  .btn-lg + .dropdown-toggle-split {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .btn .badge {
    position: relative;
    top: -1px;
  }
`;

// export default css`
//   :host {
//     display: inline-block;
//     --button-padding-x: 1rem;
//     --button-padding-y: 0.4375rem;
//     --button-font-family: ;
//    --button-font-size: 1rem;
//     --button-font-weight: 400;
//     --button-line-height: 2;
//     --button-color: var(--sgds-body-color);
//     --button-bg: transparent;
//     --button-border-width: 1px;
//     --button-border-color: transparent;
//     --button-border-radius: var(--sgds-border-radius);
//    --button-hover-border-color: transparent;
//     --button-box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
//     --button-disabled-opacity: 0.65;
//    --button-focus-box-shadow: 0 0 0 0.25rem rgba(var(--sgds-btn-focus-shadow-rgb), 0.5);
//   }
//   .btn {
//     background-color: var(--button-bg);
//     border: var(--button-border-width) solid var(--button-border-color);
//     border-radius: var(--button-border-radius);
//     color: var(--button-color);
//     cursor: pointer;
//     display: inline-block;
//     font-family: var(--button-font-family);
//     font-size: var(--sgds-btn-font-size);
//     font-weight: var(--button-font-weight);
//     line-height: var(--button-line-height);
//     padding: var(--button-padding-y) var(--button-padding-x);
//     text-align: center;
//     text-decoration: none;
//     transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
//       box-shadow 0.15s ease-in-out;
//     user-select: none;
//     vertical-align: middle;
//   }
//   @media (prefers-reduced-motion: reduce) {
//     .btn {
//       transition: none;
//     }
//   }
//   .btn:hover {
//     background-color: var(--sgds-btn-hover-bg);
//     border-color: var(--sgds-btn-hover-border-color);
//     color: var(--sgds-btn-hover-color);
//   }
//   .btn-check + .btn:hover {
//     background-color: var(--button-bg);
//     border-color: var(--button-border-color);
//     color: var(--button-color);
//   }
//   .btn:focus-visible {
//     background-color: var(--sgds-btn-hover-bg);
//     border-color: var(--sgds-btn-hover-border-color);
//     box-shadow: var(--sgds-btn-focus-box-shadow);
//     color: var(--sgds-btn-hover-color);
//     outline: 0;
//   }
//   .btn-check:focus-visible + .btn {
//     border-color: var(--sgds-btn-hover-border-color);
//     box-shadow: var(--sgds-btn-focus-box-shadow);
//     outline: 0;
//   }
//   .btn-check:checked + .btn,
//   .btn.active,
//   .btn.show,
//   .btn:first-child:active,
//   :not(.btn-check) + .btn:active {
//     background-color: var(--sgds-btn-active-bg);
//     border-color: var(--sgds-btn-active-border-color);
//     color: var(--sgds-btn-active-color);
//   }
//   .btn-check:checked + .btn:focus-visible,
//   .btn.active:focus-visible,
//   .btn.show:focus-visible,
//   .btn:first-child:active:focus-visible,
//   :not(.btn-check) + .btn:active:focus-visible {
//     box-shadow: var(--sgds-btn-focus-box-shadow);
//   }
//   .btn.disabled,
//   .btn:disabled,
//   fieldset:disabled .btn {
//     background-color: var(--sgds-btn-disabled-bg);
//     border-color: var(--sgds-btn-disabled-border-color);
//     color: var(--sgds-btn-disabled-color);
//     opacity: var(--button-disabled-opacity);
//     pointer-events: none;
//   }
//   .btn-primary {
//     --button-color: #fff;
//     --button-bg: #5942db;
//     --button-border-color: #5942db;
//     --sgds-btn-hover-color: #fff;
//     --sgds-btn-hover-bg: #4c38ba;
//    --button-hover-border-color: #4735af;
//     --sgds-btn-focus-shadow-rgb: 114, 94, 224;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: #4735af;
//     --sgds-btn-active-border-color: #4332a4;
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: #fff;
//     --sgds-btn-disabled-bg: #5942db;
//     --sgds-btn-disabled-border-color: #5942db;
//   }
//   .btn-secondary {
//     --button-color: #fff;
//     --button-bg: #0a6679;
//     --button-border-color: #0a6679;
//     --sgds-btn-hover-color: #fff;
//     --sgds-btn-hover-bg: #095767;
//    --button-hover-border-color: #085261;
//     --sgds-btn-focus-shadow-rgb: 47, 125, 141;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: #085261;
//     --sgds-btn-active-border-color: #084d5b;
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: #fff;
//     --sgds-btn-disabled-bg: #0a6679;
//     --sgds-btn-disabled-border-color: #0a6679;
//   }
//   .btn-success {
//     --button-color: #fff;
//     --button-bg: #066e0e;
//     --button-border-color: #066e0e;
//     --sgds-btn-hover-color: #fff;
//     --sgds-btn-hover-bg: #055e0c;
//    --button-hover-border-color: #05580b;
//     --sgds-btn-focus-shadow-rgb: 43, 132, 50;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: #05580b;
//     --sgds-btn-active-border-color: #05530b;
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: #fff;
//     --sgds-btn-disabled-bg: #066e0e;
//     --sgds-btn-disabled-border-color: #066e0e;
//   }
//   .btn-info {
//     --button-color: #fff;
//     --button-bg: #0950df;
//     --button-border-color: #0950df;
//     --sgds-btn-hover-color: #fff;
//     --sgds-btn-hover-bg: #0844be;
//    --button-hover-border-color: #0740b2;
//     --sgds-btn-focus-shadow-rgb: 46, 106, 228;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: #0740b2;
//     --sgds-btn-active-border-color: #073ca7;
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: #fff;
//     --sgds-btn-disabled-bg: #0950df;
//     --sgds-btn-disabled-border-color: #0950df;
//   }
//   .btn-warning {
//     --button-color: #fff;
//     --button-bg: #88500d;
//     --button-border-color: #88500d;
//     --sgds-btn-hover-color: #fff;
//     --sgds-btn-hover-bg: #74440b;
//    --button-hover-border-color: #6d400a;
//     --sgds-btn-focus-shadow-rgb: 154, 106, 49;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: #6d400a;
//     --sgds-btn-active-border-color: #663c0a;
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: #fff;
//     --sgds-btn-disabled-bg: #88500d;
//     --sgds-btn-disabled-border-color: #88500d;
//   }
//   .btn-danger {
//     --button-color: #fff;
//     --button-bg: #b6220d;
//     --button-border-color: #b6220d;
//     --sgds-btn-hover-color: #fff;
//     --sgds-btn-hover-bg: #9b1d0b;
//    --button-hover-border-color: #921b0a;
//     --sgds-btn-focus-shadow-rgb: 193, 67, 49;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: #921b0a;
//     --sgds-btn-active-border-color: #891a0a;
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: #fff;
//     --sgds-btn-disabled-bg: #b6220d;
//     --sgds-btn-disabled-border-color: #b6220d;
//   }
//   .btn-light {
//     --button-color: #000;
//     --button-bg: #b1b1b1;
//     --button-border-color: #b1b1b1;
//     --sgds-btn-hover-color: #000;
//     --sgds-btn-hover-bg: #969696;
//    --button-hover-border-color: #8e8e8e;
//     --sgds-btn-focus-shadow-rgb: 150, 150, 150;
//     --sgds-btn-active-color: #000;
//     --sgds-btn-active-bg: #8e8e8e;
//     --sgds-btn-active-border-color: #858585;
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: #000;
//     --sgds-btn-disabled-bg: #b1b1b1;
//     --sgds-btn-disabled-border-color: #b1b1b1;
//   }
//   .btn-dark {
//     --button-color: #fff;
//     --button-bg: #252525;
//     --button-border-color: #252525;
//     --sgds-btn-hover-color: #fff;
//     --sgds-btn-hover-bg: #464646;
//    --button-hover-border-color: #3b3b3b;
//     --sgds-btn-focus-shadow-rgb: 70, 70, 70;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: #515151;
//     --sgds-btn-active-border-color: #3b3b3b;
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: #fff;
//     --sgds-btn-disabled-bg: #252525;
//     --sgds-btn-disabled-border-color: #252525;
//   }
//   .btn-outline-primary {
//     --button-color: #5942db;
//     --button-border-color: #5942db;
//     --sgds-btn-hover-color: #fff;
//     --sgds-btn-hover-bg: #5942db;
//    --button-hover-border-color: #5942db;
//     --sgds-btn-focus-shadow-rgb: 89, 66, 219;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: #5942db;
//     --sgds-btn-active-border-color: #5942db;
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: #5942db;
//     --sgds-btn-disabled-bg: transparent;
//     --sgds-btn-disabled-border-color: #5942db;
//     --sgds-gradient: none;
//   }
//   .btn-outline-secondary {
//     --button-color: #0a6679;
//     --button-border-color: #0a6679;
//     --sgds-btn-hover-color: #fff;
//     --sgds-btn-hover-bg: #0a6679;
//    --button-hover-border-color: #0a6679;
//     --sgds-btn-focus-shadow-rgb: 10, 102, 121;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: #0a6679;
//     --sgds-btn-active-border-color: #0a6679;
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: #0a6679;
//     --sgds-btn-disabled-bg: transparent;
//     --sgds-btn-disabled-border-color: #0a6679;
//     --sgds-gradient: none;
//   }
//   .btn-outline-success {
//     --button-color: #066e0e;
//     --button-border-color: #066e0e;
//     --sgds-btn-hover-color: #fff;
//     --sgds-btn-hover-bg: #066e0e;
//    --button-hover-border-color: #066e0e;
//     --sgds-btn-focus-shadow-rgb: 6, 110, 14;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: #066e0e;
//     --sgds-btn-active-border-color: #066e0e;
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: #066e0e;
//     --sgds-btn-disabled-bg: transparent;
//     --sgds-btn-disabled-border-color: #066e0e;
//     --sgds-gradient: none;
//   }
//   .btn-outline-info {
//     --button-color: #0950df;
//     --button-border-color: #0950df;
//     --sgds-btn-hover-color: #fff;
//     --sgds-btn-hover-bg: #0950df;
//    --button-hover-border-color: #0950df;
//     --sgds-btn-focus-shadow-rgb: 9, 80, 223;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: #0950df;
//     --sgds-btn-active-border-color: #0950df;
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: #0950df;
//     --sgds-btn-disabled-bg: transparent;
//     --sgds-btn-disabled-border-color: #0950df;
//     --sgds-gradient: none;
//   }
//   .btn-outline-warning {
//     --button-color: #88500d;
//     --button-border-color: #88500d;
//     --sgds-btn-hover-color: #fff;
//     --sgds-btn-hover-bg: #88500d;
//    --button-hover-border-color: #88500d;
//     --sgds-btn-focus-shadow-rgb: 136, 80, 13;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: #88500d;
//     --sgds-btn-active-border-color: #88500d;
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: #88500d;
//     --sgds-btn-disabled-bg: transparent;
//     --sgds-btn-disabled-border-color: #88500d;
//     --sgds-gradient: none;
//   }
//   .btn-outline-danger {
//     --button-color: #b6220d;
//     --button-border-color: #b6220d;
//     --sgds-btn-hover-color: #fff;
//     --sgds-btn-hover-bg: #b6220d;
//    --button-hover-border-color: #b6220d;
//     --sgds-btn-focus-shadow-rgb: 182, 34, 13;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: #b6220d;
//     --sgds-btn-active-border-color: #b6220d;
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: #b6220d;
//     --sgds-btn-disabled-bg: transparent;
//     --sgds-btn-disabled-border-color: #b6220d;
//     --sgds-gradient: none;
//   }
//   .btn-outline-light {
//     --button-color: #b1b1b1;
//     --button-border-color: #b1b1b1;
//     --sgds-btn-hover-color: #000;
//     --sgds-btn-hover-bg: #b1b1b1;
//    --button-hover-border-color: #b1b1b1;
//     --sgds-btn-focus-shadow-rgb: 177, 177, 177;
//     --sgds-btn-active-color: #000;
//     --sgds-btn-active-bg: #b1b1b1;
//     --sgds-btn-active-border-color: #b1b1b1;
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: #b1b1b1;
//     --sgds-btn-disabled-bg: transparent;
//     --sgds-btn-disabled-border-color: #b1b1b1;
//     --sgds-gradient: none;
//   }
//   .btn-outline-dark {
//     --button-color: #252525;
//     --button-border-color: #252525;
//     --sgds-btn-hover-color: #fff;
//     --sgds-btn-hover-bg: #252525;
//    --button-hover-border-color: #252525;
//     --sgds-btn-focus-shadow-rgb: 37, 37, 37;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: #252525;
//     --sgds-btn-active-border-color: #252525;
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: #252525;
//     --sgds-btn-disabled-bg: transparent;
//     --sgds-btn-disabled-border-color: #252525;
//     --sgds-gradient: none;
//   }
//   .btn-link {
//     --button-font-weight: 400;
//     --button-color: var(--sgds-link-color);
//     --button-bg: transparent;
//     --button-border-color: transparent;
//     --sgds-btn-hover-color: var(--sgds-link-hover-color);
//    --button-hover-border-color: transparent;
//     --sgds-btn-active-color: var(--sgds-link-hover-color);
//     --sgds-btn-active-border-color: transparent;
//     --sgds-btn-disabled-color: #5d5d5d;
//     --sgds-btn-disabled-border-color: transparent;
//     --button-box-shadow: 0 0 0 #000;
//     --sgds-btn-focus-shadow-rgb: 46, 106, 228;
//     text-decoration: underline;
//   }
//   .btn-link:focus-visible {
//     color: var(--button-color);
//   }
//   .btn-link:hover {
//     color: var(--sgds-btn-hover-color);
//   }
//   .btn-lg {
//     --button-padding-y: 0.5rem;
//     --button-padding-x: 1rem;
//    --button-font-size: 1.25rem;
//     --button-border-radius: var(--sgds-border-radius-lg);
//   }
//   .btn-sm {
//     --button-padding-y: 0.25rem;
//     --button-padding-x: 0.5rem;
//    --button-font-size: 0.875rem;
//     --button-border-radius: var(--sgds-border-radius-sm);
//   }
//   [data-bs-theme="dark"] .btn-primary {
//     --button-color: var(--sgds-white);
//     --button-bg: var(--sgds-primary-bg-dark);
//     --button-border-color: var(--sgds-primary-bg-dark);
//     --sgds-btn-link-color: var(--sgds-primary-body-color);
//     --sgds-btn-hover-color: var(--sgds-body-bg);
//     --sgds-btn-hover-bg: var(--sgds-primary-bg-hover-dark);
//    --button-hover-border-color: var(--sgds-primary-bg-hover-dark);
//     --sgds-btn-focus-shadow-rgb: var(--sgds-primary-bg-dark-rgb);
//     --sgds-btn-active-color: var(--sgds-body-bg);
//     --sgds-btn-active-bg: var(--sgds-primary-bg-hover-dark);
//     --sgds-btn-active-border-color: var(--sgds-primary-bg-hover-dark);
//     --sgds-btn-active-shadow: none;
//     --sgds-btn-disabled-color: var(--sgds-body-bg);
//     --sgds-btn-disabled-bg: var(--sgds-primary-bg-dark);
//     --sgds-btn-disabled-border-color: var(--sgds-primary-bg-dark);
//   }
//   [data-bs-theme="dark"] .btn-outline-primary {
//     --button-color: var(--sgds-primary-text-emphasis);
//     --button-bg: var(--sgds-primary-bg-subtle);
//     --button-border-color: var(--sgds-primary-border-subtle);
//     --sgds-btn-hover-color: var(--sgds-body-bg);
//     --sgds-btn-hover-bg: var(--sgds-primary-bg-hover-dark);
//    --button-hover-border-color: var(--sgds-primary-bg-dark);
//     --sgds-btn-focus-shadow-rgb: 89, 37, 220;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: var(--sgds-primary-outline-dark);
//     --sgds-btn-active-border-color: var(--sgds-primary-outline-dark);
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: var(--sgds-primary-outline-dark);
//     --sgds-btn-disabled-bg: transparent;
//     --sgds-btn-disabled-border-color: var(--sgds-primary-outline-dark);
//   }
//   [data-bs-theme="dark"] .btn-secondary {
//     --button-color: var(--sgds-white);
//     --button-bg: var(--sgds-secondary-bg-dark);
//     --button-border-color: var(--sgds-secondary-bg-dark);
//     --sgds-btn-link-color: var(--sgds-secondary-body-color);
//     --sgds-btn-hover-color: var(--sgds-body-bg);
//     --sgds-btn-hover-bg: var(--sgds-secondary-bg-hover-dark);
//    --button-hover-border-color: var(--sgds-secondary-bg-hover-dark);
//     --sgds-btn-focus-shadow-rgb: var(--sgds-secondary-bg-dark-rgb);
//     --sgds-btn-active-color: var(--sgds-body-bg);
//     --sgds-btn-active-bg: var(--sgds-secondary-bg-hover-dark);
//     --sgds-btn-active-border-color: var(--sgds-secondary-bg-hover-dark);
//     --sgds-btn-active-shadow: none;
//     --sgds-btn-disabled-color: var(--sgds-body-bg);
//     --sgds-btn-disabled-bg: var(--sgds-secondary-bg-dark);
//     --sgds-btn-disabled-border-color: var(--sgds-secondary-bg-dark);
//   }
//   [data-bs-theme="dark"] .btn-outline-secondary {
//     --button-color: var(--sgds-secondary-text-emphasis);
//     --button-bg: var(--sgds-secondary-bg-subtle);
//     --button-border-color: var(--sgds-secondary-border-subtle);
//     --sgds-btn-hover-color: var(--sgds-body-bg);
//     --sgds-btn-hover-bg: var(--sgds-secondary-bg-hover-dark);
//    --button-hover-border-color: var(--sgds-secondary-bg-dark);
//     --sgds-btn-focus-shadow-rgb: 89, 37, 220;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: var(--sgds-secondary-outline-dark);
//     --sgds-btn-active-border-color: var(--sgds-secondary-outline-dark);
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: var(--sgds-secondary-outline-dark);
//     --sgds-btn-disabled-bg: transparent;
//     --sgds-btn-disabled-border-color: var(--sgds-secondary-outline-dark);
//   }
//   [data-bs-theme="dark"] .btn-success {
//     --button-color: var(--sgds-white);
//     --button-bg: var(--sgds-success-bg-dark);
//     --button-border-color: var(--sgds-success-bg-dark);
//     --sgds-btn-link-color: var(--sgds-success-body-color);
//     --sgds-btn-hover-color: var(--sgds-body-bg);
//     --sgds-btn-hover-bg: var(--sgds-success-bg-hover-dark);
//    --button-hover-border-color: var(--sgds-success-bg-hover-dark);
//     --sgds-btn-focus-shadow-rgb: var(--sgds-success-bg-dark-rgb);
//     --sgds-btn-active-color: var(--sgds-body-bg);
//     --sgds-btn-active-bg: var(--sgds-success-bg-hover-dark);
//     --sgds-btn-active-border-color: var(--sgds-success-bg-hover-dark);
//     --sgds-btn-active-shadow: none;
//     --sgds-btn-disabled-color: var(--sgds-body-bg);
//     --sgds-btn-disabled-bg: var(--sgds-success-bg-dark);
//     --sgds-btn-disabled-border-color: var(--sgds-success-bg-dark);
//   }
//   [data-bs-theme="dark"] .btn-outline-success {
//     --button-color: var(--sgds-success-text-emphasis);
//     --button-bg: var(--sgds-success-bg-subtle);
//     --button-border-color: var(--sgds-success-border-subtle);
//     --sgds-btn-hover-color: var(--sgds-body-bg);
//     --sgds-btn-hover-bg: var(--sgds-success-bg-hover-dark);
//    --button-hover-border-color: var(--sgds-success-bg-dark);
//     --sgds-btn-focus-shadow-rgb: 89, 37, 220;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: var(--sgds-success-outline-dark);
//     --sgds-btn-active-border-color: var(--sgds-success-outline-dark);
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: var(--sgds-success-outline-dark);
//     --sgds-btn-disabled-bg: transparent;
//     --sgds-btn-disabled-border-color: var(--sgds-success-outline-dark);
//   }
//   [data-bs-theme="dark"] .btn-info {
//     --button-color: var(--sgds-white);
//     --button-bg: var(--sgds-info-bg-dark);
//     --button-border-color: var(--sgds-info-bg-dark);
//     --sgds-btn-link-color: var(--sgds-info-body-color);
//     --sgds-btn-hover-color: var(--sgds-body-bg);
//     --sgds-btn-hover-bg: var(--sgds-info-bg-hover-dark);
//    --button-hover-border-color: var(--sgds-info-bg-hover-dark);
//     --sgds-btn-focus-shadow-rgb: var(--sgds-info-bg-dark-rgb);
//     --sgds-btn-active-color: var(--sgds-body-bg);
//     --sgds-btn-active-bg: var(--sgds-info-bg-hover-dark);
//     --sgds-btn-active-border-color: var(--sgds-info-bg-hover-dark);
//     --sgds-btn-active-shadow: none;
//     --sgds-btn-disabled-color: var(--sgds-body-bg);
//     --sgds-btn-disabled-bg: var(--sgds-info-bg-dark);
//     --sgds-btn-disabled-border-color: var(--sgds-info-bg-dark);
//   }
//   [data-bs-theme="dark"] .btn-outline-info {
//     --button-color: var(--sgds-info-text-emphasis);
//     --button-bg: var(--sgds-info-bg-subtle);
//     --button-border-color: var(--sgds-info-border-subtle);
//     --sgds-btn-hover-color: var(--sgds-body-bg);
//     --sgds-btn-hover-bg: var(--sgds-info-bg-hover-dark);
//    --button-hover-border-color: var(--sgds-info-bg-dark);
//     --sgds-btn-focus-shadow-rgb: 89, 37, 220;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: var(--sgds-info-outline-dark);
//     --sgds-btn-active-border-color: var(--sgds-info-outline-dark);
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: var(--sgds-info-outline-dark);
//     --sgds-btn-disabled-bg: transparent;
//     --sgds-btn-disabled-border-color: var(--sgds-info-outline-dark);
//   }
//   [data-bs-theme="dark"] .btn-warning {
//     --button-color: var(--sgds-white);
//     --button-bg: var(--sgds-warning-bg-dark);
//     --button-border-color: var(--sgds-warning-bg-dark);
//     --sgds-btn-link-color: var(--sgds-warning-body-color);
//     --sgds-btn-hover-color: var(--sgds-body-bg);
//     --sgds-btn-hover-bg: var(--sgds-warning-bg-hover-dark);
//    --button-hover-border-color: var(--sgds-warning-bg-hover-dark);
//     --sgds-btn-focus-shadow-rgb: var(--sgds-warning-bg-dark-rgb);
//     --sgds-btn-active-color: var(--sgds-body-bg);
//     --sgds-btn-active-bg: var(--sgds-warning-bg-hover-dark);
//     --sgds-btn-active-border-color: var(--sgds-warning-bg-hover-dark);
//     --sgds-btn-active-shadow: none;
//     --sgds-btn-disabled-color: var(--sgds-body-bg);
//     --sgds-btn-disabled-bg: var(--sgds-warning-bg-dark);
//     --sgds-btn-disabled-border-color: var(--sgds-warning-bg-dark);
//   }
//   [data-bs-theme="dark"] .btn-outline-warning {
//     --button-color: var(--sgds-warning-text-emphasis);
//     --button-bg: var(--sgds-warning-bg-subtle);
//     --button-border-color: var(--sgds-warning-border-subtle);
//     --sgds-btn-hover-color: var(--sgds-body-bg);
//     --sgds-btn-hover-bg: var(--sgds-warning-bg-hover-dark);
//    --button-hover-border-color: var(--sgds-warning-bg-dark);
//     --sgds-btn-focus-shadow-rgb: 89, 37, 220;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: var(--sgds-warning-outline-dark);
//     --sgds-btn-active-border-color: var(--sgds-warning-outline-dark);
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: var(--sgds-warning-outline-dark);
//     --sgds-btn-disabled-bg: transparent;
//     --sgds-btn-disabled-border-color: var(--sgds-warning-outline-dark);
//   }
//   [data-bs-theme="dark"] .btn-danger {
//     --button-color: var(--sgds-white);
//     --button-bg: var(--sgds-danger-bg-dark);
//     --button-border-color: var(--sgds-danger-bg-dark);
//     --sgds-btn-link-color: var(--sgds-danger-body-color);
//     --sgds-btn-hover-color: var(--sgds-body-bg);
//     --sgds-btn-hover-bg: var(--sgds-danger-bg-hover-dark);
//    --button-hover-border-color: var(--sgds-danger-bg-hover-dark);
//     --sgds-btn-focus-shadow-rgb: var(--sgds-danger-bg-dark-rgb);
//     --sgds-btn-active-color: var(--sgds-body-bg);
//     --sgds-btn-active-bg: var(--sgds-danger-bg-hover-dark);
//     --sgds-btn-active-border-color: var(--sgds-danger-bg-hover-dark);
//     --sgds-btn-active-shadow: none;
//     --sgds-btn-disabled-color: var(--sgds-body-bg);
//     --sgds-btn-disabled-bg: var(--sgds-danger-bg-dark);
//     --sgds-btn-disabled-border-color: var(--sgds-danger-bg-dark);
//   }
//   [data-bs-theme="dark"] .btn-outline-danger {
//     --button-color: var(--sgds-danger-text-emphasis);
//     --button-bg: var(--sgds-danger-bg-subtle);
//     --button-border-color: var(--sgds-danger-border-subtle);
//     --sgds-btn-hover-color: var(--sgds-body-bg);
//     --sgds-btn-hover-bg: var(--sgds-danger-bg-hover-dark);
//    --button-hover-border-color: var(--sgds-danger-bg-dark);
//     --sgds-btn-focus-shadow-rgb: 89, 37, 220;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: var(--sgds-danger-outline-dark);
//     --sgds-btn-active-border-color: var(--sgds-danger-outline-dark);
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: var(--sgds-danger-outline-dark);
//     --sgds-btn-disabled-bg: transparent;
//     --sgds-btn-disabled-border-color: var(--sgds-danger-outline-dark);
//   }
//   [data-bs-theme="dark"] .btn-light {
//     --button-color: var(--sgds-white);
//     --button-bg: var(--sgds-light-bg-dark);
//     --button-border-color: var(--sgds-light-bg-dark);
//     --sgds-btn-link-color: var(--sgds-light-body-color);
//     --sgds-btn-hover-color: var(--sgds-body-bg);
//     --sgds-btn-hover-bg: var(--sgds-light-bg-hover-dark);
//    --button-hover-border-color: var(--sgds-light-bg-hover-dark);
//     --sgds-btn-focus-shadow-rgb: var(--sgds-light-bg-dark-rgb);
//     --sgds-btn-active-color: var(--sgds-body-bg);
//     --sgds-btn-active-bg: var(--sgds-light-bg-hover-dark);
//     --sgds-btn-active-border-color: var(--sgds-light-bg-hover-dark);
//     --sgds-btn-active-shadow: none;
//     --sgds-btn-disabled-color: var(--sgds-body-bg);
//     --sgds-btn-disabled-bg: var(--sgds-light-bg-dark);
//     --sgds-btn-disabled-border-color: var(--sgds-light-bg-dark);
//     --button-bg: var(--sgds-light);
//   }
//   [data-bs-theme="dark"] .btn-outline-light {
//     --button-color: var(--sgds-light-text-emphasis);
//     --button-bg: var(--sgds-light-bg-subtle);
//     --button-border-color: var(--sgds-light-border-subtle);
//     --sgds-btn-hover-color: var(--sgds-body-bg);
//     --sgds-btn-hover-bg: var(--sgds-light-bg-hover-dark);
//    --button-hover-border-color: var(--sgds-light-bg-dark);
//     --sgds-btn-focus-shadow-rgb: 89, 37, 220;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: var(--sgds-light-outline-dark);
//     --sgds-btn-active-border-color: var(--sgds-light-outline-dark);
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: var(--sgds-light-outline-dark);
//     --sgds-btn-disabled-bg: transparent;
//     --sgds-btn-disabled-border-color: var(--sgds-light-outline-dark);
//   }
//   [data-bs-theme="dark"] .btn-dark {
//     --button-color: var(--sgds-white);
//     --button-bg: var(--sgds-dark-bg-dark);
//     --button-border-color: var(--sgds-dark-bg-dark);
//     --sgds-btn-link-color: var(--sgds-dark-body-color);
//     --sgds-btn-hover-color: var(--sgds-body-bg);
//     --sgds-btn-hover-bg: var(--sgds-dark-bg-hover-dark);
//    --button-hover-border-color: var(--sgds-dark-bg-hover-dark);
//     --sgds-btn-focus-shadow-rgb: var(--sgds-dark-bg-dark-rgb);
//     --sgds-btn-active-color: var(--sgds-body-bg);
//     --sgds-btn-active-bg: var(--sgds-dark-bg-hover-dark);
//     --sgds-btn-active-border-color: var(--sgds-dark-bg-hover-dark);
//     --sgds-btn-active-shadow: none;
//     --sgds-btn-disabled-color: var(--sgds-body-bg);
//     --sgds-btn-disabled-bg: var(--sgds-dark-bg-dark);
//     --sgds-btn-disabled-border-color: var(--sgds-dark-bg-dark);
//     --sgds-btn-hover-color: var(--sgds-dark-text-emphasis);
//   }
//   [data-bs-theme="dark"] .btn-outline-dark {
//     --button-color: var(--sgds-dark-text-emphasis);
//     --button-bg: var(--sgds-dark-bg-subtle);
//     --button-border-color: var(--sgds-dark-border-subtle);
//     --sgds-btn-hover-color: var(--sgds-body-bg);
//     --sgds-btn-hover-bg: var(--sgds-dark-bg-hover-dark);
//    --button-hover-border-color: var(--sgds-dark-bg-dark);
//     --sgds-btn-focus-shadow-rgb: 89, 37, 220;
//     --sgds-btn-active-color: #fff;
//     --sgds-btn-active-bg: var(--sgds-dark-outline-dark);
//     --sgds-btn-active-border-color: var(--sgds-dark-outline-dark);
//     --sgds-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --sgds-btn-disabled-color: var(--sgds-dark-outline-dark);
//     --sgds-btn-disabled-bg: transparent;
//     --sgds-btn-disabled-border-color: var(--sgds-dark-outline-dark);
//     --sgds-btn-hover-color: var(--sgds-dark-text-emphasis);
//   }
//   .btn-light {
//     --button-bg: var(--sgds-gray-100);
//     --button-border-color: var(--sgds-gray-100);
//   }
//   .btn-outline-light {
//     --button-color: var(--sgds-gray-400);
//   }
//   /*# sourceMappingURL=button.css.map*/
//   /* :host {
//     --button-padding-x: 1rem;
//     --button-padding-y: 0.4375rem;
//     --button-font-family: ;
//     --button-font-size: 1rem;
//     --button-font-weight: 400;
//     --button-line-height: 2;
//     --button-color: var(--sgds-body-color);
//     --button-bg: transparent;
//     --button-border-width: 1px;
//     --button-border-color: transparent;
//     --button-border-radius: var(--sgds-border-radius);
//     --button-hover-border-color: transparent;
//     --button-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
//     --button-disabled-opacity: 0.65;
//     --button-focus-box-shadow: 0 0 0 0.25rem;
//   }

//   .btn {
//     padding: var(--button-padding-y) var(--button-padding-x);
//     font-family: var(--button-font-family);
//     font-size: var(--button-font-size);
//     font-weight: var(--button-font-weight);
//     line-height: var(--button-line-height);
//     color: var(--button-color);
//     text-align: center;
//     text-decoration: none;
//     vertical-align: middle;
//     cursor: pointer;
//     -webkit-user-select: none;
//     -moz-user-select: none;
//     user-select: none;
//     border: var(--button-border-width) solid var(--button-border-color);
//     border-radius: var(--button-border-radius);
//     background-color: var(--button-bg);
//     transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
//       box-shadow 0.15s ease-in-out;

//     &:hover {
//       color: var(--button-hover-color);
//       background-color: var(--button-hover-bg);
//       border-color: var(--button-hover-border-color);
//     }
//   }

//   .btn-primary {
//     --button-color: #fff;
//     --button-bg: var(--sgds-primary, #5942db);
//     --button-border-color: var(--sgds-primary, #5942db);
//     --button-hover-color: #fff;
//     --button-hover-bg: color-mix(in srgb, var(--sgds-primary), black 15%); // #4c38ba;
//     --button-hover-border-color: #4735af;
//     --button-focus-shadow-rgb: 114, 94, 224;
//     --button-active-color: #fff;
//     --button-active-bg: color-mix(in srgb, var(--sgds-primary), black 20%); //#4735af;
//     --button-active-border-color: #4332a4;
//     --button-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --button-disabled-color: #fff;
//     --button-disabled-bg: var(--sgds-primary, #5942db);
//     --button-disabled-border-color: var(--sgds-primary, #5942db);
//   }

//   .btn-secondary {
//     --button-color: #fff;
//     --button-bg: var(--sgds-secondary, #0a6679);
//     --button-border-color: var(--sgds-secondary, #0a6679);
//     --button-hover-color: #fff;
//     --button-hover-bg: color-mix(in srgb, var(--sgds-secondary), black 15%); // #095767;
//     --button-hover-border-color: #085261;
//     --button-focus-shadow-rgb: 47, 125, 141;
//     --button-active-color: #fff;
//     --button-active-bg: color-mix(in srgb, var(--sgds-primary), black 20%); //#085261;
//     --button-active-border-color: #084d5b;
//     --button-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     --button-disabled-color: #fff;
//     --button-disabled-bg: var(--sgds-secondary, #0a6679);
//     --button-disabled-border-color: var(--sgds-secondary, #0a6679);
//   } */
// `;
