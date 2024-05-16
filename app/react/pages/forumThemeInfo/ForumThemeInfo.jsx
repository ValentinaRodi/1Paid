import React, { useState, useEffect, useRef } from 'react';
import useAuth from '../../hooks/useAuth';
import LayoutBtn from '../../components/LayoutBtn';
import Title from '../../components/title/Title';
import { Link } from 'react-router-dom';
import ModalThemeAdd from '../../components/forumItems/ModalThemeAdd';
import { createRoot } from "react-dom/client";
import { useNavigate, useLocation } from 'react-router-dom';
import ForumTeam from '../../components/forumItems/ForumTeam';
import ForumUsers from '../../components/forumItems/ForumUsers';
import ForumStatistics from '../../components/forumItems/ForumStatistics';
import ModalPetition from '../../components/modalPetition/ModalPetition';
import ForumThemeItemItem from '../../components/forumItems/ForumThemeItemItem';
import TimerCircle from '../../components/timerСircle/TimerCircle';

function ForumThemeInfo(props) {
    const { isForum, setForum } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const body = document.querySelector('body');

    const closeModal = () => {
        body.style.overflow = 'auto';
        setModalOpen(false);
        setModalEl('');
    };

    let titleGame = 'Warface';

    if(location && location.state && location.state.titleGame !== null) {
        titleGame = location.state.titleGame;
    };

    let titleTheme = 'Warface Аккаунт приват';

    if(location && location.state && location.state.titleTheme !== null) {
        titleTheme = location.state.titleTheme;
    };

    const clickOpenModalPetition = () => {
        body.style.overflow = 'hidden';
        setModalEl(<ModalPetition
            closeModal={closeModal} 
        />);
        setModalOpen(true);
    };

    useEffect(() => {
        const modal = document.getElementById('modal');

        if (modalOpen) {
            modal.classList.add('modal');
            modal.textContent = '';

            const containerModal = document.createElement("div");
            const root = createRoot(containerModal);
            root.render(modalEl);
            modal.appendChild(containerModal);   
        };

        if (!modalOpen) {
            modal.classList.remove('modal');
            modal.textContent = '';
        };
        
    }, [modalEl]);

    const clickOpenModalThemeAdd = () => {
        body.style.overflow = 'hidden';
        setModalEl(<ModalThemeAdd
            closeModal={closeModal} 
        />);
        setModalOpen(true);
    };
    
    useEffect(() => {
        setForum(true);
    }, []);

    const arrGame = ['Warface','Counter-Strike: Global Offensive','Grand Theft Auto V', 'World of Tanks','Dota 2','Steam','Fortnite','Еще игры']
    const arrSite = ['Предложения по сайту', 'Баги/Доработка'];

    const goThemes = () => {
        navigate('/forum/themes');
    };

    //Написать ответ
    const [answerVisibleNew, setAnswerVisibleNew] = useState(false);
    const [textAnswerNew, setTextAnswerNew] = useState('');
    const [editableNew, setEditableNew] = useState(false);
    const [answerVisible, setAnswerVisible] = useState(false);

    const toAnswer = () => {
        setAnswerVisibleNew(!answerVisibleNew);
        setAnswerVisible(false);
    };

    const handleChangeNew = (e) => {
        setTextAnswerNew(e.target.value);
    };

    const showAnswerNew = () => {
        setAnswerVisibleNew(!answerVisibleNew);
    };

    const handleEditNew = () => {
        setEditableNew(!editableNew);
    };

    //Редактировать тему
    const [themeEdit, setThemeEdit] = useState(false);
    const inputThemeRef = useRef(null);
    const [newTheme, setNewTheme] = useState('');
    const [theme, setTheme] = useState(`Друзья!<br/>Если вы хотите влиться в команду для поднятия высокой лиги или ищете бойца в уже сформировавшийся коллектив, то эта тема специально для вас!<br/><br/>Здесь вы можете оставить соответствующее объявление.<br/> Формат подачи:<br/>1. Ваш игровой ник, сервер, желательно юзербар<br/>2. Удобное вам время для игры и ежедневной активности<br/>3. Прочая информация по желанию`);

    // function nl2br(str, is_xhtml) {
    //     var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    //     return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
    //   }
      
    const clickEditTheme = () => {
        setThemeEdit(!themeEdit);
    };

    const clickNewEditTheme = () => {
        const themeInput = newTheme.replace(/\n/g, '<br/>');
        setTheme(themeInput)
        setThemeEdit(false);
    };

    const handleThemeChange = (e) => {
        setNewTheme(e.target.value);
    };

    useEffect(() => {
        (themeEdit) ? inputThemeRef.current.focus() : null;
    }, [themeEdit]);

    useEffect(() => {
        const themeInput = theme.replace(/<br\s*\/?>/gi, "\n");
        setNewTheme(themeInput);
    }, [themeEdit]);

    //Удаление темы
    const [showDelModal, setShowDelModal] = useState(false);

    const cliclShowDelModal = () => {
        setShowDelModal(true);
    };

    const clickCancelDelTovar = () => {
        setShowDelModal(false);
    };

    const onCloseModalDelTovar = () => {
        setShowDelModal(false);
    };

    return (
        <div className="flex flex-wrap content-between col-[span_2_/_span_3] row-[span_-1_/_span_-2] pb-4 min-w-0 h-full">
            <div className='w-full layout-main '>
                <div className='w-full flex gap-2 md:gap-0 justify-center md:justify-between flex-col md:flex-row items-start md:items-center bg-white h-[120px] md:h-[85px] px-6 sm:px-12 min-[1400px]:px-[calc(50%-650px)]'>
                    <div className='flex items-center gap-3'>
                        <Link to='/forum' className="font-secondary-bold text-[#B8BACF] text-sm sm:text-base">Форум</Link>
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.20711 8.20906C8.59763 7.81854 8.59763 7.18537 8.20711 6.79485L1.84315 0.430886C1.45262 0.0403614 0.819457 0.0403614 0.428933 0.430886C0.0384082 0.82141 0.0384082 1.45457 0.428933 1.8451L6.08579 7.50195L0.428933 13.1588C0.0384082 13.5493 0.0384082 14.1825 0.428933 14.573C0.819457 14.9635 1.45262 14.9635 1.84315 14.573L8.20711 8.20906ZM6.5 8.50195H7.5V6.50195H6.5V8.50195Z" fill="#D9DBED"/>
                        </svg>
                        <Link to='/forum/Warface' className="font-secondary-bold text-[#B8BACF] text-sm sm:text-base">{titleGame}</Link>
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.20711 8.20906C8.59763 7.81854 8.59763 7.18537 8.20711 6.79485L1.84315 0.430886C1.45262 0.0403614 0.819457 0.0403614 0.428933 0.430886C0.0384082 0.82141 0.0384082 1.45457 0.428933 1.8451L6.08579 7.50195L0.428933 13.1588C0.0384082 13.5493 0.0384082 14.1825 0.428933 14.573C0.819457 14.9635 1.45262 14.9635 1.84315 14.573L8.20711 8.20906ZM6.5 8.50195H7.5V6.50195H6.5V8.50195Z" fill="#D9DBED"/>
                        </svg>
                        <p className='font-secondary-bold text-[#2E2E2E] text-sm sm:text-base'>{titleTheme}</p>
                    </div>
                    <div className="sh-bar flex items-center gap-2 w-full md:w-auto 2md:flex-row-reverse">
                        <div className="rounded-full h-[50px] px-9 md:max-w-[270px] w-full flex items-center bg-[#E8EAF7] 2md:max-w-none 2md:flex-grow 2md:h-10 2md:px-3">
                            <button className="sh-search-icon bg-inherit flex-shrink-0 w-4 h-full [&amp;_svg]:w-full flex justify-center items-center text-[#B8BACF] duration-100 hover:text-black">
                                <img src="/img/icon-sh-search-icon.svg" alt="sh-search-icon"/>
                            </button>
                            <input maxLength="80" name="search" className="sh-search-input flex-grow ml-2.5 w-full h-full bg-transparent font-primary-med text-base text-black 2md:text-sm" placeholder="Поиск"/>
                        </div>
                    </div>
                </div>
                <div className='flex-col-reverse sm:flex-row px-6 sm:px-12 min-[1400px]:px-[calc(50%-650px)] flex justify-between items-center pt-9'>
                    <div className={(showDelModal) ? 'absolute top-0 right-[310px] z-10 w-56 rounded-md bg-white pr-3 flex items-center justify-between' : 'hidden'}>
                        <div >
                            <TimerCircle count='5' color='black' onCloseModalDelTovar={onCloseModalDelTovar} imgCircle='icon-circle-progress.svg'/>
                        </div>
                        <div>
                            <div className='font-secondary-bold font-bold text-sm mb-2'>Удаление товара</div>
                            <button onClick={clickCancelDelTovar} className='bg-inherit font-secondary-med text-xs text-[#C5CFE4] '>Отменить удаление</button>
                            <div className='w-full h-[0.5px] bg-[#C5CFE4] mt-[-3px]'></div>
                        </div>
                    </div>
                    <Title title={titleTheme}/>
                    <div className='flex items-center justify-end self-end sm:self-center'>
                        <button onClick={goThemes} className='self-end sm:self-center shrink-0 btn btn-primary mt-0 sm:mt-[-30px] gap-2 sm:gap-3 rounded-[100px] flex items-center justify-center font-secondary-bold text-white text-xs sm:text-sm w-[120px] sm:w-[170px] h-[40px] sm:h-[50px]'>
                            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.8784 7.45713H8.7493L13.4097 1.86466C13.7081 1.53144 13.7793 1.05249 13.5907 0.64689C13.4021 0.241294 12.9899 -0.0129325 12.5429 0.000508031H6.90378C6.51816 0.00770825 6.16448 0.216377 5.9717 0.550434L0.155543 10.4305C-0.0459598 10.7715 -0.052069 11.1936 0.139481 11.5403C0.331032 11.887 0.691669 12.1066 1.08762 12.1175H3.51102L0.780035 17.71C0.533875 18.19 0.665453 18.7774 1.09289 19.1065C1.52033 19.4357 2.1218 19.4128 2.52302 19.0522L13.6054 9.41449C13.9635 9.11285 14.0935 8.61889 13.9305 8.18003C13.7675 7.74117 13.3465 7.4519 12.8784 7.45713ZM3.55675 15.8459L5.46751 11.9218C5.83102 11.1761 4.47018 10.2254 4.47018 10.2254H2.41029L7.33166 1.83673H10.9481L6.28773 7.4292C5.99063 7.76117 5.91886 8.2378 6.10504 8.64254C6.29122 9.04728 6.69984 9.30294 7.14525 9.29335H11.321L3.55675 15.8459Z" fill="white"/>
                            </svg>
                            Мои темы
                        </button>
                        <button onClick={clickOpenModalThemeAdd} className='ml-3 lg:ml-6 self-end sm:self-center shrink-0 btn btn-secondary mt-0 sm:mt-[-30px] rounded-[100px] flex gap-2 sm:gap-3 items-center justify-center font-secondary-bold text-white text-xs sm:text-sm w-[140px] sm:w-[220px] h-[40px] sm:h-[50px]'>
                            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.8784 7.45713H8.7493L13.4097 1.86466C13.7081 1.53144 13.7793 1.05249 13.5907 0.64689C13.4021 0.241294 12.9899 -0.0129325 12.5429 0.000508031H6.90378C6.51816 0.00770825 6.16448 0.216377 5.9717 0.550434L0.155543 10.4305C-0.0459598 10.7715 -0.052069 11.1936 0.139481 11.5403C0.331032 11.887 0.691669 12.1066 1.08762 12.1175H3.51102L0.780035 17.71C0.533875 18.19 0.665453 18.7774 1.09289 19.1065C1.52033 19.4357 2.1218 19.4128 2.52302 19.0522L13.6054 9.41449C13.9635 9.11285 14.0935 8.61889 13.9305 8.18003C13.7675 7.74117 13.3465 7.4519 12.8784 7.45713ZM3.55675 15.8459L5.46751 11.9218C5.83102 11.1761 4.47018 10.2254 4.47018 10.2254H2.41029L7.33166 1.83673H10.9481L6.28773 7.4292C5.99063 7.76117 5.91886 8.2378 6.10504 8.64254C6.29122 9.04728 6.69984 9.30294 7.14525 9.29335H11.321L3.55675 15.8459Z" fill="white"/>
                            </svg>
                            Написать тему
                        </button>
                    </div>
                </div>
                <div className='flex-col min-[950px]:flex-row px-6 sm:px-12 min-[1400px]:px-[calc(50%-650px)] flex justify-between items-start gap-6'>
                    <div className='w-full min-[950px]:w-[71%] flex flex-col gap-6'>
                        <div className='pb-0 sm:pb-6 min-h-[330px]'>
                            <div className='px-9 bg-white rounded-t-lg flex items-center justify-between min-h-[80px] border-b border-solid border-[#E0E3F2]'>
                                <Link to='/forum' className='text-[#2E2E2E] gap-3 flex items-center font-secondary-bold text-xs sm:text-sm '>
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.6967C6.01041 0.403807 5.53553 0.403807 5.24264 0.6967L0.46967 5.46967ZM16 5.25L1 5.25L1 6.75L16 6.75L16 5.25Z" fill="black"/>
                                    </svg>
                                    Назад
                                </Link>
                                <div className='py-4 min-[410px]:py-0 flex flex-col-reverse min-[410px]:flex-row gap-y-2 items-end min-[410px]:items-center justify-between gap-x-6 sm:gap-x-12'>
                                    <div className='text-xs text-[#CFD1E4] font-secondary-med text-end min-[410px]:text-center'>
                                        <div>Дата и автор</div>
                                        <div>1 Ноя 2019 <span className='text-[#FF3F3F] underline'>admin</span></div>
                                    </div>
                                    <button className='btn flex items-center justify-center gap-1 sm:gap-2 h-[34px] sm:h-[44px] w-[80px] sm:w-[110px] rounded-[100px] font-secondary-bold text-white text-xs sm:text-sm bg-[#FF5252] shadow-[0_8px_13px_0px_#FF525280]'>
                                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1 7.56C0.447715 7.56 0 8.00771 0 8.56V16.56C0 17.1123 0.447715 17.56 1 17.56C1.55228 17.56 2 17.1123 2 16.56V8.56C2 8.00771 1.55228 7.56 1 7.56Z" fill="white"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16 6H10.72L9.4 2.05C8.99191 0.827603 7.84871 0.00241094 6.56 0H6C4.34315 0 3 1.34315 3 3V15C3 16.6569 4.34315 18 6 18H13.33C13.9791 18 14.6107 17.7895 15.13 17.4L17.8 15.4C18.5554 14.8334 19 13.9443 19 13V9C19 7.34315 17.6569 6 16 6ZM17 13C17 13.3148 16.8518 13.6111 16.6 13.8L13.93 15.8C13.7569 15.9298 13.5464 16 13.33 16H6C5.44772 16 5 15.5523 5 15V3C5 2.44772 5.44772 2 6 2H6.56C6.98992 1.99889 7.37243 2.27269 7.51 2.68L9.01 7.18C9.1699 7.66879 9.62572 7.99956 10.14 8H16C16.5523 8 17 8.44771 17 9V13Z" fill="white"/>
                                        </svg>
                                        14 567
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-5'>
                                <ForumThemeItemItem cliclShowDelModal={cliclShowDelModal} top='true'/>
                                <ForumThemeItemItem cliclShowDelModal={cliclShowDelModal} achiev='true' like='true'/>
                            </div>
                            <div className='bg-white rounded-lg px-9 py-6 sm:py-12 mt-6 sm:mt-5'>
                                <div className='flex items-end justify-between bg-[#EFF0F7] rounded-[4px] p-4 sm:p-7'>
                                    <textarea placeholder='Напишите свой коментарий...' className='bg-inherit resize-none w-[96%] font-secondary-med text-xs placeholder:text-[#B1B6D0] text-xs sm:text-sm placeholder:text-[10px] sm:placeholder:text-sm'/>
                                    <button className='bg-inherit '>
                                        <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5.86498H14.19L11.84 8.80498C11.6734 9.01283 11.5965 9.27857 11.6266 9.54328C11.6566 9.80798 11.791 10.0498 12 10.215C12.4314 10.5553 13.0565 10.4839 13.4 10.055L16.68 5.96498C17.031 5.52658 17.031 4.90338 16.68 4.46498L13.4 0.37498C13.0565 -0.0539283 12.4314 -0.125377 12 0.21498C11.791 0.3802 11.6566 0.621977 11.6266 0.886682C11.5965 1.15139 11.6734 1.41714 11.84 1.62498L13.64 3.86498H1C0.447715 3.86498 0 4.3127 0 4.86498C0 5.41726 0.447715 5.86498 1 5.86498Z" fill="#C5CFE4"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>                 
                    </div>
                    <div className='w-full min-[950px]:w-[27%] flex flex-col gap-6'>
                        <ForumTeam />
                        <ForumUsers />
                        <ForumStatistics />
                    </div>
                </div>
            </div>
            <div className='px-9 w-full'>
                <LayoutBtn />
            </div>
        </div>
    );
}

export default ForumThemeInfo;
