import "./footerMain.less";
//import instagram from "../../../../web/img/icon-inst-grey.62109207.svg";
//import discord from "../../../../web/img/icon-discord-grey.c77ff220.svg";
//import vk from "../../../../web/img/icon-vk-grey.349c1aa3.svg";
//import youtube from "../../../../web/img/icon-yt-grey.4134affa.svg";

function FooterMenu() {
    return (
        <footer className="flex justify-between h-[10%] items-center self-center flex-wrap gap-8 text-sm 2md:flex-col 2md:gap-4 2md:text-center">
        <div className="footer-copy max-w-sm 2md:max-w-none 2md:order-1 2md:text-xs text-[#9e9e9f]">
          1paid.ru — Маркетплейс по продажам цифровых товаров. © 2023, Все права
          защищены.
        </div>
        <div className="footer-list flex flex-wrap gap-x-8 gap-y-2.5 2md:flex-col">
          <a className="hover:text-white duration-200 text-[#9e9e9f]" href="#">
            Пользовательское соглашение
          </a>
          <a className="hover:text-white duration-200 text-[#9e9e9f]" href="#">
            Контакты
          </a>
          <a className="hover:text-white duration-200 text-[#9e9e9f]" href="#">
            Частые вопросы
          </a>
        </div>
        <div className="footer-soc flex gap-5 2md:flex-wrap 2md:justify-center">
          <a className="shrink-0 leading-none duration-200" href="#">
            <img
              className="footer-soc-icon"
              src="../../../../web/img/icon-inst-grey.62109207.svg"
              alt="disrcod"
            />
          </a>
          <a className="shrink-0 leading-none duration-200" href="#">
            <img
              className="footer-soc-icon"
              src={discrod}
              alt="discrod"
            />
          </a>
          <a className="shrink-0 leading-none duration-200" href="#">
            <img
              className="footer-soc-icon"
              src={vk}
              alt="vk"
            />
          </a>
          <a className="shrink-0 leading-none duration-200" href="#">
            <img
              className="footer-soc-icon"
              src={youtube}
              alt="youtube"
            />
          </a>
        </div>
      </footer>
    )
    
}

export default FooterMenu;