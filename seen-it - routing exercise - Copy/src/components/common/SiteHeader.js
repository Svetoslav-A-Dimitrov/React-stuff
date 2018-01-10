import React from 'react'
import { Link } from 'react-router-dom'



const Header  = (props) =>{
    return (
        <header>
            <span className="logo">☃</span><span className="header">SeenIt</span>
            {props.isLogged
                ? <div id="profile"><span>{localStorage.getItem('username')}</span>|<Link to="/logout">logout</Link></div>
                 : ''
            }
        </header>

    )
}

export default Header


//The file could not be with name Header