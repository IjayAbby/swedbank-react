import React from 'react'
import Logo from '../images/swedbank-logo.svg'
import { BsBoxArrowInRight, BsChevronDown } from "react-icons/bs";

function NavBar() {
    return (
        <header>
            <nav className='bottomBorder'>
                <div className='first-nav'>
                    <div className="">
                        <img className='logo' src={Logo} alt='logo'></img>
                        <a>Private</a>
                        
                    </div>
                    <div className=''>
                        <span>EN</span>
                        <BsChevronDown className='arrow-down'/>
                        <span>Become a customer</span>
                        <BsBoxArrowInRight/>
                        <span>Log In</span>
                    </div>
                </div>
                <div></div>
                <div></div>
            </nav>
        </header>
    )
}

export default NavBar;
