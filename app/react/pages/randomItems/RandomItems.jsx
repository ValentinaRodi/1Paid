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
                        <div className="csc rounded-lg min-h-[235px] flex flex-grow ">
                            <div className="csc-bg">
                                <img className="csc-bg-pic" src="/img/case-card-bg-pink.97f9baea.png" alt="picture"/>
                            </div>
                        <div className="csc-case">
                            <img className="csc-case-pic" src="/img/case-pink.17c520f2.png" alt="picture"/>
                        </div>
                        <div className="csc-inner p-6 inline-flex flex-col items-start">
                            <div className="csc-type font-secondary-bold text-base text-white">Рулетка</div>
                            <div className="csc-title font-primary-bold italic text-[45px] tracking-wider uppercase leading-none ">rose</div>
                            <div className="csc-value mt-3 mb-5 rounded-full h-10 min-w-[100px] px-8 inline-flex justify-center items-center bg-gradient-primary">
                            <div className="csc-value-text font-primary-bold text-base text-white ">1990₽</div>
                        </div>
                            <button onClick={clickRoulette} className="btn btn-secondary csc-btn mt-auto rounded-full h-[45px] px-6 justify-center">
                                <div className="btn-text font-primary-bold text-xs text-white uppercase">Крутить рулетку</div>
                            </button>
                        </div>
                        </div>
                        <div className="csc rounded-lg min-h-[235px] flex flex-grow 2md:flex-shrink-0">
                            <div className="csc-bg">
                                <img className="csc-bg-pic" src="/img/case-card-bg-pink.97f9baea.png" alt="picture"/>
                            </div>
                        <div className="csc-case">
                            <img className="csc-case-pic" src="/img/case-pink.17c520f2.png" alt="picture"/>
                        </div>
                        <div className="csc-inner p-6 inline-flex flex-col items-start ">
                            <div className="csc-type font-secondary-bold text-base text-white ">Рулетка</div>
                            <div className="csc-title font-primary-bold italic text-[45px] tracking-wider uppercase leading-none ">rose</div>
                            <div className="csc-value mt-3 mb-5 rounded-full h-10 min-w-[100px] px-8 inline-flex justify-center items-center bg-gradient-primary">
                                <div className="csc-value-text font-primary-bold text-base text-white ">1990₽</div>
                            </div>
                            <Link className="btn btn-secondary csc-btn mt-auto rounded-full h-[45px] px-6 justify-center" href="#">
                                <div className="btn-text font-primary-bold text-xs text-white uppercase">Крутить рулетку</div>
                            </Link>
                        </div>
                        </div>
                        <div className="csc rounded-lg min-h-[235px] flex  flex-grow ">
                            <div className="csc-bg">
                                <img className="csc-bg-pic" src="/img/case-card-bg-pink.97f9baea.png" alt="picture"/>
                            </div>
                            <div className="csc-case">
                                <img className="csc-case-pic" src="/img/case-pink.17c520f2.png" alt="picture"/>
                            </div>
                            <div className="csc-inner p-6 inline-flex flex-col items-start ">
                                <div className="csc-type font-secondary-bold text-base text-white ">Рулетка</div>
                                <div className="csc-title font-primary-bold italic text-[45px] tracking-wider uppercase leading-none ">rose</div>
                                <div className="csc-value mt-3 mb-5 rounded-full h-10 min-w-[100px] px-8 inline-flex justify-center items-center bg-gradient-primary">
                                    <div className="csc-value-text font-primary-bold text-base text-white ">1990₽</div>
                                    </div>
                                    <Link className="btn btn-secondary csc-btn mt-auto rounded-full h-[45px] px-6 justify-center " href="#">
                                        <div className="btn-text font-primary-bold text-xs text-white uppercase">Крутить рулетку</div>
                                    </Link>
                                </div>
                        </div>
                        <div className="csc rounded-lg min-h-[235px] flex flex-grow ">
                            <div className="csc-bg">
                                <img className="csc-bg-pic" src="/img/case-card-bg-blue.3960969d.png" alt="picture"/>
                            </div>
                            <div className="csc-case">
                                <img className="csc-case-pic" src="/img/case-blue.6568b466.png" alt="picture"/>
                            </div>
                            <div className="csc-inner p-6 inline-flex flex-col items-start ">
                                <div className="csc-type font-secondary-bold text-base text-white ">Рулетка</div>
                                <div className="csc-title font-primary-bold italic text-[45px] tracking-wider uppercase leading-none">farm</div>
                                <div className="csc-value mt-3 mb-5 rounded-full h-10 min-w-[100px] px-8 inline-flex justify-center items-center bg-gradient-secondary">
                                    <div className="csc-value-text font-primary-bold text-base text-white ">1990₽</div>
                                </div>
                                <Link className="btn btn-secondary csc-btn mt-auto rounded-full h-[45px] px-6 justify-center" href="#">
                                    <div className="btn-text font-primary-bold text-xs text-white uppercase">Крутить рулетку</div>
                                </Link>
                            </div>
                        </div>
                        <div className="csc rounded-lg min-h-[235px] flex flex-grow ">
                            <div className="csc-bg">
                                <img className="csc-bg-pic" src="/img/case-card-bg-blue.3960969d.png" alt="picture"/>
                            </div>
                            <div className="csc-case">
                                <img className="csc-case-pic" src="/img/case-blue.6568b466.png" alt="picture"/>
                            </div>
                            <div className="csc-inner p-6 inline-flex flex-col items-start">
                                <div className="csc-type font-secondary-bold text-base text-white">Рулетка</div>
                                <div className="csc-title font-primary-bold italic text-[45px] tracking-wider uppercase leading-none">farm</div>
                                <div className="csc-value mt-3 mb-5 rounded-full h-10 min-w-[100px] px-8 inline-flex justify-center items-center bg-gradient-secondary">
                                    <div className="csc-value-text font-primary-bold text-base text-white">1990₽</div>
                                </div>
                                <Link className="btn btn-secondary csc-btn mt-auto rounded-full h-[45px] px-6 justify-center" href="#">
                                    <div className="btn-text font-primary-bold text-xs text-white uppercase">Крутить рулетку</div>
                                </Link>
                            </div>
                        </div>
                        <div className="csc rounded-lg min-h-[235px] flex flex-grow">
                            <div className="csc-bg">
                                <img className="csc-bg-pic" src="/img/case-card-bg-blue.3960969d.png" alt="picture"/>
                            </div>
                            <div className="csc-case">
                                <img className="csc-case-pic" src="/img/case-blue.6568b466.png" alt="picture"/>
                            </div>
                            <div className="csc-inner p-6 inline-flex flex-col items-start ">
                                <div className="csc-type font-secondary-bold text-base text-white ">Рулетка</div>
                                <div className="csc-title font-primary-bold italic text-[45px] tracking-wider uppercase leading-none ">farm</div>
                                <div className="csc-value mt-3 mb-5 rounded-full h-10 min-w-[100px] px-8 inline-flex justify-center items-center lg:min-w-[80px] bg-gradient-secondary">
                                    <div className="csc-value-text font-primary-bold text-base text-white ">1990₽</div>
                                </div>
                                <Link className="btn btn-secondary csc-btn mt-auto rounded-full h-[45px] px-6 justify-center" href="#">
                                    <div className="btn-text font-primary-bold text-xs text-white uppercase">Крутить рулетку</div>
                                </Link>
                            </div>
                        </div>
                        <div className="csc rounded-lg min-h-[235px] flex flex-grow">
                            <div className="csc-bg">
                                <img className="csc-bg-pic" src="/img/case-card-bg-gold.c93e1483.png" alt="picture"/>
                            </div>
                            <div className="csc-case">
                                <img className="csc-case-pic" src="/img/case-gold.dea4179e.png" alt="picture"/>
                            </div>
                            <div className="csc-inner p-6 inline-flex flex-col items-start">
                                <div className="csc-type font-secondary-bold text-base text-white ">Рулетка</div>
                                <div className="csc-title font-primary-bold italic text-[45px] tracking-wider uppercase leading-none">yello</div>
                                <div className="csc-value mt-3 mb-5 rounded-full h-10 min-w-[100px] px-8 inline-flex justify-center items-center bg-gradient-primary">
                                    <div className="csc-value-text font-primary-bold text-base text-white ">1990₽</div>
                                    <div className="csc-value-attach-bottom bg-gradient-secondary rounded-full h-5 flex items-center justify-center font-primary-bold text-[11px] text-white px-1.5">1990PD</div>
                                    <div className="csc-value-attach-top rounded-full h-5 px-1 py-[1px] flex items-center font-primary-bold text-sm text-white leading-[0]"><div>15%</div></div>
                                </div>
                                <Link className="btn btn-secondary csc-btn mt-auto rounded-full h-[45px] px-6 justify-center " href="#">
                                    <div className="btn-text font-primary-bold text-xs text-white uppercase">Крутить рулетку</div>
                                </Link>
                            </div>
                        </div>
                        <div className="csc rounded-lg min-h-[235px] flex flex-grow ">
                            <div className="csc-bg">
                                <img className="csc-bg-pic" src="/img/case-card-bg-gold.c93e1483.png" alt="picture"/>
                            </div>
                            <div className="csc-case">
                                <img className="csc-case-pic" src="/img/case-gold.dea4179e.png" alt="picture"/>
                            </div>
                            <div className="csc-inner p-6 inline-flex flex-col items-start">
                                <div className="csc-type font-secondary-bold text-base text-white ">Рулетка</div>
                                <div className="csc-title font-primary-bold italic text-[45px] tracking-wider uppercase leading-none ">yello</div>
                                <div className="csc-value mt-3 mb-5 rounded-full h-10 min-w-[100px] px-8 inline-flex justify-center items-center bg-gradient-primary">
                                    <div className="csc-value-text font-primary-bold text-base text-white">1990₽</div>
                                    <div className="csc-value-attach-bottom bg-gradient-secondary rounded-full h-5 justify-center flex items-center font-primary-bold text-[11px] text-white  px-1.5 ">1990PD</div>
                                    <div className="csc-value-attach-top rounded-full h-5 px-1 py-[1px] flex items-center font-primary-bold text-sm text-white leading-[0] ">15%</div>
                                </div>
                                <Link className="btn btn-secondary csc-btn mt-auto rounded-full h-[45px] px-6 justify-center " href="#">
                                    <div className="btn-text font-primary-bold text-xs text-white uppercase">Крутить рулетку</div>
                                </Link>
                            </div>
                        </div>
                        <div className="csc rounded-lg min-h-[235px] flex md:min-h-[200px] flex-grow ">
                            <div className="csc-bg">
                                <img className="csc-bg-pic" src="/img/case-card-bg-gold.c93e1483.png" alt="picture"/>
                            </div>
                            <div className="csc-case">
                                <img className="csc-case-pic" src="/img/case-gold.dea4179e.png" alt="picture"/>
                            </div>
                            <div className="csc-inner p-6 inline-flex flex-col items-start">
                                <div className="csc-type font-secondary-bold text-base text-white ">Рулетка</div>
                                <div className="csc-title font-primary-bold italic text-[45px] tracking-wider uppercase leading-none ">yello</div>
                                <div className="csc-value mt-3 mb-5 rounded-full h-10 min-w-[100px] px-8 inline-flex justify-center items-center bg-gradient-primary">
                                    <div className="csc-value-text font-primary-bold text-base text-white ">1990₽</div>
                                    <div className="csc-value-attach-bottom bg-gradient-secondary rounded-full h-5 justify-center flex items-center font-primary-bold text-[11px] text-white  px-1.5">1990PD</div>
                                    <div className="csc-value-attach-top rounded-full h-5 px-1 py-[1px] flex items-center font-primary-bold text-sm text-white leading-[0] ">15%</div>
                                </div>
                                <Link className="btn btn-secondary csc-btn mt-auto rounded-full h-[45px] px-6 justify-center " href="#">
                                    <div className="btn-text font-primary-bold text-xs text-white uppercase">Крутить рулетку</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LayoutBtn toTop='true'/>
        </div>
    );
};

export default RandomItems;