import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import LayoutBtn from '../../components/LayoutBtn';
import Title from '../../components/title/Title';
import { Link } from 'react-router-dom';
import ForumThemeItem from '../../components/forumItems/ForumThemeItem';
import ModalThemeAdd from '../../components/forumItems/ModalThemeAdd';
import uuid from 'react-uuid';
import { createRoot } from "react-dom/client";
import { useNavigate } from 'react-router-dom';
import ForumTeam from '../../components/forumItems/ForumTeam';
import ForumUsers from '../../components/forumItems/ForumUsers';
import ForumStatistics from '../../components/forumItems/ForumStatistics';

function ForumRules() {
    const { isForum, setForum } = useAuth();
    const navigate = useNavigate();

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

    return (
        <div className="flex flex-wrap content-between layout-b mb-24 min-w-0 ">
            <div className="w-full layout-main relative">
                <div className="sfb">
                    <div className='w-full layout-main'>
                    <div className='w-full mt-4 flex gap-5 md:gap-0 justify-center md:justify-between flex-col md:flex-row items-start md:items-center bg-none min-[1200px]:bg-white h-[120px] md:h-[85px] px-0 min-[1200px]:px-4'>
                            <div className='flex items-center gap-3'>
                                <Link to='/forum' className="font-secondary-bold text-[#B8BACF] text-sm sm:text-base">Форум</Link>
                                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.20711 8.20906C8.59763 7.81854 8.59763 7.18537 8.20711 6.79485L1.84315 0.430886C1.45262 0.0403614 0.819457 0.0403614 0.428933 0.430886C0.0384082 0.82141 0.0384082 1.45457 0.428933 1.8451L6.08579 7.50195L0.428933 13.1588C0.0384082 13.5493 0.0384082 14.1825 0.428933 14.573C0.819457 14.9635 1.45262 14.9635 1.84315 14.573L8.20711 8.20906ZM6.5 8.50195H7.5V6.50195H6.5V8.50195Z" fill="#D9DBED"/>
                                </svg>
                                <p className='font-secondary-bold text-[#2E2E2E] text-sm sm:text-base'>Правила форума</p>
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
                        <div className='flex-col-reverse sm:flex-row flex justify-between items-center pt-0 min-[1200px]:pt-9'>
                            <Title title='Правила форума'/>
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
                                <div className='rounded-lg bg-white pb-6 min-h-[706px]'>
                                    <div className='px-9 flex items-center justify-between min-h-[80px] border-b border-solid border-[#E0E3F2]'>
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
                                            <button onClick={clickLike} className='btn flex items-center justify-center gap-1 sm:gap-2 h-[34px] sm:h-[44px] w-[80px] sm:w-[110px] rounded-[100px] font-secondary-bold text-white text-xs sm:text-sm bg-[#FF5252] shadow-[0_8px_13px_0px_#FF525280]'>
                                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1 7.56C0.447715 7.56 0 8.00771 0 8.56V16.56C0 17.1123 0.447715 17.56 1 17.56C1.55228 17.56 2 17.1123 2 16.56V8.56C2 8.00771 1.55228 7.56 1 7.56Z" fill="white"/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M16 6H10.72L9.4 2.05C8.99191 0.827603 7.84871 0.00241094 6.56 0H6C4.34315 0 3 1.34315 3 3V15C3 16.6569 4.34315 18 6 18H13.33C13.9791 18 14.6107 17.7895 15.13 17.4L17.8 15.4C18.5554 14.8334 19 13.9443 19 13V9C19 7.34315 17.6569 6 16 6ZM17 13C17 13.3148 16.8518 13.6111 16.6 13.8L13.93 15.8C13.7569 15.9298 13.5464 16 13.33 16H6C5.44772 16 5 15.5523 5 15V3C5 2.44772 5.44772 2 6 2H6.56C6.98992 1.99889 7.37243 2.27269 7.51 2.68L9.01 7.18C9.1699 7.66879 9.62572 7.99956 10.14 8H16C16.5523 8 17 8.44771 17 9V13Z" fill="white"/>
                                                </svg>
                                                {like.toLocaleString()}
                                            </button>
                                        </div>
                                    </div>
                                    <div className='px-9 pt-9 pb-3 flex justify-between gap-3 sm:gap-6 flex-col sm:flex-row'>
                                        <div className="shrink-0 self-start flex flex-col items-center overflow-hidden whitespace-nowrap text-ellipsis">
                                            <div className="null fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative rounded-full p-1.5">
                                                <div className="fm-message-avatar flex-shrink-0 w-8 h-8 sm:w-[50px] sm:h-[50px] overflow-hidden rounded-full">
                                                    <img className="sps-avatar-pic w-full h-full object-cover" src="/img/admin.png" alt="user"/>
                                                </div>
                                                <span className="fm-message-status block bg-gradient-secondary z-20 h-1.5 w-1.5 sm:h-2 sm:w-2 right-[11px] bottom-[7px] rounded-full border-0 border-white absolute"></span>
                                                <span className="fm-message-status block bg-white z-10 h-3.5 w-3.5 sm:h-4 sm:w-4 right-[6px] bottom-[3px] rounded-full border-0 border-white absolute"></span>
                                            </div>
                                            <div className="fm-message-user overflow-hidden flex flex-col w-full items-center">
                                                <div className="fm-message-username font-secondary-bold text-[#FA0606] text-xs">Admin</div>
                                                <div className="fm-message-text text-center w-full min-[1440px]:max-w-[130px] min-[1670px]:max-w-[230px] font-primary-med text-xs text-[#B9BCD8]">Команда</div>
                                            </div>
                                        </div>
                                        <div className='mt-2 font-secondary-bold text-black text-[10px] sm:text-xs w-full sm:w-auto'>
                                            <h3 className='mb-1 uppercase'>Правила форума</h3>
                                            <p>Настоящие правила форума (далее- Правила) являются неотъемлемой частью пользовательского соглашения, текст которого размещен в сети Интернет по адресу: 1Paid.com/__ __ __</p>
                                            <p>1.Термины</p>
                                            <p>1.1.Администрация- Администрация Сайта и форума 1Paid.com</p>    
                                            <p>1.2.Участник форума- пользователь Сайта и форума 1Paid.com</p>    
                                            <p>1.3.Никнейм- имя пользователя на Сайте и форуме 1Paid.com</p>    
                                            <p>1.4.Модераторы- участники форума, назначенные Администрацией для сопровождения нормальной деятельности форума.</p>    
                                            <p>2. Общие положения</p>    
                                            <p>2.1. Каждый участник форума несет полную ответственность за опубликованную им информацию на форуме. Администрация не несет ответственности за высказывания, мнения, взгляды и действия пользователей форума.</p>    
                                            <p>2.2. Администрация вправе вносить изменения в данные правила по своему усмотрению.</p>    
                                            <p>2.3. Незнание правил не освобождает пользователей от ответственности за совершения действий, нарушающих Правила и законодательство РФ</p>    
                                            <p>2.4. Ваш Никнейм на форуме не может: а) противоречить законам РФ; б) быть пошлым или оскорбительным.</p>    
                                            <p>2.5. Запрещается регистрация Никнейма схожего с уже существующем до такой степени что это может ввести в заблуждение других участников форума.</p>    
                                            <p>2.5.1. В качестве никнейма запрещается использовать названия чужих торговых марок, товарных знаков, патентов, интернет-сервисов. Никнейм не должен нарушать законодательство РФ об авторских и смежных правах.</p>    
                                            <p>2.6. Став участником форума, вы обязуетесь не отправлять сообщения, содержащие непристойные, вульгарные выражения, выражения содержащие угрозы и/или нарушающие законодательство РФ, а также - разжигающие религиозную, расовую и межнациональную вражду.</p>    
                                            <p>2.7. Участникам форума запрещается рекламировать что-либо на форуме, а также размещать ссылки на другие сайты.</p>    
                                            <p>3. Создание тем</p>    
                                            <p>3.1.Участник форума перед созданием новой темы на форуме, обязан убедиться в том, что подобная тема отсутствует на форуме.</p>    
                                            <p>3.1.1. Создание одинаковых тем на форуме запрещено.</p>    
                                            <p>3.2. Название темы должно быть информативным и отражать ее суть. Название не может состоять исключительно из фраз: "помогите"; "нужна помощь"; "проблема"; "как вы думаете" и т.п.</p>    
                                            <p>3.3. Участникам форума необходимо размещать темы форума в соответствующих им тематическим разделах форума. В случае ошибки и создания темы в неподходящем разделе, необходимо сделать пометку в своем сообщении (или отправьте сообщение Модератору) с просьбой перенести тему в соответствующий раздел.</p>    
                                            <p>3.4. Запрещается:</p>    
                                            <p>3.4.1. Писать название темы которое содержит более 25% заглавных букв.</p>   
                                            <p>3.4.2. Искусственное поддержание темы путем публикации сообщений не несущих смысловой нагрузки.</p>    
                                            <p>3.4.3. Создание одинаковых тем.</p>    
                                            <p>3.4.4. Дублирование тем в разных разделах форума.</p>    
                                            <p>4. Публикация сообщений</p>    
                                            <p>4.1. Участники форума обязаны выражать свои мысли доступным языком, чтобы любой участник форума мог понять смысл сообщения.</p>    
                                            <p>4.2. В случае использования специфической терминологии, необходимо разъяснять смысл данной терминологии.</p>    
                                            <p>4.3.Участникам форума запрещается использовать цветовые теги и выделение жирным без особой надобности.</p>    
                                            <p>4.4. Запрещается писать сообщения шрифтом, размер которого отличается от обычного - 4 (14px). Шрифт, размер которого отличается от обычного, используется для выделения отдельных слов, фраз, абзацев, а также особых случаев: поздравлений, экстренных объявлений и т.п.</p>    
                                            <p>4.5. Участникам форума необходимо соблюдать правила русского языка при написании.</p>    
                                            <p>4.6. Участникам форума запрещается злоупотреблять жаргонными выражениями.</p>    
                                            <p>4.7. Запрещается ненормативная лексика в любом виде.</p>    
                                            <p>4.8. Запрещается писать сообщения используя транслитерацию.</p>    
                                            <p>4.9. Запрещается оставлять бессмысленные сообщения, не несущие смысловой нагрузки.</p>    
                                            <p>4.10. Если вы участвуете в обсуждении, будьте любезны не только задавать вопросы другим участникам, но и отвечать на вопросы, которые задают вам.</p>    
                                            <p>4.11. Строго запрещается:</p>   
                                            <p>4.11.1. Публикация заведомо ложной информации, клеветы.</p>    
                                            <p>4.11.2. Размещение ссылок на пиратские ресурсы.</p>    
                                            <p>4.11.3. Размещение ссылок на порнографические ресурсы.</p>    
                                            <p>4.11.4. Угрозы, оскорбления и ругательства, в т.ч. с использованием ненормативной лексики в адрес других участников форума.</p>    
                                            <p>4.11.5. Размещение большого количества однородной информации или бесполезных символов в тематических разделах. Для обсуждения вопросов, не попадающих ни под один тематический раздел, существует специальный раздел "Флуд".</p>    
                                            <p>4.11.6. Использование нечестных приемов ведения дискуссий в виде «передёргиваний» высказываний собеседников, правки/удаления своих собственных сообщений с целью исказить/скрыть их первоначальный смысл, а также провокаций, направленных на участников конференции, в результате чего могут быть нарушены данные Правила.</p>    
                                            <p>4.11.7. Создавать сообщения которые содержат более 50% заглавных букв.</p>    
                                            <p>4.11.8. Размещение рекламы.</p>    
                                            <p>4.11.9. Умышленно коверкать Никнейм оппонента.</p>    
                                            <p>4.11.10. Дублирование ссылки допустимо только один раз и только в больших сообщениях.</p>    
                                            <p>5. Наказания</p>    
                                            <p>5.1. За незначительные нарушения Вы получаете устные предупреждения. Если Вы продолжаете игнорировать предупреждения, либо грубо нарушаете правила форума к Вам будут применены более строгие меры наказания на усмотрение Администрации.</p>    
                                            <p>5.2. Так же, в некоторых случаях, к Вам могут применить предмодерацию, либо сразу более высокую степень наказания.</p>    
                                            <p>5.3. Действия Модераторов и Администраторов обсуждению не подлежат.</p>    
                                            <p>6.Платные услуги</p>    
                                            <p>6.1. Участникам форума могут предоставляться платные услуги, в том числе, но не ограничивая: персонализация цвета надписей и шрифта, поднятие созданных тем в верхние строчки раздела и иные услуги, предлагаемые Администрацией.</p>    
                                            <p>7. На форуме приветствуется</p>    
                                            <p>7.1. Доброжелательное отношение к другим участникам форума. Умейте слушать и уважать собеседника, даже если ваши взгляды расходятся.</p>    
                                            <p>7.2. Размещение любой полезной информации в соответствии с темами форумов, например - тематических статей.</p>    
                                            <p>7.3. Размещение любых советов, вопросов, помощи в соответствующих разделах форума.</p>    
                                            <p>8. Администрация и Модераторы</p>    
                                            <p>8.1. Модераторы имеют право удалять, редактировать, перемещать или закрывать темы при нарушении правил пользования форума.</p>    
                                            <p>8.2. В некоторых темах Модераторы могут разрешить некоторые отступления от правил, в контексте конкретной темы и форума в целом.</p>    
                                            <p>8.3. Действия Модераторов обсуждению не подлежат. При несогласии с действиями того или иного Модератора - отправьте жалобу с полной историей переписки Администрации (info@1Paid.com).</p>    
                                            <p>8.4. Действия и решения Администрации по всем вопросам являются окончательными и обсуждению не подлежат.</p>    
                                            <p>8.5. Запрещается удалять пометки, сделанные Модератором или Администрацией в Вашем сообщении.</p>
                                            <div className='mt-9 text-end text-[#CDD6E6] text-[11px] '>Последнее редактирование: 15 Июн 2021</div>
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
                </div>
            </div>
            
                <LayoutBtn />
           
        </div>
    );
}

export default ForumRules;
