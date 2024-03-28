import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import LayoutBtn from '../../components/LayoutBtn';
import ModalOrder from "../../components/modalOrder/ModalOrder";
import Order from "../../components/orderTable/Order"; 
import Market from "../../components/orderTable/Market";
import Navigation from '../../components/navigation/Navigation';
import uuid from 'react-uuid';
import RouletteTape from "../../components/rouletteItems/RouletteTape";
import RouletteCards from "../../components/rouletteItems/RouletteCards";
import RouletteDrum from "../../components/rouletteItems/RouletteDrum";

function Roulette() {
    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const body = document.querySelector('body');
    const [rouletteTape, setMRouletteTape] = useState(true);
    const [rouletteCards, setRouletteCards] = useState(false);
    const [rouletteDrum, setRouletteDrum] = useState(false);

    //Закрытие модального окна
    const closeModal = () =>{
        body.style.overflow = 'auto';
        setModalOpen(false);
        setModalEl('');
    };

    //Открытие модального окна
    useEffect(() => {
        const modal = document.getElementById('modal');

        if(modalOpen) {
            modal.classList.add('modal');
            modal.textContent = '';
            
            const containerModal = document.createElement("div");
            const root = createRoot(containerModal);
            root.render(modalEl);
            modal.appendChild(containerModal);   
        };
        if(!modalOpen) {
            modal.classList.remove('modal');
            modal.textContent = '';
        };
        
    }, [modalEl]);

    const clickRoulette = (item) => {
        if(item === 0) {
            setMRouletteTape(true);
            setRouletteCards(false);
            setRouletteDrum(false);
        };

        if(item === 1) {
            setMRouletteTape(false);
            setRouletteCards(true);
            setRouletteDrum(false);
        };

        if(item === 2) {
            setMRouletteTape(false);
            setRouletteCards(false);
            setRouletteDrum(true);
        };
    };

    

    const navArr =['лента', 'карточки', 'барабан'];

    const arrRoulet = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const arrRouletExamplу = [0,1,2,3,4,5];

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0 mt-10">
            <div className="w-full layout-main">
                <div className="w-full mb-[68px]">
                    <div className="sh flex justify-between items-center gap-x-3 mb-10">
                        <div className="flex flex-col justify-start">
                            <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Кейс DG</h2>
                            <div className="sh-title-line mt-2 rounded-full w-9 h-1 2md:mt-2 bg-gradient-primary"></div>
                        </div>
                    </div>
                    <Navigation clickRoulette={clickRoulette} navArr={navArr}/>
                    <div className="scd-main flex flex-col items-center w-full gap-3">
                        {rouletteTape ? <RouletteTape arrRoulet={arrRoulet}/> : null}
                        {rouletteCards ? <RouletteCards arrRoulet={arrRoulet}/> : null}
                        {rouletteDrum ? <RouletteDrum arrRoulet={arrRoulet}/> : null}
                    </div>
                    <div className="scd-actions flex items-center gap-2 mt-3 justify-center ml-[11%]">
                        <button className="scd-btn font-secondary-bold text-sm bg-btn_light-green text-[#7FB145] rounded-full py-5 px-8 min-w-[92px]">Демо</button>
                        <button className="scd-btn btn font-secondary-bold text-sm text-white bg-gradient-secondary rounded-full py-5 px-8 min-w-[184px]">Крутить за 149₽</button>
                        <button className="scd-btn flex text-black gap-2 border border-solid font-bold border-[#C0C2DC59] rounded-full py-5 px-8 min-w-[144px]">
                            <div className="cm-f-bar-item-label font-secondary-bold text-sm">Крутить за баллы</div>
                            <div className="cm-f-bar-item-icon w-5 h-5">
                                <img className="w-full h-full" src='/img/icon-arrow-up.png' alt='arrow'/>
                            </div>
                        </button>
                    </div>
                    <div className="w-full mt-[68px]">
                        <div className="sh flex justify-between items-center gap-x-3 mb-11">
                            <div className="flex flex-col justify-start">
                                <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Что можно выиграть?</h2>
                                <div className="sh-title-line mt-2 rounded-full w-9 h-1 2md:mt-2 bg-gradient-primary"></div>
                            </div>
                        </div>
                        <div className="scd-list flex items-center justify-center bg-white rounded-2xl py-6 gap-2">
                            {
                                (arrRouletExamplу.length !== 0) ? (
                                    arrRouletExamplу.map((item, index) => (
                                        <div key={uuid()} className="scd-item flex flex-col px-2 pt-2 pb-3 border border-black/20 rounded-[12px] gap-2">
                                            <div className="scd-image flex-shrink-0 ">
                                                <img className="scd-image-pic w-full h-full object-cover" src="/img/case-item.d663c019.png" alt="user"/></div>
                                            <div className="scd-item-info flex flex-col">
                                                <div className="scd-item-label font-secondary-bold text-black text-[13px]">Ранг 20</div>
                                                <div className="scd-item-description font-secondary-med text-xs text-[#A6B1C7]">Уровень</div>
                                            </div>
                                        </div>
                                    ))
                                ) : null
                            }
                        </div>    
                    </div>
                </div>
            </div>
            <LayoutBtn />
        </div>  
    );
}

export default Roulette;