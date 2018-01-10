import * as types from './actionTypes'

export default function commentReduser(state = [], action) {
  switch (action.type){
    case types.ADD_COMMENT:
      const newState = state.slice()
      newState.push(action.text)
      return newState
    default: return state
  }

}