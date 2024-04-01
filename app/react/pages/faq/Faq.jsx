import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import Title from '../../components/title/Title';
import FaqQuest from '../../components/faqQuest/FaqQuest';

function Faq() {
    // const [rotate, setRotate] = useState([false, false, false, false, false, false, false]);
    // const [isOpenFaq, setIsOpenFaq] = useState(false);
    
    // const toggleFaq = (index) => {
    //     let newIsOpenFaq = [];

    //     if(isOpenFaq[index] === true) {
    //         newIsOpenFaq = [...isOpenFaq];
    //         newIsOpenFaq[index] = false;
    //     } else {
    //         newIsOpenFaq = isOpenFaq.map((item, i) => {
    //             if(i === index) {
    //                 return true;
    //             } else {
    //                 return false;
    //             };
    //         });
    //     };
    //     setIsOpenFaq(newIsOpenFaq);
    // };

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full layout-main">
                <Title title='Частые вопросы' search='true'/>   
                <div className="sfq-grid accordion grid grid-cols-1 gap-3 ">
                    <FaqQuest quest='Пополнил счет, а деньги не пришли, что делать?' answer='Ответ прост! Свяжитесь с нашим менеджером (Кнопка на сайте, снизу справа) и опишите делательно проблему. Вам обязательно помогут 24/7.'/>
                    <FaqQuest quest='Пополнил счет, а деньги не пришли, что делать? Пополнил счет, а деньги не пришли, что делать?' answer='Ответ прост! Свяжитесь с нашим менеджером (Кнопка на сайте, снизу справа) и опишите делательно проблему. Вам обязательно помогут 24/7.'/>
                    <FaqQuest quest='Пополнил счет, а деньги не пришли, что делать?' answer='Ответ прост! Свяжитесь с нашим менеджером (Кнопка на сайте, снизу справа) и опишите делательно проблему. Вам обязательно помогут 24/7.'/>
                    <FaqQuest quest='Пополнил счет, а деньги не пришли, что делать?' answer='Ответ прост! Свяжитесь с нашим менеджером (Кнопка на сайте, снизу справа) и опишите делательно проблему. Вам обязательно помогут 24/7.'/>
                    <FaqQuest quest='Пополнил счет, а деньги не пришли, что делать?' answer='Ответ прост! Свяжитесь с нашим менеджером (Кнопка на сайте, снизу справа) и опишите делательно проблему. Вам обязательно помогут 24/7.'/>
                    <FaqQuest quest='Пополнил счет, а деньги не пришли, что делать?' answer='Ответ прост! Свяжитесь с нашим менеджером (Кнопка на сайте, снизу справа) и опишите делательно проблему. Вам обязательно помогут 24/7.'/>
                    <FaqQuest quest='Пополнил счет, а деньги не пришли, что делать?' answer='Ответ прост! Свяжитесь с нашим менеджером (Кнопка на сайте, снизу справа) и опишите делательно проблему. Вам обязательно помогут 24/7.'/>
                </div>
            </div>
            <LayoutBtn toTop='true'/>
        </div>
    );
};

export default Faq;