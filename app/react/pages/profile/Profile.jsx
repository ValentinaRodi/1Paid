import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Rating from '../../components/rating/Rating';
import Title from '../../components/title/Title';
import ProfileItems from '../../components/profileItems/ProfileItems';
import uuid from 'react-uuid';
import FeedbacksItem from '../../components/feedbacksItem/FeedbacksItem';
import CardGameString from "../../components/cardGame/CardGameString";
import Pagination from '../../components/pagination/Pagination';
import DataUser from '../../components/profileItems/DataUser';

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
    const [feedback, setFeedback] = useState(true);
    const [themes, setThemes] = useState(false);
    const [shoppList, setShoppList] = useState(false);
    const navigate = useNavigate();

    let userName = false;
    let logged = true;
    let blockUser = false;
   
    if(location && location.state && location.state.userName !== null) {
        userName = location.state.userName;
        logged = false;
    };

    if(location && location.state && location.state.blockUser !== null) {
        blockUser = location.state.blockUser;
    };

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

    const goAllAchievement = () => {
        navigate('/my-achievements');
    };

    const goTovars = () => {
        navigate('/my-tovars');
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

    const goForumTheme = () => {
        navigate('/forum');
    };

    const feedbacks = [0,1,2];
    const arrshoppList = [0,1,2,3,4];
    
    return (
        <div className="layout-b flex flex-wrap content-between">
            <div className="spf w-full layout-main">
                <Title title={userName === false ? 'Мой профиль' : 'Профиль '+userName}/>
                <div className="spf-main flex flex-wrap md:flex-nowrap w-full gap-3">
                    <div className="spf-bar flex flex-col items-start w-full md:w-[290px] gap-3">
                        <div className='flex gap-3 flex-wrap sm:flex-nowrap'>
                            <div className="sps-bar w-full sm:w-auto flex flex-col items-start font-secondary-bold h-auto">
                                <div className="sps-avatar self-center flex-shrink-0 w-full sm:w-[258px] h-[258px] mb-[12px] overflow-hidden rounded-[12px] relative">
                                    <img className="sps-avatar-pic w-full h-full object-cover" src={blockUser ? 'img/block.jpg' : 'img/avatar-example-5.00d4721a.png'} alt="user" />
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
                                <span className="sps-user-status block text-xs max-w-max py-[2px] px-[8px] mb-3 text-[#8CD23C] text-center border border-[#8CD23C] rounded-full">В сети</span>
                                {userName === false ?
                                    <div className="sps-user-actions w-full pt-[12px] border-t border-[#DBE0ED]">
                                        <button onClick={changeLoggedFalse} className="sps-user-action bg-inherit text-[#ACB6CC] text-xs sm:text-sm">Выйти из аккаунта</button>
                                    </div>
                                    : null
                                }
                            </div>
                            <div className='block md:hidden bg-white rounded-xl p-4 sm:p-6 w-full sm:w-auto'>
                                <DataUser name='Никита' group='Легенда' like='452' theme='2,938' shopp='344' sale='104' date='22:12 27.12.2019'/>
                            </div>
                        </div>
                        <div className='block md:hidden bg-white rounded-xl p-4 sm:p-6 w-full'>
                            <Rating seller='продавца' reviews='1555' rank='4.8'/>
                        </div>
                        <div className='flex flex-col gap-3 w-full md:w-auto'>
                            <div className="puic flex flex-col font-secondary-bold text-black w-auto">
                                <div className="puic-head flex justify-between mb-[16px]">
                                    <div className="puic-title text-xs sm:text-sm">Достижения</div>
                                    <button onClick={goAllAchievement} className="bg-inherit text-[#ACB6CC] text-[10px] sm:text-xs rounded-none border-0 border-b border-[#ACB6CC] border-solid cursor-pointer">Показать всё</button>
                                </div>
                                <div className="puic-list flex flex-col gap-3">
                                    {arr.length !==0 ?
                                        arr.map((item, index) => {
                                            if(index <= 2) {
                                                return (<ProfileItems key={uuid()} name={item.name} text={item.text} icon='Rectangle2.png'/>);
                                            }
                                        })
                                        : null
                                    }
                                </div>
                            </div>
                            <div className="puic flex flex-col font-secondary-bold text-black py-4 sm:py-6 w-auto">
                                <div className="puic-head flex justify-between mb-[16px]">
                                    <div className="puic-title text-xs sm:text-sm">В продаже</div>
                                    <button onClick={goTovars} className="bg-inherit text-[#ACB6CC] text-[10px] sm:text-xs rounded-none border-0 border-b border-[#ACB6CC] border-solid cursor-pointer">Показать всё</button>
                                </div>
                                <div className="puic-list flex flex-col gap-3">
                                    {onSale.length !==0 ?
                                        onSale.map((item, index) => {
                                            if(index <= 1) {
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
                            <div className='hidden md:flex w-full p-4 sm:p-6 flex flex-wrap min-[1762px]:flex-nowrap gap-x-[62px] gap-y-[10px] sm:gap-y-[20px]'>
                                <DataUser name='Никита' group='Легенда' like='452' theme='2,938' shopp='344' sale='104' date='22:12 27.12.2019'/>
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
                                        return <FeedbacksItem key={uuid()} nameAnswer='Shenderro' avatarAnswer='avatar-example-5.00d4721a.png' timeAnswer='12 Фев. 22:15' answer={logged ? 'Потрясный человек! Без обманов, с реальным процентом полезных выигрышей с реальным процентом полезных выигрышей Потрясный человек! Без обманов, с реальным процентом полезных выигрышей с реальным процентом полезных выигрышей' : null} rank='4.8' name='Sansa' time='01:05 27.12.2019' avatar='avatar-example-4.6cd623f4.png' text='Потрясный сайт! Без обманов, с реальным процентом полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги! Сделано потрясающе! Спасибо ребятам.важно обращать внимание на отзывы покупателей, репутацию продавца, а также наличие гарантий и защиты покупателя. Также стоит убедиться, что сайт не продает пиратские копии игр и что покупка осуществляется в безопасной среде.'/>   
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
                                {arrshoppList.length !== 0 ?   
                                    arrshoppList.map(item => {
                                        return (
                                            <div className="nc rounded-xl p-3 sm:p-6 bg-white ">
                                                <div className="layout-btn-openchat open-fast-chat rounded-full w-8 h-8 sm:w-[40px] sm:h-[40px] flex items-center justify-center bg-gradient-primary shadow-2xl ">
                                                    <div className="btn-icon text-[#BDC6E0] w-[20px] h-[17px] [&amp;_svg]:w-full [&amp;_svg]:h-full text-white">
                                                        <img src="/img/icon-btn-icon-13.svg" alt="btn-icon"/>
                                                    </div>
                                                </div>
                                                <div className="nc-text font-secondary-bold text-sm sm:text-lg text-[#1D222C] [&amp;_a]:text-[#1E61EB] sm:overflow-hidden sm:text-ellipsis sm:whitespace-nowrap">
                                                    Бесплатная бесконечная
                                                </div>
                                                <div className="nc-date">
                                                    <div className="nc-date-label font-secondary-med text-[10px] text-[#969BA5]">Дата</div>
                                                    <div className="nc-date-value font-secondary-bold text-xs sm:text-base text-[#1D222C]">27.02.2020 15:34</div>
                                                </div>
                                                <button onClick={goForumTheme} className="nc-btn bg-inherit rounded-full w-11 h-11 border border-solid border-black/10 flex items-center justify-center hover:bg-black/5">
                                                    <div className="btn-icon">
                                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.944329 5.62321L13.4 5.62321L11.1809 8.44201C11.0235 8.64128 10.9509 8.89608 10.9793 9.14987C11.0077 9.40366 11.1346 9.63547 11.3319 9.79388C11.7393 10.1202 12.3297 10.0517 12.654 9.64048L15.7514 5.71908C16.0829 5.29876 16.0829 4.70124 15.7514 4.28092L12.654 0.359522C12.3297 -0.0517052 11.7393 -0.120209 11.3319 0.206118C11.1346 0.364527 11.0077 0.596337 10.9793 0.85013C10.9509 1.10392 11.0235 1.35872 11.1809 1.55799L12.8806 3.70565L0.944329 3.70565C0.42279 3.70565 0 4.13491 0 4.66443C0 5.19395 0.42279 5.62321 0.944329 5.62321Z" fill="black" fillOpacity="1"/>
                                                    </svg>
                                                    </div>
                                                </button>
                                            </div>
                                        )
                                    }) 
                                    : null
                                } 
                                <Pagination />
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
