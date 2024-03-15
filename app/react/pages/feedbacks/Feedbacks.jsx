import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import { Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';

function Feedbacks() {
    const navigate = useNavigate();
    const goMain = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full">
                <div className="sfb ">
                    <div className="sh flex justify-between items-center gap-x-3 ">
                        <div className="w-[252px] hidden">
                            <img src="/img/icon-btn-13.svg" alt="btn-icon" className=""/>
                        </div>
                        <div className="sh-title ">
                            <div >
                                <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Отзывы</h2>
                                <div className="sh-title-line mt-2 rounded-full w-9 h-1 bg-gradient-primary"></div>
                            </div>
                        </div>
                    </div>
                    <div className="sfb-total font-secondary-bold text-lg text-black/20 ">Количество отзывов:  753</div>
                    <div className="sfb-inner mt-4 flex gap-3 ">
                        <div className="sfb-feed flex-grow grid grid-cols-1 gap-3">
                            <div className="fbc rounded-xl p-6 flex items-start gap-4 bg-white ">
                                <div className="fbc-info flex-shrink-0 flex gap-3 ">
                                    <div className="fbc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden ">
                                        <img className="fbc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user"/>
                                    </div>
                                    <div className="fbc-info-inner">
                                        <div className="fbc-username font-secondary-bold text-lg text-[#1D222C]  ">Sansa</div>
                                        <div className="fbc-date font-secondary-med text-xs text-[#CDCFE5] ">01:05 27.12.2019</div>
                                    </div>
                                </div>
                                <div className="fbc-text h-full h-full flex-grow border-l border-solid border-[#E7EAF3] pl-4 font-secondary-med text-[10px] text-[#595E72]  ">Я очень доволен магазином игр, который я недавно посетил. Здесь я нашел огромный выбор игр для всех платформ, включая последние релизы. Цены были весьма конкурентными, а персонал оказался очень дружелюбным и помог мне выбрать игру, которая мне подходит. Я также был приятно удивлен быстрой доставкой моего заказа, который я получил уже на следующий день после покупки. В целом, мне очень понравился этот магазин игр и я бы порекомендовал его всем любителям видеоигр. Я очень доволен магазином игр, который я недавно посетил. Здесь я нашел огромный выбор игр для всех платформ, включая последние релизы. Цены были весьма конкурентными, а персонал оказался очень дружелюбным и помог мне выбрать игру, которая мне подходит. Я также был приятно удивлен быстрой доставкой моего заказа, который я получил уже на следующий день после покупки. В целом, мне очень понравился этот магазин игр и я бы порекомендовал его всем любителям видеоигр.</div>
                            </div>
                            <div className="fbc rounded-xl p-6 flex items-start gap-4 bg-white ">
                                <div className="fbc-info flex-shrink-0 flex gap-3 ">
                                    <div className="fbc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden ">
                                        <img className="fbc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user"/>
                                    </div>
                                    <div className="fbc-info-inner">
                                        <div className="fbc-username font-secondary-bold text-lg text-[#1D222C] ">Sansa</div>
                                        <div className="fbc-date font-secondary-med text-xs text-[#CDCFE5] ">01:05 27.12.2019</div>
                                    </div>
                                </div>
                                <div className="fbc-text h-full flex-grow border-l border-solid border-[#E7EAF3] pl-4 font-secondary-med text-[10px] text-[#595E72] ">Я очень доволен магазином игр, который я недавно посетил.</div>
                            </div>
                            <div className="fbc rounded-xl p-6 flex items-start gap-4 bg-white ">
                                <div className="fbc-info flex-shrink-0 flex gap-3 ">
                                    <div className="fbc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden ">
                                        <img className="fbc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user"/>
                                    </div>
                                    <div className="fbc-info-inner">
                                        <div className="fbc-username font-secondary-bold text-lg text-[#1D222C] ">Sansa</div>
                                        <div className="fbc-date font-secondary-med text-xs text-[#CDCFE5] ">01:05 27.12.2019</div>
                                    </div>
                                </div>
                                <div className="fbc-text h-full flex-grow border-l border-solid border-[#E7EAF3] pl-4 font-secondary-med text-[10px] text-[#595E72] ">Я очень доволен магазином игр, который я недавно посетил. Здесь я нашел огромный выбор игр для всех платформ, включая последние релизы. Цены были весьма конкурентными, а персонал оказался очень дружелюбным и помог мне выбрать игру, которая мне подходит. Я также был приятно удивлен быстрой доставкой моего заказа, который я получил уже на следующий день после покупки. В целом, мне очень понравился этот магазин игр и я бы порекомендовал его всем любителям видеоигр. Я очень доволен магазином игр, который я недавно посетил. Здесь я нашел огромный выбор игр для всех платформ, включая последние релизы. Цены были весьма конкурентными, а персонал оказался очень дружелюбным и помог мне выбрать игру, которая мне подходит. Я также был приятно удивлен быстрой доставкой моего заказа, который я получил уже на следующий день после покупки. В целом, мне очень понравился этот магазин игр и я бы порекомендовал его всем любителям видеоигр.</div>
                            </div>
                            <div className="fbc rounded-xl p-6 flex items-start gap-4 bg-white ">
                                <div className="fbc-info flex-shrink-0 flex gap-3">
                                    <div className="fbc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden ">
                                        <img className="fbc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user"/>
                                    </div>
                                    <div className="fbc-info-inner">
                                        <div className="fbc-username font-secondary-bold text-lg text-[#1D222C] ">Sansa</div>
                                        <div className="fbc-date font-secondary-med text-xs text-[#CDCFE5]">01:05 27.12.2019</div>
                                    </div>
                                </div>
                                <div className="fbc-text h-full flex-grow border-l border-solid border-[#E7EAF3] pl-4 font-secondary-med text-[10px] text-[#595E72]">Я очень доволен магазином игр, который я недавно посетил. Здесь я нашел огромный выбор игр для всех платформ, включая последние релизы. Цены были весьма конкурентными, а персонал оказался очень дружелюбным и помог мне выбрать игру, которая мне подходит.</div>
                            </div>
                            <div className="fbc rounded-xl p-6 flex items-start gap-4 bg-white ">
                                <div className="fbc-info flex-shrink-0 flex gap-3 ">
                                    <div className="fbc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden ">
                                        <img className="fbc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user"/>
                                    </div>
                                    <div className="fbc-info-inner">
                                        <div className="fbc-username font-secondary-bold text-lg text-[#1D222C] ">Sansa</div>
                                        <div className="fbc-date font-secondary-med text-xs text-[#CDCFE5]">01:05 27.12.2019</div>
                                    </div>
                                </div>
                                <div className="fbc-text h-full flex-grow border-l border-solid border-[#E7EAF3] pl-4 font-secondary-med text-[10px] text-[#595E72]">Я очень доволен магазином игр, который я недавно посетил. Здесь я нашел огромный выбор игр для всех платформ, включая последние релизы. Цены были весьма конкурентными, а персонал оказался очень дружелюбным и помог мне выбрать игру, которая мне подходит. Я также был приятно удивлен быстрой доставкой моего заказа, который я получил уже на следующий день после покупки. В целом, мне очень понравился этот магазин игр и я бы порекомендовал его всем любителям видеоигр. Я очень доволен магазином игр, который я недавно посетил. Здесь я нашел огромный выбор игр для всех платформ, включая последние релизы. Цены были весьма конкурентными, а персонал оказался очень дружелюбным и помог мне выбрать игру, которая мне подходит. Я также был приятно удивлен быстрой доставкой моего заказа, который я получил уже на следующий день после покупки. В целом, мне очень понравился этот магазин игр и я бы порекомендовал его всем любителям видеоигр.</div>
                            </div>
                            <div className="fbc rounded-xl p-6 flex items-start gap-4 bg-white">
                                <div className="fbc-info flex-shrink-0 flex gap-3 ">
                                    <div className="fbc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden ">
                                        <img className="fbc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user"/>
                                    </div>
                                    <div className="fbc-info-inner">
                                        <div className="fbc-username font-secondary-bold text-lg text-[#1D222C]">Sansa</div>
                                        <div className="fbc-date font-secondary-med text-xs text-[#CDCFE5]">01:05 27.12.2019</div>
                                    </div>
                                </div>
                                <div className="fbc-text h-full flex-grow border-l border-solid border-[#E7EAF3] pl-4 font-secondary-med text-[10px] text-[#595E72]">Я очень доволен магазином игр, который я недавно посетил. Здесь я нашел огромный выбор игр для всех платформ, включая последние релизы. Цены были весьма конкурентными, а персонал оказался очень дружелюбным и помог мне выбрать игру, которая мне подходит. Я также был приятно удивлен быстрой доставкой моего заказа, который я получил уже на следующий день после покупки. В целом, мне очень понравился этот магазин игр и я бы порекомендовал его всем любителям видеоигр. Я очень доволен магазином игр, который я недавно посетил. Здесь я нашел огромный выбор игр для всех платформ, включая последние релизы. Цены были весьма конкурентными, а персонал оказался очень дружелюбным и помог мне выбрать игру, которая мне подходит. Я также был приятно удивлен быстрой доставкой моего заказа, который я получил уже на следующий день после покупки. В целом, мне очень понравился этот магазин игр и я бы порекомендовал его всем любителям видеоигр.</div>
                            </div>
                        </div>
                        <div className="sfb-inner-form flex-shrink-0 w-[317px]">
                            <div className="sfb-form sticky top-3 rounded-lg p-6 bg-white w-full">
                                <div className="sfb-form-h border-b border-solid border-[#E9EAF4] pb-3 flex justify-between items-center gap-2">
                                    <div className="sfb-form-title font-secondary-bold text-lg text-black">Оставить отзыв</div>
                                    <div className="sfb-btn-close flex-shrink-0 w-4 h-4 [&amp;_svg]:w-[100%] [&amp;_svg]:h-[100%] text-[#D6D9EA] cursor-pointer hidden">
                                        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.424023 17.576C-0.0462888 17.1028 -0.0462888 16.3387 0.424023 15.8656L15.8656 0.424038C16.1621 0.0778742 16.6275 -0.0729097 17.0706 0.0336795C17.5137 0.140269 17.8597 0.486241 17.9663 0.929353C18.0729 1.37247 17.9221 1.83793 17.5759 2.13438L2.13436 17.576C1.66124 18.0463 0.897141 18.0463 0.424023 17.576Z" fill="currentColor"></path>
                                        <path d="M0.424023 0.424023C0.897141 -0.0462888 1.66124 -0.0462888 2.13436 0.424023L17.5759 15.8656C17.9221 16.1621 18.0729 16.6275 17.9663 17.0706C17.8597 17.5137 17.5137 17.8597 17.0706 17.9663C16.6275 18.0729 16.1621 17.9221 15.8656 17.5759L0.424023 2.13436C-0.0462888 1.66124 -0.0462888 0.897141 0.424023 0.424023Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="sfb-form-b mt-3">
                                    <div className="sfb-form-text font-secondary-med text-xs text-[#B4BAD2]">Чтоб оставить отзыв нужно быть зарегистрированным более месяца или продать и купить товар на сумму более 5000₽</div>
                                </div>
                                <div className="sfb-form-f mt-8">
                                    <button onClick={goMain} className="btn btn-secondary rounded w-full h-11 justify-center gap-2 text-white">
                                        <div className="btn-icon w-4 h-4 [&amp;_svg]:w-[100%] [&amp;_svg]:h-[100%]">
                                            <img src='/img/icon-basket.svg' alt='basket'/>
                                        </div>
                                        <div className="btn-text font-secondary-bold text-sm text-white">Перейти в маркет</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="sfb-btn-open btn btn-secondary rounded h-11 justify-center">
                            <div className="btn-text font-secondary-bold text-sm text-white">Написать отзыв</div>
                        </div>
                    </div>
                    <div className="pag mt-6 flex justify-center items-center gap-2 ">
                        <Link className="pag-arrow mr-4 " href="#">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 6L9.70711 11.2929C9.31658 11.6834 9.31658 12.3166 9.70711 12.7071L15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                            </svg>
                        </Link>
                        <Link className="pag-item" href="#">1</Link>
                        <Link className="pag-item" href="#">2</Link>
                        <Link className="pag-item" href="#">3</Link>
                        <Link className="pag-item _active" href="#">443</Link>
                        <Link className="pag-arrow ml-4 " href="#">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L14.2929 11.2929C14.6834 11.6834 14.6834 12.3166 14.2929 12.7071L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <LayoutBtn />
        </div>
    );
};

export default Feedbacks;