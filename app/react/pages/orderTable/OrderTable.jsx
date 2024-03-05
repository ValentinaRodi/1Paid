import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import CardGame from "../../components/cardGame/CardGame";
import CardGameString from "../../components/cardGame/CardGameString";
import uuid from 'react-uuid';
import LayoutBtn from '../../components/LayoutBtn';

function OrderTable() {
    const [btn, setBtn] = useState(true);
    const [cardView, setCardView] = useState(true);
    const [cardsSales, setCardsSales] = useState([]);
    const [cardsPurchase, setCardsPurchase] = useState([]);

    const [cardsView, setCardsView] = useState(true);
    const [cardsViewImg, setCardsViewImg] = useState('/img/icon-cards-stroke.svg');
    const [cardsViewDiv, setCardsViewDiv] = useState('');

    const [salesClass, setSalesClass] = useState(true);

    useEffect(() => {

        //запрос на отображение мои покупки
        fetch('/catalog/Warface/accwarface', {
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
            //console.log(data);
            setCardsSales(data);
        })
        .catch((error) => {
            console.log(error);
        });

        //запрос на отображение мои продажи
        fetch('/catalog/Warface/accwarface', {
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
            //console.log(data);
            setCardsPurchase(data);
        })
        .catch((error) => {
            console.log(error);
        });
        
    }, []);

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

    const changeViewCards = () => {
        (cardsView) ? setCardsView(false) : setCardsView(true);
        (cardsViewImg === '/img/icon-card-tile.svg') ? setCardsViewImg('/img/icon-cards-stroke.svg') : setCardsViewImg('/img/icon-card-tile.svg');
        (cardsViewDiv === '') ? setCardsViewDiv('_view-list') : setCardsViewDiv(''); 
    }


    const clickSales = () => {
        setSalesClass(true);
        setCardView(true);
    };

    const clickPurchase = () => {
        setSalesClass(false);
        setCardView(false);
    };

    return (
        
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0 mt-10 xl:mt-0">
            <div className="w-full">
                <div className="sh flex justify-between items-center gap-x-3 mb-10">
                    <div className="flex flex-col justify-start">
                        <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Стол заказов</h2>
                        <div className="sh-title-line mt-2 rounded-full w-9 h-1 2md:mt-2 bg-gradient-primary">
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <button onClick={changeViewCards} className="rounded-[40px] bg-white hover:bg-[#dcdff1] w-32 h-11 flex justify-center items-center text-[#8A98B3] text-sm font-secondary-bold font-bold flex items-center justify-center border border-solid border-[#C0C2DC]">Выбор игры</button>
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
                <div className="flex items-start py-4 justify-between rounded-lg bg-white px-6 mb-3">
                    <div id="parent" className="nav-show pt-2 h-full w-full flex items-center justify-start">
                        <nav id="nav" className="nav-item pb-2.5 flex gap-x-6 flex-wrap gap-y-6">
                            <div onClick={clickSales} className={`${(salesClass) ? 'nav-link-prim' : 'nav-link'} cursor-pointer nav-link-tab font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm`}>Мои заказы</div>
                            <div onClick={clickPurchase} className={`${(!salesClass) ? 'nav-link-prim' : 'nav-link'} cursor-pointer nav-link-tab font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm`}>Биржа заказов</div>
                        </nav>
                    </div>
                </div>
                <div className="sotl-list w-full flex flex-col">
                    <div className="sotl-item flex items-center justify-between font-secondary-bold text-sm text-black bg-white w-full h-[56px] p-[24px] max-h-[56px] mb-[12px] ">
                        <div className="flex gap-x-6 flex-wrap">
                            <div className="sotl-item-block flex items-center gap-1">
                                <div className="sotl-item-label text-[#969BA5] ">Название:</div>
                                <div className="sotl-item-value whitespace-nowrap text-ellipsis w-[62%] overflow-hidden">Аккаунт Warface за test</div>
                            </div>
                            <div className="sotl-item-block flex items-center gap-1">
                                <div className="sotl-item-label text-[#969BA5] ">Каталог:</div>
                                <div className="sotl-item-value">Warface/Аккаунты</div>
                            </div>
                        </div>
                        <div className="flex gap-3 flex-wrap">
                            <div className="sotl-item-block flex items-center gap-1 pr-3 border-r border-solid border-[#DBE0ED]">
                                <div className="sotl-item-label text-[#969BA5] ">Описание:</div>
                                <div className="sotl-item-value whitespace-nowrap text-ellipsis w-[65%] overflow-hidden">Помогите набить 500 test</div>
                            </div>
                            <div className="sotl-item-block flex items-center gap-1 pr-3 border-r border-solid border-[#DBE0ED]">
                                <div className="sotl-item-label text-[#969BA5] ">Фильтры:</div>
                                <div className="sotl-item-value">Добавлены</div>
                            </div>
                            <div className="sotl-item-block flex items-center gap-1 ">
                                <div className="sotl-item-label text-[#969BA5] ">Цена:</div>
                                <div className="sotl-item-value">от 675 до 1345</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LayoutBtn />
        </div>  
       
    );
}

export default OrderTable;

