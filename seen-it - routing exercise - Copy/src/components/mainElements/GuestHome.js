/**
 * Created by zlatii on 07/11/2017.
 */
import React from 'react'
import Login from './../auth/Login'
import Register from '../auth/Register'

const GuestHome  = () =>{
    return (
        <div className="welcome">
            <div className="signup">
                <Login/>
                <Register/>
            </div>

            <div className="about">
                <h1>Welcome to SeenIt</h1>
                <p>
                    Share interesting links and discuss great content. It's what's happening now.
                </p>
                <p>Sign in or sign up in a second.</p>
            </div>
        </div>
    )
}

export default GuestHome