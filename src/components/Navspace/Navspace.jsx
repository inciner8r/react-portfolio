import React from 'react'
import './navspace.scss'
import { FaGithub, FaLinkedin, FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";

const Navspace = () => {
    const showLink = (e) => {
        var targ = e.target
        if(targ.childNodes[0].childNodes[1].classList[1] !== "link-active"){
                e.preventDefault()
                    if(document.querySelector(".link-active") !== null){
                        document.querySelector(".link-active").classList.toggle("link-active")
                        document.querySelector(".link-btn-bg-active").classList.toggle("link-btn-bg-active")
                    }     
                targ.childNodes[0].classList.toggle("link-btn-bg-active")
                targ.childNodes[0].childNodes[1].classList.toggle("link-active")             
            }
        }
    
    return (
        <div className="navspace">
            <ul className="links">
                <a href="https://github.com/inciner8r" target="_blank" rel="noreferrer" className="git link-btn" onClick={showLink}>
                    <div className="nav-links-bg">                     
                        <FaGithub className="link-icon" size="32px"/>
                        <div className="link-text">Github</div>
                    </div>
                </a>
                <a href="https://linkedin.com/in/punarvpawade" target="_blank" rel="noreferrer" className="linkedin link-btn" onClick={showLink}>
                <div className="nav-links-bg">
                        <FaLinkedin className="link-icon" size="32px"/>
                        <div className="link-text">Linkedin</div>
                    </div>
                </a>
                <a href="https://twitter.com/inciner8rz" target="_blank" rel="noreferrer" className="twitter link-btn" onClick={showLink}>
                    <div className="nav-links-bg">
                        <FaTwitter className="link-icon" size="32px"/>
                        <div className="link-text">Twitter</div>
                    </div>
                </a>
                <a href="https://t.me/inciner8r" target="_blank" rel="noreferrer" className="telegram link-btn" onClick={showLink}>
                    <div className="nav-links-bg">
                        < FaTelegram className="link-icon" size="32px"/>
                        <div className="link-text">Telegram</div>
                    </div>    
                </a>
                <a href="https://discord.com/users/569047479140483082" target="_blank" rel="noreferrer" className="discord link-btn" onClick={showLink}>
                    <div className="nav-links-bg">
                        <FaDiscord className="link-icon" size="32px"/>
                        <div className="link-text">Discord</div>
                    </div>
                </a>
            </ul>
        </div>
    )
}

export default Navspace
