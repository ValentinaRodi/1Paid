import { useState, useEffect } from 'react';
import vplay from '../../../../web/img/icon-gc-vplay-icon.svg';
import btnIcon from '../../../../web/img/icon-btn-icon-11.svg';
import uuid from 'react-uuid';
import { Link, useLocation } from 'react-router-dom';

function CardsGame() {

    const [btn, setBtn] = useState(true);
    const [dataCards, setDataCards] = useState([]);
    const [gamesObj, setGamesObj] = useState([]);

    useEffect(() => {

        const jsonCards = document.getElementById('game-json'); 
        
        if(jsonCards) {
            setDataCards(JSON.parse(jsonCards.textContent));
        } else {
        
            fetch("/game/get", {
                method: "GET",
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDataCards(data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, []);
    
    useEffect(() => {
        if(dataCards.length !== 0) {
            setGamesObj(Object.values(dataCards.games))
            if(dataCards.offset + 8 >= dataCards.count) {
                setBtn(false);
            }
        }
    }, [dataCards]);

    // if(gamesObj.length > 0) {
    //     gamesObj.map((card) => (
    //         console.log('card',card)
    //     ))
        
    // }

    const arr = [
        {
            "id": 3,
            // "seo_name": "Steam",
            "new": 0,
            "created_at": null,
            "updated_at": null,
            "name": "Steam",
            "icon": "/img/steam.png",
            "bg_image": "/img/stim.jpg",
            "categories": [
                {
                    "id": 1,
                    "seo_name": "accwarface",
                    "name": "Услуги"
                },
                {
                    "id": 2,
                    "seo_name": "accwarface",
                    "name": "Аккаунты с играми"
                },
                {
                    "id": 3,
                    "seo_name": "accwarface",
                    "name": "Ключи"
                },
                {
                    "id": 4,
                    "seo_name": "accwarface",
                    "name": "Подарки (Gifts)"
                },
                {
                    "id": 5,
                    "seo_name": "accwarface",
                    "name": "Пополнение баланса"
                },
                {
                    "id": 6,
                    "seo_name": "accwarface",
                    "name": "Очки"
                },
                {
                    "id": 7,
                    "seo_name": "accwarface",
                    "name": "Оффлайн активации"
                },
                {
                    "id": 8,
                    "seo_name": "accwarface",
                    "name": "Смена региона"
                },
            ]
        },
        {
            "id": 4,
            "seo_name": "Counter-Strike 2",
            "new": 1,
            "created_at": "2024-01-17 06:27:54",
            "updated_at": "2024-01-17 06:27:54",
            "name": "Counter-Strike 2",
            "icon": "/img/CounterStrike2.svg",
            "bg_image": "/img/Counter-Strike2.jpg",
            "categories": [
                {
                    "id": 5,
                    "seo_name": "accwarface",
                    "name": "Аккаунты"
                },
                {
                    "id": 6,
                    "seo_name": "accwarface",
                    "name": "Prime"
                },
                {
                    "id": 7,
                    "seo_name": "accwarface",
                    "name": "FACEIT Premium"
                },
                {
                    "id": 8,
                    "seo_name": "accwarface",
                    "name": "Скины"
                },
                {
                    "id": 9,
                    "seo_name": "accwarface",
                    "name": "Буст"
                },
                {
                    "id": 10,
                    "seo_name": "accwarface",
                    "name": "Обучение"
                },
                {
                    "id": 11,
                    "seo_name": "accwarface",
                    "name": "Прочее"
                }
            ]
        },
        {
            "id": 3,
            // "seo_name": "Steam",
            "new": 0,
            "created_at": null,
            "updated_at": null,
            "name": "Dota 2",
            "icon": "/img/icons8-dota.png",
            "bg_image": "/img/dota.jpg",
            "categories": [
                {
                    "id": 1,
                    "seo_name": "accwarface",
                    "name": "Аккаунты"
                },
                {
                    "id": 2,
                    "seo_name": "accwarface",
                    "name": "Привязки"
                },
                {
                    "id": 3,
                    "seo_name": "accwarface",
                    "name": "Предметы"
                },
                {
                    "id": 4,
                    "seo_name": "accwarface",
                    "name": "Буст MMR"
                },
                {
                    "id": 5,
                    "seo_name": "accwarface",
                    "name": "Калибровка"
                },
                {
                    "id": 6,
                    "seo_name": "accwarface",
                    "name": "Отмыв ЛП"
                },
                {
                    "id": 7,
                    "seo_name": "accwarface",
                    "name": "Обучение"
                },
                {
                    "id": 8,
                    "seo_name": "accwarface",
                    "name": "Услуги"
                },
                {
                    "id": 9,
                    "seo_name": "accwarface",
                    "name": "Компендиум"
                },
                {
                    "id": 10,
                    "seo_name": "accwarface",
                    "name": "Прочее"
                },
            ]
        },
        {
            "id": 3,
            // "seo_name": "Steam",
            "new": 0,
            "created_at": null,
            "updated_at": null,
            "name": "Fortnite",
            "icon": "/img/icons8-fortnite.svg",
            "bg_image": "/img/fortnite.avif",
            "categories": [
                {
                    "id": 1,
                    "seo_name": "accwarface",
                    "name": "Аккаунты"
                },
                {
                    "id": 2,
                    "seo_name": "accwarface",
                    "name": "В-баксы"
                },
                {
                    "id": 3,
                    "seo_name": "accwarface",
                    "name": "Донат"
                },
                {
                    "id": 4,
                    "seo_name": "accwarface",
                    "name": "PvE"
                },
                {
                    "id": 5,
                    "seo_name": "accwarface",
                    "name": "Услуги"
                },
                {
                    "id": 6,
                    "seo_name": "accwarface",
                    "name": "Буст"
                },
                {
                    "id": 10,
                    "seo_name": "accwarface",
                    "name": "Прочее"
                },
            ]
        },
        {
            "id": 3,
            // "seo_name": "Steam",
            "new": 0,
            "created_at": null,
            "updated_at": null,
            "name": "PlayStation",
            "icon": "/img/icons8-play-station.svg",
            "bg_image": "/img/wallpapersden.com_forza-horizon-3-halo-wars-2-gears-of-war-4_2560x1600.jpg",
            "categories": [
                {
                    "id": 1,
                    "seo_name": "accwarface",
                    "name": "Аккаунты"
                },
                {
                    "id": 2,
                    "seo_name": "accwarface",
                    "name": "Ключи"
                },
                {
                    "id": 3,
                    "seo_name": "accwarface",
                    "name": "Услуги"
                },
                {
                    "id": 4,
                    "seo_name": "accwarface",
                    "name": "Пополнение бумажника"
                },
                {
                    "id": 5,
                    "seo_name": "accwarface",
                    "name": "Plus"
                },
            ]
        },
        {
            "id": 3,
            // "seo_name": "Steam",
            "new": 0,
            "created_at": null,
            "updated_at": null,
            "name": "Xbox",
            "icon": "/img/icons8-xbox.svg",
            "bg_image": "/img/Xbox-Game-Pass-2048x1152.webp",
            "categories": [
                {
                    "id": 1,
                    "seo_name": "accwarface",
                    "name": "Аккаунты"
                },
                {
                    "id": 2,
                    "seo_name": "accwarface",
                    "name": "Ключи"
                },
                {
                    "id": 3,
                    "seo_name": "accwarface",
                    "name": "Пополнение баланса"
                },
                {
                    "id": 4,
                    "seo_name": "accwarface",
                    "name": "Услуги"
                },
                {
                    "id": 5,
                    "seo_name": "accwarface",
                    "name": "Game Pass"
                },
            ]
        },
    ];
    
    return (
        <div className="sgc">
            <div  className="sgc-grid grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
                {
                    (gamesObj.length > 0) ? (
                        gamesObj.map(card => (
                            card.categories ?
                                <div key={uuid()} className="gc relative overflow-hidden rounded-lg p-5 min-h-[195px]">
                                    <div className="gc-bg absolute z-[1] top-0 left-0 w-full h-full">
                                        <img className="relative z-[1] w-full h-full object-cover object-center" src={card.bg_image} alt="picture"/>
                                    </div>
                                    <div className="gc-icon">
                                        <div className="gc-icon-pic overflow-hidden rounded-full w-10 h10 xl:w-16 xl:h-16 md:w-12 md:h-12">
                                            <img className="w-full h-full object-cover" src={card.icon} alt="Warface"/>
                                        </div>
                                    </div>
                                    <div className="gc-title">
                                        <h3 className="font-secondary-bold text-2xl text-white xl:text-xl md:text-lg">{card.name}</h3>
                                    </div>
                                    <div className="gc-badges">
                                    </div>
                                    <div className="gc-vplay cursor-pointer flex flex-col items-center">
                                        <div className="gc-vplay-icon w-[42px] h-[42px] [&amp;_svg]:w-full md:w-[44px] md:h-[44px]">
                                            <img src={vplay} alt="gc-vplay-icon"/>
                                        </div>
                                        <div className="gc-vplay-label font-secondary-bold text-center text-[10px] text-white md:hidden">Video</div>
                                    </div>
                                    <div className="gc-tags-wrap">
                                        <div className="gc-tags">
                                            {Object.values(card.categories).map((categ) => (
                                                <Link to={`catalog/${card.seo_name}/${categ.seo_name}`} state={{ game: card.seo_name, category: categ.seo_name, categoryId: categ.id }} key={uuid()} className="gc-tags-item w-fit font-secondary-med text-sm text-white hover:text-white/75 bg-inherit flex justify-start">{categ.name}</Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="gc-btn rounded-full border border-solid border-white w-[160px] h-11 flex items-center justify-between bg-transparent">
                                        <div className="gc-btn-label flex-grow px-2 font-secondary-bold text-center text-xs text-white">Перейти</div>
                                        <Link  to={`catalog/${card.seo_name}`} state={{ game: card.seo_name, category: card.categories[0].seo_name, categoryId: 1 }} className="gc-btn-subbtn btn btn-secondary flex-shrink-0 relative right-[-2px] rounded-full w-11 h-11 justify-center">
                                            <div className="btn-icon text-white w-1/2 [&amp;_svg]:w-full">
                                                <img src={btnIcon} alt="btn-icon"/>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            : null
                        ))
                    ) : null
                }
                {
                    (arr.length > 0) ? (
                        arr.map(card => (
                            card.categories ?
                                <div key={uuid()} className="gc relative overflow-hidden rounded-lg p-5 min-h-[195px]">
                                    <div className="gc-bg absolute z-[1] top-0 left-0 w-full h-full">
                                        <img className="relative z-[1] w-full h-full object-cover object-center" src={card.bg_image} alt="picture"/>
                                    </div>
                                    <div className="gc-icon">
                                        <div className="gc-icon-pic overflow-hidden rounded-full w-10 h10 xl:w-16 xl:h-16 md:w-12 md:h-12">
                                            <img className="w-full h-full object-cover" src={card.icon} alt="Warface"/>
                                        </div>
                                    </div>
                                    <div className="gc-title">
                                        <h3 className="font-secondary-bold text-2xl text-white xl:text-xl md:text-lg">{card.name}</h3>
                                    </div>
                                    <div className="gc-badges">
                                    </div>
                                    <div className="gc-vplay flex flex-col items-center">
                                        <div className="gc-vplay-icon w-[42px] h-[42px] [&amp;_svg]:w-full md:w-[44px] md:h-[44px]">
                                            <img src={vplay} alt="gc-vplay-icon"/>
                                        </div>
                                        <div className="gc-vplay-label font-secondary-bold text-center text-[10px] text-white md:hidden">Video</div>
                                    </div>
                                    <div className="gc-tags-wrap ">
                                        <div className="gc-tags">
                                            {Object.values(card.categories).map((categ) => (
                                                <div key={uuid()} className="gc-tags-item w-fit font-secondary-med text-sm text-white bg-inherit flex justify-start">{categ.name}</div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="gc-btn rounded-full border border-solid border-white w-[160px] h-11 flex items-center justify-between bg-transparent">
                                        <div className="gc-btn-label flex-grow px-2 font-secondary-bold text-center text-xs text-white">Перейти</div>
                                        <div className="gc-btn-subbtn flex items-center btn-secondary flex-shrink-0 relative right-[-2px] rounded-full w-11 h-11 justify-center">
                                            <div className="btn-icon text-white w-1/2 [&amp;_svg]:w-full">
                                                <img src={btnIcon} alt="btn-icon"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='z-10 absolute top-0 left-0 w-full h-full bg-[rgba(6,9,18,0.6)] flex items-center justify-center font-primary-bold text-[#b2bac9] pb-8 text-4xl uppercase'>Скоро</div>
                                </div>
                            : null
                        ))
                    ) : null
                }
            </div>
            <div className="sgc-f flex justify-center mt-10 ">
                {(!btn) ? null :
                    <button className="sgc-btn-more rounded-full h-[60px] flex items-center justify-center px-12 bg-[#E3E9F5] duration-200 hover:bg-[#d3d7e0]">
                        <div className="btn-text font-secondary-bold text-base text-[#B9C3D6]">Показать еще 25</div>
                    </button>
                }
            </div>
        </div>
    );
}

export default CardsGame;

