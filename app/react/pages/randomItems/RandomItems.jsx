import React, { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import Prsl from '../../components/prsl/Prsl';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { createRoot } from "react-dom/client";
import Authorisation from '../../components/authorisation/Authorisation';
import Registration from '../../components/registration/Registration';
import RecPass from '../../components/recpass/Recpass';
import { useNavigate  } from 'react-router-dom';
import RandomCard from '../../components/randomCard/RandomCard';
import Title from '../../components/title/Title';

function RandomItems() {
    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const body = document.querySelector('body');
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

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

    const clickRoulette = () => {
        if(!isAuthenticated) {
            openAuthorization();
        } else {
            navigate('/roulette');
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
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full layout-main">
                <Prsl />
                <div className="sri mt-5">
                    <Title title='Случайные предметы'/>
                    <div className="sri-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
                        <RandomCard clickRoulette={clickRoulette} iconBg='case-card-bg-pink.97f9baea.png' icon='case-pink.17c520f2.png' name='rose' price='1990' />
                        <RandomCard clickRoulette={clickRoulette} iconBg='case-card-bg-pink.97f9baea.png' icon='case-pink.17c520f2.png' name='rose' price='1990' />
                        <RandomCard clickRoulette={clickRoulette} iconBg='case-card-bg-pink.97f9baea.png' icon='case-pink.17c520f2.png' name='rose' price='1990' />
                        <RandomCard clickRoulette={clickRoulette} iconBg='case-card-bg-blue.3960969d.png' icon='case-blue.6568b466.png' name='farm' price='1990' />
                        <RandomCard clickRoulette={clickRoulette} iconBg='case-card-bg-blue.3960969d.png' icon='case-blue.6568b466.png' name='farm' price='1990' />
                        <RandomCard clickRoulette={clickRoulette} iconBg='case-card-bg-blue.3960969d.png' icon='case-blue.6568b466.png' name='farm' price='1990' />
                        <RandomCard clickRoulette={clickRoulette} iconBg='case-card-bg-gold.c93e1483.png' icon='case-gold.dea4179e.png' name='yello' price='1990' discount='15' pricePD='1990'/>
                        <RandomCard clickRoulette={clickRoulette} iconBg='case-card-bg-gold.c93e1483.png' icon='case-gold.dea4179e.png' name='yello' price='1990' discount='15' pricePD='1990'/>
                        <RandomCard clickRoulette={clickRoulette} iconBg='case-card-bg-gold.c93e1483.png' icon='case-gold.dea4179e.png' name='yello' price='1990' discount='15' pricePD='1990'/>
                    </div>
                </div>
            </div>
            <LayoutBtn toTop='true'/>
        </div>
    );
};

export default RandomItems;