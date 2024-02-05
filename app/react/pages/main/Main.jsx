import { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderMain from '../../components/headerMain/HeaderMain';

import Catalog from '../catalog/Catalog';
import LeftMenu from '../../components/leftMenu/LeftMenu';
import LayoutColRow from '../../components/LayoutColRow';
import Registration from '../../components/registration/Registration';
import Authorization from "../../components/authorization/Authorization";
import RecPass from '../../components/recpass/Recpass';

import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';


import Cards from '../../components/cards/Cards';
import Prsl from '../../components/prsl/Prsl';
import LayoutBtn from '../../components/LayoutBtn';

function Main() {

    // window.onpopstate = function() {
    //     setCatalog(false);
    // };

    return (
       
        <div className={`layout-b pb-4 min-w-0`}>
            <div>
                <Prsl />
                <div className="sh flex justify-between items-center gap-x-3 mt-8 xl:mt-16 mb-10">
                    <div className="w-[252px] hidden">
                        <img src="/img/icon-btn-13.svg" alt="btn-icon" className=""/>
                    </div>
                    <div className="sh-title ">
                        <div >
                            <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Выбор игры</h2>
                            <div className="sh-title-line mt-2 rounded-full w-9 h-1 2md:mt-2 bg-gradient-primary">
                            </div>
                        </div>
                    </div>
                    <div className="sh-bar flex items-center gap-2 2md:w-full 2md:flex-row-reverse">
                        <div className="sh-search rounded-full h-[50px] px-6 max-w-[270px] w-full flex items-center bg-[#E8EAF7] 2md:max-w-none 2md:flex-grow 2md:h-10 2md:px-3">
                            <button className="sh-search-icon bg-inherit flex-shrink-0 w-4 h-full [&amp;_svg]:w-full flex justify-center items-center text-[#B8BACF] duration-100 hover:text-black">
                                <img src="/img/icon-sh-search-icon.svg" alt="sh-search-icon"/>
                            </button>
                            <input className="sh-search-input flex-grow ml-2.5 w-full h-full bg-transparent font-primary-med text-base text-black 2md:text-sm" placeholder="Поиск"/>
                        </div>
                    </div>
                </div>
                <Cards />
                <LayoutBtn />
            </div>
        </div>  
          
    );
}

export default Main;
