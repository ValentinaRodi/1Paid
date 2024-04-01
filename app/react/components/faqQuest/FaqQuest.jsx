import { useState, useEffect } from 'react';

function FaqQuest(props) {
    const [isOpenFaq, setIsOpenFaq] = useState(false);
    
    const toggleFaq = () => {
        setIsOpenFaq(!isOpenFaq);
    };

    return ( 
        <div className="qc accordion-item rounded-lg bg-[#F9F9FC]">
            <div className="qc-h accordion-header rounded-lg p-3 flex items-center justify-between gap-3 bg-white cursor-pointer">
                <div className='flex items-center gap-3'>
                    <div className="qc-icon flex-shrink-0 rounded-full w-9 h-9 sm:w-[50px] sm:h-[50px] p-2 flex items-center justify-center bg-gradient-primary">
                        <img src="/img/icon-question.2b631bf1.svg" alt="picture"/>
                    </div>
                    <div className="qc-title font-secondary-bold text-sm sm:text-lg text-[#1D222C]">{props.quest}</div>
                </div>
                <button onClick={toggleFaq} className="pmc-card-arrow bg-inherit h-profile-btn-open text-[#D6D9EA] w-4 sm:w-6 shrink-0 cursor-pointer hover:text-black">
                    <img className={isOpenFaq ? "rotate-180": ""} src="/img/icon-pmc-card-arrow.svg" alt="navpin-plate-icon"/>
                </button>
            </div>
            {isOpenFaq ?
                <div className="accordion-body">
                    <div className="qc-content p-6">
                        <p className="font-secondary-med text-sm sm:text-lg text-[#1D222C] ">{props.answer}</p>
                    </div>
                </div>
                : null
            }
        </div> 
    );
};

export default FaqQuest;