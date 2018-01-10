import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Month extends Component {
constructor(props){
    super(props)

    this.state= {budget : 0, balance : 0}
}
    componentWillReceiveProps(nextProps){
        this.setState({budget : nextProps.data.budget, balance : nextProps.data.balance})
    }
    render() {
        let month = this.props.month
        let year = this.props.year
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let link = "/monthly-balance/" + year + '/' + month
        return(
            <div className="col-md-3">
                <div className="card text-white bg-secondary">
                    <div className="card-body">
                        <blockquote className="card-blockquote">
                            <h2>{monthNames[month-1]}</h2>
                            <h4>Year {year}</h4>
                            <label htmlFor="budget">Budget:</label>
                            <input className="col-md-9" name="budget" disabled="true" value={this.state.budget}/>
                            <label htmlFor="balance">Balance:</label>
                            <input className="col-md-9" name="balance" disabled="true" value={this.state.balance}/>
                            <div className="space-top">
                                <NavLink className="btn btn-secondary"  exact to={link}>Details</NavLink>
                                {/*<a href="monthly.html" className="btn btn-secondary">Details</a>*/}
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        )
    }
}

export default Month
