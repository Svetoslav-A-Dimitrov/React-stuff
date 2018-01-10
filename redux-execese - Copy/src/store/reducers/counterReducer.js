/**
 * Created by sve on 10.11.2017 г..
 */
import * as counterTypes from './../counter/counterTypes'

export default function counter(store = [{index:0, value:0}], action) {
  let newStore = [...store]
  switch (action.type){
    case counterTypes.ADD:
       newStore.find(c => c.index === action.index).value+=1
      return newStore

    case counterTypes.SUBTRACT:
      newStore.find(c => c.index === action.index).value-=1
      return newStore

    case counterTypes.CLEAR:
      newStore.find(c => c.index === action.index).value=0
      return newStore

    case counterTypes.ADD_COUNTER:
      return [...store, {index: store.length, value:0}]

    case counterTypes.REMOVE_COUNTER:
      return [...store.slice(0,-1)]

    default: return store
  }
}