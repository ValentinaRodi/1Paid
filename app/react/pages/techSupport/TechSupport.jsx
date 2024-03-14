import React, { useEffect, useState, useRef } from "react";
import {  Link} from 'react-router-dom';
import uuid from 'react-uuid';
import LayoutBtn from '../../components/LayoutBtn';
import ChatMessageSupport from "../../components/chatMessage/ChatMessageSupport";
import ChatMessageUser from "../../components/chatMessage/ChatMessageUser";
import StarRating from "../../components/starRating/StarRating";

function TechSupport() {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current.scrollTo(0, bottomRef.current.scrollHeight);
    }, []);
 
    return (
        
        <div className="layout-b pb-4 min-w-0 mt-10 flex flex-wrap content-between">
            <div className="w-full">
                <div className="sdb flex justify-between items-center gap-x-3 mb-10">
                    <div className="flex flex-col justify-start">
                        <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Техническая поддержка</h2>
                        <div className="sh-title-line mt-2 rounded-full w-9 h-1 bg-gradient-primary">
                        </div>
                    </div>
                </div>
                <div className="sdb-main flex align-start w-full h-full mt-11 gap-3">
                    <div className="sdb-bar flex flex-col w-full max-w-[336px]">
                        <div className="sdb-papper flex flex-col w-full bg-white rounded-xl p-6 gap-3">
                            <div className="sdb-papper-title font-primary-bold font-bold w-full text-lg text-black">Контактная информация</div>
                            <div className="w-44 h-px bg-[#DBE0ED]"></div>
                            <div className="sdb-item flex w-full text-[12px]">
                                <div className="sdb-item-content flex flex-col">
                                    <a className="sdb-item-text font-secondary-bold font-bold text-base text-[#1E61EB] mb-[2px]" href="#">ВКонтакте</a>
                                    <span className="sdb-item-text font-secondary-med text-xs text-[#B4BAD2] uppercase">Сообщество</span>
                                </div>
                            </div>
                            <div className="w-44 h-px bg-[#DBE0ED]"></div>
                            <div className="sdb-item flex w-full text-[12px]">
                                <div className="sdb-item-content flex flex-col">
                                    <a className="sdb-item-text font-secondary-bold font-bold text-base text-[#1E61EB] mb-[2px]" href="mailto:hello@warface.online">hello@warface.online</a>
                                    <span className="sdb-item-text font-secondary-med text-xs text-[#B4BAD2] uppercase">Почта</span>
                                </div>
                            </div>
                            <div className="w-44 h-px bg-[#DBE0ED]"></div>
                            <div className="sdb-item flex w-full text-[12px]">
                                <div className="sdb-item-content flex flex-col">
                                    <a className="sdb-item-text font-secondary-bold font-bold text-base text-black mb-[2px]" href="#">с 10:30 до 22:30</a>
                                    <span className="sdb-item-text font-secondary-med text-xs text-[#B4BAD2] uppercase">ВРЕМЯ РАБОТЫ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat h-[843px] flex flex-col bg-white font-primary-med text-[#8FA0C3] w-full rounded-xl">
                        <div className="chat-head-wrapper flex justify-between items-center text-[14px] border-b border-solid border-[#EAEEF4] px-8 py-6">
                            <div className="chat-head flex items-center gap-2.5">
                                <div className="chat-head-avatars flex">
                                    <div className="fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative bg-white rounded-full p-[6px]">
                                        <div className="fm-message-avatar flex-shrink-0 w-[40px] h-[40px] overflow-hidden rounded-full">
                                            <img className="sps-avatar-pic w-full h-full object-cover" src="/img/avatar-example-bot.1e9be783.png" alt="user"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-head-user flex gap-3">
                                    <div className="chat-head-username flex font-secondary-bold text-base text-black">Support</div>
                                    <img  src="/img/icon-comp.svg" alt="online"/>
                                </div>
                            </div>
                        </div>
                        <div ref={bottomRef} className="chat-messages  px-8 py-6 h-[515px] overflow-hidden overflow-y-scroll">
                            <div className="flex flex-col flex-grow justify-end">
                                <ChatMessageSupport tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                <ChatMessageSupport time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                <ChatMessageSupport tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                <ChatMessageSupport tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                <ChatMessageUser time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой'/>
                                <ChatMessageUser tail='true' icon='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ?'/>
                            </div>
                        </div>
                        <div className="chat-form flex flex-col mt-4 gap-6">
                            <div className="flex flex-col px-6 gap-6">
                                {/* <div className="rating flex justify-center items-center w-full mx-auto">
                                    <span className="rating-star flex cursor-pointer mr-[5px] last:mr-0 rating-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                            <path d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z" fill="#ECECEC"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_33_44806" x1="-0.5" y1="12.4138" x2="23.5" y2="12.4138" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FB9B41"></stop>
                                                    <stop offset="1" stopColor="#F2B96D"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span className="rating-star flex cursor-pointer mr-[5px] last:mr-0 rating-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                            <path d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z" fill="#ECECEC"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_33_44806" x1="-0.5" y1="12.4138" x2="23.5" y2="12.4138" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FB9B41"></stop>
                                                    <stop offset="1" stopColor="#F2B96D"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span className="rating-star flex cursor-pointer mr-[5px] last:mr-0 rating-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                            <path d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z" fill="#ECECEC"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_33_44806" x1="-0.5" y1="12.4138" x2="23.5" y2="12.4138" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FB9B41"></stop>
                                                    <stop offset="1" stopColor="#F2B96D"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span className="rating-star flex cursor-pointer mr-[5px] last:mr-0 rating-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                            <path d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z" fill="#ECECEC"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_33_44806" x1="-0.5" y1="12.4138" x2="23.5" y2="12.4138" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FB9B41"></stop>
                                                    <stop offset="1" stopColor="#F2B96D"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span className="rating-star flex cursor-pointer mr-[5px] last:mr-0 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                            <path d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z" fill="#ECECEC"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_33_44806" x1="-0.5" y1="12.4138" x2="23.5" y2="12.4138" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FB9B41"></stop>
                                                    <stop offset="1" stopColor="#F2B96D"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                </div> */}
                                <StarRating />
                                <div className="chat-tech-types flex items-center mx-auto font-secondary-med text-[14px]">
                                    <div className="chat-tech-types flex items-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black mr-[12px] py-[8px] px-[16px] rounded-full cursor-pointer">Финансы</div>
                                    <div className="chat-tech-types flex items-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black mr-[12px] py-[8px] px-[16px] rounded-full cursor-pointer">Сделка</div>
                                    <div className="chat-tech-types flex items-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black mr-[12px] py-[8px] px-[16px] rounded-full cursor-pointer">Форум</div>
                                    <div className="chat-tech-types flex items-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black mr-[12px] py-[8px] px-[16px] rounded-full cursor-pointer">Нашел ошибку</div>
                                    <div className="chat-tech-types flex items-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black py-[8px] px-[16px] rounded-full cursor-pointer">Другое</div>
                                </div>
                            </div>
                            <div className="w-full h-px bg-[#EAEEF4]"></div>
                            <div className="px-6 w-full">
                                <div className="chat-input flex items-center bg-white font-secondary-med p-[16px] border border-[#E4E9F4] rounded-[12px] w-full">
                                    <input className="chat-input-input text-black w-full h-full outline-none font-secondary-med placeholder:font-secondary-med placeholder:text-[#BAC9E5] text-[14px]" placeholder="Вставьте содержимое товара..."/>
                                    <button className="chat-input-btn bg-inherit flex-shrink-0 flex justify-center items-center w-[26px] h-[20px] mr-[24px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
                                            <path opacity="0.45" fillRule="evenodd" clipRule="evenodd" d="M24.7514 3.62722L20.5503 3.53974L18.4953 0.562867C18.3774 0.390809 18.2172 0.249349 18.0289 0.151157C17.8406 0.0529645 17.6299 0.00106581 17.4157 0H8.6363C8.42208 0.00106581 8.21146 0.0529645 8.02313 0.151157C7.8348 0.249349 7.6746 0.390809 7.55678 0.562867L5.50177 3.53974L1.30065 3.62722C0.955697 3.62722 0.62485 3.75902 0.380931 3.99359C0.137012 4.22815 0 4.54628 0 4.87801V18.7492C0 19.0809 0.137012 19.3991 0.380931 19.6336C0.62485 19.8682 0.955697 20 1.30065 20H13.0065C13.3515 20 13.6823 19.8682 13.9262 19.6336C14.1701 19.3991 14.3072 19.0809 14.3072 18.7492V16.085C15.5332 15.7806 16.6018 15.0566 17.3125 14.0488C18.0231 13.0409 18.3272 11.8184 18.1676 10.6104C18.0081 9.40233 17.3959 8.29174 16.4457 7.48675C15.4956 6.68177 14.2728 6.23765 13.0065 6.23765C11.7402 6.23765 10.5174 6.68177 9.56729 7.48675C8.61716 8.29174 8.00494 9.40233 7.84538 10.6104C7.68583 11.8184 7.98987 13.0409 8.70056 14.0488C9.41126 15.0566 10.4798 15.7806 11.7059 16.085V17.4984H2.6013V6.07878L6.20409 6.00374C6.41389 5.99862 6.61928 5.94479 6.80274 5.84678C6.98619 5.74877 7.14226 5.60947 7.25762 5.44087L9.31267 2.48904H16.7004L18.7424 5.44087C18.8577 5.60947 19.0138 5.74877 19.1973 5.84678C19.3807 5.94479 19.5861 5.99862 19.7959 6.00374L23.3987 6.07878V17.4984H18.1961C17.8511 17.4984 17.5203 17.6302 17.2764 17.8648C17.0325 18.0994 16.8954 18.4175 16.8954 18.7492C16.8954 19.0809 17.0325 19.3991 17.2764 19.6336C17.5203 19.8682 17.8511 20 18.1961 20H24.6993C25.0443 20 25.3751 19.8682 25.6191 19.6336C25.863 19.3991 26 19.0809 26 18.7492V4.86556C25.9969 4.54449 25.8656 4.23684 25.6332 4.00634C25.4007 3.77583 25.085 3.64005 24.7514 3.62722ZM10.4442 11.2445C10.4442 10.7498 10.5968 10.2661 10.8826 9.85472C11.1685 9.44334 11.5747 9.12269 12.05 8.93335C12.5254 8.74402 13.0484 8.69453 13.553 8.79105C14.0576 8.88758 14.5211 9.12583 14.8849 9.47569C15.2487 9.82553 15.4965 10.2712 15.5969 10.7565C15.6972 11.2417 15.6457 11.7447 15.4488 12.2018C15.2519 12.6589 14.9185 13.0497 14.4907 13.3245C14.063 13.5994 13.56 13.7461 13.0455 13.7461C12.3556 13.7461 11.694 13.4825 11.2061 13.0134C10.7183 12.5442 10.4442 11.908 10.4442 11.2445Z" fill="#AFB8CC"></path>
                                        </svg>
                                    </button>
                                    <button className="chat-input-btn flex-shrink-0 flex justify-center items-center w-[w-22px] h-[20px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M21.2954 8.88263L1.88775 0.115735C1.66621 0.0165446 1.42026 -0.019988 1.1782 0.0103992C0.936147 0.0407864 0.707896 0.136965 0.519832 0.287575C0.331769 0.438186 0.191524 0.637181 0.115349 0.861649C0.0391743 1.08612 0.0302038 1.32682 0.0893681 1.55604L1.38321 6.5657C1.46728 6.88789 1.68012 7.16457 1.97493 7.33485C2.26974 7.50513 2.62233 7.55505 2.95518 7.47367C3.28803 7.39229 3.57386 7.18634 3.74977 6.90097C3.92569 6.6156 3.97725 6.27422 3.89318 5.95203L3.25921 3.4472L17.6985 9.97223L3.37569 16.4473L4.91537 11.2246H9.1074C9.45055 11.2246 9.77962 11.0927 10.0223 10.8579C10.2649 10.623 10.4012 10.3044 10.4012 9.97223C10.4012 9.64007 10.2649 9.3216 10.0223 9.08673C9.77962 8.85186 9.45055 8.71981 9.1074 8.71981H3.93204C3.64164 8.70942 3.35604 8.79398 3.12133 8.95984C2.88662 9.12569 2.71646 9.36315 2.6382 9.63405L0.050515 18.4009C-0.01842 18.6327 -0.0167635 18.8789 0.0552532 19.1097C0.12727 19.3406 0.266586 19.5462 0.456499 19.7023C0.646411 19.8583 0.878839 19.9581 1.12585 19.9894C1.37285 20.0207 1.62395 19.9823 1.84897 19.8789L21.2566 11.112C21.4789 11.0108 21.6668 10.8505 21.7985 10.6498C21.9301 10.4491 22 10.2162 22 9.97849C22 9.74075 21.9301 9.5079 21.7985 9.30719C21.6668 9.10648 21.4789 8.94632 21.2566 8.84518L21.2954 8.88263Z" fill="url(#paint0_linear_94_50409)"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_94_50409" x1="-8.19564e-08" y1="10" x2="22" y2="10" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#8CD23C"></stop>
                                                <stop offset="1" stopColor="#417A00"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LayoutBtn />
        </div>  
       
    );
}

export default TechSupport;