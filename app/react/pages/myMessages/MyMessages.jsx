import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import { Link } from 'react-router-dom';
import ItemMessagesMy from '../../components/messagesMy/ItemMyMessages';
import ChatMessageMy from "../../components/chatMessage/ChatMessageMy";
import ChatMessageUser from "../../components/chatMessage/ChatMessageUser";
import Title from '../../components/title/Title';
import uuid from 'react-uuid';

function MyMessages() {
    const [newDate, setNewDate] = useState(true);
    const [chat, setChat] = useState(false);
    const [tabClass, setTabClass] = useState(true);
    const [tabItem, setTabItem] = useState(true);

    const clickMessages = () => {
        setTabClass(true);
        setTabItem(true);
    };

    const clickChat = () => {
        setTabClass(false);
        setTabItem(false);
    };


    const openChat = () => {
        setChat(true);
        setTabClass(!tabClass);
        setTabItem(false);
    };

    

    const arr =[0,1,2,3,4,5,6,7];

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full layout-main">
                <div className="smm mt-5">
                    <Title title='Мои сообщения'/>
                    <div className="flex items-start py-4 justify-between rounded-lg bg-white px-6 mb-3 min-[1440px]:hidden">
                        <div id="parent" className="nav-show pt-2 h-full w-full flex items-center justify-start">
                            <nav id="nav" className="nav-item pb-2.5 flex gap-x-6 flex-wrap gap-y-6">
                                <div onClick={clickMessages} className={`${(tabClass) ? 'nav-link-prim' : 'nav-link'} cursor-pointer nav-link-tab font-primary-bold text-xs sm:text-sm text-[#8A98B3] uppercase `}>Сообщения</div>
                                <div onClick={clickChat} className={`${(!tabClass) ? 'nav-link-prim' : 'nav-link'} cursor-pointer nav-link-tab font-primary-bold text-xs sm:text-sm text-[#8A98B3] uppercase `}>Чат</div>
                            </nav>
                        </div>
                    </div>
                    <div className="smm-main hidden min-[1440px]:flex align-start w-full h-full gap-3">
                        <div className="fm flex flex-col bg-white font-primary-med text-[#8FA0C3] w-full min-[1440px]:w-[350px] rounded-xl py-6 ">
                            <div className='w-full border-b border-solid border-[#EAEEF4]'>
                                <div className="fm-head flex items-center font-primary-bold mb-[22px] px-[22px] px-[22px]">
                                    <div className="fm-title font-secondary-bold text-black text-sm mr-[4px]">Сообщения</div>
                                    <span className="fm-new-count font-secondary-bold text-sm text-[#7AB23A]">(+4)</span>
                                    <span className="fm-count font-secondary-bold text-sm text-[#C8D5ED] ml-auto">(7)</span>
                                </div>
                            </div>
                            <div className="fm-list flex flex-col h-[750px] overflow-hidden overflow-y-scroll chat-scroll">
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='11:42' read='true'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='12:42' read='true'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='13:42' read='true'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='14:42' read='true'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='11:42' read='true'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='12:42' read='true'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='13:42' read='true'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='14:42' read='true'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/><ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='11:42' read='true'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='12:42' read='true'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='13:42' read='true'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='14:42' read='true'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                            </div>
                        </div>
                        <div className="chat flex flex-wrap bg-white font-primary-med text-[#8FA0C3] min-w-[400px] w-full rounded-xl py-6">
                            {chat ?
                                <div className='w-full h-full'>
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
                                    <div className="chat-messages w-full flex flex-col flex-grow overflow-y-scroll text-[12px] px-8 h-[570px] overflow-hidden overflow-y-scroll chat-scroll">
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
                                                <img className="w-full h-full object-cover" src='/img/icon-notification-feed.svg' alt="notification"/>
                                            </span>
                                            <span className="chat-notification-text font-secondary-bold text-sm text-black">Заказ #59698658 открыт повторно.</span>
                                        </div>
                                        <div className='px-6 pt-6'>
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
                                : 
                                <div className="smm-empty flex flex-col flex-grow justify-center items-center w-full h-full">
                                    <div className="smm-empty-icon flex-shrink-0 mb-[32px]">
                                        <img src='/img/icon-chat.svg' alt='chat'/>
                                    </div>
                                    <div className="smm-empty-text font-primary-med text-xl text-center text-[#74809A80]">Выберите, кому хотели ли бы написать</div>
                                </div>
                            }
                        </div>  
                        <div className="smm-deal flex flex-col bg-white font-primary-med text-[#8FA0C3] min-w-[250px] max-w-[350px] w-[250px] min-[1670px]:w-full rounded-xl py-6">
                            <div className="smm-deal-head flex items-center justify-between font-primary-bold text-[14px] mb-[22px] px-[22px]">
                                <div className="smm-deal-title font-secondary-bold text-black text-sm">Сделка</div>
                                <div className="smm-deal-head-count font-secondary-bold text-[#C8D5ED]">(8)</div>
                            </div>
                            <div className="smm-deal-list flex flex-col w-full">
                                {arr.length !== 0 ?
                                    arr.map(item => {
                                        return (
                                            <div key={uuid()} className="smm-deal-item flex items-center w-full p-[12px] cursor-pointer hover:bg-[#C8D5ED]/30">
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
                    </div>
                    <div className="smm-main flex min-[1440px]:hidden align-start justify-between w-full h-full gap-3">
                        {tabItem ?
                            <div className="fm flex flex-col bg-white font-primary-med text-[#8FA0C3] w-full min-[705px]:max-w-[56%] min-[868px]:max-w-[68%] min-[1440px]:w-[350px] rounded-xl py-6 ">
                                <div className='w-full border-b border-solid border-[#EAEEF4]'>
                                    <div className="fm-head flex items-center font-primary-bold text-xs sm:text-sm mb-[22px] px-[22px] px-[22px]">
                                        <div className="fm-title font-secondary-bold text-black mr-[4px]">Сообщения</div>
                                        <span className="fm-new-count font-secondary-bold text-[#7AB23A]">(+4)</span>
                                        <span className="fm-count font-secondary-bold text-[#C8D5ED] ml-auto">(7)</span>
                                    </div>
                                </div>
                                <div className="fm-list flex flex-col h-[750px] overflow-hidden overflow-y-scroll chat-scroll">
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар. Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='11:42' read='true'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='12:42' read='true'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='13:42' read='true'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='14:42' read='true'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='11:42' read='true'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='12:42' read='true'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='13:42' read='true'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='14:42' read='true'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/><ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='11:42' read='true'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='12:42' read='true'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='13:42' read='true'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='14:42' read='true'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                    <ItemMessagesMy openChat={openChat} avatar='avatar-example-1.efb6cc72.png' nameUser='Allice' message='Привет, где-то вечером готов купить твой товар' time='10:42'/>
                                </div>
                            </div>
                            :
                            <div className="chat flex flex-wrap bg-white font-primary-med text-[#8FA0C3] sm:min-w-[400px] w-full rounded-xl py-4 sm:py-6">
                                <div className='w-full h-full'>
                                    <div className='w-full border-b border-solid border-[#EAEEF4]'>
                                        <div className="chat-head flex items-start text-sm sm:text-base mb-[22px] gap-3 px-3 sm:px-8">
                                            <div className="chat-head-avatars flex items-center w-16">
                                                <div className="fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative bg-white rounded-full">
                                                    <div className="fm-message-avatar flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-full">
                                                        <img className="sps-avatar-pic w-full h-full object-cover" src="/img/avatar-example-bot.1e9be783.png" alt="user"/>
                                                    </div>
                                                </div>
                                                <div className="fm-message-avatar-wrapper p-1 flex-shrink-0 overflow-hidden relative bg-white rounded-full translate-x-[-40%]">
                                                    <div className="fm-message-avatar flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-full">
                                                        <img className="sps-avatar-pic w-full h-full object-cover" src="/img/avatar-example-1.efb6cc72.png" alt="user"/>
                                                    </div>
                                                    <span className="fm-message-status block bg-gradient-secondary z-20 h-[8px] w-[8px] right-[7px] bottom-[7px] rounded-full border-0 border-white absolute"></span>
                                                    <span className="fm-message-status block bg-white z-10 h-[16px] w-[16px] right-[3px] bottom-[3px] rounded-full border-0 border-white absolute"></span>
                                                </div>
                                            </div>
                                            <div className="chat-head-user flex flex-col">
                                                <div className="chat-head-username flex items-center gap-3">
                                                    <div className='font-secondary-bold text-sm sm:text-base text-black'>Allice, Support</div>
                                                    <div className='flex items-center gap-2'>
                                                        <div>
                                                            <img src="/img/icon-focus.svg" alt="focus"/>
                                                        </div>
                                                        <div>
                                                            <img src="/img/icon-desktop.svg" alt="desktop"/> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat-head-info flex text-[#8FA0C3] font-primary-med text-xs sm:text-sm">
                                                    <a href="#">Allice</a> &nbsp;смотрит&nbsp; 
                                                    <a href="#">Warface 90 ранг, донат: 20</a>
                                                    <a href="#">сервер: ru.warface</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-messages w-full flex flex-col flex-grow overflow-y-scroll text-[10px] text-xs px-3 sm:px-8 h-[570px] overflow-hidden overflow-y-scroll chat-scroll">
                                        <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                        <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                        {(newDate) ? 
                                            <div className="px-3 w-[86px] mx-auto py-1 mb-[18px] rounded-[34px] bg-[#0000000D] font-roboto text-[10px] sm:text-xs text-[#979797B2]">12.09.2019</div>
                                            : null
                                        }
                                        <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                        <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                        <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                        <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                        <ChatMessageUser time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой'/>
                                        <ChatMessageUser tail='true' avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ?'/>
                                        <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                        <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                        {(newDate) ? 
                                            <div className="px-3 w-[86px] mx-auto py-1 mb-[18px] rounded-[34px] bg-[#0000000D] font-roboto text-[10px] sm:text-xs text-[#979797B2]">12.09.2019</div>
                                            : null
                                        }
                                        <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                        <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                        <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                        <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                        <ChatMessageUser time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой'/>
                                        <ChatMessageUser tail='true' avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ?'/>   
                                        <ChatMessageMy avatar='avatar-example-bot.1e9be783.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                        {(newDate) ? 
                                            <div className="px-3 w-[86px] mx-auto py-1 mb-[18px] rounded-[34px] bg-[#0000000D] font-roboto text-[10px] sm:text-xs text-[#979797B2]">12.09.2019</div>
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
                                        <div className="chat-notification flex items-center w-full py-4 px-3 sm:px-8 bg-[#EEF4FF]">
                                            <span className="chat-notification-icon flex-shrink-0 flex justify-center items-center w-[25px] h-[26px] mr-[24px]">
                                                <img src='/img/icon-notification-feed.svg' alt="notification"/>
                                            </span>
                                            <span className="chat-notification-text font-secondary-bold text-xs sm:text-sm text-black">Заказ #59698658 открыт повторно.</span>
                                        </div>
                                        <div className='px-6 pt-6'>
                                            <div className="chat-input flex items-center bg-white font-secondary-med p-4 border border-[#E4E9F4] rounded-xl w-full">
                                                <input className="font-secondary-med chat-input-input text-black w-full h-full outline-none placeholder:text-[#BAC9E5] text-sm sm:text-base" placeholder="Вставьте содержимое товара..."/>
                                                <button className="chat-input-btn flex-shrink-0 flex justify-center items-center w-[26px] h-[20px] mr-[24px]">
                                                    <img className="fbc-avatar-pic w-full h-full object-cover" src='/img/icon-foto.svg' alt="foto"/>
                                                </button>
                                                <button className="flex-shrink-0 bg-inherit flex justify-center items-center w-[22px] h-[20px]">
                                                    <img className="fbc-avatar-pic w-full h-full object-cover" src='/img/icon-send.svg' alt="send"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        }
                        <div className="smm-deal hidden min-[705px]:flex flex-col bg-white font-primary-med text-[#8FA0C3] min-w-[250px] max-w-[350px] w-full rounded-xl py-6">
                            <div className="smm-deal-head flex items-center justify-between font-primary-bold text-[14px] mb-[22px] px-[22px]">
                                <div className="smm-deal-title font-secondary-bold text-black text-sm">Сделка</div>
                                <div className="smm-deal-head-count font-secondary-bold text-[#C8D5ED]">(8)</div>
                            </div>
                            <div className="smm-deal-list flex flex-col w-full">
                                {arr.length !== 0 ?
                                    arr.map(item => {
                                        return (
                                            <div key={uuid()} className="smm-deal-item flex items-center w-full p-[12px] cursor-pointer hover:bg-[#C8D5ED]/30">
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
                    </div>
                </div>
            </div>
            <LayoutBtn />
        </div>
    );
};

export default MyMessages;