import { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderMain from '../../components/headerMain/HeaderMain';

import Catalog from '../../components/catalog/Catalog';
import LeftMenu from '../../components/leftMenu/LeftMenu';
import LayoutColRow from '../../components/LayoutColRow';
import Content from '../content/Content';
import Registration from '../../components/registration/Registration';
import Authorisation from "../../components/authorisation/Authorisation";
import RecPass from '../../components/recpass/Recpass';

function Main() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [orient, setOrient] = useState('');
    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        let loggedInUser = localStorage.getItem('logged');

        if (loggedInUser) {
            setLoggedIn(true);
        }
    }, []);

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
    }


    const openAuthorization = () => {
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';
        setModalEl(<Authorisation
            changeLogged={changeLogged}
            closeModal={closeModal}
            openRecoveryPassword={openRecoveryPassword}
            openRegistration={openRegistration}
        />);
        setModalOpen(true);
    };

    const closeModal = () =>{
        const body = document.querySelector('body');
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
        setLoggedIn(true);
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


    return (
        <div className={`layout-grid ${orient}`}>
           <LeftMenu /> 
           <div id='layout-page' className={`layout-page ${orient}`}>
                <LayoutColRow changeOrient={changeOrient} orient={orient}/>
                <HeaderMain  openAuthorization={openAuthorization} />
                <Content orient={orient} />
           </div>
        </div>
    );
}

export default Main;
