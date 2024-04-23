import  './outputFunds.less'; 
import { useState, useEffect } from 'react';
import Select from '../select/Select';

function OutputFunds(props) {
    const [formValue, setFormValue] = useState({});
    const arr = ['Банковская карта VISA/MASTERCARD', 'Банковская карта VISA', 'Банковская карта MASTERCARD', 'Банковская карта'];
    const [bgColor, setBgColor] = useState(false);
    const [sum, setSum] = useState('');
    const [numberCard, setNumberCard] = useState('');
    const [secretWord, setSecretWord] = useState('');

    // Функция для обновления объекта formValue
    const changeFormValue = (key, value) => {
        const newFormValue = {};
        (key in formValue) ? newFormValue[key] = value : newFormValue[key] = value;

        if(value === '') {
            delete formValue[`${key}`];
        };

        setFormValue(newFormValue);
    };

    const handleChangeSum = (e) => {
        const input = e.target.value;
        const newValue = input.replace(/\D/g, '').slice(0, 11);
        
        if(sum.length <= input.length) {
            (input === '0') ? setSum('') : setSum(newValue);
        } else {
            // (input.length === 0) ? setSum(newValue === '' ? '' : newValue.replace(/^0+(?=\d)/, '') + '₽') : setSum(newValue.slice(0, -1) + '₽'); 
            (input.length === 1) ? setSum('') : setSum(newValue); 
        };
    };

    const handleChangeCard = (e) => {
        const input = e.target.value;
        const newValue = input.replace(/\D/g, '').slice(0, 16);
        
        if(numberCard.length <= input.length) {
            (input === '0') ? setNumberCard('') : setNumberCard(newValue);
        } else {
            // (input.length === 0) ? setSum(newValue === '' ? '' : newValue.replace(/^0+(?=\d)/, '') + '₽') : setSum(newValue.slice(0, -1) + '₽'); 
            (input.length === 1) ? setNumberCard('') : setNumberCard(newValue); 
        };
    };

    const outPutFunds = (e) => {
        e.preventDefault();
        if(sum > 10 && numberCard.length === 16 && 'outputFunds' in formValue  && secretWord.length > 7) {
            props.closeModal();
        };
    };

    const handleSecretWordChange = (e) => {
        setSecretWord(e.target.value);
        // console.log('secretWord',secretWord.le);
    };

    useEffect(() => {
        (sum > 10 && numberCard.length === 16 && 'outputFunds' in formValue  && secretWord.length > 7) ? setBgColor(true) : setBgColor(false);
    }, [sum, numberCard, formValue, secretWord]);


    return (
        <div className='fixed inset-x-0 inset-y-0 flex items-start md:items-center justify-center mt-[10%] md:mt-0'>
            <div className='shadow-[0px_25px_35px_0px_#E2E3F3A6] w-full sm:w-[443px] bg-white rounded-lg px-6 pb-6'>
                <div className='w-full flex justify-center'>
                    <div className='flex justify-center items-center px-6 h-[22px] rounded-b-[20px] shadow-[0px_4px_32px_0px_#9D3FFC6B] bg-[linear-gradient(90deg,#8CD23C_0%,#417A00_100%)]'>
                        <p className='family-bold font-bold text-xs text-white uppercase'>Вывод средств</p>
                    </div>
                </div>
                <div className='flex justify-end mb-5'>
                    <button onClick={props.closeModal}  className='p-0 bg-inherit hover:bg-[rgba(241,245,249,1)]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
                <form className='mt-[-10px]'>
                    <label htmlFor="sum" className='block family-bold text-black font-bold text-xs mb-4'>Сумма</label>
                    <input type="text" onChange={handleChangeSum} name="sum" id='sum' value={sum} placeholder="2000 Рублей" className='border-[#CED0E840] font-secondary-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 mb-2 border border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                    <p className='text-[10px] text-[#BEC1DB] mb-5'>Минимальная сумма для пополнения от 10 рублей.</p>
                    <Select arr={arr} changeFormValue={changeFormValue} keyValue='outputFunds' name='Способ вывода'/>                       
                    <label htmlFor="numberCard" className='block family-bold text-black font-bold text-xs mb-4'>Реквизиты для вывода</label>
                    <input type="text" onChange={handleChangeCard} value={numberCard} name="numberCard" id='numberCard' className='mb-5 family-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 mb-2 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                    <label htmlFor="secretWord" className='block family-bold text-black font-bold text-xs mb-4'>Секретное слово</label>
                    <input type="text" onChange={handleSecretWordChange} value={secretWord} name="secretWord" id='secretWord' placeholder="" className='mb-5 family-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 mb-2 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                    <div className='flex items-center mb-6'>
                        <input type="checkbox" id="checkSum" className="toggleCheckbox"/>
                        <label htmlFor="checkSum"></label>
                        <p className='family-bold text-xs leading-[14px] font-bold ml-2'>Запомнить мои реквезиты для последующего <br/>вывода средств.</p>
                    </div>
                    <div className='flex justify-between gap-1 items-center'>
                        <button onClick={outPutFunds} className={`${bgColor ? 'shadow-[0px_4px_24px_0px_#A63DFD40] p-btn cursor-pointer' : 'bg-[#ABABAB] cursor-default'} px-0 text-base rounded-lg w-full h-[60px] text-white`}>Вывести средства</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default OutputFunds;