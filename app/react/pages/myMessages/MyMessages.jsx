import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import { Link } from 'react-router-dom';
import ItemMessagesMy from '../../components/messagesMy/ItemMyMessages';
import ChatMessageMy from "../../components/chatMessage/ChatMessageMy";
import ChatMessageUser from "../../components/chatMessage/ChatMessageUser";

function MyMessages() {
    const [newDate, setNewDate] = useState(true);

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full">
                <div className="smm mt-5">
                    <div className="sh flex justify-between items-center gap-x-3 mb-10">
                        <div className="flex flex-col justify-start">
                            <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Мои сообщения</h2>
                            <div className="sh-title-line mt-2 rounded-full w-9 h-1 bg-gradient-primary"></div>
                        </div>
                    </div>
                    <div className="smm-main flex align-start w-full h-full gap-3">
                        <div className="fm flex flex-col bg-white font-primary-med text-[#8FA0C3] w-[350px] rounded-xl py-6 ">
                            <div className='w-full border-b border-solid border-[#EAEEF4]'>
                                <div className="fm-head flex items-center font-primary-bold text-[14px] mb-[22px] px-[22px] px-[22px]">
                                    <div className="fm-title font-secondary-bold text-black text-sm mr-[4px]">Сообщения</div>
                                    <span className="fm-new-count font-secondary-bold text-[#7AB23A]">(+4)</span>
                                    <span className="fm-count font-secondary-bold text-[#C8D5ED] ml-auto">(7)</span>
                                </div>
                            </div>
                            <div className="fm-list flex flex-col h-[840px] overflow-hidden overflow-y-scroll chat-scroll">
                                <ItemMessagesMy avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                <ItemMessagesMy avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='11:42' read='true'/>
                                <ItemMessagesMy avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='12:42' read='true'/>
                                <ItemMessagesMy avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='13:42' read='true'/>
                                <ItemMessagesMy avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='14:42' read='true'/>
                                <ItemMessagesMy avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                <ItemMessagesMy avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                            </div>
                        </div>
                        <div className="chat flex flex-wrap bg-white font-primary-med text-[#8FA0C3] w-full rounded-xl py-6">
                            <div className='w-full border-b border-solid border-[#EAEEF4]'>
                                <div className="chat-head flex items-start text-[14px] mb-[22px] gap-3 px-8">
                                    <div className="chat-head-avatars flex items-center w-16">
                                        <div className="fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative bg-white rounded-full">
                                            <div className="fm-message-avatar flex-shrink-0 w-[40px] h-[40px] overflow-hidden rounded-full">
                                                <img className="sps-avatar-pic w-full h-full object-cover" src="/img/avatar-example-bot.1e9be783.png" alt="user"/>
                                            </div>
                                        </div>
                                        <div className="fm-message-avatar-wrapper p-1 flex-shrink-0 overflow-hidden relative bg-white rounded-full translate-x-[-40%]">
                                            <div className="fm-message-avatar flex-shrink-0 w-[40px] h-[40px] overflow-hidden rounded-full">
                                                <img className="sps-avatar-pic w-full h-full object-cover" src="/img/avatar-example-1.efb6cc72.png" alt="user"/>
                                            </div>
                                            <span className="fm-message-status block bg-gradient-secondary z-20 h-[8px] w-[8px] right-[7px] bottom-[7px] rounded-full border-0 border-white absolute"></span>
                                            <span className="fm-message-status block bg-white z-10 h-[16px] w-[16px] right-[3px] bottom-[3px] rounded-full border-0 border-white absolute"></span>
                                        </div>
                                    </div>
                                    <div className="chat-head-user flex flex-col">
                                        <div className="chat-head-username flex items-center gap-3">
                                            <div className='font-secondary-bold text-base text-black'>Allice, Support</div>
                                            <div className='flex items-center gap-2'>
                                                <div>
                                                    <img src="/img/icon-focus.svg" alt="focus"/>
                                                </div>
                                                <div>
                                                    <img src="/img/icon-desktop.svg" alt="desktop"/> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-head-info flex text-[#8FA0C3] font-primary-med text-sm">
                                            <a href="#">Allice</a> &nbsp;смотрит&nbsp; 
                                            <a href="#">Warface 90 ранг, донат: 20</a>
                                            <a href="#">сервер: ru.warface</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-messages w-full flex flex-col flex-grow overflow-y-scroll text-[12px] px-8 overflow-hidden overflow-y-scroll chat-scroll">
                                <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                {(newDate) ? 
                                    <div className="px-3 w-[86px] mx-auto py-1 mb-[18px] rounded-[34px] bg-[#0000000D] font-roboto text-xs text-[#979797B2]">12.09.2019</div>
                                    : null
                                }
                                <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                <ChatMessageUser time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой'/>
                                <ChatMessageUser tail='true' avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ?'/>
                            </div>
                            <div className="chat-form w-full self-end">
                                <div className="chat-notification flex items-center w-full py-4 px-8 bg-[#EEF4FF]">
                                    <span className="chat-notification-icon flex-shrink-0 flex justify-center items-center w-[25px] h-[26px] mr-[24px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.444 0C10.1288 0 6.94941 1.31697 4.60523 3.66115C2.26105 6.00533 0.944114 9.1847 0.944114 12.4999C0.928803 14.8223 1.57401 17.1012 2.80452 19.0709C4.03504 21.0406 5.80015 22.62 7.89404 23.6248C8.04177 23.697 8.20228 23.7394 8.36641 23.7496C8.53054 23.7598 8.69506 23.7375 8.8506 23.6841C9.00614 23.6307 9.14966 23.5472 9.27292 23.4384C9.39618 23.3295 9.49679 23.1975 9.56901 23.0498C9.64124 22.902 9.68368 22.7415 9.69387 22.5774C9.70406 22.4132 9.6818 22.2487 9.62841 22.0932C9.57502 21.9377 9.49152 21.7942 9.38267 21.6709C9.27382 21.5476 9.14177 21.447 8.99403 21.3747C7.32088 20.5762 5.9101 19.3171 4.92711 17.7452C3.94412 16.1733 3.42966 14.3538 3.44409 12.4999C3.44475 10.5756 4.00061 8.69228 5.04498 7.07604C6.08936 5.45979 7.57792 4.17923 9.33201 3.38795C11.0861 2.59667 13.0312 2.32828 14.9341 2.61502C16.8369 2.90176 18.6166 3.73147 20.0596 5.00452C21.5026 6.27758 22.5476 7.93991 23.0694 9.79215C23.5911 11.6444 23.5672 13.6079 23.0008 15.4469C22.4344 17.286 21.3493 18.9225 19.8759 20.1602C18.4024 21.3979 16.6032 22.1842 14.694 22.4248V14.9998C14.694 14.6683 14.5623 14.3504 14.3278 14.116C14.0934 13.8816 13.7755 13.7499 13.444 13.7499C13.1125 13.7499 12.7945 13.8816 12.5601 14.116C12.3257 14.3504 12.194 14.6683 12.194 14.9998V23.7497C12.194 24.0813 12.3257 24.3992 12.5601 24.6336C12.7945 24.868 13.1125 24.9997 13.444 24.9997C16.7592 24.9997 19.9386 23.6828 22.2827 21.3386C24.6269 18.9944 25.9438 15.815 25.9438 12.4999C25.9438 9.1847 24.6269 6.00533 22.2827 3.66115C19.9386 1.31697 16.7592 0 13.444 0ZM17.1939 8.74991C17.1939 8.00823 16.974 7.28325 16.562 6.66657C16.1499 6.04989 15.5642 5.56918 14.879 5.28536C14.1938 5.00153 13.4398 4.92727 12.7124 5.07197C11.985 5.21666 11.3168 5.57382 10.7924 6.09826C10.2679 6.6227 9.91077 7.29091 9.76608 8.01833C9.62139 8.74575 9.69565 9.49976 9.97947 10.185C10.2633 10.8702 10.7439 11.4558 11.3606 11.8679C11.9773 12.2799 12.7023 12.4999 13.444 12.4999C14.4385 12.4999 15.3923 12.1048 16.0956 11.4016C16.7988 10.6983 17.1939 9.74446 17.1939 8.74991ZM12.194 8.74991C12.194 8.50268 12.2673 8.26105 12.4046 8.05549C12.542 7.84993 12.7372 7.68967 12.9656 7.59506C13.194 7.50045 13.4454 7.47572 13.6879 7.52395C13.9303 7.57218 14.153 7.69124 14.3278 7.86605C14.5026 8.04086 14.6217 8.2636 14.6699 8.50607C14.7182 8.74855 14.6934 8.99986 14.5988 9.22826C14.5042 9.45667 14.344 9.6519 14.1384 9.78925C13.9329 9.9266 13.6912 9.99989 13.444 9.99989C13.1125 9.99989 12.7945 9.86818 12.5601 9.63376C12.3257 9.39934 12.194 9.08142 12.194 8.74991Z" fill="url(#paint0_linear_437_29122)"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_437_29122" x1="6.62567" y1="21.1361" x2="19.58" y2="3.86346" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#339CFC"></stop>
                                                    <stop offset="1" stopColor="#1E61EB"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span className="chat-notification-text font-secondary-bold text-sm text-black">Заказ #59698658 открыт повторно.</span>
                                </div>
                                <div className='px-6 pt-6'>
                                    <div className="chat-input flex items-center bg-white font-secondary-med p-4 border border-[#E4E9F4] rounded-xl w-full">
                                        <input className="font-secondary-med chat-input-input text-black w-full h-full outline-none placeholder:text-[#BAC9E5] text-[14px]" placeholder="Вставьте содержимое товара..."/>
                                        <button className="chat-input-btn flex-shrink-0 flex justify-center items-center w-[26px] h-[20px] mr-[24px]">
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
            </div>
            <LayoutBtn />
        </div>
    );
};

export default MyMessages;