import React, { Component } from 'react';
import './App.css';
import Slider from './components/Slider'
import Roster from './components/Roster'
import Details from './components/Details'
import observer from './utils/observer'

class App extends Component {
  constructor (){
    super()
    this.state={
      focusedChar: 0

    }
    this.eventHandler = (newState)=>{
      this.setState({focusedChar: newState.id})
    }
  }

  componentDidMount(){
    observer.addObservr('changeFocus', this.eventHandler)
  }

  render() {
    return (
      <div className="App">
        <Slider/>
        <Roster/>
        <Details focusedChar={{id:this.state.focusedChar}}/>
      </div>
    );
  }
}

export default App;
