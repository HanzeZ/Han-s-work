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
    let submitmessage;
    if (formState.submitted){
        submitmessage=<h1>You have submitted the form</h1>
    } else{
        submitmessage=<h1>You haven't submitted the form</h1>
    }
    let firstname_message;
    if (formState.firstname < 2){
        firstname_message=<p>Your first name needs to be at least two characters</p>
    }
    let lastname_message;
    if (formState.lastname < 2){
        lastname_message=<p>Your last name needs to be at least two characters</p>
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
                {firstname_message}
                <br/>
                <label>Last Name:</label>
                <input type='text' name='lastname' onChange={onChangeHandler}></input>
                {lastname_message}
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
                {submitmessage}
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
}
export default Form;
