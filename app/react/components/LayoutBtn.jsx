import { useState, useEffect } from 'react';

function LayoutBtn(props) {
    //const [orient, setOrient] = useState('_lf-row');

    const scrollToTop = () =>{ 
        window.scrollTo({ 
            top: 0,  
            behavior: 'smooth'
        }); 
    }; 
    
    return (
        <div className="layout-b-f flex justify-between mt-6 mb-6 w-full">
            <div>
                {props.toTop ?
                    <button onClick={scrollToTop} className="layout-btn-totop scroll-to-top rounded-full w-16 h-16 flex items-center justify-center bg-[#D7DFF5] hover:bg-[#d0d8f3] shadow-2xl ">
                        <div className=" flex items-center ">
                            <img src="/img/icon-btn-icon-12.svg" alt="btn-icon"/>
                        </div>
                    </button>
                    : null
                }
            </div>
            <button className="layout-btn-openchat open-fast-chat rounded-full rounded-br-none w-[65px] h-[65px] flex items-center justify-center bg-gradient-primary shadow-2xl ">
                <div className="btn-icon text-[#BDC6E0] w-[22px] h-[19px] [&amp;_svg]:w-full [&amp;_svg]:h-full text-white">
                    <img src="/img/icon-btn-icon-13.svg" alt="btn-icon"/>
                </div>
            </button>
        </div>
    );
}

export default LayoutBtn;
