

import STYLES from "./Hero.module.css";



export default function Hero() {
return (
<section className={STYLES.heroContainer}>
    <div className={STYLES.vidLoop}>
        <video src="/assets/introvid.mp4" muted loop autoPlay></video>
    </div>

    <div className={STYLES.overlay}></div>
    <div className={STYLES.text}>
        <h3>It's Bigger than Hip Hop</h3>
        <p>
Welcome to the future of music. 
A platform connecting fans and artists around the world!
        </p>
    </div>
</section>
);
};