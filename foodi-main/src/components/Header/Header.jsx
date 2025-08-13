import React from 'react'
import './Header.css';

const Header = props => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectble array of kishes crafted</p>
            <button>View Menu</button>
        </div>
      
    </div>
  )
}

Header.propTypes = {

}

export default Header
