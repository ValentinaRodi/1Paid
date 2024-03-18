import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate  } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import Authorisation from './authorisation/Authorisation';

function LayoutBtn(props) {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const body = document.querySelector('body');

    const scrollToTop = () =>{ 
        window.scrollTo({ 
            top: 0,  
            behavior: 'smooth'
        }); 
    }; 

    const openAuthorization = () => {
        body.style.overflow = 'hidden';
        setModalEl(<Authorisation
            closeModal={closeModal}
        />);
        setModalOpen(true);
    };

    const closeModal = () =>{
        body.style.overflow = 'auto';
        setModalOpen(false);
        setModalEl('');
    };

    const goMyMessages = () => {
        if(!isAuthenticated) {
            openAuthorization();
        } else {
            navigate('/my-messages');
        };
        window.scrollTo({ 
            top: 0,  
        }); 
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
    
    return (
        <div className="layout-b-f flex justify-between mt-6 mb-6 w-full">
            <div>
                {props.toTop ?
                    <button onClick={scrollToTop} className="layout-btn-totop scroll-to-top rounded-full w-16 h-16 flex items-center justify-center bg-[#D7DFF5] hover:bg-[#d0d8f3] shadow-2xl ">
                        <div className=" flex items-center ">
                            <img src="/img/icon-btn-icon-12.svg" alt="btn-icon"/>
                        </div>
                    </button>
                    : null
                }
            </div>
            <button onClick={goMyMessages} className="layout-btn-openchat open-fast-chat rounded-full rounded-br-none w-[65px] h-[65px] flex items-center justify-center bg-gradient-primary shadow-2xl ">
                <div className="btn-icon text-[#BDC6E0] w-[22px] h-[19px] [&amp;_svg]:w-full [&amp;_svg]:h-full text-white">
                    <img src="/img/icon-btn-icon-13.svg" alt="btn-icon"/>
                </div>
            </button>
        </div>
    );
}

export default LayoutBtn;
