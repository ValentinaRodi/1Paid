import {useState, useEffect} from 'react';
import Select from '../select/Select';
import uuid from 'react-uuid';
import Input from '../Input';
import {createRoot} from "react-dom/client";
import fetchFunc from "../../services/fetch";

function AddProduct(props) {
    const [title, setTitle] = useState('');
    const [about, setAbout] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');
    const [gameNameError, setGameNameError] = useState('');
    const [categNameError, setCategNameError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [gamesObj, setGamesObj] = useState([]);
    const [games, setGames] = useState([]);
    const [gameName, setGameName] = useState('');
    const [categ, setCateg] = useState([]);
    const [categName, setCategName] = useState([]);
    const [fields, setFields] = useState([]);
    const [formValue, setFormValue] = useState({});
    const [body, setBody] = useState({0: {}, 1: {}, 2: {}});
    const [idBlockFields, setIdBlockFields] = useState('idBlockFields-');
    const [index, setIndex] = useState(1);
    const [count, setCount] = useState(1);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        changeFormValue('title', e.target.value);
    };

    const handleAboutChange = (e) => {
        setAbout(e.target.value);
        changeFormValue('about', e.target.value);

    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
        changeFormValue('price', e.target.value);

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');
        setPriceError('');
        setGameNameError('');
        setCategNameError('');
        let errors = false;
        console.log(formValue);//+
        if (price === '' && typeof (price) != "number") {
            errors = true;

            setPriceError('border-[#FF5343] border-[1px] border-solid');
        }
        if (title === '') {
            errors = true;
            setError('border-[#FF5343] border-[1px] border-solid');
        }
        if (typeof (categName) !== 'string') {
            console.log('categNameERRR:',categName)

            errors = true;
            setCategNameError('border-[#FF5343] border-[1px] border-solid');
        }
        if (typeof (gameName) !== 'string') {
            console.log('gameNameERRR:',gameName)

            errors = true;
            setGameNameError('border-[#FF5343] border-[1px] border-solid');
        }


        if (!errors) {
            fetchFunc('/item/save', 'POST', formValue)
                .then((data) => {
                    if (data.success === true) {
                        // let data = user;
                        // data.avatarBig = avatarPath + 'big/' + data.avatar.big + '.png';
                        // data.avatarMedium = avatarPath + 'medium/' + data.avatar.medium + '.png';
                        // data.avatarSmall = avatarPath + 'small/' + data.avatar.small + '.png';
                        // setUser(data);
                        //
                        // openSaveCompletePopup();
                        console.log('data:', data);
                        props.openModalUpTop();
                    } else {
                        console.log(data.errors)
                    }
                }).catch((error) => {
                console.log('ERRR:', error);
            });
        }

    };

    // Функция для обновления объекта formValue
    const changeFormValue = (key, value, blockId = null) => {

        if (blockId === 0 || blockId === 1 || blockId === 2) {

            body[blockId][key] = value;
            formValue['items'] = body;

        } else {
            switch (key) {
                case 'Игра':
                    key = 'game';
                    break;

                case 'Категория':
                    key = 'category';
                    break;
                case 'Заголовок':
                    key = 'title';
                    break;
                case 'Описание':
                    key = 'about';
                    break;
                case 'Цена':
                    key = 'price';
                    break;
            }
            (key in formValue) ? formValue[key] = value : formValue[key] = value;

        }

        if (value === '') {
            delete formValue[`${key}`];
        }

        if ('game' in formValue && gameName !== formValue['game']) {
            setGameName(formValue['game']);

            const categArr = [];

            gamesObj.forEach(el => {

                if (el.name === formValue['game']) {
                    el.categories.forEach(el => {
                        // console.log('Category-elName:',el.name)
                        categArr.push(el.name);
                    });
                }
                ;
            });

            if (categArr.length !== 0) {
                setCateg(categArr);
            }
            ;
        }
        ;

        // запись названия категории для бэка (на англ.)
        if (formValue['category'] && categName !== formValue['category']) {
            // setCategName( formValue['category'] );
            for (let game of gamesObj){

                if (game['seo_name'] === formValue['game']){
                    for (let category of game['categories']){

                        if (category['name'] === formValue['category']){
                            setCategName(category['seo_name'] );
                            formValue['category'] = category['seo_name'];

                        }
                    }
                }
            }

            gamesObj.forEach(el => {

                if (el.seo_name === formValue['game']) {
                    el.categories.forEach(el => {
                        if (el.seo_name === formValue['category']) {

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
                                    //console.log('data',data);

                                    // console.log('setFields::',data)

                                    setFields(data);
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                            return;
                        }
                        ;
                    });
                }
            });
        }
        ;

        if (!('category' in formValue)) {
            setFields([]);
        }
        ;

        if (!('game' in formValue)) {
            setFormValue({});
            setCateg([]);
            setFields([]);
        }
        ;
    };

    //Получаем список игр
    useEffect(() => {

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
                if (data.games.length !== 0) {
                    setGamesObj(data.games);
                }

                const gamesArr = [];

                data.games.forEach(el => {
                    // gamesArr.push(el.name);
                    gamesArr.push(el.seo_name);
                });

                if (gamesArr.length !== 0) {
                    setGames(gamesArr);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const fieldsBlockAdd = (
        <div key={uuid()} className='rounded-xl border border-solid border-[#E9EAF4] px-3 pt-3 mb-3'>
            <div className='flex justify-end'>
                <button onClick={() => deleteFields(idBlockFields)} className='p-0 z-10'>
                    <img src="/img/icon-minus.svg" alt="minus"/>
                </button>
            </div>
            <div className='flex justify-between flex-wrap mb-6 gap-y-5 mt-[-15px]'>
                {
                    (fields.length !== 0) ? (
                        fields.map(item => {
                            if (item.type === 'float') {
                                return (
                                    <Input key={uuid()} widht='w-[32%]' type='number' changeFormValue={changeFormValue}
                                           keyValue={item.seo_name} blockId={index} name={item.seo_name}
                                           value={item.value}/>
                                )
                            }
                            ;
                            if (item.type === 'options') {
                                // console.log('TARGET-item:',item);

                                return (
                                    <div key={item.id} className='w-[32%] '>
                                        <Select arr={item.value.split('|')} changeFormValue={changeFormValue}
                                                keyValue={item.name}
                                                blockId={index}
                                                name={item.seo_name}/>
                                    </div>
                                )
                            }
                        })
                    ) : (<div></div>)
                }
            </div>
        </div>
    );

    const addFields = () => {
        setCount(count => count + 1);
        const parentFieldsBlock = document.getElementById('parentFieldsAdd');
        const containerBlock = document.createElement("div");
        containerBlock.setAttribute("id", 'idBlockFields-' + index);
        const root = createRoot(containerBlock);
        root.render(fieldsBlockAdd);
        parentFieldsBlock.appendChild(containerBlock);

        setIdBlockFields('idBlockFields-' + index);

        const newIndex = index + 1;
        setIndex(newIndex);
    };

    const deleteFields = (index) => {
        setCount(count => count - 1);
        const parentFieldsBlock = document.getElementById('parentFieldsAdd');
        const fieldsBlock = document.getElementById(index);
        parentFieldsBlock.removeChild(fieldsBlock);
    };

    return (
        <div
            className="h-screen z-[1000] fixed inset-x-0 inset-y-0 overflow-scroll flex justify-center pt-[2%] pb-[3%] px-[2%]">
            <div
                className='shadow-[0px_25px_35px_0px_#E2E3F3A6] h-fit w-full md:w-[758px] bg-white rounded-lg px-6 pb-6'>
                <div className='flex justify-end mb-5 pt-4 sm:pt-6'>
                    <button onClick={props.closeModal} className='p-0 bg-inherit hover:bg-[rgba(241,245,249,1)]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
                <div className='mt-[-10px]'>
                    <div className='flex justify-between flex-wrap gap-y-5 flex-[50%_50%] mb-4'>
                        <div className={' w-[49%]'}>
                            <Select arr={games} changeFormValue={changeFormValue} keyValue='Игра' name='Игра'/>
                        </div>
                        <div className={' w-[49%]'}>
                            <Select arr={categ} changeFormValue={changeFormValue} keyValue='Категория'
                                    name='Категория'/>
                        </div>
                    </div>
                    <div id="idBlockFields-0" className='flex justify-between flex-wrap gap-y-5 mt-[-15px]'>
                        {
                            (fields.length !== 0) ? (

                                fields.map(item => {
                                    // console.log('TARGET-FIELDS-ALL:',fields);

                                    if (item.type === 'float') {
                                        return (
                                            <Input key={uuid()} widht='w-[32%]' changeFormValue={changeFormValue}
                                                   blockId={0}
                                                   keyValue={item.seo_name} name={item.seo_name} value={item.value}/>
                                        )
                                    }
                                    ;
                                    if (item.type === 'options') {
                                        // console.log('TARGET-item2:',item);
                                        return (
                                            <div key={item.id} className='w-[32%] '>
                                                <Select arr={item.value.split('|')} changeFormValue={changeFormValue}
                                                        blockId={0}
                                                        keyValue={item.seo_name}
                                                        name={item.seo_name}/>
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
                    <div></div>
                    <div className='h-px w-full bg-[#E9EAF4] mb-6'></div>
                    <div>
                        <label htmlFor="title"
                               className='block family-acrom-bold text-black font-bold text-xs mb-4'>Заголовок</label>
                        <input onChange={handleTitleChange} value={title} type="text" name="title" id='title'
                               placeholder='Продам аккаунт'
                               className={`${error} mb-5 family-acrom-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 mb-2 border-solid border-red-error bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black`}/>
                    </div>
                    <div className='flex justify-between flex-wrap mb-6 gap-y-5'>
                        <div className='w-full sm:w-[48%]'>
                            <label htmlFor="about"
                                   className='block family-acrom-bold text-black font-bold text-xs mb-4'>Описание (Не
                                обязательно)</label>
                            <input onChange={handleAboutChange} type="text" name="about" id='about'
                                   placeholder="Описание"
                                   className='family-acrom-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                        </div>
                        <div className='w-full sm:w-[48%]'>
                            <label htmlFor="price"
                                   className='block family-acrom-bold text-black font-bold text-xs mb-4'>Цена</label>
                            <input onChange={handlePriceChange} type="text" name="price" id='price'
                                   placeholder="2000 Рублей"
                                   className={`${priceError}family-acrom-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black`}/>
                        </div>
                    </div>
                    <div className='flex justify-between gap-1 items-center'>
                        <button onClick={handleSubmit}
                                className="p-btn px-0 text-base rounded-lg w-full h-[60px] text-white shadow-[0px_4px_24px_0px_#A63DFD40]">Продать
                            товар
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
