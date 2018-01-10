/**
 * Created by sve on 31.10.2017 г..
 */
import React, {Component} from 'react'

import observer from './../utils/observer'

class Char extends Component {

  render(){
    return(
      <div
        onClick={()=>{
          observer.executeObserver('changeFocus',{id: this.props.params.id} )
        }}
        className="roster-warper">
        <img  className="rosterImg"
              src={this.props.params.url}
              alt="rosterImg"/>
      </div>
    )
  }
}
export default Char