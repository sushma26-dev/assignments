import React from 'react';
import {  Link } from 'react-router-dom';
import './App.css'
function Home(){
    const menuItems = [
        { key: "crud", "displayName": "CRUD", isDefaut: true },
        { key: "login", "displayName": "LOGIN", isDefaut: false },
    ];

    

    return(
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <span style={{ color: 'white', fontSize: '1.6rem' }}> Amadis</span>
                    <div id="navbarResponsive">
                        <ul className="navbar-nav">
                            {menuItems.map((menu, i) =>
                                <li className='nav-item mx-0 mx-lg-1' key={i}>
                                    <Link to={'/' + menu.key} className='li' style={{ color: 'white'}}>{menu.displayName}</Link>
                                </li>
                            )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <h1 className="home">Welcome to Amadis Global</h1>
        </div>
        
    )
}
export default Home;