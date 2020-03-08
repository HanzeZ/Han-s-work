import React, {useState} from 'react';
const Form =() =>{
    const [formState,setFormState] = useState({
        firstname: "",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:"",
        submitted: false
    });
    let message;
    if (formState.submitted){
        message=<h1>You have submitted the form</h1>
    } else{
        message=<h1>You haven't submitted the form</h1>
    }
    const onChangeHandler = event =>{
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event =>{
        event.preventDefault();
        setFormState({
            ...formState,
            submitted: true
        })
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name:</label>
                <input type='text' name='firstname' onChange={onChangeHandler}></input>
                <br/>
                <label>Last Name:</label>
                <input type='text' name='lastname' onChange={onChangeHandler}></input>
                <br/>
                <label>Email:</label>
                <input type='text' name='email' onChange={onChangeHandler}></input>
                <br/>
                <label>Password:</label>
                <input type='password' name='password' onChange={onChangeHandler}></input>
                <br/>
                <label>Confirm Password:</label>
                <input type='password' name='confirmpassword' onChange={onChangeHandler}></input>
                <br/>
                <button>Submit</button>
            </form>
            <div>
                {message}
                <p>Your form data:</p>
                {formState.firstname}
                <br/>
                {formState.lastname}
                <br/>
                {formState.email}
                <br/>
                {formState.password}
                <br/>
                {formState.confirmpassword}
            </div>
        </div>
    )

}
export default Form;
