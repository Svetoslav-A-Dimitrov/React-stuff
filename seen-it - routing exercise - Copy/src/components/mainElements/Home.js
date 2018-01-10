
import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Catalog from './Catalog'
import Submit from './Submit'
import Posts from './Posts'
import App from './../../App'

const Home  = () =>{
    return (
        <div>
            <div id="menu">
                <div className="title">Navigation</div>
                <Link className="nav" to="/catalog">Catalog</Link>
                <Link className="nav" to="/submit">Submit Link</Link>
                <Link className="nav" to="/posts">My Posts</Link>
            </div>
            <Switch>
                <Route exact path="/" component={Catalog}/>
                <Route exact path="/catalog" component={Catalog}/>
                <Route exact path="/submit" component={Submit}/>
                <Route exact path="/posts" component={Posts}/>
                <Route path="/logout" render={()=>{
                    localStorage.clear()
                    return(
                            <Link to="/">
                                test
                            </Link>
                        )


                    // return <Link to="/">click here and then refresh</Link>
                }}/>

            </Switch>
        </div>


    )
}

export default Home