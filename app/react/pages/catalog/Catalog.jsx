import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import "./catalog.less";
import uuid from 'react-uuid';
import InputRange from '../../components/inputRange/InputRange';
import Select from '../../components/select/Select';
import LayoutBtn from '../../components/LayoutBtn';
import CardGame from "../../components/cardGame/CardGame";
import CardGameString from "../../components/cardGame/CardGameString";
import Checkbox from "../../components/checkbox/Checkbox";
import Title from "../../components/title/Title";

function Catalog() {
    const [btn, setBtn] = useState(true);
    const [gamesObj, setGamesObj] = useState([]);
    const [gamesItems, setGamesItems] = useState([]);
    const [btnYet, setBtnYet] = useState('hidden');
    const [hiddenNav, setHiddenNav] = useState('overflow-hidden');
    const [heightNav, setHeight] = useState('h-[27px]');
    const [textBtnLink, setTextBtnLink] = useState('Ещё');
    const [filterObj, setFilterObj] = useState([]);
    const [formValue, setFormValue] = useState({});
    const [resetFilter, setResetFilter] = useState(false);
    const [resetRange, setRange] = useState(false);
    const [resetCheck, setResetCheck] = useState(false);
    const [cardsView, setCardsView] = useState(true);
    const [cardsViewImg, setCardsViewImg] = useState('/img/icon-cards-stroke.svg');
    const [cardsViewDiv, setCardsViewDiv] = useState('');
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(false);
    const [filterMob, setFilterMob] = useState(false);

    const changeCheckOn = () => {
        setChecked1(!checked1);
        setChecked2(false);
    };
    
    const changeCheckOff = () => {
        setChecked2(!checked2);
        setChecked1(false);
    };

    const location = useLocation();
    const { game, category, categoryId, gamesObjAdd } = location.state;

    useEffect(() => {

        //запрос на отображение категорий
        fetch(`/catalog/${game}`, {
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
            
            //если переход из главной страницы, то пересобираем категории, чтоб вывелась первая та, которую выбрали
            if(gamesObjAdd === undefined) {
                // Находим индекс элемента с нужным id
                const index = data.categories.findIndex(category => category.id === categoryId);

                // Если элемент с нужным id найден и он не является первым элементом
                if (index !== -1 && index !== 0) {
                    // Создаем новый массив на основе текущего categories
                    const newCategories = [...data.categories];

                    // Перемещаем элемент с нужным id на первую позицию
                    newCategories.splice(0, 0, newCategories.splice(index, 1)[0]);

                    // Присваиваем новый массив категорий обратно в categories
                    data.categories = newCategories;
                    
                }
                setGamesObj(data);
            } else {
                setGamesObj(gamesObjAdd);
            }
        })
        .catch((error) => {
            console.log(error);
        });
        

        //запрос на отображение карточек (items) в выбранной категории
        fetch(`/catalog/${game}/${category}`, {
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
           setGamesItems(data);
        })
        .catch((error) => {
            console.log(error);
        });

        //запрос на отображение фильтра в выбранной категории
        fetch(`/field/get-list-filters/${categoryId}`, {
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
           setFilterObj(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [categoryId]);

    useEffect(() => {
        //Определяем показывать кнопку "Еще" или нет для категорий
        const parentDiv = document.getElementById("parent");
        const navDiv = document.getElementById("nav");
        const allLinks = navDiv.querySelectorAll('a');
        const parentRect = parentDiv.getBoundingClientRect();

        allLinks.forEach(el => {
            
            const childRect = el.getBoundingClientRect();
            
            if(parentRect.bottom <= childRect.top) {
                setBtnYet('');
            }
        });
    }, []);

    const openNav = () => {
        (hiddenNav === '') ? setHiddenNav('overflow-hidden') : setHiddenNav('');
        (heightNav === 'h-full') ? setHeight('h-[27px]') : setHeight('h-full');
        (textBtnLink === 'Скрыть') ? setTextBtnLink('Ещё') : setTextBtnLink('Скрыть');
    };

    const arr = ['localhost', 'Москва', 'GTA V RP'];

    // Функция для обновления объекта formValue
    const changeFormValue = (key, value) => {
        (key in formValue) ? formValue[key] = value : formValue[key] = value;
       
        if(value === '') {
            delete formValue[`${key}`];
        }
    };

    //Отправка фильтра
    const submitFilter = () => {
        setFilterMob(false);
        console.log('formValue', formValue);
    };

    //Сброс фильтра
    const cancelFilter = () => { 
        setRange(true);
        setResetFilter(true);
        setFormValue({});
        setResetFilter(false);
        setResetCheck(true);
    };

    //RangeInput разрешить ввод
    const changeStateRangeFalse = () => {
        setRange(false);
    };

    //Checkbox разрешить ввод
    const changeCheck = () => {
        console.log('reset',resetCheck)
        setResetCheck(false);
    };

    //Для отображения товаров карточки/строка
    const changeViewCards = () => {
        (cardsView) ? setCardsView(false) : setCardsView(true);
        (cardsViewImg === '/img/icon-card-tile.svg') ? setCardsViewImg('/img/icon-cards-stroke.svg') : setCardsViewImg('/img/icon-card-tile.svg');
        (cardsViewDiv === '') ? setCardsViewDiv('_view-list') : setCardsViewDiv(''); 
    };

    const showFilter = () => {
        setFilterMob(!filterMob);
    };

    return (
        
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0 mt-10 xl:mt-0">
            <div className="w-full layout-main relative">
                <Title title={`Каталог ${game}`} viewCards='true' changeViewCards={changeViewCards} cardsViewImg={cardsViewImg} search='true'/>
                <button onClick={showFilter} className='absolute top-[70px] sm:top-[22px] right-[55px] sm:right-[315px] flex-shrink-0 flex min-[880px]:hidden justify-center items-center w-11 h-11 rounded-full bg-[#e8eaf7] hover:bg-[#dcdff1]'>
                    <img className='w-[40%] sm:w-[50%]' src='/img/icon-filter.svg' alt='filter' />
                </button>
                {filterMob ?
                    <div className='absolute top-[134px] sm:top-[85px] right-0 z-[100] block min-[880px]:hidden shadow-2xl w-[357px] bg-white p-[24px] rounded-lg'>
                         {
                            (filterObj.length !== 0) ? (
                                filterObj.map(filter => {
                                    if(filter.type === 'options') {
                                        return (
                                            <Select key={uuid()} reset={resetFilter} changeFormValue={changeFormValue} arr={filter.value.split('|')} keyValue={filter.seo_name} name={filter.seo_name}/>
                                        )
                                    }
                                })
                            ) : (<div></div>)
                        }
                        <InputRange changeStateRangeFalse={changeStateRangeFalse} reset={resetRange} changeFormValue={changeFormValue} min={1} max={150000} styleIcon={'slider-icon_blue'} styleDiv={'gradient-blue'} name='Цена'/>
                        <Select key={uuid()} reset={resetFilter} arr={arr} changeFormValue={changeFormValue} keyValue='Сервер' name='Сервер'/>
                        <InputRange changeStateRangeFalse={changeStateRangeFalse} reset={resetRange} changeFormValue={changeFormValue} min={1} max={30000} styleIcon={'slider-icon_green'} styleDiv={'gradient-green'} keyValue='Ранг' name='Ранг'/>
                        <InputRange changeStateRangeFalse={changeStateRangeFalse} reset={resetRange} changeFormValue={changeFormValue} min={1} max={150000} styleIcon={'slider-icon_blue'} styleDiv={'gradient-blue'} keyValue='Количество доната' name='Количество доната'/>
                        <Select key={uuid()} reset={resetFilter} arr={arr} changeFormValue={changeFormValue} keyValue='' name='Тип аккаунта'/>
                        <Checkbox changeFormValue={changeFormValue} reset={resetCheck} changeCheck={changeCheck}/>
                        <div>
                            <button onClick={submitFilter} className="mb-4 btn gap-2 justify-center flex items-center text-white w-full h-[57px] rounded-[4px] bg-[linear-gradient(36.87deg,#339CFC_18.57%,#1E61EB_80.26%)] shadow-[0px_4px_35px_0px_rgba(51,156,252,0.45)]">
                                <img src='/img/icon-btn.svg' alt='filter'/>
                                Применить фильтр
                            </button>
                            <button onClick={cancelFilter} className=" gap-2 justify-center flex items-center w-full h-[57px] rounded-[4px] bg-[#EAEBF8] hover:bg-[rgb(208_216_243/1)]">
                                <img src='/img/icon-btn2.svg' alt='filter'/>
                                Сбросить фильтр
                            </button>
                        </div>
                    </div>
                    : null
                }
                <div className="flex items-start py-6 justify-between rounded-lg bg-white px-6 mb-3">
                    <div id="parent" className={`${hiddenNav} nav-show pt-2 h-full w-full flex items-center justify-start`}>
                        <nav id="nav" className={`${heightNav} nav-item pb-2.5 flex gap-x-6 flex-wrap gap-y-6`}>
                            {
                                (gamesObj.length !== 0) ? (
                                    gamesObj.categories.map((categ) => (
                                        <Link to={`/catalog/${game}/${categ.seo_name}`} state={{ game: game,  category: categ.seo_name, categoryId: categ.id, gamesObjAdd: gamesObj }} key={uuid()} className={`${(categ.id === categoryId) ? 'nav-link-prim' : 'nav-link'} nav-link-tab font-primary-bold text-xs sm:text-sm text-[#8A98B3] uppercase`}>{categ.name}</Link> 
                                    ))
                                ) : null
                            }
                        </nav>
                    </div>
                    <button onClick={openNav} className={`${btnYet} ml-10 text-[#8A98B3] bg-white text-sm border-solid border-[1px] rounded-[40px] border-[rgb(192,194,220,0.35)] px-4 py-2 hover:bg-[#e8eaf7]`}>{textBtnLink}</button>
                </div>
                <div className="rounded-lg bg-white p-6 mb-3">
                    <h2 className="mb-2 sh-title-text font-secondary-bold text-bold text-base sm:text-xl text-black">Warface</h2>
                    <p className="w-[80%] font-primary-bold text-xs sm:text-sm text-[#8A98B3]">Всего доступно для продажи 20 товаров одного типа. Всего доступно для продажи 20 товаров одного типа. Всего доступно для продажи 20 товаров одного типа. Всего доступно для продажи 20 товаров одного типа. Всего доступно для продажи 20 товаров одного типа.</p>
                </div>
                <div className='flex gap-2'>
                    <div className='hidden min-[880px]:block filter h-fit bg-white rounded-[8px] min-w-[317px] p-6'>
                        {
                            (filterObj.length !== 0) ? (
                                filterObj.map(filter => {
                                    if(filter.type === 'options') {
                                        return (
                                            <Select key={uuid()} reset={resetFilter} changeFormValue={changeFormValue} arr={filter.value.split('|')} keyValue={filter.seo_name} name={filter.seo_name}/>
                                        )
                                    }
                                })
                            ) : (<div></div>)
                        }
                        <InputRange changeStateRangeFalse={changeStateRangeFalse} reset={resetRange} changeFormValue={changeFormValue} min={1} max={150000} styleIcon={'slider-icon_blue'} styleDiv={'gradient-blue'} name='Цена'/>
                        <Select key={uuid()} reset={resetFilter} arr={arr} changeFormValue={changeFormValue} keyValue='Сервер' name='Сервер'/>
                        <InputRange changeStateRangeFalse={changeStateRangeFalse} reset={resetRange} changeFormValue={changeFormValue} min={1} max={30000} styleIcon={'slider-icon_green'} styleDiv={'gradient-green'} keyValue='Ранг' name='Ранг'/>
                        <InputRange changeStateRangeFalse={changeStateRangeFalse} reset={resetRange} changeFormValue={changeFormValue} min={1} max={150000} styleIcon={'slider-icon_blue'} styleDiv={'gradient-blue'} keyValue='Количество доната' name='Количество доната'/>
                        <Select key={uuid()} reset={resetFilter} arr={arr} changeFormValue={changeFormValue} keyValue='' name='Тип аккаунта'/>
                        <Checkbox changeFormValue={changeFormValue} reset={resetCheck} changeCheck={changeCheck}/>
                        <div>
                            <button onClick={submitFilter} className="mb-4 btn gap-2 justify-center flex items-center text-white w-full h-[57px] rounded-[4px] bg-[linear-gradient(36.87deg,#339CFC_18.57%,#1E61EB_80.26%)] shadow-[0px_4px_35px_0px_rgba(51,156,252,0.45)]">
                                <img src='/img/icon-btn.svg' alt='filter'/>
                                Применить фильтр
                            </button>
                            <button onClick={cancelFilter} className=" gap-2 justify-center flex items-center w-full h-[57px] rounded-[4px] bg-[#EAEBF8] hover:bg-[rgb(208_216_243/1)]">
                                <img src='/img/icon-btn2.svg' alt='filter'/>
                                Сбросить фильтр
                            </button>
                        </div>
                    </div>
                    <div className="pcg w-full">
                        <div className={`${cardsViewDiv} pcg-grid view-grid grid gap-3 grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3`}>
                            {
                                (gamesItems.length !== 0 && gamesItems.items !== undefined) ? 
                                    
                                    gamesItems.items.map((card) => {
                                    return (cardsView) ? 
                                        <CardGame key={uuid()} new={card.new} rank={card.rank} id={card.id} seoName={card.seo_name} icon='product-preview-1.fcb96f91.png' name={card.name} description={card.description} price={card.price}/> 
                                    : 
                                        <CardGameString key={uuid()} rank={card.rank} id='1' new={card.new} seoName={card.seo_name} icon='product-preview-1.fcb96f91.png' name={card.name} description={card.description} price={card.price}/> 
                                    }) 
                                : <div className='text-[#FF5343]'></div>
                            }
                        </div>
                        {(!btn) ? null :
                            <div className="hidden sgc-f flex justify-center mt-10 ">
                                <button className="sgc-btn-more rounded-full h-[60px] flex items-center justify-center px-12 bg-[#E3E9F5] duration-200 hover:bg-[#d3d7e0]">
                                    <div className="btn-text font-secondary-bold text-base text-[#B9C3D6]">Показать еще 25</div>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <LayoutBtn toTop='true'/>
        </div>  
       
    );
}

export default Catalog;

