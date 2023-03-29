import ToDoForm from "../ToDoForm"
import ToDoStampa from "../ToDoStampa/ToDoStampa"
import { useState } from "react";
let ToDo=()=>{

    const [array,setArray]=useState([])
    

    return(

        <>
        <ToDoForm modificaArray={setArray} mioArray={array}></ToDoForm >
        <ToDoStampa mioArray={array}></ToDoStampa >
        </>
    )
}
export default ToDo