import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import CardGame from "../../components/cardGame/CardGame";
import CardGameString from "../../components/cardGame/CardGameString";
import uuid from 'react-uuid';
import LayoutBtn from '../../components/LayoutBtn';
import Title from '../../components/title/Title';

function HistorySales() {
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
            <div className="w-full layout-main">
                <Title title='Мои закладки' search='true' viewCards='true' changeViewCards={changeViewCards} cardsViewImg={cardsViewImg}/>
                <div className="flex items-start py-4 justify-between rounded-lg bg-white px-6 mb-3">
                    <div id="parent" className="nav-show pt-2 h-full w-full flex items-center justify-start">
                        <nav id="nav" className="nav-item pb-2.5 flex gap-x-6 flex-wrap gap-y-6">
                            <div onClick={clickSales} className={`${(salesClass) ? 'nav-link-prim' : 'nav-link'} cursor-pointer nav-link-tab font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm`}>Мои покупки</div>
                            <div onClick={clickPurchase} className={`${(!salesClass) ? 'nav-link-prim' : 'nav-link'} cursor-pointer nav-link-tab font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm`}>Мои продажи</div>
                        </nav>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className="pcg w-full">
                        <div className={`${cardsViewDiv} pcg-grid view-grid grid gap-3 grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3`}>
                            {
                                (cardView) ? 
                                    (cardsSales.length !== 0 && cardsSales.items !== undefined) ?    
                                        cardsSales.items.map((card) => {
                                            return (cardsView) ? 
                                                <CardGame key={uuid()} new={card.new} rank={card.rank} id={card.id} seoName={card.seo_name} icon='product-preview-1.fcb96f91.png' name={card.name} description={card.description} price={card.price}/> 
                                            : 
                                                <CardGameString key={uuid()} rank={card.rank} id='1' new={card.new} seoName={card.seo_name} icon='product-preview-1.fcb96f91.png' name={card.name} description={card.description} price={card.price}/>  
                                            }
                                        ) 
                                    : <div className='text-[#FF5343]'>not found</div>
                                : 
                                    (cardsPurchase.length !== 0 && cardsPurchase.items !== undefined) ?    
                                        cardsSales.items.map((card) => {
                                            return (cardsView) ? 
                                                <CardGame key={uuid()} new='1' rank={card.rank} id={card.id} seoName={card.seo_name} icon='product-preview-1.fcb96f91.png' name={card.name} description={card.description} price={card.price}/> 
                                            : 
                                                <CardGameString key={uuid()} rank={card.rank} id='1' new={card.new} seoName={card.seo_name} icon='product-preview-1.fcb96f91.png' name={card.name} description={card.description} price={card.price}/>  
                                            }
                                        ) 
                                    : <div className='text-[#FF5343]'>not found</div>
                            }
                        </div>
                        {(!btn) ? null :
                            <div className="hidden sgc-f flex justify-center mt-10 ">
                                <button className="sgc-btn-more rounded-full h-[60px] flex items-center justify-center px-12 bg-[#E3E9F5] duration-200 hover:bg-[#d3d7e0]">
                                    <div className="btn-text font-secondary-bold text-base text-[#B9C3D6]">Показать еще 25</div>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <LayoutBtn toTop='true'/>
        </div>  
       
    );
}

export default HistorySales;

