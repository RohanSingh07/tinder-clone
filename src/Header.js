// type rfce(ES7 Extension) and Enter which will autotype the basic format of functional components

import React from 'react';
import "./Header.css";
// Install dependencies @material-ui/core and @material-ui/icons for icons refer web
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    
    return (
        <div className='header'>
        <IconButton>
            <PersonIcon fontSize='Large' className='header__icon'/>
        </IconButton>    
        <img 
            className='header__logo'
            src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
            alt=''
        
        />
        <IconButton>
            <ForumIcon fontSize='large' className='header__icon' />
        </IconButton>
        </div>
    )
}

export default Header
