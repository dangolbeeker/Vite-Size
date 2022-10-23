import  PPVHeader  from "../../../assets/PPVHeader.jpg";
import PH from "./ppvHeader.module.css";




export const ppvHeader = ({title, subTitle}) => {
    return (
        <section>
            <div style={{ backgroundImage: `url(${PPVHeader})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                clipPath: 'url(#cross)'
    }}>

                <div className="container" style={{minHeight: '550px'}}>
                    <div className={PH.headertxt}>
                        <h1 className="pt-5 pb-3">{title}</h1>
                        {/* <h5>{subTitle}</h5> */}
                    </div>
                </div>
            </div>
        </section>
    )
}