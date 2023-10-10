import { Link } from "react-router-dom"
import classes from '../Components/LoginNav.module.css'
const StudentNav=()=>
{
    const logoutHandler=()=>
   {
      localStorage.removeItem('access')
   }
   return(
    <nav className={classes.LoginBar}>
        <Link to=''>Home</Link>
        <Link to=''>Analytics</Link>
        <Link to='Quiz'>Attempt Quiz</Link>
        <Link to='/' onClick={logoutHandler}>Logout</Link>
    </nav>
   )
}

export default StudentNav;