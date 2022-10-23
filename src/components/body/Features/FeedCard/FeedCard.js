import { useNavigate } from "react-router-dom";
import Button from "../Button/FeaturesButton.module.css";
import FEEDSTYLES from "./FeedCard.module.css";
import FeedCardImg from "../../../../assets/FeedCardImg.jpg";

export default function FeedCard(props) {
    const navigate = useNavigate();
    return (
    <div className="card-container">
        <div className="card-image">
            <img src={FeedCardImg} alt=""> </img>
        </div>
        <div className={FEEDSTYLES.txt}>
<h3>Drop Feed</h3>
<p>
10 Second Drops. Discover and Listen to new music from a random Artist world wide.<br>
Get props or disses on your music from a random fan and gain exposure.</br>
</p>
        </div>
        <div className={FEEDSTYLES.txt2}>
            <h5>Coming Soon.....</h5>
        </div>
        </div>
)
}
