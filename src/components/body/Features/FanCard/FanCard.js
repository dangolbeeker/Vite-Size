import { useNavigate } from "react-router-dom";
import Button from "../Button/FeaturesButton.module.css";
import FanSTYLES from "./FanCard.module.css";
import  FansCard  from "../../../../assets/FansCard.jpeg";

export default function FanCard(props) {
    const navigate = useNavigate();
    return (
    <div className="card-container">
        <div className="card-image">
            <img src={FansCard} alt=""> </img>
        </div>
        <div className={FanSTYLES.txt}>
<h3>Discover and connect with your favorite artists</h3>
<p>Connect and Subscribe with your favorite artists or watch them from home with friends on tour and more... 
</p>
        </div>
        <div className={Button.btn}>
            <Button onClick={() => navigate('/Fan')}>Find Out More..</Button>
        </div>
        
        </div>
)
}
