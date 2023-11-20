import { useState, useEffect } from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"
import {NavLink, Outlet} from 'react-router-dom'

export const Header = () => {

    // const [currentView, setCurrentView] = useState("");
    
    // const handleViewChange = (view) => {
    //     setCurrentView(view);
    // }

    return (
        <nav className='header_cashier'>
            <div className='sharetea_header'>
                ShareTea
            </div>
            <ul className='links'>
                <li><NavLink to ="/CashierLanding/vieworder">View Orders</NavLink></li>
                <li><NavLink to = '/CashierLanding/placeorder'>Place Orders</NavLink></li>
                {/* <li onClick={() => handleViewChange('viewOrders')}> View Orders</li>
                <li onClick={() => handleViewChange('placeOrders')}>Place Orders</li> */}
                <li><NavLink to = '/home'>Log Out</NavLink></li>
            </ul>

            <Outlet/>
        </nav>
    )

}