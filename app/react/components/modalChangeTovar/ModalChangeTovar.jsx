import { useState, useEffect } from 'react';
import Select from '../select/Select';
import uuid from 'react-uuid';
import Input from '../Input';
import { createRoot } from "react-dom/client";

function ModalChangeTovar(props) {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    const [server, setServer] = useState(['ru.warface.com', 'test.com']);
    const [categ, setCateg] = useState(['Буст побед', 'New']);
    const [mode, setMode] = useState(['Онлайн', 'Тест']);
    const [access, setAccess] = useState(['Публичный доступ', 'Приватный доступ']);
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
        }
    };

    return (
        <div className="h-screen fixed inset-x-0 inset-y-0 overflow-scroll flex justify-center pt-[2%] pb-[3%] px-[2%]">
            <div className='shadow-[0px_25px_35px_0px_#E2E3F3A6] h-fit w-[310px] bg-white rounded-lg px-6 pb-6'>
                <div className='pc-plate-container-chang'>
                    <div className="shadow-primary text-white text-xs uppercase rounded-b-[20px] bg-gradient-primary _shadow-primary font-bold py-1 px-7 bg-gradient-primary">Редактирование товара</div>
                </div>
                <div className='flex justify-end mb-4 mt-6'>
                    <button onClick={props.closeModal} className='p-0 bg-inherit hover:bg-[rgba(241,245,249,1)]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
                <div  className='mt-[-10px] w-full flex flex-col'>
                    <div className='w-full'>
                        <Input key={uuid()} widht='w-full' changeFormValue={changeFormValue} keyValue={props.name} value={props.name} />
                    </div>
                    <div className='w-full mb-5'>
                        <Input key={uuid()} widht='w-full' changeFormValue={changeFormValue} keyValue={props.description} value={props.description} />
                    </div>
                    <div className='w-full mb-5'>
                        <Input key={uuid()} widht='w-full' changeFormValue={changeFormValue} keyValue='Цена' name='Цена' value={props.price} />
                    </div>
                    <Select arr={categ} changeFormValue={changeFormValue} keyValue='Игра' name='Категория'/>
                    <Select arr={server} changeFormValue={changeFormValue} keyValue='Сервер' name='Сервер'/>   
                    <Select arr={mode} changeFormValue={changeFormValue} keyValue='Режим' name='Режим'/>   
                    <div className='w-full h-px bg-[#E9EAF4] mb-5'></div>
                    <Select arr={access} changeFormValue={changeFormValue} keyValue='Отображение товара' name='Отображение товара'/>   
                    <div className='flex justify-between items-center'>
                        <button onClick={handleSubmit} className="bg-gradient-primary px-0 text-base rounded-lg w-full h-[60px] text-white">Сохранить изменения</button>
                    </div>
                    <div className='flex justify-center items-center h-[60px] mt-2'>
                        <button onClick={handleSubmit} className="px-0 font-primary-bold font-bold text-base text-[#FF1C1C] bg-inherit">Удалить товар</button>
                    </div>
                </div>
            </div>      
        </div>
    );
}

export default ModalChangeTovar;
