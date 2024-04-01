
function ProfileItems(props) {

    return (
        <div className="puic-item flex items-start shrink-0">
            <div className="puic-image flex-shrink-0 flex justify-center items-center w-9 sm:w-11 h-9 sm:h-11 rounded-full">
                <img className="puic-image-pic w-full h-full" src={`/img/${props.icon}`} alt="puic-image" />
            </div>
            <div className="puic-item-info flex flex-col">
                <div className="puic-item-label leading-tight text-xs sm:text-sm">{props.name}</div>
                <div className="puic-item-text leading-tight font-secondary-med text-[10px] sm:text-xs text-[#CDCFE5]">{props.text}</div>
            </div>
        </div>
    );
}

export default ProfileItems;    