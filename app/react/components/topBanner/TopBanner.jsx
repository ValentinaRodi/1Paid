import { useState, useEffect } from 'react';

function TopBanner(props) {
    const [color, setColor] = useState('');

    useEffect(() => {
        (props.rank === '1') ? setColor('bg-gold') : (props.rank === '2') ? setColor('bg-silver') : setColor('bg-bronze');
    }, []);
    console.log('props1', props.rank === '1');
    console.log('props2', props.rank === '2');

    console.log('props3', props.rank === '3');


    return (
        <div className='w-[33%] h-[100px] rounded-xl  bg-white'>
            <div className={`${color} w-36 h-[22px] rounded-b-xl ml-6 text-white text-xs flex items-center justify-center`}>{props.money} РУБЛЕЙ</div>
            <div className='flex justify-between items-center'>
                <div className={`bg-[url(${props.user_foto})]`}>
                    <div className='font-bold font-secondary-bold text-lg mb-2'>{props.name}</div>
                    <div className={`${color} rounded-[100px] w-16 h-[22px] font-bold font-secondary-bold text-white text-xs flex items-center justify-center`}>{props.rank} место</div>
                    <img src='/img/shape.svg' alt='shape'/>
                </div>
                <div className='border-x-solid border-x border-x-[#DBE0ED] px-4'>
                    <div className='font-bold font-secondary-bold text-base mb-2'>{props.tovar}</div>
                    <div className='font-bold font-secondary-bold text-[#B4BAD2] text-xs'>Купленные товары</div>
                </div>
                <div className='px-4'>
                    <div className='font-bold font-secondary-bold text-base mb-2'>{props.moneyGet}₽</div>
                    <div className='font-bold font-secondary-bold text-[#B4BAD2] text-xs'>Заработанно</div>
                </div>
            </div>
        </div>
    );
}

export default TopBanner;
