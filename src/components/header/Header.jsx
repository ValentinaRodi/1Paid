import "./header.css";
import logo from "../../assets/images/logo.svg";
import { useState} from 'react';


function Header() {
  const [displayMenu, setClickedDisplayMenu] = useState('display');
  const [fonMenu, setClickedFonMenu] = useState('');

  const openBurgerMenu = () => {
    setClickedDisplayMenu('');
    setClickedFonMenu('header_fon');
  }

  const closeBurgerMenu = () => {
    setClickedDisplayMenu('display');
    setClickedFonMenu('');
  }

  return (
    <header className={fonMenu || "relative pt-4 wrapper flex items-center justify-between m-auto"}>
      <div>
        <div className="logo 3xl:w-[150px] xl:w-[188px] lg:w-auto lg:flex-shrink-1 lg:basis-[130px]">
          <img className="logo-pic" src={logo} alt="1paid.ru" />
        </div>
      </div>
      <nav className="navs bg-[#FFFFFF0F] gap-7 flex flex-wrap px-8 py-3 mt-1 rounded-xl mr-6">
        <a
          className="navs-link text-[#78717e] font-medium text-sm uppercase"
          href="#"
        >
          Главная
        </a>
        <a
          className="navs-link text-[#78717e] font-medium text-sm uppercase"
          href="#"
        >
          Каталог
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
      <div className="flex items-center">
        <button className="vk bg-inherit bg-no-repeat bg-cover bg-center p-0 rounded-full w-12 h-12 mr-4 md:mr-5"></button>
        <button className="bg-[#E1E1F1] h-btn hover:text-white mr-0 xl:mr-3 h-9 md:h-11 w-18 lg:w-24 lg:w-28 rounded-xl uppercase text-xs md:text-base font-bold text-slate-700">
          Войти
        </button>
      </div>
      <button onClick={openBurgerMenu} className="menu-open p-0 bg-inherit flex-shrink-0 w-[50px] h-[50px] justify-center items-center flex-col gap-4 cursor-pointer">
        <span className="w-[30px] h-[3px] bg-white rounded-full"></span>
        <span className="w-[30px] h-[3px] bg-white rounded-full"></span>
      </button>
      <div className={displayMenu || "absolute inset-0 z-10 flex justify-between"}>
        <nav className="gap-7 flex flex-col pt-11 rounded-xl">
          <a
            className="navs-link text-[#78717e] w-[40%] font-medium text-base uppercase"
            href="#"
          >
            Главная
          </a>
          <a
            className="navs-link text-[#78717e] w-[38%] font-medium text-base uppercase"
            href="#"
          >
            Каталог
          </a>
          <a
            className="navs-link text-[#78717e] w-[55%] font-medium text-base uppercase"
            href="#"
          >
            Топ юзеров
          </a>
          <a
            className="navs-link text-[#78717e] w-[38%] font-medium text-base uppercase"
            href="#"
          >
            Отзывы
          </a>
          <a
            className="navs-link text-[#78717e] w-[45%] font-medium text-base uppercase"
            href="#"
          >
            Гарантии
          </a>
          <a
            className="navs-link text-[#78717e] font-medium text-base uppercase"
            href="#"
          >
            Случайные предметы
          </a>
          <a
            className="navs-link text-[#78717e] w-[32%] font-medium text-base uppercase"
            href="#"
          >
            Форум
          </a>
        </nav>
        <div className="pt-8">
          <bitton onClick={closeBurgerMenu}>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.45">
                <path
                  d="M0.393485 19.6065C-0.131162 19.0787 -0.131162 18.2264 0.393485 17.6986L17.619 0.473027C17.9497 0.086871 18.469 -0.081333 18.9633 0.0375705C19.4576 0.156474 19.8435 0.542417 19.9624 1.03672C20.0813 1.53103 19.9131 2.05027 19.527 2.38096L2.30142 19.6065C1.77364 20.1312 0.921263 20.1312 0.393485 19.6065Z"
                  fill="white"
                />
                <path
                  d="M0.393485 0.472953C0.921263 -0.0516939 1.77364 -0.0516939 2.30142 0.472953L19.527 17.6985C19.9131 18.0292 20.0813 18.5484 19.9624 19.0427C19.8435 19.5371 19.4576 19.923 18.9633 20.0419C18.469 20.1608 17.9497 19.9926 17.619 19.6064L0.393485 2.38089C-0.131162 1.85311 -0.131162 1.00073 0.393485 0.472953Z"
                  fill="white"
                />
              </g>
            </svg>
          </bitton>
        </div>
      </div>
    </header>
  );
}

export default Header;