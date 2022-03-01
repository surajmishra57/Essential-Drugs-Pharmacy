import { NavLink } from "react-router-dom"
const Nav=()=>{

    return(
        <>
         <ul>
             <li>
                 <NavLink to ="/" activeStyle={{ fontWeight : "bold", color : "red" }} exact> Home </NavLink>
             </li>
         </ul>
         <ul>
             <li>
                 <NavLink to ="/about" activeStyle={{ fontWeight : "bold", color : "red" }} exact> About </NavLink>
             </li>
         </ul>
        </>
    )
}
export default Nav