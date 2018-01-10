/**
 * Created by zlatii on 19/11/2017.
 */
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Expense from './Expense'
import {getExpenses, setBalance, removeExpense} from './../api/remote'
import toastr from 'toastr'
import {withRouter} from 'react-router-dom'

class MonthlyBalancePage extends Component {
    constructor(props){
        super(props)

        this.state= {
            year : '',
            month:'',
            expenses: [],
            budget: 0,
            income: 0

        }
        this.onChangeHandler= this.onChangeHandler.bind(this)
        this.onSubmit= this.onSubmit.bind(this)
        this.remove= this.remove.bind(this)
    }

    remove(id){
        removeExpense(id)
            .then(res =>{
                if(!res.success){
                    toastr.error('unable deleted')
                    return
                }
                toastr.success('expense deleted')
                getExpenses(this.state.year, this.state.month)
                    .then(res => {
                        this.setState({expenses: res.expenses, budget:Number(res.budget), income:Number(res.income)})
                    })
            })
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault()
        setBalance(this.state.year,
            this.state.month,
            Number(this.state.income),
            Number( this.state.budget),

        )
            .then(res => {
                if(res.success){
                    toastr.success('balance updated')
                }else{
                    toastr.error(res.message)
                }

                console.log(res)
                this.setState({income: res.plan.income})
                this.setState({budget: res.plan.budget})


                console.log(this.state)
            })
    }

componentDidMount(){

        let date = new Date()
        let year =  date.getFullYear();
        let month = date.getMonth()+ 1
        if(this.props.match.params.year && this.props.match.params.month){
            year = this.props.match.params.year
            month= this.props.match.params.month
        }
        this.setState({year: year, month:month , expenses: []})

        getExpenses(year, month)
            .then(res => {
                this.setState({expenses: res.expenses, budget:Number(res.budget), income:Number(res.income)})
            })
    }

    render() {
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
       // console.log(this.state)

        let link = `/addExpenses/${this.state.year}/${this.state.month}`

        return(
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Welcome to Budget Planner</h1>
                    </div>
                </div>
                <div className="row space-top ">
                    <div className="col-md-12 ">
                        <div className="card bg-secondary">
                            <div className="card-body">
                                <blockquote className="card-blockquote">
                                    <h2 id="month">{monthNames[this.state.month -1]} {this.state.year}</h2>
                                    <div className="row">
                                        <div className="col-md-3 space-top">
                                            <h4>Planner</h4>
                                            <form onSubmit={this.onSubmit}>
                                                <div className="form-group">
                                                    <label className="form-control-label" htmlFor="income">Income:</label>
                                                    <input value={this.state.income} onChange={this.onChangeHandler} className="form-control" name="income" type="number"/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-control-label" htmlFor="budget">Budget:</label>
                                                    <input value={this.state.budget} onChange={this.onChangeHandler} className="form-control" name="budget" type="number"/>
                                                </div>
                                                <input type="submit" className="btn btn-secondary" value="Save"/>
                                            </form>
                                        </div>
                                        <div className="col-md-8 space-top">
                                            <div className="row">
                                                <h4 className="col-md-9">Expenses</h4>
                                                <NavLink to={link} className="" name="btn btn-secondary ml-2 mb-2">Add expenses</NavLink>
                                                {/*<a href="expenses.html" className="btn btn-secondary ml-2 mb-2">Add expenses</a>*/}
                                            </div>
                                            <table className="table">
                                                <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Category</th>
                                                    <th>Cost</th>
                                                    <th>Payment Date</th>
                                                    <th></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                               {/*{(console.log(this.state.expenses))}*/}
                                                {this.state.expenses.map((e, i) => {
                                                    return <Expense key={i}  data={e} remove={this.remove}/>
                                                })}



                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default  withRouter(MonthlyBalancePage)