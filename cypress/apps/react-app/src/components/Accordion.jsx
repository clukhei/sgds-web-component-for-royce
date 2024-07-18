import SgdsAccordion from "@govtechsg/sgds-web-component/react/accordion";
import SgdsAccordionItem from "@govtechsg/sgds-web-component/react/accordion-item";
import "./accordion.css";
export const Accordion = () => {
    return (
        <>
            <SgdsAccordion>
                <SgdsAccordionItem>
                    <div  slot="accordion-header">Section 1 title</div>
                    <span slot="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    <svg slot="caret-icon" viewBox="0 0 24 24" focusable="false" className="sgds-new-caret-icon" aria-hidden="true"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                </SgdsAccordionItem>
                <SgdsAccordionItem>
                    <div  slot="accordion-header">Section 2 title</div>
                    <span slot="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    <svg slot="caret-icon" viewBox="0 0 24 24" focusable="false" className="sgds-new-caret-icon" aria-hidden="true"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                </SgdsAccordionItem>
            </SgdsAccordion>
        </>
    )
};
