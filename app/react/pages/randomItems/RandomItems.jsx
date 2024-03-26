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

    useEffect(() => {
        const headerHeight = document.querySelector('.layout-h').getBoundingClientRect().height;
        const mainHeight = document.querySelector('.layout-main').getBoundingClientRect().height;
        const totalHeight = headerHeight + mainHeight;
        document.querySelector('.lf-feed').style.height = totalHeight + "px";
    }, []);

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full layout-main">
                <Prsl />
                <div className="sri mt-5">
                    <div className="sh flex justify-between items-center gap-x-3 mb-6">
                        <div className="w-[252px] hidden">
                            <img src="/img/icon-btn-13.svg" alt="btn-icon" className=""/>
                        </div>
                        <div className="sh-title ">
                            <div >
                                <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Случайные предметы</h2>
                                <div className="sh-title-line mt-2 rounded-full w-9 h-1 bg-gradient-primary"></div>
                            </div>
                        </div>
                    </div>
                    <div className="sri-grid grid grid-cols-3 gap-3 ">
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