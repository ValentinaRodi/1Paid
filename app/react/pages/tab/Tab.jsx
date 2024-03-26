import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import LayoutBtn from '../../components/LayoutBtn';
import CardGame from "../../components/cardGame/CardGame";
import CardGameString from "../../components/cardGame/CardGameString";
import Title from '../../components/title/Title';
import Pagination from '../../components/pagination/Pagination'

function Tab() {
    const [btn, setBtn] = useState(true);
    const [cardsView, setCardsView] = useState(true);
    const [cardsViewImg, setCardsViewImg] = useState('/img/icon-cards-stroke.svg');
    const [cardsViewDiv, setCardsViewDiv] = useState('');

    const changeViewCards = () => {
        (cardsView) ? setCardsView(false) : setCardsView(true);
        (cardsViewImg === '/img/icon-card-tile.svg') ? setCardsViewImg('/img/icon-cards-stroke.svg') : setCardsViewImg('/img/icon-card-tile.svg');
        (cardsViewDiv === '') ? setCardsViewDiv('_view-list') : setCardsViewDiv(''); 
    };

    useEffect(() => {
        const headerHeight = document.querySelector('.layout-h').getBoundingClientRect().height;
        const mainHeight = document.querySelector('.layout-main').getBoundingClientRect().height;
        const totalHeight = headerHeight + mainHeight;
        document.querySelector('.lf-feed').style.height = totalHeight + "px";
    }, []);

    const arr = [0,1,2,3,4,5,6,7]

    return (
        
        <div className="layout-b pb-4 min-w-0 flex flex-wrap content-between">
            <div className="w-full layout-main">
                <Title title='Мои закладки' search='true' viewCards='true' changeViewCards={changeViewCards} cardsViewImg={cardsViewImg}/>
                <div className='flex gap-2'>
                    <div className="pcg w-full">
                        <div className={`${cardsViewDiv} pcg-grid view-grid grid gap-3 grid-cols-1 min-[523px]:grid-cols-2 md:grid-cols-3 min-[1490px]:grid-cols-4 2xl:grid-cols-4`}>
                            {
                                arr.length !== 0 ? 
                                    arr.map((card) => {
                                        return (cardsView ? 
                                            <CardGame key={uuid()} rank='4.8' id='1' new='1' seoName='Makmilan Gr-23' icon='product-preview-1.fcb96f91.png' name='Makmilan Gr-23' description='Оружие в идеальном состоянии, прямо из завода.' price='120.00'/> 
                                        : 
                                            <CardGameString key={uuid()} rank='4.8' id='1' new='1' seoName='Makmilan Gr-23' icon='product-preview-1.fcb96f91.png' name='Makmilan Gr-23' description='Оружие в идеальном состоянии, прямо из завода.' price='120.00'/> 
                                        )
                                    }) 
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
                <Pagination />
            </div>
            <LayoutBtn toTop='true'/>
        </div>  
       
    );
}

export default Tab;

