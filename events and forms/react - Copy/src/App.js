import React, { Component } from 'react'
import './App.css'

import SingUpForm from './components/form/SingUpForm'
import SingInForm from './components/form/loginForm'
import PokemonForm from './components/form/pokemonForm'
import PokemonView from './components/form/PokemonsView'

class App extends Component {
  constructor () {
    super()

    this.state = {
      username: '',
      token: ''
    }
  }

  render () {
   //console.log(sessionStorage.getItem('token'))
    if(localStorage.getItem('token')){
      return (
        <div>
          <h2>Wellcome</h2>
          <PokemonForm/>
          <PokemonView/>
        </div>
      )
    }else {
      return (
        <div>
          <SingUpForm />
          <SingInForm />
        </div>
      )
    }

  }
}

export default App
