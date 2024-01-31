import "./leftMenu.less";
import { useState, useEffect } from 'react';
import React from "react";
import { createRoot } from "react-dom/client";
import Registration from '../../components/registration/Registration';
import Authorization from "../../components/authorization/Authorization";
import RecPass from '../../components/recpass/Recpass';

function LeftMenu() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const openAuthorization = () => {
        setModalEl(<Authorization
            changeLogged={changeLogged}
            closeModal={closeModal}
            openRecoveryPassword={openRecoveryPassword}
            openRegistration={openRegistration}
        />);
        setModalOpen(true);
        console.log(modalEl)
    };

    const closeModal = () =>{
        setModalOpen(false);
        setModalEl('');
    };

    const changeLogged = () => {
        setLoggedIn(true);
    };

    const openRegistration = () => {
        setModalEl(<Registration 
            changeLogged={changeLogged} 
            closeModal={closeModal} 
            openAuthorization={openAuthorization}
        />);
    };

    const openRecoveryPassword = () =>{
        setModalEl('');
        setModalEl(<RecPass 
            closeModal={closeModal} 
        />);
    };

    const sellProduct = () => {
        if(!loggedIn) {
            openAuthorization();
        }
    };

    const goTab = () => {
        if(!loggedIn) {
            openAuthorization();
        }
    };

    const goHistory = () => {
        if(!loggedIn) {
            openAuthorization();
        }
    };

    const goHistorySell = () => {
        if(!loggedIn) {
            openAuthorization();
        }
    };
  
    useEffect(() => {
        let loggedInUser = localStorage.getItem('logged');

        if (loggedInUser) {
            setLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        const modal = document.getElementById('modal');

        if(modalOpen) {
            modal.classList.add('modal');
            modal.textContent = '';
            
            const authorizationContainer = document.createElement("div");
            const root = createRoot(authorizationContainer);
            root.render(modalEl);
            modal.appendChild(authorizationContainer);   
        }
        if(!modalOpen) {
            
            modal.classList.remove('modal');
            modal.textContent = '';
        }
        
    }, [modalEl]);

    return (
        <div className="layout-sidebar menu">
            <div className="cm">
                <div className="cm-inner">
                    <div className="cm-h relative pt-8 bg-center bg-[url('/img/fon-logo.svg')]">
                    <div className="cm-h-inner flex justify-between items-center">
                        <div className="logo w-[180px] 3xl:w-[150px] xl:w-[120px] lg:w-auto lg:flex-shrink-1 lg:basis-[130px]">
                            <img className="logo__dots lg:h-[100%] xl:w-1/2" src="/img/dots-1.82560447.svg" alt="1paid.ru"/>
                            <img className="logo-pic" src="/img/logo.7fb09570.svg" alt="1paid.ru"/>
                        </div>
                        <div>
                            <img src="/img/icon-menu-h.svg" alt="1paid.ru"/>
                        </div>
                    </div>
                    <div className="absolute inset-0 h-[86%] w-full shadow-[0px_4px_35px_0px_rgba(51,156,252,0.45)]"></div>
                    </div>
                    <div className="cm-b mt-4">
                        <div className="cm-container">
                            <div className="tsc flex gap-2 p-1.5 xl:py-4 xl:px-3 mb-10">
                                <div className="tsc-item flex gap-x-3 items-center">
                                    <button className="btn btn-secondary tsc-item-btn flex-shrink-0 w-10 h-10 [&amp;_svg]:w-1/3 xl:w-[50px] xl:h-[50px]" disabled>
                                        <img src="/img/icon-tsc-item-btn.svg" alt="icon-tsc-item-btn"/>
                                    </button>
                                    <div className="tsc-item-info">
                                        <div className="tsc-item-value text-black text-sm">181 924 365</div>
                                        <div className="tsc-item-label mt-0.5 text-xs">Куплено товаров</div>
                                    </div>
                                </div>
                                <div className="tsc-item flex gap-x-2.5 items-center">
                                    <button className="btn btn-primary tsc-item-btn flex-shrink-0 w-10 h-10 [&amp;_svg]:w-1/3 xl:w-[50px] xl:h-[50px]" disabled>
                                        <img src="/img/icon-tsc-item-btn-2.svg" alt="icon-tsc-item-btn"/>
                                    </button>
                                    <div className="tsc-item-info">
                                        <div className="tsc-item-value text-black text-sm">486 532</div>
                                        <div className="tsc-item-label mt-0.5 text-xs">Пользователей</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cm-nav mt-6 3xl:mt-10 xl:mt-8">
                                <div className="navpin">
                                <button onClick={sellProduct} className="navpin-item mt-4 first-of-type:mt-0 xl:mt-[30px] bg-inherit w-full">
                                    <div className="navpin-plate"><img className="navpin-plate-pic" src="/img/link-pin-plate.6d928d3b.svg" alt="dots"/>
                                        <img className="navpin-plate__dots-1" src="/img/dots-1.82560447.svg" alt="dots"/>
                                        <img className="navpin-plate__dots-2" src="/img/dots-1.82560447.svg" alt="dots"/>
                                        <div className="navpin-plate-icon">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M22.0161 24.9999C23.5605 24.9999 24.8125 23.728 24.8125 22.159C24.8125 20.59 23.5605 19.3181 22.0161 19.3181C20.4717 19.3181 19.2197 20.59 19.2197 22.159C19.2197 23.728 20.4717 24.9999 22.0161 24.9999ZM22.016 22.7272C21.7096 22.7211 21.4627 22.4702 21.4568 22.159C21.4568 21.8452 21.7071 21.5908 22.016 21.5908C22.3249 21.5908 22.5753 21.8452 22.5753 22.159C22.5753 22.4728 22.3249 22.7272 22.016 22.7272Z" fill="currentColor"/>
                                                <path d="M24.8111 16.3636C25.4289 16.3636 25.9297 16.8724 25.9297 17.5C25.9297 18.1276 25.4289 18.6364 24.8111 18.6364H14.5092L13.0327 24.1591C12.869 24.7647 12.2531 25.1209 11.6569 24.9545C11.0608 24.7882 10.7102 24.1625 10.8739 23.5568L12.1938 18.6364H10.4489C9.83296 18.6382 9.29627 18.2104 9.15135 17.6023L6.60105 7.27273H4.11785C3.50009 7.27273 2.9993 6.76396 2.9993 6.13636C2.9993 5.50877 3.50009 5 4.11785 5H7.30574C7.92026 5.00231 8.45475 5.42829 8.60326 6.03409L11.1424 16.3636H24.8111Z" fill="currentColor"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M24.0735 15.2273C24.7097 15.2307 25.2608 14.7799 25.3934 14.1477L26.9705 6.64773C27.0548 6.24596 26.9562 5.82701 26.7023 5.50732C26.4484 5.18763 26.0662 5.00126 25.6618 5H11.6463C11.2459 5.00801 10.8699 5.19724 10.6211 5.51602C10.3722 5.83479 10.2765 6.24981 10.36 6.64773L11.9371 14.1477C12.0697 14.7799 12.6208 15.2307 13.257 15.2273H24.0735ZM13.9618 12.9545L12.7649 7.27268H24.5545L23.3577 12.9545H13.9618Z" fill="currentColor"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="navpin-text uppercase ml-7 text-xs 2xl:text-sm">Продать товар</div>
                                </button>
                                <button onClick={goTab} className="navpin-item mt-4 first-of-type:mt-0 xl:mt-[30px] bg-inherit w-full">
                                    <div className="navpin-plate"><img className="navpin-plate-pic" src="/img/link-pin-plate.6d928d3b.svg" alt="dots"/>
                                        <img className="navpin-plate__dots-1" src="/img/dots-1.82560447.svg" alt="dots"/>
                                        <img className="navpin-plate__dots-2" src="/img/dots-1.82560447.svg" alt="dots"/>
                                        <div className="navpin-plate-icon">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20.1525 16.8475L15.1525 21.8475L10.1525 16.8475L7.3125 14.0075C5.93178 12.6268 5.93178 10.3882 7.3125 9.0075C8.69321 7.62679 10.9318 7.62679 12.3125 9.0075L15.1525 11.8675L17.9925 9.0275C19.3732 7.64679 21.6118 7.64679 22.9925 9.0275C24.3732 10.4082 24.3732 12.6468 22.9925 14.0275L20.1525 16.8475ZM13.7525 7.6175C11.5958 5.46083 8.09917 5.46083 5.9425 7.6175C3.78582 9.77418 3.78582 13.2708 5.9425 15.4275L7.3625 16.8475L15.1525 24.6575L22.9625 16.8475L24.3825 15.4275C26.5392 13.2708 26.5392 9.77418 24.3825 7.6175C22.2258 5.46083 18.7292 5.46083 16.5725 7.6175L15.1525 9.0375L13.7525 7.6175Z" fill="currentColor"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="navpin-text uppercase ml-7 text-xs 2xl:text-sm">Закладки</div>
                                </button>
                                <button onClick={goHistory} className="navpin-item mt-4 first-of-type:mt-0 xl:mt-[30px] bg-inherit w-full">
                                    <div className="navpin-plate">
                                        <img className="navpin-plate-pic" src="/img/link-pin-plate.6d928d3b.svg" alt="dots"/>
                                        <img className="navpin-plate__dots-1" src="/img/dots-1.82560447.svg" alt="dots"/>
                                        <img className="navpin-plate__dots-2" src="/img/dots-1.82560447.svg" alt="dots"/>
                                        <div className="navpin-plate-icon">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M23 16C24.6569 16 26 14.6569 26 13V9C26 7.34315 24.6569 6 23 6H19C17.3431 6 16 7.34315 16 9V13C16 14.6569 17.3431 16 19 16H23ZM24 13C24 13.5523 23.5523 14 23 14H19C18.4477 14 18 13.5523 18 13V9C18 8.44772 18.4477 8 19 8H23C23.5523 8 24 8.44772 24 9V13Z" fill="currentColor"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11 16C12.6569 16 14 14.6569 14 13V9C14 7.34315 12.6569 6 11 6H7C5.34315 6 4 7.34315 4 9V13C4 14.6569 5.34315 16 7 16H11ZM12 13C12 13.5523 11.5523 14 11 14H7C6.44772 14 6 13.5523 6 13V9C6 8.44772 6.44772 8 7 8H11C11.5523 8 12 8.44772 12 9V13Z" fill="currentColor"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M25 19C25 18.4477 24.5523 18 24 18H18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20H24C24.5523 20 25 19.5523 25 19Z" fill="currentColor"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M25 23C25 22.4477 24.5523 22 24 22H20C19.4477 22 19 22.4477 19 23C19 23.5523 19.4477 24 20 24H24C24.5523 24 25 23.5523 25 23Z" fill="currentColor"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13 19C13 18.4477 12.5523 18 12 18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H12C12.5523 20 13 19.5523 13 19Z" fill="currentColor"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13 23C13 22.4477 12.5523 22 12 22H8C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24H12C12.5523 24 13 23.5523 13 23Z" fill="currentColor"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="navpin-text uppercase ml-7 text-xs 2xl:text-sm">История просмотра</div>
                                </button>
                                <button onClick={goHistorySell} className="navpin-item mt-4 first-of-type:mt-0 xl:mt-[30px] bg-inherit w-full">
                                    <div className="navpin-plate">
                                        <img className="navpin-plate-pic" src="/img/link-pin-plate.6d928d3b.svg" alt="dots"/>
                                        <img className="navpin-plate__dots-1" src="/img/dots-1.82560447.svg" alt="dots"/>
                                        <img className="navpin-plate__dots-2" src="/img/dots-1.82560447.svg" alt="dots"/>
                                        <div className="navpin-plate-icon">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20 4H9C8.20435 4 7.44129 4.31607 6.87868 4.87868C6.31607 5.44129 6 6.20435 6 7V24.8C6.00064 25.2303 6.25209 25.6207 6.64357 25.7992C7.03506 25.9777 7.4947 25.9116 7.82 25.63L10.5 23.33L13.29 25.72C13.6649 26.0427 14.2091 26.0754 14.62 25.8L18.42 23.26L21.18 25.63C21.5053 25.9116 21.9649 25.9777 22.3564 25.7992C22.7479 25.6207 22.9994 25.2303 23 24.8V7C23 5.34315 21.6569 4 20 4ZM9.78 21.3L8 22.83V7C8 6.44772 8.44771 6 9 6H20C20.5523 6 21 6.44772 21 7V22.84L19.21 21.29C18.8337 20.9706 18.2918 20.938 17.88 21.21L14.08 23.75L11.22 21.3C10.8036 20.9505 10.1964 20.9505 9.78 21.3Z" fill="currentColor"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20 4H9C8.20435 4 7.44129 4.31607 6.87868 4.87868C6.31607 5.44129 6 6.20435 6 7V24.8C6.00064 25.2303 6.25209 25.6207 6.64357 25.7992C7.03506 25.9777 7.4947 25.9116 7.82 25.63L10.5 23.33L13.29 25.72C13.6649 26.0427 14.2091 26.0754 14.62 25.8L18.42 23.26L21.18 25.63C21.5053 25.9116 21.9649 25.9777 22.3564 25.7992C22.7479 25.6207 22.9994 25.2303 23 24.8V7C23 5.34315 21.6569 4 20 4ZM9.78 21.3L8 22.83V7C8 6.44772 8.44771 6 9 6H20C20.5523 6 21 6.44772 21 7V22.84L19.21 21.29C18.8337 20.9706 18.2918 20.938 17.88 21.21L14.08 23.75L11.22 21.3C10.8036 20.9505 10.1964 20.9505 9.78 21.3Z" fill="currentColor"/>
                                                <path d="M19 10H12C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10Z" fill="currentColor"/>
                                                <path d="M19 10H12C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10Z" fill="currentColor"/>
                                                <path d="M19 14H15C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14Z" fill="currentColor"/>
                                                <path d="M19 14H15C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14Z" fill="currentColor"/>
                                                <path d="M11 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H11C10.4477 18 10 17.5523 10 17C10 16.4477 10.4477 16 11 16Z" fill="currentColor"/>
                                                <path d="M11 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H11C10.4477 18 10 17.5523 10 17C10 16.4477 10.4477 16 11 16Z" fill="currentColor"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="navpin-text uppercase ml-7 text-xs 2xl:text-sm">История покупок и продаж</div>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cm-f pb-10">
                        <div className="cm-container flex flex-col items-center">
                            <a className="rounded-full border-[1px] border-solid border-[#C0C2DC59] max-w-none w-full h-10 px-3 flex justify-center items-center hover:bg-slate-100 xl:max-w-[160px] xl:h-12" href="#">
                                <div className="btn-text font-secondary-bold text-sm text-[#A1AEC8] text-xs 3xl:text-sm">Выбор игры</div>
                            </a>
                            <div className="cm-f-bar mt-3 overflow-hidden flex w-full h-auto rounded-xl border-[1px] border-solid border-[#C0C2DC59] flex-col xl:flex-row xl:h-16 xl:rounded-full">
                                <a className="cm-f-bar-item h-12 flex items-center gap-x-2 px-2 text-[#A1AEC8] hover:bg-slate-100 3xl:px-4 xl:h-full" href="#">
                                    <div className="cm-f-bar-item-icon flex-shrink-0">
                                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.2727 5.10197H14.5455V3.28379C14.5455 1.77756 13.3244 0.556519 11.8182 0.556519H2.72727C1.22104 0.556519 0 1.77756 0 3.28379V8.73834C0 10.2446 1.22104 11.4656 2.72727 11.4656H4.13636L5.45455 12.9292V13.2565C5.45455 14.7628 6.67559 15.9838 8.18182 15.9838H11.4091L12.7818 17.5383C13.0407 17.8319 13.4132 18 13.8045 18C14.1959 18 14.5684 17.8319 14.8273 17.5383L16.2 15.9838H17.2727C18.779 15.9838 20 14.7628 20 13.2565V7.80197C19.985 6.3064 18.7684 5.1019 17.2727 5.10197ZM2.72727 9.64743C2.2252 9.64743 1.81818 9.24041 1.81818 8.73834V3.28379C1.81818 2.78171 2.2252 2.3747 2.72727 2.3747H11.8182C12.3203 2.3747 12.7273 2.78171 12.7273 3.28379V8.73834C12.7273 9.24041 12.3203 9.64743 11.8182 9.64743H8.11818L6.53636 11.4656L4.95455 9.64743H2.72727ZM17.2727 14.1929C17.7748 14.1929 18.1818 13.7859 18.1818 13.2838V7.84742C18.1818 7.34534 17.7748 6.93833 17.2727 6.93833H14.5455V8.75651C14.5455 10.2627 13.3244 11.4838 11.8182 11.4838H8.92727L7.55455 13.0383C7.4717 13.1321 7.37696 13.2146 7.27273 13.2838C7.27273 13.7859 7.67974 14.1929 8.18182 14.1929H12.2273L13.8091 16.0838L15.3909 14.1929H17.2727Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <div className="cm-f-bar-item-label font-secondary-bold text-xs 3xl:text-sm">Мои Сообщения</div>
                                </a>
                                <div className="cm-f-bar-sep w-full h-[1px] flex-shrink-0 bg-[#C0C2DC59] xl:h-full xl:w-[1px]"></div>
                                <a className="cm-f-bar-item h-12 flex items-center gap-x-2 px-2 text-[#A1AEC8] hover:bg-slate-100 3xl:px-4 xl:h-full" href="#">
                                    <div className="cm-f-bar-item-icon flex-shrink-0">
                                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.2727 4.33194H16.3636C16.1681 4.33414 15.9732 4.35545 15.7818 4.39557C14.7435 2.13731 12.4855 0.690216 10 0.690216C7.51449 0.690216 5.25645 2.13731 4.21818 4.39557C4.02678 4.35545 3.83191 4.33414 3.63636 4.33194H2.72727C1.22104 4.33194 0 5.55298 0 7.05921V10.6956C0 12.2018 1.22104 13.4228 2.72727 13.4228H3.63636C5.14259 13.4228 6.36364 12.2018 6.36364 10.6956V7.05921C6.35858 6.45136 6.15061 5.86263 5.77273 5.38648C6.45841 3.65157 8.13451 2.51175 10 2.51175C11.8655 2.51175 13.5416 3.65157 14.2273 5.38648C13.8494 5.86263 13.6414 6.45136 13.6364 7.05921V10.6956C13.6364 12.2018 14.8574 13.4228 16.3636 13.4228H17.2727C18.779 13.4228 20 12.2018 20 10.6956V7.05921C20 5.55298 18.779 4.33194 17.2727 4.33194ZM4.54545 10.6956C4.54545 11.1977 4.13844 11.6047 3.63636 11.6047H2.72727C2.2252 11.6047 1.81818 11.1977 1.81818 10.6956V7.05923C1.81818 6.55716 2.2252 6.15014 2.72727 6.15014H3.63636C4.13844 6.15014 4.54545 6.55716 4.54545 7.05923V10.6956ZM17.2727 11.6047C17.7748 11.6047 18.1818 11.1977 18.1818 10.6956V7.05923C18.1818 6.55716 17.7748 6.15014 17.2727 6.15014H16.3636C15.8616 6.15014 15.4545 6.55716 15.4545 7.05923V10.6956C15.4545 11.1977 15.8616 11.6047 16.3636 11.6047H17.2727Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <div className="cm-f-bar-item-label font-secondary-bold text-xs 3xl:text-sm">Тех. Поддержка</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftMenu;
