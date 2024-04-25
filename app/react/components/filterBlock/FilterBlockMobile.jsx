import React, { useEffect, useState, useRef } from "react";
import uuid from 'react-uuid';

function FilterBlockMob(props) {
    const [modal, setModal] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalSet, setModalSet] = useState(false);
    const [valueSelectGame, setValueSelectGame] = useState("Не выбрано");
    const [rotate, setRotate] = useState("");

    const [modal2, setModal2] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modalSet2, setModalSet2] = useState(false);
    const [valueSelectType, setValueSelectType] = useState("Не выбрано");
    const [rotate2, setRotate2] = useState("");
    
    const selectItem = (value) => {
        setValueSelectGame(value);
        setRotate('');
        setModal(false);
    };
    
    const openModal = () => {  
        (modal) ? setModal(false) : setModal(true);
        
        if(valueSelectGame === "Не выбрано") {
            setModalSet(false);
            setValueSelectType("Не выбрано");
        } else {
            setModalSet(true);
        };
        (rotate === '') ? setRotate('rotate-180') : setRotate('');
    };
    
    useEffect(() => {
        setModalOpen(modal);
    }, [modal]);

    //Для закрытия выпадающего Select, если клик вне окна Select
    const selectRef = useRef();

    useEffect(() => {
        
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setModal(false);
            }
        };
    
        document.addEventListener("click", handleClickOutside);
    
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };

    }, [selectRef]);

    
    
    const selectItem2 = (value) => {
        console.log('value2',value)
        setValueSelectType(value);
        
        setRotate2('');
        setModal2(false);
    };
    
    const openModal2 = () => {  
        (modal2) ? setModal2(false) : setModal2(true);
        (valueSelectType === "Не выбрано") ? setModalSet2(false) : setModalSet2(true);
        (rotate2 === '') ? setRotate2('rotate-180') : setRotate2('');
    };
    
    useEffect(() => {
        setModalOpen2(modal2);
    }, [modal2]);

    //Для закрытия выпадающего Select, если клик вне окна Select
    const selectRef2 = useRef();

    useEffect(() => {
        
        const handleClickOutside = (event) => {
            if (selectRef2.current && !selectRef2.current.contains(event.target)) {
                setModal2(false);
            }
        };
    
        document.addEventListener("click", handleClickOutside);
    
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };

    }, [selectRef2]);


    //Сброс фильтра
    const cancelFilter = () => { 
        setValueSelectGame("Не выбрано");
        setValueSelectType("Не выбрано");
    };

    const arr = ['Warface', 'New game', 'GTA', 'New game'];
  
    return (
        <div className='absolute top-[90px] right-[-15px] block min-[880px]:hidden z-[100] shadow-2xl w-[279px] bg-white p-[24px] rounded-lg'>
            <div className='flex justify-end'>
                <button onClick={props.showFilter} className='p-0 bg-inherit hover:bg-[rgba(241,245,249,1)]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </button>
            </div>
            <div className="sm-filter-types max-w-[270px] w-full">
                <div className="mb-4 sm:mb-6" ref={selectRef}>
                    <p className='block sh-title-text font-secondary-bold text-bold text-xs text-black mb-2 sm:mb-4'>Игра</p>
                    <div className="popup custom-select">
                        <div onClick={openModal} className="flex justify-between select-selected text-base font-secondary-bold">{valueSelectGame}
                            <span><img className={rotate} src='/img/icon-arrow-down.svg' alt='arrow'/></span>
                        </div>
                        {modalOpen ?
                            <div className="select-items">
                                {modalSet ?
                                    <div onClick={() => [selectItem('Не выбрано')]} className="font-secondary-med text-base">Не выбрано</div>
                                    :
                                    null
                                }
                                {arr.map(item => (
                                    <div
                                        key={uuid()}
                                        className="font-secondary-med text-base"
                                        onClick={() => [selectItem(item)]}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
                {valueSelectGame === 'Не выбрано' ?
                    <div className="mb-4 sm:mb-6">
                        <p className='block sh-title-text font-secondary-bold text-bold text-xs text-black mb-2 sm:mb-4'>Тип товара</p>
                        <div className="popup custom-select">
                            <div className="flex justify-between flex items-center text-[13px] text-black py-[8px] px-[16px] bg-[#eaebf8] h-[48px] border border-solid border-[#ced0e825] rounded-[4px] font-secondary-bold">Не выбрано
                            <span><img src='/img/icon-arrow-down.svg' alt='arrow'/></span></div>
                        </div>
                    </div>
                    :
                    <div className="mb-4 sm:mb-6" ref={selectRef2}>
                        <p className='block sh-title-text font-secondary-bold text-bold text-xs text-black mb-2 sm:mb-4'>Тип товара</p>
                        <div className="popup custom-select">
                            <div onClick={openModal2} className="flex justify-between select-selected text-base font-secondary-bold">{valueSelectType}
                                <span><img className={rotate2} src='/img/icon-arrow-down.svg' alt='arrow'/></span>
                            </div>
                            {modalOpen2 ?
                                <div className="select-items">
                                    {modalSet2 ?
                                        <div onClick={() => [selectItem2('Не выбрано')]} className="font-secondary-med text-base">Не выбрано</div>
                                        :
                                        null
                                    }
                                    {arr.map(item => (
                                        <div
                                            key={uuid()}
                                            className="font-secondary-med text-base"
                                            onClick={() => [selectItem2(item)]}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                :
                                null
                            }
                        </div>
                    </div> 
                }                                
            </div>
            <div className="sm-filter-actions w-full max-w-[270px]">
                <button className="btn sm-filter-btn flex justify-center items-center bg-gradient-primary rounded-[4px] py-4 w-full mb-[12px]">
                    <div className="sm-filter-btn-icon flex-shrink-0 w-[14px] h-[14px]  flex justify-center items-center mr-[8px]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  fillRule="evenodd" clipRule="evenodd" d="M12.9872 0.8L12.9872 7.2L12.9872 7.272C11.9195 7.5396 11.1707 8.49924 11.1707 9.6C11.1707 10.7008 11.9195 11.6604 12.9872 11.928L12.9872 12L12.9872 15.2C12.9872 15.6418 13.3454 16 13.7872 16C14.2291 16 14.5872 15.6418 14.5872 15.2L14.5872 12C14.5949 11.9282 14.5949 11.8558 14.5872 11.784C15.443 11.3941 15.9922 10.5404 15.9922 9.6C15.9922 8.65963 15.443 7.80589 14.5872 7.416C14.5949 7.3442 14.5949 7.2718 14.5872 7.2L14.5872 0.8C14.5872 0.358172 14.2291 -7.70681e-08 13.7872 -9.6381e-08C13.3454 -1.15694e-07 12.9872 0.358172 12.9872 0.8ZM14.3633 9.6C14.3633 10.0418 14.0051 10.4 13.5633 10.4C13.1215 10.4 12.7633 10.0418 12.7633 9.6C12.7633 9.15817 13.1215 8.8 13.5633 8.8C14.0051 8.8 14.3633 9.15817 14.3633 9.6Z" fill="white"></path>
                        <path  fillRule="evenodd" clipRule="evenodd" d="M7.38818 0.8L7.38818 2.4L7.38818 2.472C6.32813 2.74531 5.58736 3.70129 5.58736 4.796C5.58736 5.89071 6.32813 6.84669 7.38817 7.12L7.38817 15.2C7.38817 15.6418 7.74635 16 8.18817 16C8.63 16 8.98817 15.6418 8.98817 15.2L8.98817 6.96C9.82986 6.56435 10.3672 5.71804 10.3672 4.788C10.3672 3.85796 9.82986 3.01165 8.98818 2.616C8.99579 2.5442 8.99579 2.4718 8.98818 2.4L8.98818 0.8C8.98818 0.358172 8.63 -7.59347e-08 8.18818 -9.52477e-08C7.74635 -1.14561e-07 7.38818 0.358172 7.38818 0.8ZM8.76388 4.8C8.76388 5.24183 8.40571 5.6 7.96388 5.6C7.52205 5.6 7.16388 5.24183 7.16388 4.8C7.16388 4.35817 7.52205 4 7.96388 4C8.40571 4 8.76388 4.35817 8.76388 4.8Z" fill="white"></path>
                        <path  fillRule="evenodd" clipRule="evenodd" d="M1.78832 0.8L1.78832 8.08C0.735795 8.35878 0.00281436 9.31118 0.00281432 10.4C0.00281427 11.4888 0.735795 12.4412 1.78832 12.72L1.78832 15.2C1.78832 15.6418 2.14649 16 2.58832 16C3.03015 16 3.38832 15.6418 3.38832 15.2L3.38832 12.56C4.2163 12.159 4.74219 11.32 4.74219 10.4C4.74219 9.48003 4.2163 8.64101 3.38832 8.24L3.38832 0.8C3.38832 0.358172 3.03015 -7.48355e-08 2.58832 -9.41484e-08C2.1465 -1.13461e-07 1.78832 0.358172 1.78832 0.8ZM3.16448 10.4C3.16448 10.8418 2.80631 11.2 2.36448 11.2C1.92265 11.2 1.56448 10.8418 1.56448 10.4C1.56448 9.95817 1.92265 9.6 2.36448 9.6C2.80631 9.6 3.16448 9.95817 3.16448 10.4Z" fill="white"></path>
                    </svg>
                    </div>
                    <div className="sm-filter-btn-text font-secondary-bold text-[14px] text-white">Применить фильтр</div>
                </button>
                <button onClick={cancelFilter} className="btn sm-filter-btn flex justify-center items-center bg-[#EAEBF8] border border-[#CED0E8] rounded-[4px] py-4 w-full ">
                    <div className="sm-filter-btn-icon flex-shrink-0 w-[14px] h-[14px]  flex justify-center items-center mr-[8px]">
                    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.424023 17.576C-0.0462888 17.1028 -0.0462888 16.3387 0.424023 15.8656L15.8656 0.424038C16.1621 0.0778742 16.6275 -0.0729097 17.0706 0.0336795C17.5137 0.140269 17.8597 0.486241 17.9663 0.929353C18.0729 1.37247 17.9221 1.83793 17.5759 2.13438L2.13436 17.576C1.66124 18.0463 0.897141 18.0463 0.424023 17.576Z" fill="currentColor"></path>
                        <path d="M0.424023 0.424023C0.897141 -0.0462888 1.66124 -0.0462888 2.13436 0.424023L17.5759 15.8656C17.9221 16.1621 18.0729 16.6275 17.9663 17.0706C17.8597 17.5137 17.5137 17.8597 17.0706 17.9663C16.6275 18.0729 16.1621 17.9221 15.8656 17.5759L0.424023 2.13436C-0.0462888 1.66124 -0.0462888 0.897141 0.424023 0.424023Z" fill="currentColor"></path>
                    </svg>
                    </div>
                    <div className="sm-filter-btn-text font-secondary-bold text-[14px] text-black">Сбросить фильтр</div>
                </button>
            </div>
            <span className="mt-4 block w-full font-secondary-med text-[10px] text-[#A6B1C7]">Если вы хотите поднять в Топ какой то товар с определенного раздела ,то сначала вам нужно выбрать фильтр и далее нажать на поднять в топ ,если фильтр не выбран то вы поднимите все товары в топ</span>
        </div>
       
    );
}

export default FilterBlockMob;

