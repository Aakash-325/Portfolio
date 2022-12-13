import React from 'react';
import { Instagram } from '@material-ui/icons';
import { Twitter } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://www.instagram.com/lazy_pro_grammer/'>
          <Instagram className='socialIcon'/>
        </a>
        <a href='https://twitter.com/Akash_x_01'>
          <Twitter className='socialIcon'/>
        </a>
        <a href='https://github.com/Aakash-325'>
          <GitHub className='socialIcon'/>
        </a>
        <a href='https://www.linkedin.com/in/chaurasiya-akash-3b7512254/'>
          <LinkedIn className='socialIcon'/>
        </a>
      </div>
      <p>Copyright &copy; 2022 | Akash</p>
    </div>
  )
}

export default Footer;