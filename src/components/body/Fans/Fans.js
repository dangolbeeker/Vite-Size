import { useEffect, useState } from "react";
import { fansHeader } from "./fansHeader";
import FSTYLES from "./Fans.module.css";



const Fans = () => {
    return (
        <div className={FSTYLES.container}>

            <fansHeader title="For Fans" subtitle="Subscriptions, Live Shows, and more.." />
            <div className={FSTYLES.fansub - txt}>
                <h3>Connect with your favorite artist and discover new music...</h3>
                <p>Follow and join your fan groups to show artist apprecieation experience exclusive conetent from  your favorite artist or new favorite artist.</p><br>Subscribe and become a super follower aka Groupie for even more exclusive content and the opportunity to bid with other fans at a chance to dm your favorite artist.</br>
                <h3>Skip scalpers, parking, baby sitters, and sick notes and watch your favorite artist on tour with friends from home..</h3><br><p>No need to pay thousands for tickets or get scammed on Craigslist. You can watch your favorite artist from home or anywhere with payperview events with your favorite artist on tour.</p></br>




            </div>
        </div>

    )
}

export default Fans;