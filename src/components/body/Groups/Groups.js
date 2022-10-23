import { useEffect, useState } from "react";
import { groupsHeader } from "./groupsHeader";
import GSTYLES from "./Groups.module.css";


function Groups() {
    return (
        <div className={GSTYLES.container}>
            <groupsHeader title="Groups" subtitle="Subscribe and Connect..."/>
            {/* <div className={GSTYLES.artist-header}>
                <img src={GroupsHeader} alt="Groups Header" />
            </div> */}
            <div className={GSTYLES.body}>

                <div className={GSTYLES.txt}>
                    <h3>Groups</h3>
                    <p> Subscribe and Connect with your favorite artists for exclusive content feed, shows, and merchandise.</p>
                     


                </div>
            </div>
        </div>
    )
}

export default Groups;