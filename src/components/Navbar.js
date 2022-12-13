import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Reorder } from '@material-ui/icons';

import "../styles/Navbar.css"

function Navbar() {

    const [expandNavbar, setExpandNavbar] = useState(false);
    const Location = useLocation(); //it is used get info where in your web u r

    useEffect(() =>{
        setExpandNavbar(false)
    }, [Location])
 
  return (
    <div className='navbar' id={expandNavbar ? 'open': 'close'}>
        <div className='toggleButton'>
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
                <Reorder />
            </button>
        </div> 
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/experience'>Experience</Link>
        </div>
    </div>
  )
}

export default Navbar