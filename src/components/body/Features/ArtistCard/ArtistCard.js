import { useNavigate } from "react-router-dom";
import Button from "../Button/FeaturesButton.module.css";
import ArtistSTYLES from "./ArtistCard.module.css";
import   ACard  from '../../../../assets/ArtistsCard.png';


export default function ArtistCard(props) {
    const navigate = useNavigate();
    return (
    <div className="card-container">
        <div className="card-image">
            <img src={ACard} alt="" />
        </div>
        <div className={ArtistSTYLES.txt}>
<h3>Artist</h3>
<p>
Rather established or up and coming gain exposure and reach fans worldwide while generating revenue in ways other than streaming.</p>
        </div>
        <div className={Button.btn}>
            <Button onClick={() => navigate('/Artist')}>Learn More..</Button>
        </div>
        
        </div>
)
}
