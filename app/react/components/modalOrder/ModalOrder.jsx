import { useState, useEffect } from 'react';
import Select from '../select/Select';
import uuid from 'react-uuid';
import Input from '../Input';
import InputRange from '../../components/inputRange/InputRange';
import { createRoot } from "react-dom/client";

function ModalOrder(props) {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    const [typePin, setTypePin] = useState(["Тип 1", "Тип 2", "Тип 3"]);
    const [time, setTime] = useState(["Навсегда", "На год", "На месяц"]);
    const [categ, setCateg] = useState(["Аккаунты", "Пин-коды", "Буст PM","Спецоперации"]);
    const [formValue, setFormValue] = useState({});
    
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');

        if (title === '') {
          setError('border-[#FF5343] border-[1px] border-solid');
        };

        //console.log('formValue', formValue);
    };

    // Функция для обновления объекта formValue
    const changeFormValue = (key, value) => {
        (key in formValue) ? formValue[key] = value : formValue[key] = value;
    
        if(value === '') {
            delete formValue[`${key}`];
        };
    };







    return (
        <div className="h-screen fixed inset-x-0 inset-y-0 overflow-scroll flex justify-center pt-[2%] pb-[3%] px-[2%]">
            <div className='shadow-[0px_25px_35px_0px_#E2E3F3A6] h-fit w-full md:w-[758px] bg-white rounded-lg px-6 pb-6'>
                    <div className='flex justify-end mb-5 pt-0 sm:pt-6'>
                        <button onClick={props.closeModal} className='p-0 bg-inherit hover:bg-[rgba(241,245,249,1)]'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                    <div  className='mt-[-10px]'>
                        <div className='w-full mb-6'>
                            <div className='flex items-center justify-between  family-acrom-bold text-sm rounded-[40px] px-5 border border-solid border-[#C0C2DC59] bg-white h-12 w-full text-[#8A98B3]'>
                                <div className='flex items-center gap-2'>
                                    <img src='/img/icon-game-warf.svg' alt='game' />
                                    <p>Warface</p>
                                </div>
                                <button className='bg-inherit'>
                                    <img src='/img/icon-game-edit.svg' alt='edit' />
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-between flex-wrap gap-y-5 flex-[50%_50%]'>
                            <div className='w-[32%]'>
                                <Select arr={categ} changeFormValue={changeFormValue} keyValue='Категория' name='Категория'/>
                            </div>
                            <div className='w-[32%]'>
                                <Select arr={typePin} changeFormValue={changeFormValue} keyValue='Тип пин-кода' name='Тип пин-кода'/>   
                            </div>
                            <div className='w-[32%]'>
                                <Select arr={time} changeFormValue={changeFormValue} keyValue='Срок' name='Срок'/>   
                            </div>
                        </div>
                        <div className='h-px w-full bg-[#E9EAF4] mb-6'></div>
                        <div className='mb-6'>
                            <Input key={uuid()} widht='w-full' changeFormValue={changeFormValue} keyValue='Содержимое' name='Содержимое' value='Makmilan Gr-23' />
                        </div>
                        <div className='mb-6'>
                            <Input key={uuid()} widht='w-full' changeFormValue={changeFormValue} keyValue='Кол-во' name='Кол-во' value='25 шт.' />
                        </div>
                        <div>
                            <label htmlFor="title" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Заголовок</label>
                            <input onChange={handleTitleChange} value={title} type="text" name="title" id='title' placeholder='Продам 5000 террабайт' className={`${error} mb-5 family-acrom-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 mb-2 border-solid border-red-error bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black`}/>
                        </div>
                        <div className='flex justify-between flex-wrap mb-6 gap-y-5'>
                            <div className='w-full sm:w-[48%]'>
                                <label htmlFor="about" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Описание</label>
                                <input type="text" name="about" id='about' placeholder="Описание" className='family-acrom-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                            </div>
                            <div className='w-full sm:w-[48%]'>
                                <label htmlFor="price" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Цена</label>
                                <input type="text" name="price" id='price' placeholder="20005 Рублей" className='family-acrom-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                            </div>
                        </div>
                        <div className='h-px w-full bg-[#E9EAF4] mb-6'></div>
                        <div>
                            <InputRange changeFormValue={changeFormValue} min={1} max={150000} styleIcon={'slider-icon_blue'} styleDiv={'gradient-blue'} name='Цена'/>
                        </div>
                        <div className='flex justify-between gap-1 items-center'>
                            <button onClick={handleSubmit} className="bg-gradient-primary shadow-primary px-0 text-base rounded-lg w-full h-[60px] text-white">Заказать товар</button>
                        </div>
                    </div>
            </div>      
        </div>
    );
}

export default ModalOrder;
