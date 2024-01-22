/* eslint-disable react/prop-types */
import "../../pages/lending/lending.less";
import "./headerMain.less";
import arrow from "../../../../web/img/icon-back.png";
import vk from "../../../../web/img/icon-vk.svg";
import btnIcon2 from "../../../../web/img/icon-btn-icon-2.svg";
import btnIcon3 from "../../../../web/img/icon-btn-icon-3.svg";
//import avatar from "../../../../web/img/avatar-example-2.9f0c98b7.png";
import iconPlus from "../../../../web/img/icon-plus-blue.a12eb4f0.svg";
import cardArrow from "../../../../web/img/icon-pmc-card-arrow.svg";
import npNav from "../../../../web/img/icon-np-nav-icon-1.svg";
import npNav2 from "../../../../web/img/np-nav-icon-2.svg";
import npNav4 from "../../../../web/img/icon-np-nav-icon-4.svg";
import npNav5 from "../../../../web/img/icon-np-nav-icon-5.svg";
import npNav6 from "../../../../web/img/icon-np-nav-icon-6.svg";
import npNav7 from "../../../../web/img/icon-np-nav-icon-7.svg";
import npNav8 from "../../../../web/img/icon-np-nav-icon-8.svg";
import npNav9 from "../../../../web/img/icon-np-nav-icon-9.svg";
import logoDots from "../../../../web/img/dots-1.82560447.svg";
import logoDots2 from "../../../../web/img/logo.7fb09570.svg";
import btnOrange from "../../../../web/img/btn-orange.svg";
import linkPin from "../../../../web/img/link-pin-plate.6d928d3b.svg";
import navpinPlate from "../../../../web/img/icon-navpin-plate-icon.svg";
import navpinPlate2 from "../../../../web/img/icon-navpin-plate-icon-2.svg";
import navpinPlate3 from "../../../../web/img/icon-navpin-plate-icon-3.svg";
import navpinPlate4 from "../../../../web/img/icon-navpin-plate-icon-4.svg";
import lk from "../../../../web/img/icon-lk.svg";
import Registration from '../../components/registration/Registration';
import Authorization from "../../components/authorization/Authorization";
import RecPass from '../../components/recpass/Recpass';
import { useState, useEffect } from 'react';
import React from "react";
import { createRoot } from "react-dom/client";

