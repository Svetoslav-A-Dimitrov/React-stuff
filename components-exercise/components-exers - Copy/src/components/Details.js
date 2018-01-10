/**
 * Created by sve on 31.10.2017 г..
 */
import React, {Component} from 'react'

import Char from './Char'

class Details extends Component {
  constructor (props){
    super(props)

    this.state = {
      charId: 0,
      charObj: {}
    }
    this.promisfyState = obj => {
      return new Promise(res => {
        this.setState(obj, res)
      }).catch(e => {
        console.log(e)
      })
    }

    this.changeFocus= (id)=>{
      fetch('http://localhost:9999/character/' + id)
        .then((data) =>{
          return data.json()
        }).then(parsedData =>{

        this.setState({charObj: parsedData})
      })
        .catch(err =>{
          console.log(err)
        })
    }
  }

  componentDidUpdate(){
   // console.log(this.props.focusedChar.id)
    this.changeFocus(this.props.focusedChar.id)
  }
  componentDidMount(){
    fetch('http://localhost:9999/character/' + this.state.charId)
      .then((data) =>{
        return data.json()
      }).then(parsedData =>{
      this.setState({charObj: parsedData})
    })
      .catch(err =>{
        console.log(err)
      })
  }


  render(){
   //{this.changeFocus(this.props.focusedChar)}
   //  console.log(this.props.focusedChar)
   //    console.log(this.state.charObj)
    return(
      <div>
        <fieldset>
          <Char
            params={{url: this.state.charObj.url}}/>
          <p>{this.state.charObj.bio}</p>
        </fieldset>
      </div>
    )
  }
}
export default Details