// import React from 'react';
// import TextInputForm from './Components/TextInputForm/TextInputFormContainer';
// import TextInputFormContainer from './Components/TextInputForm/TextInputFormContainer';

import {Route , Routes} from "react-router-dom"
import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";




function App(){
  return(
    <div>
     {/* <h1 className="font-semibold text-3xl text-black-600">Welcome to Hangman</h1>
      
     <TextInputFormContainer  onSubmit={(value) => console.log("value coming from the hidden form is ", value)}/> */}


     <>
     <div>
      navbar
     </div>
     <Routes>


<Route path="/play" element={<PlayGame/>}/>
<Route path="/Start" element={<StartGame/>}/>
<Route path="*" element={<div>not found</div>}/>

</Routes>
     
     </>
   







     


     
     


    </div>
  
  );
}

export default App;