import ArtistsHeader from "../../../assets/ArtistHeader.jpeg";
import AH from "./artistsHeader.module.css";


export const artistsHeader = ({ title, subTitle }) => {
    return (
        <section>
            <div style={{
                backgroundImage: `url(${ArtistsHeader})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                clipPath: 'url(#cross)'
            }}>

                <div className="container" style={{ minHeight: '550px' }}>
                    <div className={AH.headertxt}>
                        <h1 className="pt-5 pb-3">{title}</h1>
                        <h5>{subTitle}</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}