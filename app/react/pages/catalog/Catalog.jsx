import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import "./catalog.less";
import uuid from 'react-uuid';
import InputRange from '../../components/inputRange/InputRange';
import Select from '../../components/select/Select';

function Catalog() {
    const [btn, setBtn] = useState(true);
    const [primClass, setPrimClass] = useState(true);
    const [gamesObj, setGamesObj] = useState([]);

    const location = useLocation();
    const { game, categoryId } = location.state;

    const openMenuNav = () => {
        console.log('dgfdf')
    }

    useEffect(() => {

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

            //console.log(data);

            setGamesObj(data);
        })
        .catch((error) => {
            console.log(error);
        });
        
    }, []);

    // useEffect(() => {
    //     if(dataCards.length !== 0) {
    //         setGamesObj(Object.values(dataCards.games))
    //         if(dataCards.offset + 8 >= dataCards.count) {
    //             setBtn(false);
    //         }
    //     }
    // }, [dataCards]);



    // var navDiv = document.querySelector('.nav-show');
    // var navItem = document.querySelector('.nav-item');
      
    // console.log('navDiv', navDiv)



    const arr = {0:'localhost', 1:'Москва', 2:'GTA V RP'};

    return (

        <div className={`layout-b pb-4 min-w-0`}>
            <div className="sh flex justify-between items-center gap-x-3 mb-10">
                <div className="flex flex-col justify-start">
                    <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">{`Каталог ${game}`}</h2>
                    <div className="sh-title-line mt-2 rounded-full w-9 h-1 2md:mt-2 bg-gradient-primary">
                    </div>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <button className="img-hid cursor-pointer bg-inherit">
                        <img src="/img/icon-menu-catalog.svg" alt="btn-icon"/>
                    </button>
                    <div className="sh-bar flex items-center gap-2 2md:w-full 2md:flex-row-reverse">
                        <div className="sh-search rounded-full h-[45px] px-6 max-w-[270px] w-full flex items-center bg-[#E8EAF7] 2md:max-w-none 2md:flex-grow 2md:h-10 2md:px-3">
                            <button className="sh-search-icon cursor-pointer bg-inherit flex-shrink-0 w-4 h-full [&amp;_svg]:w-full flex justify-center items-center text-[#B8BACF] duration-100 hover:text-black">
                                <img src="/img/icon-sh-search-icon.svg" alt="sh-search-icon"/>
                            </button>
                            <input className="sh-search-input flex-grow ml-2.5 w-full h-full bg-transparent font-primary-med text-base text-black 2md:text-sm" placeholder="Поиск"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center h-[85px] justify-between rounded-lg bg-white px-6 mb-3">
                <div className="nav-show overflow-hidden h-full w-full flex items-center justify-start">
                    <nav className="nav-item flex gap-x-6 h-[22px] flex-wrap gap-y-10 justify-between">
                        {
                            (gamesObj.length !== 0) ? (
                                gamesObj.categories.map((categ, i) => (
                                    <Link to={`catalog/${game}/${categ.seo_name}`} key={uuid()} className={`${(i === 0) ? 'nav-link-prim' : 'nav-link'} nav-link-tab font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm`}>{categ.name}</Link> 
                                ))
                            ) : (<div className='text-[#FF5343]'>error - categories not found</div>)
                        }
                        <div className='text-[#FF5343]'>СПЕЦОПЕРАЦИИ</div>
                        <div className='text-[#FF5343]'>СПЕЦОПЕРАЦИИ</div>
                        <div className='text-[#FF5343]'>СПЕЦОПЕРАЦИИ</div>
                        <div className='text-[#FF5343]'>СПЕЦОПЕРАЦИИ</div>
                        <div className='text-[#FF5343]'>СПЕЦОПЕРАЦИИ</div>
                        <div className='text-[#FF5343]'>СПЕЦОПЕРАЦИИ</div>
                    </nav>
                </div>
                <button onClick={openMenuNav} className='hidden ml-10 text-[#8A98B3] bg-white text-sm border-solid border-[1px] rounded-[40px] border-[rgb(192,194,220,0.35)] px-4 py-2 hover:bg-[#e8eaf7]'>Ещё</button>
            </div>
            <div className="rounded-lg bg-white p-6 mb-3">
                <h2 className="mb-2 sh-title-text font-secondary-bold text-bold text-[21px] text-black">Warface</h2>
                <p className="w-[80%] font-primary-bold text-sm text-[#8A98B3]">Всего доступно для продажи 20 товаров одного типа. Всего доступно для продажи 20 товаров одного типа. Всего доступно для продажи 20 товаров одного типа. Всего доступно для продажи 20 товаров одного типа. Всего доступно для продажи 20 товаров одного типа.</p>
            </div>
            <div className='flex gap-2'>
                <div className='filtr bg-white rounded-[8px] min-w-[317px] p-6'>
                    <div>
                        <h3 className="sh-title-text font-secondary-bold text-bold text-xs text-black">Цена</h3>
                        <InputRange min={1} max={150000} styleIcon={'slider-icon_blue'} styleDiv={'gradient-blue'}/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="period" className='block sh-title-text font-secondary-bold text-bold text-xs text-black mb-4'>Сервер</label>
                        <Select arr={arr}/>
                    </div>
                    <div>
                        <h3 className="sh-title-text font-secondary-bold text-bold text-xs text-black">Ранг</h3>
                        <InputRange min={1} max={30000} styleIcon={'slider-icon_green'} styleDiv={'gradient-green'}/>
                    </div>
                    <div>
                        <h3 className="sh-title-text font-secondary-bold text-bold text-xs text-black">Количество доната</h3>
                        <InputRange min={1} max={150000} styleIcon={'slider-icon_blue'} styleDiv={'gradient-blue'}/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="period" className='block sh-title-text font-secondary-bold text-bold text-xs text-black mb-4'>Тип аккаунта</label>
                        <Select arr={arr}/>
                    </div>
                    
                    <div className="mb-2">
                        <h3 className="mb-4 sh-title-text font-secondary-bold text-bold text-xs text-black">Продавец</h3>
                        <div className="smt-filter-type-content flex flex-col">
                            <label className="custom-checkbox mb-[12px] font-secondary-bold text-xs">Онлайн
                            <input type="checkbox" name="online" defaultChecked="checked"/>
                            <span className="custom-checkmark"></span>
                            </label>
                            <label className="custom-checkbox font-secondary-bold text-xs">Офлайн
                            <input type="checkbox" name="offline" defaultChecked=""/>
                            <span className="custom-checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button className="mb-4 btn gap-2 justify-center flex items-center text-white w-full h-[57px] rounded-[4px] bg-[linear-gradient(36.87deg,#339CFC_18.57%,#1E61EB_80.26%)] shadow-[0px_4px_35px_0px_rgba(51,156,252,0.45)]">
                            <img src='/img/icon-btn.svg' alt='filter'/>
                            Применить фильтр
                        </button>
                        <button className=" gap-2 justify-center flex items-center w-full h-[57px] rounded-[4px] bg-[#EAEBF8] hover:bg-[rgb(208_216_243/1)]">
                            <img src='/img/icon-btn2.svg' alt='filter'/>
                            Сбросить фильтр
                        </button>
                    </div>
                </div>
                <div className="pcg">
                    <div className="pcg-grid view-grid grid gap-3 grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3">
                        {
                            (gamesObj.length !== 0) ? (
                                gamesObj.items.map((card) => (
                                    <div key={uuid()} className="pc cursor-pointer rounded-lg bg-white min-w-[240px]">
                                        <div className={(card.new === 1) ? 'pc-plate-container' : 'opacity-0'}>
                                            <div className="pc-plate bg-gradient-primary _shadow-primary py-1 px-6 3sm:px-2 3sm:py-[1px] bg-gradient-primary">new</div>
                                        </div>
                                        <Link to={`${card.id}`} className='pc-link w-full'>
                                            <div className="pc-supinfo font-secondary-bold text-[13px] text-black 3sm:text-xs">
                                                <div className="pc-rating flex gap-1 items-center">
                                                    <div className="pc-rating-icon flex-shrink-0 w-[22px] h-[22px] [&amp;_svg]:w-full 3sm:w-4 3sm:h-4">
                                                        <img src="/img/icon-pc-rating.svg" alt="icon-pc-rating"/>
                                                    </div>
                                                    <span>{card.rank}</span>
                                                </div>
                                            </div>
                                            <div className="pc-ibar flex justify-end items-center flex-wrap gap-3">
                                                <label className="pc-btn-like">
                                                    <input type="checkbox"/>
                                                    <div className="btn-icon btn-icon-none-shadow">
                                                        <svg className="_default" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.00689 10.4136L11.0819 15.0674V15.0674L16.1568 10.4136V10.4136L19.0394 7.77019C20.4408 6.48508 20.4408 4.4015 19.0394 3.11639C17.638 1.83128 15.3659 1.83128 13.9644 3.11639L11.0819 5.77836L8.19927 3.135C6.79786 1.84989 4.52572 1.84989 3.1243 3.135C1.72289 4.42012 1.72289 6.50369 3.1243 7.78881L6.00689 10.4136ZM12.5024 1.82265C14.6914 -0.184698 18.2405 -0.184698 20.4295 1.82265C22.6185 3.82999 22.6185 7.08454 20.4295 9.09189L18.9882 10.4136V10.4136L11.0814 17.6828V17.6828L3.15434 10.4136V10.4136L1.71305 9.09189C-0.475963 7.08454 -0.475963 3.82999 1.71305 1.82265C3.90205 -0.184698 7.45114 -0.184698 9.64015 1.82265L11.0814 3.14433L12.5024 1.82265Z" fill="currentColor" />
                                                        </svg>
                                                        <svg className="_checked" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.5717 1.5605C14.7284 -0.520167 18.2251 -0.520167 20.3817 1.5605C22.5384 3.64117 22.5384 7.0146 20.3817 9.09527L18.9617 10.4652L11.1717 18L3.36172 10.4652L1.94172 9.09527C-0.214949 7.0146 -0.214949 3.64117 1.94172 1.5605C4.09839 -0.520167 7.59505 -0.520167 9.75172 1.5605L11.1717 2.93046L12.5717 1.5605Z" fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="pc-preview flex justify-center items-center mb-3">
                                                <div className="pc-preview-inner max-w-[80px] max-h-[80px]">
                                                    <img className="pc-preview-pic w-full" src={card.icon} alt="picture"/>
                                                </div>
                                            </div>
                                            <div className="pc-info">
                                                <div className="pc-title font-secondary-bold text-bold text-[13px] text-black">{card.name} {game}</div>
                                                <div className="pc-subtitle mt-1 font-secondary-med text-xs text-[#A6B1C7] 3sm:text-[10px]">{card.description}</div>
                                            </div>
                                            <div className="pc-subinfo text-[#BEC1DB] flex flex-col gap-2 3sm:gap-1">
                                                <div className="pc-subinfo-value font-secondary-med text-[10px]">Тип: Оружие</div>
                                                <div className="pc-subinfo-value font-secondary-med text-[10px]">Кол: 33</div>
                                                <div className="pc-subinfo-value font-secondary-med text-[10px]">Продажа от: 33 шт</div>
                                                <div className="pc-subinfo-value font-secondary-med text-[10px]">Срок: Навсегда</div>
                                            </div>
                                        </Link>
                                        <div className="pc-tbar">
                                            <div className="pc-tbar-inner flex items-center gap-3 3sm:gap-1.5 3sm:flex-col 3sm:items-start">
                                                <div className="pc-source flex-shrink-0 w-11 h-11 3sm:w-10 3sm:h-10">
                                                    <div className="pc-source-user w-full h-full relative">
                                                        <div className="pc-source-status _green"></div>
                                                            <img className="w-full h-full object-cover object-center" src="/img/avatar-example-3.347bde69.png" alt="picture"/>
                                                        </div>
                                                    </div>
                                                    <div className="pc-total flex-grow h-11 rounded-full border border-solid border-[#F3F7FF] flex items-center justify-between pl-4 gap-2 3sm:h-10 3sm:pl-3 3sm:w-full">
                                                    <div className="pc-total-inf flex flex-wrap gap-x-[5px] font-secondary-bold text-xs 3sm:text-[10px]">
                                                        <span className="text-[#BEC1DB]">Цена</span>
                                                        <span className="text-black font-secondary-bold text-bold">{card.price}<b> ₽</b></span>
                                                    </div>
                                                    <div className="pc-total-btn-wrap flex-shrink-0 w-11 h-11 3sm:w-10 3sm:h-10">
                                                        <Link to='#' className="btn btn-secondary pc-total-btn rounded-full w-full h-full justify-center">
                                                            <div className="btn-icon w-1/2 [&amp;_svg]:w-full text-white">
                                                                <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.7671 8.36089H13.0736C13.4234 8.36089 13.6981 8.07175 13.6981 7.72307C13.6981 7.3659 13.4234 7.08526 13.0736 7.08526H10.7671C10.4174 7.08526 10.1426 7.3659 10.1426 7.72307C10.1426 8.07175 10.4174 8.36089 10.7671 8.36089ZM15.8132 3.93954C16.3211 3.93954 16.6542 4.11813 16.9872 4.50932C17.3203 4.90052 17.3786 5.4618 17.3037 5.9712L16.5126 11.55C16.3627 12.6224 15.4634 13.4124 14.4059 13.4124H5.32134C4.21387 13.4124 3.29792 12.5458 3.20632 11.4233L2.44025 2.1528L1.1829 1.93169C0.849824 1.87216 0.616673 1.54049 0.67496 1.20032C0.733248 0.852497 1.058 0.622032 1.3994 0.673908L3.38535 0.97921C3.66846 1.03109 3.87663 1.26835 3.90161 1.5575L4.05982 3.46245C4.0848 3.73544 4.3013 3.93954 4.56776 3.93954H15.8132ZM5.18794 14.7565C4.48849 14.7565 3.92226 15.3348 3.92226 16.0492C3.92226 16.755 4.48849 17.3333 5.18794 17.3333C5.87907 17.3333 6.4453 16.755 6.4453 16.0492C6.4453 15.3348 5.87907 14.7565 5.18794 14.7565ZM14.5556 14.7565C13.8562 14.7565 13.29 15.3348 13.29 16.0492C13.29 16.755 13.8562 17.3333 14.5556 17.3333C15.2468 17.3333 15.813 16.755 15.813 16.0492C15.813 15.3348 15.2468 14.7565 14.5556 14.7565Z" fill="currentColor" />
                                                                </svg>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (<div className='text-[#FF5343]'>error - game not found</div>)
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
       
    );
}

export default Catalog;

