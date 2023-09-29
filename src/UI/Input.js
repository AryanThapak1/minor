const Input=(props)=>
{
    return(
        <>
        <label>{props.label}</label>
        <input type={props.type} onChange={props.changeHandler} onBlur={props.onBlur} required/>
        </>
    )
}

export default Input;