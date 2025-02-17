import React, { useState } from 'react'; // Import useState!
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";



function TextInputForm({onSubmit}){ 

 const [value, setValue] = useState('');


 




  function handleFormSubmit(event){
event.preventDefault();
console.log("form submitted", value);
onSubmit?.(value) //if onsubmit is defined call it with value
  }

  function handleTextInputChange(event){
    event.preventDefault();
    console.log("form submitted");
    console.log(event.target.value);
    setValue(event.target.value); //whenever i type somthing it will upadata the value
      }







 return(

<form className="flex" onSubmit={handleFormSubmit}> 
<div className="mr-2 flex-1">
<TextInput
label="Enter a word or phrase"
type="password"
value={value}
onChange={handleTextInputChange}
/>
</div>

<div className="flex ">
<Button
 text="ok"
 type="submit"
/>

 </div>



 
 

  
  




</form>

 ); 
}

export default TextInputForm;




// 1:31:43