/**
 * Created by zlatii on 07/11/2017.
 */
import React, {Component} from 'react'
import auth from './../../auth/requester'

class Login extends Component{
    constructor(props){
        super(props)

        this.state = {username: '', password: ''}

        this.submitLogin = (e)=>{
            e.preventDefault()
            auth.login(this.state).then((loggedUser)=>{
                localStorage.setItem('token', loggedUser._kmd.authtoken)
                localStorage.setItem('username', loggedUser.username)
            })
        }
        this.onChange= (e)=>{
            this.setState({[e.target.name]: e.target.value})
        }
    }

    render(){
        return(
            <form id="loginForm" onSubmit={(e)=>{this.submitLogin(e)}}>
                <h2>Sign In</h2>
                <label>Username:</label>
                <input name="username" type="text" value={this.state.username} onChange={(e)=>{this.onChange(e)}}/>
                <label>Password:</label>
                <input name="password" type="password" value={this.state.password} onChange={(e)=>{this.onChange(e)}}/>
                <input id="btnLogin" value="Sign In" type="submit"/>
            </form>
        )
    }
}

export default Login


