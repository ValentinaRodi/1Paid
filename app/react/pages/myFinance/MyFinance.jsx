import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import { Link } from 'react-router-dom';
import SelectFinance from '../../components/selectFinance/SelectFinance';
import { createRoot } from "react-dom/client";
import AddBalance from '../../components/addBalance/AddBalance';
import OutputFunds from '../../components/outputFunds/OutputFunds';
import Navigation from '../../components/navigation/Navigation';
import Pagination from '../../components/pagination/Pagination';

function MyFinance() {
    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const body = document.querySelector('body');

    const addFunds = () => {
        body.style.overflow = 'hidden';
        setModalEl(<AddBalance
            closeModal={closeModal}
        />);
        setModalOpen(true);
    };

    const takeFunds = () => {
        body.style.overflow = 'hidden';
        setModalEl(<OutputFunds
            closeModal={closeModal}
        />);
        setModalOpen(true);
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

    const closeModal = () =>{
        body.style.overflow = 'auto';
        setModalOpen(false);
        setModalEl('');
    };

    useEffect(() => {
        const headerHeight = document.querySelector('.layout-h').getBoundingClientRect().height;
        const mainHeight = document.querySelector('.layout-main').getBoundingClientRect().height;
        const totalHeight = headerHeight + mainHeight;
        document.querySelector('.lf-feed').style.height = totalHeight + "px";
    }, []);

    const arr = ['За все время', 'За месяц', 'За неделю', 'За день'];
    const navArr =['Все операции', 'История пополнения', 'История вывода', 'Расходы', 'Заработанно'];

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full layout-main">
                <div className="fh mt-5">
                    <div className="sh flex justify-between items-center gap-x-3 mb-10">
                        <div className="flex flex-col justify-start">
                            <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Финансы</h2>
                            <div className="sh-title-line mt-2 rounded-full w-9 h-1 bg-gradient-primary">
                            </div>
                        </div>
                    </div>
                    <Navigation navArr={navArr}/>
                    <div className='w-full'>
                        <div className="fh-info flex justify-between items-center rounded-lg bg-white p-7">
                            <div className='flex gap-6'>
                                <div className="fh-info-balance pr-6 border-r botder-solid border-[#DBE0ED]">
                                    <div className="fh-info-balance-count font-bold font-secondary-bold text-2xl text-black mb-2">8 163.50₽</div>
                                    <div className="fh-info-balance-label font-secondary-med text-[#C5CFE4] text-sm">Общий баланс</div>
                                </div>
                                <div className="fh-info-total ">
                                    <div className="fh-info-total-count font-bold font-secondary-bold text-2xl text-black mb-2">+163.50₽</div>
                                    <SelectFinance arr={arr} keyValue='Time'/>
                                </div>
                            </div>   
                            <div className="smt-tab-actions flex items-center">
                                <button onClick={addFunds} className="smt-tab-btn flex justify-center items-center font-secondary-bold text-[14px] mr-[12px] text-white bg-gradient-primary rounded-full py-2 px-4 min-w-[170px] bg-gradient-primary-hover">Пополнить баланс</button>
                                <button onClick={takeFunds} className="smt-tab-btn flex justify-center items-center font-secondary-bold text-[14px] text-[#1E61EB] bg-white border border-solid border-[#1E61EB] rounded-full py-2 px-4 min-w-[170px] hover:text-white hover:bg-[linear-gradient(37deg,#339cfc_0%,#0046d6_100%)]">Вывести средства</button>
                            </div>
                        </div>
                        <div className="fh-feed mt-6 grid grid-cols-1 gap-3">
                            <div className="fhc p-6 font-secondary-bold rounded-xl flex items-center text-sm text-[#1D222C] gap-4 bg-white">
                                <div className="fhc-id pr-6">25812</div>
                                <div className="fhc-text">Вывод баланса #2478271</div>
                                <div className="fhc-info flex items-center ml-auto font-secondary-bold text-[#969BA5] gap-2">
                                    <div className="fhc-info-bought-count text-[#A6B6D4] pr-2 border-r border-solid border-[#DBE0ED]">Ожидание 48 часов.</div>
                                    <div className="fhc-info-bought-count text-[#1D222C] pr-2 border-r border-solid border-[#DBE0ED]">+163.50 ₽</div>
                                    <div className="fhc-date text-[#1D222C] xl:text-base pr-4 border-r border-solid border-[#DBE0ED]">15.02.2023, 22:12</div>
                                    <div className="fhc-action flex items-center text-[#E22929] cursor-pointer">
                                        <div className="fhc-action-icon rounded-full w-[24px] h-[24px] flex justify-center items-center text-[#E22929] pr-2 ml-2">
                                            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.424023 17.576C-0.0462888 17.1028 -0.0462888 16.3387 0.424023 15.8656L15.8656 0.424038C16.1621 0.0778742 16.6275 -0.0729097 17.0706 0.0336795C17.5137 0.140269 17.8597 0.486241 17.9663 0.929353C18.0729 1.37247 17.9221 1.83793 17.5759 2.13438L2.13436 17.576C1.66124 18.0463 0.897141 18.0463 0.424023 17.576Z" fill="currentColor"></path>
                                                <path d="M0.424023 0.424023C0.897141 -0.0462888 1.66124 -0.0462888 2.13436 0.424023L17.5759 15.8656C17.9221 16.1621 18.0729 16.6275 17.9663 17.0706C17.8597 17.5137 17.5137 17.8597 17.0706 17.9663C16.6275 18.0729 16.1621 17.9221 15.8656 17.5759L0.424023 2.13436C-0.0462888 1.66124 -0.0462888 0.897141 0.424023 0.424023Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                        <div className="fhc-action-text">Отменить операцию</div>
                                    </div>
                                </div>
                            </div>
                            <div className="fhc p-6 font-secondary-bold rounded-xl flex items-center text-sm text-[#1D222C] gap-4 bg-white">
                                <div className="fhc-id pr-6">25812</div>
                                <div className="fhc-text">Вывод баланса #2478271</div>
                                <div className="fhc-info flex items-center ml-auto font-secondary-bold text-[#969BA5] gap-2">
                                    <div className="fhc-info-bought-count text-[#A6B6D4] pr-2 border-r border-solid border-[#DBE0ED]">Ожидание 48 часов.</div>
                                    <div className="fhc-info-bought-count text-[#1D222C] pr-2 border-r border-solid border-[#DBE0ED]">+163.50 ₽</div>
                                    <div className="fhc-date text-[#1D222C] xl:text-base pr-4 border-r border-solid border-[#DBE0ED]">15.02.2023, 22:12</div>
                                    <div className="fhc-action flex items-center text-[#E22929] cursor-pointer">
                                        <div className="fhc-action-icon rounded-full w-[24px] h-[24px] flex justify-center items-center text-[#E22929] pr-2 ml-2">
                                            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.424023 17.576C-0.0462888 17.1028 -0.0462888 16.3387 0.424023 15.8656L15.8656 0.424038C16.1621 0.0778742 16.6275 -0.0729097 17.0706 0.0336795C17.5137 0.140269 17.8597 0.486241 17.9663 0.929353C18.0729 1.37247 17.9221 1.83793 17.5759 2.13438L2.13436 17.576C1.66124 18.0463 0.897141 18.0463 0.424023 17.576Z" fill="currentColor"></path>
                                                <path d="M0.424023 0.424023C0.897141 -0.0462888 1.66124 -0.0462888 2.13436 0.424023L17.5759 15.8656C17.9221 16.1621 18.0729 16.6275 17.9663 17.0706C17.8597 17.5137 17.5137 17.8597 17.0706 17.9663C16.6275 18.0729 16.1621 17.9221 15.8656 17.5759L0.424023 2.13436C-0.0462888 1.66124 -0.0462888 0.897141 0.424023 0.424023Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                        <div className="fhc-action-text">Отменить операцию</div>
                                    </div>
                                </div>
                            </div>
                            <div className="fhc p-6 font-secondary-bold rounded-xl flex items-center text-sm text-[#1D222C] gap-4 bg-white">
                                <div className="fhc-id pr-6">25812</div>
                                <div className="fhc-text">Вывод баланса #2478271</div>
                                <div className="fhc-info flex items-center ml-auto font-secondary-bold text-[#969BA5] gap-2">
                                    <div className="fhc-info-bought-count text-[#A6B6D4] pr-2 border-r border-solid border-[#DBE0ED]">Ожидание 48 часов.</div>
                                    <div className="fhc-info-bought-count text-[#1D222C] pr-2 border-r border-solid border-[#DBE0ED]">+163.50 ₽</div>
                                    <div className="fhc-date text-[#1D222C] xl:text-base pr-4 border-r border-solid border-[#DBE0ED]">15.02.2023, 22:12</div>
                                    <div className="fhc-action flex items-center text-[#E22929] cursor-pointer">
                                        <div className="fhc-action-icon rounded-full w-[24px] h-[24px] flex justify-center items-center text-[#E22929] pr-2 ml-2">
                                            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.424023 17.576C-0.0462888 17.1028 -0.0462888 16.3387 0.424023 15.8656L15.8656 0.424038C16.1621 0.0778742 16.6275 -0.0729097 17.0706 0.0336795C17.5137 0.140269 17.8597 0.486241 17.9663 0.929353C18.0729 1.37247 17.9221 1.83793 17.5759 2.13438L2.13436 17.576C1.66124 18.0463 0.897141 18.0463 0.424023 17.576Z" fill="currentColor"></path>
                                                <path d="M0.424023 0.424023C0.897141 -0.0462888 1.66124 -0.0462888 2.13436 0.424023L17.5759 15.8656C17.9221 16.1621 18.0729 16.6275 17.9663 17.0706C17.8597 17.5137 17.5137 17.8597 17.0706 17.9663C16.6275 18.0729 16.1621 17.9221 15.8656 17.5759L0.424023 2.13436C-0.0462888 1.66124 -0.0462888 0.897141 0.424023 0.424023Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                        <div className="fhc-action-text">Отменить операцию</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Pagination />
                </div>
            </div>
            <LayoutBtn toTop='true'/>
        </div>
    );
};

export default MyFinance;