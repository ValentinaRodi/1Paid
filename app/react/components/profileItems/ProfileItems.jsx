
function ProfileItems(props) {

    return (
        <div className="puic-item flex items-start shrink-0">
            <div className="puic-image flex-shrink-0 flex justify-center items-center w-11 h-11 rounded-full">
                <img className="puic-image-pic w-full h-full" src={`/img/${props.icon}`} alt="puic-image" />
            </div>
            <div className="puic-item-info flex flex-col">
                <div className="puic-item-label leading-tight text-sm">{props.name}</div>
                <div className="puic-item-text leading-tight font-secondary-med text-xs text-[#CDCFE5]">{props.text}</div>
            </div>
        </div>
    );
}

export default ProfileItems;    