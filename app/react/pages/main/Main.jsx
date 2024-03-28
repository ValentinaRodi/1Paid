import CardsGame from '../../components/cardsGame/CardsGame';
import Prsl from '../../components/prsl/Prsl';
import LayoutBtn from '../../components/LayoutBtn';
import { useState, useEffect, useRef } from 'react';
import Title from '../../components/title/Title';

function Main() {

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
