
function GuaranteesItem(props) {

    return (
   
        <div className="ic1 rounded-lg p-3 md:p-6 bg-white ">
            <div className="ic1-icon-wrap">
                <div className="ic1-icon w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center  rounded-full border-[2px] border-solid border-[#E2E5F4] ">
                    <img className="max-w-[50%]" src={`/img/${props.icon}`} alt="picture"/>
                </div>
            </div>
            <div className="ic1-title font-secondary-bold text-xs sm:text-sm text-black">{props.title}</div>
            <div className="ic1-desc font-secondary-med text-[10px] sm:text-xs text-[#A6B1C7]">{props.text}</div>
        </div>        
    );
};

export default GuaranteesItem;