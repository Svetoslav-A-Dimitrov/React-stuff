/**
 * Created by sve on 2.11.2017 г..
 */
import React, { Component } from 'react'

import PokemonValidationFunc from './../../utils/PokemonValidationFunc'
import Input from './formFields/Input'


class pokemonForm extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      image: '',
      info: '',
    }
  }

  submitPokemonCreate(e) {
    e.preventDefault();
    let payload = {
      pokemonName: this.state.name,
      pokemonImg: this.state.image,
      pokemonInfo: this.state.info
    }
    this.create(payload)
  }

  create(payload) {
    fetch('http://localhost:5000/pokedex/create', {
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
      })
  }

  render() {
    let validObj = PokemonValidationFunc(
      this.state.name,
      this.state.image,
      this.state.info,
  )

    return (
      <form onSubmit={this.submitPokemonCreate.bind(this)}>
        <fieldset className='App'>
          <div style={{ display: 'inline-grid' }}>
            <Input
              type='text'
              data='pokemonName'
              name='pokemonName'
              func={e => {
                this.setState({ name: e.target.value })
              }}
              valid={validObj.validName}
            />


            <Input
              type='text'
              data='pokemonImage'
              name='pokemonImage'
              func={e => {
                this.setState({ image: e.target.value })
              }}
              valid={validObj.validImage}
            />

            <Input
              type='text'
              data='pokemonInfo'
              name='pokemonInfo'
              func={e => {
                this.setState({ info: e.target.value })
              }}
              valid={validObj.validInfo}
            />


            <input
              style={({ "display": (validObj.validName && validObj.validImage && validObj.validInfo) === true ? '' : 'none' })}
              type='submit'
              value='Create Pokemon'
            />
          </div>
        </fieldset>
      </form>
    )
  }
}

export default pokemonForm
/**
 * Created by sve on 2.11.2017 г..
 */