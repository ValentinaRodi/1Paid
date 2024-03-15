import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import LayoutBtn from '../../components/LayoutBtn';

function HistoryViews() {
    const [btn, setBtn] = useState(true);
    const [gamesItems, setGamesItems] = useState([]);

    // useEffect(() => {

    //     //запрос на отображение избранных карточек
    //     fetch('/catalog/Warface/accwarface', {
    //         method: "GET",
    //         headers: {
    //             "X-Requested-With": "XMLHttpRequest",
    //             "Content-Type": "application/json",
    //         },
    //     })
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then((data) => {
    //         //console.log(data)
    //         setGamesItems(data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }, []);

    // useEffect(() => {
    //     //Определяем показывать кнопку "Еще" или нет для категорий
    //     const parentDiv = document.getElementById("parent");
    //     const navDiv = document.getElementById("nav");
    //     const allLinks = navDiv.querySelectorAll('a');
    //     const parentRect = parentDiv.getBoundingClientRect();

    //     allLinks.forEach(el => {
            
    //         const childRect = el.getBoundingClientRect();
            
    //         if(parentRect.bottom <= childRect.top) {
    //             setBtnYet('');
    //         }
    //     });
    // }, []);

    // const changeViewCards = () => {
    //     (cardsView) ? setCardsView(false) : setCardsView(true);
    //     (cardsViewImg === '/img/icon-card-tile.svg') ? setCardsViewImg('/img/icon-cards-stroke.svg') : setCardsViewImg('/img/icon-card-tile.svg');
    //     (cardsViewDiv === '') ? setCardsViewDiv('_view-list') : setCardsViewDiv(''); 
    // }

    return (
        
        <div className="layout-b pb-4 min-w-0 mt-10 xl:mt-0 flex flex-wrap content-between">
            <div className="w-full">
                <div className="sh flex justify-between items-center gap-x-3 mb-10">
                    <div className="flex flex-col justify-start">
                        <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">История просмотров</h2>
                        <div className="sh-title-line mt-2 rounded-full w-9 h-1 2md:mt-2 bg-gradient-primary">
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        {/* <button onClick={changeViewCards} className=" rounded-full bg-[#e8eaf7] hover:bg-[#dcdff1] w-11 h-11 flex justify-center items-center">
                            <div className="w-[50%] h-[50%] flex justify-center items-center">
                                <img src={cardsViewImg} alt="icon-card"/>
                            </div>
                        </button> */}
                        <div className="sh-bar flex items-center gap-2 2md:w-full 2md:flex-row-reverse">
                            <div className="sh-search rounded-full h-[45px] px-6 max-w-[270px] w-full flex items-center bg-[#E8EAF7] 2md:max-w-none 2md:flex-grow 2md:h-10 2md:px-3">
                                <button className="sh-search-icon cursor-pointer bg-inherit flex-shrink-0 w-4 h-full [&amp;_svg]:w-full flex justify-center items-center text-[#B8BACF] duration-100 hover:text-black">
                                    <img src="/img/icon-sh-search-icon.svg" alt="sh-search-icon"/>
                                </button>
                                <input className="sh-search-input flex-grow ml-2.5 w-full h-full bg-transparent font-primary-med text-base text-black 2md:text-sm" placeholder="Поиск"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='svh-grid mt-10 grid grid-cols-1 gap-3'>
                            {
                                (gamesItems.length !== 0 && gamesItems.items !== undefined) ? 
                                    (<div key={uuid()} className="pc-card max-w-[310px] rounded-lg bg-white min-w-[240px]">
                                        <div className={(card.new === 1) ? 'pc-plate-container' : 'hidden'}>
                                            <div className="pc-plate bg-gradient-primary _shadow-primary font-bold py-1 px-7 3sm:px-2 3sm:py-[1px] bg-gradient-primary">new</div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="pc-supinfo font-secondary-bold text-[13px] text-black 3sm:text-xs">
                                                <div className="pc-rating flex gap-1 items-center">
                                                    <div className="pc-rating-icon flex-shrink-0 w-[22px] h-[22px] [&amp;_svg]:w-full 3sm:w-4 3sm:h-4">
                                                        <img src="/img/icon-pc-rating.svg" alt="icon-pc-rating"/>
                                                    </div>
                                                    <span>{card.rank}</span>
                                                </div>
                                            </div>
                                            <div className="pc-ibar flex justify-end items-center flex-wrap gap-3">
                                                <label className="pc-btn-like">
                                                    <input type="checkbox"/>
                                                    <div className="btn-icon btn-icon-none-shadow">
                                                        <svg className="_default" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.00689 10.4136L11.0819 15.0674V15.0674L16.1568 10.4136V10.4136L19.0394 7.77019C20.4408 6.48508 20.4408 4.4015 19.0394 3.11639C17.638 1.83128 15.3659 1.83128 13.9644 3.11639L11.0819 5.77836L8.19927 3.135C6.79786 1.84989 4.52572 1.84989 3.1243 3.135C1.72289 4.42012 1.72289 6.50369 3.1243 7.78881L6.00689 10.4136ZM12.5024 1.82265C14.6914 -0.184698 18.2405 -0.184698 20.4295 1.82265C22.6185 3.82999 22.6185 7.08454 20.4295 9.09189L18.9882 10.4136V10.4136L11.0814 17.6828V17.6828L3.15434 10.4136V10.4136L1.71305 9.09189C-0.475963 7.08454 -0.475963 3.82999 1.71305 1.82265C3.90205 -0.184698 7.45114 -0.184698 9.64015 1.82265L11.0814 3.14433L12.5024 1.82265Z" fill="currentColor" />
                                                        </svg>
                                                        <svg className="_checked" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.5717 1.5605C14.7284 -0.520167 18.2251 -0.520167 20.3817 1.5605C22.5384 3.64117 22.5384 7.0146 20.3817 9.09527L18.9617 10.4652L11.1717 18L3.36172 10.4652L1.94172 9.09527C-0.214949 7.0146 -0.214949 3.64117 1.94172 1.5605C4.09839 -0.520167 7.59505 -0.520167 9.75172 1.5605L11.1717 2.93046L12.5717 1.5605Z" fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <Link to={`${card.id}-${card.seo_name}`} className='pc-link w-full'>
                                            <div className="pc-preview flex justify-center items-center mb-3">
                                                <div className="pc-preview-inner max-w-[80px] max-h-[80px]">
                                                    <img className="pc-preview-pic w-full" src={card.icon} alt="picture"/>
                                                </div>
                                            </div>
                                            <div className="pc-info">
                                                <div className="pc-title font-secondary-bold font-bold text-[13px] text-black">{card.name}</div>
                                                <div className="pc-subtitle mt-1 font-secondary-med text-xs text-[#A6B1C7] 3sm:text-[10px]">{card.description}</div>
                                            </div>
                                            <div className="pc-subinfo text-[#BEC1DB] flex flex-col gap-2 3sm:gap-1">
                                                <div className="pc-subinfo-value font-secondary-med text-[10px]">Тип: Оружие</div>
                                                <div className="pc-subinfo-value font-secondary-med text-[10px]">Кол: 33</div>
                                                <div className="pc-subinfo-value font-secondary-med text-[10px]">Продажа от: 33 шт</div>
                                                <div className="pc-subinfo-value font-secondary-med text-[10px]">Срок: Навсегда</div>
                                            </div>
                                        </Link>
                                        <div className="pc-tbar">
                                            <div className="pc-tbar-inner flex items-center gap-3 3sm:gap-1.5 3sm:flex-col 3sm:items-start">
                                                <div className="pc-source flex-shrink-0 w-11 h-11 3sm:w-10 3sm:h-10">
                                                    <div className="pc-source-user w-full h-full relative">
                                                        <div className="pc-source-status _green"></div>
                                                            <img className="w-full h-full object-cover object-center" src="/img/avatar-example-3.347bde69.png" alt="picture"/>
                                                        </div>
                                                    </div>
                                                    <div className="pc-total flex-grow h-11 rounded-full border border-solid border-[#F3F7FF] flex items-center justify-between pl-4 gap-2 3sm:h-10 3sm:pl-3 3sm:w-full">
                                                    <div className="pc-total-inf flex flex-wrap gap-x-[5px] font-secondary-bold text-xs 3sm:text-[10px]">
                                                        <span className="text-[#BEC1DB]">Цена</span>
                                                        <span className="text-black font-secondary-bold font-bold">{card.price}<b> ₽</b></span>
                                                    </div>
                                                    <div className="pc-total-btn-wrap flex-shrink-0 w-11 h-11 3sm:w-10 3sm:h-10">
                                                        <Link to='#' className="btn btn-secondary pc-total-btn rounded-full w-full h-full justify-center">
                                                            <div className="btn-icon w-1/2 [&amp;_svg]:w-full text-white">
                                                                <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.7671 8.36089H13.0736C13.4234 8.36089 13.6981 8.07175 13.6981 7.72307C13.6981 7.3659 13.4234 7.08526 13.0736 7.08526H10.7671C10.4174 7.08526 10.1426 7.3659 10.1426 7.72307C10.1426 8.07175 10.4174 8.36089 10.7671 8.36089ZM15.8132 3.93954C16.3211 3.93954 16.6542 4.11813 16.9872 4.50932C17.3203 4.90052 17.3786 5.4618 17.3037 5.9712L16.5126 11.55C16.3627 12.6224 15.4634 13.4124 14.4059 13.4124H5.32134C4.21387 13.4124 3.29792 12.5458 3.20632 11.4233L2.44025 2.1528L1.1829 1.93169C0.849824 1.87216 0.616673 1.54049 0.67496 1.20032C0.733248 0.852497 1.058 0.622032 1.3994 0.673908L3.38535 0.97921C3.66846 1.03109 3.87663 1.26835 3.90161 1.5575L4.05982 3.46245C4.0848 3.73544 4.3013 3.93954 4.56776 3.93954H15.8132ZM5.18794 14.7565C4.48849 14.7565 3.92226 15.3348 3.92226 16.0492C3.92226 16.755 4.48849 17.3333 5.18794 17.3333C5.87907 17.3333 6.4453 16.755 6.4453 16.0492C6.4453 15.3348 5.87907 14.7565 5.18794 14.7565ZM14.5556 14.7565C13.8562 14.7565 13.29 15.3348 13.29 16.0492C13.29 16.755 13.8562 17.3333 14.5556 17.3333C15.2468 17.3333 15.813 16.755 15.813 16.0492C15.813 15.3348 15.2468 14.7565 14.5556 14.7565Z" fill="currentColor" />
                                                                </svg>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)  
                                : (
                                    <div className="hvc rounded-xl p-6 bg-white">
                                        <div className="hvc-icon rounded-full w-[50px] h-[50px] flex justify-center items-center [&_svg]:max-w-[50%] text-black bg-[#F0F1F5] ">
                                            <svg viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M21.88 6.21L22.02 6.42V6.48L22.29 7.03L21.97 7.55V7.61L21.83 7.82L21.815 7.84073C21.6863 8.01898 21.5113 8.26135 21.29 8.55C20.6691 9.34538 19.9761 10.0818 19.22 10.75C17.0249 12.7821 14.1607 13.9385 11.17 14C8.19668 13.9263 5.3523 12.7708 3.17 10.75C2.37865 10.0834 1.65208 9.34339 1 8.54C0.778723 8.25138 0.603725 8.00903 0.475007 7.83078L0.46 7.81L0.32 7.6V7.54L0 7L0.42 6.45V6.39L0.56 6.18L0.575004 6.15922C0.703723 5.98097 0.878721 5.73862 1.1 5.45C1.72094 4.65462 2.41387 3.91817 3.17 3.25C5.3523 1.2292 8.19668 0.0736732 11.17 0C14.182 0.0575256 17.0666 1.22561 19.27 3.28C20.0261 3.94817 20.7191 4.68462 21.34 5.48C21.5613 5.76865 21.7363 6.01102 21.865 6.18927L21.88 6.21ZM17.9 9.25C18.5614 8.66374 19.1673 8.01767 19.71 7.32C19.7433 7.28006 19.7899 7.24233 19.8346 7.20608C19.9243 7.13343 20.0067 7.06671 19.96 7C19.89 6.9 19.81 6.8 19.71 6.68C19.1673 5.98233 18.5614 5.33626 17.9 4.75C16.0706 3.03783 13.675 2.05893 11.17 2C8.66504 2.05893 6.26941 3.03783 4.44 4.75C3.77835 5.33917 3.16938 5.98496 2.62 6.68L2.38 7L2.62 7.32C3.16938 8.01505 3.77835 8.66083 4.44 9.25C6.26941 10.9622 8.66504 11.9411 11.17 12C13.675 11.9411 16.0706 10.9622 17.9 9.25Z" fill="black"></path>
                                                <path d="M11.1699 10C12.8268 10 14.1699 8.65685 14.1699 7C14.1699 5.34315 12.8268 4 11.1699 4C9.51307 4 8.16992 5.34315 8.16992 7C8.16992 8.65685 9.51307 10 11.1699 10Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                        <div className="hvc-title font-secondary-bold text-lg text-[#1D222C] xl:text-base md:text-sm ">Аккаунт Warface 2500 руб</div>
                                        <div className="hvc-ibar flex items-center gap-4 ">
                                            <div className="hvc-ibar-item">
                                                <div className="hvc-ibar-label font-secondary-med text-sm text-[#969BA5] ">Краткая информация</div>
                                                <div className="hvc-ibar-value font-secondary-bold text-base text-[#1D222C] ">Чарли, 15 ранг, 45 уровень</div>
                                            </div>
                                            <div className="hvc-ibar-sep flex-shrink-0  w-[1px] h-[50px] bg-[#DBE0ED] opacity-60"></div>
                                            <div className="hvc-ibar-item">
                                                <div className="hvc-ibar-label font-secondary-med text-sm text-[#969BA5]">Дата просмотра</div>
                                                <div className="hvc-ibar-value font-secondary-bold text-base text-[#1D222C] ">1 Ноя 2019 22:15</div>
                                            </div>
                                        </div>
                                        <button className="hvc-btn bg-inherit rounded-full w-11 h-11 border border-solid border-black/10 flex items-center justify-center hover:bg-black/5">
                                            <div className="btn-icon [&amp;_svg]:w-4 md:[&amp;_svg]:w-4 [&amp;_svg]:text-black">
                                                <img src="/img/icon-arrow-history.svg" alt="arrow"/>
                                            </div>
                                        </button>
                                    </div>
                                )
                            }
                        {(!btn) ? null :
                            <div className="hidden sgc-f flex justify-center mt-10 ">
                                <button className="sgc-btn-more rounded-full h-[60px] flex items-center justify-center px-12 bg-[#E3E9F5] duration-200 hover:bg-[#d3d7e0]">
                                    <div className="btn-text font-secondary-bold text-base text-[#B9C3D6]">Показать еще 25</div>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            <LayoutBtn toTop='true'/>
        </div>  
       
    );
}

export default HistoryViews;

