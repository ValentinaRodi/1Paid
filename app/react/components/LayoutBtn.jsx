import { useState, useEffect, useRef } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate  } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import Authorisation from './authorisation/Authorisation';
import Registration from './registration/Registration';
import RecPass from './recpass/Recpass';
import ModalChat from './modalChat/ModalChat';
import ModalPetition from './modalPetition/ModalPetition';

function LayoutBtn(props) {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const body = document.querySelector('body');
    const [fastChat, setFastChat] = useState(false);

    const scrollToTop = () => { 
        window.scrollTo({ 
            top: 0,  
            behavior: 'smooth'
        }); 
    }; 

    const openAuthorization = () => {
        body.style.overflow = 'hidden';
        setModalEl(<Authorisation
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

    useEffect(() => {
        const modal = document.getElementById('modal');

        if(modalOpen) {
            modal.classList.add('modal');
            modal.textContent = '';
            
            const containerModal = document.createElement("div");
            const root = createRoot(containerModal);
            root.render(modalEl);
            modal.appendChild(containerModal);   
        };
        if(!modalOpen) {
            modal.classList.remove('modal');
            modal.textContent = '';
        };
        
    }, [modalEl]);

    const clickOpenFastChat = () =>{
        scrollToTop();
        const modal = document.getElementById('modal');
        modal.classList.add('modal-light');
        // body.style.overflow = 'hidden';
        setFastChat(true);
    };

    const clickCloseModalChat = () =>{
        const modal = document.getElementById('modal');
        modal.classList.remove('modal-light');
        body.style.overflow = 'auto';
        setFastChat(false);
    };

    const clickOpenModalPetition = () => {
        setFastChat(false);
        body.style.overflow = 'hidden';
        setModalEl(<ModalPetition
            closeModal={closeModal} 
        />);
        setModalOpen(true);
    };

    const closeModalFastChat = () => {
        const modal = document.getElementById('modal');
        modal.classList.remove('modal-light');
        body.style.overflow = 'auto';
        setFastChat(false);
    };

    const goProfile = () => {
        setFastChat(false);
        const modal = document.getElementById('modal');
        modal.classList.remove('modal-light');
        body.style.overflow = 'auto';
        window.scrollTo({ top: 0 }); 
        (props.avatar === 'avatar-example-bot.1e9be783.png') ? navigate('/tech-support') : navigate('/profile',  { state: {userName:'Shenderro' } });  
    };

    const goTovar = () => {
        setFastChat(false);
        const modal = document.getElementById('modal');
        modal.classList.remove('modal-light');
        body.style.overflow = 'auto';
        window.scrollTo({ top: 0 }); 
        navigate('/tovars',  { state: {userName:'Shenderro' } });
    };

    return (
        <div className="layout-b-f flex justify-between mt-6 mb-6 w-full">
            <div>
                {props.toTop ?
                    <button onClick={scrollToTop} className="layout-btn-totop scroll-to-top rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#D7DFF5] hover:bg-[#d0d8f3] shadow-2xl ">
                        <div className=" flex items-center ">
                            <img src="/img/icon-btn-icon-12.svg" alt="btn-icon"/>
                        </div>
                    </button>
                    : null
                }
            </div>
            <button onClick={clickOpenFastChat} className="btn layout-btn-openchat open-fast-chat rounded-full rounded-br-none w-14 h-14 sm:w-[65px] sm:h-[65px] flex items-center justify-center bg-gradient-primary shadow-2xl ">
                <div className="btn-icon text-[#BDC6E0] w-[22px] h-[19px] [&amp;_svg]:w-full [&amp;_svg]:h-full text-white">
                    <img src="/img/icon-btn-icon-13.svg" alt="btn-icon"/>
                </div>
            </button>
            {fastChat ?
                    <ModalChat closeModalFastChat={closeModalFastChat}  goTovar={goTovar} goProfile={goProfile} clickCloseModalChat={clickCloseModalChat} fastChat={fastChat} clickOpenModalPetition={clickOpenModalPetition}/>
                : null
            }
        </div>
    );
}

export default LayoutBtn;
