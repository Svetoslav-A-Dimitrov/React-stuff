/**
 * Created by zlatii on 19/11/2017.
 */
import React, {Component} from 'react'
import {addExpense} from './../api/remote'
import {withRouter} from 'react-router-dom'
import toastr from 'toastr'

class AddExpensesPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            category: 'Non-essential',
            cost: '',
            paymentDate: ''
        }

        this.onChangeHandler= this.onChangeHandler.bind(this)
        this.onSubmit= this.onSubmit.bind(this)
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault()
        let year = this.props.match.params.year
        let month = this.props.match.params.month
        let date =Number(this.state.paymentDate)
        addExpense(year, month, date, this.state.name, this.state.category,Number( this.state.cost))
            .then(res => {
               // console.log(res)
             if(res.success){
                 toastr.success('expense creted')
             }else{
                 toastr.error(res.message)
             }

               // this.props.history.push('back')
            })

    }

    render() {
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        return(
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Add Expenses</h1>
                        <h3>{monthNames[this.props.match.params.month -1]} {this.props.match.params.year}</h3>
                    </div>
                </div>
                <div className="row space-top">
                    <div className="col-md-10">
                        <form onSubmit={this.onSubmit}>
                            <legend>Add a new expense</legend>
                            <div className="form-group">
                                <label className="col-md-2" htmlFor="name">Name:</label>
                                <input onChange={this.onChangeHandler} className="col-md-2" name="name" type="text"/>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2" htmlFor="category">Category:</label>
                                <select onChange={this.onChangeHandler} className="col-md-2 pl-2" name="category">
                                    <option>Non-essential</option>
                                    <option>Fixed</option>
                                    <option>Variable</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2" htmlFor="cost">Cost:</label>
                                <input onChange={this.onChangeHandler} className="col-md-2" name="cost" type="number"/>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2" htmlFor="paymentDate">Payment Date:</label>
                                <input onChange={this.onChangeHandler} className="col-md-2" name="paymentDate" type="text"/>
                            </div>
                            <input type="submit" className="btn btn-secondary" value="Add"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AddExpensesPage)