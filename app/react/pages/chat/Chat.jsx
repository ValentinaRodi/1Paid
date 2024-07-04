import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatMessageMy from "../../components/chatMessage/ChatMessageMy";
import ChatMessageUser from "../../components/chatMessage/ChatMessageUser";
import Title from '../../components/title/Title';
import uuid from 'react-uuid';
import CardGameChat from "../../components/cardGame/CardGameChat";
import { useLocation  } from 'react-router-dom';
import StarRating from "../../components/starRating/StarRating";
import FeedbacksItemSmall from '../../components/feedbacksItem/FeedbacksItemSmall';
import ModalPetition from '../../components/modalPetition/ModalPetition';
import { createRoot } from "react-dom/client";

import ModalPay from '../../components/modalPay/ModalPay';
import Pagination from '../../components/pagination/Pagination';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';



function Chat() {
    const [newDate, setNewDate] = useState(true);
    const [feedBack, setFeedBack] = useState(false);
    const [message, setMessqage] = useState(false);
    const [chat, setChat] = useState(false);
    const [tabClass, setTabClass] = useState(true);
    const [tabItem, setTabItem] = useState(true);
    const [showModalSubmit, setShowModalSubmit] = useState(false);
    const [deal, setDeal] = useState(false);
    const navigate = useNavigate();

    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const body = document.querySelector('body');

    const location = useLocation();
    const name = location.state.name
    const rank = location.state.rank;
    const newCard = location.state.newCard;
    const description = location.state.description;
    const seoName = location.state.seoName;
    const price = location.state.price;


    // Для автоматического расчета высоты отзыва textarea Отзыва feedBack
    const [text, setText] = useState('');

    const handleInputChange = (e) => {
        setText(e.target.value);
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    const submitFeedback = (e) => {
        if(text.length === 0) {
            e.preventDefault();
        } else {
            scrollToTop();
            setShowModalSubmit(true);
            setText('');
            document.getElementById('feedback').style.height = '3rem';
            e.preventDefault();
        };
    };

    const openModalSubmit = () => {
        scrollToTop();
        setShowModalSubmit(true);
    };
    
    useEffect(() => {
        if(feedBack && text === '') {
            document.getElementById('feedback').style.height = '3rem';
        };
    }, [text]);

    useEffect(() => {
        if (showModalSubmit) {
            setTimeout(() => {
                setShowModalSubmit(false);
          }, 2000);
        }
    }, [showModalSubmit, setShowModalSubmit]);

    const scrollToTop = () => { 
        window.scrollTo({ 
            top: 0,  
            behavior: 'smooth'
        }); 
    }; 

    const clickDeal = () => {
        setDeal(!deal);
    };

    const clickOpenModalPetition = () => {
        body.style.overflow = 'hidden';
        setModalEl(<ModalPetition
            closeModal={closeModal} 
        />);
        setModalOpen(true);
    };

    const closeModal = () => {
        body.style.overflow = 'auto';
        setModalOpen(false);
        setModalEl('');
    };

    useEffect(() => {
        const modal = document.getElementById('modal');

        if (modalOpen) {
            modal.classList.add('modal');
            modal.textContent = '';

            const containerModal = document.createElement("div");
            const root = createRoot(containerModal);
            root.render(modalEl);
            modal.appendChild(containerModal);   
        };

        if (!modalOpen) {
            modal.classList.remove('modal');
            modal.textContent = '';
        };
        
    }, [modalEl]);

    const goProfile = () => {
        window.scrollTo({ top: 0 }); 
        navigate('/profile',  { state: {userName:'Shenderro' } });
    };

    const goTovar = () => {
        window.scrollTo({ top: 0 }); 
        navigate('/tovars',  { state: {userName:'Shenderro' } });
    };



    // const [tab, setTab] = useState([true, false, false]);
    const [donat, setDonat] = useState([true, false, false, false, false]);
    const components = [1,2,3,4,5,6,7,8,9];
    const swiperRef = useRef();

    const clickDonat = (index) => {
        const newDonat = donat.map((item, i) => i === index ? true : false);
        setDonat(newDonat);
    };

    const openModalBuy = () => {
        body.style.overflow = 'hidden';
        setModalEl(<ModalPay closeModal={closeModal} title='Подтверждение заказа' sum='3567'/>);
        setModalOpen(true);
    };

    const [chatMobile, setChatMobile] = useState(false);

    const openChatMobile = () => {
        if(chatMobile) setDeal(false);
        setChatMobile(!chatMobile);
    };

    const arr = [0,1,2,3,4,5,6,7,8,9];

    const [sum, setSum] = useState(price ? price : 0);

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full layout-main relative">
                <div className="smm">
                    {/* <Title title='Чат с продавцом'/> */}
                    <div className='w-full flex gap-3 relative mt-5'>
                        {chatMobile ?
                            <div className={`${deal ? 'hidden xl:flex' : 'flex'} chat  flex-wrap bg-white font-primary-med text-[#8FA0C3] w-full rounded-xl py-4 sm:py-6`}>
                                <div className='w-full border-b border-solid border-[#EAEEF4] px-4 sm:px-8'>
                                    <div className="chat-head flex items-start text-[14px] mb-[22px] gap-3">
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
                                                <div className='font-secondary-bold text-base text-black'>Allice, Support</div>
                                                <div className='flex items-center gap-2'>
                                                    <button onClick={clickOpenModalPetition} className='bg-inherit'>
                                                        <img src="/img/icon-focus.svg" alt="focus"/>
                                                    </button>
                                                    <button onClick={clickDeal} className='bg-inherit'>
                                                        <img src="/img/icon-desktop.svg" alt="desktop"/> 
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="chat-head-info flex text-[#8FA0C3] font-primary-med text-sm">Был(а) в сети 4ч назад</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-messages w-full flex flex-col flex-grow overflow-y-scroll text-[12px] px-4 sm:px-8 h-[570px] overflow-hidden chat-scroll">
                                    <div className="rounded-lg bg-white py-6 flex flex-col text-xs text-[#8FA0C3] gap-3 w-full">
                                        <div className="sdb-papper-title font-primary-bold  text-lg text-black text-center">Информация для сделки</div>
                                        <div className="sdb-papper-text flex gap-3 font-secondary-med gap-1 items-baseline pb-3">01 <span className="text-base text-black font-secondary-bold">Исполнитель начинает сделку, нажав на кнопку “Предложить”</span></div>
                                        <div className="sdb-papper-text flex gap-3 font-secondary-med gap-1 items-baseline pb-3">02 <span className="text-base text-black font-secondary-bold">Заказчик нажимает “Оплатить”</span></div>
                                        <div className="sdb-papper-text flex gap-3 font-secondary-med gap-1 items-baseline pb-3 border-b border-solid border-[#DBE0ED]">03 <span className="text-base text-black font-secondary-bold">После проверки товара покупатель завершает сделку.</span></div>
                                    </div>
                                    <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                    <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                    {(newDate) ? 
                                        <div className="px-3 w-[86px] mx-auto py-1 mb-[18px] rounded-[34px] bg-[#0000000D] font-roboto text-xs text-[#979797B2]">12.09.2019</div>
                                        : null
                                    }
                                    <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                    <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                    <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                    <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                    <ChatMessageUser time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой'/>
                                    <ChatMessageUser tail='true' avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ?'/>
                                    <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                    <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                    {(newDate) ? 
                                        <div className="px-3 w-[86px] mx-auto py-1 mb-[18px] rounded-[34px] bg-[#0000000D] font-roboto text-xs text-[#979797B2]">12.09.2019</div>
                                        : null
                                    }
                                    <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                    <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                    <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                    <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                    <ChatMessageUser time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой'/>
                                    <ChatMessageUser tail='true' avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ?'/>
                                </div>
                                <div className="chat-form w-full self-end">
                                    <div className="chat-notification flex items-center w-full h-[85px] px-4 sm:px-8 bg-[#EEF4FF] border-b border-solid border-[#D3DBE5]">
                                        <span className="chat-notification-icon flex-shrink-0 flex justify-center items-center w-[25px] h-[26px] mr-[24px]">
                                            <img className="w-full h-full object-cover" src='/img/icon-notification-feed.svg' alt="notification"/>
                                        </span>
                                        <span className="chat-notification-text font-secondary-bold text-xs sm:text-[14px] text-black">Исполнитель <button onClick={goProfile} className='bg-inherit text-[#1E61EB] hover:underline'>Shenderro</button> готов выполнить заказ #55353 <br/><button onClick={goTovar} className='text-start bg-inherit text-[#1E61EB] hover:underline'>Аккаунт Warface за 60 ранг быстро по низкой стоимости</button></span>
                                    </div>
                                    <div className="chat-notification flex items-center w-full h-[85px] px-4 sm:px-8 bg-[#EEF4FF]">
                                        <span className="chat-notification-icon flex-shrink-0 flex justify-center items-center w-[25px] h-[26px] mr-[24px]">
                                            <img className="w-full h-full object-cover" src='/img/icon-notification-feed.svg' alt="notification"/>
                                        </span>
                                        <span className="chat-notification-text font-secondary-bold text-xs sm:text-[14px] text-black">Исполнитель <button onClick={goProfile} className='bg-inherit text-[#1E61EB] hover:underline'>Shenderro</button> готов выполнить заказ #55353 <br/><button onClick={goTovar} className='text-start bg-inherit text-[#1E61EB] hover:underline'>Аккаунт Warface за 60 ранг быстро по низкой стоимости</button></span>
                                    </div>
                                    <div className='px-4 sm:px-6 pt-6'>
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
                            <div className="h-[934px] overflow-y-scroll overflow-hidden chat-scroll flex flex-col gap-3 w-full md:w-[68%] xl:w-[40%] min-w-[272px] flex-shrink-1 2xl:flex-shrink-0">
                            <CardGameChat changeSum={setSum} openModalSubmit={openModalSubmit} garant='1' new={newCard} rank={rank} id='1' seoName={seoName} icon='product-preview-1.fcb96f91.png' name={name} description={description}/> 
                            {/* {info ?
                                <div className="rounded-lg bg-white p-6 flex flex-col text-xs text-[#8FA0C3] gap-3">
                                    <div className="sdb-papper-title font-primary-bold  text-lg text-black border-b border-solid border-[#DBE0ED] pb-3">Информация для сделки</div>
                                    <div className="sdb-papper-text flex flex-col items-start font-secondary-med gap-1 border-b border-solid border-[#DBE0ED] pb-3">01 <span className="text-base text-black font-secondary-bold">Исполнитель начинает сделку, нажав на кнопку “Предложить”</span></div>
                                    <div className="sdb-papper-text flex flex-col items-start font-secondary-med gap-1 border-b border-solid border-[#DBE0ED] pb-3">02 <span className="text-base text-black font-secondary-bold">Заказчик нажимает “Оплатить”</span></div>
                                    <div className="sdb-papper-text flex flex-col items-start font-secondary-med gap-1 ">03 <span className="text-base text-black font-secondary-bold">После проверки товара покупатель завершает сделку.</span></div>
                                </div>
                                : null
                            } */}
                            {feedBack ?
                                <div className="sfb-form rounded-lg p-6 bg-white w-full">
                                    <div className="sfb-form-h border-b border-solid border-[#E9EAF4] pb-0 md:pb-3 flex justify-between items-center gap-2">
                                        <div className="sfb-form-title font-secondary-bold text-base md:text-lg text-black">Оставить отзыв</div>
                                        <div className="sfb-btn-close flex-shrink-0 w-4 h-4 [&amp;_svg]:w-[100%] [&amp;_svg]:h-[100%] text-[#D6D9EA] cursor-pointer hidden 2md:block">
                                            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.424023 17.576C-0.0462888 17.1028 -0.0462888 16.3387 0.424023 15.8656L15.8656 0.424038C16.1621 0.0778742 16.6275 -0.0729097 17.0706 0.0336795C17.5137 0.140269 17.8597 0.486241 17.9663 0.929353C18.0729 1.37247 17.9221 1.83793 17.5759 2.13438L2.13436 17.576C1.66124 18.0463 0.897141 18.0463 0.424023 17.576Z" fill="currentColor"></path>
                                                <path d="M0.424023 0.424023C0.897141 -0.0462888 1.66124 -0.0462888 2.13436 0.424023L17.5759 15.8656C17.9221 16.1621 18.0729 16.6275 17.9663 17.0706C17.8597 17.5137 17.5137 17.8597 17.0706 17.9663C16.6275 18.0729 16.1621 17.9221 15.8656 17.5759L0.424023 2.13436C-0.0462888 1.66124 -0.0462888 0.897141 0.424023 0.424023Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="sfb-form-b mt-3">
                                        <div className="sfb-form-field">
                                            <div className="sfb-form-label mb-3 font-secondary-bold text-xs text-black">Оценка продавца</div>
                                            <div className='w-full h-12 border border-solid border-[#CED0E880] rounded flex items-center justify-center'>
                                                <StarRating />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sfb-form-b mt-3">
                                        <div className="sfb-form-field">
                                            <div className="sfb-form-label mb-3 font-secondary-bold text-xs text-black">Поделитесь впечатлением</div>
                                            <textarea value={text} maxLength={240} onChange={handleInputChange} id="feedback" className="overflow-hidden h-12 sfb-form-input rounded border border-solid border-[#E3E4F4] w-full px-4 py-3.5 bg-[#EAEBF8] font-secondary-bold text-[11px] md:text-[13px] text-black resize-none duration-200 placeholder:text-[#BAC9E5]" placeholder="Напишите свой отзыв"></textarea>
                                        </div>
                                    </div>
                                    <div className="sfb-form-f mt-4 md:mt-6">
                                        <button onClick={submitFeedback} className={`${text.length === 0 ? 'bg-[#F4F3F9] flex items-center cursor-default text-[#CDCFDC]' : 'btn-primary btn text-white'} rounded w-full h-12 justify-center gap-2`}>
                                            <div className="w-4 h-4 [&amp;_svg]:w-[100%] [&amp;_svg]:h-[100%]">
                                                <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.946 0.0639801L0.626033 5.70513C0.463011 5.76996 0.318444 5.87836 0.209005 6.01788C0.0995662 6.1574 0.0297919 6.32239 0.00762682 6.49365C-0.0145383 6.66491 0.0118374 6.83553 0.0837696 6.98581C0.155702 7.13609 0.27023 7.25985 0.414115 7.34288L3.55914 9.15716C3.76185 9.27341 4.00825 9.3009 4.24415 9.23358C4.48004 9.16625 4.68607 9.00964 4.81696 8.79819C4.94785 8.58673 4.9929 8.3378 4.94212 8.10609C4.89133 7.87437 4.74888 7.67888 4.54616 7.56264L2.98031 6.64883L13.6356 2.45301L9.47492 13.0236L7.68164 9.64678L9.83744 7.49099C10.0139 7.31452 10.1178 7.08001 10.1264 6.83897C10.1349 6.59793 10.0473 6.37011 9.88289 6.2057C9.71848 6.04129 9.49074 5.95377 9.2497 5.9623C9.00866 5.97082 8.77408 6.07469 8.59761 6.25116L5.93613 8.91264C5.78164 9.05683 5.67663 9.24556 5.63802 9.44836C5.59941 9.65115 5.62944 9.8562 5.72328 10.0305L8.73194 15.7007C8.81118 15.8508 8.9339 15.9718 9.08519 16.049C9.23649 16.1263 9.40994 16.1564 9.58485 16.136C9.75976 16.1156 9.92866 16.0454 10.0712 15.9339C10.2137 15.8224 10.3238 15.6743 10.3883 15.5073L16.0295 1.18738C16.0937 1.02301 16.1111 0.846999 16.0794 0.679952C16.0478 0.512905 15.9684 0.361711 15.8508 0.244033C15.7331 0.126354 15.5819 0.0470376 15.4148 0.0153918C15.2478 -0.016254 15.0719 0.00113375 14.9075 0.0653802L14.946 0.0639801Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div className="btn-text font-secondary-bold text-xs">Отправить</div>
                                        </button>
                                    </div>
                                </div>
                                : null   
                            }
                            {message ?
                                <FeedbacksItemSmall nameAnswer='Shenderro' avatarAnswer='avatar-example-5.00d4721a.png' timeAnswer='12 Фев. 22:15' rank='4.8' name='Sansa' time='01:05 27.12.2019' avatar='avatar-example-4.6cd623f4.png' text='Потрясный сайт! Без обманов, с реальным процентом полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги! Сделано потрясающе! Спасибо ребятам.важно обращать внимание на отзывы покупателей, репутацию продавца, а также наличие гарантий и защиты покупателя. Также стоит убедиться, что сайт не продает пиратские копии игр и что покупка осуществляется в безопасной среде.'/>
                                : null
                            }
                            <div className=" bg-white rounded-xl w-full p-4 sm:p-6 mb-3">
                                <div className='w-full mb-4 sm:mb-6 flex flex-col gap-4 sm:gap-14'>
                                    <div className='font-secondary-bold text-lg sm:text-xl font-bold text-black'>Описание</div>
                                    <div className='font-secondary-med text-base sm:text-lg leading-[20px] sm:leading-[35px] text-black'>Лос-Сантос – некогда великолепный городок, попасть в который мечтали миллионы. <br/>Сегодня он стал просто пристанищем вышедших в тираж звезд. <br/>Здесь мало интересных событий и планомерно текущая жизнь.</div>
                                    <div className='font-secondary-med leading-[20px] sm:leading-[35px] text-base sm:text-lg text-black'>Хотите отравить существование обеспеченных жителей и заставить забыть о покое всю местную полицию? <br/>Тогда вам стоит купить Grand Theft Auto V на steampay.com! То, что предложили в этой серии разработчики, гарантировано приведёт вас в неописуемый восторг. Так что не теряйте времени даром и начните играть прямо сейчас!</div>
                                </div>
                                <div className="scd-main flex flex-col items-center w-full gap-3 relative">
                                    <Swiper
                                        loop={true}
                                        slidesPerView={1}
                                        onBeforeInit={(swiper) => {
                                            swiperRef.current = swiper;
                                        }}
                                        modules={[Navigation]}
                                        breakpoints={{
                                            400: {
                                                slidesPerView: 2,
                                                },
                                            500: {
                                            slidesPerView: 3,
                                            },
                                            768: {
                                            slidesPerView: 1,
                                            },
                                            900: {
                                            slidesPerView: 2,
                                            },
                                            2150: {
                                                slidesPerView: 3,
                                            }
                                        }}
                                        className='h-[190px] md:h-[216px] w-full'
                                        >
                                        {components.map((component, index) => (
                                            <SwiperSlide className="swiper-slide2" key={uuid()}>
                                                <div className='h-full bg-[#E7E7E7] rounded-xl'></div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <button onClick={() => swiperRef.current?.slidePrev()} className='absolute z-10 top-[42%] left-[8px] sm:left-[24px] w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-white hidden min-[400px]:flex items-center justify-center'>
                                        <img src="/img/icon-arrow-left-2.svg" alt='to left'/>
                                    </button>
                                    <button onClick={() => swiperRef.current?.slideNext()} className='absolute z-10 top-[42%] right-[20px] sm:right-[36px] w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-white hidden min-[400px]:flex items-center justify-center'>
                                        <img src="/img/icon-arrow-right-2.svg" alt='to right'/>
                                    </button>
                                </div>
                            </div>
                            <div className='bg-white rounded-xl w-full p-4 sm:p-6'>
                                <Title title='Доната' search='true'/>
                                <div className='flex items-center justify-between w-full gap-3 flex-wrap'>
                                    <button onClick={() => clickDonat(0)} className={`${donat[0] ? 'btn gradient-primary text-white' : 'bg-[#EFF1FF] hover:text-white hover:bg-[linear-gradient(36.87deg,#339CFC_18.57%,#1E61EB_80.26%)] text-black'} h-[49px] grow rounded-lg font-secondary-bold text-sm font-bold flex items-center justify-start px-4 min-w-28`}>Все</button>
                                    <button onClick={() => clickDonat(1)} className={`${donat[1] ? 'btn gradient-primary text-white' : 'bg-[#EFF1FF] hover:text-white hover:bg-[linear-gradient(36.87deg,#339CFC_18.57%,#1E61EB_80.26%)] text-black'} h-[49px] grow rounded-lg font-secondary-bold text-sm font-bold flex items-center justify-start px-4`}>Штурмовик</button>
                                    <button onClick={() => clickDonat(2)} className={`${donat[2] ? 'btn gradient-primary text-white' : 'bg-[#EFF1FF] hover:text-white hover:bg-[linear-gradient(36.87deg,#339CFC_18.57%,#1E61EB_80.26%)] text-black'} h-[49px] grow rounded-lg font-secondary-bold text-sm font-bold flex items-center justify-start px-4`}>Медик</button>
                                    <button onClick={() => clickDonat(3)} className={`${donat[3] ? 'btn gradient-primary text-white' : 'bg-[#EFF1FF] hover:text-white hover:bg-[linear-gradient(36.87deg,#339CFC_18.57%,#1E61EB_80.26%)] text-black'} h-[49px] grow rounded-lg font-secondary-bold text-sm font-bold flex items-center justify-start px-4`}>Инженер</button>
                                    <button onClick={() => clickDonat(4)} className={`${donat[4] ? 'btn gradient-primary text-white' : 'bg-[#EFF1FF] hover:text-white hover:bg-[linear-gradient(36.87deg,#339CFC_18.57%,#1E61EB_80.26%)] text-black'} h-[49px] grow rounded-lg font-secondary-bold text-sm font-bold flex items-center justify-start px-4`}>Снайпер</button>   
                                </div>
                                <div className='py-4 sm:py-6 flex flex-wrap gap-x-3.5 gap-y-3'>
                                    {
                                        (arr.length !== 0) ? (
                                            arr.map((item, index) => (
                                                <div key={uuid()} className='w-full min-[475px]:w-auto flex flex-col justify-center items-center bg-white rounded-lg border border-solid border-[#00000026] p-4 sm:p-4'>
                                                    <div className='w-40 sm:w-[190px] mb-2 h-[81px] sm:h-[101px] flex items-center justify-center rounded-xl bg-[linear-gradient(90deg,#F5C63B_0%,#ED502A_100%)]'>
                                                        <div className='w-[155px] sm:w-[185px] h-[76px] sm:h-[97px] bg-white flex items-center justify-center rounded-[11px]'>
                                                            <img className="w-[80%] sm:w-full" src='/img/uzkon12_gold.png' alt='uzkon'/>
                                                        </div>
                                                    </div>
                                                    <div className='font-secondary-bold font-bold text-[13px] text-black'>Золотой Uzkon UNG-12</div>
                                                </div>
                                            ))
                                        ) : null
                                    }
                                </div>
                                <Pagination />
                            </div>
                            </div>
                        }
                        
                        <div className="sfb-btn-open  rounded h-11 justify-center flex md:hidden">
                            <div onClick={openModalBuy} className="btn-text flex items-center justify-center btn btn-secondary font-secondary-bold text-sm text-white w-[70%]">Оплатить {sum}₽</div>
                            <div onClick={openChatMobile} className="btn-text flex items-center justify-center btn btn-primary font-secondary-bold text-sm text-white w-[30%]">{chatMobile ? 'Товар' : 'Чат'}</div>
                        </div>
                        <div className={`${deal ? 'hidden xl:flex' : 'hidden md:flex'} chat  flex-wrap bg-white font-primary-med text-[#8FA0C3] w-full rounded-xl py-4 sm:py-6`}>
                            <div className='w-full border-b border-solid border-[#EAEEF4] px-4 sm:px-8'>
                                <div className="chat-head flex items-start text-[14px] mb-[22px] gap-3">
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
                                            <div className='font-secondary-bold text-base text-black'>Allice, Support</div>
                                            <div className='flex items-center gap-2'>
                                                <button onClick={clickOpenModalPetition} className='bg-inherit'>
                                                    <img src="/img/icon-focus.svg" alt="focus"/>
                                                </button>
                                                <button onClick={clickDeal} className='bg-inherit'>
                                                    <img src="/img/icon-desktop.svg" alt="desktop"/> 
                                                </button>
                                            </div>
                                        </div>
                                        <div className="chat-head-info flex text-[#8FA0C3] font-primary-med text-sm">Был(а) в сети 4ч назад</div>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-messages w-full flex flex-col flex-grow overflow-y-scroll text-[12px] px-4 sm:px-8 h-[570px] overflow-hidden chat-scroll">
                                <div className="rounded-lg bg-white py-6 flex flex-col text-xs text-[#8FA0C3] gap-3 w-full">
                                    <div className="sdb-papper-title font-primary-bold  text-lg text-black text-center">Информация для сделки</div>
                                    <div className="sdb-papper-text flex gap-3 font-secondary-med gap-1 items-baseline pb-3">01 <span className="text-base text-black font-secondary-bold">Исполнитель начинает сделку, нажав на кнопку “Предложить”</span></div>
                                    <div className="sdb-papper-text flex gap-3 font-secondary-med gap-1 items-baseline pb-3">02 <span className="text-base text-black font-secondary-bold">Заказчик нажимает “Оплатить”</span></div>
                                    <div className="sdb-papper-text flex gap-3 font-secondary-med gap-1 items-baseline pb-3 border-b border-solid border-[#DBE0ED]">03 <span className="text-base text-black font-secondary-bold">После проверки товара покупатель завершает сделку.</span></div>
                                </div>
                                <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                {(newDate) ? 
                                    <div className="px-3 w-[86px] mx-auto py-1 mb-[18px] rounded-[34px] bg-[#0000000D] font-roboto text-xs text-[#979797B2]">12.09.2019</div>
                                    : null
                                }
                                <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                <ChatMessageUser time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой'/>
                                <ChatMessageUser tail='true' avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ?'/>
                                <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                {(newDate) ? 
                                    <div className="px-3 w-[86px] mx-auto py-1 mb-[18px] rounded-[34px] bg-[#0000000D] font-roboto text-xs text-[#979797B2]">12.09.2019</div>
                                    : null
                                }
                                <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?' date='true'/>
                                <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой '/>
                                <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                <ChatMessageMy avatar='avatar-example-1.efb6cc72.png' tail='true' icon='true' time='22:23' text='Привет, как дела ?'/>
                                <ChatMessageUser time='22:23' text='Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой'/>
                                <ChatMessageUser tail='true' avatar='avatar-example-1.efb6cc72.png' time='22:23' text='Привет, как дела ?'/>
                            </div>
                            <div className="chat-form w-full self-end">
                                <div className="chat-notification flex items-center w-full h-[85px] px-4 sm:px-8 bg-[#EEF4FF] border-b border-solid border-[#D3DBE5]">
                                    <span className="chat-notification-icon flex-shrink-0 flex justify-center items-center w-[25px] h-[26px] mr-[24px]">
                                        <img className="w-full h-full object-cover" src='/img/icon-notification-feed.svg' alt="notification"/>
                                    </span>
                                    <span className="chat-notification-text font-secondary-bold text-[14px] text-black">Исполнитель <button onClick={goProfile} className='bg-inherit text-[#1E61EB] hover:underline'>Shenderro</button> готов выполнить заказ #55353 <br/><button onClick={goTovar} className='text-start bg-inherit text-[#1E61EB] hover:underline'>Аккаунт Warface за 60 ранг быстро по низкой стоимости</button></span>
                                </div>
                                <div className="chat-notification flex items-center w-full h-[85px] px-4 sm:px-8 bg-[#EEF4FF]">
                                    <span className="chat-notification-icon flex-shrink-0 flex justify-center items-center w-[25px] h-[26px] mr-[24px]">
                                        <img className="w-full h-full object-cover" src='/img/icon-notification-feed.svg' alt="notification"/>
                                    </span>
                                    <span className="chat-notification-text font-secondary-bold text-[14px] text-black">Исполнитель <button onClick={goProfile} className='bg-inherit text-[#1E61EB] hover:underline'>Shenderro</button> готов выполнить заказ #55353 <br/><button onClick={goTovar} className='text-start bg-inherit text-[#1E61EB] hover:underline'>Аккаунт Warface за 60 ранг быстро по низкой стоимости</button></span>
                                </div>
                                <div className='px-4 sm:px-6 pt-6'>
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
                        {deal ?
                            <div className="h-[936px] overflow-y-scroll overflow-hidden chat-scroll smm-deal flex flex-col bg-white font-primary-med text-[#8FA0C3] min-w-[182px] md:max-w-[350px] w-full xl:w-[250px] min-[1670px]:w-full rounded-xl py-6">
                                <div className="smm-deal-head flex items-center justify-between font-primary-bold text-[14px] mb-[22px] px-[22px]">
                                    <button onClick={clickDeal} className='xl:hidden bg-inherit'>
                                        <svg width="57" height="24" viewBox="0 0 57 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" y="0.5" width="56" height="23" rx="11.5" stroke="#E8EAF7"/>
                                            <path d="M15.4697 11.4697C15.1768 11.7626 15.1768 12.2374 15.4697 12.5303L20.2426 17.3033C20.5355 17.5962 21.0104 17.5962 21.3033 17.3033C21.5962 17.0104 21.5962 16.5355 21.3033 16.2426L17.0607 12L21.3033 7.75736C21.5962 7.46447 21.5962 6.98959 21.3033 6.6967C21.0104 6.40381 20.5355 6.40381 20.2426 6.6967L15.4697 11.4697ZM41 11.25L16 11.25L16 12.75L41 12.75L41 11.25Z" fill="#C5CFE4"/>
                                        </svg>
                                    </button>
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
                            : null
                        }
                    </div>
                </div>
                {showModalSubmit ?
                    <div className='absolute top-0 right-0 bg-[#0F0F0F80] rounded-xl w-[240px] h-[38px] flex items-center justify-center'>
                        <p className='font-secondary-bold text-sm text-white'>Отзыв успешно опубликован</p>
                    </div>
                    : null
                }
            </div>
        </div>
    );
};

export default Chat;