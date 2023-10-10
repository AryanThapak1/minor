import { Link } from "react-router-dom";
import classes from "./LoginNav.module.css"
const LoginNav=()=>
{
   const logoutHandler=()=>
   {
      localStorage.removeItem('access')
   }
   return(
    <nav className={classes.LoginBar}>
        <Link to=''>Home</Link>
        <Link to=''>Create Quiz</Link>
        <Link to='manage'>Manage Quiz</Link>
        <Link to='/' onClick={logoutHandler}>Logout</Link>
    </nav>
   )
}

export default LoginNav;