/**
 * Created by sve on 10.11.2017 г..
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actions from './../store/counter/counterActionCreator'
import {bindActionCreators} from 'redux'

class Counter extends Component{
  constructor(props){
    super(props)

    this.onButtonClick = this.onButtonClick.bind(this)
  }

  onButtonClick(e){
      this.props.actions[e.target.name](this.props.index)
  }

  render(){
    return (
      <div>
        <h1>{this.props.appState.find(c => c.index === this.props.index).value}</h1>
        <div>
          <button name="add" onClick={this.onButtonClick}>increment</button>
          <button name="subtract" onClick={this.onButtonClick}>decrement</button>
          <button name="clear" onClick={this.onButtonClick}>clear</button>
        </div>
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

