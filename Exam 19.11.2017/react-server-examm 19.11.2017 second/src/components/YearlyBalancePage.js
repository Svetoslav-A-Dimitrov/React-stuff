/**
 * Created by zlatii on 19/11/2017.
 */
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {getYearBalance} from './../api/remote'
import Month from '../components/Month'

class YearlyBalancePage extends Component {
constructor(props){
    super(props)

    this.state = { year : []}
}
    componentDidMount(){
        let date = new Date;
        let year = date.getFullYear()
        getYearBalance(year)
            .then(res =>{
                console.log(res)
                this.setState({year: res})
            })
    }
    render() {
        let date = new Date;
        let year = date.getFullYear()
        let monthsNumbers = [1,2,3,4,5,6,7,8,9,10,11,12]
        return(
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Yearly Balance</h1>
                    </div>
                </div>
                <div className="row space-top col-md-12">
                    {monthsNumbers.map(m => <Month key={m} data={this.state.year[m]}  month={m} year ={year}/>)}
                </div>
            </div>
        )
    }
}

export default YearlyBalancePage