import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Rating from '../../components/rating/Rating';
import Title from '../../components/title/Title';
import ProfileItems from '../../components/profileItems/ProfileItems';
import uuid from 'react-uuid';
import FeedbacksItem from '../../components/feedbacksItem/FeedbacksItem';
import CardGameString from "../../components/cardGame/CardGameString";
import Pagination from '../../components/pagination/Pagination'

function Profile() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [orient, setOrient] = useState('');
    const [name, setName] = useState('');
    const [balance, setBalance] = useState('');
    const [bonus, setBonus] = useState('');
    const [avatar, setAvatar] = useState('');
    const location = useLocation();
    const { isAuthenticated, setAuth } = useAuth();
    const [feedbackClass, setFeedbackClass] = useState('nav-link-prim');
    const [themesClass, setThemesClass] = useState('nav-link');
    const [shoppListClass, setShoppListClass] = useState('nav-link');
    const [indexAchievement, setIndexAchievement] = useState(2);
    const [indexOnSale, setIndexOnSale] = useState(1);
    const [feedback, setFeedback] = useState(true);
    const [themes, setThemes] = useState(false);
    const [shoppList, setShoppList] = useState(false);

    useEffect(() => {

        fetch("/profile", {
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
            console.log('data', data);
        })
        .catch((error) => {
            console.log(error);
        });

        let loggedInUser = localStorage.getItem('logged');

        if (isAuthenticated === null) {
            window.location = '/';
        }

        if (loggedInUser) {
            setLoggedIn(true);
            setName(localStorage.getItem('name'));
            setBalance(localStorage.getItem('balance'));
            setBonus(localStorage.getItem('bonus'));
            
            if(localStorage.getItem('avatar') !== 'null') {
                setAvatar(localStorage.getItem('avatar'))
            };
        }

    }, [loggedIn]);

    const changeLoggedFalse = () => {
        
        localStorage.clear();

        fetch("/logout", {
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
            //console.log('data', data);
            setAuth(false);
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const clickFeedback = () => {
        setFeedbackClass('nav-link-prim');
        setThemesClass('nav-link');
        setShoppListClass('nav-link');
        setFeedback(true);
        setShoppList(false);
        setThemes(false);
    };

    const clickThemes = () => {
        setFeedbackClass('nav-link');
        setThemesClass('nav-link-prim');
        setShoppListClass('');
        setFeedback(false);
        setShoppList(false);
        setThemes(true);
    };

    const clickShoppList = () => {
        setFeedbackClass('nav-link');
        setThemesClass('nav-link');
        setShoppListClass('nav-link-prim');
        setFeedback(false);
        setShoppList(true);
        setThemes(false);
    };

    const showAllAchievement = () => {
        (indexAchievement === 2) ? setIndexAchievement(10000) : setIndexAchievement(2);
    };

    const showOnSale = () => {
        (indexOnSale === 1) ? setIndexOnSale(10000) : setIndexOnSale(1);
    };

    const arr = [
        {
            'name': 'Very rare global gold',
            'text':'Золотой глобус WF с шоколадным акцентом, для лучшего покупателя'
        },
        {
            'name': 'Global Gold',
            'text':'Золотой глобус WF'
        },
        {
            'name': 'Global Gold',
            'text':'Золотой глобус WF'
        },
        {
            'name': 'Global Gold',
            'text':'Золотой глобус WF'
        },
        {
            'name': 'Global Gold',
            'text':'Золотой глобус WF'
        },
        {
            'name': 'Very rare global gold',
            'text':'Золотой глобус WF с шоколадным акцентом, для лучшего покупателя'
        }
    ];

    const onSale = [
        {
            'name': 'Аккаунт Warface за хорошие деньги, плюс бону',
            'text':'525 000'
        },
        {
            'name': 'Аккаунт Warface',
            'text':'500'
        },
        {
            'name': 'Аккаунт Warface за хорошие деньги, плюс бону',
            'text':'525 000'
        },
        {
            'name': 'Аккаунт Warface',
            'text':'500'
        },
        {
            'name': 'Аккаунт Warface за хорошие деньги, плюс бону',
            'text':'525 000'
        },
        {
            'name': 'Аккаунт Warface',
            'text':'500'
        }
    ];

    const feedbacks = [0,1,2];
    const arrshoppList = [0,1,2,3,4];
    
    return (
        <div className="layout-b flex flex-wrap content-between">
            <div className="spf w-full layout-main">
                <Title title='Мой профиль'/>
                <div className="spf-main flex flex-wrap lg:flex-nowrap w-full gap-[12px]">
                    <div className="spf-bar flex flex-row flex-wrap sm:flex-nowrap lg:flex-col items-start w-full lg:w-[290px] gap-[12px]">
                        <div className="sps-bar w-full sm:w-auto flex flex-col items-start font-secondary-bold h-auto sm:h-full min-[850px]:h-auto">
                            <div className="sps-avatar self-center flex-shrink-0 w-[258px] h-[258px] mb-[12px] overflow-hidden rounded-[12px] relative">
                                <img className="sps-avatar-pic w-full h-full object-cover" src='img/avatar-example-5.00d4721a.png' alt="user" />
                            </div>
                            <div className="sps-user flex flex-col w-full font-secondary-bold">
                                <div className="sps-user-info flex justify-between items-center mb-[8px] w-full">
                                <div className="sps-user-username text-base sm:text-lg text-black">Cool Designer</div>
                                <button className="sps-user-link flex justify-center items-center bg-gradient-primary w-[20px] h-[20px] rounded-full">
                                    <div className="sps-user-link-icon flex-shrink-0 w-[10px] h-[5px] [&amp;_svg]:w-full flex justify-center items-center">
                                        <img className="sps-avatar-pic w-full h-full object-cover" src="/img/icon-vk-profile.svg" alt="user" />
                                    </div>
                                </button>
                                </div>
                            </div>
                            <span className="sps-user-status block text-xs max-w-max py-[2px] px-[8px] mb-[12px] text-[#8CD23C] text-center border border-[#8CD23C] rounded-full">В сети</span>
                            <div className="sps-user-actions w-full pt-[12px] border-t border-[#DBE0ED]">
                                <button onClick={changeLoggedFalse} className="sps-user-action bg-inherit text-[#ACB6CC] text-xs sm:text-sm">Выйти из аккаунта</button>
                            </div>
                        </div>
                        <div className='flex flex-row lg:flex-col w-full gap-3 flex-wrap min-[850px]:flex-nowrap'>
                            <div className="puic flex flex-col font-secondary-bold text-black w-full min-[850px]:w-[49%] lg:w-auto ">
                                <div className="puic-head flex justify-between mb-[16px]">
                                    <div className="puic-title text-xs sm:text-sm">Достижения</div>
                                    <button onClick={showAllAchievement} className="bg-inherit text-[#ACB6CC] text-[10px] sm:text-xs rounded-none border-0 border-b border-[#ACB6CC] border-solid cursor-pointer">Показать всё</button>
                                </div>
                                <div className="puic-list flex flex-col gap-3">
                                    {arr.length !==0 ?
                                        arr.map((item, index) => {
                                            if(index <= indexAchievement) {
                                                return (<ProfileItems key={uuid()} name={item.name} text={item.text} icon='Rectangle2.png'/>);
                                            }
                                        })
                                        : null
                                    }
                                </div>
                            </div>
                            <div className="puic flex flex-col font-secondary-bold text-black py-4 sm:py-6 w-full min-[850px]:w-[49%] lg:w-auto">
                                <div className="puic-head flex justify-between mb-[16px]">
                                    <div className="puic-title text-xs sm:text-sm">В продаже</div>
                                    <button onClick={showOnSale} className="bg-inherit text-[#ACB6CC] text-[10px] sm:text-xs rounded-none border-0 border-b border-[#ACB6CC] border-solid cursor-pointer">Показать всё</button>
                                </div>
                                <div className="puic-list flex flex-col gap-3">
                                    {onSale.length !==0 ?
                                        onSale.map((item, index) => {
                                            if(index <= indexOnSale) {
                                                return (<ProfileItems key={uuid()} name={item.name}  text={`${item.text} ₽`} icon='icon-shopping-card-gradient.ff3dca76.svg'/>);
                                            }
                                        })
                                        : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="spf-block flex flex-col w-full gap-[12px] ">
                        <div className="spf-user flex flex-wrap justify-between font-secondary-bold text-[14px] text-[#C1CCE0]">
                            <div className='w-full p-4 sm:p-6 flex flex-wrap gap-x-[62px] gap-y-[10px] sm:gap-y-[20px]'>
                                <div className="spf-info-wrapper flex flex-col">
                                    <div className="spf-info gap-y-[10px] flex mb-[20px] flex-wrap sm:flex-nowrap">
                                        <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                                            <div className="spf-info-label text-xs sm:text-sm">Имя</div>
                                            <div className="spf-info-value text-sm sm:text-base text-black">Никита</div>
                                        </div>
                                        <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                                            <div className="spf-info-label text-xs sm:text-sm">Группа</div>
                                            <div className="spf-info-value text-sm sm:text-base text-black">Легенда</div>
                                        </div>
                                        <div className="spf-info-block flex flex-col">
                                            <div className="spf-info-label text-xs sm:text-sm">Кол-во лайков</div>
                                            <div className="spf-info-value text-sm sm:text-base text-black">452</div>
                                        </div>
                                    </div>
                                    <div className="spf-info gap-y-[10px] flex w-full flex-wrap sm:flex-nowrap">
                                        <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                                            <div className="spf-info-label text-xs sm:text-sm">Создано тем на форуме</div>
                                            <div className="spf-info-value text-sm sm:text-base text-black">2,938</div>
                                        </div>
                                        <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                                            <div className="spf-info-label text-xs sm:text-sm">Покупок</div>
                                            <div className="spf-info-value text-sm sm:text-base text-black">344</div>
                                        </div>
                                        <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                                            <div className="spf-info-label text-xs sm:text-sm">Продаж </div>
                                            <div className="spf-info-value text-sm sm:text-base text-black">104</div>
                                        </div>
                                        <div className="spf-info-block flex flex-col">
                                            <div className="spf-info-label text-xs sm:text-sm">Дата регистрации</div>
                                            <div className="spf-info-value text-sm sm:text-base text-black">22:12 27.12.2019</div>
                                        </div>
                                    </div>
                                </div>
                                <Rating seller='продавца' reviews='1555' rank='4.8'/>
                            </div>
                            <div className="tabs gap-x-[24px] gap-y-[16px] w-full flex items-center font-primary-bold text-xs sm:text-sm overflow-hidden flex-wrap text-[#8A98B3] ">
                                <button onClick={clickFeedback} className="tabs-tab bg-inherit block uppercase ">
                                    <div className={`${feedbackClass} nav-link-tab tabs-tab-text text-[#8A98B3]`}>Отзывы о продажах</div>
                                </button>
                                <button onClick={clickThemes} className="tabs-tab bg-inherit block uppercase ">
                                    <div className={`${themesClass} nav-link-tab tabs-tab-text text-[#8A98B3]`}>Созданные темы на форуме</div>
                                </button>
                                <button onClick={clickShoppList} className="tabs-tab bg-inherit block uppercase ">
                                    <div className={`${shoppListClass} nav-link-tab tabs-tab-text text-[#8A98B3]`}>Список покупок</div>
                                </button>
                            </div>
                        </div>
                        {feedback ?
                            <div className="spf-feedbacks grid grid-cols-1 gap-y-[12px]">
                                {feedbacks.length !== 0 ? (
                                    feedbacks.map(item => {
                                        return <FeedbacksItem key={uuid()} nameAnswer='Shenderro' avatarAnswer='avatar-example-5.00d4721a.png' timeAnswer='12 Фев. 22:15' answer='Потрясный человек! Без обманов, с реальным процентом полезных выигрышей с реальным процентом полезных выигрышей Потрясный человек! Без обманов, с реальным процентом полезных выигрышей с реальным процентом полезных выигрышей' rank='4.8' name='Sansa' time='01:05 27.12.2019' avatar='avatar-example-4.6cd623f4.png' text='Потрясный сайт! Без обманов, с реальным процентом полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги! Сделано потрясающе! Спасибо ребятам.важно обращать внимание на отзывы покупателей, репутацию продавца, а также наличие гарантий и защиты покупателя. Также стоит убедиться, что сайт не продает пиратские копии игр и что покупка осуществляется в безопасной среде.'/>   
                                    })
                                    ) : null
                                }
                                <Pagination />
                            </div>
                            : null
                        }
                        {shoppList ?
                            <div className='_view-list pcg-grid view-grid grid gap-3 grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3'>
                                {arrshoppList.length !== 0 ?   
                                    arrshoppList.map(item => {
                                        return <CardGameString key={uuid()} rank='4.8' id='1' new='new' seoName='Аккаунт Warface' icon='product-preview-1.fcb96f91.png' name='Аккаунт Warface' description='за хорошие деньги, плюс бонус' price='120 000'/> 
                                    }) 
                                    : null
                                }
                                <Pagination />
                            </div>
                            : null
                        }
                        {themes ?
                            <div className='_view-list pcg-grid view-grid grid gap-3 grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3'>
                                {/* {arrshoppList.length !== 0 ?   
                                    arrshoppList.map(item => {
                                        return <CardGameString key={uuid()} rank='4.8' id='1' new='new' seoName='Аккаунт Warface' icon='product-preview-1.fcb96f91.png' name='Аккаунт Warface' description='за хорошие деньги, плюс бонус' price='120 000'/> 
                                    }) 
                                    : null
                                } 
                                <Pagination />*/}
                            </div>
                            : null
                        }
                    </div>
                </div>
            </div>
            <LayoutBtn toTop='true'/>
        </div>
    )
}

export default Profile;
