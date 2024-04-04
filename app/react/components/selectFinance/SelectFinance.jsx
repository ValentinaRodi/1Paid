import React, { useEffect, useState, useRef } from "react";
import uuid from 'react-uuid';

function SelectFinance(props) {
    const [modal, setModal] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [valueSelect, setValueSelect] = useState("За все время");
    const [rotate, setRotate] = useState("");
    
    const selectItem = (value) => {
        setValueSelect(value);
        
        setRotate('');
        setModal(false);
    };
    
    const openModal = () => {  
        (modal) ? setModal(false) : setModal(true);
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
        <div ref={selectRef} >
            <div className="popup custom-select">
                <div onClick={openModal} className="flex justify-between items-center gap-1.5 cursor-pointer text-xs sm:text-sm font-secondary-med text-[#A6B6D4] text-sm">{valueSelect}
                    <span><img className={rotate} src='/img/icon-arrow-select-fin.svg' alt='arrow'/></span>
                </div>
                {modalOpen ?
                    <div className="select-items_fin shadow-2xl rounded-b-lg">
                        {props.arr.map(item => (
                            <div
                                key={uuid()}
                                className="font-secondary-med text-sm px-3 py-2 text-[#A6B6D4]"
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

export default SelectFinance;

