import React , {useState} from "react"
import {Link} from 'react-router-dom'
import Layout from '../core/Layout'
import { signUp } from "../auth";

const Signup=()=>{
    const [values,setValues]=useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success:false
    })
    const handleChange=name=>event=>{
        setValues({...values,error:false,[name]:event.target.value})
    }
 
    const clickSubmit=(event)=>{
        event.preventDefault()
        setValues({...values,error:false})
signUp({name,email,password}) 
.then(data=>{
    if(data.error){
        setValues({...values,error:data.error,success:false})
    }
    else{
        setValues({
            ...values,
            name:'',
            email:'',
            password:'',
            error:'',
            success:true
        })
    }
})

    }

    const {name,email,password,error,success}=values
    const signUpForm=()=>(
        <form>
            <div className="form-group">
                <label className="text-muted"> Name</label>
                <input 
                value={name} onChange={handleChange('name')} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted"> Email</label>
                <input value={email}  onChange={handleChange('email')} type="email" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted"> Password</label>
                <input value={password}  onChange={handleChange('password')} type="password" className="form-control"/>
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">
Submit
            </button>
        </form>
    )

    const showError=()=>(
    <div className="alert alert-danger" style={{display:error?'':'none'}}>{error}</div>
    )

    const showSuccess=()=>(
        <div className="alert alert-info" style={{display:success?'':'none'}}>New Account created. Please <Link to="/signin">SignIn</Link></div>
    )

    return (<Layout title="SignUp" className="container col-md-8 col-md-offset-2" description="Node React Ecommerce App">
{showError()}
{showSuccess()}
{signUpForm()}
    </Layout>)
}

export default Signup;