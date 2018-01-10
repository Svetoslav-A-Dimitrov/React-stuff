/**
 * Created by sve on 11.11.2017 г..
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actions from './../store/counter/counterActionCreator'
import {bindActionCreators} from 'redux'
import InputField from './inputFeild'

class Counter extends Component{
  constructor(props){
    super(props)

    this.state = {inputValue: ''}

    this.onButtonClick = this.onButtonClick.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onButtonClick(e){
    this.props.actions[e.target.name](this.state.inputValue)
  }
  onChange(e){
    this.setState({inputValue: e.target.value})
  }

  render(){
    return (
      <div>
        <input
          type="text"
          name="addInput"
          placeholder="new input name"
          onChange={(e)=>{this.onChange(e)}}
          value={this.state.inputValue}
        />
        <button name="addInput" onClick={this.onButtonClick}>Add input</button>
        {this.props.appState.map(input => {
          return(
              <InputField
                key={input.index}
                data={input}
                isInEdit={this.state.isInEdit}/>)
        })}
        <button name="removeInput" onClick={this.onButtonClick}>Delete last</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    appState: state.inputer
  }
}

function mapDispatchToProps (dispatch) {
  return{
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)