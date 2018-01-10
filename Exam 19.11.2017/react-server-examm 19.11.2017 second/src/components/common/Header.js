/**
 * Created by zlatii on 16/11/2017.
 */
import React from 'react'
import {NavLink} from 'react-router-dom'

function Header (props){
    let {loggedIn, onLogout} = props
    let date = new  Date()
    let curMonth = date.getMonth()
    let curYear = date.getFullYear()
    let link = `/monthly-balance/${curYear}/${curMonth}`
    return(
        <header>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            { loggedIn && <NavLink className="nav-link" activeClassName="active" to="/yearly-balance">Yearly Balance</NavLink>}
                            { loggedIn && <NavLink className="nav-link" activeClassName="active" to={link}>Monthly Balance</NavLink>}
                            { loggedIn && <a className="nav-link" href="javascript:void(0)" onClick={onLogout}>Logout</a> }
                            { !loggedIn && <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>}
                            { !loggedIn && <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header