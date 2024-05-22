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

function ForumThemeItemItem(props) {
    const { isForum, setForum } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const body = document.querySelector('body');

    const closeModal = () => {
        document.getElementById('modal').classList.remove('modal_view');
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
    const clickDelTovar = () => {
        props.cliclShowDelModal();
    };

    const [checked, setChecked] = useState(false);

    const changeCheck = () => {
        setChecked(!checked);
        clickLike();
    };

    const [like, setLike] = useState(14567);
    const [clicked, setClicked] = useState(false);

    const clickLike = () => {
      if (clicked) {
        setLike(14567);
      } else {
        setLike(like + 1);
      }
      setClicked(!clicked);
    };

    const goProfile = () => {
        navigate('/profile',  { state: {userName:'Alexey_Smirnov' } });
    };

    const [modalUpTop, setModalUpTop] = useState(false);

    const clickUpTop = () => {
        document.getElementById('modal').classList.remove('modal_view');
        body.style.overflow = 'auto';
        setModalOpen(false);
        setModalUpTop(true);
    };

    useEffect(() => {
        if (modalUpTop) {
            setTimeout(() => {
                setModalUpTop(false);
            }, 2000);
        }
    }, [modalUpTop, setModalUpTop]);


    return (
        <div className='px-9 rounded-lg bg-white pt-10 pb-10 flex flex-col sm:flex-row justify-between gap-6 h-full'>
            <div className="shrink-0 flex flex-wrap flex-row sm:flex-col justify-between sm:justify-start items-center gap-x-2 sm:gap-x-0">
                <div onClick={goProfile} className='cursor-pointer flex flex-row sm:flex-col gap-x-2'>
                    <div className="shrink-0 flex flex-row sm:flex-col items-center overflow-hidden whitespace-nowrap text-ellipsis">
                        <div className="null fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative rounded-full p-1.5">
                            <div className="fm-message-avatar flex-shrink-0 w-[50px] h-[50px] overflow-hidden rounded-full">
                                <img className="sps-avatar-pic w-full h-full object-cover" src="/img/admin.png" alt="user"/>
                            </div>
                            <span className="fm-message-status block bg-gradient-secondary z-20 h-1.5 w-1.5 sm:h-2 sm:w-2 right-[11px] bottom-[7px] rounded-full border-0 border-white absolute"></span>
                            <span className="fm-message-status block bg-white z-10 h-3.5 w-3.5 sm:h-4 sm:w-4 right-[6px] bottom-[3px] rounded-full border-0 border-white absolute"></span>
                        </div>
                    </div>
                    <div className='flex flex-col self-end'>
                        <div className="fm-message-username font-secondary-bold text-black text-xs">Alexey_Smirnov</div>
                        <div className="mb-3 fm-message-text text-center w-full min-[1440px]:max-w-[130px] min-[1670px]:max-w-[230px] font-primary-med text-xs text-[#B9BCD8]">Бывалый</div>
                    </div>
                </div>
                {props.achiev ?
                    <div className='flex flex-wrap justify-end sm:justify-center max-w-auto sm:max-w-[105px] gap-y-1'>
                        <img className='w-[26px] h-[26px]' src="/img/icon-achievements-commers.png" alt="user"/>
                        <img className='w-[26px] h-[26px]' src="/img/icon-achievements-star.png" alt="user"/>
                        <img className='w-[26px] h-[26px]' src="/img/icon-achievements-elephant.png" alt="user"/>
                        <img className='w-[26px] h-[26px]' src="/img/icon-achievements-major.png" alt="user"/>
                        <img className='w-[26px] h-[26px]' src="/img/start.svg" alt="user"/>
                        <img className='w-[26px] h-[26px]' src="/img/icon-achievements-friend.png" alt="user"/>
                        <img className='w-[26px] h-[26px]' src="/img/icon-achievements-social.png" alt="user"/>
                        <img className='w-[26px] h-[26px]' src="/img/icon-achievements-repute.png" alt="user"/>
                        <img className='w-[26px] h-[26px]' src="/img/icon-achievements-gang.png" alt="user"/>
                        <img className='w-[26px] h-[26px]' src="/img/icon-achievements-honest.png" alt="user"/>
                    </div>
                    :
                    <img src="/img/start.svg" alt="user"/>
                }
                {props.top ?
                    <button onClick={clickUpTop} className='mt-2 flex items-center justify-center gap-2 w-[80px] sm:w-[95px] h-[30px] sm:h-[36px] btn rounded-[100px] btn-secondary font-secondary-bold text-white text-xs sm:text-sm'>
                        <div>В Топ</div>
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.0096 8.36642L6.70942 0.9487C6.4792 0.548752 6.05287 0.302246 5.59139 0.302246C5.12991 0.302246 4.70358 0.548752 4.47335 0.9487L0.173223 8.36642C-0.0537989 8.75909 -0.0579305 9.24213 0.162342 9.63862C0.382615 10.0351 0.794925 10.2868 1.24826 10.3015L9.84852 10.3015C10.3172 10.3176 10.7577 10.0781 10.999 9.67592C11.2403 9.27379 11.2443 8.7724 11.0096 8.36642ZM2.81901 8.15142L5.61409 3.31377L8.40918 8.15142L2.81901 8.15142Z" fill="white"/>
                        </svg>
                    </button>
                    : null
                }
            </div>
            <div className='mt-[-8px] font-secondary-bold text-[#393B49] text-xs h-full w-full'>
                <div className='w-full flex items-end justify-end gap-2'>
                    <button onClick={clickOpenModalPetition} className="p-0 bg-inherit hover:bg-[rgba(241,245,249,1)]">
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.8107 9.81254L6.46063 0.301361C6.40879 0.209876 6.3336 0.133778 6.24275 0.0808369C6.15189 0.0278956 6.04862 0 5.94346 0C5.83831 0 5.73504 0.0278956 5.64418 0.0808369C5.55333 0.133778 5.47814 0.209876 5.4263 0.301361L0.0762581 9.81254C0.0254543 9.90292 -0.000830195 10.005 1.99885e-05 10.1087C0.000870172 10.2124 0.0288226 10.314 0.0811018 10.4035C0.133381 10.4931 0.20817 10.5674 0.298043 10.6191C0.387915 10.6708 0.489745 10.6981 0.593426 10.6983H8.32126C8.47892 10.6983 8.63012 10.6356 8.7416 10.5241C8.85308 10.4127 8.91571 10.2615 8.91571 10.1038C8.91571 9.94616 8.85308 9.79497 8.7416 9.68349C8.63012 9.57201 8.47892 9.50937 8.32126 9.50937H1.60994L5.94346 1.78153L10.7763 10.3713C10.8552 10.5085 10.9853 10.6087 11.138 10.65C11.2907 10.6912 11.4536 10.6701 11.5907 10.5913C11.7279 10.5124 11.8281 10.3823 11.8694 10.2296C11.9106 10.0769 11.8895 9.91404 11.8107 9.77688V9.81254ZM5.94346 7.72602C5.82589 7.72602 5.71096 7.76088 5.61321 7.8262C5.51545 7.89152 5.43926 7.98436 5.39427 8.09298C5.34928 8.2016 5.3375 8.32112 5.36044 8.43643C5.38337 8.55174 5.43999 8.65767 5.52313 8.7408C5.60626 8.82394 5.71219 8.88055 5.8275 8.90349C5.94281 8.92643 6.06233 8.91467 6.17095 8.86967C6.27958 8.82468 6.37241 8.74847 6.43773 8.65071C6.50305 8.55295 6.53791 8.43804 6.53791 8.32047C6.53791 8.16281 6.47528 8.01162 6.3638 7.90014C6.25232 7.78866 6.10112 7.72602 5.94346 7.72602ZM6.53791 4.75378C6.53791 4.59612 6.47528 4.44493 6.3638 4.33345C6.25232 4.22197 6.10112 4.15933 5.94346 4.15933C5.78581 4.15933 5.63461 4.22197 5.52313 4.33345C5.41164 4.44493 5.34902 4.59612 5.34902 4.75378V6.53712C5.34902 6.69478 5.41164 6.84597 5.52313 6.95745C5.63461 7.06893 5.78581 7.13157 5.94346 7.13157C6.10112 7.13157 6.25232 7.06893 6.3638 6.95745C6.47528 6.84597 6.53791 6.69478 6.53791 6.53712V4.75378Z" fill="#C5CFE4"/>
                        </svg>
                    </button>
                    <button onClick={clickEditTheme} className="bg-inherit self-start">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.151651 12.1121L0 7.67091L7.0301 0.629985C7.87509 -0.209995 9.23978 -0.209995 10.0848 0.629985L11.6446 2.15732C12.0514 2.56368 12.28 3.11509 12.28 3.69008C12.28 4.26507 12.0514 4.81648 11.6446 5.22284L4.59285 12.2638L0.151651 12.1121ZM8.55916 2.4179C8.49821 2.4076 8.43597 2.4076 8.37502 2.4179H8.35335C8.28388 2.44345 8.22097 2.48416 8.1692 2.53706L2.16817 8.5381L2.27649 9.96795L3.74967 10.0221L9.7507 4.02107C9.85324 3.91937 9.91091 3.78094 9.91091 3.63653C9.91091 3.49211 9.85324 3.35368 9.7507 3.25198L8.98162 2.4829C8.94966 2.45497 8.91298 2.43297 8.8733 2.4179H8.8083H8.66748H8.55916Z" fill="#C5CFE4"/>
                        </svg>
                    </button>
                    <button onClick={clickDelTovar} className="p-0 bg-inherit hover:bg-[rgba(241,245,249,1)]">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.876716 11.7639C0.561928 11.4472 0.561928 10.9358 0.876716 10.6191L11.212 0.283816C11.4105 0.0521226 11.722 -0.0487998 12.0186 0.0225423C12.3152 0.0938843 12.5467 0.32545 12.6181 0.622033C12.6894 0.918616 12.5885 1.23016 12.3568 1.42858L2.02148 11.7639C1.70481 12.0787 1.19338 12.0787 0.876716 11.7639Z" fill="#C5CFE4"/>
                        <path d="M0.876716 0.283698C1.19338 -0.0310896 1.70481 -0.0310896 2.02148 0.283698L12.3568 10.619C12.5885 10.8174 12.6894 11.129 12.6181 11.4256C12.5467 11.7222 12.3152 11.9537 12.0186 12.0251C11.722 12.0964 11.4105 11.9955 11.212 11.7638L0.876716 1.42846C0.561928 1.11179 0.561928 0.600365 0.876716 0.283698Z" fill="#C5CFE4"/>
                        </svg>
                    </button>
                </div>
                {themeEdit ?
                    <div className='flex w-full justify-between items-end flex-col sm:flex-row gap-y-2 mt-2'>
                        <div className="w-full pc-subinfo-value font-secondary-med text-[10px] flex"> 
                            <textarea ref={inputThemeRef} onChange={handleThemeChange} value={newTheme} type="text" name="theme" id="theme" placeholder='' className="h-[390px] sm:h-[216px] w-full font-secondary-bold text-[#393B49] text-[12px] leading-6 px-1 outline-none bg-[#EAEBF8] rounded-[4px] mr-0 sm:mr-2"/>
                        </div>
                        <div className='w-auto sm:w-[14px] shrink-0 flex gap-4 justify-between h-full flex-row sm:flex-col'>
                            <button onClick={clickEditTheme} className='bg-inherit self-start w-[12px] h-[12px]'>
                                <img src="/img/icon-del-card.svg" alt="icon close"/>
                            </button>
                            <button onClick={clickNewEditTheme} className='bg-inherit self-start w-[15px] h-[12px]'>
                                <img className="pc-preview-pic w-full" src='/img/icon-check-green.svg' alt="icon edit sum"/>
                            </button>
                        </div>
                    </div>
                    : 
                    <div className='w-full font-secondary-bold text-[#393B49] text-[12px] leading-6' dangerouslySetInnerHTML={{ __html: theme }} ></div>     
                }
                <div className='mt-10 sm:mt-16 flex items-start sm:items-center justify-between w-full flex-col-reverse gap-y-4 sm:flex-row'>
                    <button onClick={toAnswer} className='flex items-center gap-2 bg-inherit font-secondary-med text-[#C5CFE4] underline text-xs'>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.48173 9.14857L7.36719 5.79402L12.6772 0.475843C13.3154 -0.158614 14.3462 -0.158614 14.9845 0.475843L16.1626 1.62948C16.4699 1.93641 16.6426 2.3529 16.6426 2.78721C16.6426 3.22151 16.4699 3.638 16.1626 3.94493L10.8363 9.26312L7.48173 9.14857ZM13.8312 1.82587C13.7851 1.81809 13.7381 1.81809 13.6921 1.82587H13.6757C13.6233 1.84517 13.5757 1.87591 13.5366 1.91587L9.00391 6.4486L9.08572 7.5286L10.1985 7.56951L14.7312 3.03678C14.8086 2.95997 14.8522 2.85541 14.8522 2.74633C14.8522 2.63725 14.8086 2.53269 14.7312 2.45587L14.1503 1.87496C14.1261 1.85387 14.0984 1.83725 14.0685 1.82587H14.0194H13.913H13.8312Z" fill="#CDD6E6"/>
                        <path d="M17.1818 5.72048C16.7299 5.72048 16.3636 6.08679 16.3636 6.53866V13.0841C16.3636 13.536 15.9973 13.9023 15.5455 13.9023H2.45455C2.00268 13.9023 1.63636 13.536 1.63636 13.0841V4.9023C1.63636 4.45043 2.00268 4.08412 2.45455 4.08412H5.72727C6.17914 4.08412 6.54545 3.71781 6.54545 3.26594C6.54545 2.81407 6.17914 2.44775 5.72727 2.44775H2.45455C1.09894 2.44775 0 3.54669 0 4.9023V13.0841C0 14.4397 1.09894 15.5387 2.45455 15.5387H15.5455C16.9011 15.5387 18 14.4397 18 13.0841V6.53866C18 6.08679 17.6337 5.72048 17.1818 5.72048Z" fill="#CDD6E6"/>
                        </svg>
                        <div>Ответить</div>
                    </button>
                    {props.like ?
                        <div className='flex items-center justify-end gap-2'>
                            <div className="pc-ibar flex justify-end items-center flex-wrap gap-3">
                                <label className="pc-btn-like">
                                    <input name="like" type="checkbox" checked={checked} onChange={changeCheck}/>
                                    <div className="btn-icon btn-icon-none-shadow">
                                        <svg width="18" height="16" className="_default" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.85602 9.00832L9.00827 13.1606L13.1605 9.00832L15.519 6.64984C16.6656 5.50323 16.6656 3.6442 15.519 2.49759C14.3724 1.35098 12.5134 1.35098 11.3667 2.49759L9.00827 4.87268L6.64979 2.5142C5.50318 1.36759 3.64415 1.36759 2.49754 2.5142C1.35093 3.66081 1.35093 5.51984 2.49754 6.66645L4.85602 9.00832ZM10.1709 1.34326C11.9619 -0.447752 14.8657 -0.447752 16.6567 1.34326C18.4478 3.13426 18.4478 6.03806 16.6567 7.82907L15.4775 9.0083L9.0083 15.4941L2.52249 9.0083L1.34326 7.82907C-0.447752 6.03806 -0.447752 3.13426 1.34326 1.34326C3.13426 -0.447752 6.03806 -0.447752 7.82907 1.34326L9.0083 2.52249L10.1709 1.34326Z" fill="#D4DBE9"/>
                                        </svg>
                                        <svg className="_checked" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.5717 1.5605C14.7284 -0.520167 18.2251 -0.520167 20.3817 1.5605C22.5384 3.64117 22.5384 7.0146 20.3817 9.09527L18.9617 10.4652L11.1717 18L3.36172 10.4652L1.94172 9.09527C-0.214949 7.0146 -0.214949 3.64117 1.94172 1.5605C4.09839 -0.520167 7.59505 -0.520167 9.75172 1.5605L11.1717 2.93046L12.5717 1.5605Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </label>
                            </div>
                            <p className='font-secondary-bold text-sm text-[#D4DBE9]'>{like.toLocaleString()}</p>
                        </div>
                        :
                        <div className=' text-end text-[#CDD6E6] text-[11px] '>Последнее редактирование: 15 Июн 2021</div>
                    }
                </div>
                {answerVisibleNew ?
                    <div className='flex gap-4 items-center w-full sm:w-auto'>
                        <div className='w-full h-full bg-white py-3 rounded-xl flex items-start justify-between relative'>
                            <div className='w-full h-full flex flex-col gap-1'>
                                <div className='gap-2 w-full h-full flex items-end justify-between'>
                                    <textarea type="text" value={textAnswerNew} onChange={handleChangeNew} className='resize-none p-2 min-h-[24px] font-secondary-med leading-[12px] border border-solid border-[#E7EAF3] rounded-lg text-[#A2AEC8] text-[10px] w-full h-auto'>{textAnswerNew}</textarea>
                                    <div className='flex flex-row flex-wrap h-[42px] justify-between'>
                                        <button onClick={showAnswerNew} className='bg-inherit w-3 h-3'>
                                            <img className="fbc-avatar-pic w-full h-full object-cover" src='/img/icon-close-2.svg' alt="close"/>
                                        </button>  
                                        <button onClick={handleEditNew} className='bg-inherit w-[18px] h-[15px]'>  
                                            <img className="fbc-avatar-pic w-full h-full object-cover" src='/img/icon-send.svg' alt="send"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
                }
            </div>
            {modalUpTop ?
                <div className='absolute top-[25px] right-[0] bg-[linear-gradient(90deg,#8cd23c_0%,#417a00_100%)] rounded-xl p-3'>
                    <p className='font-secondary-bold text-xs sm:text-sm text-white'>Тема успешно поднята</p>
                    <p className='font-secondary-bold text-xs sm:text-sm text-white'>Следующая тема может быть поднята через 4 часа</p>
                </div>
                : null
            }
        </div>                 
    );
}

export default ForumThemeItemItem;
