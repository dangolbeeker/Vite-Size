import { Link } from "react-router-dom";
import FSTYLES from "./Footer.module.css";
import { SocialIcon } from "react-social-icons";


function Footer() {
    return (
        <Footer id={FSTYLES.footer}>
            <div className={FSTYLES.social}>
                <SocialIcon url="https://instagram.com/onlyspitters" />
                <SocialIcon url="https://twitter.com/onlyspitters" />
                <SocialIcon url="https://facebook.com/onlyspitters" />
            </div>
            <h4>© 2022 OnlySpitters</h4>

            <Link to="/Artists">Artists</Link>
            <Link to="/Fans">Fans</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Media">Media</Link></Footer>
    )
}


export default Footer;