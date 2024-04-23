import { check } from "prettier";
import React, { useEffect, useState, useRef } from "react";
import uuid from 'react-uuid';

function SelectCheck(props) {
    const [modal, setModal] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalSet, setModalSet] = useState(false);
    const [valueSelect, setValueSelect] = useState(false);
    const [rotate, setRotate] = useState("");
    const [check, setCheck] = useState([]);
    const [count, setCount] = useState(0);
    
    // //Для отображения Select категорий в Продать товар
    // useEffect(() => { 
    //     if(props.arr.length === 0) {
    //         setValueSelect("Не выбрано");
    //     } else {
    //         if(!props.arr.includes(valueSelect)) {
    //             setValueSelect("Не выбрано");
    //         };
    //     }
    // }, [props.arr]);
    
    const selectItem = (index) => {
        const newCheck = [...check];
        newCheck[index] = !newCheck[index];
        setCheck(newCheck);
        setValueSelect(newCheck.some(value => value)); // Проверяем, есть ли хотя бы одно true в массиве check
        const trueCount = newCheck.filter(value => value === true).length;
        setCount(trueCount); // Устанавливаем количество true в count
    };
    
    const openModal = () => {  
        setModal(!modal);
        (valueSelect === "Не выбрано") ? setModalSet(false) : setModalSet(true);
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
                setRotate('');
            };
        };
    
        document.addEventListener("click", handleClickOutside);
    
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };

    }, [selectRef]);

  
    return (
        <div className="mb-4 sm:mb-6" >
            <p className='block sh-title-text font-secondary-bold text-bold text-xs text-black mb-2 sm:mb-4'>{props.name}</p>
            <div className="popup custom-select">
                <div onClick={openModal} className="flex justify-between select-selected text-base font-secondary-bold">
                    {(valueSelect) ? 
                        <div>Выбрано - <span>{count}</span></div> 
                        : "Не выбрано"
                    }
                    <span><img className={rotate} src='/img/icon-arrow-down.svg' alt='arrow'/></span>
                </div>
                {modalOpen ?
                    <div ref={selectRef} className="absolute top-[48px] right-0 left-0 z-10">
                        <div className="bg-[#eaebf8] border-solid border-b border-[#ced0e825] sh-bar flex items-center h-[40px] px-4 py-2">
                            <button className="sh-search-icon bg-inherit flex-shrink-0 w-4 h-full [&amp;_svg]:w-full flex justify-center items-center text-[#B8BACF] duration-100 hover:text-black">
                                <img src="/img/icon-sh-search-icon.svg" alt="sh-search-icon"/>
                            </button>
                            <input maxLength="80" name="search" className="sh-search-input flex-grow ml-2.5 w-full h-full bg-transparent font-primary-med text-black text-xs" placeholder="Поиск"/>  
                        </div>
                        <div className="select-items-check max-h-[280px] overflow-y-scroll">
                            {props.arr.map((item,index) => (
                                <div key={uuid()} className="font-secondary-med text-base w-full flex justify-between" onClick={(e) => [ e.stopPropagation(), selectItem(index), props.changeFormValue(props.keyValue, item)]}>
                                    {item}
                                    {check[index] && (
                                        <img src="/img/icon-check-default-one.svg" alt="check" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    );
}

export default SelectCheck;

