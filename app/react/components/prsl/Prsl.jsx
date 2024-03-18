import React, { useRef, useState, useEffect } from 'react';
import uuid from 'react-uuid';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useAuth from '../../hooks/useAuth';
import { useNavigate  } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import Authorisation from '../authorisation/Authorisation';
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

function Prsl() {
    const components = [1,2,3];
    const swiperRef = useRef();
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const body = document.querySelector('body');

    const openAuthorization = () => {
        body.style.overflow = 'hidden';
        setModalEl(<Authorisation
            closeModal={closeModal}
        />);
        setModalOpen(true);
    };

    const closeModal = () =>{
        body.style.overflow = 'auto';
        setModalOpen(false);
        setModalEl('');
    };


    const joinGiveAway = () => {
        if(!isAuthenticated) {
            openAuthorization();
        } else {
            navigate('/giveaway');
        };
    };

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

    return (
        <div id="prsl" className="prsl rounded-md min-h-[100px] flex justify-between items-center">
            <Swiper
                loop={true}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                pagination={{clickable: true}}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                modules={[Navigation, Pagination, Autoplay]}
                speed={800}
                className='min-h-[100px]'
                style={{
                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                    "--swiper-pagination-color": "#fff",
                    "--swiper-pagination-bullet-size": "10px",
                    "--swiper-pagination-bullet-inactive-color": "#fff",
                    "--swiper-pagination-bullet-height": "10px",
                    "--swiper-pagination-bullet-width": "10px",
                    "--swiper-pagination-bottom": "5px",
                    "padding" : "16px 0"
                }}
            >
                {
                    (components.length !== 0) ? (
                        components.map((component, index) => (
                            <SwiperSlide className="w-full h-full" key={uuid()}>
                                <div className="prsl-item w-full flex items-center justify-between gap-4 flex-wrap 2md:flex-col 2md:gap-2">
                                    <div className="prsl-item-inf flex justify-center items-center gap-6">
                                        <div className="prsl-item-pic w-[180px] flex justify-center items-center ml-6">
                                            <img className="w-full img-r" src="/img/raffle.161f3412.png" alt="raffle"/>
                                        </div>
                                        <div className="prsl-item-award flex items-center gap-2 sm:gap-1">
                                            <div className="prsl-item-award-inf">
                                                <div className="prsl-item-award-title font-secondary-bold text-base text-white">Аккаунт Warface</div>
                                                <div className="prsl-item-award-subtitle mt-1.5 font-secondary-bold text-sm text-white/40">25 Ранг</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="prsl-item-bar flex justify-center items-center gap-4 ">
                                        <button onClick={joinGiveAway} className="flex justify-center items-center prsl-item-btn  btn-primary rounded w-[180px] h-10 justify-center items-center flex font-secondary-med 0text-[15px] text-white" href="#">Присоединиться</button>
                                        <div className="timer flex items-center gap-1">
                                            <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px]">
                                                <div className="circle-progress" data-percent="80" data-measure="67" data-measure-640="44">
                                                    <img src="/img/icon-circle-progress.svg" alt="circle-progress"/>
                                                </div>
                                                <div className="timer-item-inf absolute flex flex-col items-center justify-center  w-full h-full z-[1]">
                                                    <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">24</div>
                                                    <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">часа</div>
                                                </div>
                                            </div>
                                            <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px]">
                                                <div className="circle-progress mt-4" data-percent="60" data-measure="67" data-measure-640="44">
                                                    <img src="/img/icon-circle-progress-2.svg" alt="circle-progress"/>
                                                </div>
                                                <div className="timer-item-inf absolute flex flex-col items-center justify-center  w-full h-full z-[1]">
                                                    <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">44</div>
                                                    <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">минуты</div>
                                                </div>
                                            </div>
                                            <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px]">
                                                <div className="circle-progress" data-percent="5" data-measure="67" data-measure-640="44">
                                                    <img src="/img/icon-circle-progress-3.svg" alt="circle-progress"/>
                                                </div>
                                                <div className="timer-item-inf absolute flex flex-col items-center justify-center  w-full h-full z-[1]">
                                                    <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">05</div>
                                                    <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">секунд</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (<div></div>)
                }
            </Swiper>
            <div className="swiper-pagination"></div>
            <button onClick={() => swiperRef.current?.slidePrev()} className="bg-inherit prsl-btn prsl-btn-prev custom-prev-button">
                <div className="bg-inherit">
                    <img src="/img/icon-btn-icon.svg" alt="btn-icon"/>
                </div>
            </button>
            <button onClick={() => swiperRef.current?.slideNext()} className="bg-inherit prsl-btn prsl-btn-next custom-next-button">
                <div className="bg-inherit">
                    <img src="/img/icon-btn-icon-4.svg" alt="btn-icon"/>
                </div>
            </button>   
        </div> 
    );
}

export default Prsl;
