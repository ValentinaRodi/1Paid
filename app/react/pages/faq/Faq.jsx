import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';

function Faq() {
    // const [rotate, setRotate] = useState([false, false, false, false, false, false, false]);
    const [isOpenFaq, setIsOpenFaq] = useState([false, false, false, false, false, false, false]);
    
    const toggleFaq = (index) => {
        let newIsOpenFaq = [];

        if(isOpenFaq[index] === true) {
            newIsOpenFaq = [...isOpenFaq];
            newIsOpenFaq[index] = false;
        } else {
            newIsOpenFaq = isOpenFaq.map((item, i) => {
                if(i === index) {
                    return true;
                } else {
                    return false;
                };
            });
        };
        setIsOpenFaq(newIsOpenFaq);
    };

    useEffect(() => {
        const headerHeight = document.querySelector('.layout-h').getBoundingClientRect().height;
        const mainHeight = document.querySelector('.layout-main').getBoundingClientRect().height;
        const totalHeight = headerHeight + mainHeight;
        document.querySelector('.lf-feed').style.height = totalHeight + "px";
    }, []);

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full layout-main">
                <div className="sgr mt-5">
                    <section className="sgr-section">
                        <div className="sh flex justify-between items-center gap-x-3  mb-6">
                            <div className="w-[252px] hidden">
                                <img src="/img/icon-btn-13.svg" alt="btn-icon" className=""/>
                            </div>
                            <div className="sh-title ">
                                <div >
                                    <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Частые вопросы</h2>
                                    <div className="sh-title-line mt-2 rounded-full w-9 h-1 bg-gradient-primary"></div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center gap-2'>
                                <div className="sh-bar flex items-center gap-2 2md:w-full 2md:flex-row-reverse">
                                    <div className="sh-search rounded-full h-[45px] px-6 max-w-[270px] w-full flex items-center bg-[#E8EAF7] 2md:max-w-none 2md:flex-grow 2md:h-10 2md:px-3">
                                        <button className="sh-search-icon cursor-pointer bg-inherit flex-shrink-0 w-4 h-full [&amp;_svg]:w-full flex justify-center items-center text-[#B8BACF] duration-100 hover:text-black">
                                            <img src="/img/icon-sh-search-icon.svg" alt="sh-search-icon"/>
                                        </button>
                                        <input className="sh-search-input flex-grow ml-2.5 w-full h-full bg-transparent font-primary-med text-base text-black 2md:text-sm" placeholder="Поиск"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="sfq mt-11">
                        <div className="sfq-grid accordion mt-11 grid grid-cols-1 gap-3 ">
                            <div className="qc accordion-item rounded-lg bg-[#F9F9FC]">
                                <div className="qc-h accordion-header rounded-lg p-3 flex items-center gap-3 bg-white cursor-pointer">
                                    <div className="qc-icon flex-shrink-0 rounded-full w-[50px] h-[50px] p-2 flex items-center justify-center bg-gradient-primary ">
                                        <img className="max-w-[50%]" src="/img/icon-question.2b631bf1.svg" alt="picture"/>
                                    </div>
                                    <div className="qc-title font-secondary-bold text-lg text-[#1D222C]  ">Пополнил счет, а деньги не пришли, что делать?</div>
                                        <button onClick={() => toggleFaq(0)} className="pmc-card-arrow bg-inherit h-profile-btn-open ml-auto text-[#D6D9EA] cursor-pointer hover:text-black">
                                            <img className={(isOpenFaq[0]) ? "rotate-180": ""} src="/img/icon-pmc-card-arrow.svg" alt="navpin-plate-icon"/>
                                        </button>
                                    </div>
                                {isOpenFaq[0] ?
                                    <div className="accordion-body">
                                        <div className="qc-content p-6">
                                            <p className="font-secondary-med text-lg text-[#1D222C] ">Ответ прост! Свяжитесь с нашим менеджером (Кнопка на сайте, снизу справа) и опишите делательно проблему. Вам обязательно помогут 24/7.</p>
                                        </div>
                                    </div>
                                    : null
                                }
                            </div>
                            <div className="qc accordion-item rounded-lg bg-[#F9F9FC]">
                                <div className="qc-h accordion-header rounded-lg p-3 flex items-center gap-3 bg-white cursor-pointer">
                                    <div className="qc-icon flex-shrink-0 rounded-full w-[50px] h-[50px] p-2 flex items-center justify-center bg-gradient-primary ">
                                        <img className="max-w-[50%]" src="/img/icon-question.2b631bf1.svg" alt="picture"/>
                                    </div>
                                    <div className="qc-title font-secondary-bold text-lg text-[#1D222C]  ">Пополнил счет, а деньги не пришли, что делать?</div>
                                        <button onClick={() => toggleFaq(1)} className="pmc-card-arrow bg-inherit h-profile-btn-open ml-auto text-[#D6D9EA] cursor-pointer hover:text-black">
                                            <img className={(isOpenFaq[1]) ? "rotate-180": ""} src="/img/icon-pmc-card-arrow.svg" alt="navpin-plate-icon"/>
                                        </button>
                                    </div>
                                {isOpenFaq[1] ?
                                    <div className="accordion-body">
                                        <div className="qc-content p-6">
                                            <p className="font-secondary-med text-lg text-[#1D222C] ">Ответ прост! Свяжитесь с нашим менеджером (Кнопка на сайте, снизу справа) и опишите делательно проблему. Вам обязательно помогут 24/7.</p>
                                        </div>
                                    </div>
                                    : null
                                }
                            </div>
                            <div className="qc accordion-item rounded-lg bg-[#F9F9FC]">
                                <div className="qc-h accordion-header rounded-lg p-3 flex items-center gap-3 bg-white cursor-pointer">
                                    <div className="qc-icon flex-shrink-0 rounded-full w-[50px] h-[50px] p-2 flex items-center justify-center bg-gradient-primary ">
                                        <img className="max-w-[50%]" src="/img/icon-question.2b631bf1.svg" alt="picture"/>
                                    </div>
                                    <div className="qc-title font-secondary-bold text-lg text-[#1D222C]  ">Пополнил счет, а деньги не пришли, что делать?</div>
                                        <button onClick={() => toggleFaq(2)} className="pmc-card-arrow bg-inherit h-profile-btn-open ml-auto text-[#D6D9EA] cursor-pointer hover:text-black">
                                            <img className={(isOpenFaq[2]) ? "rotate-180": ""} src="/img/icon-pmc-card-arrow.svg" alt="navpin-plate-icon"/>
                                        </button>
                                    </div>
                                {isOpenFaq[2] ?
                                    <div className="accordion-body">
                                        <div className="qc-content p-6">
                                            <p className="font-secondary-med text-lg text-[#1D222C] ">Ответ прост! Свяжитесь с нашим менеджером (Кнопка на сайте, снизу справа) и опишите делательно проблему. Вам обязательно помогут 24/7.</p>
                                        </div>
                                    </div>
                                    : null
                                }
                            </div>
                            <div className="qc accordion-item rounded-lg bg-[#F9F9FC]">
                                <div className="qc-h accordion-header rounded-lg p-3 flex items-center gap-3 bg-white cursor-pointer">
                                    <div className="qc-icon flex-shrink-0 rounded-full w-[50px] h-[50px] p-2 flex items-center justify-center bg-gradient-primary ">
                                        <img className="max-w-[50%]" src="/img/icon-question.2b631bf1.svg" alt="picture"/>
                                    </div>
                                    <div className="qc-title font-secondary-bold text-lg text-[#1D222C]  ">Пополнил счет, а деньги не пришли, что делать?</div>
                                        <button onClick={() => toggleFaq(3)} className="pmc-card-arrow bg-inherit h-profile-btn-open ml-auto text-[#D6D9EA] cursor-pointer hover:text-black">
                                            <img className={(isOpenFaq[3]) ? "rotate-180": ""} src="/img/icon-pmc-card-arrow.svg" alt="navpin-plate-icon"/>
                                        </button>
                                    </div>
                                {isOpenFaq[3] ?
                                    <div className="accordion-body">
                                        <div className="qc-content p-6">
                                            <p className="font-secondary-med text-lg text-[#1D222C] ">Ответ прост! Свяжитесь с нашим менеджером (Кнопка на сайте, снизу справа) и опишите делательно проблему. Вам обязательно помогут 24/7.</p>
                                        </div>
                                    </div>
                                    : null
                                }
                            </div>
                            <div className="qc accordion-item rounded-lg bg-[#F9F9FC]">
                                <div className="qc-h accordion-header rounded-lg p-3 flex items-center gap-3 bg-white cursor-pointer">
                                    <div className="qc-icon flex-shrink-0 rounded-full w-[50px] h-[50px] p-2 flex items-center justify-center bg-gradient-primary ">
                                        <img className="max-w-[50%]" src="/img/icon-question.2b631bf1.svg" alt="picture"/>
                                    </div>
                                    <div className="qc-title font-secondary-bold text-lg text-[#1D222C]  ">Пополнил счет, а деньги не пришли, что делать?</div>
                                        <button onClick={() => toggleFaq(4)} className="pmc-card-arrow bg-inherit h-profile-btn-open ml-auto text-[#D6D9EA] cursor-pointer hover:text-black">
                                            <img className={(isOpenFaq[4]) ? "rotate-180": ""} src="/img/icon-pmc-card-arrow.svg" alt="navpin-plate-icon"/>
                                        </button>
                                    </div>
                                {isOpenFaq[4] ?
                                    <div className="accordion-body">
                                        <div className="qc-content p-6">
                                            <p className="font-secondary-med text-lg text-[#1D222C] ">Ответ прост! Свяжитесь с нашим менеджером (Кнопка на сайте, снизу справа) и опишите делательно проблему. Вам обязательно помогут 24/7.</p>
                                        </div>
                                    </div>
                                    : null
                                }
                            </div>
                            <div className="qc accordion-item rounded-lg bg-[#F9F9FC]">
                                <div className="qc-h accordion-header rounded-lg p-3 flex items-center gap-3 bg-white cursor-pointer">
                                    <div className="qc-icon flex-shrink-0 rounded-full w-[50px] h-[50px] p-2 flex items-center justify-center bg-gradient-primary ">
                                        <img className="max-w-[50%]" src="/img/icon-question.2b631bf1.svg" alt="picture"/>
                                    </div>
                                    <div className="qc-title font-secondary-bold text-lg text-[#1D222C]  ">Пополнил счет, а деньги не пришли, что делать?</div>
                                        <button onClick={() => toggleFaq(5)} className="pmc-card-arrow bg-inherit h-profile-btn-open ml-auto text-[#D6D9EA] cursor-pointer hover:text-black">
                                            <img className={(isOpenFaq[5]) ? "rotate-180": ""} src="/img/icon-pmc-card-arrow.svg" alt="navpin-plate-icon"/>
                                        </button>
                                    </div>
                                {isOpenFaq[5] ?
                                    <div className="accordion-body">
                                        <div className="qc-content p-6">
                                            <p className="font-secondary-med text-lg text-[#1D222C] ">Ответ прост! Свяжитесь с нашим менеджером (Кнопка на сайте, снизу справа) и опишите делательно проблему. Вам обязательно помогут 24/7.</p>
                                        </div>
                                    </div>
                                    : null
                                }
                            </div>
                            <div className="qc accordion-item rounded-lg bg-[#F9F9FC]">
                                <div className="qc-h accordion-header rounded-lg p-3 flex items-center gap-3 bg-white cursor-pointer">
                                    <div className="qc-icon flex-shrink-0 rounded-full w-[50px] h-[50px] p-2 flex items-center justify-center bg-gradient-primary ">
                                        <img className="max-w-[50%]" src="/img/icon-question.2b631bf1.svg" alt="picture"/>
                                    </div>
                                    <div className="qc-title font-secondary-bold text-lg text-[#1D222C]  ">Пополнил счет, а деньги не пришли, что делать?</div>
                                        <button onClick={() => toggleFaq(6)} className="pmc-card-arrow bg-inherit h-profile-btn-open ml-auto text-[#D6D9EA] cursor-pointer hover:text-black">
                                            <img className={(isOpenFaq[6]) ? "rotate-180": ""} src="/img/icon-pmc-card-arrow.svg" alt="navpin-plate-icon"/>
                                        </button>
                                    </div>
                                {isOpenFaq[6] ?
                                    <div className="accordion-body">
                                        <div className="qc-content p-6">
                                            <p className="font-secondary-med text-lg text-[#1D222C] ">Ответ прост! Свяжитесь с нашим менеджером (Кнопка на сайте, снизу справа) и опишите делательно проблему. Вам обязательно помогут 24/7.</p>
                                        </div>
                                    </div>
                                    : null
                                }
                            </div>
                            <div className="qc accordion-item rounded-lg bg-[#F9F9FC]">
                                <div className="qc-h accordion-header rounded-lg p-3 flex items-center gap-3 bg-white cursor-pointer">
                                    <div className="qc-icon flex-shrink-0 rounded-full w-[50px] h-[50px] p-2 flex items-center justify-center bg-gradient-primary ">
                                        <img className="max-w-[50%]" src="/img/icon-question.2b631bf1.svg" alt="picture"/>
                                    </div>
                                    <div className="qc-title font-secondary-bold text-lg text-[#1D222C]  ">Пополнил счет, а деньги не пришли, что делать?</div>
                                        <button onClick={() => toggleFaq(7)} className="pmc-card-arrow bg-inherit h-profile-btn-open ml-auto text-[#D6D9EA] cursor-pointer hover:text-black">
                                            <img className={(isOpenFaq[7]) ? "rotate-180": ""} src="/img/icon-pmc-card-arrow.svg" alt="navpin-plate-icon"/>
                                        </button>
                                    </div>
                                {isOpenFaq[7] ?
                                    <div className="accordion-body">
                                        <div className="qc-content p-6">
                                            <p className="font-secondary-med text-lg text-[#1D222C] ">Ответ прост! Свяжитесь с нашим менеджером (Кнопка на сайте, снизу справа) и опишите делательно проблему. Вам обязательно помогут 24/7.</p>
                                        </div>
                                    </div>
                                    : null
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <LayoutBtn toTop='true'/>
        </div>
    );
};

export default Faq;