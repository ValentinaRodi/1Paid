/* eslint-disable react/prop-types */
import "./header.less";
import { useState} from 'react';
import { useNavigate } from "react-router-dom";



function Header(props) {
  
  

  
  

  

  

 

  return (
    <header className={props.fonMenu || "relative w-full flex h-[120px] md:h-[13%] mb-[2%] md:mb-0 items-center justify-between self-center"}>
      <div className="logo 3xl:w-[150px] xl:w-[188px] lg:w-[170px] md:w-[150px] w-[120px] flex-shrink-0">
        <img className="logo-pic" src='img/logo.svg' alt="1paid.ru" />
      </div>
      <div className="w-full">
        <nav className="navs bg-[#FFFFFF0F] gap-7 flex flex-wrap px-8 py-3 mt-1 rounded-xl mr-6">
          <a
            className="navs-link text-[#78717e] font-medium text-sm uppercase"
            href='#'
            onClick={props.openMainPage}
          >
            Главная
          </a>
          <a
            className="navs-link text-[#78717e] font-medium text-sm uppercase"
            href="#"
          >
            Топ юзеров
          </a>
          <a
            className="navs-link text-[#78717e] font-medium text-sm uppercase"
            href="#"
          >
            Отзывы
          </a>
          <a
            className="navs-link text-[#78717e] font-medium text-sm uppercase"
            href="#"
          >
            Гарантии
          </a>
          <a
            className="navs-link text-[#78717e] font-medium text-sm uppercase"
            href="#"
          >
            Случайные предметы
          </a>
          <a
            className="navs-link text-[#78717e] font-medium text-sm uppercase"
            href="#"
          >
            Форум
          </a>
        </nav>
      </div>
      
      <div className="flex items-center">
        <button className="vk bg-inherit bg-no-repeat bg-cover bg-center p-0 rounded-full w-12 h-12 mr-4 md:mr-5"></button>
        <button onClick={props.openAuthorization} className="bg-[#E1E1F1] h-btn hover:text-white mr-0 xl:mr-3 h-9 md:h-11 w-20 md:w-24 lg:w-28 rounded-xl uppercase text-xs md:text-base font-bold text-slate-700">
          Войти
        </button>
      </div>
      <button onClick={props.openBurgerMenu} className="menu-open p-0 bg-inherit flex-shrink-0 w-[50px] h-[50px] justify-center items-center flex-col gap-4 cursor-pointer">
        <span className="w-[30px] h-[3px] bg-white rounded-full"></span>
        <span className="w-[30px] h-[3px] bg-white rounded-full"></span>
      </button>
     
    </header>
  );
}

export default Header;