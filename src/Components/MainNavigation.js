import logo from '../Images/logo.jpg'
import classes from "./MainNavigation.module.css"
const MainNavigation=()=>
{
    return(
    <div className={classes.nav}>
    <img src={logo} alt="logo" className={classes.img}/>
    <div className={classes.code}>
    <input type="search" className={classes.input} placeholder="Enter Class Code"/>
    <button type="submit">Search</button>
    </div>
    </div>
    
    );
}

export default MainNavigation;