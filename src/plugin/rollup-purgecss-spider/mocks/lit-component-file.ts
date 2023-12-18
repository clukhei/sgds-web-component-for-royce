import { html } from "lit";
import { property } from "lit/decorators.js";
import SgdsElement from "../../base/sgds-element";
import styles from "./sgds-footer.scss";

export interface ColumnLinks {
  title: string;
  links: Links[];
}
export interface Links {
  href: string;
  label: string;
}

/**
 * @summary The footer contains supporting information for your service at the bottom of your website. All .gov.sg digital services shall contain a Global Footer Bar across all pages. The Global Footer Bar should include the name of the digital service, contact information, a privacy statement and the terms of use.
 *
 * @csspart footer-top - The component's footer-top section container.
 * @csspart footer-bottom - The component's footer-bottom section container.
 *
 * @cssproperty footer-top - The component's footer-top section container.
 * @cssproperty footer-bottom - The component's footer-bottom section container.
 */
export class SgdsFooter extends SgdsElement {
  static styles = [SgdsElement.styles, styles];

  /**
   * 	Sets title of SgdsFooter
   */
  @property({ type: String })
  title = "";

  /**
   * 	Sets description of SgdsFooter
   */
  @property({ type: String })
  description = "";

  /**
   * 	Sets copyrightLiner of SgdsFooter
   */
  @property({ type: String })
  copyrightLiner = "Government of Singapore";

  /**
   * Array of type
   *
   * `interface ColumnLinks { title: string; links : Links[] } interface Links { href: string; label: string; }`
   */
  @property({
    type: Array
  })
  links: ColumnLinks[] = [];

  /**
   * String date for last updated date
   */
  @property({ type: String })
  lastUpdatedDate = "";

  /**
   * 	href link for contacts
   */
  @property({ type: String })
  contactHref = "#";

  /**
   * 	href link for feedback
   */
  @property({ type: String })
  feedbackHref = "#";

  /**
   * 	href link for privacy statement
   */
  @property({ type: String })
  privacyHref = "#";

  /**
   * 	href link for terms of use
   */
  @property({ type: String })
  termsOfUseHref = "#";

  render() {
    // if description is defined
    const hasDescription = html `<div class="description">${this.description}</div>`;

    return html `<footer class="sgds footer"></footer>`;
  }
}

export default SgdsFooter;
