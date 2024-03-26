
function FeedbacksItem(props) {

    return (
        <div className="fbc rounded-xl p-6 flex items-start gap-4 bg-white flex-wrap sm:flex-nowrap">
            <div className="fbc-info flex-shrink-0 flex gap-3 ">
                <div className="fbc-avatar flex-shrink-0 rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] overflow-hidden ">
                    <img className="fbc-avatar-pic w-full h-full object-cover" src={`/img/${props.avatar}`} alt="user"/>
                </div>
                <div className="fbc-info-inner">
                    <div className="fbc-username font-secondary-bold text-sm sm:text-lg text-[#1D222C]  ">{props.name}</div>
                    <div className="fbc-date font-secondary-med text-[10px] sm:text-xs text-[#CDCFE5] ">{props.time}</div>
                </div>
            </div>
            <div className="fbc-text h-full flex-grow border-0 sm:border-l border-solid border-[#E7EAF3] pl-0 sm:pl-4 font-secondary-med text-[10px] text-[#595E72]  ">{props.text}</div>
        </div>                
    );
};

export default FeedbacksItem;