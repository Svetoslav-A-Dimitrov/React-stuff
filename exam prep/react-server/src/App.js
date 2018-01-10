import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import CreatePage from './components/Create/Create'
import ProfilePage from './components/Profile/ProfilePage'
import DetailsPage from './components/Details/Details'
import LoginPage from './components/Auth/LoginPage'
import RegisterPage from './components/Auth/RegisterPage'
import NotFount from './components/common/NotFount'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import {furniture} from './data.json'
import {remove} from './api/remote'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <main>
              <Switch>/
                  <Route exact path="/" render={()=> <HomePage furniture={furniture}/>}/>
                  <Route path="/furniture/all/:page" render={()=> <HomePage furniture={furniture}/>}/>
                  <Route  path="/create" component={CreatePage}/>
                  <Route  path="/profile" component={ProfilePage}/>
                  <Route  path="/details/:id" component={DetailsPage}/>
                  <Route  path="/login" component={LoginPage}/>
                  <Route  path="/register" component={RegisterPage}/>
                  <Route component={NotFount}/>
              </Switch>
          </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
