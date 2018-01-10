import React, { Component } from 'react';
import './App.css';
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import Header from './components/Header'
import LoginForm from './components/Form/Form'

const About = props=> (
  <div>
    <h1>About Page</h1>
      <Link to="/about/contact">Contact</Link>
      <Route path={props.match.url + '/contact'} component={Contact}></Route>
  </div>
)
const Home = props=> (
  <div><h1>Hoem Page</h1></div>
)
const Dashboard = props=> (
  <div>
    <h1>Your Dashboard</h1>
    <p>{props.data}</p>
  </div>
)
const Contact = props=> (
  <div><h1>Contact Page</h1></div>
)
const User = props=> (
  <div>
    <h1>User details</h1>
    <p>Desplay details for {props.match.params.user}</p>
  </div>
)
const NotFound = props=> (
  <div><h1>404 Not Found</h1></div>
)

function  WithData(WrrapedComponent, data) {
  class WithData extends Component{
    render(){
     return <WrrapedComponent data={data}/>
    }
  }
  return WithData
}

const DashboardWithData = WithData(Dashboard, 'Some new Data')

class App extends Component {
  constructor(props){
    super(props)

    this.state = {loggedIn: false}
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" render={()=>{
            if(this.state.loggedIn)  return (<Redirect to="/dashboard" />);
            else return (<Home/>);

          }} />
          <Route path='/home' component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/details/:user" component={User}/>
          <Route component={NotFound}/>
        </Switch>
        <DashboardWithData/>
        <LoginForm/>
      </div>
    );
  }
}

export default App;
