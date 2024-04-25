import { useState, useEffect } from 'react';
import PrslTop from '../../components/prslTop/PrslTop';
import TopBanner from '../../components/topBanner/TopBanner';
import LayoutBtn from '../../components/LayoutBtn';
import uuid from 'react-uuid';
import Title from '../../components/title/Title';
import TopUserItem from '../../components/topUserItem/TopUserItem';

function TopUsers() {
    
    const arr = [1,2,3,4,5,6,7];

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className='w-full layout-main'>
                <Title title='Топ Юзеров'/>
                <PrslTop />
                <div className='flex justify-center mt-3 flex-wrap 2xl:flex-nowrap gap-2'>
                    <TopBanner name='Santchezz' rank='1' tovar='342 819' money='10 000' moneyGet='118 523' userFoto='user_foto.png'/>
                    <TopBanner name='Santchezz' rank='2' tovar='342 819' money='5 000' moneyGet='118 523' userFoto='user_foto.png'/>
                    <TopBanner name='Santchezz' rank='3' tovar='342 819' money='1 000' moneyGet='118 523' userFoto='user_foto.png'/>
                </div>
                <div className="w-full">
                    <div className="stu-total mt-6 font-secondary-bold text-lg text-[#C5CFE4]">Топ 10 мира</div>
                    <div className="stu-inner mt-4 flex flex-col gap-3 ">
                        <div className="stu-feed flex-grow grid grid-cols-1 gap-3">
                            {
                                arr.map((item, index) => {
                                    return (
                                        <TopUserItem key={uuid()} name='Sansa' earn='58924' tovars='863'/>
                                    )
                                })
                            }
                            <div className="stu-total font-secondary-bold text-lg text-black/20 gap-3 flex flex-col">Ваше место
                                <TopUserItem colorBg='true' name='Evhen_823' earn='58924' tovars='863'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LayoutBtn />
        </div>
    );
}

export default TopUsers;
