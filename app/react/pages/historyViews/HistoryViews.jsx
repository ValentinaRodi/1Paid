import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import LayoutBtn from '../../components/LayoutBtn';
import Title from '../../components/title/Title';

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

    const arr = [0,1,2,3,4,5,6];

    return (
        
        <div className="layout-b pb-4 min-w-0 flex flex-wrap content-between">
            <div className="w-full layout-main">
                <Title title='История просмотров' search='true'/>
                <div className='svh-grid grid grid-cols-1 gap-3'>
                            {arr.length !== 0 ? 
                                    <div className="hvc rounded-xl p-4 sm:p-6 bg-white">
                                        <div className="hvc-icon rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex justify-center items-center [&_svg]:max-w-[50%] text-black bg-[#F0F1F5] ">
                                            <svg viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M21.88 6.21L22.02 6.42V6.48L22.29 7.03L21.97 7.55V7.61L21.83 7.82L21.815 7.84073C21.6863 8.01898 21.5113 8.26135 21.29 8.55C20.6691 9.34538 19.9761 10.0818 19.22 10.75C17.0249 12.7821 14.1607 13.9385 11.17 14C8.19668 13.9263 5.3523 12.7708 3.17 10.75C2.37865 10.0834 1.65208 9.34339 1 8.54C0.778723 8.25138 0.603725 8.00903 0.475007 7.83078L0.46 7.81L0.32 7.6V7.54L0 7L0.42 6.45V6.39L0.56 6.18L0.575004 6.15922C0.703723 5.98097 0.878721 5.73862 1.1 5.45C1.72094 4.65462 2.41387 3.91817 3.17 3.25C5.3523 1.2292 8.19668 0.0736732 11.17 0C14.182 0.0575256 17.0666 1.22561 19.27 3.28C20.0261 3.94817 20.7191 4.68462 21.34 5.48C21.5613 5.76865 21.7363 6.01102 21.865 6.18927L21.88 6.21ZM17.9 9.25C18.5614 8.66374 19.1673 8.01767 19.71 7.32C19.7433 7.28006 19.7899 7.24233 19.8346 7.20608C19.9243 7.13343 20.0067 7.06671 19.96 7C19.89 6.9 19.81 6.8 19.71 6.68C19.1673 5.98233 18.5614 5.33626 17.9 4.75C16.0706 3.03783 13.675 2.05893 11.17 2C8.66504 2.05893 6.26941 3.03783 4.44 4.75C3.77835 5.33917 3.16938 5.98496 2.62 6.68L2.38 7L2.62 7.32C3.16938 8.01505 3.77835 8.66083 4.44 9.25C6.26941 10.9622 8.66504 11.9411 11.17 12C13.675 11.9411 16.0706 10.9622 17.9 9.25Z" fill="black"></path>
                                                <path d="M11.1699 10C12.8268 10 14.1699 8.65685 14.1699 7C14.1699 5.34315 12.8268 4 11.1699 4C9.51307 4 8.16992 5.34315 8.16992 7C8.16992 8.65685 9.51307 10 11.1699 10Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                        <div className="hvc-title font-secondary-bold  text-[#1D222C] text-sm lg:text-base xl:text-lg ">Аккаунт Warface 2500 руб</div>
                                        <div className="hvc-ibar flex items-start min-[462px]:items-center gap-2 sm:gap-4 flex-col min-[462px]:flex-row">
                                            <div className="hvc-ibar-item">
                                                <div className="hvc-ibar-label font-secondary-med text-xs sm:text-sm text-[#969BA5] ">Краткая информация</div>
                                                <div className="hvc-ibar-value font-secondary-bold text-sm sm:text-base text-[#1D222C] ">Чарли, 15 ранг, 45 уровень</div>
                                            </div>
                                            <div className="hidden min-[462px]:block hvc-ibar-sep flex-shrink-0 w-[1px] h-[50px] bg-[#DBE0ED] opacity-60"></div>
                                            <div className="hvc-ibar-item">
                                                <div className="hvc-ibar-label font-secondary-med text-xs sm:text-sm text-[#969BA5]">Дата просмотра</div>
                                                <div className="hvc-ibar-value font-secondary-bold text-sm sm:text-base text-[#1D222C] ">1 Ноя 2019 22:15</div>
                                            </div>
                                        </div>
                                        <button className="hvc-btn bg-inherit rounded-full w-11 h-11 border border-solid border-black/10 flex items-center justify-center hover:bg-black/5">
                                            <div className="btn-icon [&amp;_svg]:w-4 md:[&amp;_svg]:w-4 [&amp;_svg]:text-black">
                                                <img src="/img/icon-arrow-history.svg" alt="arrow"/>
                                            </div>
                                        </button>
                                    </div>
                                : null
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

