import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <nav className='nav'>
          <div>Shelfie</div>
          <div className='link-wrap'>
            <Link to='/' className='links'>Dashboard</Link>
            <Link to='/add' className='links'>Add Inventory</Link>
          </div>
        </nav>
    )

}

export default Header;