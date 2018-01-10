/**
 * Created by zlatii on 16/11/2017.
 */
import React, {Component} from 'react'
import Input from './../common/Input'
import {login} from '../../api/remote'
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            error: false
        }

        this.onChangeHandler= this.onChangeHandler.bind(this)
        this.onSubmit= this.onSubmit.bind(this)
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e){
        e.preventDefault()
        login(this.state.email, this.state.password)
            .then(res=>{
                if(!res.success){
                    this.setState({error: res})
                    return
                }
                console.log('Success in login')
                localStorage.setItem('authToken', res.token)
                localStorage.setItem('user', res.user.name)
                this.props.history.push('/')
            })
    }

    render() {
        let errors = null;
        if (this.state.error) {
            errors = (
                <div>
                    <h2 classNameName="errorMessage">{this.state.error.message}</h2>
                </div>
            );
        }

            return(
                <div className="container">
                    <div className="row space-top">
                        <div className="col-md-12">
                            <h1>Login</h1>
                        </div>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div className="row space-top">
                            <div className="col-md-3">
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
                                <input type="submit" className="btn btn-secondary" value="Login"/>
                            </div>
                        </div>
                    </form>
                </div>
            )


        // return(
        //     <div classNameName="container">
        //         <div classNameName="row space-top">
        //             <div classNameName="col-md-12">
        //                 <h1>Login</h1>
        //                 <p>Please fill all fields.</p>
        //                 {errors}
        //             </div>
        //         </div>
        //         <form onSubmit={this.onSubmit}>
        //             <div classNameName="row space-top">
        //                 <div classNameName="col-md-4">
        //                     <Input
        //                         onChange={this.onChangeHandler}
        //                         name='email'
        //                         label="Email"
        //                         value={this.state.email}
        //                     />
        //
        //                         <Input
        //                         onChange={this.onChangeHandler}
        //                         name='password'
        //                         label="Password"
        //                         type="password"
        //                         value={this.state.password}
        //                     />
        //                     <input type="submit" classNameName="btn btn-primary" value="Login"/>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // )
    }
}

export default withRouter(Login)

