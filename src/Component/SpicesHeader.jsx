import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Assests/Images/logo1.png'

const SpicesHeader = () => {
    const navigate = useNavigate();
  return (
    <div>
      <header className='nav-header'>
        <div className="nav-wrapper">
            <div className="logo-container">
                <img className="logo" src={logo} alt="Logo" onClick={()=>navigate('/')}/>
            </div>
            <nav>
                <input className="hidden" type="checkbox" id="hmenuToggle"/>
                <label className="hmenu-btn" htmlFor="hmenuToggle">
                    <div className="hmenu"></div>
                    <div className="hmenu"></div>
                    <div className="hmenu"></div>
                </label>
                <div className="nav-container">
                    <ul className="snav-tabs">
                        <li className="snav-tab">
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className="snav-tab">
                            <Link>Blog</Link>
                        </li>
                        <li className="snav-tab">
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li className="snav-tab">
                            <Link to={'/contact-us'}>Contact</Link>
                        </li>
                        <li className="snav-tab">
                            <Link to={'/catalog'}>Catalog</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    </div>
  )
}

export default SpicesHeader
