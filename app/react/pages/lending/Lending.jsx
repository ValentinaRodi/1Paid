import  './lending.less';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Registration from '../../components/registration/Registration';
import { useState} from 'react';
import Authorisation from "../../components/authorisation/Authorisation";
import RecPass from '../../components/recpass/Recpass';
import star from '../../../../web/img/icon-star.svg';
import { useNavigate } from "react-router-dom";

function LendingPage(props) {
    const [registration, setClickedRegistration] = useState(false);
    const [fon, setAddFon] = useState(false);
    const [authorization, setClickedAuthorization] = useState(null);
    const [recPass, setClickedRecovery] = useState(null);
    const [displayMenu, setClickedDisplayMenu] = useState(false);
    const [fonMenu, setClickedFonMenu] = useState('');

    const addFon = () =>{
        setAddFon(!fon);
    };

    const openRegistration = () =>{
        setClickedAuthorization(false);
        setClickedRegistration(true);
        setAddFon(true)
    }

    const closeRegistration = () =>{
        setClickedRegistration(false);
        setAddFon(false);
    };

    const openAuthorization = () =>{
        setClickedRegistration(false);
        setClickedAuthorization(true);
        setAddFon(true);
    };

    const closeAuthorization = () =>{
        setClickedAuthorization(false);
        addFon(false);
        openRegistration();
    };

    const openRecoveryPassword = () =>{
        setClickedAuthorization(false);
        setClickedRecovery(true);
    };

    const closeRecPass = () =>{
        setClickedRecovery(false);
        addFon(false);
    };

    const transAuth = () =>{
        setClickedRegistration(false);
        setAddFon(false);
    };

    const closeBurgerMenu = () => {
        setClickedDisplayMenu(false);
        setClickedFonMenu('');
    };

    const openBurgerMenu = () => {
        setClickedDisplayMenu(true);
        setClickedFonMenu('header_fon');
    };

    const navigate = useNavigate();

    const openMainPage = () =>{
        setClickedFonMenu('');
        setClickedDisplayMenu(false);
        navigate('/', {replace: true})
    }

    return (
    <>
        <div className="px-[5%] lg:px-[10%] 2xl:px-[15%] relative flex h-screen flex-col justify-between bg-[url('/img/lending_bg.png')] bg-no-repeat bg-cover bg-top w-screen">
            <Header addFon={addFon} openMainPage={openMainPage} openBurgerMenu={openBurgerMenu} fonMenu={fonMenu} openAuthorization={openAuthorization} clickMain={props.clickMain} clickTopUsers={props.clickTopUsers} clickFeedbacks={props.clickFeedbacks} clickGuarantees={props.clickGuarantees} clickRandomItems={props.clickRandomItems} clickForum={props.clickForum}/>
            <section className="w-full h-[80%] items-center self-center flex justify-between ">
                <div className='w-full flex flex-wrap sm:flex-nowrap gap-14 justify-between '>
                    <div className="main-prim ">
                        <h3 className="text-lg lg:text-2xl xl:text-[27px] uppercase tracking-wide text-[#5CA514] font-bold md:mb-3">покупай и продавай онлайн</h3>
                        <h1 className="font-h1 text-5xl lg:text-7xl xl:text-[84px] text-white font-extrabold leading-tight mb-3 md:mb-6">1paid.ru</h1>
                        <h2 className="text-2xl lg:text-4xl xl:text-[42px] mb-5 md:mb-8 text-white font-bold">Совершайте безопасную <br/>сделку сейчас!</h2>
                        <div className="dash mb-4 md:mb-7 w-32 md:w-40 lg:w-52 xl:w-64 h-1 md:h-1.5"></div>
                        <p className="mb-7 text-sm lg:text-base xl:text-2xl text-white font-medium">Присоединяйтесь к нам прямо сейчас, <br/>и получите 15 бонусов на счёт при первом <br/>пополении своего баланса.</p>
                        <button onClick={openRegistration} className="main_btn text-sm md:text-base rounded-xl xs:rounded-lg w-48 md:w-64 h-12 md:h-16 xs:h-11 text-white uppercase">Присоединиться</button>
                    </div>
                    <div className="main-info w-full sm:w-auto">
                        <h3 className="mb-4 md:mb-12 uppercase tracking-wide text-lg lg:text-2xl xl:text-[27px] text-white font-bold">Почему стоит выбрать нас</h3>
                        <div className="info__item w-full sm:w-auto mb-4 md:mb-9 h-28 p-6 flex rounded-lg md:rounded-3xl items-center gap-5">
                            <div>
                                <img src={star} alt='star'/>
                            </div>
                            <div>
                                <p className="text-white text-base xl:text-xl mb-2">Гарантия безопасной сделки</p>
                                <p className="text-[#78717e] text-xs lg:text-base">А также удобная система <br/>реферальных бонусов</p>
                            </div>
                        </div>
                        <div className="info__item w-full sm:w-auto h-28  mb-4 md:mb-9 p-6 flex rounded-lg md:rounded-3xl items-center gap-5">
                            <div>
                                <img src={star} alt='star'/>
                            </div>
                            <div>
                                <p className="text-white text-base md:text-xl mb-2">Розыгрыши</p>
                                <p className="text-[#78717e] text-xs lg:text-base">Ежедневно бесплатные розыгрыши <br/>для наших пользователей</p>
                            </div>
                        </div>
                        <div className="info__item w-full sm:w-auto h-28 p-6 flex rounded-lg md:rounded-3xl items-center gap-5">
                            <div>
                                <img src={star} alt='star'/>
                            </div>
                            <div>
                                <p className="text-white text-base md:text-xl mb-2">Полезная информация</p>
                                <p className="text-[#78717e] text-xs lg:text-base">На форуме и бронирование <br/>запросов на товары</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
        {(!fon) ? null : <div className='absolute h-full w-full z-10 inset-0 bg-[rgba(6,9,18,0.8)]'></div>}
        {(!registration) ? null : <Registration closeModal={closeRegistration} transAuth={transAuth} openAuthorization={openAuthorization}/>}
        {(!authorization) ? null : <Authorisation closeModal={closeAuthorization} openRecoveryPassword={openRecoveryPassword} openRegistration={openRegistration} />}
        {(!recPass) ? null : <RecPass closeModal={closeRecPass}/>}
        {displayMenu ?
            <div className="px-[5%] absolute top-[75px] left-0 w-full z-10 flex justify-center">
                <div className="w-full flex justify-between">
                <nav className="gap-7 flex flex-col pt-11 rounded-xl">
                    <a
                    className="navs-link text-[#78717e] w-[40%] font-medium text-base uppercase"
                    href="#"
                    onClick={openMainPage}
                    >
                    Главная
                    </a>
                    <a
                    className="navs-link text-[#78717e] w-[55%] font-medium text-base uppercase"
                    href="#"
                    onClick={openMainPage}
                    >
                    Топ юзеров
                    </a>
                    <a
                    className="navs-link text-[#78717e] w-[38%] font-medium text-base uppercase"
                    href="#"
                    onClick={openMainPage}
                    >
                    Отзывы
                    </a>
                    <a
                    className="navs-link text-[#78717e] w-[45%] font-medium text-base uppercase"
                    href="#"
                    onClick={openMainPage}
                    >
                    Гарантии
                    </a>
                    <a
                    className="navs-link text-[#78717e] font-medium text-base uppercase"
                    href="#"
                    onClick={openMainPage}
                    >
                    Случайные предметы
                    </a>
                    <a
                    className="navs-link text-[#78717e] w-[32%] font-medium text-base uppercase"
                    href="#"
                    onClick={openMainPage}
                    >
                    Форум
                    </a>
                </nav>
                <div className="pt-8">
                    <button onClick={closeBurgerMenu} className="bg-inherit">
                    <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.45">
                        <path
                            d="M0.393485 19.6065C-0.131162 19.0787 -0.131162 18.2264 0.393485 17.6986L17.619 0.473027C17.9497 0.086871 18.469 -0.081333 18.9633 0.0375705C19.4576 0.156474 19.8435 0.542417 19.9624 1.03672C20.0813 1.53103 19.9131 2.05027 19.527 2.38096L2.30142 19.6065C1.77364 20.1312 0.921263 20.1312 0.393485 19.6065Z"
                            fill="white"
                        />
                        <path
                            d="M0.393485 0.472953C0.921263 -0.0516939 1.77364 -0.0516939 2.30142 0.472953L19.527 17.6985C19.9131 18.0292 20.0813 18.5484 19.9624 19.0427C19.8435 19.5371 19.4576 19.923 18.9633 20.0419C18.469 20.1608 17.9497 19.9926 17.619 19.6064L0.393485 2.38089C-0.131162 1.85311 -0.131162 1.00073 0.393485 0.472953Z"
                            fill="white"
                        />
                        </g>
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            : null
        }
    </>
  );
}

export default LendingPage;

