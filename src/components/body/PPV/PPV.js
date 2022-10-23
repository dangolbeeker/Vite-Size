import { useEffect, useState } from "react";
import { ppvHeader } from "./ppvHeader";
import PSTYLES from "./PPV.module.css";


    function PPV() {
        return (
            <div className={PSTYLES.container}>
                <ppvHeader title="Pay Per View"/>
                    <div className={PSTYLES.txt}>
                        <h3>For Fans - Experience The Show on Your Schedule...</h3>
                        <p>Skip scalpers, parking, baby sitters, and sick notes and watch your favorite artist on tour with friends from home..</p>
                        <br><p>No need to pay thousands for tickets or get scammed on Craigslist. You can watch your favorite artist from home or anywhere with payperview events with your favorite artist on tour.</p></br>
                        <h3>For Artists - The Skys the Limit...</h3>
                        <p>Lights, Camera, Action... The sky's the limit with your revenue.</p><p>Increase your revenue and fanbase by leveraging the platform to increase your show size and revenue. Your revenues no longer restricted to a venues seating chart.</p>


                    </div>
                </div>
            
        )
    }

export default PPV;