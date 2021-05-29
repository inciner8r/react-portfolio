import "./navbar.scss"

export default function navbar() {
    return (
        <nav>
            <div className="navbar_container">
                <div className="nav_logo">
                    <p>Logo</p>
                </div>
                <ul className="nav_menu">
                    <li id="home">
                        <a href="">home</a>
                    </li>
                    <li id="info">
                        <a href="">info</a>
                    </li>
                    <li id="contact">
                        <a href="">contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
