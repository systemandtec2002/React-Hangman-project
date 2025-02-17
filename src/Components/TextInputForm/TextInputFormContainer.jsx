// // container component for TextInputForm


// function TextInputFormContainer({onSubmit}){
//   const [value, setValue] = useState('');
//   const [inputType, setInputType] = useState("password")
  
//   function handlerFormSubmit(event){
//   event.preventDefault();
//   console.log('Form submited', value);
//   onSubmit?.(value); // if onSubmit is define, call it with the value
//   }
  
  
//   function handleTextInputChange(event){
//     console.log('Text Input Changed');
//     console.log('event.target.value');
//     setValue(event.target.value); // whenever i type somthing
//   }
//   return(

//     // calling presentation layer
// <TextInputForm
// handleFormSubmit={handleFormSubmit}
// handleTextInputChage={ handleTextInputChage}
// value={value}
// inputType={inputType}
// setInputType={setInputType}

// />

//   );
  
// }

// export default TextInputFormContainer;