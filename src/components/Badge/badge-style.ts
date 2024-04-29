import { css } from "lit";
import bgVariants from "../../styles/bg-variants";
export default css`
  ${bgVariants}
  .badge {
    --sgds-badge-padding-x: 0.571em;
    --sgds-badge-padding-y: 0.285em;
    --sgds-badge-font-size: 0.875em;
    --sgds-badge-font-weight: 700;
    --sgds-badge-color: #fff;
    --sgds-badge-border-radius: var(--sgds-border-radius);
    border-radius: var(--sgds-badge-border-radius);
    color: var(--sgds-badge-color);
    display: inline-block;
    font-size: var(--sgds-badge-font-size);
    font-weight: var(--sgds-badge-font-weight);
    line-height: 1;
    padding: var(--sgds-badge-padding-y) var(--sgds-badge-padding-x);
    text-align: center;
    vertical-align: baseline;
    white-space: nowrap;
  }
  .badge:empty {
    display: none;
  }
  .btn .badge {
    position: relative;
    top: -1px;
  }
  [data-bs-theme="dark"] .badge.text-bg-primary {
    --sgds-primary-rgb: var(--sgds-primary-500-rgb);
  }
  [data-bs-theme="dark"] .badge.text-bg-secondary {
    --sgds-secondary-rgb: var(--sgds-secondary-500-rgb);
  }
  [data-bs-theme="dark"] .badge.text-bg-success {
    --sgds-success-rgb: var(--sgds-success-500-rgb);
  }
  [data-bs-theme="dark"] .badge.text-bg-info {
    --sgds-info-rgb: var(--sgds-info-500-rgb);
  }
  [data-bs-theme="dark"] .badge.text-bg-warning {
    --sgds-warning-rgb: var(--sgds-warning-500-rgb);
  }
  [data-bs-theme="dark"] .badge.text-bg-danger {
    --sgds-danger-rgb: var(--sgds-danger-500-rgb);
  }
  [data-bs-theme="dark"] .badge.text-bg-light {
    color: var(--sgds-gray-600) !important;
  }
  [data-bs-theme="dark"] .badge.text-bg-dark {
    --sgds-dark-rgb: var(--sgds-gray-500-rgb);
  }
  [data-bs-theme="dark"] .badge-outline.text-bg-primary {
    --sgds-primary-rgb: var(--sgds-primary-800-rgb);
    border: 1px solid var(--sgds-primary-500);
    color: var(--sgds-primary-200) !important;
  }
  [data-bs-theme="dark"] .badge-outline.text-bg-secondary {
    --sgds-secondary-rgb: var(--sgds-secondary-800-rgb);
    border: 1px solid var(--sgds-secondary-500);
    color: var(--sgds-secondary-200) !important;
  }
  [data-bs-theme="dark"] .badge-outline.text-bg-success {
    --sgds-success-rgb: var(--sgds-success-800-rgb);
    border: 1px solid var(--sgds-success-500);
    color: var(--sgds-success-200) !important;
  }
  [data-bs-theme="dark"] .badge-outline.text-bg-info {
    --sgds-info-rgb: var(--sgds-info-800-rgb);
    border: 1px solid var(--sgds-info-500);
    color: var(--sgds-info-200) !important;
  }
  [data-bs-theme="dark"] .badge-outline.text-bg-warning {
    --sgds-warning-rgb: var(--sgds-warning-800-rgb);
    border: 1px solid var(--sgds-warning-500);
    color: var(--sgds-warning-200) !important;
  }
  [data-bs-theme="dark"] .badge-outline.text-bg-danger {
    --sgds-danger-rgb: var(--sgds-danger-800-rgb);
    border: 1px solid var(--sgds-danger-500);
    color: var(--sgds-danger-200) !important;
  }
  [data-bs-theme="dark"] .badge-outline.text-bg-light {
    color: var(--sgds-gray-600) !important;
  }
  [data-bs-theme="dark"] .badge-outline.text-bg-dark {
    --sgds-dark-rgb: var(--sgds-gray-800-rgb);
    border: 1px solid var(--sgds-gray-500);
    color: var(--sgds-gray-200) !important;
  }
  .badge i.left,
  .badge-outline i.left {
    padding-right: 0.43em;
  }
  .badge i.right,
  .badge-outline i.right {
    padding-left: 0.43em;
  }
  .badge {
    font-size: min(0.875em, 2rem);
    line-height: 1.145;
    padding: 0.285em 0.571em;
  }
  .badge.text-bg-light {
    --sgds-light-rgb: var(--sgds-gray-100-rgb);
    color: var(--sgds-gray-600) !important;
  }
  .badge-outline {
    --sgds-badge-padding-x: 0.571em;
    --sgds-badge-padding-y: 0.285em;
    --sgds-badge-font-size: 0.875em;
    --sgds-badge-font-weight: 700;
    --sgds-badge-color: #fff;
    --sgds-badge-border-radius: var(--sgds-border-radius);
    border-radius: var(--sgds-badge-border-radius);
    display: inline-block;
    font-size: min(0.875em, 2rem);
    font-weight: var(--sgds-badge-font-weight);
    line-height: 1.145;
    padding: var(--sgds-badge-padding-y) var(--sgds-badge-padding-x);
    text-align: center;
    vertical-align: baseline;
    white-space: nowrap;
  }
  .badge-outline.text-bg-primary {
    --sgds-primary-rgb: var(--sgds-primary-100-rgb);
    border: 1px solid var(--sgds-primary-400);
    color: var(--sgds-primary-600) !important;
  }
  .badge-outline.text-bg-secondary {
    --sgds-secondary-rgb: var(--sgds-secondary-100-rgb);
    border: 1px solid var(--sgds-secondary-400);
    color: var(--sgds-secondary-600) !important;
  }
  .badge-outline.text-bg-success {
    --sgds-success-rgb: var(--sgds-success-100-rgb);
    border: 1px solid var(--sgds-success-400);
    color: var(--sgds-success-600) !important;
  }
  .badge-outline.text-bg-info {
    --sgds-info-rgb: var(--sgds-info-100-rgb);
    border: 1px solid var(--sgds-info-400);
    color: var(--sgds-info-600) !important;
  }
  .badge-outline.text-bg-warning {
    --sgds-warning-rgb: var(--sgds-warning-100-rgb);
    border: 1px solid var(--sgds-warning-400);
    color: var(--sgds-warning-600) !important;
  }
  .badge-outline.text-bg-danger {
    --sgds-danger-rgb: var(--sgds-danger-100-rgb);
    border: 1px solid var(--sgds-danger-400);
    color: var(--sgds-danger-600) !important;
  }
  .badge-outline.text-bg-light {
    --sgds-light-rgb: var(--sgds-gray-100-rgb);
    border: 1px solid var(--sgds-light);
    color: var(--sgds-gray-600) !important;
  }
  .badge-outline.text-bg-dark {
    --sgds-dark-rgb: var(--sgds-gray-100-rgb);
    border: 1px solid var(--sgds-gray-400);
    color: var(--sgds-gray-600) !important;
  }
  .rounded-pill {
    border-radius: var(--sgds-border-radius-pill) !important;
  }
`;