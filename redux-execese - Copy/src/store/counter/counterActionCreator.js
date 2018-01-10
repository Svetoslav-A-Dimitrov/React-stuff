/**
 * Created by sve on 10.11.2017 г..
 */
import * as counterTypes from './counterTypes'
import * as inputTypes from './inputTypes'

export function add (index) {
  return{
    type: counterTypes.ADD,
    index
  }
}

export function subtract (index) {
  return{
    type: counterTypes.SUBTRACT,
    index
  }
}

export function clear (index) {
  return{
    type: counterTypes.CLEAR,
    index
  }
}

export function addCounter () {
  return{
    type: counterTypes.ADD_COUNTER
  }
}

export function removeCounter () {
  return{
    type: counterTypes.REMOVE_COUNTER
  }
}


export function addInput (value) {
  return{
    type: inputTypes.ADD,
    value
  }
}

export function editInput (index, value) {
  return{
    type: inputTypes.EDIT,
    index,
    value
  }
}

export function removeInput () {
  return{
    type: inputTypes.DELETE
  }
}