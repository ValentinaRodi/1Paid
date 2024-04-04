import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import Title from '../../components/title/Title';
import Achievement from '../../components/achievement/Achievement';
import uuid from 'react-uuid';

function MyAchievements() {

    const arr = [
        {
            'icon': 'icon-achievements-star.png',
            'name': 'Звезда',
            'desc': 'Получить 50 лайков',
            'open': 'false',
        },
        {
            'icon': 'icon-achievements-star.png',
            'name': 'Звезда',
            'desc': 'Получить 50 лайков',
            'open': 'true',
        },
        {
            'icon': 'icon-achievements-commers.png',
            'name': 'Барыга',
            'desc': 'Продать 10 аккаунтов',
            'open': 'true',
        },
        {
            'icon': 'icon-achievements-elephant.png',
            'name': 'Купил слона',
            'desc': 'Купить 10 аккаунтов',
            'open': 'true',
        },
        {
            'icon': 'icon-achievements-major.png',
            'name': 'Мажор',
            'desc': 'Пополнить за все время на 5000',
            'open': 'true',
        },
        {
            'icon': 'icon-achievements-start.png',
            'name': 'Начинающий',
            'desc': 'Создать 10 тем',
            'open': 'true',
        },
        {
            'icon': 'icon-achievements-friend.png',
            'name': 'Наш друг',
            'desc': 'Авторизовался',
            'open': 'true',
        },
        {
            'icon': 'icon-achievements-social.png',
            'name': 'Общительный',
            'desc': 'Написать 50 комметариев',
            'open': 'true',
        },
        {
            'icon': 'icon-achievements-repute.png',
            'name': 'Репутация',
            'desc': 'Накопить 100 отзывов',
            'open': 'true',
        },
        {
            'icon': 'icon-achievements-gang.png',
            'name': 'Ты в Банде',
            'desc': 'Пригласить 5 по реферальной ссылке',
            'open': 'true',
        },
        {
            'icon': 'icon-achievements-honest.png',
            'name': 'Честный',
            'desc': 'Накопить 150 отзывов с отметкой 5',
            'open': 'true',
        },
    ];
    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full layout-main">
                <div className="sac">
                    <Title title='Мои достижения'/>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-1.5 sm:gap-3">
                        {
                            (arr.length !== 0) ? (
                                arr.map(item => {
                                    return <Achievement key={uuid()} open={item.open} icon={item.icon} name={item.name} desc={item.desc}/>
                                })
                            ) : <div></div>
                        }
                        
                    </div>
                </div>
            </div>
            <LayoutBtn />
        </div>
    );
};

export default MyAchievements;