/**
 * Created by sve on 31.10.2017 г..
 */
import React, {Component} from 'react'

import left from './../resources/left.png'
import right from './../resources/right.png'

class Slider extends Component {
  constructor (){
    super()

    this.state = {
      focusedEpId: 0,
      imgUrl: '',
    }

    this.getNewEp = (id) =>{
      fetch('http://localhost:9999/episodePreview/' + id)
        .then((data) =>{
          return data.json()
        }).then(parsedData =>{
        this.setState({imgUrl: parsedData.url, focusedEpId: parsedData.id})
      })
        .catch(err =>{
          console.log(err)
        })
    }

  }

  componentDidMount(){
    this.getNewEp(this.state.focusedEpId)
  }

  render(){
    return(
      <div className="warper">
        <img
          onClick={()=>{
          this.getNewEp(Number(this.state.focusedEpId) -1)
        }}
           className="slider-button case-left"
           src={left}
           alt="leftArrow"/>
        <img className="sliderImg" src={this.state.imgUrl}alt="epImg"/>
        <img
          onClick={()=>{
            this.getNewEp(Number(this.state.focusedEpId) +1)
          }}
          className="slider-button case-right"
          src={right}
          alt="rightArrow"/>
      </div>
    )
  }
}
export default Slider