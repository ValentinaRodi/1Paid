import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import LayoutBtn from '../../components/LayoutBtn';
import ModalOrder from "../../components/modalOrder/ModalOrder";
import Order from "../../components/orderTable/Order"; 
import Market from "../../components/orderTable/Market";
import Pagination from '../../components/pagination/Pagination';
import Title from "../../components/title/Title";

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
        document.getElementById('modal').classList.remove('modal_view');
        body.style.overflow = 'auto';
        setModalOpen(false);
    };

    const openModalOrder = () => {
        document.getElementById('modal').classList.add('modal_view');
        body.style.overflow = 'hidden';
        setModalOpen(true);
    };

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0 mt-10 xl:mt-0">
            <div className="w-full layout-main relative">
                <Title title='Стол заказов' search='true'/>
                {(tabItem) ?
                    <button onClick={openModalOrder} className=" absolute top-[67px] sm:top-[17px] right-0 sm:right-[265px] rounded-[40px] bg-white hover:bg-[#dcdff1] w-28 sm:w-32 h-11 sm:h-[50px] flex justify-center items-center text-[#8A98B3] text-xs sm:text-sm font-secondary-bold font-bold flex items-center justify-center border border-solid border-[#C0C2DC59]">Выбор игры</button>
                    :
                    null
                }
                <div className="flex items-start py-2 sm:py-4 justify-between rounded-lg bg-white px-4 sm:px-6 mb-3">
                    <div id="parent" className="nav-show pt-2 h-full w-full flex items-center justify-start">
                        <nav id="nav" className="nav-item pb-2.5 flex gap-x-4 sm:gap-x-6 flex-wrap gap-y-6">
                            <div onClick={clickOrders} className={`${(tabClass) ? 'nav-link-prim' : 'nav-link'} cursor-pointer nav-link-tab font-primary-bold text-xs sm:text-sm text-[#8A98B3] uppercase`}>Мои заказы</div>
                            <div onClick={clickMarket} className={`${(!tabClass) ? 'nav-link-prim' : 'nav-link'} cursor-pointer nav-link-tab font-primary-bold text-xs sm:text-sm text-[#8A98B3] uppercase`}>Биржа заказов</div>
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
            {modalOpen && 
                (<div className='w-screen h-screen'>
                    <ModalOrder closeModal={closeModal} />
                </div>)
            }
        </div>  
       
    );
}

export default OrderTable;