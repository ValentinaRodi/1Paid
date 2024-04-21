import { useState } from 'react';

const Input = (props) => {
    const [valueInput, setValInput] = useState(props.value);

    const changeValue = (e) => {
    
        let { value } = e.target;

        if(props.type === 'number') {
            let isnum = /^[0-9\s]+$/.test(value);
       
            if(isnum) {
                setValInput(value);
                props.changeFormValue(props.keyValue, value, props.blockId)
            };
        } else {
            setValInput(value);
            props.changeFormValue(props.keyValue, value, props.blockId)

        };
        
        if(value === '')  {
            setValInput(value);
            props.changeFormValue(props.keyValue, value, props.blockId)

        };
        
    }

    return (
        <div className={props.widht}>
            <label htmlFor={props.name} className='block family-acrom-bold text-black font-bold text-xs mb-4'>{props.name}</label>
            <input maxLength="10" type="text" name={props.name} id={props.name} onChange={changeValue} value={valueInput} placeholder={props.value} className='family-acrom-bold text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
        </div>
    );
};

export default Input;
