import { useEffect, useState } from 'react'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import Logo from './Logo'
import Wrapper from '../assets/wrappers/Navbar'

const client = localStorage.getItem('client')

const initDash ={
  text: client ? JSON.parse(client).name:'DashBoard',
}

const Navbar = () => {
    const { lawyer, toggleSidebar, logoutUser } = useAppContext();
    const [showLogout, setShowLogout] = useState(false);
    const [dashValues, setdashValues] = useState(initDash);
  return (
    <Wrapper>
      <div className='nav-center'>
        <button
          className='toggle-btn'
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>
        
        <div>
          {/* <Logo /> */}
          <h3 className='logo-text'>{dashValues.text}</h3>
        </div>

        <div className='btn-container'>
          <button className='btn' onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            {lawyer.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              onClick={logoutUser} 
              className='dropdown-btn'
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar