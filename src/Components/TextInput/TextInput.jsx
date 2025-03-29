

// function TextInput({ label, type = 'text', value, onChange }) {
//   return (
//       <label className="block">
//           <span>{label && <span className="text-gray-700">{label}</span>}</span>
//           <input
//               className="px-4 py-2 border border-gray-500 rounded-md w-full"
//               onChange={onChange}  
//               placeholder={label}
//               type={type}
//               value={value}
//           />
//       </label>
//   );
// }

// export default TextInput;


function TextInput({label, type="text", value, onChange }){
    return(
  
  <label className="block">
  
    {/*SHORT CIRCUKITING CONSEPT HERE VERY IMPORATANT */}
  {/* {label && <span className="text-gray-700">{label}</span>} */}
  
  <input 
  className="px-4 py-2 border border-gray-500 rounded-md w-full"
  onChange={onChange}
  placeholder={label}
  type={type}
  value={value}
  
  
  
  />
  </label>
    );
  }
  
  export default TextInput
