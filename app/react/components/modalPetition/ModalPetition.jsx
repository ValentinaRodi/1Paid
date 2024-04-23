import {useState, useEffect} from 'react';
import Select from '../select/Select';

function ModalPetition(props) {
    const [bgColor, setBgColor] = useState(false);
    const [text, setText] = useState('');
    const [formValue, setFormValue] = useState({});

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const addBalance = (e) => {
        e.preventDefault();
        if(text.length !== 0 && 'petition' in formValue) {
            props.closeModal();
        };
    };
    
    useEffect(() => {
        (text.length !== 0 && 'petition' in formValue) ? setBgColor(true) : setBgColor(false);
    }, [text, formValue]);

    // Функция для обновления объекта formValue
    const changeFormValue = (key, value) => {
        const newFormValue = {};
        (key in formValue) ? newFormValue[key] = value : newFormValue[key] = value;
       
        if(value === '') {
            delete formValue[`${key}`];
        };
        setFormValue(newFormValue);
    };

    const arr = ['жалоба 1','жалоба 2', 'жалоба 3', 'жалоба 4'];

    return (
        <div className='fixed inset-x-0 inset-y-0 flex items-start md:items-center justify-center mt-[10%] md:mt-0'>
            <div className='shadow-[0px_25px_35px_0px_#E2E3F3A6] w-full sm:w-[443px] bg-white rounded-lg px-6 pb-6'>
                <div className='w-full flex justify-center'>
                    <div className='flex justify-center items-center px-6 h-[22px] rounded-b-[20px] btn-secondary bg-[linear-gradient(90deg,#8CD23C_0%,#417A00_100%)]'>
                        <p className='family-bold font-bold text-xs text-white uppercase'>Пожаловаться</p>
                    </div>
                </div>
                <div className='flex justify-end mb-5'>
                    <button onClick={props.closeModal} className='p-0 bg-inherit hover:bg-[rgba(241,245,249,1)]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
                <Select changeFormValue={changeFormValue} arr={arr} keyValue='petition' name='Выберите из списка'/>
                <div className='flex flex-col gap-6'>
                    <textarea id='petition' value={text} onChange={handleInputChange} className="overflow-hidden h-40 sfb-form-input rounded border border-solid border-[#E3E4F4] w-full px-4 py-3.5 bg-[#EAEBF8] font-secondary-bold text-[11px] md:text-[13px] text-black resize-none duration-200 placeholder:text-[#BAC9E5]" placeholder="Комментарии"></textarea>
                    <div className='flex justify-between gap-1 items-center'>
                        <button onClick={addBalance} className={`${bgColor ? 'shadow-[0px_4px_24px_0px_#A63DFD40] p-btn cursor-pointer' : 'bg-[#ABABAB] cursor-default'} px-0 text-base rounded-lg w-full h-[60px] text-white `}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalPetition;