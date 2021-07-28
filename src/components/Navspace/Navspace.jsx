import React from 'react'
import './navspace.scss'
import { FaGithub, FaLinkedin, FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";

const Navspace = () => {
    const showLink = (e) => {
        //e.preventDefault()
        var targ = e.target
        if(e.target.tagName === "path" ){
            targ = e.target.parentElement.parentElement
        }
        if(e.target.tagName === "svg"){
            targ = e.target.parentElement
        }
        if(e.target.className === "link-text" || e.target.classList[0] === "link-text"){
            targ = e.target.parentElement
        }
        if(targ.childNodes[1].classList[1] !== "link-active"){
            let childs = document.querySelector(".links").childNodes
            childs.forEach(element => {
                if(element.childNodes[1].classList[1] === "link-active"){
                    element.childNodes[1].classList.toggle("link-active")
                    element.classList.toggle("link-btn-active")
                }
            });
            e.preventDefault()
            targ.classList.toggle("link-btn-active")
            targ.childNodes[1].classList.toggle("link-active")
        }
        //targ.childNodes[1].classList.toggle("link-active")
    }
    return (
        <div className="navspace">
            <ul className="links">
                <a href="https://github.com/inciner8r" target="_blank" rel="noreferrer" className="git link-btn" onClick={showLink}>                     
                    <FaGithub className="link-icon" size="32px"/>
                    <div className="link-text">Github</div>
                </a>
                <a href="https://linkedin.com/in/punarvpawade" target="_blank" rel="noreferrer" className="linkedin link-btn" onClick={showLink}>
                    <FaLinkedin className="link-icon" size="32px"/>
                    <div className="link-text">Linkedin</div>
                </a>
                <a href="https://twitter.com/incinerator_17" target="_blank" rel="noreferrer" className="twitter link-btn" onClick={showLink}>
                    <FaTwitter className="link-icon" size="32px"/>
                    <div className="link-text">Twitter</div>
                </a>
                <a href="https://t.me/inciner8r" target="_blank" rel="noreferrer" className="telegram link-btn" onClick={showLink}>
                    < FaTelegram className="link-icon" size="32px"/>
                    <div className="link-text">Telegram</div>
                </a>
                <a href="https://discord.com/users/569047479140483082" target="_blank" rel="noreferrer" className="discord link-btn" onClick={showLink}>
                    <FaDiscord className="link-icon" size="32px"/>
                    <div className="link-text">Discord</div>
                </a>
            </ul>
        </div>
    )
}

export default Navspace