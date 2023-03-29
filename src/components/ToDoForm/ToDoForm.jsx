import { useState } from "react";

let ToDoForm = ({ modificaArray, mioArray }) => {
    
  const [voce, setVoce] = useState("");

  let handlerChange = (e) => {
    setVoce(e.target.value);
  };

  let handlerClick = () => {
    

    modificaArray([...mioArray, voce]);
    setVoce("")
  };
  

  return (
    <>
      <input value={voce || ""} type="text" onChange={handlerChange}></input>
      <button onClick={handlerClick}>Aggiungi elemento</button>
    </>
  );
};

export default ToDoForm;
