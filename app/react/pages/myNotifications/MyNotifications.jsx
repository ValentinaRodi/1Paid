import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import { Link } from 'react-router-dom';
import Title from '../../components/title/Title';
import Pagination from '../../components/pagination/Pagination';
import NotificationItems from '../../components/notificationItems/NotificationItems';

function MyAchievements() {
    // const [cardsView, setCardsView] = useState(true);
    // const [cardsViewImg, setCardsViewImg] = useState('/img/icon-cards-stroke.svg');
    // const [cardsViewDiv, setCardsViewDiv] = useState('');

    // const changeViewCards = () => {
    //     (cardsView) ? setCardsView(false) : setCardsView(true);
    //     (cardsViewImg === '/img/icon-card-tile.svg') ? setCardsViewImg('/img/icon-cards-stroke.svg') : setCardsViewImg('/img/icon-card-tile.svg');
    //     (cardsViewDiv === '') ? setCardsViewDiv('_view-list') : setCardsViewDiv(''); 
    // };

    useEffect(() => {
      const headerHeight = document.querySelector('.layout-h').getBoundingClientRect().height;
      const mainHeight = document.querySelector('.layout-main').getBoundingClientRect().height;
      const totalHeight = headerHeight + mainHeight;
      document.querySelector('.lf-feed').style.height = totalHeight + "px";
    }, []);


    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full layout-main">
              <div className="sntf mt-5">
                <Title title='Ваши уведомления' search='true'/>
                <div className="sntf-grid mt-0 sm:mt-11 grid grid-cols-1 gap-3 ">
                  <NotificationItems bonus='true' sum='500' date='27.02.2020 15:34'/>
                  <NotificationItems userName='Lacoste17' theme='Бесплатная бесконечная' date='27.02.2020 15:34'/>
                  <NotificationItems userName='Lacoste17' theme='Бесплатная бесконечная накрутка лайков на пост ВК. Подскажу как сделать накрутку легально' date='27.02.2020 15:34'/>
                  <NotificationItems bonus='true' sum='500' date='27.02.2020 15:34'/>
                  <NotificationItems bonus='true' sum='500' date='27.02.2020 15:34'/>
                  <NotificationItems bonus='true' sum='500' date='27.02.2020 15:34'/>
                  <NotificationItems userName='Lacoste17' theme='Бесплатная бесконечная накрутка лайков на пост ВК. Подскажу как сделать накрутку легально' date='27.02.2020 15:34'/>
                </div>
                <Pagination />
              </div>
            </div>
            <LayoutBtn toTop='true'/>
        </div>
    );
};

export default MyAchievements;