import  './lending.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Registration from '../../components/registration/Registration';
import { useState} from 'react';
import Authorization from "../../components/authorization/Authorization";

function LendingPage() {
    const [registration, setClickedRegistration] = useState(false);
    const [fon, setAddFon] = useState(false);
    const [authorization, setClickedAuthorization] = useState(null);

    const addFon = () =>{
        if(!fon) {
            setAddFon(true);
        } else {
            setAddFon(false);
        }
    }

    const openRegistration = () =>{
        setClickedRegistration(true);
        setAddFon(true)
    }

    const closeRegistration = () =>{
        setClickedRegistration(false);
        setAddFon(false);
    }

    const openAuthorization = () =>{
        setClickedAuthorization(true);
        addFon();
      }
    
      const closeAuthorization = () =>{
        setClickedAuthorization(false);
        addFon();
      }

    return (
    <>
        <div className="relative flex h-screen flex-col justify-between bg-[url('/src/assets/images/lending_bg.png')] bg-no-repeat bg-cover bg-top w-screen">        
            <Header addFon={addFon} openAuthorization={openAuthorization}/>
            <section className="wrapper h-[80%] items-center self-center flex justify-between ">
                <div className='w-full flex flex-wrap gap-14 justify-between '>
                    <div className="main-prim ">
                        <h3 className="text-lg lg:text-2xl xl:text-[27px] uppercase tracking-wide text-green font-bold md:mb-3">покупай и продавай онлайн</h3>
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
                            <svg className="w-[40px] h-[38px] xl:w-[69px] xl:h-[66px]" width="69" height="66" viewBox="0 0 69 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.1" d="M34.5004 3.13805L40.8347 22.6798C41.4668 24.63 43.2835 25.9509 45.3336 25.9509L65.8439 25.9509L49.241 38.0425C47.5874 39.2468 46.8955 41.3778 47.5263 43.3238L53.8657 62.8813L37.2846 50.8055C35.6252 49.597 33.3756 49.597 31.7161 50.8055L15.135 62.8813L21.4744 43.3238C22.1052 41.3778 21.4133 39.2468 19.7597 38.0425L3.15682 25.9509H23.6671C25.7172 25.9509 27.5339 24.63 28.1661 22.6798L34.5004 3.13805Z" stroke="url(#paint0_linear_1400_31568)" strokeWidth="4.72941"/>
                                <path d="M33.748 23.3943C33.9792 22.6582 35.0208 22.6582 35.252 23.3943L37.5821 30.8127C37.6852 31.1412 37.9897 31.3647 38.3341 31.3647H45.9296C46.6867 31.3647 47.0084 32.3282 46.4032 32.7831L40.2128 37.4358C39.9459 37.6364 39.8343 37.9835 39.9344 38.3021L42.288 45.7954C42.5176 46.5264 41.6748 47.1221 41.0624 46.6617L34.9736 42.0854C34.6931 41.8746 34.3069 41.8746 34.0264 42.0854L27.9376 46.6617C27.3252 47.1221 26.4824 46.5264 26.712 45.7954L29.0656 38.3021C29.1657 37.9835 29.0541 37.6364 28.7872 37.4358L22.5968 32.7831C21.9916 32.3282 22.3133 31.3647 23.0704 31.3647H30.6659C31.0103 31.3647 31.3148 31.1412 31.4179 30.8127L33.748 23.3943Z" stroke="url(#paint1_linear_1400_31568)" strokeWidth="2.36471"/>
                                <defs>
                                <linearGradient id="paint0_linear_1400_31568" x1="12.3581" y1="64.2745" x2="54.5573" y2="8.14337" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#B139FE"/>
                                <stop offset="1" stopColor="#1E61EB"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_1400_31568" x1="26.5909" y1="46.3636" x2="42.2763" y2="26.1469" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#B139FE"/>
                                <stop offset="1" stopColor="#1E61EB"/>
                                </linearGradient>
                                </defs>
                            </svg>                
                        </div>
                        <div>
                        <p className="text-white text-base xl:text-xl mb-2">Гарантия безопасной сделки</p>
                        <p className="text-[#78717e] text-xs lg:text-base">А также удобная система <br/>реферальных бонусов</p>
                        </div>
                        </div>
                        <div className="info__item h-28  mb-4 md:mb-9 p-6 flex rounded-lg md:rounded-3xl items-center gap-5">
                            <div>
                                <svg  className="w-[40px] h-[38px] xl:w-[69px] xl:h-[66px]" width="69" height="66" viewBox="0 0 69 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.1" d="M34.5004 3.13805L40.8347 22.6798C41.4668 24.63 43.2835 25.9509 45.3336 25.9509L65.8439 25.9509L49.241 38.0425C47.5874 39.2468 46.8955 41.3778 47.5263 43.3238L53.8657 62.8813L37.2846 50.8055C35.6252 49.597 33.3756 49.597 31.7161 50.8055L15.135 62.8813L21.4744 43.3238C22.1052 41.3778 21.4133 39.2468 19.7597 38.0425L3.15682 25.9509H23.6671C25.7172 25.9509 27.5339 24.63 28.1661 22.6798L34.5004 3.13805Z" stroke="url(#paint0_linear_1400_31568)" strokeWidth="4.72941"/>
                                    <path d="M33.748 23.3943C33.9792 22.6582 35.0208 22.6582 35.252 23.3943L37.5821 30.8127C37.6852 31.1412 37.9897 31.3647 38.3341 31.3647H45.9296C46.6867 31.3647 47.0084 32.3282 46.4032 32.7831L40.2128 37.4358C39.9459 37.6364 39.8343 37.9835 39.9344 38.3021L42.288 45.7954C42.5176 46.5264 41.6748 47.1221 41.0624 46.6617L34.9736 42.0854C34.6931 41.8746 34.3069 41.8746 34.0264 42.0854L27.9376 46.6617C27.3252 47.1221 26.4824 46.5264 26.712 45.7954L29.0656 38.3021C29.1657 37.9835 29.0541 37.6364 28.7872 37.4358L22.5968 32.7831C21.9916 32.3282 22.3133 31.3647 23.0704 31.3647H30.6659C31.0103 31.3647 31.3148 31.1412 31.4179 30.8127L33.748 23.3943Z" stroke="url(#paint1_linear_1400_31568)" strokeWidth="2.36471"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_1400_31568" x1="12.3581" y1="64.2745" x2="54.5573" y2="8.14337" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#B139FE"/>
                                    <stop offset="1" stopColor="#1E61EB"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1400_31568" x1="26.5909" y1="46.3636" x2="42.2763" y2="26.1469" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#B139FE"/>
                                    <stop offset="1" stopColor="#1E61EB"/>
                                    </linearGradient>
                                    </defs>
                                </svg>                
                            </div>
                            <div>
                            <p className="text-white text-base md:text-xl mb-2">Розыгрыши</p>
                            <p className="text-[#78717e] text-xs lg:text-base">Ежедневно бесплатные розыгрыши <br/>для наших пользователей</p>
                            </div>
                        </div>
                        <div className="info__item h-28 p-6 flex rounded-lg md:rounded-3xl items-center gap-5">
                            <div>
                            <svg  className="w-[40px] h-[38px] xl:w-[69px] xl:h-[66px]" width="69" height="66" viewBox="0 0 69 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.1" d="M34.5004 3.13805L40.8347 22.6798C41.4668 24.63 43.2835 25.9509 45.3336 25.9509L65.8439 25.9509L49.241 38.0425C47.5874 39.2468 46.8955 41.3778 47.5263 43.3238L53.8657 62.8813L37.2846 50.8055C35.6252 49.597 33.3756 49.597 31.7161 50.8055L15.135 62.8813L21.4744 43.3238C22.1052 41.3778 21.4133 39.2468 19.7597 38.0425L3.15682 25.9509H23.6671C25.7172 25.9509 27.5339 24.63 28.1661 22.6798L34.5004 3.13805Z" stroke="url(#paint0_linear_1400_31568)" strokeWidth="4.72941"/>
                                <path d="M33.748 23.3943C33.9792 22.6582 35.0208 22.6582 35.252 23.3943L37.5821 30.8127C37.6852 31.1412 37.9897 31.3647 38.3341 31.3647H45.9296C46.6867 31.3647 47.0084 32.3282 46.4032 32.7831L40.2128 37.4358C39.9459 37.6364 39.8343 37.9835 39.9344 38.3021L42.288 45.7954C42.5176 46.5264 41.6748 47.1221 41.0624 46.6617L34.9736 42.0854C34.6931 41.8746 34.3069 41.8746 34.0264 42.0854L27.9376 46.6617C27.3252 47.1221 26.4824 46.5264 26.712 45.7954L29.0656 38.3021C29.1657 37.9835 29.0541 37.6364 28.7872 37.4358L22.5968 32.7831C21.9916 32.3282 22.3133 31.3647 23.0704 31.3647H30.6659C31.0103 31.3647 31.3148 31.1412 31.4179 30.8127L33.748 23.3943Z" stroke="url(#paint1_linear_1400_31568)" strokeWidth="2.36471"/>
                                <defs>
                                <linearGradient id="paint0_linear_1400_31568" x1="12.3581" y1="64.2745" x2="54.5573" y2="8.14337" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#B139FE"/>
                                <stop offset="1" stopColor="#1E61EB"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_1400_31568" x1="26.5909" y1="46.3636" x2="42.2763" y2="26.1469" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#B139FE"/>
                                <stop offset="1" stopColor="#1E61EB"/>
                                </linearGradient>
                                </defs>
                            </svg>                
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
        {(!registration) ? null : <Registration closeRegistration={closeRegistration}/>}
        {(!authorization) ? null : <Authorization closeAuthorization={closeAuthorization}/>}
    </>
  );
}

export default LendingPage;