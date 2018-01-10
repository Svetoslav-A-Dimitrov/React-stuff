/**
 * Created by sve on 31.10.2017 г..
 */
import React, {Component} from 'react'
import Char from './Char'


class Roster extends Component {
  constructor (){
    super()

    this.state = {
      imgUrls: [],
    }
  }

  componentDidMount(){
    fetch('http://localhost:9999/roster')
      .then((data) =>{
        return data.json()
      }).then(parsedData =>{

      this.setState({imgUrls: parsedData})
    })
      .catch(err =>{
        console.log(err)
      })
  }

  render(){
    return(
      <div className="roster-warper">
        {this.state.imgUrls
          .map(c => {
              return <Char key={c.id} params={c}/>
              })
        }
      </div>
    )
  }
}
export default Roster