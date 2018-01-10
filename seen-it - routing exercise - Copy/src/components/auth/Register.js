/**
 * Created by zlatii on 07/11/2017.
 */
import React, {Component} from 'react'
import auth from './../../auth/requester'


class Register extends Component{
    constructor(props){
        super(props)

        this.state = {username: '', password: ''}

        this.submitRegister = (e)=>{
            e.preventDefault()
            auth.register(this.state).then(console.log('Registration successful'))

        }
        this.onChange= (e)=>{
            this.setState({[e.target.name]: e.target.value})
        }
    }

    render(){
        return(
            <form id="registerForm" onSubmit={(e)=>{this.submitRegister(e)}}>
                <h2>Register</h2>
                <label>Username:</label>
                <input name="username" type="text" value={this.state.username} onChange={(e)=>{this.onChange(e)}}/>
                <label>Password:</label>
                <input name="password" type="password"  value={this.state.password} onChange={(e)=>{this.onChange(e)}}/>
                <label>Repeat Password:</label>
                <input name="repeatPass" type="password"/>
                <input id="btnRegister" value="Sign Up" type="submit"/>
            </form>
        )
    }
}

export default Register