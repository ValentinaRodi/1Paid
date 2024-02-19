import  './addProduct.less';
import { useState, useEffect } from 'react';
import ProductAdd from '../productAdd/ProductAdd';
import Select from '../select/Select';

function AddProduct(props) {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    const [gamesObj, setGamesObj] = useState([]);
    const [games, setGames] = useState([]);
    const [categ, setCateg] = useState([]);
    const [fields, setFields] = useState([]);

    const [formValue, setFormValue] = useState({});

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');

        if (title === '') {
          setError('border-[#FF5343] border-[1px] border-solid');
        }

        console.log('formValue', formValue);
    }

    // Функция для обновления объекта formValue
    const changeFormValue = (key, value) => {
    
        (key in formValue) ? formValue[key] = value : formValue[key] = value;
       
        if(value === '') {
            delete formValue[`${key}`];
        }

        if('Игра' in formValue) {
            const categArr = [];

            gamesObj.forEach(el => {

                if(el.name === formValue['Игра']) {
                    el.categories.forEach(el => {
                        categArr.push(el.name);
                    });
                }
            });

            if(categArr.length !== 0) {
                setCateg(categArr);
            };
        };

        if(!('Игра' in formValue)) {
            setCateg([]);
        }
    };

    useEffect(() => {

        //Получаем игры и категории
        fetch("/game/get", {
            method: "GET",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            //console.log('data',data)
            if(data.games.length !== 0) {
                setGamesObj(data.games);
            }

            const gamesArr = [];

            data.games.forEach(el => {
                gamesArr.push(el.name);
            });
            
            if(gamesArr.length !== 0) {
                setGames(gamesArr);
            } 
        })
        .catch((error) => {
            console.log(error);
        });

    }, []);
    console.log('formValue', formValue)

    useEffect(() => {
        if(formValue['Категория']) {

            gamesObj.forEach(el => {

                if(el.name === formValue['Игра']) {
                    el.categories.forEach(el => {
                        if(el.name === formValue['Категория']) {
                            
                            //Получаем поля выбранной категории
                            fetch(`/field/get-list/${el.id}`, {
                                method: "GET",
                                headers: {
                                    "X-Requested-With": "XMLHttpRequest",
                                    "Content-Type": "application/json",
                                },
                            })
                            .then((res) => {
                                return res.json();
                            })
                            .then((data) => {
                                //console.log('data',data)
                                setFields(data);
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                            return;
                        };
                    });
                }
            });
        };
        
    }, [categ]);

    const arr = ['localhost', 'Москва', 'GTA V RP'];

    return (
        <div className="h-screen fixed inset-x-0 inset-y-0 overflow-scroll flex justify-center pt-[2%] pb-[3%] px-[2%]">
            <div className='shadow-[0px_25px_35px_0px_#E2E3F3A6] h-fit w-full md:w-[758px] bg-white rounded-lg px-6 pb-6'>
                    {/* <div className='w-full sm:hidden flex justify-center'>
                        <div className='flex justify-center items-center px-6 h-[22px] rounded-b-[20px] shadow-[0px_4px_32px_0px_#9D3FFC6B] bg-[linear-gradient(90deg,#8CD23C_0%,#417A00_100%)]'>
                            <p className='family-bold font-bold text-xs text-white uppercase'>Добавление товара</p>
                        </div>
                    </div> */}
                    <div className='flex justify-end mb-5 pt-0 sm:pt-6'>
                        <button onClick={props.closeModal} className='p-0 bg-inherit hover:bg-[rgba(241,245,249,1)]'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className='mt-[-10px]'>
                        <div className='flex justify-between flex-wrap gap-y-5 flex-[50%_50%]'>
                            <div className='w-[49%]'>
                                <Select arr={games} changeFormValue={changeFormValue} name='Игра'/>
                            </div>
                            <div className='w-[49%]'>
                                <Select arr={categ} changeFormValue={changeFormValue} name='Категория'/>   
                            </div>
                        </div>
                        {
                            (fields.length !== 0) ? (
                                <div>
                                    <div className='flex justify-between flex-wrap mb-9 gap-y-5'>
                                        <div className='w-[49%]'>
                                            <label htmlFor="exist" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Наличие</label>
                                            <input type="text" name="exist" id='exist' defaultValue='1000шт' className='family-acrom-bold text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                                        </div>
                                        <div className='w-[49%]'>
                                            <Select arr={categ} changeFormValue={changeFormValue} name='Сервер'/>
                                        </div>
                                    </div>
                                    <div className='flex justify-between flex-wrap mb-6 gap-y-5 mt-[-15px]'>
                                        <div className='w-full sm:w-[32%]'>
                                            <Select arr={arr} changeFormValue={changeFormValue} name='Срок'/>
                                        </div>
                                        <div className='w-full sm:w-[32%]'>
                                            <Select arr={arr} changeFormValue={changeFormValue} name='Тип'/>
                                        </div>
                                        <div className='w-full sm:w-[32%]'>
                                            <label htmlFor="content" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Содержимое</label>
                                            <input type="text" name="content" id='content' defaultValue='Makmilan Gr-23' className='family-acrom-bold text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                                        </div>
                                    </div>
                                    <div className='rounded-xl border border-solid border-[#E9EAF4] px-3 pt-3 mb-3'>
                                        <div className='flex justify-end'>
                                            <button className='p-0'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="24" rx="12" fill="#D2D5EA"/>
                                                    <path d="M6 12L18 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className='flex justify-between flex-wrap mb-6 gap-y-5 mt-[-15px]'>
                                            <div className='w-full sm:w-[32%]'>
                                                <Select arr={arr} changeFormValue={changeFormValue} name='Срок'/>
                                            </div>
                                            <div className='w-full sm:w-[32%]'>
                                                <Select arr={arr} changeFormValue={changeFormValue} name='Тип'/>
                                            </div>
                                            <div className='w-full sm:w-[32%]'>
                                                <label htmlFor="content" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Содержимое</label>
                                                <input type="text" name="content" id='content' defaultValue='Makmilan Gr-23' className='family-acrom-bold text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-xl border border-solid border-[#E9EAF4] px-3 pt-3 mb-6'>
                                        <div className='flex justify-end'>
                                            <button className='p-0'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="24" rx="12" fill="#D2D5EA"/>
                                                    <path d="M6 12L18 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className='flex justify-between flex-wrap mb-6 gap-y-5 mt-[-15px]'>
                                            <div className='w-full sm:w-[32%]'>
                                                <Select arr={arr} changeFormValue={changeFormValue} name='Срок'/>
                                            </div>
                                            <div className='w-full sm:w-[32%]'>
                                                <Select arr={arr} changeFormValue={changeFormValue} name='Тип'/>
                                            </div>
                                            <div className='w-full sm:w-[32%]'>
                                                <label htmlFor="content" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Содержимое</label>
                                                <input type="text" name="content" id='content' defaultValue='Makmilan Gr-23' className='family-acrom-bold text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center mb-6'>
                                        <button className='p-0'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="24" height="24" rx="12" fill="#D2D5EA"/>
                                                <path d="M12 18V6M6 12L18 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ) : (<div className='text-[#FF5343]'></div>)
                        }
                        <div className='h-px w-full bg-[#E9EAF4] mb-6'></div>
                        <div>
                            <label htmlFor="title" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Заголовок</label>
                            <input onChange={handleTitleChange} value={title} type="text" name="title" id='title' placeholder='Продам 5000 террабайт' className={`${error} mb-5 family-acrom-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 mb-2 border-solid border-red-error bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black`}/>
                        </div>
                        <div className='flex justify-between flex-wrap mb-6 gap-y-5'>
                            <div className='w-full sm:w-[48%]'>
                                <label htmlFor="about" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Описание (Не обязательно)</label>
                                <input type="text" name="about" id='about' placeholder="Описание" className='family-acrom-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                            </div>
                            <div className='w-full sm:w-[48%]'>
                                <label htmlFor="price" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Цена</label>
                                <input type="text" name="price" id='price' placeholder="20005 Рублей" className='family-acrom-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                            </div>
                        </div>
                        <div className='flex justify-between gap-1 items-center'>
                            <button onClick={handleSubmit} className="p-btn px-0 text-base rounded-lg w-full h-[60px] text-white shadow-[0px_4px_24px_0px_#A63DFD40]">Продать товар</button>
                        </div>
                    </div>
            </div>      
        </div>
    );
}

export default AddProduct;
