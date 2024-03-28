import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Rating from '../../components/rating/Rating';
import Title from '../../components/title/Title';

function Profile() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [orient, setOrient] = useState('');
    const [name, setName] = useState('');
    const [balance, setBalance] = useState('');
    const [bonus, setBonus] = useState('');
    const [avatar, setAvatar] = useState('');
    const location = useLocation();
    const { isAuthenticated, setAuth } = useAuth();
    const [feedbackClass, setFeedbackClass] = useState('nav-link-prim');
    const [themesClass, setThemesClass] = useState('nav-link');
    const [shoppListClass, setShoppListClass] = useState('nav-link');

    useEffect(() => {

        fetch("/profile", {
            method: "GET",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log('data', data);
        })
        .catch((error) => {
            console.log(error);
        });

        let loggedInUser = localStorage.getItem('logged');

        if (isAuthenticated === null) {
            window.location = '/';
        }

        if (loggedInUser) {
            setLoggedIn(true);
            setName(localStorage.getItem('name'));
            setBalance(localStorage.getItem('balance'));
            setBonus(localStorage.getItem('bonus'));
            
            if(localStorage.getItem('avatar') !== 'null') {
                setAvatar(localStorage.getItem('avatar'))
            };
        }

    }, [loggedIn]);

    const changeLoggedFalse = () => {
        
        localStorage.clear();

        fetch("/logout", {
            method: "GET",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            //console.log('data', data);
            setAuth(false);
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const clickFeedback = () => {
        setFeedbackClass('nav-link-prim');
        setThemesClass('nav-link');
        setShoppListClass('nav-link');
    };

    const clickThemes = () => {
        setFeedbackClass('nav-link');
        setThemesClass('nav-link-prim');
        setShoppListClass('');
    };

    const clickShoppList = () => {
        setFeedbackClass('nav-link');
        setThemesClass('nav-link');
        setShoppListClass('nav-link-prim');
    };

    
    
    
    return (
        <div className="layout-b flex flex-wrap content-between">
            <div className="spf w-full layout-main">
                <Title title='Мой профиль'/>
                <div className="spf-main flex w-full mt-[20px] gap-[12px]">
                    <div className="spf-bar flex flex-col items-start max-w-[290px] gap-[12px]">
                        <div className="sps-bar flex flex-col items-start font-secondary-bold">
                            <div className="sps-avatar flex-shrink-0 w-[258px] h-[258px] mb-[12px] overflow-hidden rounded-[12px] relative">
                                <img className="sps-avatar-pic w-full h-full object-cover" src='img/avatar-example-5.00d4721a.png' alt="user" />
                            </div>
                            <div className="sps-user flex flex-col w-full font-secondary-bold">
                                <div className="sps-user-info flex justify-between items-center mb-[8px] w-full">
                                <div className="sps-user-username text-lg text-black">Cool Designer</div>
                                <button className="sps-user-link flex justify-center items-center bg-gradient-primary w-[20px] h-[20px] rounded-full">
                                    <div className="sps-user-link-icon flex-shrink-0 w-[10px] h-[5px] [&amp;_svg]:w-full flex justify-center items-center">
                                        <img className="sps-avatar-pic w-full h-full object-cover" src="/img/icon-vk-profile.svg" alt="user" />
                                    </div>
                                </button>
                                </div>
                            </div>
                            <span className="sps-user-status block text-[12px] max-w-max py-[2px] px-[8px] mb-[12px] text-[#8CD23C] text-center border border-[#8CD23C] rounded-full">В сети</span>
                            <div className="sps-user-actions w-full pt-[12px] border-t border-[#DBE0ED]">
                                <button onClick={changeLoggedFalse} className="sps-user-action bg-inherit text-[#ACB6CC] text-[14px]">Выйти из аккаунта</button>
                            </div>
                        </div>
                        <div className="puic flex flex-col font-secondary-bold text-black">
                            <div className="puic-head flex justify-between mb-[16px]">
                                <div className="puic-title text-[14px]">Достижения</div>
                                <div className="puic-action text-[#ACB6CC] text-[12px] border-b border-[#ACB6CC] cursor-pointer">Показать всё</div>
                            </div>
                            <div className="puic-list"></div>
                            <div className="puic-item flex items-start mb-[12px]">
                                <div className="puic-image flex-shrink-0 flex justify-center items-center w-[45px] h-[45px] rounded-full">
                                    <img className="puic-image-pic w-full h-full" src='/img/Rectangle2.png' alt="puic-image" />
                                </div>
                                <div className="puic-item-info flex flex-col">
                                    <div className="puic-item-label leading-tight text-[14px]">Very rare global gold</div>
                                    <div className="puic-item-text leading-tight font-secondary-med text-[12px] text-[#CDCFE5]">Золотой глобус WF с шоколадным акцентом, для лучшего покупаца</div>
                                </div>
                            </div>
                            <div className="puic-item flex items-start mb-[12px] last:mb-0">
                                <div className="puic-image flex-shrink-0 flex justify-center items-center w-[45px] h-[45px] rounded-full">
                                    <img className="puic-image-pic w-full h-full" src='/img/Rectangle2.png' alt="puic-image" />
                                </div>
                                <div className="puic-item-info flex flex-col">
                                    <div className="puic-item-label leading-tight text-[14px]">Global Gold</div>
                                    <div className="puic-item-text leading-tight font-secondary-med text-[12px] text-[#CDCFE5]">Золотой глобус WF</div>
                                </div>
                            </div>
                            <div className="puic-item flex items-start mb-[12px] last:mb-0">
                                <div className="flex-shrink-0 flex justify-center items-center w-[45px] h-[45px] rounded-full">
                                    <img className="w-full h-full" src='/img/Rectangle2.png' alt="puic-image" />
                                </div>
                                <div className="puic-item-info flex flex-col">
                                    <div className="puic-item-label leading-tight text-[14px]">Global Gold</div>
                                    <div className="puic-item-text leading-tight font-secondary-med text-[12px] text-[#CDCFE5]">Золотой глобус WF</div>
                                </div>
                            </div>
                        </div>
                        <div className="puic flex flex-col font-secondary-bold text-black py-[24px]">
                            <div className="puic-head flex justify-between mb-[16px]">
                                <div className="puic-title text-[14px]">В продаже</div>
                                <div className="puic-action text-[#ACB6CC] text-[12px] border-b border-[#ACB6CC] cursor-pointer">Показать всё</div>
                            </div>
                            <div className="puic-list"></div>
                            <div className="puic-item flex items-start mb-[12px] last:mb-0">
                                <div className="puic-image flex-shrink-0 flex justify-center items-center w-[45px] h-[45px] rounded-full">
                                    <img className="puic-image-pic w-full h-full object-contain" src='/img/icon-shopping-card-gradient.ff3dca76.svg' alt="puic-image" />
                                </div>
                                <div className="puic-item-info flex flex-col">
                                    <div className="puic-item-label leading-tight text-[14px]">Аккаунт Warface за хорошие деньги, плюс бонус</div>
                                    <div className="puic-item-text leading-tight font-secondary-med text-[12px] text-[#CDCFE5]">525 000₽</div>
                                </div>
                            </div>
                            <div className="puic-item flex items-start mb-[12px] last:mb-0">
                                <div className="puic-image flex-shrink-0 flex justify-center items-center w-[45px] h-[45px] rounded-full">
                                    <img className="puic-image-pic w-full h-full object-contain" src='/img/icon-shopping-card-gradient.ff3dca76.svg' alt="puic-image" />
                                </div>
                                <div className="puic-item-info flex flex-col">
                                    <div className="puic-item-label leading-tight text-[14px]">Аккаунт Warface</div>
                                    <div className="puic-item-text leading-tight font-secondary-med text-[12px] text-[#CDCFE5]">500₽</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="spf-block flex flex-col w-full gap-[12px]">
                        <div className="spf-user flex flex-wrap justify-between font-secondary-bold text-[14px] text-[#C1CCE0]">
                            <div className='w-full p-[24px] flex flex-wrap gap-x-[62px] gap-y-[20px]'>
                                <div className="spf-info-wrapper flex flex-col">
                                    <div className="spf-info flex mb-[20px]">
                                    <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                                        <div className="spf-info-label">Имя</div>
                                        <div className="spf-info-value text-[16px] text-black">Никита</div>
                                    </div>
                                    <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                                        <div className="spf-info-label">Группа</div>
                                        <div className="spf-info-value text-[16px] text-black">Легенда</div>
                                    </div>
                                    <div className="spf-info-block flex flex-col">
                                        <div className="spf-info-label">Кол-во лайков</div>
                                        <div className="spf-info-value text-[16px] text-black">452</div>
                                    </div>
                                    </div>
                                    <div className="spf-info flex w-full">
                                    <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                                        <div className="spf-info-label">Создано тем на форуме</div>
                                        <div className="spf-info-value text-[16px] text-black">2,938</div>
                                    </div>
                                    <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                                        <div className="spf-info-label">Покупок</div>
                                        <div className="spf-info-value text-[16px] text-black">344</div>
                                    </div>
                                    <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                                        <div className="spf-info-label">Продаж </div>
                                        <div className="spf-info-value text-[16px] text-black">104</div>
                                    </div>
                                    <div className="spf-info-block flex flex-col">
                                        <div className="spf-info-label">Дата регистрации</div>
                                        <div className="spf-info-value text-[16px] text-black">22:12 27.12.2019</div>
                                    </div>
                                </div>
                                </div>
                                <Rating seller='продавца' reviews='1555' rank='4.8'/>
                            </div>
                            <div className="tabs gap-x-[24px] gap-y-[16px] w-full flex items-center font-primary-bold text-[14px] overflow-hidden flex-wrap text-[#8A98B3] ">
                                <button onClick={clickFeedback} className="tabs-tab bg-inherit block uppercase ">
                                    <div className={`${feedbackClass} nav-link-tab tabs-tab-text text-[#8A98B3]`}>Отзывы о продажах</div>
                                </button>
                                <button onClick={clickThemes} className="tabs-tab bg-inherit block uppercase ">
                                    <div className={`${themesClass} nav-link-tab tabs-tab-text text-[#8A98B3]`}>Созданные темы на форуме</div>
                                </button>
                                <button onClick={clickShoppList} className="tabs-tab bg-inherit block uppercase ">
                                    <div className={`${shoppListClass} nav-link-tab tabs-tab-text text-[#8A98B3]`}>Список покупок</div>
                                </button>
                            </div>
                        </div>
                        <div className="spf-feedbacks grid grid-cols-1 gap-y-[12px]">
                            <div className="fbc rounded-xl flex flex-wrap items-start gap-4 bg-white">
                                <div className='w-full flex p-6'>
                                    <div className="fbc-info pr-[16px] flex-shrink-0 flex gap-3">
                                        <div className="fbc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden ">
                                            <img className="fbc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user" />
                                        </div>
                                        <div className="fbc-info-inner">
                                            <div className="fbc-username font-secondary-bold text-lg text-[#1D222C] ">Sansa</div>
                                            <div className="fbc-date font-secondary-med text-xs text-[#CDCFE5] ">01:05 27.12.2019</div>
                                        </div>
                                    </div>
                                    <div className="fbc-text flex-grow border-l border-solid border-[#E7EAF3] pl-4 font-secondary-med text-[10px] text-[#595E72] ">Потрясный сайт! <br />Без обманов, с реальным процентом полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги! Сделано потрясающе! Спасибо ребятам.важно обращать внимание на отзывы покупателей, репутацию продавца, а также наличие гарантий и защиты покупателя. Также стоит убедиться, что сайт не продает пиратские копии игр и что покупка осуществляется в безопасной среде.</div>
                                </div>
                                <div className='w-full h-[36px] bg-[#F9F9FC] flex justify-end items-center px-6 rounded-b-[12px]'>
                                    <div className='flex justify-between items-center'>
                                        <button className='bg-inherit font-secondary-med text-[#C5CFE4] text-xs mr-[24px]'>
                                            Показать ответ
                                        </button>
                                        <button className='bg-inherit font-secondary-med text-[#C5CFE4] underline text-xs mr-[10px]'>
                                            Ответить
                                        </button>
                                        <button className='bg-inherit font-secondary-med text-[#C5CFE4] text-xs'>
                                            <img className="fbc-avatar-pic w-full h-full object-cover" src="/img/icon-profile.svg" alt="icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="fbc rounded-xl flex flex-wrap items-start gap-4 bg-white">
                                <div className='w-full flex p-6'>
                                    <div className="fbc-info pr-[16px] flex-shrink-0 flex gap-3">
                                        <div className="fbc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden ">
                                            <img className="fbc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user" />
                                        </div>
                                        <div className="fbc-info-inner">
                                            <div className="fbc-username font-secondary-bold text-lg text-[#1D222C] ">Sansa</div>
                                            <div className="fbc-date font-secondary-med text-xs text-[#CDCFE5] ">01:05 27.12.2019</div>
                                        </div>
                                    </div>
                                    <div className="fbc-text flex-grow border-l border-solid border-[#E7EAF3] pl-4 font-secondary-med text-[10px] text-[#595E72] ">Потрясный сайт! <br />Без обманов, с реальным процентом полезных выигрышей.</div>
                                </div>
                                <div className='w-full h-[36px] bg-[#F9F9FC] flex justify-end items-center px-6 rounded-b-[12px]'>
                                    <div className='flex justify-between items-center'>
                                        <button className='bg-inherit font-secondary-med text-[#C5CFE4] text-xs mr-[24px]'>
                                            Показать ответ
                                        </button>
                                        <button className='bg-inherit font-secondary-med text-[#C5CFE4] underline text-xs mr-[10px]'>
                                            Ответить
                                        </button>
                                        <button className='bg-inherit font-secondary-med text-[#C5CFE4] text-xs'>
                                            <img className="fbc-avatar-pic w-full h-full object-cover" src="/img/icon-profile.svg" alt="icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="fbc rounded-xl flex flex-wrap items-start gap-4 bg-white">
                                <div className='w-full flex p-6'>
                                    <div className="fbc-info pr-[16px] flex-shrink-0 flex gap-3">
                                        <div className="fbc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden ">
                                            <img className="fbc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user" />
                                        </div>
                                        <div className="fbc-info-inner">
                                            <div className="fbc-username font-secondary-bold text-lg text-[#1D222C] ">Sansa</div>
                                            <div className="fbc-date font-secondary-med text-xs text-[#CDCFE5] ">01:05 27.12.2019</div>
                                        </div>
                                    </div>
                                    <div className="fbc-text flex-grow border-l border-solid border-[#E7EAF3] pl-4 font-secondary-med text-[10px] text-[#595E72] ">Потрясный сайт! <br />Без обманов, с реальным процентом полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги! Сделано потрясающе! Спасибо ребятам.важно обращать внимание на отзывы покупателей, репутацию продавца, а также наличие гарантий и защиты покупателя. Также стоит убедиться, что сайт не продает пиратские копии игр и что покупка осуществляется в безопасной среде.</div>
                                </div>
                                <div className='w-full h-[36px] bg-[#F9F9FC] flex justify-end items-center px-6 rounded-b-[12px]'>
                                    <div className='flex justify-between items-center'>
                                        <button className='bg-inherit font-secondary-med text-[#C5CFE4] text-xs mr-[24px]'>
                                            Показать ответ
                                        </button>
                                        <button className='bg-inherit font-secondary-med text-[#C5CFE4] underline text-xs mr-[10px]'>
                                            Ответить
                                        </button>
                                        <button className='bg-inherit font-secondary-med text-[#C5CFE4] text-xs'>
                                            <img className="fbc-avatar-pic w-full h-full object-cover" src="/img/icon-profile.svg" alt="icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LayoutBtn toTop='true'/>
        </div>
    )
}

export default Profile;
