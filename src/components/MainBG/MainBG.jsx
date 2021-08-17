import React from 'react'
import Intro from '../Intro/Intro'
import Navspace from '../Navspace/Navspace'
import "./mainBG.scss"

const MainBG = () => {
    return (
        <div className="mainbg" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/background.jpg')`, minHeight: window.innerHeight}}>
            <Intro/>
            <Navspace/>
        </div>
    )
}

export default MainBG
