import React from 'react'
import './Intro.scss'
import pfp from '../../assets/pfp.png';

const Intro = () => {
    return (
        <div className="intro">
            <img src={pfp} alt="placeholder" />
            <div className="intro__info">
                <div className="name">Punarv Pawade</div> 
                <div className="aka">aka</div>
                <div className="nickname">Incinerator</div>
                <div className="info">Student</div>        
            </div>   
        </div>
    )
}

export default Intro
