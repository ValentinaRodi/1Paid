import "./footerMain.less";
import { Link } from 'react-router-dom';

function FooterMain() {
  return (
    <footer  className="footer flex justify-between items-center gap-8 text-sm z-[100] relative">
      <div  className="footer-copy max-w-sm ">1paid.ru — Маркетплейс по продажам цифровых товаров. © 2023, Все права защищены.</div>
      <div  className="footer-list flex  gap-x-8 gap-y-2.5 flex-wrap">
        <Link  className="hover:text-white duration-200" href="#">Пользовательское соглашение</Link>
        <Link  className="hover:text-white duration-200" href="/tech-support">Контакты</Link>
        <Link  className="hover:text-white duration-200" href="/faq">Частые вопросы</Link>
      </div>
      <div  className="footer-soc flex flex-wrap">
        <Link  className="shrink-0 leading-none duration-200" href="#">
            <img  className="footer-soc-icon" src="/img/icon-inst-grey.62109207.svg" alt="instagram"/>
        </Link>
        <Link  className="shrink-0 leading-none duration-200" href="#">
            <img  className="footer-soc-icon" src="/img/icon-discord-grey.c77ff220.svg" alt="discrod"/>
        </Link>
        <Link  className="shrink-0 leading-none duration-200" href="#">
            <img  className="footer-soc-icon" src="/img/icon-vk-grey.349c1aa3.svg" alt="vk"/>
        </Link>
        <Link  className="shrink-0 leading-none duration-200" href="#">
            <img  className="footer-soc-icon" src="/img/icon-yt-grey.4134affa.svg" alt="youtube"/>
        </Link>
      </div>
  </footer>
  )  
}

export default FooterMain;