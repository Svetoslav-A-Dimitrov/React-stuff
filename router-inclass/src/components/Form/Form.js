/**
 * Created by sve on 4.11.2017 г..
 */
import React , { Component } from 'react'

export default class Form extends Component{
  constructor (props){
    super(props)

    this.state = {name:'', password:''}

    this.onChange= this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e){
    e.preventDefault()
    console.log(this.state.name, this.state.password)
  }

  render(){
    return (
      <form onSubmit={this.onSubmit}>
        Name:
        <input
          onChange={this.onChange}
          name="name"
          value={this.state.name}
          type="text"/>
        <br/>
        Password:
        <input
          onChange={this.onChange}
          name="password"
          value={this.state.password}
          type="password"/>
        <br/>
        <input type="submit" value='Login'/>
      </form>
    )
  }
}