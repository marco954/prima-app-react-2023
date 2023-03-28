import Button from "../Button"
import "./Header.css"/* 
import sfondo from "./assets/sfondo.svg" */

let Header=() =>{
    return(
    <header /* style={{backgroundImage:`url(${sfondo})`}} */>
        
        <h1>Basic landing page for big dream</h1>
        <p>minimal,responsive, accessibile</p>
        <Button>explore repo</Button>
    
</header>)
    
}
export default Header