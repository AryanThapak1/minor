import React from "react";
import classes from "./Form.module.css";
import Input from "./Input";

const Form = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <label htmlFor="title">Question</label>
        <input type="text" id="title" className="title" />
        <Input label="Option 1" type="text" />
        <Input label="Option 2" type="text" />
        <Input label="Option 3" type="text" />
        <Input label="Option 4" type="text" />
        <button>Add Question</button>
      </div>
    </div>
  );
};

export default Form;
