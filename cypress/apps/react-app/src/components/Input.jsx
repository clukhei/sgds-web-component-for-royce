import SgdsInput from "@govtechsg/sgds-web-component/react/input";
import "./input.css"
export const Input = () => {
    return (
        <SgdsInput
            type="text"
            label="Label"
            hinttext="This is a hint text"
            name="email"
            inputclasses="undefined"
            pattern="undefined"
            invalidfeedback=""
            placeholder="Placeholder">
        </SgdsInput>
    )
}
