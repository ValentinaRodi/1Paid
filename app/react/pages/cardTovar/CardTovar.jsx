import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import CardGameMin from '../../components/cardGame/CardGameMin';
import Rating from '../../components/rating/Rating';
import uuid from 'react-uuid';
import Pagination from '../../components/pagination/Pagination';

function CardTovar() {
    const [tab, setTab] = useState([true, false, false]);
    const [donat, setDonat] = useState([true, false, false, false, false]);
    
    const clickTab = (index) => {
        const newTab = tab.map((item, i) => i === index ? true : false);
        setTab(newTab);
    };

    const clickDonat = (index) => {
        const newDonat = donat.map((item, i) => i === index ? true : false);
        setDonat(newDonat);
    };

    const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0 mt-10">
            <div className="w-full spf layout-main">
                <div className="spf-main flex w-full gap-[12px] mb-3">
                    <CardGameMin new='1' guarantees='0' rank='4.8' id='0' icon='product-preview-1.fcb96f91.png' name='100 первых мест в быстром варианте своими руками' description='Оружие в идеальном состоянии, прямо из завода.'/>
                    <div className="bg-white rounded-xl w-full flex flex-wrap justify-between font-secondary-bold text-[14px] text-[#C1CCE0] p-6 gap-6">
                        <div className='w-full max-w-[432px] flex flex-wrap gap-x-[62px] gap-y-[20px]'>
                            <div className='flex items-center justify-between w-full'>
                                <button onClick={() => clickTab(0)} className={`${tab[0] ? 'btn btn-secondary text-white' : 'bg-[#ECEDF7] hover:text-white hover:bg-[linear-gradient(90deg,#8cd23c_0%,#417a00_100%)] text-black'} w-[134px] h-[41px] rounded font-secondary-bold text-sm font-bold flex items-center justify-center`}>Персонаж 1</button>
                                <button onClick={() => clickTab(1)} className={`${tab[1] ? 'btn btn-secondary text-white' : 'bg-[#ECEDF7] hover:text-white hover:bg-[linear-gradient(90deg,#8cd23c_0%,#417a00_100%)] text-black'} w-[134px] h-[41px] rounded font-secondary-bold text-sm font-bold flex items-center justify-center`}>Персонаж 2</button>
                                <button onClick={() => clickTab(2)} className={`${tab[2] ? 'btn btn-secondary text-white' : 'bg-[#ECEDF7] hover:text-white hover:bg-[linear-gradient(90deg,#8cd23c_0%,#417a00_100%)] text-black'} w-[134px] h-[41px] rounded font-secondary-bold text-sm font-bold flex items-center justify-center`}>Персонаж 3</button>
                            </div>
                            <div className=" flex flex-wrap gap-5">
                                <div className="pr-5 border-r border-[#DBE0ED]">
                                    <div className="font-secondary-bold font-bold text-sm text-[#C1CCE0]">Номер ранга</div>
                                    <div className="text-base font-secondary-bold font-bold text-black">25</div>
                                </div>
                                <div className="pr-5 border-r border-[#DBE0ED]">
                                    <div className="font-secondary-bold text-sm font-bold text-[#C1CCE0]">Сервера</div>
                                    <div className="text-base font-secondary-bold font-bold text-black">ru.warface.com</div>
                                </div>
                                <div className="pr-5 border-r border-[#DBE0ED]">
                                    <div className="font-secondary-bold text-sm font-bold text-[#C1CCE0]">Кол-во доната</div>
                                    <div className="text-base font-secondary-bold font-bold text-black">185</div>
                                </div>
                                <div className="pr-5 border-r border-[#DBE0ED]">
                                    <div className="font-secondary-bold text-sm font-bold text-[#C1CCE0]">Тип аккаунта</div>
                                    <div className="text-base font-secondary-bold font-bold text-black">Личный</div>
                                </div>
                                <div className="pr-5 border-r border-[#DBE0ED]">
                                    <div className="font-secondary-bold text-sm font-bold text-[#C1CCE0]">Тип аккаунта</div>
                                    <div className="text-base font-secondary-bold font-bold text-black">Личный</div>
                                </div>
                            </div>
                            <div className='font-secondary-med text-[10px] text-[#BEC1DB]'>28.02.20 в 22:34</div>
                        </div>  
                        <div>
                            <Rating name='Shenderro' reviews='1555' rank='4.8'/>
                            <div className='flex justify-start gap-3 mt-8'>
                                <button className='w-[154px] h-[44px] btn btn-secondary rounded-[33px] flex gap-2 items-center justify-center'>
                                    <img className="w-[20px] h-[20px]" src="/img/icon-buy.5c571de4.svg" alt="buy"/>
                                    <div className='font-secondary-bold text-white text-sm'>3 699 РУБ.</div>
                                </button>
                                <button className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-primary shadow-2xl">
                                    <div className="btn-icon text-[#BDC6E0] w-[22px] h-[19px] text-white">
                                        <img src="/img/icon-btn-icon-13.svg" alt="btn-icon"/>
                                    </div>
                                </button>
                            </div>
                        </div>       
                    </div>   
                </div>
                <div className=" bg-white rounded-xl w-full p-6 mb-3">
                    <div className='w-full mb-6'>
                        <div className='mb-14 font-secondary-bold text-xl font-bold text-black'>Описание</div>
                        <div className='mb-14 font-secondary-med  text-[18px] leading-[35px] text-black'>Лос-Сантос – некогда великолепный городок, попасть в который мечтали миллионы. <br/>Сегодня он стал просто пристанищем вышедших в тираж звезд. <br/>Здесь мало интересных событий и планомерно текущая жизнь.</div>
                        <div className='font-secondary-med leading-[35px] text-[18px] text-black'>Хотите отравить существование обеспеченных жителей и заставить забыть о покое всю местную полицию? <br/>Тогда вам стоит купить Grand Theft Auto V на steampay.com! То, что предложили в этой серии разработчики, гарантировано приведёт вас в неописуемый восторг. Так что не теряйте времени даром и начните играть прямо сейчас!</div>
                    </div>
                    <div className="scd-main flex flex-col items-center w-full gap-3">
                        <div className="ocr flex w-full font-secondary-bold bg-white rounded-2xl overflow-x-hidden item-wrapper ">
                            <button className='absolute z-10 top-[42%] left-[24px] w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center'>
                                <img src="/img/icon-arrow-left-2.svg" alt='to left'/>
                            </button>
                            <button className='absolute z-10 top-[42%] right-[24px] w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center'>
                                <img src="/img/icon-arrow-right-2.svg" alt='to right'/>
                            </button>
                            <div className="ocr-lenta flex items-center">
                                <div className="flex items-center w-full gap-2">
                                    {
                                        (arr.length !== 0) ? (
                                            arr.map((item, index) => (
                                                <div key={uuid()}  className='w-[216px] h-[216px] bg-[#E7E7E7] rounded-xl'></div>
                                            ))
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>         
                    </div>
                </div>
                <div className='bg-white rounded-xl w-full p-6'>
                    <div className="sh flex justify-between items-center gap-x-3 spf-title mb-6">
                        <div className="sh-title">
                            <div>
                                <h2 className="sh-title-text font-secondary-bold text-2xl text-black ">Доната</h2>
                                <div className="sh-title-line mt-3 rounded-full w-9 h-1 bg-gradient-primary"></div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
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
                    <div className='flex items-center justify-between w-full gap-3'>
                        <button onClick={() => clickDonat(0)} className={`${donat[0] ? 'btn gradient-primary text-white' : 'bg-[#EFF1FF] hover:text-white hover:bg-[linear-gradient(36.87deg,#339CFC_18.57%,#1E61EB_80.26%)] text-black'} w-[19%] h-[49px] rounded-lg font-secondary-bold text-sm font-bold flex items-center justify-start pl-4`}>Все</button>
                        <button onClick={() => clickDonat(1)} className={`${donat[1] ? 'btn gradient-primary text-white' : 'bg-[#EFF1FF] hover:text-white hover:bg-[linear-gradient(36.87deg,#339CFC_18.57%,#1E61EB_80.26%)] text-black'} w-[19%] h-[49px] rounded-lg font-secondary-bold text-sm font-bold flex items-center justify-start pl-4`}>Штурмовик</button>
                        <button onClick={() => clickDonat(2)} className={`${donat[2] ? 'btn gradient-primary text-white' : 'bg-[#EFF1FF] hover:text-white hover:bg-[linear-gradient(36.87deg,#339CFC_18.57%,#1E61EB_80.26%)] text-black'} w-[19%] h-[49px] rounded-lg font-secondary-bold text-sm font-bold flex items-center justify-start pl-4`}>Медик</button>
                        <button onClick={() => clickDonat(3)} className={`${donat[3] ? 'btn gradient-primary text-white' : 'bg-[#EFF1FF] hover:text-white hover:bg-[linear-gradient(36.87deg,#339CFC_18.57%,#1E61EB_80.26%)] text-black'} w-[19%] h-[49px] rounded-lg font-secondary-bold text-sm font-bold flex items-center justify-start pl-4`}>Инженер</button>
                        <button onClick={() => clickDonat(4)} className={`${donat[4] ? 'btn gradient-primary text-white' : 'bg-[#EFF1FF] hover:text-white hover:bg-[linear-gradient(36.87deg,#339CFC_18.57%,#1E61EB_80.26%)] text-black'} w-[19%] h-[49px] rounded-lg font-secondary-bold text-sm font-bold flex items-center justify-start pl-4`}>Снайпер</button>   
                    </div>
                    <div className='py-6 flex flex-wrap gap-x-3.5 gap-y-3'>
                        {
                            (arr.length !== 0) ? (
                                arr.map((item, index) => (
                                    <div key={uuid()} className='w-[236px] h-[172px] bg-white rounded-lg border border-solid border-[#00000026] p-6'>
                                        <div className='w-[190px] mb-2 h-[101px] flex items-center justify-center rounded-xl bg-[linear-gradient(90deg,#F5C63B_0%,#ED502A_100%)]'>
                                            <div className='w-[185px] h-[97px] bg-white flex items-center justify-center rounded-[11px]'>
                                                <img src='/img/uzkon12_gold.png' alt='uzkon'/>
                                            </div>
                                        </div>
                                        <div className='font-secondary-bold text-center font-bold text-[13px] text-black'>Золотой Uzkon UNG-12</div>
                                    </div>
                                ))
                            ) : null
                        }
                    </div>
                    <Pagination />
                </div>
            </div>
            <LayoutBtn toTop='true'/>
        </div>

           
    )
}

export default CardTovar;
