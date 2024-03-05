
function LifeFeedItem(props) {
    return (
        <div className="lf-item">
            <img className="lf-item-pic" src={`/img/${props.imgCard}`} alt="case"/>
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