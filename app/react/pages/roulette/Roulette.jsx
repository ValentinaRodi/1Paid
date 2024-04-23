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
import Title from '../../components/title/Title';
import ModalRoulette from "../../components/modalRoulette/ModalRoulette";

function Roulette() {
    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const body = document.querySelector('body');
    const [rouletteTape, setMRouletteTape] = useState(true);
    const [rouletteCards, setRouletteCards] = useState(false);
    const [rouletteDrum, setRouletteDrum] = useState(false);
    const [mark, setMark] = useState(true);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    //Выбор карточек
    const clickCard = (index) => {
        setSelectedCardIndex(index);
    };

    //Закрытие модального окна
    const closeModal = () =>{
        body.style.overflow = 'auto';
        setModalOpen(false);
        setModalEl('');
        setSelectedCardIndex(null)
    };

    const openModalRoulette = () => {
        body.style.overflow = 'hidden';
        setModalEl(<ModalRoulette
            closeModal={closeModal}
        />);
        setModalOpen(true);
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

    const clickNav = (item) => {
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

    const clickMark = () => {
        setMark(!mark);
    };

    const navArr =['лента', 'карточки', 'барабан'];

    const arrRoulet = [50,100,150,500,1000,10,70,25,10,50,100,1000,1500,5000,140,150,160,17,180,19,20];
    const arrRouletExamplу = [50,100,20,150,1000,1500,10,80,40,100];



//     const images = ["image1.png", "image2.png", "image3.png", "image4.png", "image5.png", "image6.png", "image7.png"];
    
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const spinDuration = 5000; // 5 seconds

//   const spinRoulette = () => {
//     setIsSpinning(true);

//     const randomIndex = Math.floor(Math.random() * images.length);

//     const spinInterval = setInterval(() => {
//       const newRandomIndex = Math.floor(Math.random() * images.length);
//       setSelectedImage(images[newRandomIndex]);
//     }, 100);

//     setTimeout(() => {
//       clearInterval(spinInterval);
//       setIsSpinning(false);
//       setSelectedImage(images[randomIndex]);
//     }, spinDuration);

//   };

//   useEffect(() => {
//     if (!isSpinning && selectedImage) {
//       setTimeout(() => {
//         // Действие после остановки рулетки
//       }, 2000);
//     }
//   }, [isSpinning, selectedImage]);


    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0 mt-10">
            <div className="w-full layout-main">
                <div className="w-full flex flex-col items-center">
                    <Title title='Кейс DG'/>
                    <Navigation clickNav={clickNav} navArr={navArr}/>
                    <div className="scd-main flex flex-col items-center w-full gap-3">
                        {rouletteTape ? <RouletteTape arrRoulet={arrRoulet} /> : null}
                        {rouletteCards ? <RouletteCards arrRoulet={arrRoulet} selectedCardIndex={selectedCardIndex} clickCard={clickCard}/> : null}
                        {rouletteDrum ? <RouletteDrum arrRoulet={arrRoulet}/> : null}
                    </div>
                    <div className="scd-actions flex items-center flex-wrap sm:flex-nowrap gap-2 mt-3 justify-center ml-0 sm:ml-[142px]">
                        <button onClick={openModalRoulette} className="scd-btn font-secondary-bold text-xs md:text-sm bg-btn_light-green text-[#7FB145] rounded-full py-3 md:py-5 px-6 md:px-8 ">Демо</button>
                        <button onClick={openModalRoulette} className="scd-btn btn font-secondary-bold text-xs md:text-sm text-white bg-gradient-secondary rounded-full py-3 md:py-5 px-6 md:px-8 ">{rouletteCards ? 'Открыть' :'Крутить'} за 149₽</button>
                        <button onClick={clickMark} className="scd-btn flex items-center justify-center text-black gap-2 border border-solid font-bold border-[#C0C2DC59] rounded-full py-3 md:py-5 px-6 md:px-8 ">
                            <div className="cm-f-bar-item-label font-secondary-bold text-xs md:text-sm">{rouletteCards ? 'Открыть' :'Крутить'} за баллы</div>
                            <div className={`${mark ? 'bg-[#375BEF]' : 'bg-[#B2B9D1]'} cm-f-bar-item-icon w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center`}>
                                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.55487 1.66581L8.55488 1.6658C8.68181 1.5449 8.74805 1.38907 8.74805 1.21399C8.74805 1.03943 8.68408 0.882264 8.55639 0.760645C8.42942 0.639681 8.2704 0.583069 8.09809 0.583069C7.92539 0.583069 7.76773 0.641779 7.64136 0.762083L7.64125 0.762183L3.29812 4.90139L1.35486 3.04803L1.35478 3.04794C1.22835 2.92747 1.07062 2.86886 0.897999 2.86886C0.725657 2.86886 0.566641 2.92549 0.439654 3.04643C0.311904 3.1681 0.248047 3.3253 0.248047 3.49977C0.248047 3.67478 0.314258 3.83065 0.441205 3.95157L0.441216 3.95158L2.84126 6.23735C2.84127 6.23735 2.84127 6.23735 2.84127 6.23736C2.96765 6.35773 3.12541 6.4164 3.29806 6.4164C3.47066 6.4164 3.62841 6.35773 3.7548 6.23734L8.55487 1.66581Z" fill="white" stroke="white" strokeWidth="0.5"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className="w-full mt-4 md:mt-6">
                        <Title title='Что можно выиграть?'/>
                        <div className="scd-list flex items-center justify-center bg-white rounded-2xl p-4 md:p-6 gap-2">
                            {
                                (arrRouletExamplу.length !== 0) ? (
                                    arrRouletExamplу.map((item, index) => {
                                        if(index < 6) {
                                            if(index > 3) {
                                                return (
                                                    <div key={uuid()} className="scd-item min-w-16 hidden sm:flex flex-col px-2 pt-2 pb-3 border border-black/20 rounded-[12px] gap-2">
                                                        <div className="scd-image shrink md:flex-shrink-0 ">
                                                            <img className="scd-image-pic w-full h-full object-cover" src="/img/case-item.d663c019.png" alt="user"/></div>
                                                        <div className="scd-item-info flex flex-col">
                                                            <div className="scd-item-label font-secondary-bold text-black text-[11px] md:text-[13px]">PD</div>
                                                            <div className="scd-item-description font-secondary-med text-[10px] md:text-xs text-[#A6B1C7]">{item}</div>
                                                        </div>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div key={uuid()} className="scd-item min-w-16 flex flex-col px-2 pt-2 pb-3 border border-black/20 rounded-[12px] gap-2">
                                                        <div className="scd-image shrink md:flex-shrink-0 ">
                                                            <img className="scd-image-pic w-full h-full object-cover" src="/img/case-item.d663c019.png" alt="user"/></div>
                                                        <div className="scd-item-info flex flex-col">
                                                            <div className="scd-item-label font-secondary-bold text-black text-[11px] md:text-[13px]">PD</div>
                                                            <div className="scd-item-description font-secondary-med text-[10px] md:text-xs text-[#A6B1C7]">{item}</div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        }
                                    })
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