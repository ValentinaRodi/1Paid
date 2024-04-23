import { useNavigate  } from 'react-router-dom';

function LifeFeedItem(props) {
    const navigate = useNavigate();

    const goProfile = () => {
        navigate('/profile',  { state: {userName:props.name } });
    };

    return (
        <div onClick={goProfile} className="lf-item cursor-pointer">
            <img className={props.tovar ? "lf-item-2 " : "lf-item-pic"} src={`/img/${props.imgCard}`} alt="case"/>
            <div className="lf-item-plate relative">
                <div className="lf-item-avatar">
                    <img src={`/img/${props.imgAvatar}`} alt="case" className="lf-item-avatar-img"/>
                </div>
                <div className="lf-item-name" title="Santcese">{props.name}</div>
            </div>
        </div>
    );
}

export default LifeFeedItem;