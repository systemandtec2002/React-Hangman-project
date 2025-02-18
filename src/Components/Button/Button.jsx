import GetButtonStyling from "./getButtonStyleType";


function Button({text, buttonType , styleType, onClickHandler}){
 
return(
 <button 

type={buttonType}
onClick={onClickHandler}

className =  {`px-3 py-2 ${GetButtonStyling(styleType)}  text-white  rounded-2xl transition-all` }
>
  {text} 
  
  </button>
  
);
}
export default Button;








 
//   const primaryButtonStyling = "bg-blue-900 border border-blue-700 hover:bg-blue-700 hover:border border-blue-700";
//   const secondaryButtonStyling = "bg-gray-900 border border-gray-700 hover:bg-blue-700 hover:border border-blue-700";
//   const warningButtonStyling = "bg-yellow-900 border border-yellow-700 hover:bg-yello-700 hover:border border-yellow-700";

//   if (styleType === 'primary') {
//     return primaryButtonStyling;
//   } else if (styleType === 'secondary') {
//     return secondaryButtonStyling;
//   } else if (styleType === 'warning') {
//     return warningButtonStyling;
//   }
//   return ""; // Return an empty string as default to avoid undefined if styleType does not match any condition
// }

// function Button({ text, buttonType }) { // Use buttonType prop
//   return (
//     <button
//       type={buttonType}
//       className={`px-3 py-2 ${getButtonStyling(buttonType)} text-white rounded-2xl transition-all`} // Use buttonType here
//     >
//       {text}
//     </button>
//   );
// }

// export default Button;