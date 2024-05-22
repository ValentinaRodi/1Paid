import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import LayoutBtn from '../../components/LayoutBtn';
import Title from '../../components/title/Title';
import { Link } from 'react-router-dom';
import ForumInfoItem from '../../components/forumItems/ForumInfoItem';
import ForumGameItem from '../../components/forumItems/ForumGameItem';
import ModalThemeAdd from '../../components/forumItems/ModalThemeAdd';
import uuid from 'react-uuid';
import { createRoot } from "react-dom/client";
import { useNavigate } from 'react-router-dom';
import ForumTeam from '../../components/forumItems/ForumTeam';
import ForumUsers from '../../components/forumItems/ForumUsers';
import ForumStatistics from '../../components/forumItems/ForumStatistics';

function Forum(props) {
    const { isForum, setForum } = useAuth();
    const navigate = useNavigate();
    
    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const body = document.querySelector('body');

    const closeModal = () => {
        body.style.overflow = 'auto';
        setModalOpen(false);
        setModalEl('');
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

    useEffect(() => {
        setForum(true);
    }, []);

    const arrGame = ['Warface','Counter-Strike: Global Offensive','Grand Theft Auto V', 'World of Tanks','Dota 2','Steam','Fortnite']
    const arrSite = ['Предложения по сайту', 'Баги/Доработка'];

    const goThemes = () => {
        window.scrollTo({ 
            top: 0,  
        }); 
        navigate('/forum/themes');
    };

    const clickOpenModalThemeAdd = () => {
        body.style.overflow = 'hidden';
        setModalEl(<ModalThemeAdd
            closeModal={closeModal} 
        />);
        setModalOpen(true);
    };

    return (
        <div className="flex flex-wrap content-between layout-b mb-4 min-w-0 ">
            <div className="w-full layout-main relative">
                <div className="sfb ">
                    <div className='w-full layout-main'>
                        <div className='w-full mt-4 flex gap-5 md:gap-0 justify-center md:justify-between flex-col md:flex-row items-start md:items-center bg-none min-[1200px]:bg-white h-[120px] md:h-[85px] px-0 min-[1200px]:px-4'>
                            <Link to='/forum' className="font-secondary-bold text-[#2E2E2E] text-sm sm:text-base">Форум</Link>
                            <div className="sh-bar flex items-center gap-2 w-full md:w-auto 2md:flex-row-reverse">
                                <div className="rounded-full h-[50px] px-9 md:max-w-[270px] w-full flex items-center bg-[#E8EAF7] 2md:max-w-none 2md:flex-grow 2md:h-10 2md:px-3">
                                    <button className="sh-search-icon bg-inherit flex-shrink-0 w-4 h-full [&amp;_svg]:w-full flex justify-center items-center text-[#B8BACF] duration-100 hover:text-black">
                                        <img src="/img/icon-sh-search-icon.svg" alt="sh-search-icon"/>
                                    </button>
                                    <input maxLength="80" name="search" className="sh-search-input flex-grow ml-2.5 w-full h-full bg-transparent font-primary-med text-base text-black 2md:text-sm" placeholder="Поиск"/>
                                </div>
                            </div>
                        </div>
                        <div className='flex-col-reverse sm:flex-row flex justify-between items-center pt-0 min-[1200px]:pt-9'>
                            <Title title='Форум 1Paid'/>
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
                        <div className='flex-col min-[950px]:flex-row flex justify-between items-start gap-6'>
                            <div className='w-full min-[950px]:w-[71%] flex flex-col gap-6'>
                                <div className='rounded-lg bg-white pb-6'>
                                    <div className='text-[#2E2E2E] flex items-center px-9 font-secondary-bold text-xs sm:text-sm h-[80px] border-b border-solid border-[#E0E3F2]'>Информация</div>
                                    <ForumInfoItem title='Правила форума'/>
                                    <ForumInfoItem title='Правила создания темы' rulesTheme='true'/>
                                </div>
                                <div className='rounded-lg bg-white pb-6'>
                                    <div className='text-[#2E2E2E] flex items-center px-9 font-secondary-bold text-xs sm:text-sm h-[80px] border-b border-solid border-[#E0E3F2]'>Все игры</div>
                                    {arrGame.length !== 0 ?    
                                        arrGame.map(game => {
                                            return <ForumGameItem key={uuid()} title={game}/>                                
                                        })
                                        : null
                                    }
                                    <ForumGameItem title='Еще игры' gameAll='true'/> 
                                </div> 
                                <div className='rounded-lg bg-white pb-6'>
                                    <div className='text-[#2E2E2E] flex items-center px-9 font-secondary-bold text-xs sm:text-sm h-[80px] border-b border-solid border-[#E0E3F2]'>Сайт</div>
                                    {arrSite.length !== 0 ?    
                                        arrSite.map(item => {
                                            return <ForumGameItem key={uuid()} title={item}/>                                
                                        })
                                        : null
                                    }
                                </div>                    
                            </div>
                            <div className='w-full min-[950px]:w-[27%] flex flex-col gap-6'>
                                <ForumTeam />
                                <ForumUsers />
                                <ForumStatistics />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
                <LayoutBtn />
           
        </div>
    );
}

export default Forum;
