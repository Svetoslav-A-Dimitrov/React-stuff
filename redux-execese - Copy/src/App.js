import React, { Component } from 'react';
import './App.css';
import Counter from './components/counterComponent'
import InputList from './components/InputList'

import {connect} from 'react-redux'
import * as actions from './store/counter/counterActionCreator'
import {bindActionCreators} from 'redux'
import fetchData from './store/counter/fetchData'


class App extends Component {
  constructor (props){
    super(props)

    this.onButtonClick = this.onButtonClick.bind(this)
  }

  onButtonClick(e){
    this.props.actions[e.target.name]()
  }

  render() {
    return (
      <div className="App">
        {this.props.appState.map(c =>{return <Counter index={c.index} key={c.index}/>})}
        <div>
          <div>------------------------------------------------------</div>
          <button name="addCounter" onClick={this.onButtonClick}>
            Add
          </button>
          <button name="removeCounter" onClick={this.onButtonClick}>
            Remove
          </button>
        </div>
        <div><h2>INPUTS</h2></div>
        <InputList/>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    appState: state.counter
  }
}

function mapDispatchToProps (dispatch) {
  return{
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
