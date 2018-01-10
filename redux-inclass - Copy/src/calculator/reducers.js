/**
 * Created by sve on 8.11.2017 г..
 */
import * as actionTypes from './actionsTypes'

export default function calculator (oldState=10, action) {
  console.log(oldState)
  switch (action.type){
    case actionTypes.ADD:
      return oldState + action.value
    case actionTypes.SBTRACT:
      return oldState - action.value
    default: return oldState
  }
}