// TextInputForm.jsx
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function TextInputForm({ handleFormSubmit, handleTextInputChange, inputType, value, setInputType }) { 
    
    return (
        <form className="flex items-end mx-2" onSubmit={handleFormSubmit}>
            <div className="mr-2 flex-1">
                <TextInput
                    label="Enter a word or phrase"
                    type={inputType}
                    value={value}
                    onChange={handleTextInputChange} // Correct prop name used here
                />
            </div>

            <div>
                <Button
                    text="ok"
                    buttonType="submit"
                />
            </div>

            <div className="flex ">
                <Button
                    styleType="warning"
                    text={inputType === "password" ? "show" : "hide"}
                    onClickHandler={() => setInputType(inputType === 'password' ? 'text' : 'password')}
                />
            </div>
        </form>
    );
}

export default TextInputForm;