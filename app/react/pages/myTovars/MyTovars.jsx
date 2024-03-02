import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import { Link } from 'react-router-dom';
import Select from '../../components/select/Select';
import uuid from 'react-uuid';
import CardGame from '../../components/cardGame/CardGame';

function MyTovars() {
    const [formValue, setFormValue] = useState({});
    const [resetFilter, setResetFilter] = useState(false);
    const [refs, setRefs] = useState('https://dealkgo.com/ref/38921');

   // Функция для обновления объекта formValue
   const changeFormValue = (key, value) => {
        (key in formValue) ? formValue[key] = value : formValue[key] = value;
    
        if(value === '') {
            delete formValue[`${key}`];
        }
    };

    //Сброс фильтра
    const cancelFilter = () => { 
        setResetFilter(true);
        setFormValue({});
        setResetFilter(false);
    };
    
    const arr = ['Warface', 'New game', 'GTA', 'New game'];

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full">
                <div className="smt mt-5">
                    <div className="sh flex justify-between items-center gap-x-3 mb-10">
                        <div className="flex flex-col justify-start">
                            <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Мои товары</h2>
                            <div className="sh-title-line mt-2 rounded-full w-9 h-1 bg-gradient-primary">
                            </div>
                        </div>
                        <div className='h-full w-56 rounded-md bg-white p-3 flex items-center justify-between'>
                            <div>
                                <img src='/img/icon-time-tovars.svg' alt='time' />
                            </div>
                            <div>
                                <div className='font-secondary-bold font-bold text-sm mb-2'>Удаление товара</div>
                                <button className='bg-inherit font-secondary-med text-xs text-[#C5CFE4] '>Отменить удаление</button>
                                <div className='w-full h-[0.5px] bg-[#C5CFE4] mt-[-3px]'></div>
                            </div>
                        </div>
                    </div>
                    <div className="smt-tab flex bg-white p-[24px] rounded-lg justify-between items-center w-full mb-[32px]">
                        <div className="smt-tab-text font-primary-bold text-lg text-[#A6B1C7]">Всего доступно для продажи
                            <br />20 товаров одного типа.
                        </div>
                        <div className="smt-tab-actions flex items-center">
                            <button className="smt-tab-btn flex justify-center items-center font-secondary-bold text-[14px] mr-[12px] text-white bg-gradient-secondary rounded-full py-2 px-4 min-w-[170px]">Добавить товар
                                <div className="smt-tab-btn-icon ml-[8px]">
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.570322 7.96147C0.568324 7.56276 0.869736 7.22785 1.26645 7.18799H13.7968C14.224 7.18799 14.5703 7.53429 14.5703 7.96147C14.5703 8.38865 14.224 8.73495 13.7968 8.73495H1.26645C0.869736 8.69508 0.568324 8.36018 0.570322 7.96147Z" fill="white" stroke="white"  strokeWidth="0.4"></path>
                                        <path d="M7.53227 1.00001C7.93098 0.998012 8.26588 1.29942 8.30575 1.69614V14.2265C8.30575 14.6537 7.95945 15 7.53227 15C7.10509 15 6.75879 14.6537 6.75879 14.2265V1.69614C6.79866 1.29942 7.13356 0.998012 7.53227 1.00001Z" fill="white" stroke="white" strokeWidth="0.4"></path>
                                    </svg>
                                </div>
                            </button>
                            <button className="smt-tab-btn flex justify-center items-center font-secondary-bold text-[14px] text-white bg-gradient-primary rounded-full py-2 px-4 min-w-[170px]">Поднять в ТОП
                                <div className="smt-tab-btn-icon ml-[8px]">
                                    <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.43529 16.4716L6.43529 3.28162L9.37529 5.63162C9.58314 5.79827 9.84889 5.87509 10.1136 5.84505C10.3783 5.81502 10.6201 5.6806 10.7853 5.47162C11.1256 5.04025 11.0542 4.41507 10.6253 4.07162L6.53529 0.791618C6.09689 0.440618 5.47369 0.440618 5.03529 0.791618L0.945292 4.07162C0.516384 4.41507 0.444935 5.04025 0.785292 5.47162C0.950512 5.6806 1.19229 5.81502 1.45699 5.84505C1.7217 5.87509 1.98745 5.79827 2.19529 5.63162L4.43529 3.83162L4.43529 16.4716C4.43529 17.0239 4.88301 17.4716 5.43529 17.4716C5.98758 17.4716 6.43529 17.0239 6.43529 16.4716Z" fill="white"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="smt-main flex gap-x-[40px]">
                    <div className="smt-filter flex flex-col items-center font-primary-bold min-w-[270px] max-w-[300px]">
                        <div className='w-full bg-white p-[24px] rounded-lg mb-[12px]'>
                            <div className="sm-filter-types max-w-[270px] w-full">
                                <Select key={uuid()} reset={resetFilter} changeFormValue={changeFormValue} arr={arr} keyValue='Игра' name='Игра'/>
                                <Select key={uuid()} reset={resetFilter} changeFormValue={changeFormValue} arr={arr} keyValue='Тип товара' name='Тип товара'/>
                            </div>
                            <div className="sm-filter-actions w-full max-w-[270px]">
                                <button className="sm-filter-btn flex justify-center items-center bg-gradient-primary rounded-[4px] py-4 w-full mb-[12px]">
                                    <div className="sm-filter-btn-icon flex-shrink-0 w-[14px] h-[14px]  flex justify-center items-center mr-[8px]">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path  fillRule="evenodd" clipRule="evenodd" d="M12.9872 0.8L12.9872 7.2L12.9872 7.272C11.9195 7.5396 11.1707 8.49924 11.1707 9.6C11.1707 10.7008 11.9195 11.6604 12.9872 11.928L12.9872 12L12.9872 15.2C12.9872 15.6418 13.3454 16 13.7872 16C14.2291 16 14.5872 15.6418 14.5872 15.2L14.5872 12C14.5949 11.9282 14.5949 11.8558 14.5872 11.784C15.443 11.3941 15.9922 10.5404 15.9922 9.6C15.9922 8.65963 15.443 7.80589 14.5872 7.416C14.5949 7.3442 14.5949 7.2718 14.5872 7.2L14.5872 0.8C14.5872 0.358172 14.2291 -7.70681e-08 13.7872 -9.6381e-08C13.3454 -1.15694e-07 12.9872 0.358172 12.9872 0.8ZM14.3633 9.6C14.3633 10.0418 14.0051 10.4 13.5633 10.4C13.1215 10.4 12.7633 10.0418 12.7633 9.6C12.7633 9.15817 13.1215 8.8 13.5633 8.8C14.0051 8.8 14.3633 9.15817 14.3633 9.6Z" fill="white"></path>
                                        <path  fillRule="evenodd" clipRule="evenodd" d="M7.38818 0.8L7.38818 2.4L7.38818 2.472C6.32813 2.74531 5.58736 3.70129 5.58736 4.796C5.58736 5.89071 6.32813 6.84669 7.38817 7.12L7.38817 15.2C7.38817 15.6418 7.74635 16 8.18817 16C8.63 16 8.98817 15.6418 8.98817 15.2L8.98817 6.96C9.82986 6.56435 10.3672 5.71804 10.3672 4.788C10.3672 3.85796 9.82986 3.01165 8.98818 2.616C8.99579 2.5442 8.99579 2.4718 8.98818 2.4L8.98818 0.8C8.98818 0.358172 8.63 -7.59347e-08 8.18818 -9.52477e-08C7.74635 -1.14561e-07 7.38818 0.358172 7.38818 0.8ZM8.76388 4.8C8.76388 5.24183 8.40571 5.6 7.96388 5.6C7.52205 5.6 7.16388 5.24183 7.16388 4.8C7.16388 4.35817 7.52205 4 7.96388 4C8.40571 4 8.76388 4.35817 8.76388 4.8Z" fill="white"></path>
                                        <path  fillRule="evenodd" clipRule="evenodd" d="M1.78832 0.8L1.78832 8.08C0.735795 8.35878 0.00281436 9.31118 0.00281432 10.4C0.00281427 11.4888 0.735795 12.4412 1.78832 12.72L1.78832 15.2C1.78832 15.6418 2.14649 16 2.58832 16C3.03015 16 3.38832 15.6418 3.38832 15.2L3.38832 12.56C4.2163 12.159 4.74219 11.32 4.74219 10.4C4.74219 9.48003 4.2163 8.64101 3.38832 8.24L3.38832 0.8C3.38832 0.358172 3.03015 -7.48355e-08 2.58832 -9.41484e-08C2.1465 -1.13461e-07 1.78832 0.358172 1.78832 0.8ZM3.16448 10.4C3.16448 10.8418 2.80631 11.2 2.36448 11.2C1.92265 11.2 1.56448 10.8418 1.56448 10.4C1.56448 9.95817 1.92265 9.6 2.36448 9.6C2.80631 9.6 3.16448 9.95817 3.16448 10.4Z" fill="white"></path>
                                    </svg>
                                    </div>
                                    <div className="sm-filter-btn-text font-secondary-bold text-[14px] text-white">Применить фильтр</div>
                                </button>
                                <button onClick={cancelFilter} className="sm-filter-btn flex justify-center items-center bg-[#EAEBF8] border border-[#CED0E8] rounded-[4px] py-4 w-full ">
                                    <div className="sm-filter-btn-icon flex-shrink-0 w-[14px] h-[14px]  flex justify-center items-center mr-[8px]">
                                    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.424023 17.576C-0.0462888 17.1028 -0.0462888 16.3387 0.424023 15.8656L15.8656 0.424038C16.1621 0.0778742 16.6275 -0.0729097 17.0706 0.0336795C17.5137 0.140269 17.8597 0.486241 17.9663 0.929353C18.0729 1.37247 17.9221 1.83793 17.5759 2.13438L2.13436 17.576C1.66124 18.0463 0.897141 18.0463 0.424023 17.576Z" fill="currentColor"></path>
                                        <path d="M0.424023 0.424023C0.897141 -0.0462888 1.66124 -0.0462888 2.13436 0.424023L17.5759 15.8656C17.9221 16.1621 18.0729 16.6275 17.9663 17.0706C17.8597 17.5137 17.5137 17.8597 17.0706 17.9663C16.6275 18.0729 16.1621 17.9221 15.8656 17.5759L0.424023 2.13436C-0.0462888 1.66124 -0.0462888 0.897141 0.424023 0.424023Z" fill="currentColor"></path>
                                    </svg>
                                    </div>
                                    <div className="sm-filter-btn-text font-secondary-bold text-[14px] text-black">Сбросить фильтр</div>
                                </button>
                            </div>
                        </div>
                        <span className="block w-full font-secondary-med text-[14px] text-[#A6B1C7]">Если вы хотите поднять в Топ какой то товар с определенного раздела ,то сначала вам нужно выбрать фильтр и далее нажать на поднять в топ ,если фильтр не выбран то вы поднимите все товары в топ</span></div>
                        <div className="pcg w-full">
                            <div className="pcg-grid view-grid grid gap-3 grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3">
                                <CardGame key={uuid()} rank='4.8' id='1' change='true' seoName='Makmilan Gr-23' icon='/img/product-preview-1.fcb96f91.png' name='Makmilan Gr-23' description='Оружие в идеальном состоянии, прямо из завода.' price='120.00'/> 
                            </div>
                        </div>
                    </div>
                  </div>
            </div>
            <LayoutBtn />
        </div>
    );
};

export default MyTovars;