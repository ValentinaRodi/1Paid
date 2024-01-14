import { useState, useEffect } from 'react';
import vplay from '../../../img/icon-gc-vplay-icon.svg';
import btnIcon from '../../../img/icon-btn-icon-11.svg';
import uuid from 'react-uuid';

function Cards() {

    const [btn, setBtn] = useState(true);
    const [dataCards, setDataCards] = useState([]);
    const [gamesObj, setGamesObj] = useState([]);

    useEffect(() => {
        const jsonCards = document.getElementById('games-json').innerHTML;
        setDataCards(JSON.parse(jsonCards));
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
        <>
            <div class="sh flex justify-between items-center gap-x-3 mt-10 mb-10">
                <div class="img-hid">
                    <img src="/img/icon-btn-13.svg" alt="btn-icon"/>
                </div>
                <div class="sh-title flex flex-col justify-center items-center">
                    <h2 class="sh-title-text font-secondary-bold text-bold text-2xl text-black">Выбор игры</h2>
                    <div class="sh-title-line mt-2 rounded-full w-9 h-1 2md:mt-2 bg-gradient-primary">
                    </div>
                </div>
                <div class="sh-bar flex items-center gap-2 2md:w-full 2md:flex-row-reverse">
                    <div class="sh-search rounded-full h-[50px] px-6 max-w-[270px] w-full flex items-center bg-[#E8EAF7] 2md:max-w-none 2md:flex-grow 2md:h-10 2md:px-3">
                        <button class="sh-search-icon bg-inherit flex-shrink-0 w-4 h-full [&amp;_svg]:w-full flex justify-center items-center text-[#B8BACF] duration-100 hover:text-black">
                            <img src="/img/icon-sh-search-icon.svg" alt="sh-search-icon"/>
                        </button>
                        <input class="sh-search-input flex-grow ml-2.5 w-full h-full bg-transparent font-primary-med text-base text-black 2md:text-sm" placeholder="Поиск"/>
                    </div>
                </div>
            </div>
            <div className="sgc mt-10 md:mt-5">
                <div  className="sgc-grid grid grid-cols-2 gap-[30px]">
                    {
                        (gamesObj.length !== 0) ? (
                            gamesObj.map((card) => (

                                <div key={uuid()} className="gc relative overflow-hidden rounded-lg p-5">
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
                                        <div className="gc-tags">
                                            {Object.values(card.categories).map((categ) => (
                                                <a key={uuid()} className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 " href="#">{categ.name}</a>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="gc-btn rounded-full border border-solid border-white w-[160px] h-11 flex items-center justify-between bg-transparent cursor-pointer ">
                                        <div className="gc-btn-label flex-grow px-2 font-secondary-bold text-center text-xs text-white">Перейти</div>
                                        <button className="gc-btn-subbtn btn btn-secondary flex-shrink-0 relative right-[-2px] rounded-full w-11 h-11 justify-center">
                                            <div className="btn-icon text-white w-1/2 [&amp;_svg]:w-full">
                                                <img src={btnIcon} alt="btn-icon"/>
                                            </div>
                                        </button>
                                    </div>
                                </div>

                            ))
                        ) : (<div className='text-[#FF5343]'>error - game not found</div>)
                    }
                </div>
                {(!btn) ? null :
                    <div className="sgc-f flex justify-center mt-10 ">
                        <button className="sgc-btn-more rounded-full h-[60px] flex items-center justify-center px-12 bg-[#E3E9F5] duration-200 hover:bg-[#d3d7e0]">
                            <div className="btn-text font-secondary-bold text-base text-[#B9C3D6]">Показать еще 25</div>
                        </button>
                    </div>
                }
            </div>
        </>
    );
}

export default Cards;