function HeaderMain() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [name, setName] = useState('user403219045');
    const [balance, setBalance] = useState('');
    const [bonus, setBonus] = useState('');
    const [avatar, setAvatar] = useState('');
    const [menu, setOpenMenu] = useState('');
    const [notif, setOpenNotif] = useState('hidden');
    const [hedMenu, setOpenHedMenu] = useState('hidden');
    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const changeLogged = () => {
        setLoggedIn(true);
    }

    const changeLoggedFalse = () => {
        setLoggedIn(false);
        localStorage.removeItem('logged');
        localStorage.removeItem('name');
        localStorage.removeItem('avatar');
        localStorage.removeItem('balance');
        localStorage.removeItem('bonus');

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
            console.log('data', data);
        })
        .catch((error) => {
            console.log(error);
            setErrorMessage("An error occurred");
        });
    }

    const changeName = (nameUser) => {
        setName(nameUser);
    }

    const openMenu = () =>{
        setOpenMenu('_active');
    };

    const closeMenu = () =>{
        setOpenMenu('');
    };

    const openHedMenu = () =>{
        (hedMenu === 'hidden') ? setOpenHedMenu('') : setOpenHedMenu('hidden');
    };

    const openNotif = () =>{
        (notif === 'hidden') ? setOpenNotif('') : setOpenNotif('hidden');
    };

    const openAuthorization = () => {
        setModalEl(<Authorization
            changeLogged={changeLogged}
            changeName={changeName}
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

    const openRegistration = () => {
        setModalEl(<Registration 
            changeLogged={changeLogged} 
            changeName={changeName} 
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

    const openProfile = () => {
        openHedMenu();
        history.pushState(null, null, '/profile');
    };
  
    useEffect(() => {
        let loggedInUser = localStorage.getItem('logged');
        
        let links = document.getElementsByTagName('a');
        for (var i = 0; i < links.length; i++) {
            links[i].onclick = function(event) {
              event.preventDefault();
            };
        }

        if (loggedInUser) {
            setLoggedIn(true);
            setBalance(localStorage.getItem('balance'));
            setBonus(localStorage.getItem('bonus'));
            setAvatar(localStorage.getItem('avatar'));
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
        <>
            <div className="layout-h">
            <div className="h-wrapper">
                <header className="h justify-between">
                    <button className="h-backlink hidden" href="#">
                        <img src={arrow} alt="btn-icon"/>
                    </button>
                    <nav className="nav flex ml-4 justify-between gap-x-5 gap-y-5 flex-wrap mr-10 ">
                        <a className="nav-link-prim font-primary-bold text-sm text-[#8A98B3] uppercase  lg:text-sm" href="#">Главное</a>
                        <a className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase  lg:text-sm" href="#">Каталог</a>
                        <a className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase  lg:text-sm" href="#">Топ юзеров</a>
                        <a className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase  lg:text-sm" href="#">Отзывы</a>
                        <a className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase  lg:text-sm" href="#">Гарантии</a>
                        <a className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase  lg:text-sm" href="#">Случайные предметы</a>
                        <a className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase  lg:text-sm" href="#">Форум</a>
                    </nav>
                    {!loggedIn ? (
                        <div className="flex gap-4">
                            <button className="btn btn-primary rounded-full w-11 h-11 justify-center cursor-pointer lg:w-[50px] lg:h-[50px]">
                                <div className="btn-icon">
                                    <img src={vk} alt="btn-vk"/>
                                </div>
                            </button>
                            <button onClick={openAuthorization} className="btn btn-secondary notif-btn notif-btn-a text-white rounded-full w-[140px] h-[45px] lg:w-[160px] lg:h-[55px] justify-center cursor-pointer">
                                ВОЙТИ
                            </button>
                        </div>
                    ) : (
                        <div className="flex justify-between items-center gap-2">
                            <div className="h-notif flex-shrink-0">
                                <div className="notif relative">
                                    <button onClick={openNotif} className="btn btn-secondary notif-btn rounded-full w-11 h-11 justify-center cursor-pointer">
                                        <div className="btn-icon text-white">
                                            <img src={btnIcon2} alt="btn-icon"/>
                                        </div>
                                    </button>
                                    <div className={`${notif} absolute top-[62px] right-[-97px] z-[100] rounded-xl bg-white w-[290px] py-6`}>
                                        <div className="notif-h px-3 flex items-center justify-between flex-wrap gap-2.5 font-secondary-bold text-sm">
                                            <div className="notif-heading text-black">
                                                <span className="font-bold font-primary-bold">Уведомления <span className="extra font-bold font-primary-bold text-[color:var(--color-green-main)]">(+4)</span>
                                                </span>
                                            </div>
                                            <div className="notif-total font-bold font-primary-bold text-[#C8D5ED]">(43)</div>
                                        </div>
                                        <div className="notif-b mt-6">
                                            <div className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                                                <div className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                                                    <div className="btn-icon">
                                                        <img src={btnIcon3} alt="btn-icon"/>
                                                    </div>
                                                </div>
                                                <div className="notif-item-inf flex-grow">
                                                    <div className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                                                        <div className="notif-item-title font-bold font-primary-bold font-secondary-bold text-black">Стол заказа!</div>
                                                        <div className="notif-item-time font-secondary-med text-[#C5CFE4]">22:15</div>
                                                    </div>
                                                    <div className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">Товар по вашему запросу был выставлен на продажу!</div>
                                                </div>
                                            </div>
                                            <div className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                                                <div className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                                                    <div className="btn-icon">
                                                        <img src={btnIcon3} alt="btn-icon"/>
                                                    </div>
                                                </div>
                                                <div className="notif-item-inf flex-grow">
                                                    <div className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                                                        <div className="notif-item-title font-bold font-primary-bold font-secondary-bold text-black">Стол заказа!</div>
                                                        <div className="notif-item-time font-secondary-med text-[#C5CFE4]">22:15</div>
                                                    </div>
                                                    <div className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">Товар по вашему запросу был выставлен на продажу!</div>
                                                </div>
                                            </div>
                                            <div className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                                                <div className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                                                    <div className="btn-icon">
                                                        <img src={btnIcon3} alt="btn-icon"/>
                                                    </div>
                                                </div>
                                                <div className="notif-item-inf flex-grow">
                                                    <div className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                                                        <div className="notif-item-title font-bold font-primary-bold font-secondary-bold text-black">Стол заказа!</div>
                                                        <div className="notif-item-time font-secondary-med text-[#C5CFE4]">22:15</div>
                                                    </div>
                                                    <div className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">Товар по вашему запросу был выставлен на продажу!</div>
                                                </div>
                                            </div>
                                            <div className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                                                <div className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                                                    <div className="btn-icon">
                                                        <img src={btnIcon3} alt="btn-icon"/>
                                                    </div>
                                                </div>
                                                <div className="notif-item-inf flex-grow">
                                                    <div className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                                                        <div className="notif-item-title font-bold font-primary-bold font-secondary-bold text-black">Стол заказа!</div>
                                                        <div className="notif-item-time font-secondary-med text-[#C5CFE4]">22:15</div>
                                                    </div>
                                                    <div className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">Товар по вашему запросу был выставлен на продажу!</div>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="notif-btnall mt-5 w-full border-b border-[#ECEDF7] py-1 flex justify-center duration-200 hover:bg-[#F6F9FF]" href="#">
                                            <div className="btn-text font-primary-bold text-sm text-[#C5CFE4]">Показать все</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="h-profile h-[64px] w-[320px] relative">
                                <div className="pmc py-1 h-14 rounded-full px-3 flex items-center gap-x-3 bg-white">
                                    <div className="pmc-avatar flex-shrink-0 rounded-full w-8 h-8 lg:w-10 lg:h-10">
                                        <img className="w-full h-full object-cover" src={avatar} alt="user avatar"/>
                                    </div>
                                    <div>
                                        <div className="pmc-chip-bar flex gap-x-3 gap-y-2 items-center lg:flex-wrap lg:ml-auto">
                                            <a className="pmc-chip  border rounded-full border-[#DCF1C4] px-2 py-1 flex items-center gap-x-2 duration-200 hover:bg-[#DCF1C4]" href="#">
                                                <span className="font-bold font-primary-bold text-xs text-black whitespace-nowrap">{balance}PD</span>
                                            </a>
                                            <a className="pmc-chip border rounded-full border-[#D2DFFB] px-2 py-1 flex items-center gap-x-2 duration-200 hover:bg-[#D2DFFB]" href="#">
                                                <span className="font-bold font-primary-bold text-xs text-black whitespace-nowrap">{bonus}₽</span>
                                                <img className="pmc-chip-icon w-4 h-4" src={iconPlus} alt="picture"/>
                                            </a>
                                        </div>
                                    </div>
                                    <button onClick={openHedMenu} className="pmc-card-arrow bg-inherit h-profile-btn-open ml-auto text-[#D6D9EA] cursor-pointer hover:text-black">
                                        <img src={cardArrow} alt="navpin-plate-icon"/>
                                    </button>
                                </div>
                                <div className={`${hedMenu} absolute top-16 z-[100] h-profile-content rounded-[22px] w-full py-3 bg-white shadow-sm overflow-hidden`}>
                                    <div className="np">
                                        <nav className="np-nav">
                                            <a onClick={openProfile} className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]" href="#">
                                                <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                    <img src={npNav} alt="np-nav-icon"/>
                                                </div>
                                                <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">Мой профиль</div>
                                            </a>
                                            <a className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]" href="#">
                                                <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                    <img src={npNav2} alt="np-nav-icon"/>
                                                </div>
                                                <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">Мои товары</div>
                                            </a>
                                            <a className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]" href="#">
                                                <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                    <img src={npNav4} alt="np-nav-icon"/>
                                                </div>
                                                <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">Стол заказов</div>
                                            </a>
                                            <a className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]" href="#">
                                                <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                    <img src={npNav5} alt="np-nav-icon"/>
                                                </div>
                                                <div className="np-nav-label font-bold font-primary-bold text-bold text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">Достижения</div>
                                            </a>
                                            <a className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]" href="#">
                                                <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                    <img src={npNav6} alt="np-nav-icon"/>
                                                </div>
                                                <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">Настройки</div>
                                            </a>
                                            <a className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]" href="#">
                                                <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                    <img src={npNav7} alt="np-nav-icon"/>
                                                </div>
                                                <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">Пополение и вывод</div>
                                            </a>
                                            <a className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]" href="#">
                                                <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                    <img src={npNav8} alt="np-nav-icon"/>
                                                </div>
                                                <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">Реферальная система</div>
                                            </a>
                                            <a onClick={changeLoggedFalse} className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]" href="#">
                                                <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                    <img src={npNav9} alt="np-nav-icon"/>
                                                </div>
                                                <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">Выйти из аккаунта</div>
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="h-bar ml-auto flex items-center gap-x-3 hidden">
                        <button className="h-openmenu menu-open menu-open-btn">
                            <span>
                            </span>
                            <span>
                            </span>
                        </button>
                    </div>
                </header>
            </div>
            </div>
            <div className="hm">
                <div className="hm-inner px-5 flex items-center justify-between">
                    <div className="hm-logo">
                        <div className="logo w-[180px] 3xl:w-[150px] xl:w-[120px] lg:w-auto lg:flex-shrink-1 lg:basis-[130px]">
                            <img className="logo__dots lg:h-[100%] xl:w-1/2" src={logoDots} alt="1paid.ru"/>
                            <img className="logo-pic" src={logoDots2} alt="1paid.ru" />
                        </div>
                    </div>
                    <div className="hm-bar flex items-center gap-2.5">
                    {!loggedIn ? (
                    <div className="flex gap-4">
                        <button className="btn btn-secondary notif-btn rounded-full w-11 h-11 justify-center cursor-pointer lg:w-[50px] lg:h-[50px]">
                            <div className="btn-icon">
                                <img src={vk} alt="btn-vk"/>
                            </div>
                        </button>
                        <button onClick={openAuthorization} className="btn btn-secondary text-white rounded-full w-[140px] h-[45px] lg:w-[160px] lg:h-[55px] justify-center cursor-pointer">
                            ВОЙТИ
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-between items-center gap-2">
                        <div className="h-notif flex-shrink-0">
                            <div className="notif relative">
                                <button onClick={openNotif} className="btn btn-secondary notif-btn rounded-full w-11 h-11 justify-center cursor-pointer">
                                    <div className="btn-icon text-white">
                                        <img src={btnIcon2} alt="btn-icon"/>
                                    </div>
                                </button>
                                <div className={`${notif} absolute z-[100] top-[62px] right-[-97px] rounded-xl bg-white w-[290px] py-6`}>
                                    <div className="notif-h px-3 flex items-center justify-between flex-wrap gap-2.5 font-secondary-bold text-sm">
                                        <div className="notif-heading text-black">
                                            <span className="font-bold font-primary-bold">Уведомления <span className="font-bold font-primary-bold extra text-[color:var(--color-green-main)]">(+4)</span>
                                            </span>
                                        </div>
                                        <div className="font-bold font-primary-bold notif-total text-[#C8D5ED]">(43)</div>
                                    </div>
                                    <div className="notif-b mt-6">
                                        <div className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                                            <div className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                                                <div className="btn-icon">
                                                    <img src={btnIcon3} alt="btn-icon"/>
                                                </div>
                                            </div>
                                            <div className="notif-item-inf flex-grow">
                                                <div className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                                                    <div className="notif-item-title font-bold font-primary-bold font-secondary-bold text-black">Стол заказа!</div>
                                                    <div className="notif-item-time font-secondary-med text-[#C5CFE4]">22:15</div>
                                                </div>
                                                <div className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">Товар по вашему запросу был выставлен на продажу!</div>
                                            </div>
                                        </div>
                                        <div className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                                            <div className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                                                <div className="btn-icon">
                                                    <img src={btnIcon3} alt="btn-icon"/>
                                                </div>
                                            </div>
                                            <div className="notif-item-inf flex-grow">
                                                <div className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                                                    <div className="notif-item-title font-bold font-primary-bold font-secondary-bold text-black">Стол заказа!</div>
                                                    <div className="notif-item-time font-secondary-med text-[#C5CFE4]">22:15</div>
                                                </div>
                                                <div className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">Товар по вашему запросу был выставлен на продажу!</div>
                                            </div>
                                        </div>
                                        <div className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                                            <div className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                                                <div className="btn-icon">
                                                    <img src={btnIcon3} alt="btn-icon"/>
                                                </div>
                                            </div>
                                            <div className="notif-item-inf flex-grow">
                                                <div className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                                                    <div className="notif-item-title font-bold font-primary-bold font-secondary-bold text-black">Стол заказа!</div>
                                                    <div className="notif-item-time font-secondary-med text-[#C5CFE4]">22:15</div>
                                                </div>
                                                <div className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">Товар по вашему запросу был выставлен на продажу!</div>
                                            </div>
                                        </div>
                                        <div className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                                            <div className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                                                <div className="btn-icon">
                                                    <img src={btnIcon3} alt="btn-icon"/>
                                                </div>
                                            </div>
                                            <div className="notif-item-inf flex-grow">
                                                <div className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                                                    <div className="notif-item-title font-bold font-primary-bold font-secondary-bold text-black">Стол заказа!</div>
                                                    <div className="notif-item-time font-secondary-med text-[#C5CFE4]">22:15</div>
                                                </div>
                                                <div className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">Товар по вашему запросу был выставлен на продажу!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="notif-btnall mt-5 w-full border-b border-[#ECEDF7] py-1 flex justify-center duration-200 hover:bg-[#F6F9FF]" href="#">
                                        <div className="btn-text font-primary-bold text-sm text-[#C5CFE4]">Показать все</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                                <button onClick={openHedMenu} className="btn btn-orange btn-secondary notif-btn rounded-full w-11 h-11 justify-center cursor-pointer">
                                    <div className="btn-icon text-white">
                                        <img src={lk} alt="navpin-plate-icon"/>
                                    </div>
                                </button>
                            <div className={`${hedMenu} absolute h-profile right-[-60px] top-16 z-[100] h-profile-content rounded-[22px] w-full py-3 bg-white shadow-sm overflow-hidden`}>
                            <div className="pmc py-1 h-14 rounded-full px-3 flex items-center gap-x-3 bg-white mb-4">
                                <div className="pmc-avatar flex-shrink-0 rounded-full w-8 h-8 lg:w-10 lg:h-10">
                                    <img className="w-full h-full object-cover" src={avatar} alt="user avatar"/>
                                </div>
                                <div>
                                    {/* <div className="font-bold font-primary-bold">{name}</div> */}
                                    <div className="pmc-chip-bar flex gap-x-3 gap-y-2 items-center lg:flex-wrap lg:ml-auto">
                                        <a className="pmc-chip  border rounded-full border-[#DCF1C4] px-2 py-1 flex items-center gap-x-2 duration-200 hover:bg-[#DCF1C4]" href="#">
                                            <span className="font-bold font-primary-bold text-xs text-black whitespace-nowrap">{bonus}PD</span>
                                        </a>
                                        <a className="pmc-chip border rounded-full border-[#D2DFFB] px-2 py-1 flex items-center gap-x-2 duration-200 hover:bg-[#D2DFFB]" href="#">
                                            <span className="font-bold font-primary-bold text-xs text-black whitespace-nowrap">{balance}₽</span>
                                            <img className="pmc-chip-icon w-4 h-4" src={iconPlus} alt="picture"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                                <div className="np">
                                    <nav className="np-nav">
                                        <a onClick={openProfile} className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]" href="#">
                                            <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                <img src={npNav} alt="np-nav-icon"/>
                                            </div>
                                            <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">Мой профиль</div>
                                        </a>
                                        <a className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]" href="#">
                                            <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                <img src={npNav2} alt="np-nav-icon"/>
                                            </div>
                                            <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">Мои товары</div>
                                        </a>
                                        <a className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]" href="#">
                                            <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                <img src={npNav4} alt="np-nav-icon"/>
                                            </div>
                                            <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">Стол заказов</div>
                                        </a>
                                        <a className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]" href="#">
                                            <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                <img src={npNav5} alt="np-nav-icon"/>
                                            </div>
                                            <div className="np-nav-label font-bold font-primary-bold text-bold text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">Достижения</div>
                                        </a>
                                        <a className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]" href="#">
                                            <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                <img src={npNav6} alt="np-nav-icon"/>
                                            </div>
                                            <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">Настройки</div>
                                        </a>
                                        <a className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]" href="#">
                                            <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                <img src={npNav7} alt="np-nav-icon"/>
                                            </div>
                                            <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">Пополение и вывод</div>
                                        </a>
                                        <a className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]" href="#">
                                            <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                <img src={npNav8} alt="np-nav-icon"/>
                                            </div>
                                            <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">Реферальная система</div>
                                        </a>
                                        <a onClick={changeLoggedFalse} className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]" href="#">
                                            <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                <img src={npNav9} alt="np-nav-icon"/>
                                            </div>
                                            <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">Выйти из аккаунта</div>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                        <button onClick={openMenu} className="hm-btn-menu bg-inherit mmenu-open flex-shrink-0 w-[50px] h-[50px] flex justify-center items-center flex-col gap-4 cursor-pointer">
                            <span className="w-[30px] h-[3px] bg-white rounded-full">
                            </span>
                            <span className="w-[30px] h-[3px] bg-white rounded-full">
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`mmenu ${menu} pt-8 pb-8 px-12`}>
                <button onClick={closeMenu} className="mmenu-close bg-inherit flex-shrink-0 w-[50px] h-[50px] flex justify-center items-center flex-col gap-4 cursor-pointer">
                    <span className="w-[30px] h-[3px] bg-white rounded-full">
                    </span>
                    <span className="w-[30px] h-[3px] bg-white rounded-full">
                    </span>
                </button>
                <div className="mmenu-nav flex gap-x-4">
                    <nav className="nav flex gap-x-5 gap-y-5 flex-wrap mx-4 3xl:gap-x-2.5 lg:flex-col lg:items-start lg:gap-y-8">
                        <a className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30" href="#">Главная</a>
                        <a className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30" href="#">Каталог</a>
                        <a className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30" href="#">Топ юзеров</a>
                        <a className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30" href="#">Отзывы</a>
                        <a className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30" href="#">Гарантии</a>
                        <a className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30" href="#">Случайные предметы</a>
                        <a className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30" href="#">Форум</a>
                    </nav>
                </div>
                <div className="mmenu-pnav pt-8 max-w-[400px]">
                    <div className="navpin">
                        <a className="navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4" href="#">
                            <div className="navpin-plate">
                                <img className="navpin-plate-pic" src={linkPin} alt="dots" />
                                <img className="navpin-plate__dots-1" src={logoDots} alt="dots" />
                                <img className="navpin-plate__dots-2" src={logoDots} alt="dots" />
                                <div className="navpin-plate-icon">
                                    <img src={navpinPlate} alt="navpin-plate-icon" />
                                </div>
                            </div>
                            <div className="navpin-text text-sm uppercase ml-7 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs">Продать товар</div>
                        </a>
                        <a className="navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4" href="#">
                            <div className="navpin-plate">
                                <img className="navpin-plate-pic" src={linkPin} alt="dots" />
                                <img className="navpin-plate__dots-1" src={logoDots} alt="dots" />
                                <img className="navpin-plate__dots-2" src={logoDots} alt="dots" />
                                <div className="navpin-plate-icon">
                                    <img src={navpinPlate2} alt="navpin-plate-icon" />
                                </div>
                            </div>
                            <div className="navpin-text text-sm uppercase ml-7 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs">Закладки</div>
                        </a>
                        <a className="navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4" href="#">
                            <div className="navpin-plate">
                                <img className="navpin-plate-pic" src={linkPin} alt="dots" />
                                <img className="navpin-plate__dots-1" src={logoDots} alt="dots" />
                                <img className="navpin-plate__dots-2" src={logoDots} alt="dots" />
                                <div className="navpin-plate-icon">
                                    <img src={navpinPlate3} alt="navpin-plate-icon" />
                                </div>
                            </div>
                            <div className="navpin-text text-sm uppercase ml-7 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs">История просмотра</div>
                        </a>
                        <a className="navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4" href="#">
                            <div className="navpin-plate">
                                <img className="navpin-plate-pic" src={linkPin} alt="dots" />
                                <img className="navpin-plate__dots-1" src={logoDots} alt="dots" />
                                <img className="navpin-plate__dots-2" src={logoDots} alt="dots" />
                                <div className="navpin-plate-icon">
                                    <img src={navpinPlate4} alt="navpin-plate-icon" />
                                </div>
                            </div>
                            <div className="navpin-text text-sm uppercase ml-7 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs">История покупок и продаж</div>
                        </a>
                    </div>
                </div>
            </div>
        </>
  );
}

export default HeaderMain;
