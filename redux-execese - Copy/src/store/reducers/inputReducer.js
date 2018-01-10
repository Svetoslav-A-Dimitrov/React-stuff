
/**
 * Created by sve on 10.11.2017 г..
 */
import * as inputTypes from '../counter/inputTypes'

export default function inputer(store = [], action) {
  // if(store.length <= 0) return store
  let newStore = [...store]
  switch (action.type){
    case inputTypes.ADD:
      newStore.push({index:newStore.length, value: action.value})
      return newStore

    case inputTypes.EDIT:
      newStore.find(i => i.index === action.index).value = action.value
      console.log(newStore)
      return newStore

    case inputTypes.DELETE:
      return newStore.slice(0,-1)

    default: return store
  }
}