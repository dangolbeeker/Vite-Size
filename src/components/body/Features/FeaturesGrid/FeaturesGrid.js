import GRID from "./FeaturesGrid.module.css";
import { NavLink } from "react-router-dom";
import FeedCard from '../FeedCard/FeedCard';
import GroupsCard from '../GroupsCard/GroupsCard';
import FanCard from '../FanCard/FanCard'
import ArtistsCard from '../ArtistCard/ArtistCard'
import PPVCard from '../PPVCard/PPVCard'


function Features() {
    return (
        <div className={GRID.Features_Grid}>
            <div class="card">
                <div class="content">
                    <div class="center">
                        <ArtistsCard />
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <div class="center">
                        <FanCard />
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <div class="center">
                        <PPVCard />
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <div class="center">
                        <FeedCard />
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <div class="center">
                        <GroupsCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;