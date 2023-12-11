import  './header.css';
import logo from '../../assets/images/logo.svg';

function Header() {
 
  return (
    <header className="pt-4 wrapper flex items-center justify-between m-auto">
        <div>
        <div className="logo 3xl:w-[150px] xl:w-[188px] lg:w-auto lg:flex-shrink-1 lg:basis-[130px]">
            <img className="logo-pic" src={logo} alt="1paid.ru"/>
        </div>
        </div>
        <nav className="navs bg-[#FFFFFF0F] gap-7 flex flex-wrap px-8 py-3 mt-1 rounded-xl mr-6">
            <a className="navs-link text-[#78717e] font-medium text-sm uppercase" href="#">Главная</a>
            <a className="navs-link text-[#78717e] font-medium text-sm uppercase" href="#">Каталог</a>
            <a className="navs-link text-[#78717e] font-medium text-sm uppercase" href="#">Топ юзеров</a>
            <a className="navs-link text-[#78717e] font-medium text-sm uppercase" href="#">Отзывы</a>
            <a className="navs-link text-[#78717e] font-medium text-sm uppercase" href="#">Гарантии</a>
            <a className="navs-link text-[#78717e] font-medium text-sm uppercase" href="#">Случайные предметы</a>
            <a className="navs-link text-[#78717e] font-medium text-sm uppercase" href="#">Форум</a>
        </nav>
        <div className="flex items-center">
            <button className="vk bg-[length:87px_70px] md:bg-[length:87px_87px] bg-no-repeat bg-cover bg-center p-0 rounded-full w-12 h-10 md:h-12 mr-2 md:mr-5"></button>
            <button className="bg-[#E1E1F1] h-btn hover:text-white mr-0 xl:mr-3 h-9 md:h-11 w-18 lg:w-24 lg:w-28 rounded-xl uppercase text-xs md:text-base font-bold text-slate-700">Войти</button>
        </div>
        <div className="menu-open flex-shrink-0 w-[50px] h-[50px] justify-center items-center flex-col gap-4 cursor-pointer">
            <span className="w-[30px] h-[3px] bg-white rounded-full"></span>
            <span className="w-[30px] h-[3px] bg-white rounded-full"></span>
        </div>
    </header>
  );
}

export default Header;