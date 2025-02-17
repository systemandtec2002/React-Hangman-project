import React from 'react';
import TextInputForm from './Components/TextInputForm/TextInputForm';




function App(){
  return(
    <>
     <h1 className="font-semibold text-3xl text-black-600">Welcome to Hangman</h1>
      
     <TextInputForm  onSubmit={(value) => console.log("value coming from the hidden form is ", value)}/>

     


     
     


    </>
  
  );
}

export default App;