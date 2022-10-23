import { useNavigate } from "react-router-dom";
import PPVStyles from "./PPVFeature.module.css";
import PPVCardimg from "../../../../assets/PPVCard.jpg";
import { Button } from "semantic-ui-react";

export default function PPVCard() {
    const navigate = useNavigate();
    return (
    <div className="card-container">
        <div className="card-image">
            <img src={PPVCardimg} alt=""> </img>
        </div>
        <div className={PPVStyles.txt}>
<h3>Fan Groups and Subscriptions</h3>
<p>Turn a 3600 person arena into a 36,000 person arena.<br>No more long lines finding baby sitters or scalping tickets...</br></p>
        </div>
        <div className={Button.btn}>
            <Button onClick={() => navigate('/Ppv')}>Learn More..</Button>
        </div>
        
        </div>
)
}
