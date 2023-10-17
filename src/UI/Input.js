const Input=(props)=>
{
    return(
        <>
        <label htmlFor={props.label}>{props.label}</label>
        <input type={props.type} onChange={props.changeHandler} onBlur={props.onBlur} id={props.label} required/>
        </>
    )
}

export default Input;