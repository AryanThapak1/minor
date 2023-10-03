import classes from './Login.module.css';
import homeImage from '../Images/download2.jpg'
import { NavLink } from 'react-router-dom';
const Login=(props)=>
{
   return(
    <div>
     <div className={classes.homepage}>
    <div className={classes.container}>
    <h1>Welcome to QuizWiz</h1>
    <p>Log into your account!</p>
    <form className={classes.form}>
    <label>E-mail</label>
    <input type="email" className={classes.input} required/>
    <label>Password</label>
    <input type="password" className={classes.input} required/>
    <button className={classes.button}>Login</button>
    </form>
    <NavLink to="SignUp" className={classes.signup} >Sign Up ?</NavLink>
    </div>
    <img src={homeImage} alt='some quiz'
    className={classes.img}
    />
    </div>
    <p></p>
    </div>
    
   );
}

export default Login;
