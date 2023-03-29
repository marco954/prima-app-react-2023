let ToDoStampa=({mioArray})=>{
    return(

        <>
        <ul>
                {mioArray.map((elemento, indice) => (
                    <li key={indice}>{elemento}</li>
                ))}
            </ul>
        </>
    )
}

export default ToDoStampa