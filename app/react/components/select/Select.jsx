import React, { useEffect, useState, useRef } from "react";
import uuid from 'react-uuid';

function Select(props) {
    const [modal, setModal] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalSet, setModalSet] = useState(false);
    const [valueSelect, setValueSelect] = useState("Не выбрано");
    const [rotate, setRotate] = useState("");
    
    //Для отображения Select категорий в Продать товар
    useEffect(() => { 
        
        if(props.arr.length === 0) {
            setValueSelect("Не выбрано");
        } else {
            if(!props.arr.includes(valueSelect)) {
                setValueSelect("Не выбрано");
            };
        }
        
    }, [props.arr]);
    
    const selectItem = (value) => {
        setValueSelect(value);
        
        setRotate('');
        setModal(false);
    };
    
    const openModal = () => {  
        (modal) ? setModal(false) : setModal(true);
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
            }
        };
    
        document.addEventListener("click", handleClickOutside);
    
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };

    }, [selectRef]);
  
    return (
        <div className="mb-6" ref={selectRef}>
            <p className='block sh-title-text font-secondary-bold text-bold text-xs text-black mb-4'>{props.name}</p>
            <div className="popup custom-select">
                <div onClick={openModal} className="flex justify-between select-selected text-base font-secondary-bold">{(props.reset === true) ? "Не выбрано" : valueSelect}
                <span><img className={rotate} src='/img/icon-arrow-down.svg' alt='arrow'/></span></div>
                {modalOpen ?
                    <div className="select-items">
                        {modalSet ?
                            <div onClick={() => [selectItem('Не выбрано'), props.changeFormValue(props.keyValue,'')]} className="font-secondary-med text-base">Не выбрано</div>
                            :
                            null
                        }
                        {props.arr.map(item => (
                            <div
                                key={uuid()}
                                className="font-secondary-med text-base"
                                onClick={() => [selectItem(item), props.changeFormValue(props.keyValue, item)]}
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
    );
}

export default Select;

