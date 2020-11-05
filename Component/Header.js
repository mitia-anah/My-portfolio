import React from 'react'
import Lshine from '../assets/Lshine.png'

function Navigation() {
    return (
        <header>
            <img className="lshine" src={Lshine} />
            <ul className='navigation'>
                <li><a className='nav-list' href=''>Profile</a></li>
                <li><a className='nav-list' href=''>Job</a></li>
                <li><a className='nav-list' href=''>Blog</a></li>
                <li><a className='nav-list' href=''>Experiences</a></li>
                <li><a className='nav-list' href=''>Background</a></li>
                <li><a className='nav-list' href=''>Contact</a></li>
            </ul>
        </header>
    )
}

export default Navigation