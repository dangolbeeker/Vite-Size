import STYLES from "./GroupsCard.module.css";
import { useNavigate } from "react-router-dom";


export default function GroupsCard(props) {
    const navigate = useNavigate();
    return (
    <div className="card-container">
        <div className="card-image">
            <img src={someimg} alt=""> </img>
        </div>
        <div className={FEEDSTYLES.card-txt}>
<h3>Fan Groups and Subscriptions</h3>
<p> Subscribe and Connect with your favorite artists for exclusive content..
</p>
        </div>
        <div className={Button.card-btn}>
            <Button onClick={() => navigate('/Groups')}>Learn More..</Button>
        </div>
        
        </div>
)
}
