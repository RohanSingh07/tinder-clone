import React from 'react';
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";


function SwipeButtons() {
    return (
        <div className='SwipeButtons'>
            <IconButton  className='swipeButtons__repeat swipeButtonsCommon'>
                <ReplayIcon fontSize='large'/>   
            </IconButton>
            <IconButton  className='swipeButtons__left swipeButtonsCommon'>
                <CloseIcon fontSize='large'/>   
            </IconButton>
            <IconButton  className='swipeButtons__star swipeButtonsCommon'>
                <StarRateIcon  fontSize='large' />   
            </IconButton>
            <IconButton  className='swipeButtons__right swipeButtonsCommon'>
                <FavoriteIcon fontSize='large'/>   
            </IconButton>
            <IconButton className='swipeButtons__lightning swipeButtonsCommon' >
                <FlashOnIcon fontSize='large' />   
            </IconButton>
        </div>
    )
}

export default SwipeButtons
