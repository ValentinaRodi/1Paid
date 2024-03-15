import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';

function Guarantees() {

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full">
                <div className="sgr mt-5">
                    <section className="sgr-section">
                        <div className="sh flex justify-between items-center gap-x-3  mb-6">
                            <div className="w-[252px] hidden">
                                <img src="/img/icon-btn-13.svg" alt="btn-icon" className=""/>
                            </div>
                            <div className="sh-title ">
                                <div >
                                    <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Гарантии</h2>
                                    <div className="sh-title-line mt-2 rounded-full w-9 h-1 bg-gradient-primary"></div>
                                </div>
                            </div>
                        </div>
                        <div className="sgr-grid grid gap-3 grid-cols-3 ">
                            <div className="ic1 rounded-lg p-6 bg-white ">
                                <div className="ic1-icon-wrap">
                                    <div className="ic1-icon w-12 h-12 flex items-center justify-center  rounded-full border-[2px] border-solid border-[#E2E5F4] ">
                                        <img className="max-w-[50%]" src="/img/icon-lightning-primary.5efe4c7b.svg" alt="picture"/>
                                    </div>
                                </div>
                                <div className="ic1-title font-secondary-bold text-sm text-black">Моментально</div>
                                <div className="ic1-desc font-secondary-med text-xs text-[#A6B1C7]">Вы получите свой товар моментально, сразу после успешной оплаты.</div>
                            </div>
                            <div className="ic1 rounded-lg p-6 bg-white ">
                                <div className="ic1-icon-wrap">
                                    <div className="ic1-icon w-12 h-12 flex items-center justify-center  rounded-full border-[2px] border-solid border-[#E2E5F4] ">
                                        <img className="max-w-[50%]" src="/img/icon-lock-primary.1be6e59a.svg" alt="picture"/>
                                    </div>
                                </div>
                                <div className="ic1-title font-secondary-bold text-sm text-black">Безопасно</div>
                                <div className="ic1-desc font-secondary-med text-xs text-[#A6B1C7]">Полученные нами данные о вас остаются конфиденциальны.</div>
                            </div>
                            <div className="ic1 rounded-lg p-6 bg-white ">
                                <div className="ic1-icon-wrap">
                                    <div className="ic1-icon w-12 h-12 flex items-center justify-center  rounded-full border-[2px] border-solid border-[#E2E5F4] ">
                                        <img className="max-w-[50%]" src="/img/icon-check-primary.05bcc017.svg" alt="picture"/>
                                    </div>
                                </div>
                                <div className="ic1-title font-secondary-bold text-sm text-black">Качественно</div>
                                <div className="ic1-desc font-secondary-med text-xs text-[#A6B1C7]">Мы предлагаем качественный и удобный сервис для вас</div>
                            </div>
                        </div>
                    </section>
                    <section className="sgr-section mt-11">
                        <div className="sh flex justify-between items-center gap-x-3  mb-6">
                            <div className="w-[252px] hidden">
                                <img src="/img/icon-btn-13.svg" alt="btn-icon" className=""/>
                            </div>
                            <div className="sh-title ">
                                <div >
                                    <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Все ещё не уверены?</h2>
                                    <div className="sh-title-line mt-2 rounded-full w-9 h-1  bg-gradient-secondary"></div>
                                </div>
                            </div>
                        </div>
                        <div className="sgr-grid grid gap-3 grid-cols-2 ">
                            <div className="ic1 rounded-lg p-6 bg-white ">
                                <div className="ic1-icon-wrap">
                                    <div className="ic1-icon w-12 h-12 flex items-center justify-center rounded-full border-[2px] border-solid border-[#E2E5F4] ">
                                        <img className="max-w-[50%]" src="/img/icon-delivery-secondary.dee57dc4.svg" alt="picture"/>
                                    </div>
                                </div>
                                <div className="ic1-title font-secondary-bold text-sm text-black">Множество поставщиков</div>
                                <div className="ic1-desc font-secondary-med text-xs text-[#A6B1C7]">Сотрудничество с поставщиками увеличивает наш ассортимент и поддерживает рубрику “Случайный аккаунт”</div>
                            </div>
                            <div className="ic1 rounded-lg p-6 bg-white ">
                                <div className="ic1-icon-wrap">
                                    <div className="ic1-icon w-12 h-12 flex items-center justify-center rounded-full border-[2px] border-solid border-[#E2E5F4] ">
                                        <img className="max-w-[50%]" src="/img/icon-headphones-secondary.a7c30ce4.svg" alt="picture"/>
                                    </div>
                                </div>
                                <div className="ic1-title font-secondary-bold text-sm text-black">Техническая поддержка</div>
                                <div className="ic1-desc font-secondary-med text-xs text-[#A6B1C7]">У нас работает квалифицированная техническая поддержка, которая оперативно ответит на все ваши вопросы.</div>
                            </div>
                            <div className="ic1 rounded-lg p-6 bg-white ">
                                <div className="ic1-icon-wrap">
                                    <div className="ic1-icon w-12 h-12 flex items-center justify-center  rounded-full border-[2px] border-solid border-[#E2E5F4] ">
                                        <img className="max-w-[50%]" src="/img/icon-like-secondary.c45a0825.svg" alt="picture"/>
                                    </div>
                                </div>
                                <div className="ic1-title font-secondary-bold text-sm text-black">Безопасная сделка</div>
                                <div className="ic1-desc font-secondary-med text-xs text-[#A6B1C7]">При возникновений проблем и спорных ситуаций всегда принимается справедливое решение. Мы несем ответсвенность за безопасность вашей сделки.</div>
                            </div>
                            <div className="ic1 rounded-lg p-6 bg-white ">
                                <div className="ic1-icon-wrap">
                                    <div className="ic1-icon w-12 h-12 flex items-center justify-center rounded-full border-[2px] border-solid border-[#E2E5F4] ">
                                        <img className="max-w-[50%]" src="/img/icon-wallet-secondary.50c98ee7.svg" alt="picture"/>
                                    </div>
                                </div>
                                <div className="ic1-title font-secondary-bold text-sm text-black">Многообразие оплаты</div>
                                <div className="ic1-desc font-secondary-med text-xs text-[#A6B1C7]">Мы поддерживаем множество способов оплаты, в том числе и зарубежные переводы.</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <LayoutBtn toTop='true'/>
        </div>
    );
};

export default Guarantees;