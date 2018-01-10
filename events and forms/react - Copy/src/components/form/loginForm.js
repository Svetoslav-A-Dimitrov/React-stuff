import React, { Component } from 'react'

import Input from './formFields/Input'

class SingUpForm extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',

    }
  }

  submitLogIn(e) {
    e.preventDefault();
    let payload = {
      email: this.state.email,
      password: this.state.password,
    }
    this.login(payload)
  }

  login(payload) {
    fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => {
        return res.json()
      })
      .then(d => {
        if(d.token){
          localStorage.setItem('token', d.token)
        }
      })
  }

  render() {
    let validEmail = this.state.email !== '';
    let validPassword = this.state.password !== '';

    return (
      <form onSubmit={this.submitLogIn.bind(this)}>
        <fieldset className='App'>
          <div style={{ display: 'inline-grid' }}>
            <h2>Sign In</h2>
            <Input
              type='text'
              data='email'
              name='Email'
              func={e => {
                this.setState({ email: e.target.value })
              }}
              valid={validEmail}
            />


            <Input
              type='password'
              data='password'
              name='Password'
              func={e => {
                this.setState({ password: e.target.value })
              }}
              valid={validPassword}
            />


            <input
              style={({ "display": (validEmail && validPassword) === true ? '' : 'none' })}
              type='submit'
              value='Sign In'
            />
          </div>
        </fieldset>
      </form>
    )
  }
}

export default SingUpForm
/**
 * Created by sve on 2.11.2017 г..
 */