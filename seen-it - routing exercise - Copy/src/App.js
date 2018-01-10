import React, { Component } from 'react';
import './App.css';
import Header from  './components/common/SiteHeader'
import Footer from './components/common/Footer'
import GusetHome from  './components/mainElements/GuestHome'
import Home from  './components/mainElements/Home'
import {BrowserRouter} from 'react-router-dom'

    class App extends Component {
    constructor(props){
        super(props)

        this.state = {token : ''}
    }

    componentDidMount(){
        this.setState({token: localStorage.getItem('token')})
    }
  render() {
      let isLogged = localStorage.getItem('token')
    return (
        <BrowserRouter>
            <div>
                <Header isLogged={isLogged}/>

                {isLogged ? <Home/>: <GusetHome/>}

                <Footer/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
