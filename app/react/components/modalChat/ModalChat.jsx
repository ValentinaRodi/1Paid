import { useState, useEffect, useRef } from 'react';
import { useNavigate  } from 'react-router-dom';
import ChatMessageMy from '../chatMessage/ChatMessageMy';
import ChatMessageUser from "../chatMessage/ChatMessageUser";
import StarRating from "../starRating/StarRating";
import ItemMessagesMy from '../messagesMy/ItemMyMessages';
import uuid from 'react-uuid';

function ModalChat(props) {
    const navigate = useNavigate();
    const [chat, setChat] = useState(false);
    const [newDate, setNewDate] = useState(true);
    const bottomRef = useRef(null);
    const [tab, setTab] = useState(true);
    const [deal, setDeal] = useState(false);

    const scrollToTop = () => { 
        window.scrollTo({ 
            top: 0,  
            behavior: 'smooth'
        }); 
    }; 

    const goMyMessages = () => {
        if(!isAuthenticated) {
            openAuthorization();
        } else {
            navigate('/my-messages');
        };
        window.scrollTo({ 
            top: 0,  
        }); 
    };

    const clickTab = () => {
        setTab(!tab);
    };

    const calcHeight = () => {
        
        const pageHeight = document.querySelector('.layout-page').getBoundingClientRect().height;
        const chatHeight = document.querySelector('.chat-h');
        chatHeight.style.height = pageHeight + "px";
        console.log('tab',tab);
        console.log('chat', chat);
        console.log('deal',deal);

        if(tab) {
            document.querySelector('.chat-messages').style.height = pageHeight - 410 + "px";
            document.querySelector('.unHeight').style.height = 'auto';
        };
        if(!tab && !chat)  {
            document.querySelector('.fm-list').style.height = pageHeight - 208 + "px";
        };
        if(!tab && chat && !deal)  {
            document.querySelector('.chatDealHeight').style.height = pageHeight - 315 + "px";
        };
        if(!tab && chat && deal)  {
            document.querySelector('.dealHeight').style.height = pageHeight - 390 + "px";
        };
         



        // const chatHeight = document.querySelector('.chat-h').getBoundingClientRect().height;
        // const contentChatHeight = chatHeight - 116;
        // document.querySelector('.content-chat-h').style.height = contentChatHeight + "px"
    };

    useEffect(() => {
        if(props.fastChat) {
            calcHeight();
            (tab) ? bottomRef.current.scrollTo(0, bottomRef.current.scrollHeight) : null;
        };
    }, [tab, chat, deal]);

    
    const openChat = () => {
        setChat(true);
    };
    
    const clickDeal = () => {
        setDeal(!deal);
    };

    const arr =[0,1,2,3,4,5,6];
    
    
    return (
        <div className='chat-h absolute right-9 bottom-[3px] flex items-start z-[1000]'>
            <div className='w-full sm:w-[591px] bg-white rounded-lg h-screen max-h-[1000px] border border-solid border-[#E1E1F1]'>
                <div className='w-full flex justify-center'>
                    <div className='flex justify-center items-center px-6 h-[22px] rounded-b-[20px] btn-primary bg-[linear-gradient(90deg,#8CD23C_0%,#417A00_100%)]'>
                        <p className='family-bold font-bold text-xs text-white uppercase'>Быстрый доступ</p>
                    </div>
                </div>
                <div className='flex justify-end px-8'>
                    <button onClick={props.clickCloseModalChat} className='p-0 bg-inherit hover:bg-[rgba(241,245,249,1)]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
                <div className="flex items-start py-4 justify-center rounded-lg bg-white px-6 border-b border-solid border-[#EAEEF4]">
                    <div id="parent" className="nav-show pt-2 h-full w-full flex items-center justify-center">
                        <nav id="nav" className="nav-item pb-2.5 flex gap-x-6 flex-wrap gap-y-6">
                            <div onClick={clickTab} className={`${(tab) ? 'nav-link-prim' : 'nav-link'} cursor-pointer nav-link-tab font-primary-bold text-xs sm:text-sm text-[#8A98B3] uppercase `}>Чат с поддержкой</div>
                            <div onClick={clickTab} className={`${(!tab) ? 'nav-link-prim' : 'nav-link'} cursor-pointer nav-link-tab font-primary-bold text-xs sm:text-sm text-[#8A98B3] uppercase `}>мои диалоги</div>
                        </nav>
                    </div>
                </div>
                {tab ?
                    <div className="chat content-chat-h flex flex-col bg-white font-primary-med text-[#8FA0C3] w-full rounded-xl">
                        <div className="chat-head-wrapper flex justify-between items-center border-b border-solid border-[#EAEEF4] py-2 sm:py-4">
                            <div className="chat-head flex items-center gap-1 sm:gap-2.5 px-8">
                                <div className="chat-head-avatars flex">
                                    <div className="fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative bg-white rounded-full pr-[6px]">
                                        <div className="fm-message-avatar flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-full">
                                            <img className="sps-avatar-pic w-full h-full object-cover" src="/img/avatar-example-bot.1e9be783.png" alt="user"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="unHeight flex gap-3">
                                    <div className="flex font-secondary-bold text-sm sm:text-base text-black">Support</div>
                                    {/* <img  src="/img/icon-comp.svg" alt="online"/> */}
                                </div>
                            </div>
                        </div>
                        <div ref={bottomRef} className='chat-messages px-4 sm:px-6 py-4 sm:px-8 sm:py-6 overflow-hidden overflow-y-scroll'>
                            <div className="flex flex-col flex-grow justify-end">
                                <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                {(newDate) ? 
                                    <div className="flex items-center justify-center w-20 sm:w-[86px] mx-auto py-1 mb-3 sm:mb-[18px] rounded-[34px] bg-[#0000000D] font-roboto text-[10px] sm:text-xs text-[#979797B2]">12.09.2019</div>
                                    : null
                                }
                                <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                <ChatMessageUser closeModalFastChat={props.closeModalFastChat} name='Shenderro' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой'/>
                                <ChatMessageUser closeModalFastChat={props.closeModalFastChat} name='Shenderro' tail='true' avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ?'/>
                            </div>
                        </div>
                        <div className="chat-form flex flex-col mt-4 gap-4 sm:gap-6">
                            <div className="flex flex-col px-4 gap-4 sm:gap-6">
                                <StarRating />
                                <div className="chat-tech-types flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-secondary-med text-xs sm:text-sm">
                                    <div className="chat-tech-types flex items-center text-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black py-2 px-2 sm:px-4 rounded-full cursor-pointer">Финансы</div>
                                    <div className="chat-tech-types flex items-center text-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black py-2 px-2 sm:px-4 rounded-full cursor-pointer">Сделка</div>
                                    <div className="chat-tech-types flex items-center text-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black py-2 px-2 sm:px-4 rounded-full cursor-pointer">Форум</div>
                                    <div className="chat-tech-types flex items-center text-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black py-2 px-2 sm:px-4 rounded-full cursor-pointer">Нашел ошибку</div>
                                    <div className="chat-tech-types flex items-center text-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black py-2 px-2 sm:px-4 rounded-full cursor-pointer">Другое</div>
                                </div>
                            </div>
                            <div className="w-full h-px bg-[#EAEEF4]"></div>
                            <div className="px-4 sm:px-6 w-full mb-4 sm:mb-5">
                                <div className="chat-input flex items-center bg-white font-secondary-med p-3 sm:p-4 border border-[#E4E9F4] rounded-xl w-full">
                                    <input className="chat-input-input text-black w-full h-full outline-none font-secondary-med placeholder:font-secondary-med placeholder:text-[#BAC9E5] text-xs sm:text-sm" placeholder="Вставьте содержимое товара..."/>
                                    <button className="chat-input-btn bg-inherit flex-shrink-0 flex justify-center items-center w-6 h-4 sm:w-[26px] sm:h-5 mr-2 sm:mr-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
                                            <path opacity="0.45" fillRule="evenodd" clipRule="evenodd" d="M24.7514 3.62722L20.5503 3.53974L18.4953 0.562867C18.3774 0.390809 18.2172 0.249349 18.0289 0.151157C17.8406 0.0529645 17.6299 0.00106581 17.4157 0H8.6363C8.42208 0.00106581 8.21146 0.0529645 8.02313 0.151157C7.8348 0.249349 7.6746 0.390809 7.55678 0.562867L5.50177 3.53974L1.30065 3.62722C0.955697 3.62722 0.62485 3.75902 0.380931 3.99359C0.137012 4.22815 0 4.54628 0 4.87801V18.7492C0 19.0809 0.137012 19.3991 0.380931 19.6336C0.62485 19.8682 0.955697 20 1.30065 20H13.0065C13.3515 20 13.6823 19.8682 13.9262 19.6336C14.1701 19.3991 14.3072 19.0809 14.3072 18.7492V16.085C15.5332 15.7806 16.6018 15.0566 17.3125 14.0488C18.0231 13.0409 18.3272 11.8184 18.1676 10.6104C18.0081 9.40233 17.3959 8.29174 16.4457 7.48675C15.4956 6.68177 14.2728 6.23765 13.0065 6.23765C11.7402 6.23765 10.5174 6.68177 9.56729 7.48675C8.61716 8.29174 8.00494 9.40233 7.84538 10.6104C7.68583 11.8184 7.98987 13.0409 8.70056 14.0488C9.41126 15.0566 10.4798 15.7806 11.7059 16.085V17.4984H2.6013V6.07878L6.20409 6.00374C6.41389 5.99862 6.61928 5.94479 6.80274 5.84678C6.98619 5.74877 7.14226 5.60947 7.25762 5.44087L9.31267 2.48904H16.7004L18.7424 5.44087C18.8577 5.60947 19.0138 5.74877 19.1973 5.84678C19.3807 5.94479 19.5861 5.99862 19.7959 6.00374L23.3987 6.07878V17.4984H18.1961C17.8511 17.4984 17.5203 17.6302 17.2764 17.8648C17.0325 18.0994 16.8954 18.4175 16.8954 18.7492C16.8954 19.0809 17.0325 19.3991 17.2764 19.6336C17.5203 19.8682 17.8511 20 18.1961 20H24.6993C25.0443 20 25.3751 19.8682 25.6191 19.6336C25.863 19.3991 26 19.0809 26 18.7492V4.86556C25.9969 4.54449 25.8656 4.23684 25.6332 4.00634C25.4007 3.77583 25.085 3.64005 24.7514 3.62722ZM10.4442 11.2445C10.4442 10.7498 10.5968 10.2661 10.8826 9.85472C11.1685 9.44334 11.5747 9.12269 12.05 8.93335C12.5254 8.74402 13.0484 8.69453 13.553 8.79105C14.0576 8.88758 14.5211 9.12583 14.8849 9.47569C15.2487 9.82553 15.4965 10.2712 15.5969 10.7565C15.6972 11.2417 15.6457 11.7447 15.4488 12.2018C15.2519 12.6589 14.9185 13.0497 14.4907 13.3245C14.063 13.5994 13.56 13.7461 13.0455 13.7461C12.3556 13.7461 11.694 13.4825 11.2061 13.0134C10.7183 12.5442 10.4442 11.908 10.4442 11.2445Z" fill="#AFB8CC"></path>
                                        </svg>
                                    </button>
                                    <button className="chat-input-btn flex-shrink-0 flex justify-center items-center w-5 h-4 sm:w-[w-22px] sm:h-5">
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
                    : 
                    <div className="chat content-chat-h flex flex-col bg-white font-primary-med text-[#8FA0C3] w-full rounded-xl">
                        {!chat ?
                            <div className="chat content-chat-h flex flex-col bg-white font-primary-med text-[#8FA0C3] w-full rounded-xl">
                                <div className="fm flex flex-col bg-white font-primary-med text-[#8FA0C3] w-full rounded-xl py-6 ">
                                    <div className='w-full border-b border-solid border-[#EAEEF4]'>
                                        <div className="fm-head flex items-center font-primary-bold text-xs sm:text-sm mb-[22px] px-[22px] px-[22px]">
                                            <div className="fm-title font-secondary-bold text-black mr-[4px]">Сообщения</div>
                                            <span className="fm-new-count font-secondary-bold text-[#7AB23A]">(+4)</span>
                                            <span className="fm-count font-secondary-bold text-[#C8D5ED] ml-auto">(7)</span>
                                        </div>
                                    </div>
                                    <div className="fm-list flex flex-col overflow-hidden overflow-y-scroll chat-scroll">
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар. Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='11:42' read='true'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='12:42' read='true'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='13:42' read='true'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='14:42' read='true'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='11:42' read='true'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='12:42' read='true'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='13:42' read='true'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='14:42' read='true'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/><ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='11:42' read='true'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='12:42' read='true'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='13:42' read='true'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='14:42' read='true'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                        <ItemMessagesMy closeModalFastChat={props.closeModalFastChat} openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                    </div>
                                </div> 
                            </div>
                            : 
                            <div className='w-full h-full'>
                                {deal ?
                                    <div className=" smm-deal flex flex-col bg-white font-primary-med text-[#8FA0C3] w-full rounded-xl py-6">
                                        <div className="smm-deal-head flex items-center justify-start gap-[12px] font-primary-bold text-[14px] mb-[22px] px-[22px]">
                                            <button onClick={clickDeal} className='bg-inherit'>
                                                <svg width="57" height="24" viewBox="0 0 57 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.5" y="0.5" width="56" height="23" rx="11.5" stroke="#E8EAF7"/>
                                                    <path d="M15.4697 11.4697C15.1768 11.7626 15.1768 12.2374 15.4697 12.5303L20.2426 17.3033C20.5355 17.5962 21.0104 17.5962 21.3033 17.3033C21.5962 17.0104 21.5962 16.5355 21.3033 16.2426L17.0607 12L21.3033 7.75736C21.5962 7.46447 21.5962 6.98959 21.3033 6.6967C21.0104 6.40381 20.5355 6.40381 20.2426 6.6967L15.4697 11.4697ZM41 11.25L16 11.25L16 12.75L41 12.75L41 11.25Z" fill="#C5CFE4"/>
                                                </svg>
                                            </button>
                                            <div className="smm-deal-title font-secondary-bold text-black text-sm">Сделка c User1</div>
                                            {/* <div className="smm-deal-head-count font-secondary-bold text-[#C8D5ED]">(8)</div> */}
                                        </div>
                                        <div className="dealHeight smm-deal-list flex flex-col w-full">
                                            {arr.length !== 0 ?
                                                arr.map(item => {
                                                    return (
                                                        <div key={uuid()} className="border-t border-solid border-[#EAEEF4] smm-deal-item flex items-center w-full p-[12px] cursor-pointer hover:bg-[#C8D5ED]/30">
                                                            <div className="smm-deal-item-image flex-shrink-0 overflow-hidden w-[50px] h-[50px] mr-[12px] bg-white rounded-full">
                                                                <img className="w-full h-full object-cover" src="/img/message-deal-item.e14abc38.png" alt="user"/>
                                                            </div>
                                                            <div className="smm-deal-item-info flex flex-col mr-[12px]">
                                                                <div className="smm-deal-item-label text-black text-[13px] font-secondary-bold leading-normal">Пин-код Makmilan 1000 руб</div>
                                                                <div className="smm-deal-item-description font-secondary-med text-sm">#16543</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                                : null
                                            }
                                            
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div className='w-full border-b border-solid border-[#EAEEF4]'>
                                            <div className="chat-head flex items-start text-[14px] gap-3 py-2 sm:py-6 px-8">
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
                                                            <button onClick={props.clickOpenModalPetition} className='bg-inherit'>
                                                                <img src="/img/icon-focus.svg" alt="focus"/>
                                                            </button>
                                                            <button onClick={clickDeal} className='bg-inherit'>
                                                                <img src="/img/icon-desktop.svg" alt="desktop"/> 
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="flex text-[#8FA0C3] flex-wrap w-full items-start font-primary-med text-xs sm:text-sm">
                                                        <button onClick={props.goProfile} className='bg-inherit text-[#1E61EB]'>Allice</button> &nbsp;смотрит&nbsp; 
                                                        <button onClick={props.goTovar} className='bg-inherit text-[#1E61EB]'>Warface 90 ранг, донат: 20</button>
                                                        <button onClick={props.goTovar} className='bg-inherit text-[#1E61EB]'>сервер: ru.warface</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chatDealHeight chat-messages w-full flex flex-col flex-grow overflow-y-scroll text-[12px] px-8 h-[570px] overflow-hidden overflow-y-scroll chat-scroll">
                                            <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                            <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                            {(newDate) ? 
                                                <div className="px-3 w-[86px] mx-auto py-1 mb-[18px] rounded-[34px] bg-[#0000000D] font-roboto text-xs text-[#979797B2]">12.09.2019</div>
                                                : null
                                            }
                                            <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                            <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                            <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                            <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                            <ChatMessageUser closeModalFastChat={props.closeModalFastChat} name='Shenderro' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой'/>
                                            <ChatMessageUser closeModalFastChat={props.closeModalFastChat} name='Shenderro' tail='true' avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ?'/>
                                            <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                            <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                            {(newDate) ? 
                                                <div className="px-3 w-[86px] mx-auto py-1 mb-[18px] rounded-[34px] bg-[#0000000D] font-roboto text-xs text-[#979797B2]">12.09.2019</div>
                                                : null
                                            }
                                            <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                            <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                            <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                            <ChatMessageMy closeModalFastChat={props.closeModalFastChat} avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                            <ChatMessageUser closeModalFastChat={props.closeModalFastChat} name='Shenderro' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой'/>
                                            <ChatMessageUser closeModalFastChat={props.closeModalFastChat} name='Shenderro' tail='true' avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ?'/>
                                        </div>
                                        <div className="chat-form w-full self-end">
                                            {/* <div className="chat-notification flex items-center w-full py-4 px-8 bg-[#EEF4FF]">
                                                <span className="chat-notification-icon flex-shrink-0 flex justify-center items-center w-[25px] h-[26px] mr-[24px]">
                                                    <img className="w-full h-full object-cover" src='/img/icon-notification-feed.svg' alt="notification"/>
                                                </span>
                                                <span className="chat-notification-text font-secondary-bold text-sm text-black">Заказ #59698658 открыт повторно.</span>
                                            </div> */}
                                            <div className='px-6 py-6'>
                                                <div className="chat-input flex items-center bg-white font-secondary-med p-4 border border-[#E4E9F4] rounded-xl w-full">
                                                    <input className="font-secondary-med chat-input-input text-black w-full h-full outline-none placeholder:text-[#BAC9E5] text-[14px]" placeholder="Вставьте содержимое товара..."/>
                                                    <button className="chat-input-btn flex-shrink-0 flex justify-center items-center w-[26px] h-[20px] mr-[24px]">
                                                        <img className="fbc-avatar-pic w-full h-full object-cover" src='/img/icon-foto.svg' alt="foto"/>
                                                    </button>
                                                    <button className="chat-input-btn flex-shrink-0 bg-inherit flex justify-center items-center w-[w-22px] h-[20px]">
                                                        <img className="fbc-avatar-pic w-full h-full object-cover" src='/img/icon-send.svg' alt="send"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default ModalChat;
