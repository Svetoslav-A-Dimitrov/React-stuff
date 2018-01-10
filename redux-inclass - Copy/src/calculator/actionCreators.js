/**
 * Created by sve on 8.11.2017 г..
 */
import * as actionTypes from './actionsTypes'

export function add (value) {
  return {
    type: actionTypes.ADD,
    value
  }
}

export function subtract (value) {
  return {
    type: actionTypes.SBTRACT,
    value
  }
}