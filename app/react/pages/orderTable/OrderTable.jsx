import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import LayoutBtn from '../../components/LayoutBtn';
import ModalOrder from "../../components/modalOrder/ModalOrder";
import Order from "../../components/orderTable/Order"; 
import Market from "../../components/orderTable/Market";
import Pagination from '../../components/pagination/Pagination';

function OrderTable() {
    const [tabClass, setTabClass] = useState(true);
    const [tabItem, setTabItem] = useState(true);
    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const body = document.querySelector('body');

    const clickOrders= () => {
        setTabClass(true);
        setTabItem(true);
    };

    const clickMarket = () => {
        setTabClass(false);
        setTabItem(false);
    };

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

    const openModalOrder = () => {
        body.style.overflow = 'hidden';
        setModalEl(<ModalOrder
            closeModal={closeModal}
        />);
        setModalOpen(true);
    };

    

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0 mt-10 xl:mt-0">
            <div className="w-full layout-main">
                <div className="sh flex justify-between items-center gap-x-3 mb-10">
                    <div className="flex flex-col justify-start">
                        <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Стол заказов</h2>
                        <div className="sh-title-line mt-2 rounded-full w-9 h-1 2md:mt-2 bg-gradient-primary">
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        {(tabItem) ?
                            <button onClick={openModalOrder} className="rounded-[40px] bg-white hover:bg-[#dcdff1] w-32 h-11 flex justify-center items-center text-[#8A98B3] text-sm font-secondary-bold font-bold flex items-center justify-center border border-solid border-[#C0C2DC59]">Выбор игры</button>
                            :
                            null
                        }
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
                <div className="flex items-start py-4 justify-between rounded-lg bg-white px-6 mb-3">
                    <div id="parent" className="nav-show pt-2 h-full w-full flex items-center justify-start">
                        <nav id="nav" className="nav-item pb-2.5 flex gap-x-6 flex-wrap gap-y-6">
                            <div onClick={clickOrders} className={`${(tabClass) ? 'nav-link-prim' : 'nav-link'} cursor-pointer nav-link-tab font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm`}>Мои заказы</div>
                            <div onClick={clickMarket} className={`${(!tabClass) ? 'nav-link-prim' : 'nav-link'} cursor-pointer nav-link-tab font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm`}>Биржа заказов</div>
                        </nav>
                    </div>
                </div>
                {(tabItem) ?
                    <Order />
                    :
                    <Market />
                }
                <Pagination />
            </div>
            <LayoutBtn toTop='true'/>
        </div>  
       
    );
}

export default OrderTable;