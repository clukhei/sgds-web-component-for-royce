import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import SgdsElement from "../../base/sgds-element";
import styles from "./sgds-progress.scss?inline";
import { html } from "lit";
import progressStyle from "./progress.style";
/**
 * @summary Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.
 * @slot default - slot for progress-bar
 *
 * @cssprop --progress-height - Sets the height of the progress wrapper.
 */

export class SgdsProgress extends SgdsElement {
  static styles = [progressStyle, styles];

  /** Forwarded to the base wrapper of sgds-progress. Can be used to insert any utility classes such as `me-auto` */
  @property({ type: String, reflect: true }) progressClasses: string;

  render() {
    return html`
      <div
        class=${classMap({
          progress: true,
          [`${this.progressClasses}`]: this.progressClasses
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}

export default SgdsProgress;
