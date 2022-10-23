import GroupsHeader from "../../../assets/GroupsHeader.jpg";
import GH from './groupsHeader.module.css';


export const groupsHeader = ({ title, subTitle }) => {
    return (
        <section>
            <div style={{
                backgroundImage: `url(${GroupsHeader})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                clipPath: 'url(#cross)'
            }}>

                <div className="container" style={{ minHeight: '550px' }}>
                    <div className={GH.headertxt}>
                        <h1 className="pt-5 pb-3">{title}</h1>
                        <h5>{subTitle}</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}