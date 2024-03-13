import React, { useEffect, useState, useRef } from "react";

function Checkbox(props) {
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(false);

    const changeCheckOn = () => {
        props.changeCheck();
        setChecked1(!checked1);
        setChecked2(false);
        (checked1) ? props.changeFormValue('online', false) : props.changeFormValue('online', true);
        props.changeFormValue('ofline', false);
    };
    
    const changeCheckOff = () => {
        props.changeCheck();
        setChecked2(!checked2);
        setChecked1(false);
        (checked2) ? props.changeFormValue('ofline', false) : props.changeFormValue('ofline', true);
        props.changeFormValue('online', false);
    };

    return (
        <div className="mb-2">
            <h3 className="mb-4 sh-title-text font-secondary-bold text-bold text-xs text-black">Продавец</h3>
            <div className="smt-filter-type-content flex flex-col">
                <label className="custom-checkbox mb-[12px] font-secondary-bold text-xs">Онлайн
                    <input id="checkbox1" onChange={changeCheckOn} type="checkbox" name="online" checked={(props.reset) ? "" : (checked1) ? "checked" : ""}/>
                    <span className="custom-checkmark"></span>
                </label>
                <label className="custom-checkbox font-secondary-bold text-xs">Офлайн
                    <input id="checkbox2" onChange={changeCheckOff} type="checkbox" name="offline" checked={(props.reset) ? "" : (checked2) ? "checked" : ""}/>
                    <span className="custom-checkmark"></span>
                </label>
            </div>
        </div>
    );
}

export default Checkbox;