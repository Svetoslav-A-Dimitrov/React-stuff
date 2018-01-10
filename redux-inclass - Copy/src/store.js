/**
 * Created by sve on 8.11.2017 г..
 */
import {createStore, combineReducers} from 'redux'
import calculator from './calculator/reducers'
import comments from './comments/commentReducer'

const store = createStore(combineReducers({
  calculator,
  comments
}),{
  calculator: 11,
  comments:['hi', 'hello']
  }
)


export default store