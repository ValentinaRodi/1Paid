import { useState, useEffect } from 'react';

function TopBanner(props) {
    const [color, setColor] = useState('');

    useEffect(() => {
        (props.rank === '1') ? setColor('bg-gold') : (props.rank === '2') ? setColor('bg-silver') : setColor('bg-bronze');
    }, []);

    return (
        <div className='min-w-[33%] h-[100px] rounded-xl  bg-white relative'>
            <div className={`${color} absolute top-0 left-6 w-28 sm:w-36 h-4 min-[425px]:h-[22px] rounded-b-xl text-white text-[8px] min-[425px]:text-[10px] sm:text-xs flex items-center justify-center`}>{props.money} РУБЛЕЙ</div>
            <div className='flex justify-between items-center h-full'>
                <div className={`h-full bg-[url('/img/${props.userFoto}')] bg-cover rounded-xl pl-3 sm:pl-6 flex flex-col h-full justify-center w-[148px]`}>
                    <div className='font-bold font-secondary-bold text-xs min-[425px]:text-base sm:text-lg mb-2'>{props.name}</div>
                    <div className={`${color} relative rounded-[100px] w-14 sm:w-16 h-[20px] sm:h-[22px] font-bold font-secondary-bold text-white text-[10px] sm:text-xs flex items-center justify-center`}>
                        3 место
                        <img className='opacity-20 block absolute top-1 left-[23px]' src='/img/shape.svg' alt='shape'/>
                    </div>
                </div>
                <div className='border-x-solid border-x border-x-[#DBE0ED] px-2 sm:px-4 flex flex-col '>
                    <div className='font-bold font-secondary-bold text-xs sm:text-base mb-2'>{props.tovar}</div>
                    <div className='font-bold font-secondary-bold text-[#B4BAD2] text-[10px] sm:text-xs'>Купленные товары</div>
                </div>
                <div className='px-2 sm:px-4'>
                    <div className='font-bold font-secondary-bold text-xs sm:text-base mb-2 flex flex-col'>{props.moneyGet}</div>
                    <div className='font-bold font-secondary-bold text-[#B4BAD2] text-[10px] sm:text-xs'>Заработанно</div>
                </div>
            </div>
        </div>
    );
}

export default TopBanner;
