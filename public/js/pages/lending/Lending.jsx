import  './lending.less';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Registration from '../../components/registration/Registration';
import { useState} from 'react';
import Authorization from "../../components/authorization/Authorization";
import RecPass from '../../components/recpass/Recpass';
import star from '../../../img/icon-star.svg';

function LendingPage() {
    const [registration, setClickedRegistration] = useState(false);
    const [fon, setAddFon] = useState(false);
    const [authorization, setClickedAuthorization] = useState(null);
    const [recPass, setClickedRecovery] = useState(null);

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
        setClickedAuthorization(true);
        addFon(true);
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

    return (
    <>
        <div className="relative flex h-screen flex-col justify-between bg-[url('/img/lending_bg.png')] bg-no-repeat bg-cover bg-top w-screen">
            <Header addFon={addFon} openAuthorization={openAuthorization}/>
            <section className="wrapper h-[80%] items-center self-center flex justify-between ">
                <div className='w-full flex flex-wrap gap-14 justify-between '>
                    <div className="main-prim ">
                        <h3 className="text-lg lg:text-2xl xl:text-[27px] uppercase tracking-wide text-[#5CA514] font-bold md:mb-3">покупай и продавай онлайн</h3>
                        <h1 className="font-h1 text-5xl lg:text-7xl xl:text-[84px] text-white font-extrabold leading-tight mb-3 md:mb-6">1paid.ru</h1>
                        <h2 className="text-2xl lg:text-4xl xl:text-[42px] mb-5 md:mb-8 text-white font-bold">Совершайте безопасную <br/>сделку сейчас!</h2>
                        <div className="dash mb-4 md:mb-7 w-32 md:w-40 lg:w-52 xl:w-64 h-1 md:h-1.5"></div>
                        <p className="mb-7 text-sm lg:text-base xl:text-2xl text-white font-medium">Присоединяйтесь к нам прямо сейчас, <br/>и получите 15 бонусов на счёт при первом <br/>пополении своего баланса.</p>
                        <button onClick={openRegistration} className="main_btn text-sm md:text-base rounded-xl xs:rounded-lg w-48 md:w-64 h-12 md:h-16 xs:h-11 text-white uppercase">Присоединиться</button>
                    </div>
                    <div className="main-info ">
                        <h3 className="mb-4 md:mb-12 uppercase tracking-wide text-lg lg:text-2xl xl:text-[27px] text-white font-bold">Почему стоит выбрать нас</h3>
                        <div className="info__item mb-4 md:mb-9 h-28 p-6 flex rounded-lg md:rounded-3xl items-center gap-5">
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                        <div>
                        <p className="text-white text-base xl:text-xl mb-2">Гарантия безопасной сделки</p>
                        <p className="text-[#78717e] text-xs lg:text-base">А также удобная система <br/>реферальных бонусов</p>
                        </div>
                        </div>
                        <div className="info__item h-28  mb-4 md:mb-9 p-6 flex rounded-lg md:rounded-3xl items-center gap-5">
                            <div>
                                <img src={star} alt='star'/>
                            </div>
                            <div>
                            <p className="text-white text-base md:text-xl mb-2">Розыгрыши</p>
                            <p className="text-[#78717e] text-xs lg:text-base">Ежедневно бесплатные розыгрыши <br/>для наших пользователей</p>
                            </div>
                        </div>
                        <div className="info__item h-28 p-6 flex rounded-lg md:rounded-3xl items-center gap-5">
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
        {(!registration) ? null : <Registration closeRegistration={closeRegistration} transAuth={transAuth}/>}
        {(!authorization) ? null : <Authorization closeAuthorization={closeAuthorization} openRecoveryPassword={openRecoveryPassword} openRegistration={openRegistration} />}
        {(!recPass) ? null : <RecPass closeRecPass={closeRecPass}/>}
    </>
  );
}

export default LendingPage;

