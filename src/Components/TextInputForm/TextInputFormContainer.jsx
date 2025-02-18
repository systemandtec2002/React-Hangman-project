
import { useState } from 'react';
import TextInputForm from "./TextInputForm";

function TextInputFormContainer({ onSubmit }) {
    const [value, setValue] = useState('');
    const [inputType, setInputType] = useState('password');

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("form submitted", value);
        onSubmit?.(value);
    }

    function handleTextInputChange(event) {
        console.log("input changed");
        console.log(event.target.value);
        setValue(event.target.value);
    }

    return (
        <TextInputForm
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange} // Corrected prop name!
            value={value}
            inputType={inputType}
            setInputType={setInputType}
        />
    );
}

export default TextInputFormContainer;