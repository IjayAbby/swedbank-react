import React from 'react'
import Logo from '../images/swedbank-logo.svg'
import { BsBoxArrowInRight, BsFillPlayFill } from "react-icons/bs";
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import { IoHome } from "react-icons/io5";

function NavBar() {
    return (
        <header className='bottomBorder'>
            <nav className='nav1'>
                <img className='logo' src={Logo} alt='logo'></img>
                <span className='fs-8'>Private <FaChevronDown className='primary-color'/></span>
                    <ul className='a'>
                        <li className='fs-8'>EN <FaChevronDown className='primary-color'/> </li>
                        <li className='fs-8'>Become a customer</li>
                        <li className='fs-8'><BsBoxArrowInRight className='primary-color'/> Log In</li>
                    </ul>
            </nav>
            <nav>
                <ul className='border-top border-bottom d-flex justify-content-between'>
                    <li className='border-start border-end px-5 py-2 brown-color'><IoHome /></li>
                    <li className='border-end pe-4 py-2 fw-bold fs-7 brown-color'>Everyday banking</li>
                    <li className=' border-end pe-4 py-2 fw-bold fs-7 brown-color'>Cards</li>
                    <li className=' border-end pe-4 py-2 fw-bold fs-7'>Loan,leasing</li>
                    <li className=' border-end pe-4 py-2 fw-bold fs-7 brown-color'>Savings, Investments</li>
                    <li className=' border-end pe-4 py-2 fw-bold fs-7 brown-color'>Pension</li>
                    <li className=' border-end pe-4 py-2 fw-bold fs-7 brown-color'>Insurance</li>
                    <li className='border-end pe-4 py-2 brown-color'><FaSearch /></li>
                </ul>    
                
            </nav>
            <nav>
                <ul className="d-flex fs-9 border secondary-color py-2">
                    <li>Home <BsFillPlayFill /></li>
                    <li>Loan, leasing <BsFillPlayFill /></li>
                    <li className='fw-bold'>Small loan</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;

