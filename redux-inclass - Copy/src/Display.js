/**
 * Created by sve on 9.11.2017 г..
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'

class Display extends Component{
  render(){
    return(
      <span>
        Store: {this.props.calculator}
      </span>
    )
  }
}

function mapStateToProps (state) {
  return{
    calculator: state.calculator
  }
}

export default connect(mapStateToProps)(Display)