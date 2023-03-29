import { useState } from "react";

let ToDoList = () => {
  const [array, setArray] = useState([]);
  const [voce, setVoce] = useState("");

  let handlerClick = () => {
    console.log("click");
    /* let input = document.getElementsByTagName("input")[0]; */

    /* console.log(input.value); */
    /* array.push(input.value) */
    if (voce !== "") {
      setArray([...array, voce /* input.value */]);
    }

    /* console.log(array); */

    setVoce("");
  };

  let handlerChange = (e) => {
    setVoce(e.target.value);
  };

  return (
    <>
      <input
        value={voce /* || "" */}type="text" onChange={(e) => handlerChange(e)}
      ></input>
      <button onClick={() => handlerClick()}>Aggiungi Task</button>

      <p>Numero task: {array.length}</p>
      <p></p>
      <ul>
        {array.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
    </>
  );
};
export default ToDoList;
