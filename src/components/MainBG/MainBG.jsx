import React from 'react'
import Intro from '../Intro/Intro'
import Navspace from '../Navspace/Navspace'
import "./mainBG.scss"

const MainBG = () => {
    return (
        <div className="mainbg">
            <Intro/>
            <Navspace/>
        </div>
    )
}

export default MainBG
