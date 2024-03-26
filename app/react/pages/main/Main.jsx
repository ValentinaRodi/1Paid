import CardsGame from '../../components/cardsGame/CardsGame';
import Prsl from '../../components/prsl/Prsl';
import LayoutBtn from '../../components/LayoutBtn';
import { useState, useEffect, useRef } from 'react';
import Title from '../../components/title/Title';

function Main() {

    useEffect(() => {
        const headerHeight = document.querySelector('.layout-h').getBoundingClientRect().height;
        const mainHeight = document.querySelector('.layout-main').getBoundingClientRect().height;
        const totalHeight = headerHeight + mainHeight;
        document.querySelector('.lf-feed').style.height = totalHeight + "px";
    }, []);

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className='w-full layout-main'>
                <Prsl />
                <Title title='Выбор игры' search='true'/>
                <CardsGame />
            </div>
            <LayoutBtn toTop='true'/>
        </div>  
          
    );
}

export default Main;
