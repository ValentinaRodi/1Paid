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
import TimerCircle from '../timerСircle/TimerCircle';

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
        <div id="prsl" className="prsl rounded-md min-h-[100px] flex justify-between items-center mt-1 min-[640px]:mt-6 min-[1200px]:mt-0 mb-8">
            <Swiper
                loop={true}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                pagination={{clickable: true}}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                modules={[Navigation, Pagination, Autoplay]}
                speed={800}
                spaceBetween={30}
                className='min-h-[100px]'
                style={{
                    "--swiper-pagination-bullet-horizontal-gap": "20px",
                    "--swiper-pagination-color": "#fff",
                    "--swiper-pagination-bullet-size": "10px",
                    "--swiper-pagination-bullet-inactive-color": "#fff",
                    "--swiper-pagination-bullet-height": "10px",
                    "--swiper-pagination-bullet-width": "10px",
                    "--swiper-pagination-bottom": "5px",
                    "padding" : "16px 0",
                }}
            >
                {
                    (components.length !== 0) ? (
                        components.map((component, index) => (
                            <SwiperSlide className="w-full h-full " key={uuid()}>
                                <div className="p-x-4 w-full flex items-center justify-between gap-4 max-[1375px]:flex-wrap max-[1375px]:justify-center">
                                    <div className="flex justify-center items-center gap-4 ">
                                        <div className="prsl-item-award-pic w-[180px] flex justify-center items-center max-[640px]:w-[100px] ">
                                            <img className="w-full" src="/img/raffle.161f3412.png" alt="raffle"/>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex-shrink-0 w-16 h-16 flex justify-center items-center ">
                                                <img className="w-full h-full" src="/img/icon-game-rank.svg" alt="award"/>
                                            </div>
                                            <div className="">
                                                <div className=" font-secondary-bold text-xs text-white sm:text-base">Аккаунт Warface</div>
                                                <div className="mt-0 xl:mt-1.5 font-secondary-bold text-[10px] text-white/40 sm:text-sm">25 Ранг</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end items-center gap-x-4 ">
                                        <div className="timer flex items-center gap-1">
                                            <TimerCircle timeNumber='24' timeString='часа' imgCircle='icon-circle-progress.svg'/>
                                            <TimerCircle timeNumber='44' timeString='минуты' imgCircle='icon-circle-progress.svg'/>
                                            <TimerCircle timeNumber='05' timeString='секунд' imgCircle='icon-circle-progress-3.svg'/>
                                        </div>
                                        <button onClick={joinGiveAway} className="btn flex justify-center items-center btn-primary rounded h-9 font-secondary-med text-[10px] text-white sm:text-[15px] sm:h-10 w-28 sm:w-[160px] 2xl:w-[186px]">Присоединиться</button>
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
