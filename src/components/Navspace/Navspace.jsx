import React from 'react'
import './navspace.scss'
import { FaGithub, FaLinkedin, FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";

const Navspace = () => {
    return (
        <div className="navspace">
            <ul className="links">
                <a href="https://github.com/inciner8r" target="_blank" rel="noreferrer" className="git"><FaGithub size="32px"/></a>
                <a href="https://linkedin.com/in/punarvpawade" target="_blank" rel="noreferrer" className="linkedin"><FaLinkedin size="32px"/></a>
                <a href="https://twitter.com/incinerator_17" target="_blank" rel="noreferrer" className="twitter"><FaTwitter size="32px"/></a>
                <a href="https://t.me/inciner8r" target="_blank" rel="noreferrer" className="telegram"><FaTelegram size="32px"/></a>
                <a href="https://discord.com/users/569047479140483082" target="_blank" rel="noreferrer" className="discord"><FaDiscord size="32px"/></a>
            </ul>

        </div>
    )
}

export default Navspace