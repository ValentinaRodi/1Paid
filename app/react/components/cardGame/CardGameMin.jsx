function CardGameMin(props) {

    return (
        <div className="w-full md:max-w-[310px] rounded-lg bg-white min-w-[240px] relative">
            <div className='pc-plate-container h-5 sm:h-[22px] w-[70px] sm:w-20 flex items-center justify-start'>
                {(props.new === '1') ? 
                    <div className='pc-plate bg-gradient-primary h-full w-full flex items-center justify-center font-bold bg-gradient-primary'>new</div>
                    : null
                }
                {(props.guarantees === '1') ? 
                    <div className='pc-plate bg-gradient-primary h-full w-full flex items-center justify-center font-bold bg-gradient-primary'>new</div>
                    : null
                }
            </div>
            <div className="flex items-center justify-start ml-3 mt-1">
                <div className="pc-supinfo font-secondary-bold text-[13px] text-black">
                    <div className="pc-rating flex gap-1 items-center">
                        <div className="pc-rating-icon flex-shrink-0 w-[14px] h-[14px] ">
                            <img src="/img/icon-pc-rating.svg" alt="icon-pc-rating"/>
                        </div>
                        <span className="font-secondary-bold font-bold text-xs">{props.rank}</span>
                    </div>
                </div>
            </div>
            <div className='px-4 sm:px-6 pb-4 sm:pb-6 pt-3 w-full gap-y-3 gap-x-6 flex flex-row md:flex-col items-center'>
                <div className=" flex justify-center items-center">
                    <div className="max-w-[100px] sm:max-w-[120px] ">
                        <img className=" w-full" src={`/img/${props.icon}`} alt="picture"/>
                    </div>
                </div>
                <div className="">
                    <div className="pc-title font-secondary-bold leading-[16px] font-bold text-[13px] text-black">{props.name}</div>
                    <div className="pc-subtitle mt-1 font-secondary-med text-xs text-[#A6B1C7] ">{props.description}</div>
                </div>
            </div>
        </div>
    );
};

export default CardGameMin;