import { useState, useEffect } from 'react';
import vplay from '../../../../web/img/icon-gc-vplay-icon.svg';
import btnIcon from '../../../../web/img/icon-btn-icon-11.svg';
import uuid from 'react-uuid';
import { Link, useLocation } from 'react-router-dom';

function Cards() {

    const [btn, setBtn] = useState(true);
    const [dataCards, setDataCards] = useState([]);
    const [gamesObj, setGamesObj] = useState([]);

    useEffect(() => {

        const jsonCards = document.getElementById('games-json').textContent;
    
        if(jsonCards.length > 0) {
            setDataCards(JSON.parse(jsonCards));
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
    
    return (
        <div className="sgc mt-10 md:mt-5">
            <div  className="sgc-grid grid grid-cols-2 gap-[30px]">
                {
                    (gamesObj.length !== 0) ? (
                        gamesObj.map((card) => (
                            <div key={uuid()} className="gc relative overflow-hidden rounded-lg p-5 min-h-[195px]">
                                <div className="gc-bg absolute z-[1] top-0 left-0 w-full h-full">
                                    <img className="relative z-[1] w-full h-full object-cover object-center" src={card.bg_image} alt="picture"/>
                                </div>
                                <div className="gc-icon">
                                    <div className="gc-icon-pic overflow-hidden rounded-full w-16 h16 xl:w-12 xl:h-12 md:w-10 md:h-10">
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
                                    <div className="gc-tags w-[30%]">
                                        {Object.values(card.categories).map((categ) => (
                                            <Link to={`catalog/${card.seo_name}/${categ.seo_name}`} state={{ game: card.seo_name, categoryId: categ.id }} key={uuid()} className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 bg-inherit flex justify-start">{categ.name}</Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="gc-btn rounded-full border border-solid border-white w-[160px] h-11 flex items-center justify-between bg-transparent">
                                    <div className="gc-btn-label flex-grow px-2 font-secondary-bold text-center text-xs text-white">Перейти</div>
                                    <Link  to={`catalog/${card.seo_name}`} state={{ game: card.seo_name, categoryId: 1 }} className="gc-btn-subbtn btn btn-secondary flex-shrink-0 relative right-[-2px] rounded-full w-11 h-11 justify-center">
                                        <div className="btn-icon text-white w-1/2 [&amp;_svg]:w-full">
                                            <img src={btnIcon} alt="btn-icon"/>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        ))
                    ) : (<div className='text-[#FF5343]'>error - game not found</div>)
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

export default Cards;

