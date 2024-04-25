import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import Select from '../../components/select/Select';
import uuid from 'react-uuid';
import CardGame from '../../components/cardGame/CardGame';
import CardGameString from "../../components/cardGame/CardGameString";
import AddProduct from '../../components/addProduct/AddProduct';
import ModalUpTop from '../../components/modalUpTop/ModalUpTop';
import Title from '../../components/title/Title';
import Pagination from '../../components/pagination/Pagination';
import TimerCircle from '../../components/timerСircle/TimerCircle';
import FilterBlock from '../../components/filterBlock/FilterBlock';
import FilterBlockMob from '../../components/filterBlock/FilterBlockMobile';

function MyTovars() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpenUpTop, setModalOpenUpTop] = useState(false);
    const [formValue, setFormValue] = useState({});
    const [resetFilter, setResetFilter] = useState(false);
    const [showDelModal, setShowDelModal] = useState(false);
    const body = document.querySelector('body');
    const [cardsView, setCardsView] = useState(true);
    const [cardsViewImg, setCardsViewImg] = useState('/img/icon-cards-stroke.svg');
    const [cardsViewDiv, setCardsViewDiv] = useState('');
    const [filterMob, setFilterMob] = useState(false);
    const [modalUpTop, setModalUpTop] = useState(false);
    const [selectGame, setSelectGame] = useState(false);

    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    const [gameName, setGameName] = useState('');
    const [categ, setCateg] = useState([]);
    const [categName, setCategName] = useState([]);
    const [idBlockFields, setIdBlockFields] = useState('idBlockFields');
    const [index, setIndex] = useState(1);
    const [count, setCount] = useState(1);

    const closeModal = () =>{
        document.getElementById('modal').classList.remove('modal_view');
        body.style.overflow = 'auto';
        setModalOpen(false);
        setModalOpenUpTop(false);
    };

    const sellProduct = () => {
        document.getElementById('modal').classList.add('modal_view');
        body.style.overflow = 'hidden';
        setModalOpen(true);
    };

    const openModalUpTop = () => {
        setModalOpen(false);
        setModalOpenUpTop(true);
    };

    // // Функция для обновления объекта formValue
    // const changeFormValue = (key, value) => {
    //     const newFormValue = {};
    //     (key in formValue) ? newFormValue[key] = value : newFormValue[key] = value;
    
    //     if(value === '') {
    //         delete formValue[`${key}`];
    //     };
    //     setFormValue(newFormValue);
    // };


    // Функция для обновления объекта formValue
    const changeFormValue = (key, value) => {
        //console.log('formValue',formValue);
        
        (key in formValue) ? formValue[key] = value : formValue[key] = value;
       
        if(value === '') {
            delete formValue[`${key}`];
        }

        if('Игра' in formValue && gameName !== formValue['Игра']) {
            setGameName(formValue['Игра']);
            
            const categArr = [];

            gamesObj.forEach(el => {

                if(el.name === formValue['Игра']) {
                    el.categories.forEach(el => {
                        categArr.push(el.name);
                    });
                };
            });

            if(categArr.length !== 0) {
                setCateg(categArr);
            };
        };

        if(formValue['Категория'] && categName !== formValue['Категория']) {
            setCategName(formValue['Категория']);
            gamesObj.forEach(el => {

                if(el.name === formValue['Игра']) {
                    el.categories.forEach(el => {
                        if(el.name === formValue['Категория']) {
                            setFields(typeGames);
                            
                            return;
                        };
                    });
                }
            });
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




    //Сброс фильтра
    const cancelFilter = () => { 
        setFilterMob(false);
        setResetFilter(true);
        setFormValue({});
        setResetFilter(false);
    };

    const cliclShowDelModal = () => {
        setShowDelModal(true);
    };

    const clickCancelDelTovar = () => {
        setShowDelModal(false);
    };

    const onCloseModalDelTovar = () => {
        setShowDelModal(false);
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

    const games = ['Warface', 'New game', 'GTA', 'New game'];
    const typeGames = ['Warface', 'New game', 'GTA', 'New game'];
    const arrCard = [0,1,2,3];

    const clickUpTop = () => {
        document.getElementById('modal').classList.remove('modal_view');
        body.style.overflow = 'auto';
        setModalOpen(false);
        setModalOpenUpTop(false);
        setModalUpTop(true);
    };
    
    useEffect(() => {
        if (modalUpTop) {
            setTimeout(() => {
                setModalUpTop(false);
            }, 2000);
        }
    }, [modalUpTop, setModalUpTop]);

    const changeCard = (index) => {
        console.log('index',index);
    };

    useEffect(() => {
        ('game' in formValue) ? setSelectGame(true) : setSelectGame(false);
    }, [formValue]);
    
    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0 ">
            <div className="w-full layout-main relative">
                <div className={(showDelModal) ? 'absolute top-0 right-0 w-56 rounded-md bg-white p-3 flex items-center justify-between' : 'hidden'}>
                    <div >
                        <TimerCircle count='5' color='black' onCloseModalDelTovar={onCloseModalDelTovar} imgCircle='icon-circle-progress.svg'/>
                    </div>
                    <div>
                        <div className='font-secondary-bold font-bold text-sm mb-2'>Удаление товара</div>
                        <button onClick={clickCancelDelTovar} className='bg-inherit font-secondary-med text-xs text-[#C5CFE4] '>Отменить удаление</button>
                        <div className='w-full h-[0.5px] bg-[#C5CFE4] mt-[-3px]'></div>
                    </div>
                </div>
                <div className="smt">
                    <Title title='Мои товары' viewCards='true' changeViewCards={changeViewCards} cardsViewImg={cardsViewImg}/>
                    <div className="smt-tab flex bg-white flex-wrap min-[430px]:flex-nowrap p-4 sm:p-6 rounded-lg justify-between items-center w-full mb-[32px] gap-2">
                        <div className="smt-tab-text font-primary-bold text-sm md:text-lg text-[#A6B1C7]">Всего доступно для продажи
                            <br />20 товаров одного типа.
                        </div>
                        <div className="relative smt-tab-actions flex items-center gap-3 ">
                            <div className="smt-tab-actions flex flex-wrap lg:flex-nowrap justify-start min-[430px]:justify-end items-center gap-1 sm:gap-3">
                                <button onClick={sellProduct} className="smt-tab-btn flex justify-center items-center btn font-secondary-bold text-xs sm:text-sm text-white bg-gradient-secondary rounded-full h-[36px] px-2 lg:px-4 min-w-[150px]">Добавить товар
                                    <div className="smt-tab-btn-icon ml-[8px]">
                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.570322 7.96147C0.568324 7.56276 0.869736 7.22785 1.26645 7.18799H13.7968C14.224 7.18799 14.5703 7.53429 14.5703 7.96147C14.5703 8.38865 14.224 8.73495 13.7968 8.73495H1.26645C0.869736 8.69508 0.568324 8.36018 0.570322 7.96147Z" fill="white" stroke="white"  strokeWidth="0.4"></path>
                                            <path d="M7.53227 1.00001C7.93098 0.998012 8.26588 1.29942 8.30575 1.69614V14.2265C8.30575 14.6537 7.95945 15 7.53227 15C7.10509 15 6.75879 14.6537 6.75879 14.2265V1.69614C6.79866 1.29942 7.13356 0.998012 7.53227 1.00001Z" fill="white" stroke="white" strokeWidth="0.4"></path>
                                        </svg>
                                    </div>
                                </button>
                                <button onClick={clickUpTop} className="smt-tab-btn btn flex justify-center items-center font-secondary-bold text-xs sm:text-sm text-white bg-gradient-primary rounded-full px-2 lg:px-4 h-[36px] min-w-[150px]">Поднять в ТОП
                                    <div className="smt-tab-btn-icon ml-[8px]">
                                        <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.43529 16.4716L6.43529 3.28162L9.37529 5.63162C9.58314 5.79827 9.84889 5.87509 10.1136 5.84505C10.3783 5.81502 10.6201 5.6806 10.7853 5.47162C11.1256 5.04025 11.0542 4.41507 10.6253 4.07162L6.53529 0.791618C6.09689 0.440618 5.47369 0.440618 5.03529 0.791618L0.945292 4.07162C0.516384 4.41507 0.444935 5.04025 0.785292 5.47162C0.950512 5.6806 1.19229 5.81502 1.45699 5.84505C1.7217 5.87509 1.98745 5.79827 2.19529 5.63162L4.43529 3.83162L4.43529 16.4716C4.43529 17.0239 4.88301 17.4716 5.43529 17.4716C5.98758 17.4716 6.43529 17.0239 6.43529 16.4716Z" fill="white"/>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <button onClick={showFilter} className='flex-shrink-0 flex min-[880px]:hidden justify-center items-center w-11 h-11 rounded-full bg-[#e8eaf7] hover:bg-[#dcdff1]'>
                                <img className='w-[40%] sm:w-[50%]' src='/img/icon-filter.svg' alt='filter' />
                            </button>
                            {filterMob ?
                                <FilterBlockMob showFilter={showFilter}/>
                                : null
                            }
                        </div>
                    </div>
                    <div className="smt-main flex gap-x-3">
                        <FilterBlock/>
                        <div className="pcg w-full">
                            <div className={`${cardsViewDiv} pcg-grid justify-items-center grid gap-3 grid-cols-1 min-[526px]:grid-cols-2 min-[1755px]:grid-cols-3 min-[2550px]:grid-cols-4`}>
                                {
                                    arrCard.length !== 0 ? 
                                        arrCard.map((card, index) => {
                                            return (cardsView ? 
                                                <CardGame key={uuid()} changeCard={changeCard} cliclShowDelModal={cliclShowDelModal} change='true' rank='4.8' id={index} new='1' seoName='Makmilan Gr-23' icon='product-preview-1.fcb96f91.png' name='Makmilan Gr-23' description='Оружие в идеальном состоянии, прямо из завода.' price='120.00'/> 
                                            : 
                                                <CardGameString key={uuid()} changeCard={changeCard} cliclShowDelModal={cliclShowDelModal} change='true' rank='4.8' id={index} new='1' seoName='Makmilan Gr-23' icon='product-preview-1.fcb96f91.png' name='Makmilan Gr-23' description='Оружие в идеальном состоянии, прямо из завода.' price='120.00'/> 
                                            )
                                        }) 
                                    : <div className='text-[#FF5343]'></div>
                                } 
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination />
            </div>
            <LayoutBtn toTop='true'/>
            {modalOpen && 
                (<div className='w-screen h-screen'>
                    <AddProduct closeModal={closeModal} openModalUpTop={openModalUpTop}/>
                </div>)
            }
            {modalOpenUpTop && 
                (<div className='w-screen h-screen'>
                    <ModalUpTop closeModal={closeModal} clickUpTop={clickUpTop}/>
                </div>)
            }
            {modalUpTop ?
                <div className='absolute top-[110px] right-[0] min-[397px]:right-[22px] sm:right-[35px] bg-[linear-gradient(90deg,#8cd23c_0%,#417a00_100%)] rounded-xl p-3'>
                    <p className='font-secondary-bold text-xs sm:text-sm text-white'>Товар успешно поднят</p>
                    <p className='font-secondary-bold text-xs sm:text-sm text-white'>Следующий товар может быть поднят через 4 часа</p>
                </div>
                : null
            }
        </div>
    );
};

export default MyTovars;