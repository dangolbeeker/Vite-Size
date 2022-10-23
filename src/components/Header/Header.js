import { useState } from "react";
import HeaderCSS from "../Header/Header.module.css";
import Menu from "../../svgs/bars-solid.svg";
import Close from "../../svgs/times-solid.svg";
import Logo from "../../svgs/logotrans.svg";
import { Link } from "react-router-dom";




function Header() {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }


    return (
        <header>
            <div className={HeaderCSS.menu} onClick={toggleMenu}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <img src={Logo} all="" width="120" height="90" />
            </div>
            <div className={HeaderCSS.nav_container}>
                <ul style={styleMenu}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/artists">Artists</Link></li>
                    <li><Link to="/fans">Fans</Link>/</li>
                    <li><Link to="/groups">Groups</Link></li>
                    <li><Link to="/ppv">PPV</Link></li>
                    <li><Link to="/feed">Feed</Link></li>
                    <li onClick={toggleMenu}>
                        <img src={Close} alt="" width="30" className="menu" />
                    </li>
                </ul>
            </div>
           
        </header>

    )
}

export default Header;