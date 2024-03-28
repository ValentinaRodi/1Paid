import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import Title from '../../components/title/Title';
import GuaranteesItem from '../../components/guaranteesItem/GuaranteesItem';

function Guarantees() {

    

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full layout-main">
                <div className="sgr mt-5">
                    <section className="sgr-section">
                        <Title title='Гарантии'/>
                        <div className="sgr-grid grid gap-3 grid-cols-3 ">
                            <GuaranteesItem icon='icon-lightning-primary.5efe4c7b.svg' title='Моментально' text='Вы получите свой товар моментально, сразу после успешной оплаты.'/>
                            <GuaranteesItem icon='icon-lock-primary.1be6e59a.svg' title='Безопасно' text='Полученные нами данные о вас остаются конфиденциальны.'/>
                            <GuaranteesItem icon='icon-check-primary.05bcc017.svg' title='Качественно' text='Мы предлагаем качественный и удобный сервис для вас.'/>
                        </div>
                    </section>
                    <section className="sgr-section mt-11">
                        <Title title='Все ещё не уверены?' green='true'/>
                        <div className="sgr-grid grid gap-3 grid-cols-2">
                            <GuaranteesItem icon='icon-delivery-secondary.dee57dc4.svg' title='Множество поставщиков' text='Сотрудничество с поставщиками увеличивает наш ассортимент и поддерживает рубрику “Случайный аккаунт”.'/>
                            <GuaranteesItem icon='icon-headphones-secondary.a7c30ce4.svg' title='Техническая поддержка' text='У нас работает квалифицированная техническая поддержка, которая оперативно ответит на все ваши вопросы.'/>
                            <GuaranteesItem icon='icon-like-secondary.c45a0825.svg' title='Безопасная сделка' text='При возникновений проблем и спорных ситуаций всегда принимается справедливое решение. Мы несем ответсвенность за безопасность вашей сделки.'/>
                            <GuaranteesItem icon='icon-wallet-secondary.50c98ee7.svg' title='Многообразие оплаты' text='Мы поддерживаем множество способов оплаты, в том числе и зарубежные переводы.'/>
                        </div>
                    </section>
                </div>
            </div>
            <LayoutBtn toTop='true'/>
        </div>
    );
};

export default Guarantees;