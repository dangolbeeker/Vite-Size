import  FansHeader  from "../../../assets/FansHeader.jpeg";
import FH from "./fansHeader.module.css";


export const fansHeader = ({title, subTitle}) => {
    return (
        <section>
            <div style={{ backgroundImage: `url(${FansHeader})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                 clipPath: 'url(#cross)'}}>

                <div className="container" style={{minHeight: '550px'}}>
                    <div className={FH.headertxt}>
                        <h1 className="pt-5 pb-3">{title}</h1>
                        <h5>{subTitle}</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}