import useRoutes from './routes/routes';
import HeaderMain from './components/headerMain/HeaderMain';

import { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";

import LeftMenu from './components/leftMenu/LeftMenu';
import LayoutColRow from './components/LayoutColRow';

import Registration from './components/registration/Registration';
import Authorization from "./components/authorization/Authorization";
import RecPass from './components/recpass/Recpass';

import useAuth from './hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  const routes = useRoutes();
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [orient, setOrient] = useState('');
  const [modalEl, setModalEl] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const body = document.querySelector('body');
  const [leftMenuOpen, setleftMenuOpen] = useState('');
  const [leftMenuDisplay, setleftMenuDisplay] = useState('');

  // useEffect(() => {
  //     window.addEventListener("beforeunload", alertUser);
  //     return () => {
  //       window.removeEventListener("beforeunload", alertUser);
  //     };
  // }, []);
  // const alertUser = (e) => {
  //     console.log(e)
  //     e.preventDefault();
  //     e.returnValue = "";
      
  // };

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
    console.log('hgfgh'); 
    (leftMenuOpen === '') ? setleftMenuOpen('_to-open') : setleftMenuOpen('');
    (leftMenuDisplay === '') ? setleftMenuDisplay('hidden') : setleftMenuDisplay('');
  };


  return (
    <div className={`layout-grid ${orient}`}>
      <LeftMenu leftMenuDisplay={leftMenuDisplay} /> 
      <div id='layout-page' className={`layout-page ${orient}`}>
        <LayoutColRow changeOrient={changeOrient} orient={orient}/>
        <HeaderMain closeLeftMenu={closeLeftMenu} leftMenuOpen={leftMenuOpen} openAuthorization={openAuthorization} />
        {routes}
      </div>
    </div>
  )
};

export default App;