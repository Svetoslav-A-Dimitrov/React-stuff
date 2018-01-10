/**
 * Created by zlatii on 15/11/2017.
 */

import React, { Component } from 'react';
import Input from './Input'
// import {register, login} from '../../api/remote'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginAction, registerAction, redirect} from '../../actions/authAction'


 class RegisterPage extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            repeat: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)

    }
    onChangeHandler(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmitHandler(e){
        e.preventDefault()
        this.props.register(this.state.name, this.state.email, this.state.password)
    }

    componentWillReceiveProps(newProps){
        if(newProps.registerSuccess){
            this.props.login(this.state.email, this.state.password)
        }else if(newProps.loginSuccess) {
            this.props.redirect()
            this.props.history.push('/')
        }
    }

    render(){
        return(
        <div class="col-md-3">
            <Input
                onChange={this.onChangeHandler}
                name='name'
                value={this.state.name}
                label="Name"
            />
            <Input
                onChange={this.onChangeHandler}
                name='email'
                value={this.state.email}
                label="E-mail"
            />
            <Input
                name='password'
                type="password"
                label="Password"
                onChange={this.onChangeHandler}
                value={this.state.password}
            />
            <Input
                name='repeat'
                type="password"
                label="Repeat password"
                onChange={this.onChangeHandler}
                value={this.state.repeat}
            />
            <input type="submit" class="btn btn-secondary" value="Register"/>
        </div>
        )
        // return(
        //     <div className="container">
        //         <div className="row space-top">
        //             <div className="col-md-12">
        //                 <h1>Register</h1>
        //                 <p>Please fill all fields.</p>
        //             </div>
        //         </div>
        //         <form onSubmit={this.onSubmitHandler}>
        //             <div className="row space-top">
        //                 <div className="col-md-4">
        //                     <Input
        //                         onChange={this.onChangeHandler}
        //                         name='name'
        //                         value={this.state.name}
        //                         label="Name"
        //                     />
        //                     <Input
        //                         onChange={this.onChangeHandler}
        //                         name='email'
        //                         value={this.state.email}
        //                         label="E-mail"
        //                     />
        //                     <Input
        //                         name='password'
        //                         type="password"
        //                         label="Password"
        //                         onChange={this.onChangeHandler}
        //                         value={this.state.password}
        //                     />
        //                     <Input
        //                         name='repeat'
        //                         type="password"
        //                         label="Repeat password"
        //                         onChange={this.onChangeHandler}
        //                         value={this.state.repeat}
        //                     />
        //                     <input type="submit" className="btn btn-primary" value="Register"/>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // )
    }
}

function mapStateToProps(state){
    return {
        registerSuccess: state.register.success,
        loginSuccess: state.login.success
    }

}

function mapDispatchToProps(dispatch) {
    return {
        register: (name, email, password)=> dispatch(registerAction(name, email, password)),
        login: (email, password)=> dispatch(loginAction(email, password)),
        redirect: ()=> dispatch(redirect())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterPage))
