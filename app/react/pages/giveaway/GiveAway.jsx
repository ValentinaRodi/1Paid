import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import uuid from 'react-uuid';
import TopBanner from '../../components/topBanner/TopBanner';

function GiveAway() {
    const [registVk, setRegistVk] = useState(false);
    const [join, setJoin] = useState(false);
    const [finish, setFinish] = useState(false);

    
    const clickRegisterVk = () => {
        (!registVk) ? setRegistVk(true) : null;
    };

    const clickJoin = () => {
        (registVk) ? setJoin(true) : null;
    };

    

    const arr = [1,2,3,4,5,6,7,8,9,10];

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className='w-full layout-main'>
                <div className="sh flex justify-between items-center gap-x-3  mb-6">
                    <div className="w-[252px] hidden">
                        <img src="/img/icon-btn-13.svg" alt="btn-icon" className=""/>
                    </div>
                    <div className="sh-title ">
                        <div >
                            <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Розыгрыш</h2>
                            <div className="sh-title-line mt-2 rounded-full w-9 h-1 2md:mt-2 bg-gradient-primary">
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="sg-head flex flex-wrap items-end gap-3 ">
                    <div className='h-full bg-white rounded-xl flex p-5 gap-5 min-w-[780px]'>
                        <div className='flex gap-3'>
                            <div  className="sg-priz-pic flex-shrink-0 w-[65px] h-[65px] overflow-hidden mt-2">
                                <img  className="sg-priz-pic w-full h-full object-cover" src="/img/giveaway-item.19f85331.png" alt="user"/>
                            </div>
                            <div className="sg-item flex flex-col items-start font-secondary-med text-sm text-[#ACBAD8] max-w-[212px] gap-4">
                                <div  className="sg-priz-info flex flex-col  gap-2">
                                    <div  className="sg-priz-title font-secondary-bold text-black text-[13px]">Аккаунт Warface</div>
                                    <div  className="sg-priz-description font-secondary-med text-[10px] text-[#BEC1DB]">25 Ранг</div>
                                </div>
                                <div className="sg-text font-primary-med text-[14px] text-[#ACBAD8] leading-4">Чтобы принять участие Вы должны подписаться на наш ВК.</div>
                            </div>
                        </div>
                        {finish ?
                            null
                            : 
                            <div className="sg-timmer flex flex-col gap-3">
                                <div  className="sg-timmer-title font-secondary-bold text-black text-[13px]">Осталось времени:</div>
                                <div  className="timer flex items-center gap-3">
                                    <div  className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px] ">
                                        <div  className="circle-progress" data-percent="80" data-measure="67" data-measure-640="44">
                                            <svg  className="svg" width="67" height="67" viewBox="0 0 67 67" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <circle  className="placeholder" r="30.5" cx="33.5" cy="33.5" fill="transparent" stroke="#b3b6c3" opacity="0.7" strokeWidth="3" strokeDasharray="191.63715186897738" strokeDashoffset="0"></circle>
                                                <circle  className="progress" r="30.5" cx="33.5" cy="33.5" stroke="url(#primary)" strokeWidth="4" strokeLinecap="round" strokeDashoffset="38.327430373795465" fill="transparent" strokeDasharray="191.63715186897738"></circle>
                                                <defs>
                                                    <linearGradient id="primary" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                                                        <stop stopColor="#339CFC"></stop>
                                                        <stop offset="1" stopColor="#0046D6"></stop>
                                                    </linearGradient>
                                                    <linearGradient id="secondary" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                                                        <stop stopColor="#8CD23C"></stop>
                                                        <stop offset="1" stopColor="#417A00"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div  className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full z-[1]">
                                            <div  className="timer-value font-primary-med text-center text-lg text-black leading-none ">24</div>
                                            <div  className="timer-value font-primary-bold text-center text-[11px] text-[#80809F] leading-none 3sm:hidden">часа</div>
                                        </div>
                                    </div>
                                    <div  className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px] ">
                                        <div  className="circle-progress" data-percent="60" data-measure="67" data-measure-640="44">
                                            <svg  className="svg" width="67" height="67" viewBox="0 0 67 67" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <circle  className="placeholder" r="30.5" cx="33.5" cy="33.5" fill="transparent" stroke="#b3b6c3" opacity="0.7" strokeWidth="3" strokeDasharray="191.63715186897738" strokeDashoffset="0"></circle>
                                                <circle  className="progress" r="30.5" cx="33.5" cy="33.5" stroke="url(#primary)" strokeWidth="4" strokeLinecap="round" strokeDashoffset="76.65486074759096" fill="transparent" strokeDasharray="191.63715186897738"></circle>
                                                <defs>
                                                <linearGradient id="primary" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                                                    <stop stopColor="#339CFC"></stop>
                                                    <stop offset="1" stopColor="#0046D6"></stop>
                                                </linearGradient>
                                                <linearGradient id="secondary" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                                                    <stop stopColor="#8CD23C"></stop>
                                                    <stop offset="1" stopColor="#417A00"></stop>
                                                </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div  className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full z-[1]">
                                            <div  className="timer-value font-primary-med text-center text-lg text-black leading-none ">44</div>
                                            <div  className="timer-value font-primary-bold text-center text-[11px] text-[#80809F] leading-none 3sm:hidden">минуты</div>
                                        </div>
                                    </div>
                                    <div  className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px] ">
                                        <div  className="circle-progress" data-percent="5" data-measure="67" data-measure-640="44">
                                            <svg  className="svg" width="67" height="67" viewBox="0 0 67 67" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <circle  className="placeholder" r="30.5" cx="33.5" cy="33.5" fill="transparent" stroke="#b3b6c3" opacity="0.7" strokeWidth="3" strokeDasharray="191.63715186897738" strokeDashoffset="0"></circle>
                                                <circle  className="progress" r="30.5" cx="33.5" cy="33.5" stroke="url(#primary)" strokeWidth="4" strokeLinecap="round" strokeDashoffset="182.05529427552852" fill="transparent" strokeDasharray="191.63715186897738"></circle>
                                                <defs>
                                                <linearGradient id="primary" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                                                    <stop stopColor="#339CFC"></stop>
                                                    <stop offset="1" stopColor="#0046D6"></stop>
                                                </linearGradient>
                                                <linearGradient id="secondary" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                                                    <stop stopColor="#8CD23C"></stop>
                                                    <stop offset="1" stopColor="#417A00"></stop>
                                                </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div  className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full z-[1]">
                                            <div  className="timer-value font-primary-med text-center text-lg text-black leading-none ">05</div>
                                            <div  className="timer-value font-primary-bold text-center text-[11px] text-[#80809F] leading-none 3sm:hidden">секунд</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {finish ?
                            null
                            :
                            <div className=''>
                                <button onClick={clickRegisterVk} className={`${registVk ? "bg-[#EFEFEF] border-solid border border-[#C7C7C7] cursor-default" : "bg-gradient-primary bg-gradient-primary-hover"} flex justify-center items-center  rounded-full  min-w-[184px] h-[41px] mb-3 gap-1`}>
                                    <div  className="svk-icon flex-shrink-0 w-[18px] h-[18px] flex justify-center items-center">
                                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.88275 9.90579C9.88275 9.90579 10.2076 9.87083 10.374 9.69771C10.5263 9.53908 10.521 9.23975 10.521 9.23975C10.521 9.23975 10.5008 7.842 11.1707 7.63562C11.831 7.43265 12.6788 8.98732 13.5786 9.58514C14.2582 10.0371 14.7741 9.9382 14.7741 9.9382L17.1785 9.90579C17.1785 9.90579 18.4356 9.83074 17.8396 8.87304C17.7903 8.79458 17.4919 8.16436 16.0525 6.8698C14.5444 5.51468 14.7469 5.73386 16.5622 3.38949C17.668 1.96189 18.1099 1.09032 17.9717 0.71764C17.8405 0.361166 17.027 0.455828 17.027 0.455828L14.3207 0.472031C14.3207 0.472031 14.12 0.445594 13.9712 0.531727C13.826 0.616155 13.7318 0.813154 13.7318 0.813154C13.7318 0.813154 13.3039 1.91754 12.7325 2.85733C11.5273 4.83926 11.0457 4.94416 10.8485 4.82135C10.3898 4.53395 10.5043 3.66835 10.5043 3.05348C10.5043 1.1321 10.8054 0.331318 9.91884 0.124085C9.62479 0.0550078 9.40822 0.00980903 8.6555 0.00213375C7.68972 -0.00724713 6.87273 0.00554498 6.40965 0.224717C6.10151 0.370547 5.86381 0.696319 6.00907 0.715081C6.18779 0.738107 6.59276 0.820829 6.80758 1.10396C7.0849 1.46982 7.07521 2.29022 7.07521 2.29022C7.07521 2.29022 7.23456 4.55186 6.70281 4.83244C6.33833 5.02517 5.83828 4.63203 4.76333 2.83346C4.2131 1.91242 3.79756 0.894171 3.79756 0.894171C3.79756 0.894171 3.71744 0.703995 3.57394 0.601658C3.4005 0.478001 3.1584 0.439624 3.1584 0.439624L0.586807 0.455828C0.586807 0.455828 0.20032 0.466061 0.0585791 0.628947C-0.0673154 0.773072 0.0488949 1.07241 0.0488949 1.07241C0.0488949 1.07241 2.06233 5.63578 4.34251 7.9358C6.43342 10.0439 8.80692 9.90579 8.80692 9.90579H9.88275Z" fill={registVk ? "#C7C7C7 " : "white"}></path>
                                        </svg>
                                    </div>
                                    <div  className={`${registVk ? "text-[#C7C7C7]" : "text-white"} svk-text font-secondary-bold text-[14px]`}>{registVk ? "Вы подписаны" : "Подписаться"}</div>
                                </button>
                                <button onClick={clickJoin} className={`${join ? "text-[#C7C7C7] bg-[#EFEFEF] border-solid border border-[#C7C7C7] cursor-default" : "text-white btn-secondary p-btn"} font-secondary-bold text-[14px]   rounded-full min-w-[184px] h-[41px]`}>{join ? "Вы приняли участие" : "Участвовать в акции"}</button>
                            </div>
                        }
                        
                    </div>
                    <div className='flex justify-between items-start bg-white rounded-xl h-[138px]'>
                        <div className="h-full bg-[url('/img/user_foto.png')] bg-cover rounded-xl px-6 flex flex-col h-full pt-6">
                            <div className='font-bold font-secondary-bold text-lg mb-2'>Santchezz</div>
                            <div className='relative bg-gold rounded-[100px] px-2 h-[22px] font-bold font-secondary-bold text-white text-xs flex items-center justify-center'>
                                Последний победитель
                                <img className='opacity-20 block absolute top-1 left-[23px]' src='/img/shape.svg' alt='shape'/>
                            </div>
                        </div>
                        <div className='border-x-solid border-x border-x-[#DBE0ED] px-4 flex flex-col mt-6 h-[67%]'>
                            <div className='font-bold font-secondary-bold text-base mb-2'>342 819</div>
                            <div className='font-bold font-secondary-bold text-[#B4BAD2] text-xs'>Открытых кейсов</div>
                        </div>
                        <div className='px-4 mt-6'>
                            <div className='font-bold font-secondary-bold text-base mb-2 flex flex-col'>118 523₽</div>
                            <div className='font-bold font-secondary-bold text-[#B4BAD2] text-xs'>Заработанно</div>
                        </div>
                    </div>
                    {/* <TopBanner name='Santchezz' rank='1' tovar='342 819' money='10 000' moneyGet='118 523' userFoto='/img/user_foto.png'/>*/}
                </div>
                <div className="w-full mt-6">
                    {join ?
                        <div className="stu-total font-secondary-bold text-lg text-[#C5CFE4] gap-3 flex flex-col mb-3">Ваше место
                            <div className="tuc rounded-xl p-6 flex items-center gap-4 bg-[#E7EAF2]">
                                <div className="tuc-avatar font-secondary-bold text-lg text-[#1D222C] pr-6">#231322</div>
                                <div className="tuc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden ">
                                    <img className="tuc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user"/>
                                </div>
                                <div className="tuc-username font-secondary-bold text-lg text-[#1D222C] ">Evhen_823</div>
                            </div>
                        </div>
                        : null
                    }
                    {finish ?
                        <div className="stu-total font-secondary-bold text-lg text-[#C5CFE4] gap-3 flex flex-col mb-3">Победитель
                            <div className="tuc rounded-xl p-6 flex items-center gap-4 bg-white">
                                <div className="tuc-avatar font-secondary-bold text-lg text-gradient-blue pr-6">#3213</div>
                                <div className="tuc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden ">
                                    <img className="tuc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user"/>
                                </div>
                                <div className="tuc-username font-secondary-bold text-lg text-gradient-blue">Santchezz</div>
                            </div>
                        </div>
                        :null
                    }
                    <div className="stu-total font-secondary-bold text-lg text-[#C5CFE4]">Участники</div>
                    <div className="stu-inner mt-4 flex flex-col gap-3 ">
                        <div className="stu-feed flex-grow grid grid-cols-1 gap-3">
                            {
                                arr.map((item, index) => {
                                    return (
                                        <div key={uuid()} className="tuc rounded-xl p-6 flex items-center gap-4 bg-white ">
                                            <div className="tuc-avatar font-secondary-bold text-lg text-[#1D222C]  pr-6">#{index+1}</div>
                                            <div className="tuc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden ">
                                                <img className="tuc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user"/>
                                            </div>
                                            <div className="tuc-username font-secondary-bold text-lg text-[#1D222C] ">Sansa</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <LayoutBtn />
        </div>
    );
}

export default GiveAway;
