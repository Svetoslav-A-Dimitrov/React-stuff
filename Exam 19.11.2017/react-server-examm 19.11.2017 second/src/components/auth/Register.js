/**
 * Created by zlatii on 16/11/2017.
 */
import React, {Component} from 'react'
import Input from './../common/Input'
import {register, login} from '../../api/remote'
import { withRouter } from 'react-router-dom';

class Register extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            repeat: '',
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
        if (this.state.password !== this.state.repeat) {
            this.setState({
                error: {
                    message: 'Check the form for errors',
                    errors: {
                        repeat: "Passwords don't match"
                    }
                }
            });
            return;
        }
        register(this.state.name, this.state.email, this.state.password)
            .then(res => {
                if(!res.success){
                    this.setState({error: res})
                    return
                }
                console.log('Success in register')
                login(this.state.email, this.state.password)
                    .then(res=>{
                        console.log(res)
                        if(!res.success){
                            this.setState({error: res})
                            return
                        }
                        localStorage.setItem('authToken', res.token)
                        localStorage.setItem('user', res.user.name)
                        this.props.history.push('/')
                    })

            })
    }

    render() {
        return(
            <div class="container">
                <div class="row space-top">
                    <div class="col-md-12">
                        <h1>Register</h1>
                        <p>Please fill all fields.</p>
                    </div>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div class="row">
                        <div class="col-md-3">
                            <Input
                                onChange={this.onChangeHandler}
                               name='name'
                               label="Name"
                               value={this.state.name}
                            />
                            <Input
                                onChange={this.onChangeHandler}
                                name='email'
                                label="Email"
                                value={this.state.email}
                            />
                            <Input
                                onChange={this.onChangeHandler}
                                name='password'
                                label="Password"
                                type="password"
                                value={this.state.password}
                            />
                            <Input
                                onChange={this.onChangeHandler}
                                name='repeat'
                                label=" Repeat Password"
                                type="password"
                                value={this.state.repeat}
                            />
                            <input type="submit" class="btn btn-secondary" value="Register"/>
                        </div>
                    </div>
                </form>
            </div>
        )



        // return(
        //     <div classNameName="container">
        //         <div classNameName="row space-top">
        //             <div classNameName="col-md-12">
        //                 <h1>Register</h1>
        //                 <p>Please fill all fields.</p>
        //                 {errors}
        //             </div>
        //         </div>
        //         <form onSubmit={this.onSubmit}>
        //             <div classNameName="row space-top">
        //                 <div classNameName="col-md-4">
        //                     <Input
        //                         onChange={this.onChangeHandler}
        //                         name='name'
        //                         label="Name"
        //                         value={this.state.name}
        //                     />
        //                     <Input
        //                         onChange={this.onChangeHandler}
        //                         name='email'
        //                         label="Email"
        //                         value={this.state.email}
        //                     />
        //
        //                     <Input
        //                     onChange={this.onChangeHandler}
        //                     name='password'
        //                     label="Password"
        //                     type="password"
        //                     value={this.state.password}
        //                      />
        //
        //                     <Input
        //                         onChange={this.onChangeHandler}
        //                         name='repeat'
        //                         label=" Repeat Password"
        //                         type="password"
        //                         value={this.state.repeat}
        //                     />
        //                     <input type="submit" classNameName="btn btn-primary" value="Register"/>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // )
    }
}

export default withRouter(Register)

