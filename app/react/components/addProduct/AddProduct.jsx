import { useState, useEffect } from 'react';
import Select from '../select/Select';
import SelectCheck from '../selectCheck/SelectCheck';
import uuid from 'react-uuid';
import Input from '../Input';
import { createRoot } from "react-dom/client";
import ImageUploader from '../imageUploader/ImageUploader';

function AddProduct(props) {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    const [gamesObj, setGamesObj] = useState([]);
    const [games, setGames] = useState([]);
    const [gameName, setGameName] = useState('');
    const [categ, setCateg] = useState([]);
    const [categName, setCategName] = useState([]);
    const [fields, setFields] = useState([]);
    const [formValue, setFormValue] = useState({});
    const [idBlockFields, setIdBlockFields] = useState('idBlockFields');
    const [index, setIndex] = useState(1);
    const [count, setCount] = useState(1);
    
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');

        if (title === '') {
          setError('border-[#FF5343] border-[1px] border-solid');
        } else {
            props.closeModal();
            props.openModalUpTop();
        }
    };

    // Функция для обновления объекта formValue
    const changeFormValue = (key, value) => {
        //console.log('formValue',formValue);
        
        (key in formValue) ? formValue[key] = value : formValue[key] = value;
       
        if(value === '') {
            delete formValue[`${key}`];
        }

        if('Игра' in formValue && gameName !== formValue['Игра']) {
            setGameName(formValue['Игра']);
            setCateg(['Аккаунты', 'Пин-коды', 'Буст РМ', 'Спецоперации']);
            // const categArr = [];

            // gamesObj.forEach(el => {

            //     if(el.name === formValue['Игра']) {
            //         el.categories.forEach(el => {
            //             categArr.push(el.name);
            //         });
            //     };
            // });

            // if(categArr.length !== 0) {
            //     setCateg(categArr);
            // };
        };

        if(formValue['Категория'] && categName !== formValue['Категория']) {
            setCategName(formValue['Категория']);
            setFields([
                {
                    "id": 1,
                    "seo_name": "account_rating",
                    "lang_id": 16,
                    "type": "float",
                    "value": "0",
                    "created_at": null,
                    "updated_at": null,
                    "search": 0
                },
                {
                    "id": 3,
                    "seo_name": "options",
                    "lang_id": 19,
                    "type": "options",
                    "value": "wf1|wf2|wf3",
                    "created_at": "2024-02-01 23:58:34",
                    "updated_at": "2024-02-01 23:58:34",
                    "search": 0
                },
                {
                    "id": 4,
                    "seo_name": "options-check",
                    "lang_id": 20,
                    "type": "options-check",
                    "value": "wf1|wf2|wf3",
                    "created_at": "2024-02-02 00:33:21",
                    "updated_at": "2024-02-02 00:33:21",
                    "search": 1
                }
            ]);

            // gamesObj.forEach(el => {

            //     if(el.name === formValue['Игра']) {
            //         el.categories.forEach(el => {
            //             if(el.name === formValue['Категория']) {
                            
            //                 // //Получаем поля выбранной категории
            //                 // fetch(`/field/get-list/${el.id}`, {
            //                 //     method: "GET",
            //                 //     headers: {
            //                 //         "X-Requested-With": "XMLHttpRequest",
            //                 //         "Content-Type": "application/json",
            //                 //     },
            //                 // })
            //                 // .then((res) => {
            //                 //     return res.json();
            //                 // })
            //                 // .then((data) => {
            //                 //     //console.log('data',data);
            //                 //     setFields(data);
            //                 // })
            //                 // .catch((error) => {
            //                 //     console.log(error);
            //                 // });
            //                 return;
            //             };
            //         });
            //     }
            // });
        }; 
        
        if(!('Категория' in formValue)) {
            setFields([]);
        };

        if(!('Игра' in formValue)) {
            setFormValue({}); 
            setCateg([]);
            setFields([]);
        };
    };

    //Получаем список игр
    useEffect(() => {
        setGames(['Warface', 'Game2', 'Game3']);
        // fetch("/game/get", {
        //     method: "GET",
        //     headers: {
        //         "X-Requested-With": "XMLHttpRequest",
        //         "Content-Type": "application/json",
        //     },
        // })
        // .then((res) => {
        //     return res.json();
        // })
        // .then((data) => {
        //     //console.log('data',data)
        //     if(data.games.length !== 0) {
        //         setGamesObj(data.games);
        //     }

        //     const gamesArr = [];

        //     data.games.forEach(el => {
        //         gamesArr.push(el.name);
        //     });
            
        //     if(gamesArr.length !== 0) {
        //         setGames(gamesArr);
        //     } 
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
    }, []);

    useEffect(() => {
    }, [fields]);

    const arrContent = ['Содержимое1', 'Содержимое2', 'Содержимое3', 'Содержимое4','Содержимое1', 'Содержимое2', 'Содержимое3', 'Содержимое4','Содержимое1', 'Содержимое2', 'Содержимое3', 'Содержимое4','Содержимое1', 'Содержимое2', 'Содержимое3', 'Содержимое4','Содержимое1', 'Содержимое2', 'Содержимое3', 'Содержимое4',]

    const fieldsBlockAdd = (
        <div key={uuid()} className='rounded-xl border border-solid border-[#E9EAF4] px-3 pt-3 mb-3'>
            <div className='flex justify-end'>
                <button onClick={() => deleteFields(idBlockFields)} className='p-0 z-10'>
                    <img src="/img/icon-minus.svg" alt="minus"/>
                </button>
            </div>
            <div className='flex justify-between flex-wrap mb-6 sm:gap-y-5 mt-[-15px]'>
                {
                    (fields.length !== 0) ? (
                        fields.map(item => {
                            if(item.type === 'float') {
                                return (
                                    <Input key={uuid()} widht='w-full sm:w-[32%]' type='number' changeFormValue={changeFormValue} keyValue={item.seo_name} name={item.seo_name} value={item.value} />
                                )
                            };
                            if(item.type === 'options') {
                                return (
                                    <div key={item.id} className='w-full sm:w-[32%] mt-4 sm:mt-0'>
                                        <Select arr={item.value.split('|')} changeFormValue={changeFormValue} keyValue={item.seo_name + '_productAdd' + '-' + index} name={item.seo_name}/>
                                    </div>
                                )
                            };
                            if(item.type === 'options-check') {
                                return (
                                    <div key={item.id} className='w-full sm:w-[32%] '>
                                        <SelectCheck arr={item.value.split('|')} changeFormValue={changeFormValue} keyValue={item.seo_name + '_product1' + '-' + item.id} name={item.seo_name}/>
                                    </div>
                                )
                            }
                        })
                    ) 
                    : (<div></div>)
                }        
            </div>
        </div>
    );

    const addFields = () => {
        setCount(count => count + 1);
        const parentFieldsBlock = document.getElementById('parentFieldsAdd');
        const containerBlock = document.createElement("div");
        containerBlock.setAttribute("id", idBlockFields);
        const root = createRoot(containerBlock);
        root.render(fieldsBlockAdd);
        parentFieldsBlock.appendChild(containerBlock);   
        
        setIdBlockFields('idBlockFields' + index);
        
        const newIndex = index + 1;
        setIndex(newIndex);
    };
   
    const deleteFields = (index) => {
        setCount(count => count - 1);
        const parentFieldsBlock = document.getElementById('parentFieldsAdd');
        const fieldsBlock = document.getElementById(index);
        parentFieldsBlock.removeChild(fieldsBlock);
    };

    const clickAddImg = () => {

    };

    const clickDeleteImg = () => {

    };

    const [checkedBuy, setCheckedBuy] = useState(true);

    const changeCheckBuy = () => {
        setCheckedBuy(!checkedBuy);
    };

    return (
        <div className="h-screen z-[1000] fixed inset-x-0 inset-y-0 overflow-scroll flex justify-center pt-[2%] pb-[3%] px-[2%]">
            <div className='shadow-[0px_25px_35px_0px_#E2E3F3A6] h-fit w-full md:w-[758px] bg-white rounded-lg px-6 pb-6'>
                <div className='flex justify-end mb-5 pt-4 sm:pt-6'>
                    <button onClick={props.closeModal} className='p-0 bg-inherit hover:bg-[rgba(241,245,249,1)]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
                <div className="w-[280px] mb-5 mt-0 sm:mt-[-30px]">
                    <div className="lf-change-buy">
                        <label className="lf-change-item-buy">
                            <input type="radio" name="lf_type-want" value="1" onChange={changeCheckBuy} checked={(checkedBuy) ? "checked" : ""} />
                            <div className="lf-change-btn-buy">
                                <div className="lf-change-icon">Хочу купить</div>
                            </div>
                        </label>
                        <label className="lf-change-item-buy">
                            <input type="radio" name="lf_type-buy-want" value="1" onChange={changeCheckBuy} checked={(checkedBuy) ? "" : "checked"}/>
                            <div className="lf-change-btn-buy">
                                <div className="lf-change-icon">Хочу продать</div>
                            </div>
                        </label>
                    </div>   
                </div>
                <div  className='mt-[-10px]'>
                    <div className='flex justify-between flex-col sm:flex-row sm:gap-y-5 flex-[50%_50%] mb-4'>
                        <div className='w-full sm:w-[49%]'>
                            <Select arr={games} changeFormValue={changeFormValue} keyValue='Игра' name='Игра'/>
                        </div>
                        <div className='w-full sm:w-[49%]'>
                            <Select arr={categ} changeFormValue={changeFormValue} keyValue='Категория' name='Категория'/>   
                        </div>
                    </div>
                    <div className='flex justify-between flex-wrap sm:gap-y-5 mt-[-15px]'>
                        {
                            (fields.length !== 0) ? (
                                fields.map(item => {
                                    if(item.type === 'float') {
                                        return (
                                            <Input key={uuid()} widht2='w-full' widht='w-[32%]' changeFormValue={changeFormValue} keyValue={item.seo_name} name={item.seo_name} value={item.value} />
                                        )
                                    };
                                    if(item.type === 'options') {
                                        return (
                                            <div key={item.id} className='w-full sm:w-[32%] mt-4 sm:mt-0'>
                                                <Select arr={item.value.split('|')} changeFormValue={changeFormValue} keyValue={item.seo_name + '_product1' + '-' + item.id} name={item.seo_name}/>
                                            </div>
                                        )
                                    };
                                    if(item.type === 'options-check') {
                                        return (
                                            <div key={item.id} className='w-full sm:w-[32%] '>
                                                <SelectCheck arr={item.value.split('|')} changeFormValue={changeFormValue} keyValue={item.seo_name + '_product1' + '-' + item.id} name={item.seo_name}/>
                                            </div>
                                        )
                                    }
                                })
                            ) : (<div></div>)
                        }
                    </div>
                    <div id='parentFieldsAdd'></div>
                    {
                        (fields.length !== 0 && count < 3) ? (
                            <div className='flex justify-center mb-6'>
                                <button onClick={addFields} className='p-0'>
                                    <img src="/img/icon-plus.svg" alt="plus"/>
                                </button>
                            </div>
                        ) : (<div></div>)    
                    }
                    <div ></div>
                    <div className='h-px w-full bg-[#E9EAF4] mb-4 sm:mb-6'></div>
                    <div>
                        <label htmlFor="title" className='block font-secondary-bold text-black font-bold text-xs mb-4'>Заголовок</label>
                        <input onChange={handleTitleChange} value={title} type="text" name="title" id='title' placeholder='Продам аккаунт' className={`${error} mb-5 font-secondary-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 mb-2 border-solid border-red-error bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black`}/>
                    </div>
                    <div className='flex justify-between flex-wrap mb-6 gap-y-5'>
                        <div className='w-full sm:w-[48%]'>
                            <label htmlFor="about" className='block font-secondary-bold text-black font-bold text-xs mb-4'>Описание (Не обязательно)</label>
                            <input type="text" name="about" id='about' placeholder="Описание" className='font-secondary-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                        </div>
                        <div className='w-full sm:w-[48%]'>
                            <label htmlFor="price" className='block font-secondary-bold text-black font-bold text-xs mb-4'>Цена</label>
                            <input type="text" name="price" id='price' placeholder="2000 Рублей" className='font-secondary-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <ImageUploader />
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
