/**
 * Created by sve on 9.11.2017 г..
 */
import * as types from './actionTypes'

function addComment (text) {
  return{
    type: types.ADD_COMMENT,
    text
  }
}