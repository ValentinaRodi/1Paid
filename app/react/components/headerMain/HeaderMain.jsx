/* eslint-disable react/prop-types */
import "../../pages/lending/lending.less";
import "./headerMain.less";
import { useState, useEffect, useRef } from 'react';
import { createRoot } from "react-dom/client";
import AddProduct from "../addProduct/AddProduct";
import React from "react";
import listenForOutsideClick from "../listenForOutsideClicks";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useNavigate  } from 'react-router-dom';
import AddBalance from '../../components/addBalance/AddBalance';

function HeaderMain(props) {
    const { isAuthenticated, setAuth } = useAuth();
    const [isOperator, setOperator] = useState(false);
    const [name, setName] = useState('');
    const [balance, setBalance] = useState('');
    const [bonus, setBonus] = useState('');
    const [avatar, setAvatar] = useState('icon-tsc-item-btn-3.svg');
    const [menu, setOpenMenu] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const menuRef = useRef(null);
    const menuRef2 = useRef(null);
    const [listening, setListening] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenNotif, setIsOpenNotif] = useState(false);
    const [isOpenMenu2, setIsOpenMenu2] = useState(false);
    const [isOpenNotif2, setIsOpenNotif2] = useState(false);
    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const body = document.querySelector('body');
    const [rotate, setRotate] = useState(false);
    const navigate = useNavigate();
    const [link, setLink] = useState(JSON.parse(localStorage.getItem('activeLink')) || ['nav-link-prim', 'nav-link', 'nav-link', 'nav-link', 'nav-link', 'nav-link']);
    const [color, setColor] = useState('white');

    //Сохраняем в localStorage цвет выбранной ссылки
    const clickLink = (index) => {
        const newLink = link.map((item, i) => i === index ? 'nav-link-prim' : 'nav-link');
        setLink(newLink);
        localStorage.setItem('activeLink', JSON.stringify(newLink));
    };

    useEffect(() => {
        // Restore active link on component mount
        const storedActiveLink = JSON.parse(localStorage.getItem('activeLink'));
        if (storedActiveLink) {
            setLink(storedActiveLink);
        }
    }, []);
  
    useEffect(() => {
        let loggedInUser = localStorage.getItem('logged');

        if (loggedInUser) {
            setName(localStorage.getItem('name'));
            setBalance(localStorage.getItem('balance'));
            setBonus(localStorage.getItem('bonus'));
            let permissions = JSON.parse(localStorage.getItem('permissions'));
            if (permissions){
                for (let permission of  permissions){
                    if (permission === 'operator_viewing'){
                        setOperator(true);
                    }
                }
            }
            
            // if(localStorage.getItem('avatar') !== 'null' && localStorage.getItem('avatar')) {
            //     console.log('avatar',localStorage.getItem('avatar'))
            //     setAvatar(localStorage.getItem('avatar'))
            // };
        }
    }, []);

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
        setIsOpenNotif(false);
        setRotate(!rotate);
    };

    const toggleNotif = () => {
        setIsOpenNotif(!isOpenNotif);
        setIsOpenMenu(false);
    };

    const toggleMenu2 = () => {
        setIsOpenMenu2(!isOpenMenu2);
        setIsOpenNotif2(false);
    };

    const toggleNotif2 = () => {
        setIsOpenNotif2(!isOpenNotif2);
        setIsOpenMenu2(false);
    };

    useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpenMenu, setRotate));
    useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpenNotif));
    useEffect(listenForOutsideClick(listening, setListening, menuRef2, setIsOpenMenu2));
    useEffect(listenForOutsideClick(listening, setListening, menuRef2, setIsOpenNotif2));

    useEffect(() => {
    }, [isOpenMenu, isOpenMenu2, isOpenNotif, isOpenNotif2]);

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
                setErrorMessage("An error occurred");
            });
    }

    const openMenu = () => {
        setOpenMenu('_active');
    };

    const closeMenu = () => {
        setOpenMenu('');
    };

    const openSellProduct = () => {
        body.style.overflow = 'hidden';
        setModalEl(<AddProduct
            closeModal={closeModal}
        />);
        setModalOpen(true);
    };

    const sellProduct = () => {
        setOpenMenu('');

        if (!isAuthenticated) {
            props.openAuthorization();
        };

        if (isAuthenticated) {
            openSellProduct();
        };
    };

    const goTab = () => {
        setOpenMenu('');

        if (!isAuthenticated) {
            props.openAuthorization();
        } else {
            navigate('/tab')
        };
    };

    const goHistory = () => {
        setOpenMenu('');

        if (!isAuthenticated) {
            props.openAuthorization();
        } else {
            navigate('/history_views');
        };
    };

    const goHistorySales = () => {
        setOpenMenu('');

        if (!isAuthenticated) {
            props.openAuthorization();
        } else {
            navigate('/history_sales');
        };
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

    const clickNotif = () => {
        navigate('/my-notifications');
    };

    const goSupport = () => {
        setOpenMenu('');
        if(!isAuthenticated) {
            openAuthorization();
        } else {
            navigate('/tech-support');
        };
    };

    const goMain = () => {
        navigate('/');
    };

    const openModalAddBalance = () => {
        body.style.overflow = 'hidden';
        setModalEl(<AddBalance
            closeModal={closeModal} title='Пополнение баланса'
        />);
        setModalOpen(true);
        setIsOpenMenu(false);
        setIsOpenNotif(false);
        setRotate(!rotate);
        setIsOpenMenu2(false);
    };

    const goMyMessages = () => {
        setOpenMenu('');
        if(!isAuthenticated) {
            openAuthorization();
        } else {
            navigate('/my-messages');
        };
        window.scrollTo({ 
            top: 0,  
        }); 
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setColor((prevColor) => (prevColor === 'white' ? 'orange' : 'white'));
        }, 5000);
    
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="layout-h">
            <div className="">
                <div className="h-wrapper">
                    <header className="h justify-between">
                        <button onClick={props.closeLeftMenu} className={`h-openmenu ${props.leftMenuOpen}`}>
                            <span></span><span></span></button>
                        <nav className="nav flex mx-6 justify-between gap-x-5 gap-y-5 flex-wrap ">
                            <Link to='/' id='link0' onClick={() => clickLink(0)}
                                className={`${link[0]} font-primary-bold text-sm text-[#8A98B3] uppercase`}>Главная</Link>
                            <Link to='/top_users' id='link1' onClick={() => clickLink(1)}
                                className={`${link[1]} font-primary-bold text-sm text-[#8A98B3] uppercase`}>Топ
                                юзеров</Link>
                            <Link to='/feedbacks' id='link2' onClick={() => clickLink(2)}
                                className={`${link[2]} font-primary-bold text-sm text-[#8A98B3] uppercase`}>Отзывы</Link>
                            <Link to='/guarantees' id='link3' onClick={() => clickLink(3)}
                                className={`${link[3]} font-primary-bold text-sm text-[#8A98B3] uppercase`}>Гарантии</Link>
                            <Link to='/random-items' id='link4' onClick={() => clickLink(4)}
                                className={`${link[4]} font-primary-bold text-sm text-[#8A98B3] uppercase`}>Случайные
                                предметы</Link>
                            <Link to='/forum' id='link5' onClick={() => clickLink(5)}
                                className={`${link[5]} font-primary-bold text-sm text-[#8A98B3] uppercase`}>Форум</Link>
                        </nav>
                        {!isAuthenticated ? (
                            <div className="flex gap-4">
                                <button
                                    className="btn btn-primary rounded-full w-11 h-11 justify-center cursor-pointer lg:w-[50px] lg:h-[50px]">
                                    <div className="btn-icon">
                                        <img src="/img/icon-vk.svg" alt="btn-vk"/>
                                    </div>
                                </button>
                                <button onClick={props.openAuthorization}
                                        className="btn btn-secondary notif-btn notif-btn-a text-white rounded-full w-[140px] h-[45px] lg:w-[160px] lg:h-[55px] justify-center cursor-pointer">
                                    ВОЙТИ
                                </button>
                            </div>
                        ) : (
                            <div ref={menuRef} className="flex justify-between items-center gap-2 flex-shrink-0">
                                <div className="h-notif flex-shrink-0">
                                    <div className="notif relative">
                                        <button onClick={toggleNotif}
                                                className="btn btn-secondary notif-btn rounded-full w-11 h-11 justify-center cursor-pointer">
                                            <div className="btn-icon text-white">
                                                {/* <img src="/img/icon-btn-icon-2.svg" alt="btn-icon"/> */}
                                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.9408 15.6692C15.9224 14.2496 15.095 12.9652 13.81 12.3615V8.33844C13.8552 5.57017 11.8412 3.19736 9.10231 2.79228C7.5611 2.59693 6.01061 3.07676 4.84915 4.10852C3.68768 5.14028 3.02844 6.6234 3.04078 8.1769V12.2307C1.54573 12.7335 0.535136 14.1304 0.525391 15.7077C0.53112 15.9575 0.638707 16.1941 0.823193 16.3626C1.00768 16.5311 1.25303 16.6168 1.50231 16.6H15.0254C15.2702 16.5979 15.5042 16.4987 15.6759 16.3242C15.8475 16.1496 15.9428 15.914 15.9408 15.6692ZM7.65622 4.36922C8.78797 4.1382 9.96362 4.42806 10.8583 5.15869C11.7529 5.88933 12.2718 6.98336 12.2716 8.13845V11.9846H4.5793V8.29999C4.53762 6.42405 5.82517 4.77922 7.65622 4.36922ZM2.18724 15.0615C2.45993 14.1469 3.30204 13.5208 4.25647 13.5231H12.2719C13.2254 13.5233 14.0662 14.1484 14.3411 15.0615H2.18724Z" fill={color}/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.19471 1.53846V0.769231C9.19471 0.344396 8.85032 0 8.42548 0C8.00065 0 7.65625 0.344396 7.65625 0.769231V1.53846C7.65625 1.9633 8.00065 2.30769 8.42548 2.30769C8.85032 2.30769 9.19471 1.9633 9.19471 1.53846Z" fill={color}/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.19471 16.9231V16.1539C9.19471 15.729 8.85032 15.3846 8.42548 15.3846C8.00065 15.3846 7.65625 15.729 7.65625 16.1539V16.9231C7.65625 17.3479 8.00065 17.6923 8.42548 17.6923C8.85032 17.6923 9.19471 17.3479 9.19471 16.9231Z" fill={color}/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.41047 2.91537C2.5549 3.061 2.75151 3.14291 2.95662 3.14291C3.16173 3.14291 3.35834 3.061 3.50277 2.91537C3.80102 2.61535 3.80102 2.13079 3.50277 1.83076L2.95662 1.28461C2.81218 1.13898 2.61557 1.05707 2.41047 1.05707C2.20536 1.05707 2.00875 1.13898 1.86431 1.28461C1.56606 1.58463 1.56606 2.06919 1.86431 2.36922L2.41047 2.91537Z" fill={color}/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.564318 6.3L1.33355 6.5C1.73731 6.59407 2.14298 6.35125 2.25083 5.95095C2.35869 5.55065 2.12991 5.1369 1.73355 5.01539L0.964318 4.81539C0.554469 4.7079 0.134873 4.9521 0.0258566 5.36154C-0.0821554 5.76906 0.157986 6.18759 0.564318 6.3Z" fill={color}/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5416 6.55383L16.3108 6.35383C16.7072 6.23232 16.936 5.81856 16.8281 5.41827C16.7203 5.01797 16.3146 4.77515 15.9108 4.86922L15.1416 5.06922C14.7452 5.19073 14.5165 5.60449 14.6243 6.00478C14.7322 6.40508 15.1378 6.6479 15.5416 6.55383Z" fill={color}/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.7262 2.91537L14.2723 2.36922C14.5706 2.06919 14.5706 1.58463 14.2723 1.28461C14.1279 1.13898 13.9313 1.05707 13.7262 1.05707C13.521 1.05707 13.3244 1.13898 13.18 1.28461L12.6338 1.83076C12.3356 2.13079 12.3356 2.61535 12.6338 2.91537C12.7783 3.061 12.9749 3.14291 13.18 3.14291C13.3851 3.14291 13.5817 3.061 13.7262 2.91537Z" fill={color}/>
                                                </svg>
                                            </div>
                                        </button>
                                        <div
                                            className={isOpenNotif ? 'absolute top-16 shadow-2xl right-[-97px] z-[100] rounded-xl bg-white w-[290px] py-6' : 'hidden'}>
                                            <div
                                                className="notif-h px-3 flex items-center justify-between flex-wrap gap-2.5 font-secondary-bold text-sm">
                                                <div className="notif-heading text-black">
                                                    <span className="font-bold font-primary-bold">Уведомления <span
                                                        className="extra font-bold font-primary-bold text-[color:var(--color-green-main)]">(+4)</span>
                                                    </span>
                                                </div>
                                                <div
                                                    className="notif-total font-bold font-primary-bold text-[#C8D5ED]">(43)
                                                </div>
                                            </div>
                                            <div className="notif-b mt-6">
                                                <div
                                                    className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                                                        <div className="btn-icon">
                                                            <img src="/img/icon-btn-icon-3.svg" alt="btn-icon"/>
                                                        </div>
                                                    </div>
                                                    <div className="notif-item-inf flex-grow">
                                                        <div
                                                            className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                                                            <div
                                                                className="notif-item-title font-bold font-primary-bold font-secondary-bold text-black">Стол
                                                                заказа!
                                                            </div>
                                                            <div
                                                                className="notif-item-time font-secondary-med text-[#C5CFE4]">22:15
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">Товар
                                                            по вашему запросу был выставлен на продажу!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                                                        <div className="btn-icon">
                                                            <img src="/img/icon-btn-icon-3.svg" alt="btn-icon"/>
                                                        </div>
                                                    </div>
                                                    <div className="notif-item-inf flex-grow">
                                                        <div
                                                            className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                                                            <div
                                                                className="notif-item-title font-bold font-primary-bold font-secondary-bold text-black">Стол
                                                                заказа!
                                                            </div>
                                                            <div
                                                                className="notif-item-time font-secondary-med text-[#C5CFE4]">22:15
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">Товар
                                                            по вашему запросу был выставлен на продажу!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                                                        <div className="btn-icon">
                                                            <img src="/img/icon-btn-icon-3.svg" alt="btn-icon"/>
                                                        </div>
                                                    </div>
                                                    <div className="notif-item-inf flex-grow">
                                                        <div
                                                            className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                                                            <div
                                                                className="notif-item-title font-bold font-primary-bold font-secondary-bold text-black">Стол
                                                                заказа!
                                                            </div>
                                                            <div
                                                                className="notif-item-time font-secondary-med text-[#C5CFE4]">22:15
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">Товар
                                                            по вашему запросу был выставлен на продажу!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                                                        <div className="btn-icon">
                                                            <img src="/img/icon-btn-icon-3.svg" alt="btn-icon"/>
                                                        </div>
                                                    </div>
                                                    <div className="notif-item-inf flex-grow">
                                                        <div
                                                            className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                                                            <div
                                                                className="notif-item-title font-bold font-primary-bold font-secondary-bold text-black">Стол
                                                                заказа!
                                                            </div>
                                                            <div
                                                                className="notif-item-time font-secondary-med text-[#C5CFE4]">22:15
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">Товар
                                                            по вашему запросу был выставлен на продажу!
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button onClick={clickNotif}
                                                    className="notif-btnall mt-5 w-full border-b border-[#ECEDF7] py-1 flex justify-center duration-200 hover:bg-[#F6F9FF]">
                                                <div
                                                    className="btn-text font-primary-bold text-sm text-[#C5CFE4]">Показать
                                                    все
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-profile h-[56px] relative flex-shrink-0">
                                    <div className="pmc py-1 h-14 rounded-full px-3 flex items-center gap-x-2 bg-white">
                                        <div className="pmc-avatar overflow-hidden flex-shrink-0 rounded-full w-8 h-8">
                                            <img className="w-full h-full object-center object-contain"
                                                 src={`/img/${avatar}`} alt="user avatar"/>
                                        </div>
                                        <div
                                            className="pmc-chip-bar flex gap-x-3 gap-y-2 items-center flex-shrink-0">
                                            <div className="pmc-chip  border rounded-full border-[#DCF1C4] px-2 py-1 flex items-center gap-x-2 duration-200 "
                                                >
                                                <span
                                                    className="font-bold font-primary-bold text-xs text-black whitespace-nowrap">{balance}PD</span>
                                            </div>
                                            <button onClick={openModalAddBalance}
                                                    className="pmc-chip flex-shrink-0 border border-solid rounded-full border-[#D2DFFB] px-2 py-1 flex items-center gap-x-2 hover:bg-[#D2DFFB]">
                                                <div className="font-bold font-primary-bold text-xs text-black whitespace-nowrap">{bonus}₽</div>
                                                <img className="pmc-chip-icon w-4 h-4" src="/img/icon-plus-blue.a12eb4f0.svg" alt="picture"/>
                                            </button>
                                        </div>
                                        <button onClick={toggleMenu}
                                                className="pmc-card-arrow bg-inherit flex-shrink-0 w-[24px]  h-profile-btn-open text-[#D6D9EA] cursor-pointer hover:text-black">
                                            <img className={(rotate) ? "rotate-180" : ""}
                                                 src="/img/icon-pmc-card-arrow.svg" alt="navpin-plate-icon"/>
                                        </button>
                                    </div>
                                    <div
                                        className={isOpenMenu ? "absolute top-16 z-[100] h-profile-content shadow-2xl rounded-[22px] w-full py-3 bg-white" : "hidden"}>
                                        <div className="np">
                                            <nav className="np-nav">
                                                <Link to="/profile" onClick={toggleMenu}
                                                      className=" np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M10.96 8.28496C12.5719 7.06555 13.2053 4.99292 12.5375 3.12364C11.8696 1.25436 10.0475 0 8 0C5.95247 0 4.13036 1.25436 3.46251 3.12364C2.79466 4.99292 3.42813 7.06555 5.04 8.28496C1.99965 9.45436 0.00337721 12.2942 0 15.4548V16.2274C0 16.6541 0.358172 17 0.8 17C1.24183 17 1.6 16.6541 1.6 16.2274V15.4548C1.6 12.0412 4.46538 9.2739 8 9.2739C11.5346 9.2739 14.4 12.0412 14.4 15.4548V16.2274C14.4 16.6541 14.7582 17 15.2 17C15.6418 17 16 16.6541 16 16.2274V15.4548C15.9966 12.2942 14.0003 9.45436 10.96 8.28496ZM4.7998 4.6382C4.7998 2.9314 6.23249 1.54776 7.9998 1.54776C9.76712 1.54776 11.1998 2.9314 11.1998 4.6382C11.1998 6.345 9.76712 7.72864 7.9998 7.72864C7.15111 7.72864 6.33718 7.40304 5.73706 6.82347C5.13695 6.2439 4.7998 5.45783 4.7998 4.6382Z"
                                                                  fill="#8a98b3"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="np-nav-label font-primary-med text-sm text-[#8a98b3] duration-200 group-hover:text-[#0C0C0C]">Мой
                                                        профиль
                                                    </div>
                                                </Link>
                                                <Link to='/my-tovars' onClick={toggleMenu}
                                                      className="np-nav-item w-full h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M13.6 0H2.296C1.02978 0.0042394 0.00438903 0.994671 0 2.21773V14.6818C0 15.9621 1.07452 17 2.4 17H13.6C14.9255 17 16 15.9621 16 14.6818V2.31818C16 1.03789 14.9255 0 13.6 0ZM12.7199 1.54546C13.5004 1.50959 14.2007 2.00562 14.3999 2.73546C14.5531 3.27168 14.3961 3.84607 13.9889 4.23941C13.5817 4.63275 12.987 4.78436 12.4319 4.63637C11.6763 4.44397 11.1627 3.76757 11.1999 3.01364V1.54546H12.7199ZM9.60004 1.54546V3.09091C9.60226 3.59138 9.35344 4.06191 8.93235 4.35353C8.51127 4.64515 7.97005 4.72176 7.48004 4.5591C6.80262 4.33535 6.36153 3.70417 6.40004 3.01364V1.54546H9.60004ZM4.79995 1.54546V3.09091C4.80217 3.59138 4.55335 4.06191 4.13226 4.35353C3.71117 4.64515 3.16996 4.72176 2.67995 4.5591C2.00845 4.33694 1.56875 3.71403 1.59995 3.0291V2.31819C1.59995 1.89142 1.95812 1.54546 2.39995 1.54546H4.79995ZM5.6001 15.4545V11.5909C5.59945 10.8999 5.91794 10.2447 6.46877 9.80382C7.01959 9.36294 7.74531 9.18238 8.4481 9.31136C9.61048 9.55255 10.4305 10.5588 10.4001 11.7068V15.4545H5.6001ZM13.6001 15.4545H12.0001V11.5909C12.0003 10.4306 11.4607 9.33157 10.5302 8.59761C9.5998 7.86366 8.37712 7.57248 7.2001 7.80455C5.30355 8.21795 3.96757 9.86003 4.0001 11.7377V15.4545H2.4001C1.95827 15.4545 1.6001 15.1086 1.6001 14.6818V5.76455C2.5154 6.2662 3.62304 6.31783 4.5841 5.90364C4.988 5.72727 5.34401 5.46275 5.6241 5.13091C6.38601 5.95434 7.54488 6.32255 8.6641 6.09682C9.34408 5.96213 9.95634 5.60784 10.4001 5.09228C10.8557 5.63462 11.4969 6.00185 12.2081 6.12773C12.9602 6.2637 13.7379 6.13486 14.4001 5.76455V14.6818C14.4001 15.1086 14.0419 15.4545 13.6001 15.4545Z"
                                                                  fill="#8a98b3"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="np-nav-label font-primary-med text-sm text-[#8a98b3] duration-200 group-hover:text-[#0C0C0C]">Мои
                                                        товары
                                                    </div>
                                                </Link>
                                                <Link to='/order-table' onClick={toggleMenu}
                                                      className="np-nav-item w-full h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M12.989 2.89044C13.2737 2.88234 13.5446 3.01157 13.7163 3.23729L15.8254 6.03379C15.9406 6.18286 16.0021 6.3661 15.9999 6.55407V10.6946C15.9999 11.1735 15.6092 11.5617 15.1272 11.5617H13.0909C13.0497 11.5652 13.0084 11.5652 12.9672 11.5617C12.657 12.4243 11.8346 13 10.9127 13C9.99081 13 9.16841 12.4243 8.85815 11.5617H6.41452C6.10134 12.4191 5.28157 12.99 4.36362 12.99C3.44567 12.99 2.6259 12.4191 2.31272 11.5617H2.18181C0.97683 11.5617 0 10.5912 0 9.39392V2.16783C0 0.97057 0.97683 0 2.18181 0H9.45451C10.6595 0 11.6363 0.97057 11.6363 2.16783V2.89044H12.989ZM3.63623 10.8391C3.63623 11.2382 3.96184 11.5618 4.3635 11.5618C4.76516 11.5618 5.09077 11.2382 5.09077 10.8391C5.09077 10.4401 4.76516 10.1165 4.3635 10.1165C3.96184 10.1165 3.63623 10.4401 3.63623 10.8391ZM10.9092 11.5618C10.5075 11.5618 10.1819 11.2382 10.1819 10.8391C10.1819 10.4401 10.5075 10.1165 10.9092 10.1165C11.3108 10.1165 11.6364 10.4401 11.6364 10.8391C11.6364 11.2382 11.3108 11.5618 10.9092 11.5618ZM13.0909 10.1165H14.5455V6.74195L12.7273 4.33566H11.6364V7.2261C11.6364 7.62518 11.3108 7.94871 10.9091 7.94871C10.5074 7.94871 10.1818 7.62518 10.1818 7.2261V2.16783C10.1818 1.76875 9.85622 1.44522 9.45456 1.44522H2.18186C1.7802 1.44522 1.45459 1.76875 1.45459 2.16783V9.39392C1.45459 9.79301 1.7802 10.1165 2.18186 10.1165H2.31277C2.62595 9.25919 3.44572 8.68831 4.36367 8.68831C5.28162 8.68831 6.10139 9.25919 6.41457 10.1165H8.8582C9.16846 9.25399 9.99086 8.67828 10.9127 8.67828C11.8346 8.67828 12.657 9.25399 12.9673 10.1165C13.0084 10.113 13.0498 10.113 13.0909 10.1165Z"
                                                                  fill="#8a98b3"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="np-nav-label font-primary-med text-sm text-[#8a98b3] duration-200 group-hover:text-[#0C0C0C]">Стол
                                                        заказов
                                                    </div>
                                                </Link>
                                                <Link to='/my-achievements' onClick={toggleMenu}
                                                      className="np-nav-item w-full h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                        <svg width="14" height="19" viewBox="0 0 14 19" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M2.58303 6.72918L2.32083 6.28808L0.887514 3.9442C0.394953 3.14351 0.377094 2.14215 0.840797 1.32476C1.3045 0.507366 2.17766 0.00103732 3.12489 0.000256734H10.6149C11.9081 -0.0176245 13.0213 0.900436 13.2368 2.16251C13.3605 2.83867 13.1995 3.5355 12.7911 4.09123L11.1218 6.40917C11.1193 6.42638 11.1193 6.44385 11.1218 6.46106C12.9857 7.78693 14.063 9.94193 13.9971 12.2126C13.9983 14.0572 13.2223 15.8188 11.8559 17.0734C9.11913 19.6721 4.78771 19.6376 2.0936 16.9955C0.649219 15.6401 -0.112735 13.7201 0.0135385 11.7542C0.0968235 9.79068 1.03364 7.95857 2.58303 6.72918ZM1.76172 12.0916C1.76172 14.9576 4.10947 17.281 7.00557 17.281C9.90167 17.281 12.2494 14.9576 12.2494 12.0916C12.2494 9.22553 9.90167 6.90216 7.00557 6.90216C4.10947 6.90216 1.76172 9.22553 1.76172 12.0916ZM9.4088 5.62211C7.67355 4.98337 5.75314 5.0518 4.06881 5.81239C3.94995 5.62211 3.83668 5.43183 3.72341 5.24155C3.55351 4.95613 3.38361 4.67072 3.19483 4.3853L2.37329 3.04471C2.1385 2.66519 2.23302 2.1713 2.59179 1.90304C2.7502 1.78528 2.94435 1.72429 3.14239 1.73006H10.5712C10.9117 1.71369 11.2307 1.89476 11.3884 2.19387C11.5461 2.49297 11.5137 2.85552 11.3053 3.12255L9.55737 5.57021C9.52241 5.62211 9.48745 5.62211 9.4088 5.62211Z"
                                                                  fill="#8a98b3"/>
                                                            <path className="svg-icon"
                                                                  d="M6.48944 11.6937C6.36053 11.7407 6.22926 11.7811 6.09616 11.8148C5.73506 11.854 5.38712 11.668 5.22218 11.3477C5.05608 11.021 5.11557 10.6262 5.37076 10.3617C5.79026 9.94658 6.24473 9.49683 6.63802 9.11627C6.81114 8.92992 7.04153 8.80527 7.2935 8.76166C7.52416 8.73745 7.75508 8.80498 7.9354 8.94936C8.11572 9.09374 8.23065 9.30314 8.25487 9.53142C8.25487 9.59197 8.25487 9.64386 8.25487 9.7044V14.7208C8.27546 15.025 8.13268 15.3175 7.87907 15.4906C7.61936 15.6992 7.26215 15.7428 6.95902 15.6029C6.65588 15.463 6.46 15.1642 6.45449 14.8333C6.45449 13.8213 6.45449 12.818 6.45449 11.8148L6.48944 11.6937Z"
                                                                  fill="url(#paint1_linear_437_28722)"/>
                                                            <defs>
                                                                <linearGradient id="paint0_linear_437_28722"
                                                                                x1="3.18182" y1="16.0636" x2="13.4359"
                                                                                y2="5.98946"
                                                                                gradientUnits="userSpaceOnUse">
                                                                    <stop stopColor="#CDD6E6"/>
                                                                    <stop offset="1" stopColor="#CDD6E6"/>
                                                                </linearGradient>
                                                                <linearGradient id="paint1_linear_437_28722" x1="5.8398"
                                                                                y1="14.6134" x2="9.14429" y2="12.6238"
                                                                                gradientUnits="userSpaceOnUse">
                                                                    <stop stopColor="#CDD6E6"/>
                                                                    <stop offset="1" stopColor="#CDD6E6"/>
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="np-nav-label font-primary-med text-sm text-[#8a98b3] duration-200 group-hover:text-[#0C0C0C]">Достижения
                                                    </div>
                                                </Link>
                                                <Link to='/profile/edit' onClick={toggleMenu}
                                                      className="np-nav-item w-full h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M7.95904 4.75549C6.3604 4.75549 5.06445 5.9721 5.06445 7.47286C5.06445 8.97362 6.3604 10.1902 7.95904 10.1902C9.55768 10.1902 10.8536 8.97362 10.8536 7.47286C10.8536 6.75217 10.5487 6.061 10.0058 5.55139C9.46299 5.04179 8.72674 4.75549 7.95904 4.75549ZM7.95926 8.83155C7.15994 8.83155 6.51196 8.22325 6.51196 7.47287C6.51196 6.72249 7.15994 6.11419 7.95926 6.11419C8.75858 6.11419 9.40655 6.72249 9.40655 7.47287C9.40655 8.22325 8.75858 8.83155 7.95926 8.83155Z"
                                                                  fill="#8a98b3"/>
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M14.0316 5.11551C14.6956 4.30361 14.6151 3.15531 13.8435 2.43212L13.3297 1.94978C12.5544 1.20562 11.3064 1.12947 10.4351 1.77315C10.2955 0.772508 9.39685 0.0184441 8.32202 7.44375e-05H7.59838C6.50149 -0.00865932 5.57 0.752121 5.42743 1.77315C4.56258 1.14981 3.33939 1.2254 2.56903 1.94978L2.05524 2.43212C1.28361 3.15531 1.20309 4.30361 1.86709 5.11551C0.796311 5.25764 0.000243134 6.11794 7.92922e-05 7.13316V7.8125C-0.00922407 8.84223 0.801174 9.71669 1.8888 9.85052C1.20313 10.6685 1.28425 11.8401 2.07695 12.5679L2.59074 13.0502C3.36109 13.7746 4.58429 13.8502 5.44914 13.2268C5.5917 14.2479 6.5232 15.0087 7.62009 14.9999H8.34373C9.44062 15.0087 10.3721 14.2479 10.5147 13.2268C11.386 13.8705 12.634 13.7944 13.4093 13.0502L13.9231 12.5679C14.7157 11.8401 14.7969 10.6685 14.1112 9.85052C15.1988 9.71669 16.0092 8.84223 15.9999 7.8125V7.13316C15.9936 6.08568 15.1425 5.21326 14.0316 5.11551ZM14.4732 7.83287C14.4732 8.20806 14.1492 8.51221 13.7495 8.51221C13.2165 8.50934 12.7348 8.81 12.5313 9.27252C12.3279 9.73505 12.4433 10.2672 12.8232 10.6182C13.1038 10.8831 13.1038 11.3111 12.8232 11.576L12.3095 12.0584C12.0272 12.3218 11.5714 12.3218 11.2891 12.0584C10.918 11.7043 10.3564 11.5947 9.86571 11.7804C9.37499 11.9662 9.05152 12.4109 9.04581 12.9076C9.04581 13.2827 8.72182 13.5869 8.32216 13.5869H7.59851C7.19885 13.5869 6.87487 13.2827 6.87487 12.9076C6.87792 12.4072 6.55766 11.9549 6.06497 11.764C5.57228 11.573 5.00545 11.6813 4.63156 12.038C4.34931 12.3014 3.89347 12.3014 3.61122 12.038L3.09743 11.5489C2.81685 11.2839 2.81685 10.856 3.09743 10.591C3.47211 10.2393 3.58421 9.71039 3.38144 9.25087C3.17868 8.79134 2.70098 8.49176 2.17116 8.49183C1.7715 8.49183 1.44751 8.18768 1.44751 7.81249V7.13315C1.44751 6.75796 1.7715 6.45381 2.17116 6.45381C2.70418 6.45668 3.1859 6.15603 3.38933 5.6935C3.59276 5.23098 3.47733 4.69886 3.09743 4.34785C2.82161 4.0837 2.82161 3.66093 3.09743 3.39678L3.61845 2.90765C3.9007 2.64425 4.35654 2.64425 4.63879 2.90765C5.0134 3.25939 5.57684 3.36463 6.06633 3.17428C6.55582 2.98393 6.87495 2.53548 6.87487 2.03809C6.87487 1.6629 7.19885 1.35875 7.59851 1.35875H8.32216C8.72182 1.35875 9.04581 1.6629 9.04581 2.03809C9.04275 2.53848 9.36301 2.99071 9.8557 3.18168C10.3484 3.37266 10.9152 3.2643 11.2891 2.90765C11.5714 2.64425 12.0272 2.64425 12.3095 2.90765L12.8232 3.38998C13.1038 3.65495 13.1038 4.08288 12.8232 4.34785C12.4433 4.69886 12.3279 5.23098 12.5313 5.6935C12.7348 6.15603 13.2165 6.45668 13.7495 6.45381C14.1492 6.45381 14.4732 6.75796 14.4732 7.13315V7.83287Z"
                                                                  fill="#8a98b3"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="np-nav-label font-primary-med text-sm text-[#8a98b3] duration-200 group-hover:text-[#0C0C0C]">Настройки
                                                    </div>
                                                </Link>
                                                <Link to='/my-finance' onClick={toggleMenu}
                                                      className="np-nav-item w-full h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M12.0909 2.15375H11.4545V1.80426C11.4534 1.23808 11.1722 0.705122 10.6947 0.364283C10.2173 0.0234431 9.59879 -0.0859001 9.02364 0.0688552L1.73727 2.03926C1.62982 2.07106 1.5332 2.12928 1.45727 2.20798C0.603057 2.405 0.00139898 3.12895 0 3.96146V11.1923C0 12.1907 0.854729 13 1.90909 13H12.0909C13.1453 13 14 12.1907 14 11.1923V3.96146C14 2.96309 13.1453 2.15375 12.0909 2.15375ZM9.37357 1.22578C9.56938 1.17365 9.77971 1.21328 9.93951 1.33243C10.0993 1.45158 10.1893 1.63589 10.1818 1.82835V2.17784H5.9563L9.37357 1.22578ZM12.7271 8.17945H10.818C10.4665 8.17945 10.1816 7.90967 10.1816 7.57688C10.1816 7.24409 10.4665 6.97431 10.818 6.97431H12.7271V8.17945ZM12.7273 5.76917H10.9136C9.96821 5.74629 9.13951 6.36392 8.94089 7.23944C8.83467 7.76878 8.98336 8.31541 9.34644 8.73029C9.70952 9.14518 10.2491 9.38507 10.8182 9.38458H12.7273V11.1923C12.7273 11.5251 12.4423 11.7949 12.0909 11.7949H1.90907C1.55761 11.7949 1.27271 11.5251 1.27271 11.1923V3.96146C1.27271 3.62867 1.55761 3.35889 1.90907 3.35889H12.0909C12.4423 3.35889 12.7273 3.62867 12.7273 3.96146V5.76917Z"
                                                                  fill="#8a98b3"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="np-nav-label font-primary-med text-sm text-[#8a98b3] duration-200 group-hover:text-[#0C0C0C]">Пополение
                                                        и вывод
                                                    </div>
                                                </Link>
                                                <Link to='/refs' onClick={toggleMenu}
                                                      className="np-nav-item w-full h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M8.81449 7.15236H8.70567C8.70567 7.13139 8.69116 7.08945 8.69116 7.08945V6.05484C8.69116 5.98494 8.72018 5.98494 8.75645 5.98494C8.9717 5.91019 9.18242 5.82384 9.3876 5.72629C10.4614 5.15071 11.0426 3.98582 10.8385 2.81822C10.6134 1.58131 9.56016 0.64073 8.26314 0.518331C7.33684 0.41438 6.41688 0.756942 5.80383 1.43409C5.20517 2.05016 4.94894 2.90524 5.11464 3.73398C5.25533 4.83342 6.07739 5.73911 7.18946 6.01989C7.23178 6.03013 7.2597 6.06899 7.25475 6.11077V7.08246V7.15935H5.12189C4.9661 7.15913 4.81063 7.17317 4.6576 7.20129C3.70661 7.37776 2.99104 8.13851 2.90198 9.06777V9.60604H2.80767H1.93712C0.861975 9.72009 0.0369038 10.5777 0.000133194 11.6193V12.4023C-0.00412177 12.7654 0.0936406 13.1229 0.283063 13.4369C0.67848 14.1092 1.42555 14.5175 2.2273 14.4994H5.07836C5.2322 14.4863 5.38491 14.4629 5.5354 14.4295C6.43695 14.2484 7.1226 13.5401 7.24749 12.6609C7.26562 12.3582 7.26562 12.0548 7.24749 11.7521C7.25013 11.5976 7.23799 11.4432 7.21122 11.2908C7.02924 10.3885 6.25876 9.70558 5.31051 9.60604H4.44721H4.3529V9.20758C4.37962 8.84074 4.69672 8.55656 5.07836 8.55746H10.8966C11.1275 8.56073 11.343 8.66976 11.4769 8.85106C11.6041 9.08246 11.65 9.3474 11.6075 9.60604H11.4987H10.6427C9.70185 9.68248 8.91949 10.3347 8.70567 11.2209C8.62586 11.6978 8.62586 12.184 8.70567 12.6609C8.84187 13.7171 9.77754 14.5075 10.8821 14.4994H13.7839C14.7852 14.5067 15.6625 13.8547 15.9095 12.9196C16.0097 12.4268 16.0268 11.9216 15.9603 11.4236C15.8441 10.5922 15.2248 9.90753 14.386 9.68294C14.1882 9.63929 13.9867 9.61355 13.7839 9.60604H13.0584V9.46623C13.0695 9.27997 13.0695 9.09325 13.0584 8.90699C12.8874 7.91012 12.003 7.1725 10.9546 7.15236H8.81449ZM5.07828 13.1013H3.62736H2.22722C2.01566 13.1163 1.80789 13.0414 1.65859 12.8961C1.50929 12.7509 1.43343 12.55 1.45097 12.3463V11.7032C1.45097 11.3171 1.77577 11.0041 2.17644 11.0041H5.07828C5.47894 11.0041 5.80374 11.3171 5.80374 11.7032V12.4023C5.80374 12.7883 5.47894 13.1013 5.07828 13.1013ZM12.3328 13.1013H13.8273C14.2109 13.0791 14.5099 12.7725 14.5092 12.4023V11.7032C14.5092 11.3171 14.1844 11.0042 13.7838 11.0042H10.8819C10.5272 10.9986 10.2203 11.2411 10.1565 11.5774C10.1493 11.6751 10.1493 11.7732 10.1565 11.871V12.3673C10.1465 12.5587 10.2185 12.7456 10.3557 12.8844C10.4928 13.0231 10.6831 13.1016 10.8819 13.1013H12.3328ZM7.97998 1.91643C8.7813 1.91643 9.4309 2.54239 9.4309 3.31454C9.4309 4.0867 8.7813 4.71265 7.97998 4.71265C7.17865 4.71265 6.52905 4.0867 6.52905 3.31454C6.52905 2.54239 7.17865 1.91643 7.97998 1.91643Z"
                                                                  fill="#8a98b3"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="np-nav-label font-primary-med text-sm text-[#8a98b3] duration-200 group-hover:text-[#0C0C0C]">Реферальная
                                                        система
                                                    </div>
                                                </Link>
                                                {isOperator ? (
                                                    <Link to="/operator/user" onClick={window.location.reload}
                                                          className=" np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]">
                                                        <div
                                                            className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path className="svg-icon" fillRule="evenodd"
                                                                      clipRule="evenodd"
                                                                      d="M10.96 8.28496C12.5719 7.06555 13.2053 4.99292 12.5375 3.12364C11.8696 1.25436 10.0475 0 8 0C5.95247 0 4.13036 1.25436 3.46251 3.12364C2.79466 4.99292 3.42813 7.06555 5.04 8.28496C1.99965 9.45436 0.00337721 12.2942 0 15.4548V16.2274C0 16.6541 0.358172 17 0.8 17C1.24183 17 1.6 16.6541 1.6 16.2274V15.4548C1.6 12.0412 4.46538 9.2739 8 9.2739C11.5346 9.2739 14.4 12.0412 14.4 15.4548V16.2274C14.4 16.6541 14.7582 17 15.2 17C15.6418 17 16 16.6541 16 16.2274V15.4548C15.9966 12.2942 14.0003 9.45436 10.96 8.28496ZM4.7998 4.6382C4.7998 2.9314 6.23249 1.54776 7.9998 1.54776C9.76712 1.54776 11.1998 2.9314 11.1998 4.6382C11.1998 6.345 9.76712 7.72864 7.9998 7.72864C7.15111 7.72864 6.33718 7.40304 5.73706 6.82347C5.13695 6.2439 4.7998 5.45783 4.7998 4.6382Z"
                                                                      fill="#8a98b3"/>
                                                            </svg>
                                                        </div>
                                                        <div
                                                            className="np-nav-label font-primary-med text-sm text-[#8a98b3] duration-200 group-hover:text-[#0C0C0C]">Оператор
                                                        </div>
                                                    </Link>
                                                ) : (
                                                    <div className="hidden">
                                                        operator false
                                                    </div>
                                                )}
                                                <button onClick={changeLoggedFalse}
                                                        className="bg-white np-nav-item h-11 w-full px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M3.88308 11.5556H1.55323V1.44444H3.88308C4.08905 1.44444 4.28657 1.36834 4.43222 1.2329C4.57786 1.09746 4.65969 0.913767 4.65969 0.722222C4.65969 0.530677 4.57786 0.346987 4.43222 0.211544C4.28657 0.0761015 4.08905 0 3.88308 0H0.776616C0.570644 0 0.37312 0.0761015 0.227477 0.211544C0.081833 0.346987 0 0.530677 0 0.722222V12.2778C0 12.4693 0.081833 12.6531 0.227477 12.7885C0.37312 12.9239 0.570644 13 0.776616 13H3.88308C4.08905 13 4.28657 12.9239 4.43222 12.7885C4.57786 12.6531 4.65969 12.4693 4.65969 12.2778C4.65969 12.0862 4.57786 11.9025 4.43222 11.7671C4.28657 11.6316 4.08905 11.5556 3.88308 11.5556ZM13.7539 5.98721L9.09416 1.65387C8.94586 1.52075 8.74677 1.44789 8.54069 1.45128C8.3346 1.45466 8.13842 1.53403 7.99527 1.67195C7.85212 1.80986 7.77373 1.99498 7.77737 2.18664C7.78101 2.37829 7.86638 2.56075 8.01468 2.69387L11.3463 5.79224H3.88308C3.67711 5.79224 3.47958 5.86829 3.33394 6.00374C3.1883 6.13918 3.10646 6.32291 3.10646 6.51446C3.10646 6.706 3.1883 6.88965 3.33394 7.02509C3.47958 7.16053 3.67711 7.23668 3.88308 7.23668H13.2025C13.36 7.24063 13.5151 7.19993 13.6472 7.11995C13.7792 7.03998 13.882 6.92449 13.9419 6.78891C14.0017 6.65332 14.0157 6.50403 13.9822 6.36084C13.9486 6.21764 13.869 6.08732 13.7539 5.98721ZM10.3756 8.47165L8.04573 10.2772C7.89022 10.4036 7.79509 10.5823 7.78126 10.774C7.76742 10.9657 7.83603 11.1546 7.97197 11.2992C8.10791 11.4438 8.30005 11.5323 8.50613 11.5452C8.71222 11.558 8.91536 11.4942 9.07087 11.3678L11.4007 9.56221C11.5562 9.43579 11.6514 9.25707 11.6652 9.06542C11.679 8.87377 11.6104 8.68486 11.4745 8.54024C11.3386 8.39563 11.1464 8.30723 10.9403 8.29436C10.7342 8.28149 10.5311 8.34523 10.3756 8.47165Z"
                                                                  fill="#8a98b3"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="np-nav-label font-primary-med text-sm text-[#8a98b3] duration-200 group-hover:text-[#0C0C0C]">Выйти
                                                        из аккаунта
                                                    </div>
                                                </button>
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
                <div className="hm-inner px-5 lg:px-9 flex items-center justify-between">
                    <div className="hm-logo">
                        <button onClick={goMain} className="logo bg-inherit w-[70px] sm:w-[120px] 3xl:w-[150px] ">
                            <img className="logo__dots lg:h-[100%] xl:w-1/2" src="/img/dots-1.82560447.svg"
                                 alt="1paid.ru"/>
                            <img className="logo-pic" src="/img/logo.7fb09570.svg" alt="1paid.ru"/>
                        </button>
                    </div>
                    <div className="hm-bar flex items-center gap-2.5">
                        {!isAuthenticated ? (
                            <div className="flex gap-4 items-center">
                                <button
                                    className="btn btn-secondary notif-btn rounded-full w-10 h-10 justify-center cursor-pointer ">
                                    <div className="btn-icon">
                                        <img src="/img/icon-vk.svg" alt="btn-vk"/>
                                    </div>
                                </button>
                                <button onClick={props.openAuthorization}
                                        className="btn btn-secondary text-white rounded-full w-[68px] h-9 text-xs justify-center cursor-pointer">
                                    ВОЙТИ
                                </button>
                            </div>
                        ) : (
                            <div ref={menuRef2} className="flex justify-between items-center gap-2">
                                <div className="h-notif flex-shrink-0">
                                    <div className="notif relative">
                                        <button onClick={toggleNotif2}
                                                className="btn btn-secondary notif-btn rounded-full w-11 h-11 justify-center cursor-pointer">
                                            <div className="btn-icon text-white">
                                                {/* <img src="/img/icon-btn-icon-2.svg" alt="btn-icon"/> */}
                                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.9408 15.6692C15.9224 14.2496 15.095 12.9652 13.81 12.3615V8.33844C13.8552 5.57017 11.8412 3.19736 9.10231 2.79228C7.5611 2.59693 6.01061 3.07676 4.84915 4.10852C3.68768 5.14028 3.02844 6.6234 3.04078 8.1769V12.2307C1.54573 12.7335 0.535136 14.1304 0.525391 15.7077C0.53112 15.9575 0.638707 16.1941 0.823193 16.3626C1.00768 16.5311 1.25303 16.6168 1.50231 16.6H15.0254C15.2702 16.5979 15.5042 16.4987 15.6759 16.3242C15.8475 16.1496 15.9428 15.914 15.9408 15.6692ZM7.65622 4.36922C8.78797 4.1382 9.96362 4.42806 10.8583 5.15869C11.7529 5.88933 12.2718 6.98336 12.2716 8.13845V11.9846H4.5793V8.29999C4.53762 6.42405 5.82517 4.77922 7.65622 4.36922ZM2.18724 15.0615C2.45993 14.1469 3.30204 13.5208 4.25647 13.5231H12.2719C13.2254 13.5233 14.0662 14.1484 14.3411 15.0615H2.18724Z" fill={color}/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.19471 1.53846V0.769231C9.19471 0.344396 8.85032 0 8.42548 0C8.00065 0 7.65625 0.344396 7.65625 0.769231V1.53846C7.65625 1.9633 8.00065 2.30769 8.42548 2.30769C8.85032 2.30769 9.19471 1.9633 9.19471 1.53846Z" fill={color}/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.19471 16.9231V16.1539C9.19471 15.729 8.85032 15.3846 8.42548 15.3846C8.00065 15.3846 7.65625 15.729 7.65625 16.1539V16.9231C7.65625 17.3479 8.00065 17.6923 8.42548 17.6923C8.85032 17.6923 9.19471 17.3479 9.19471 16.9231Z" fill={color}/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.41047 2.91537C2.5549 3.061 2.75151 3.14291 2.95662 3.14291C3.16173 3.14291 3.35834 3.061 3.50277 2.91537C3.80102 2.61535 3.80102 2.13079 3.50277 1.83076L2.95662 1.28461C2.81218 1.13898 2.61557 1.05707 2.41047 1.05707C2.20536 1.05707 2.00875 1.13898 1.86431 1.28461C1.56606 1.58463 1.56606 2.06919 1.86431 2.36922L2.41047 2.91537Z" fill={color}/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.564318 6.3L1.33355 6.5C1.73731 6.59407 2.14298 6.35125 2.25083 5.95095C2.35869 5.55065 2.12991 5.1369 1.73355 5.01539L0.964318 4.81539C0.554469 4.7079 0.134873 4.9521 0.0258566 5.36154C-0.0821554 5.76906 0.157986 6.18759 0.564318 6.3Z" fill={color}/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5416 6.55383L16.3108 6.35383C16.7072 6.23232 16.936 5.81856 16.8281 5.41827C16.7203 5.01797 16.3146 4.77515 15.9108 4.86922L15.1416 5.06922C14.7452 5.19073 14.5165 5.60449 14.6243 6.00478C14.7322 6.40508 15.1378 6.6479 15.5416 6.55383Z" fill={color}/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.7262 2.91537L14.2723 2.36922C14.5706 2.06919 14.5706 1.58463 14.2723 1.28461C14.1279 1.13898 13.9313 1.05707 13.7262 1.05707C13.521 1.05707 13.3244 1.13898 13.18 1.28461L12.6338 1.83076C12.3356 2.13079 12.3356 2.61535 12.6338 2.91537C12.7783 3.061 12.9749 3.14291 13.18 3.14291C13.3851 3.14291 13.5817 3.061 13.7262 2.91537Z" fill={color}/>
                                                </svg>
                                            </div>
                                        </button>
                                        <div
                                            className={isOpenNotif2 ? 'absolute z-[100] top-[62px] shadow-2xl right-[-97px] rounded-xl bg-white w-[290px] py-6' : 'hidden'}>
                                            <div
                                                className="notif-h px-3 flex items-center justify-between flex-wrap gap-2.5 font-secondary-bold text-sm">
                                                <div className="notif-heading text-black">
                                                    <span className="font-bold font-primary-bold">Уведомления <span
                                                        className="font-bold font-primary-bold extra text-[color:var(--color-green-main)]">(+4)</span>
                                                    </span>
                                                </div>
                                                <div
                                                    className="font-bold font-primary-bold notif-total text-[#C8D5ED]">(43)
                                                </div>
                                            </div>
                                            <div className="notif-b mt-6">
                                                <div
                                                    className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                                                        <div className="btn-icon">
                                                            <img src="/img/icon-btn-icon-3.svg" alt="btn-icon"/>
                                                        </div>
                                                    </div>
                                                    <div className="notif-item-inf flex-grow">
                                                        <div
                                                            className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                                                            <div
                                                                className="notif-item-title font-bold font-primary-bold font-secondary-bold text-black">Стол
                                                                заказа!
                                                            </div>
                                                            <div
                                                                className="notif-item-time font-secondary-med text-[#C5CFE4]">22:15
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">Товар
                                                            по вашему запросу был выставлен на продажу!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                                                        <div className="btn-icon">
                                                            <img src="/img/icon-btn-icon-3.svg" alt="btn-icon"/>
                                                        </div>
                                                    </div>
                                                    <div className="notif-item-inf flex-grow">
                                                        <div
                                                            className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                                                            <div
                                                                className="notif-item-title font-bold font-primary-bold font-secondary-bold text-black">Стол
                                                                заказа!
                                                            </div>
                                                            <div
                                                                className="notif-item-time font-secondary-med text-[#C5CFE4]">22:15
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">Товар
                                                            по вашему запросу был выставлен на продажу!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                                                        <div className="btn-icon">
                                                            <img src="/img/icon-btn-icon-3.svg" alt="btn-icon"/>
                                                        </div>
                                                    </div>
                                                    <div className="notif-item-inf flex-grow">
                                                        <div
                                                            className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                                                            <div
                                                                className="notif-item-title font-bold font-primary-bold font-secondary-bold text-black">Стол
                                                                заказа!
                                                            </div>
                                                            <div
                                                                className="notif-item-time font-secondary-med text-[#C5CFE4]">22:15
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">Товар
                                                            по вашему запросу был выставлен на продажу!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                                                        <div className="btn-icon">
                                                            <img src="/img/icon-btn-icon-3.svg" alt="btn-icon"/>
                                                        </div>
                                                    </div>
                                                    <div className="notif-item-inf flex-grow">
                                                        <div
                                                            className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                                                            <div
                                                                className="notif-item-title font-bold font-primary-bold font-secondary-bold text-black">Стол
                                                                заказа!
                                                            </div>
                                                            <div
                                                                className="notif-item-time font-secondary-med text-[#C5CFE4]">22:15
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">Товар
                                                            по вашему запросу был выставлен на продажу!
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button onClick={clickNotif}
                                                    className="notif-btnall mt-5 w-full border-b border-[#ECEDF7] py-1 flex justify-center duration-200 hover:bg-[#F6F9FF]"
                                                    href="#">
                                                <div
                                                    className="btn-text font-primary-bold text-sm text-[#C5CFE4]">Показать
                                                    все
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <button onClick={toggleMenu2}
                                            className="btn btn-orange btn-secondary notif-btn rounded-full w-11 h-11 justify-center cursor-pointer">
                                        <div className="btn-icon text-white">
                                            <img src="/img/icon-lk.svg" alt="navpin-plate-icon"/>
                                        </div>
                                    </button>
                                    <div
                                        className={isOpenMenu2 ? 'absolute h-profile w-[290px] right-[-60px] top-16 z-[100] h-profile-content rounded-[22px] py-3 bg-white shadow-2xl overflow-hidden' : 'hidden'}>
                                        <div
                                            className="pmc py-1 h-14 rounded-full px-3 flex items-center justify-between gap-x-3 bg-white mb-4">
                                            <div className="pmc-avatar flex-shrink-0 rounded-full w-8 h-8">
                                                <img className="w-full h-full object-center object-contain" src={avatar}
                                                     alt="user avatar"/>
                                            </div>
                                            <div>
                                                {/* <div className="font-bold font-primary-bold">{name}</div> */}
                                                <div
                                                    className="pmc-chip-bar flex gap-x-3 gap-y-2 items-center lg:flex-wrap lg:ml-auto">
                                                    <div className="pmc-chip  border rounded-full border-[#DCF1C4] px-2 py-1 flex items-center gap-x-2 "
                                                       >
                                                        <span
                                                            className="font-bold font-primary-bold text-xs text-black whitespace-nowrap">{bonus}PD</span>
                                                    </div>
                                                    <button onClick={openModalAddBalance} className="pmc-chip border rounded-full border-[#D2DFFB] px-2 py-1 flex items-center gap-x-2 duration-200 hover:bg-[#D2DFFB]"
                                                       >
                                                        <span
                                                            className="font-bold font-primary-bold text-xs text-black whitespace-nowrap">{balance}₽</span>
                                                        <img className="pmc-chip-icon w-4 h-4"
                                                             src="/img/icon-plus-blue.a12eb4f0.svg" alt="picture"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="np">
                                            <nav className="np-nav">
                                                <Link to="/profile" onClick={toggleMenu2}
                                                      className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF] bg-inherit w-full">
                                                    <div
                                                        className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M10.96 8.28496C12.5719 7.06555 13.2053 4.99292 12.5375 3.12364C11.8696 1.25436 10.0475 0 8 0C5.95247 0 4.13036 1.25436 3.46251 3.12364C2.79466 4.99292 3.42813 7.06555 5.04 8.28496C1.99965 9.45436 0.00337721 12.2942 0 15.4548V16.2274C0 16.6541 0.358172 17 0.8 17C1.24183 17 1.6 16.6541 1.6 16.2274V15.4548C1.6 12.0412 4.46538 9.2739 8 9.2739C11.5346 9.2739 14.4 12.0412 14.4 15.4548V16.2274C14.4 16.6541 14.7582 17 15.2 17C15.6418 17 16 16.6541 16 16.2274V15.4548C15.9966 12.2942 14.0003 9.45436 10.96 8.28496ZM4.7998 4.6382C4.7998 2.9314 6.23249 1.54776 7.9998 1.54776C9.76712 1.54776 11.1998 2.9314 11.1998 4.6382C11.1998 6.345 9.76712 7.72864 7.9998 7.72864C7.15111 7.72864 6.33718 7.40304 5.73706 6.82347C5.13695 6.2439 4.7998 5.45783 4.7998 4.6382Z"
                                                                  fill="#8a98b3"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="np-nav-label font-primary-med text-sm text-[#8a98b3] duration-200 group-hover:text-[#0C0C0C]">Мой
                                                        профиль
                                                    </div>
                                                </Link>
                                                <Link to='/my-tovars' onClick={toggleMenu2}
                                                      className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF] bg-inherit w-full">
                                                    <div
                                                        className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M13.6 0H2.296C1.02978 0.0042394 0.00438903 0.994671 0 2.21773V14.6818C0 15.9621 1.07452 17 2.4 17H13.6C14.9255 17 16 15.9621 16 14.6818V2.31818C16 1.03789 14.9255 0 13.6 0ZM12.7199 1.54546C13.5004 1.50959 14.2007 2.00562 14.3999 2.73546C14.5531 3.27168 14.3961 3.84607 13.9889 4.23941C13.5817 4.63275 12.987 4.78436 12.4319 4.63637C11.6763 4.44397 11.1627 3.76757 11.1999 3.01364V1.54546H12.7199ZM9.60004 1.54546V3.09091C9.60226 3.59138 9.35344 4.06191 8.93235 4.35353C8.51127 4.64515 7.97005 4.72176 7.48004 4.5591C6.80262 4.33535 6.36153 3.70417 6.40004 3.01364V1.54546H9.60004ZM4.79995 1.54546V3.09091C4.80217 3.59138 4.55335 4.06191 4.13226 4.35353C3.71117 4.64515 3.16996 4.72176 2.67995 4.5591C2.00845 4.33694 1.56875 3.71403 1.59995 3.0291V2.31819C1.59995 1.89142 1.95812 1.54546 2.39995 1.54546H4.79995ZM5.6001 15.4545V11.5909C5.59945 10.8999 5.91794 10.2447 6.46877 9.80382C7.01959 9.36294 7.74531 9.18238 8.4481 9.31136C9.61048 9.55255 10.4305 10.5588 10.4001 11.7068V15.4545H5.6001ZM13.6001 15.4545H12.0001V11.5909C12.0003 10.4306 11.4607 9.33157 10.5302 8.59761C9.5998 7.86366 8.37712 7.57248 7.2001 7.80455C5.30355 8.21795 3.96757 9.86003 4.0001 11.7377V15.4545H2.4001C1.95827 15.4545 1.6001 15.1086 1.6001 14.6818V5.76455C2.5154 6.2662 3.62304 6.31783 4.5841 5.90364C4.988 5.72727 5.34401 5.46275 5.6241 5.13091C6.38601 5.95434 7.54488 6.32255 8.6641 6.09682C9.34408 5.96213 9.95634 5.60784 10.4001 5.09228C10.8557 5.63462 11.4969 6.00185 12.2081 6.12773C12.9602 6.2637 13.7379 6.13486 14.4001 5.76455V14.6818C14.4001 15.1086 14.0419 15.4545 13.6001 15.4545Z"
                                                                  fill="#8a98b3"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="np-nav-label font-primary-med text-sm text-[#8a98b3] duration-200 group-hover:text-[#0C0C0C]">Мои
                                                        товары
                                                    </div>
                                                </Link>
                                                <Link to='/order-table' onClick={toggleMenu2}
                                                      className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF] bg-inherit">
                                                    <div
                                                        className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M12.989 2.89044C13.2737 2.88234 13.5446 3.01157 13.7163 3.23729L15.8254 6.03379C15.9406 6.18286 16.0021 6.3661 15.9999 6.55407V10.6946C15.9999 11.1735 15.6092 11.5617 15.1272 11.5617H13.0909C13.0497 11.5652 13.0084 11.5652 12.9672 11.5617C12.657 12.4243 11.8346 13 10.9127 13C9.99081 13 9.16841 12.4243 8.85815 11.5617H6.41452C6.10134 12.4191 5.28157 12.99 4.36362 12.99C3.44567 12.99 2.6259 12.4191 2.31272 11.5617H2.18181C0.97683 11.5617 0 10.5912 0 9.39392V2.16783C0 0.97057 0.97683 0 2.18181 0H9.45451C10.6595 0 11.6363 0.97057 11.6363 2.16783V2.89044H12.989ZM3.63623 10.8391C3.63623 11.2382 3.96184 11.5618 4.3635 11.5618C4.76516 11.5618 5.09077 11.2382 5.09077 10.8391C5.09077 10.4401 4.76516 10.1165 4.3635 10.1165C3.96184 10.1165 3.63623 10.4401 3.63623 10.8391ZM10.9092 11.5618C10.5075 11.5618 10.1819 11.2382 10.1819 10.8391C10.1819 10.4401 10.5075 10.1165 10.9092 10.1165C11.3108 10.1165 11.6364 10.4401 11.6364 10.8391C11.6364 11.2382 11.3108 11.5618 10.9092 11.5618ZM13.0909 10.1165H14.5455V6.74195L12.7273 4.33566H11.6364V7.2261C11.6364 7.62518 11.3108 7.94871 10.9091 7.94871C10.5074 7.94871 10.1818 7.62518 10.1818 7.2261V2.16783C10.1818 1.76875 9.85622 1.44522 9.45456 1.44522H2.18186C1.7802 1.44522 1.45459 1.76875 1.45459 2.16783V9.39392C1.45459 9.79301 1.7802 10.1165 2.18186 10.1165H2.31277C2.62595 9.25919 3.44572 8.68831 4.36367 8.68831C5.28162 8.68831 6.10139 9.25919 6.41457 10.1165H8.8582C9.16846 9.25399 9.99086 8.67828 10.9127 8.67828C11.8346 8.67828 12.657 9.25399 12.9673 10.1165C13.0084 10.113 13.0498 10.113 13.0909 10.1165Z"
                                                                  fill="#8a98b3"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="np-nav-label font-primary-med text-sm text-[#8a98b3] duration-200 group-hover:text-[#0C0C0C]">Стол
                                                        заказов
                                                    </div>
                                                </Link>
                                                <Link to='/my-achievements' onClick={toggleMenu2}
                                                      className="np-nav-item w-full h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF] bg-inherit">
                                                    <div
                                                        className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                        <svg width="14" height="19" viewBox="0 0 14 19" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M2.58303 6.72918L2.32083 6.28808L0.887514 3.9442C0.394953 3.14351 0.377094 2.14215 0.840797 1.32476C1.3045 0.507366 2.17766 0.00103732 3.12489 0.000256734H10.6149C11.9081 -0.0176245 13.0213 0.900436 13.2368 2.16251C13.3605 2.83867 13.1995 3.5355 12.7911 4.09123L11.1218 6.40917C11.1193 6.42638 11.1193 6.44385 11.1218 6.46106C12.9857 7.78693 14.063 9.94193 13.9971 12.2126C13.9983 14.0572 13.2223 15.8188 11.8559 17.0734C9.11913 19.6721 4.78771 19.6376 2.0936 16.9955C0.649219 15.6401 -0.112735 13.7201 0.0135385 11.7542C0.0968235 9.79068 1.03364 7.95857 2.58303 6.72918ZM1.76172 12.0916C1.76172 14.9576 4.10947 17.281 7.00557 17.281C9.90167 17.281 12.2494 14.9576 12.2494 12.0916C12.2494 9.22553 9.90167 6.90216 7.00557 6.90216C4.10947 6.90216 1.76172 9.22553 1.76172 12.0916ZM9.4088 5.62211C7.67355 4.98337 5.75314 5.0518 4.06881 5.81239C3.94995 5.62211 3.83668 5.43183 3.72341 5.24155C3.55351 4.95613 3.38361 4.67072 3.19483 4.3853L2.37329 3.04471C2.1385 2.66519 2.23302 2.1713 2.59179 1.90304C2.7502 1.78528 2.94435 1.72429 3.14239 1.73006H10.5712C10.9117 1.71369 11.2307 1.89476 11.3884 2.19387C11.5461 2.49297 11.5137 2.85552 11.3053 3.12255L9.55737 5.57021C9.52241 5.62211 9.48745 5.62211 9.4088 5.62211Z"
                                                                  fill="#8a98b3"></path>
                                                            <path className="svg-icon"
                                                                  d="M6.48944 11.6937C6.36053 11.7407 6.22926 11.7811 6.09616 11.8148C5.73506 11.854 5.38712 11.668 5.22218 11.3477C5.05608 11.021 5.11557 10.6262 5.37076 10.3617C5.79026 9.94658 6.24473 9.49683 6.63802 9.11627C6.81114 8.92992 7.04153 8.80527 7.2935 8.76166C7.52416 8.73745 7.75508 8.80498 7.9354 8.94936C8.11572 9.09374 8.23065 9.30314 8.25487 9.53142C8.25487 9.59197 8.25487 9.64386 8.25487 9.7044V14.7208C8.27546 15.025 8.13268 15.3175 7.87907 15.4906C7.61936 15.6992 7.26215 15.7428 6.95902 15.6029C6.65588 15.463 6.46 15.1642 6.45449 14.8333C6.45449 13.8213 6.45449 12.818 6.45449 11.8148L6.48944 11.6937Z"
                                                                  fill="#8a98b3"></path>
                                                            <defs>
                                                                <linearGradient x1="3.18182" y1="16.0636" x2="13.4359"
                                                                                y2="5.98946"
                                                                                gradientUnits="userSpaceOnUse">
                                                                    <stop stopColor="#CDD6E6"></stop>
                                                                    <stop offset="1" stopColor="#CDD6E6"></stop>
                                                                </linearGradient>
                                                                <linearGradient id="paint1_linear_437_28722" x1="5.8398"
                                                                                y1="14.6134" x2="9.14429" y2="12.6238"
                                                                                gradientUnits="userSpaceOnUse">
                                                                    <stop stopColor="#CDD6E6"></stop>
                                                                    <stop offset="1" stopColor="#CDD6E6"></stop>
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="np-nav-label font-primary-med text-sm text-[#8a98b3] duration-200 group-hover:text-[#0C0C0C]">Достижения
                                                    </div>
                                                </Link>
                                                <Link to='/profile/edit' onClick={toggleMenu2}
                                                      className="bg-inherit w-full np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M7.95904 4.75549C6.3604 4.75549 5.06445 5.9721 5.06445 7.47286C5.06445 8.97362 6.3604 10.1902 7.95904 10.1902C9.55768 10.1902 10.8536 8.97362 10.8536 7.47286C10.8536 6.75217 10.5487 6.061 10.0058 5.55139C9.46299 5.04179 8.72674 4.75549 7.95904 4.75549ZM7.95926 8.83155C7.15994 8.83155 6.51196 8.22325 6.51196 7.47287C6.51196 6.72249 7.15994 6.11419 7.95926 6.11419C8.75858 6.11419 9.40655 6.72249 9.40655 7.47287C9.40655 8.22325 8.75858 8.83155 7.95926 8.83155Z"
                                                                  fill="#8a98b3"/>
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M14.0316 5.11551C14.6956 4.30361 14.6151 3.15531 13.8435 2.43212L13.3297 1.94978C12.5544 1.20562 11.3064 1.12947 10.4351 1.77315C10.2955 0.772508 9.39685 0.0184441 8.32202 7.44375e-05H7.59838C6.50149 -0.00865932 5.57 0.752121 5.42743 1.77315C4.56258 1.14981 3.33939 1.2254 2.56903 1.94978L2.05524 2.43212C1.28361 3.15531 1.20309 4.30361 1.86709 5.11551C0.796311 5.25764 0.000243134 6.11794 7.92922e-05 7.13316V7.8125C-0.00922407 8.84223 0.801174 9.71669 1.8888 9.85052C1.20313 10.6685 1.28425 11.8401 2.07695 12.5679L2.59074 13.0502C3.36109 13.7746 4.58429 13.8502 5.44914 13.2268C5.5917 14.2479 6.5232 15.0087 7.62009 14.9999H8.34373C9.44062 15.0087 10.3721 14.2479 10.5147 13.2268C11.386 13.8705 12.634 13.7944 13.4093 13.0502L13.9231 12.5679C14.7157 11.8401 14.7969 10.6685 14.1112 9.85052C15.1988 9.71669 16.0092 8.84223 15.9999 7.8125V7.13316C15.9936 6.08568 15.1425 5.21326 14.0316 5.11551ZM14.4732 7.83287C14.4732 8.20806 14.1492 8.51221 13.7495 8.51221C13.2165 8.50934 12.7348 8.81 12.5313 9.27252C12.3279 9.73505 12.4433 10.2672 12.8232 10.6182C13.1038 10.8831 13.1038 11.3111 12.8232 11.576L12.3095 12.0584C12.0272 12.3218 11.5714 12.3218 11.2891 12.0584C10.918 11.7043 10.3564 11.5947 9.86571 11.7804C9.37499 11.9662 9.05152 12.4109 9.04581 12.9076C9.04581 13.2827 8.72182 13.5869 8.32216 13.5869H7.59851C7.19885 13.5869 6.87487 13.2827 6.87487 12.9076C6.87792 12.4072 6.55766 11.9549 6.06497 11.764C5.57228 11.573 5.00545 11.6813 4.63156 12.038C4.34931 12.3014 3.89347 12.3014 3.61122 12.038L3.09743 11.5489C2.81685 11.2839 2.81685 10.856 3.09743 10.591C3.47211 10.2393 3.58421 9.71039 3.38144 9.25087C3.17868 8.79134 2.70098 8.49176 2.17116 8.49183C1.7715 8.49183 1.44751 8.18768 1.44751 7.81249V7.13315C1.44751 6.75796 1.7715 6.45381 2.17116 6.45381C2.70418 6.45668 3.1859 6.15603 3.38933 5.6935C3.59276 5.23098 3.47733 4.69886 3.09743 4.34785C2.82161 4.0837 2.82161 3.66093 3.09743 3.39678L3.61845 2.90765C3.9007 2.64425 4.35654 2.64425 4.63879 2.90765C5.0134 3.25939 5.57684 3.36463 6.06633 3.17428C6.55582 2.98393 6.87495 2.53548 6.87487 2.03809C6.87487 1.6629 7.19885 1.35875 7.59851 1.35875H8.32216C8.72182 1.35875 9.04581 1.6629 9.04581 2.03809C9.04275 2.53848 9.36301 2.99071 9.8557 3.18168C10.3484 3.37266 10.9152 3.2643 11.2891 2.90765C11.5714 2.64425 12.0272 2.64425 12.3095 2.90765L12.8232 3.38998C13.1038 3.65495 13.1038 4.08288 12.8232 4.34785C12.4433 4.69886 12.3279 5.23098 12.5313 5.6935C12.7348 6.15603 13.2165 6.45668 13.7495 6.45381C14.1492 6.45381 14.4732 6.75796 14.4732 7.13315V7.83287Z"
                                                                  fill="#8a98b3"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="np-nav-label font-primary-med text-sm text-[#8a98b3] duration-200 group-hover:text-[#0C0C0C]">Настройки
                                                    </div>
                                                </Link>
                                                <Link to='/my-finance' onClick={toggleMenu2}
                                                      className="bg-inherit w-full np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M12.0909 2.15375H11.4545V1.80426C11.4534 1.23808 11.1722 0.705122 10.6947 0.364283C10.2173 0.0234431 9.59879 -0.0859001 9.02364 0.0688552L1.73727 2.03926C1.62982 2.07106 1.5332 2.12928 1.45727 2.20798C0.603057 2.405 0.00139898 3.12895 0 3.96146V11.1923C0 12.1907 0.854729 13 1.90909 13H12.0909C13.1453 13 14 12.1907 14 11.1923V3.96146C14 2.96309 13.1453 2.15375 12.0909 2.15375ZM9.37357 1.22578C9.56938 1.17365 9.77971 1.21328 9.93951 1.33243C10.0993 1.45158 10.1893 1.63589 10.1818 1.82835V2.17784H5.9563L9.37357 1.22578ZM12.7271 8.17945H10.818C10.4665 8.17945 10.1816 7.90967 10.1816 7.57688C10.1816 7.24409 10.4665 6.97431 10.818 6.97431H12.7271V8.17945ZM12.7273 5.76917H10.9136C9.96821 5.74629 9.13951 6.36392 8.94089 7.23944C8.83467 7.76878 8.98336 8.31541 9.34644 8.73029C9.70952 9.14518 10.2491 9.38507 10.8182 9.38458H12.7273V11.1923C12.7273 11.5251 12.4423 11.7949 12.0909 11.7949H1.90907C1.55761 11.7949 1.27271 11.5251 1.27271 11.1923V3.96146C1.27271 3.62867 1.55761 3.35889 1.90907 3.35889H12.0909C12.4423 3.35889 12.7273 3.62867 12.7273 3.96146V5.76917Z"
                                                                  fill="#8a98b3"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="np-nav-label font-primary-med text-sm text-[#8a98b3] duration-200 group-hover:text-[#0C0C0C]">Пополение
                                                        и вывод
                                                    </div>
                                                </Link>
                                                <Link to='/refs' onClick={toggleMenu2}
                                                      className="bg-inherit w-full np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M8.81449 7.15236H8.70567C8.70567 7.13139 8.69116 7.08945 8.69116 7.08945V6.05484C8.69116 5.98494 8.72018 5.98494 8.75645 5.98494C8.9717 5.91019 9.18242 5.82384 9.3876 5.72629C10.4614 5.15071 11.0426 3.98582 10.8385 2.81822C10.6134 1.58131 9.56016 0.64073 8.26314 0.518331C7.33684 0.41438 6.41688 0.756942 5.80383 1.43409C5.20517 2.05016 4.94894 2.90524 5.11464 3.73398C5.25533 4.83342 6.07739 5.73911 7.18946 6.01989C7.23178 6.03013 7.2597 6.06899 7.25475 6.11077V7.08246V7.15935H5.12189C4.9661 7.15913 4.81063 7.17317 4.6576 7.20129C3.70661 7.37776 2.99104 8.13851 2.90198 9.06777V9.60604H2.80767H1.93712C0.861975 9.72009 0.0369038 10.5777 0.000133194 11.6193V12.4023C-0.00412177 12.7654 0.0936406 13.1229 0.283063 13.4369C0.67848 14.1092 1.42555 14.5175 2.2273 14.4994H5.07836C5.2322 14.4863 5.38491 14.4629 5.5354 14.4295C6.43695 14.2484 7.1226 13.5401 7.24749 12.6609C7.26562 12.3582 7.26562 12.0548 7.24749 11.7521C7.25013 11.5976 7.23799 11.4432 7.21122 11.2908C7.02924 10.3885 6.25876 9.70558 5.31051 9.60604H4.44721H4.3529V9.20758C4.37962 8.84074 4.69672 8.55656 5.07836 8.55746H10.8966C11.1275 8.56073 11.343 8.66976 11.4769 8.85106C11.6041 9.08246 11.65 9.3474 11.6075 9.60604H11.4987H10.6427C9.70185 9.68248 8.91949 10.3347 8.70567 11.2209C8.62586 11.6978 8.62586 12.184 8.70567 12.6609C8.84187 13.7171 9.77754 14.5075 10.8821 14.4994H13.7839C14.7852 14.5067 15.6625 13.8547 15.9095 12.9196C16.0097 12.4268 16.0268 11.9216 15.9603 11.4236C15.8441 10.5922 15.2248 9.90753 14.386 9.68294C14.1882 9.63929 13.9867 9.61355 13.7839 9.60604H13.0584V9.46623C13.0695 9.27997 13.0695 9.09325 13.0584 8.90699C12.8874 7.91012 12.003 7.1725 10.9546 7.15236H8.81449ZM5.07828 13.1013H3.62736H2.22722C2.01566 13.1163 1.80789 13.0414 1.65859 12.8961C1.50929 12.7509 1.43343 12.55 1.45097 12.3463V11.7032C1.45097 11.3171 1.77577 11.0041 2.17644 11.0041H5.07828C5.47894 11.0041 5.80374 11.3171 5.80374 11.7032V12.4023C5.80374 12.7883 5.47894 13.1013 5.07828 13.1013ZM12.3328 13.1013H13.8273C14.2109 13.0791 14.5099 12.7725 14.5092 12.4023V11.7032C14.5092 11.3171 14.1844 11.0042 13.7838 11.0042H10.8819C10.5272 10.9986 10.2203 11.2411 10.1565 11.5774C10.1493 11.6751 10.1493 11.7732 10.1565 11.871V12.3673C10.1465 12.5587 10.2185 12.7456 10.3557 12.8844C10.4928 13.0231 10.6831 13.1016 10.8819 13.1013H12.3328ZM7.97998 1.91643C8.7813 1.91643 9.4309 2.54239 9.4309 3.31454C9.4309 4.0867 8.7813 4.71265 7.97998 4.71265C7.17865 4.71265 6.52905 4.0867 6.52905 3.31454C6.52905 2.54239 7.17865 1.91643 7.97998 1.91643Z"
                                                                  fill="#8a98b3"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="np-nav-label font-primary-med text-sm text-[#8a98b3] duration-200 group-hover:text-[#0C0C0C]">Реферальная
                                                        система
                                                    </div>
                                                </Link>
                                                <button onClick={changeLoggedFalse}
                                                        className="bg-white w-full np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]">
                                                    <div
                                                        className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full">
                                                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path className="svg-icon" fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M3.88308 11.5556H1.55323V1.44444H3.88308C4.08905 1.44444 4.28657 1.36834 4.43222 1.2329C4.57786 1.09746 4.65969 0.913767 4.65969 0.722222C4.65969 0.530677 4.57786 0.346987 4.43222 0.211544C4.28657 0.0761015 4.08905 0 3.88308 0H0.776616C0.570644 0 0.37312 0.0761015 0.227477 0.211544C0.081833 0.346987 0 0.530677 0 0.722222V12.2778C0 12.4693 0.081833 12.6531 0.227477 12.7885C0.37312 12.9239 0.570644 13 0.776616 13H3.88308C4.08905 13 4.28657 12.9239 4.43222 12.7885C4.57786 12.6531 4.65969 12.4693 4.65969 12.2778C4.65969 12.0862 4.57786 11.9025 4.43222 11.7671C4.28657 11.6316 4.08905 11.5556 3.88308 11.5556ZM13.7539 5.98721L9.09416 1.65387C8.94586 1.52075 8.74677 1.44789 8.54069 1.45128C8.3346 1.45466 8.13842 1.53403 7.99527 1.67195C7.85212 1.80986 7.77373 1.99498 7.77737 2.18664C7.78101 2.37829 7.86638 2.56075 8.01468 2.69387L11.3463 5.79224H3.88308C3.67711 5.79224 3.47958 5.86829 3.33394 6.00374C3.1883 6.13918 3.10646 6.32291 3.10646 6.51446C3.10646 6.706 3.1883 6.88965 3.33394 7.02509C3.47958 7.16053 3.67711 7.23668 3.88308 7.23668H13.2025C13.36 7.24063 13.5151 7.19993 13.6472 7.11995C13.7792 7.03998 13.882 6.92449 13.9419 6.78891C14.0017 6.65332 14.0157 6.50403 13.9822 6.36084C13.9486 6.21764 13.869 6.08732 13.7539 5.98721ZM10.3756 8.47165L8.04573 10.2772C7.89022 10.4036 7.79509 10.5823 7.78126 10.774C7.76742 10.9657 7.83603 11.1546 7.97197 11.2992C8.10791 11.4438 8.30005 11.5323 8.50613 11.5452C8.71222 11.558 8.91536 11.4942 9.07087 11.3678L11.4007 9.56221C11.5562 9.43579 11.6514 9.25707 11.6652 9.06542C11.679 8.87377 11.6104 8.68486 11.4745 8.54024C11.3386 8.39563 11.1464 8.30723 10.9403 8.29436C10.7342 8.28149 10.5311 8.34523 10.3756 8.47165Z"
                                                                  fill="#8a98b3"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="np-nav-label font-primary-med text-sm text-[#8a98b3] duration-200 group-hover:text-[#0C0C0C]">Выйти
                                                        из аккаунта
                                                    </div>
                                                </button>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <button onClick={openMenu}
                                className="hm-btn-menu bg-inherit mmenu-open flex-shrink-0 w-[40px] h-[50px] flex justify-center items-center flex-col gap-3 cursor-pointer">
                            <span className="w-[25px] h-[3px] bg-white rounded-full">
                            </span>
                            <span className="w-[25px] h-[3px] bg-white rounded-full">
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`mmenu ${menu} pt-8 pb-8 px-12`}>
                <button onClick={closeMenu}
                        className="mmenu-close bg-inherit flex-shrink-0 w-[50px] h-[50px] flex justify-center items-center flex-col gap-4 cursor-pointer">
                    <span className="w-[30px] h-[3px] bg-white rounded-full">
                    </span>
                    <span className="w-[30px] h-[3px] bg-white rounded-full">
                    </span>
                </button>
                <div className="mmenu-nav flex gap-x-4">
                    <nav
                        className="nav flex  mr-2 gap-x-5 gap-y-5 flex-wrap mx-4 3xl:gap-x-2.5 lg:flex-col lg:items-start lg:gap-y-8">
                        <Link to='/' onClick={closeMenu}
                            className="nav-link-hed nav-link nav-link-prim-hed font-primary-bold text-sm text-[#8A98B3] uppercase lg:text-white/30">Главная</Link>
                        <Link to='/top_users' onClick={closeMenu}
                            className="nav-link-hed nav-link font-primary-bold text-sm text-[#8A98B3] uppercase lg:text-white/30">Топ
                            юзеров</Link>
                        <Link to='/feedbacks' onClick={closeMenu}
                            className="nav-link-hed nav-link font-primary-bold text-sm text-[#8A98B3] uppercase  lg:text-white/30">Отзывы</Link>
                        <Link to='/guarantees' onClick={closeMenu}
                            className="nav-link-hed nav-link font-primary-bold text-sm text-[#8A98B3] uppercase lg:text-white/30">Гарантии</Link>
                        <Link to='/random-items' onClick={closeMenu}
                            className="nav-link-hed nav-link font-primary-bold text-sm text-[#8A98B3] uppercase lg:text-white/30">Случайные
                            предметы</Link>
                        <Link to='/forum' onClick={closeMenu}
                            className="nav-link-hed nav-link font-primary-bold text-sm text-[#8A98B3] uppercase lg:text-white/30">Форум</Link>
                    </nav>
                </div>
                <div className="mmenu-pnav pt-8 max-w-[400px]">
                    <div className="navpin">
                        <button onClick={sellProduct}
                                className="navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4 bg-inherit w-full">
                            <div className="navpin-plate">
                                <img className="navpin-plate-pic" src="/img/link-pin-plate.6d928d3b.svg" alt="dots"/>
                                <img className="navpin-plate__dots-1" src="/img/dots-1.82560447.svg" alt="dots"/>
                                <img className="navpin-plate__dots-2" src="/img/dots-1.82560447.svg" alt="dots"/>
                                <div className="navpin-plate-icon-w">
                                    <img src="/img/icon-navpin-plate-icon.svg" alt="navpin-plate-icon"/>
                                </div>
                            </div>
                            <div
                                className="navpin-text text-sm uppercase 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs">Продать
                                товар
                            </div>
                        </button>
                        <button onClick={goTab}
                                className="navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4 bg-inherit w-full">
                            <div className="navpin-plate">
                                <img className="navpin-plate-pic" src="/img/link-pin-plate.6d928d3b.svg" alt="dots"/>
                                <img className="navpin-plate__dots-1" src="/img/dots-1.82560447.svg" alt="dots"/>
                                <img className="navpin-plate__dots-2" src="/img/dots-1.82560447.svg" alt="dots"/>
                                <div className="navpin-plate-icon-w">
                                    <img src="/img/icon-navpin-plate-icon-2.svg" alt="navpin-plate-icon"/>
                                </div>
                            </div>
                            <div
                                className="navpin-text text-sm uppercase 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs">Закладки
                            </div>
                        </button>
                        <button onClick={goHistory}
                                className="navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4 bg-inherit w-full ">
                            <div className="navpin-plate">
                                <img className="navpin-plate-pic" src="/img/link-pin-plate.6d928d3b.svg" alt="dots"/>
                                <img className="navpin-plate__dots-1" src="/img/dots-1.82560447.svg" alt="dots"/>
                                <img className="navpin-plate__dots-2" src="/img/dots-1.82560447.svg" alt="dots"/>
                                <div className="navpin-plate-icon-w">
                                    <img src="/img/icon-navpin-plate-icon-3.svg" alt="navpin-plate-icon"/>
                                </div>
                            </div>
                            <div
                                className="navpin-text text-sm uppercase 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs">История
                                просмотра
                            </div>
                        </button>
                        <button onClick={goHistorySales}
                                className="navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4  bg-inherit w-full ">
                            <div className="navpin-plate">
                                <img className="navpin-plate-pic" src="/img/link-pin-plate.6d928d3b.svg" alt="dots"/>
                                <img className="navpin-plate__dots-1" src="/img/dots-1.82560447.svg" alt="dots"/>
                                <img className="navpin-plate__dots-2" src="/img/dots-1.82560447.svg" alt="dots"/>
                                <div className="navpin-plate-icon-w">
                                    <img src="/img/icon-navpin-plate-icon-4.svg" alt="navpin-plate-icon"/>
                                </div>
                            </div>
                            <div
                                className="navpin-text text-sm text-left uppercase 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs">История
                                покупок и продаж
                            </div>
                        </button>
                    </div>
                </div>
                <div className="cm-f-bar mt-8 overflow-hidden flex w-full min-[505px]:w-[400px] h-auto rounded-xl border-[1px] border-solid border-[#C0C2DC59] flex-col">
                    <button onClick={goMyMessages} className="cm-f-bar-item bg-inherit h-12 flex items-center justify-center gap-x-2 px-2 text-[#A1AEC8] hover:bg-slate-100 ">
                        <div className="cm-f-bar-item-icon flex-shrink-0">
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.2727 5.10197H14.5455V3.28379C14.5455 1.77756 13.3244 0.556519 11.8182 0.556519H2.72727C1.22104 0.556519 0 1.77756 0 3.28379V8.73834C0 10.2446 1.22104 11.4656 2.72727 11.4656H4.13636L5.45455 12.9292V13.2565C5.45455 14.7628 6.67559 15.9838 8.18182 15.9838H11.4091L12.7818 17.5383C13.0407 17.8319 13.4132 18 13.8045 18C14.1959 18 14.5684 17.8319 14.8273 17.5383L16.2 15.9838H17.2727C18.779 15.9838 20 14.7628 20 13.2565V7.80197C19.985 6.3064 18.7684 5.1019 17.2727 5.10197ZM2.72727 9.64743C2.2252 9.64743 1.81818 9.24041 1.81818 8.73834V3.28379C1.81818 2.78171 2.2252 2.3747 2.72727 2.3747H11.8182C12.3203 2.3747 12.7273 2.78171 12.7273 3.28379V8.73834C12.7273 9.24041 12.3203 9.64743 11.8182 9.64743H8.11818L6.53636 11.4656L4.95455 9.64743H2.72727ZM17.2727 14.1929C17.7748 14.1929 18.1818 13.7859 18.1818 13.2838V7.84742C18.1818 7.34534 17.7748 6.93833 17.2727 6.93833H14.5455V8.75651C14.5455 10.2627 13.3244 11.4838 11.8182 11.4838H8.92727L7.55455 13.0383C7.4717 13.1321 7.37696 13.2146 7.27273 13.2838C7.27273 13.7859 7.67974 14.1929 8.18182 14.1929H12.2273L13.8091 16.0838L15.3909 14.1929H17.2727Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <div className="cm-f-bar-item-label font-secondary-bold text-xs ">Мои Сообщения</div>
                    </button>
                    <div className="cm-f-bar-sep w-full h-[1px] flex-shrink-0 bg-[#C0C2DC59] "></div>
                    <button onClick={goSupport} className="cm-f-bar-item bg-inherit h-12 flex items-center justify-center gap-x-2 px-2 text-[#A1AEC8] hover:bg-slate-100">
                        <div className="cm-f-bar-item-icon flex-shrink-0">
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.2727 4.33194H16.3636C16.1681 4.33414 15.9732 4.35545 15.7818 4.39557C14.7435 2.13731 12.4855 0.690216 10 0.690216C7.51449 0.690216 5.25645 2.13731 4.21818 4.39557C4.02678 4.35545 3.83191 4.33414 3.63636 4.33194H2.72727C1.22104 4.33194 0 5.55298 0 7.05921V10.6956C0 12.2018 1.22104 13.4228 2.72727 13.4228H3.63636C5.14259 13.4228 6.36364 12.2018 6.36364 10.6956V7.05921C6.35858 6.45136 6.15061 5.86263 5.77273 5.38648C6.45841 3.65157 8.13451 2.51175 10 2.51175C11.8655 2.51175 13.5416 3.65157 14.2273 5.38648C13.8494 5.86263 13.6414 6.45136 13.6364 7.05921V10.6956C13.6364 12.2018 14.8574 13.4228 16.3636 13.4228H17.2727C18.779 13.4228 20 12.2018 20 10.6956V7.05921C20 5.55298 18.779 4.33194 17.2727 4.33194ZM4.54545 10.6956C4.54545 11.1977 4.13844 11.6047 3.63636 11.6047H2.72727C2.2252 11.6047 1.81818 11.1977 1.81818 10.6956V7.05923C1.81818 6.55716 2.2252 6.15014 2.72727 6.15014H3.63636C4.13844 6.15014 4.54545 6.55716 4.54545 7.05923V10.6956ZM17.2727 11.6047C17.7748 11.6047 18.1818 11.1977 18.1818 10.6956V7.05923C18.1818 6.55716 17.7748 6.15014 17.2727 6.15014H16.3636C15.8616 6.15014 15.4545 6.55716 15.4545 7.05923V10.6956C15.4545 11.1977 15.8616 11.6047 16.3636 11.6047H17.2727Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <div className="cm-f-bar-item-label font-secondary-bold text-xs ">Тех. Поддержка</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
