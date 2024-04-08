import React, { useEffect, useState, useRef } from "react";
import CardGameString from "../cardGame/CardGameString";
import InputRange from "../inputRange/InputRange";
import Select from "../select/Select";
import uuid from 'react-uuid';
import Checkbox from "../checkbox/Checkbox";

function Market() {
    const [formValue, setFormValue] = useState({});
    const [resetFilter, setResetFilter] = useState(false);
    const [resetRange, setRange] = useState(false);
    const [resetCheck, setResetCheck] = useState(false);
    const [filterMob, setFilterMob] = useState(false);
    
    const game = ['Warface', 'New_cool_game', 'New_cool_game2'];
    const categ = ['Пин-коды', 'Буст PM', 'Спецоперации'];

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

    const showFilter = () => {
        setFilterMob(!filterMob);
    };

    const arr = [0,1,2,3,4,5,6];

    return (
        <div className="relative">
            <button onClick={showFilter} className='absolute top-[-55px] sm:top-[-69px] right-[14px] flex-shrink-0 flex min-[880px]:hidden justify-center items-center w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-[#e8eaf7] hover:bg-[#dcdff1]'>
                <img className='w-[40%] sm:w-[50%]' src='/img/icon-filter.svg' alt='filter' />
            </button>
            {filterMob ?
                <div className='absolute top-0 right-0 z-[100] block min-[880px]:hidden shadow-2xl w-[300px] bg-white p-4 sm:p-6 rounded-lg'>
                    <div className='flex justify-end'>
                        <button onClick={showFilter} className='p-0 bg-inherit hover:bg-[rgba(241,245,249,1)]'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                    <InputRange changeStateRangeFalse={changeStateRangeFalse} reset={resetRange} changeFormValue={changeFormValue} min={1} max={150000} styleIcon={'slider-icon_blue'} styleDiv={'gradient-blue'} name='Цена'/>
                    <Select key={uuid()} reset={resetFilter} arr={game} changeFormValue={changeFormValue} keyValue='Выбор игры' name='Выбор игры'/>
                    <Select key={uuid()} reset={resetFilter} arr={categ} changeFormValue={changeFormValue} keyValue='Категория' name='Категория'/>
                    <Checkbox changeFormValue={changeFormValue} reset={resetCheck} changeCheck={changeCheck}/>
                    <div>
                        <button onClick={submitFilter} className="mb-3 mt-[-8px] btn gap-2 text-sm justify-center flex items-center text-white w-full h-[47px] rounded-[4px] bg-[linear-gradient(36.87deg,#339CFC_18.57%,#1E61EB_80.26%)] shadow-[0px_4px_35px_0px_rgba(51,156,252,0.45)]">
                            <img src='/img/icon-btn.svg' alt='filter'/>
                            Применить фильтр
                        </button>
                        <button onClick={cancelFilter} className=" gap-2 justify-center text-sm flex items-center w-full h-[47px] rounded-[4px] bg-[#EAEBF8] hover:bg-[rgb(208_216_243/1)]">
                            <img src='/img/icon-btn2.svg' alt='filter'/>
                            Сбросить фильтр
                        </button>
                    </div>
                </div>
                : null
            }
            <div className="rounded-lg bg-white p-4 sm:p-6 mb-3">
                <h2 className="mb-2 sh-title-text font-secondary-bold text-bold text-base sm:text-xl text-black">Биржа заказов</h2>
                <p className="w-full mb-3 sm:mb-5 font-primary-med text-xs sm:text-sm text-[#95A4C2]">Стол заказа - это удобный инструмент, который позволяет вам собрать все нужные предметы в одном месте, и оформить заказ всего за несколько кликов мышкой. Просто найдите нужную игру или товар на нашем маркетплейсе, добавьте его в корзину и перейдите в раздел "Стол заказа".</p>
                <p className="w-full font-primary-med text-xs sm:text-sm text-[#95A4C2]">Благодаря Столу заказа, вы сможете сэкономить время и деньги на покупке игровых товаров, и быстро получить их на свой аккаунт. Мы ценим ваше время и стремимся сделать процесс покупки игровых товаров максимально простым и удобным.</p>
            </div>
            <div className="flex gap-2">
                <div className='hidden h-fit min-[880px]:flex flex-col  filter bg-white rounded-[8px] min-w-[317px] p-4 sm:p-6'> 
                    <InputRange changeStateRangeFalse={changeStateRangeFalse} reset={resetRange} changeFormValue={changeFormValue} min={1} max={150000} styleIcon={'slider-icon_blue'} styleDiv={'gradient-blue'} name='Цена'/>
                    <Select key={uuid()} reset={resetFilter} arr={game} changeFormValue={changeFormValue} keyValue='Выбор игры' name='Выбор игры'/>
                    <Select key={uuid()} reset={resetFilter} arr={categ} changeFormValue={changeFormValue} keyValue='Категория' name='Категория'/>
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
                    <div className="_view-list pcg-grid view-grid grid gap-3 grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3">
                        {
                            (arr.length !== 0) ? (
                                arr.map((item) => (
                                    <CardGameString key={uuid()} priceDouble='true' rank='4.8' id='1' seoName='card' icon='product-preview-1.fcb96f91.png' name='Аккаунт Warface за самые низкие цены' price1='100 000' price2='120 000'/> 
                                ))
                            ) : <div className='text-[#FF5343]'></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Market;