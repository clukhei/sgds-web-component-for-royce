import { html } from "lit";
import { property } from "lit/decorators.js";
import SgdsElement from "../../base/sgds-element";
import footerStyle from "./footer.style";
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
  static styles = [footerStyle];

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
    const hasDescription = html` <div class="description">${this.description}</div>`;

    return html`
      <footer class="sgds footer">
        <section class="footer-top" part="footer-top">
          <div class="container-fluid">
            <div class="row footer-header">
              <div class="col col-lg-6 col-md-12">
                <div class="title">${this.title ? this.title : "Footer title"}</div>
                ${this.description ? hasDescription : undefined}
              </div>
            </div>
            <div class="row footer-items">
              ${this.links.map(
                (item: ColumnLinks) =>
                  html`
                    <div class="col-xxl-2 col-md-4 mb-3">
                      <div class="title">${item.title}</div>
                      <ul class="links">
                        ${item.links.map((link: Links) => html` <li><a href=${link.href}>${link.label}</a></li> `)}
                      </ul>
                    </div>
                  `
              )}
            </div>
            <div class="row footer-contact-links">
              <div class="col">
                <div class="d-flex justify-content-lg-end">
                  <ul>
                    <li><a href=${this.contactHref}>Contact</a></li>
                    <li><a href=${this.feedbackHref}>Feedback</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="footer-bottom" part="footer-bottom">
          <div class="container-fluid">
            <div class="row footer-mandatory-links">
              <div class="col">
                <ul>
                  <li>
                    <a href="https://tech.gov.sg/report_vulnerability" target="_blank" rel="noopener noreferrer"
                      >Report Vulnerability
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-box-arrow-up-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                        /></svg
                    ></a>
                  </li>
                  <li><a href=${this.privacyHref}>Privacy Statement</a></li>
                  <li><a href=${this.termsOfUseHref}>Terms of use</a></li>
                </ul>
              </div>
            </div>
            <div class="row footer-copyrights">
              <div class="col">
                <div class="d-flex justify-content-lg-end text-end">
                  © ${new Date().getFullYear()} ${this.copyrightLiner}<br />
                  Last Updated ${this.lastUpdatedDate}
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    `;
  }
}

export default SgdsFooter;
