//import GetButtonStyleType from "./Components/Button/GetButtonStyleType";
function getButtonStyling (styleType){

  const  primaryButtonStyling = "bg-blue-900 border border-blue-700 hover:bg-blue-700 hover:border ; border-blue-700 px-6";

  const  secondaryButtonStyling ="bg-gray-900 border border-gray-700 hover:bg-blue-700 hover:border border-blue-700";


  const  warningButtonStyling ="bg-yellow-900 border border-yellow-700 hover:bg-yello-700 hover:border border-yellow-700 px-4";

 const  errorButtonStyling ="bg-red-900 border border-red-700 hover:bg-red-700 hover:border border-red-700";

  if(styleType === 'primary'){
return primaryButtonStyling;

  }else if(styleType === 'secondary'){
    return secondaryButtonStyling;
  } else if(styleType === 'warning'){
    return warningButtonStyling;
  }else if(styleType === 'error'){
return errorButtonStyling
  } else{
    return primaryButtonStyling
  }


}

export default getButtonStyling;
