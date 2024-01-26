import React, { useEffect, useState } from "react";

function Select(props) {
    const [modal, setModal] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalSet, setModalSet] = useState(false);
    const [valueSelect, setValueSelect] = useState("Не выбрано");
    const [rotate, setRotate] = useState("");

    const openModal = () => {
        (valueSelect === "Не выбрано") ? setModalSet(false) : setModalSet(true);
        (rotate === '') ? setRotate('rotate-180') : setRotate('');
        (modal) ? setModal(false) : setModal(true);
    }

    const selectItem = (value) => {
        setValueSelect(value);
        setRotate('');
        setModal(false);
    }

    useEffect(() => {
        setModalOpen(modal);
    }, [modal]);

    return (
        <div className="custom-select">
            <select className="font-secondary-med text-base">
                <option value="0">Не выбрано</option>
                <option value="1">localhost</option>
                <option value="2">Москва</option>
                <option value="3">GTA V RP</option>
            </select>
            <div onClick={openModal} className="flex justify-between select-selected text-base font-secondary-bold">{valueSelect}
            <span><img className={rotate} src='/img/icon-arrow-down.svg' alt='arrow'/></span></div>
            {modalOpen ?
                <div className="select-items">
                    {modalSet ?
                        <div onClick={() => selectItem('Не выбрано')} className="font-secondary-med text-base">Не выбрано</div>
                        :
                        null
                    }
                    {Object.keys(props.arr).map(key => (
                        <div
                        id={key}
                        key={key}
                        className="font-secondary-med text-base"
                        onClick={() => selectItem(props.arr[key])}
                        >
                        {props.arr[key]}
                        </div>
                    ))}
                </div>
                :
                null
            }
        </div>
    );
}

export default Select;

