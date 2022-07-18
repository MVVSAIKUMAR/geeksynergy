import {Link} from "react-router-dom"
import "./css/Header.css"

const Header=(props)=>{
console.log(props);
    const LogoutHandler=()=>{

        localStorage.removeItem("register")
        localStorage.removeItem("islogged")

        props.history.push("/")
    }
    return(

        <header className="headerdiv">
            <Link to="/companyinfo" style={{textDecoration:"none",color:"white"}} ><p style={{float:"left",marginLeft:"40px"}}>Company Info</p></Link>
            <p onClick={LogoutHandler} style={{float:"right",marginRight:"40px"}}>Logout</p>
            
        </header>
    )
}

export default (Header)