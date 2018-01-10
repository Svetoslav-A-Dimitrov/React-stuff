/**
 * Created by sve on 13.11.2017 г..
 */
import counterActions from './counterActionCreator'

export default function fetchData() {
  console.log('inDataFethc')
  return (dispatch)=>{
    console.log('here')
    return fetch('http://localhost:5000/pokedex/pokedex')
      .then(res => {
        console.log('in response')
       return res.json()
      })
      .then(json => {

      })
  }
}