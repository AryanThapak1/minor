import useForm from "../custom hooks/useFrom";
import classes from "./StudentRegist.module.css";
import Input from "../UI/Input";
import { useState } from "react";
import OutputBox from "../UI/OutputBox";
const StudentRegister = () => {
  const [invalid, setInvalid] = useState(false);
  const [submit, setSubmit] = useState(false);
  const {
    firstname,
    lastname,
    email,
    phone,
    password,
    confirm,
    college,
    course,
    branch,
    FirstnameChangeHandler,
    LastnameChangeHandler,
    emailChangeHandler,
    phoneChangeHandler,
    passwordChangeHandler,
    confirmChangeHandler,
    collegeChangeHandler,
    courseChangeHandler,
    branchChangeHandler,
  } = useForm();
  const onBlurHandler = () => {
    setInvalid(false);
  };

  const statusHandler=()=>
  {
    setSubmit(false);
  }
  
  const SubmitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirm || password.trim().length === 0) {
      setInvalid(true);
      return;
    }
    const data = {
      firstname,
      lastname,
      email,
      phone,
      password,
      confirm,
      college,
      branch,
      course,
    };
    const response = await fetch(
      "https://react-7358c-default-rtdb.firebaseio.com/student.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (response.ok) {
      setSubmit(true);
    }
  };

  return (
    <div onClick={statusHandler}>
    <div className={classes.form} >
      <h1>Registration Form</h1>
      <p>Fill out some details</p>
      <form className={classes.RegisterForm} onSubmit={SubmitHandler}>
        <h3>General Details</h3>
        <div className={classes.details}>
          <Input
            label="First Name"
            changeHandler={FirstnameChangeHandler}
            type="text"
            onBlur={onBlurHandler}
          />
          <Input
            label="Last Name"
            changeHandler={LastnameChangeHandler}
            type="text"
            onBlur={onBlurHandler}
          />
        </div>
        <div className={classes.details}>
          <Input
            label="E-mail"
            type="email"
            changeHandler={emailChangeHandler}
            onBlur={onBlurHandler}
          />
          <Input
            label="Phone Numer"
            changeHandler={phoneChangeHandler}
            type="text"
            onBlur={onBlurHandler}
          />
        </div>
        <div className={classes.details}>
          <Input
            label="Password"
            type="password"
            changeHandler={passwordChangeHandler}
            onBlur={onBlurHandler}
          />
          <Input
            label="Confirm Password"
            type="password"
            changeHandler={confirmChangeHandler}
            onBlur={onBlurHandler}
          />
        </div>
        {invalid && <p className={classes.invalid}>Password dont match</p>}
        <h3>Education Details</h3>
        <div className={classes.details}>
          <Input
            label="College Name"
            type="Text"
            changeHandler={collegeChangeHandler}
            onBlur={onBlurHandler}
          />
          <Input
            label="Branch"
            type="text"
            changeHandler={branchChangeHandler}
            onBlur={onBlurHandler}
          />
        </div>
        <div className={classes.details}>
          <Input
            label="Course"
            type="text"
            changeHandler={courseChangeHandler}
            onBlur={onBlurHandler}
          />
        </div>
        <button className={classes.button} disabled={invalid}>
          Register
        </button>
      </form>
      {submit && <OutputBox />}
    </div>
    </div>
  );
};

export default StudentRegister;
