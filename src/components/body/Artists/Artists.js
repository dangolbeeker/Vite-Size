import { useEffect, useState } from "react";
import { artistsHeader } from "./artistsHeader";
import ASTYLES from "./Artists.module.css";


const Artists = () => {
    return (
        <div className="container">
            <artistsHeader title="For Artists" subtitle="Gain exposure and increase Revenue..." />

            <div className={ASTYLES.txt}>
                <h3>Its Bigger than streaming</h3>
                <p>Subscriptions, Merchandise, and Touring account for most of your revenue. While streaming is a great method of measuring your success its not your main drive of revenue.<br>
                    Connect with fans and brands in new ways without hoping platform to platfrom. Turn a 3600 person venue into a 36,000 person venue.</br>
                    <p></p> 58% of millennials dont mind ads from there favorite celebrity or influcener.</p>




            </div>
        </div>

    )
}

export default Artists;