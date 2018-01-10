import React, { Component } from 'react';
import './App.css';
import * as actions from './calculator/actionCreators'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Display from './Display'


class App extends Component {
  constructor (props){
    super(props)

    this.state = {storeData: 0, value:0}

    this.onChange = this.onChange.bind(this)
    this.onButtonClick= this.onButtonClick.bind(this)

  }

  onChange(e){
    if(isNaN(e.target.value)) return;
    this.setState({value:Number(e.target.value)})
  }

  onButtonClick(e){
    this.props.actions[e.target.name](this.state.value)
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.onChange} type="text" value={this.state.value}/>
        <button onClick={this.onButtonClick} name="add">+</button>
        <button onClick={this.onButtonClick} name="subtract">-</button>

        <div>
          <p>Current value in store {this.props.calculator}</p>
        </div>
        <p>------divide------</p>
        <h3>Comments:</h3>
        <ul>
          {this.props.comments.map((c, i)=>{
            return <li key={i}>{c}</li>
          })}
        </ul>
        <p>------divide------</p>
        <Display/>
      </div>

    );
  }
}

function mapStateToProps (state) {
  return{
    calculator: state.calculator,
    comments: state.comments
  }
}
function mapDispatchToProps (dispatch) {
  return{
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
