import React,{Component} from 'react'

import {connect} from 'react-redux'
import * as actions from './../store/counter/counterActionCreator'
import {bindActionCreators} from 'redux'

class InputField extends Component{
constructor (props){
  super(props)
  this.state = {inputFiled: this.props.data.value, isInEdit: true}

  this.onButtonEditClick = this.onButtonEditClick.bind(this)
  this.onChange = this.onChange.bind(this)
  this.decline = this.decline.bind(this)
  this.confirm = this.confirm.bind(this)
}

  onChange(e){
  this.setState({inputFiled: e.target.value})
}

  onButtonEditClick(){
    let oldState = this.state.isInEdit
    this.setState({isInEdit: !oldState})
  }

  decline(){
    this.setState({inputFiled: this.props.data.value, isInEdit: true})
  }
  confirm(e){
    this.props.actions[e.target.name](this.props.data.index, this.state.inputFiled)
    this.setState({isInEdit: true})
  }

render(){
  let isInEdit = this.state.isInEdit
  return(
    <div>
      <input
        disabled={isInEdit}
        type="text"
        name="inputField"
        value={this.state.inputFiled}
        onChange={this.onChange}/>
      {this.state.isInEdit
        ? <button onClick={this.onButtonEditClick}>Edit input</button>
        : <span>
            <button name="editInput" onClick={this.confirm}>confirm</button>
            <button onClick={this.decline}>decline</button>
          </span>}
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

export default connect(mapStateToProps, mapDispatchToProps)(InputField)