import React, { useState } from 'react'
import storage from '../helpers/Storage'
import {  useNavigate } from "react-router-dom";

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState(null)

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [password, setPassword] = useState(null)

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        if(!email) {
            setEmailError('Please Enter Email')
        } else  {
            setEmailError("")
        }
        if(!password) {
            setPasswordError('Please Enter Password')
        } else  {
            setPasswordError("")
        }

        if(!email || !password) {
            setLoading(false)
            return;
        }

        // const formData = {
        //     email: email,
        //     password: password
        // }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        storage.saveState("isAuthenticated", true)
        setTimeout( () => {
            navigate("/todo")
        },3000)
    }
    return (
        <div className='login_wrapper'>
            <div className='row main_container'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h2 className='text-center' style={{'color':'#000'}}> Todo App </h2>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mt-2 mb-4">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control mt-2" onChange={(e) => setEmail(e.target.value)}
                                    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    {emailError && <small className='text-danger'>{emailError}</small>}
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" 
                                    className="form-control mt-2" id="exampleInputPassword1" placeholder="Password" />
                                    {passwordError && <small className='text-danger'>{passwordError}</small>}
                                </div>
                                <button type="submit" className="btn btn-primary submit mb-4 mt-2">
                                    {loading && <span style={{width:'20px', height: '20px'}} className="spinner-border text-light"></span>} Submit 
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
