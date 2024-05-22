import useRoutes from './routes/routes';
import HeaderMain from './components/headerMain/HeaderMain';

import { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";

import LeftMenu from './components/leftMenu/LeftMenu';
import LayoutColRow from './components/LayoutColRow';

import Registration from './components/registration/Registration';
import Authorization from "./components/authorisation/Authorisation";
import RecPass from './components/recpass/Recpass';
import FooterMain from './components/footerMain/FooterMain';

import LendingPage from './pages/lending/Lending';

import useAuth from './hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  const routes = useRoutes();
  const { setAuth, isForum, } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [orient, setOrient] = useState('');
  const [modalEl, setModalEl] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const body = document.querySelector('body');
  const [leftMenuOpen, setleftMenuOpen] = useState('');
  const [leftMenuDisplay, setleftMenuDisplay] = useState('');
  const [modalUpTop, setModalUpTop] = useState(false);
  const [lending, setLending] = useState(true);
  
  const changeOrient = () => {
    if(orient === '') {
      setOrient('_lf-row');
    } else {
      setOrient('');
    }
  };

  const openAuthorization = () => {
    body.style.overflow = 'hidden';
    setModalEl(<Authorization
      changeLogged={changeLogged}
      closeModal={closeModal}
      openRecoveryPassword={openRecoveryPassword}
      openRegistration={openRegistration}
    />);
    setModalOpen(true);
  };

  const closeModal = () =>{
    body.style.overflow = 'auto';
    setModalOpen(false);
    setModalEl('');
  };

  const openRegistration = () => {
    setModalEl(<Registration 
      changeLogged={changeLogged} 
      closeModal={closeModal} 
      openAuthorization={openAuthorization}
    />);
  };

  const openRecoveryPassword = () =>{
    setModalEl('');
    setModalEl(<RecPass 
      closeModal={closeModal} 
    />);
  };

  const changeLogged = () => {
    setAuth(true)
    navigate(from, { replace: true });
  };

  useEffect(() => {
    const modal = document.getElementById('modal');

    if(modalOpen) {
      modal.classList.add('modal');
      modal.textContent = '';
          
      const authorizationContainer = document.createElement("div");
      const root = createRoot(authorizationContainer);
      root.render(modalEl);
      modal.appendChild(authorizationContainer);   
    }
    
    if(!modalOpen) {
          
      modal.classList.remove('modal');
      modal.textContent = '';
    }
      
  }, [modalEl]);

  const closeLeftMenu = () => {
    (leftMenuOpen === '') ? setleftMenuOpen('_to-open') : setleftMenuOpen('');
    (leftMenuDisplay === '') ? setleftMenuDisplay('_hide') : setleftMenuDisplay('');
  };

  // const [isLoading, setLoading] = useState(true);

  //   function fakeRequest() {
  //       return new Promise(resolve => setTimeout(() => resolve(), 2500));
  //   };

  //   useEffect(() => {
  //       fakeRequest().then(() => {
  //         const el = document.querySelector(".root");
  //         if (el) {
  //           el.remove();
  //           setLoading(!isLoading);
  //         }
  //       });
  //   }, []);
    
  //   if (isLoading) {
  //       return null;
  // }

  const clickUpTop = () => {
    setModalUpTop(true);
  };

  useEffect(() => {
    if (modalUpTop) {
        setTimeout(() => {
            setModalUpTop(false);
      }, 2000);
    }
  }, [modalUpTop, setModalUpTop]);

  // const clickMain = () => {
  //   setLending(false);
  // };

  // const clickTopUsers = () => {
  //   navigate('/top_users');
  // };

  // const clickFeedbacks = () => {
  //   navigate('/feedbacks');
  // };

  // const clickGuarantees = () => {
  //   navigate('/guarantees');
  // };
  
  // const clickRandomItems = () => {
  //   navigate('/random-items');
  // };

  // const clickForum = () => {
  //   setLending(false);
  //   navigate('/forum');
  // };

  
  return (
    <div>
      {/* <LendingPage /> */}
      <div className={`layout-grid ${orient}`}>
        <LeftMenu leftMenuDisplay={leftMenuDisplay} clickUpTop={clickUpTop}/> 
        <div id='layout-page' className={`layout-page ${orient}`}>
        <LayoutColRow changeOrient={changeOrient} orient={orient}/>
          <HeaderMain closeLeftMenu={closeLeftMenu} leftMenuOpen={leftMenuOpen} openAuthorization={openAuthorization}/>
          {routes}
        </div>
      </div>
      <FooterMain />
      {/* {isForum ?
          null
          : 
        } */}
      {modalUpTop ?
          <div className='absolute top-[110px] right-[0] min-[397px]:right-[22px] sm:right-[35px] bg-[linear-gradient(90deg,#8cd23c_0%,#417a00_100%)] rounded-xl p-3'>
              <p className='font-secondary-bold text-xs sm:text-sm text-white'>Товар успешно поднят</p>
              <p className='font-secondary-bold text-xs sm:text-sm text-white'>Следующий товар может быть поднят через 4 часа</p>
          </div>
          : null
      }
    </div> 
  )
};

export default App;