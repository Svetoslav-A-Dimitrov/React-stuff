/**
 * Created by zlatii on 15/11/2017.
 */

import React, { Component } from 'react';
import Input from './Input'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginAction, redirect} from '../../actions/authAction'

 class LoginPage extends Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)

    }
    onChangeHandler(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmitHandler(e){
        e.preventDefault()
        this.props.login( this.state.email, this.state.password)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.loginSuccess){
            this.props.redirect()
            this.props.history.push('/')
        }
    }

    render(){
        return(
            <div class="container">
                <div class="row space-top">
                    <div class="col-md-12">
                        <h1>Login</h1>
                    </div>
                </div>
                <form onSubmit={this.onSubmitHandler}>
                    <div class="row space-top">
                        <div class="col-md-3">
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
                            <input type="submit" class="btn btn-secondary" value="Login"/>
                        </div>
                    </div>
                </form>
            </div>
        )

        // return(
        //     <div className="container">
        //         <div className="row space-top">
        //             <div className="col-md-12">
        //                 <h1>Login</h1>
        //             </div>
        //         </div>
        //         <form onSubmit={this.onSubmitHandler}>
        //             <div className="row space-top">
        //                 <div className="col-md-4">
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
        //                     <input type="submit" className="btn btn-primary" value="Login"/>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // )
    }
}


function mapStateToProps(state){
    return {
        loginSuccess: state.login.success
    }

}

function mapDispatchToProps(dispatch) {
    return {
        login: (email, password)=> dispatch(loginAction(email, password)),
        redirect: ()=> dispatch(redirect())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage))