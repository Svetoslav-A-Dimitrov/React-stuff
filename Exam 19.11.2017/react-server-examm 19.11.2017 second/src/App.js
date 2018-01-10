import React, { Component } from 'react';
import Header from './components/common/Header'
import {Switch, Route, withRouter} from 'react-router-dom'
import NotFound from './components/common/NotFound'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import YearlyBalance from './components/YearlyBalancePage'
import MonthlyBalance from './components/MothlyBalancePage'
import AddExpenses from './components/AddExpensesPage'

class App extends Component {
  constructor(props){
    super(props)

      this.onLogout = this.onLogout.bind(this)
  }

  onLogout(){
    localStorage.clear()
    this.props.history.push('/')
  }

  render() {
    let isLogged = localStorage.getItem('authToken')
    return (
      <div className="App">
        <Header loggedIn={localStorage.getItem('authToken') != null} onLogout={this.onLogout}  />
          <Switch>
              {!isLogged &&  <Route exact path="/register" component={Register}/>}
              {!isLogged &&  <Route exact path="/login" component={Login}/>}
              {isLogged &&  <Route exact path="/yearly-balance" component={YearlyBalance}/>}
              {isLogged &&  <Route exact path="/addExpenses/:year/:month" component={AddExpenses}/>}
              {isLogged &&  <Route exact path="/monthly-balance/:year/:month" component={MonthlyBalance}/>}
              {isLogged && <Route exact path="/" component={MonthlyBalance}/>}
              {!isLogged && <Route exact path="/" component={Login}/>}

            <Route component={NotFound}/>
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
