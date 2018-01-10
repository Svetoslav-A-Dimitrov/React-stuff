/**
 * Created by sve on 2.11.2017 г..
 */
/**
 * Created by sve on 2.11.2017 г..
 */
import React, { Component } from 'react'


import PokemonField from './formFields/PokemonField'


class SingUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = {poks: []}
  }
  pokemons = ()=>{
    fetch('http://localhost:5000/pokedex/pokedex')
      .then(data =>{
        return data.json()
      })
      .then(poks=>{
        this.setState({poks: poks.pokemonColection})
      })
}
 componentDidMount(){
   this.pokemons()
 }

  render() {
    return (
     <div>
       {this.state.poks.map((p, index) => <PokemonField key={index} data={p}/>)}
     </div>
    )
  }
}

export default SingUpForm
