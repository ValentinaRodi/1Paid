import "./footerMain.less";
import { useNavigate  } from 'react-router-dom';

function FooterMain() {
  const navigate = useNavigate();

  const goContacts = () => {
    navigate('/contacts');
    window.scrollTo({ 
      top: 0,  
    }); 
  };

  const goFaq = () => {
    navigate('/faq');
    window.scrollTo({ 
      top: 0,  
    }); 
  };

  return (
    <footer className="footer flex justify-between h-[114px] px-[16px] sm:px-[30px] min-[1270px]:px-[80px] items-center gap-4 sm:gap-8 text-sm z-[5] relative">
      <div className="footer-copy leading-[10px] sm:leading-[14px] lg:leading-[16px] text-[8px] sm:text-[12px] lg:text-[14px]">1paid.ru — Маркетплейс по продажам цифровых <br/>товаров. © 2024, Все права защищены.</div>
      <div className="footer-list flex  gap-x-8 sm:gap-x-8 gap-y-2 sm:gap-y-2 flex-wrap">
        <button className="hover:text-white duration-200 bg-inherit text-start leading-[10px] sm:leading-[14px] lg:leading-[16px] text-[8px] sm:text-[12px] lg:text-[14px]">Пользовательское соглашение</button>
        <button onClick={goContacts} className="hover:text-white duration-200 bg-inherit leading-[10px] sm:leading-[14px] lg:leading-[16px] text-[8px] sm:text-[12px] lg:text-[14px]">Контакты</button>
        <button onClick={goFaq} className="hover:text-white duration-200 bg-inherit leading-[10px] sm:leading-[14px] lg:leading-[16px] text-[8px] sm:text-[12px] lg:text-[14px]">Частые вопросы</button>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-5">
        <div className="flex gap-2 sm:gap-5">
          <button className="shrink-1 sm:shrink-0 leading-none duration-200 bg-inherit">
              <img className="footer-soc-icon" src="/img/icon-inst-grey.62109207.svg" alt="instagram"/>
          </button>
          <button className="shrink-1 sm:shrink-0 leading-none duration-200 bg-inherit">
              <img className="footer-soc-icon" src="/img/icon-discord-grey.c77ff220.svg" alt="discrod"/>
          </button>
        </div>
        <div className="flex gap-2 sm:gap-5">
          <button className="shrink-1 sm:shrink-0 leading-none duration-200 bg-inherit">
              <img className="footer-soc-icon" src="/img/icon-vk-grey.349c1aa3.svg" alt="vk"/>
          </button>
          <button className="shrink-1 sm:shrink-0 leading-none duration-200 bg-inherit">
              <img className="footer-soc-icon" src="/img/icon-yt-grey.4134affa.svg" alt="youtube"/>
          </button>
        </div>
      </div>
  </footer>
  )  
}

export default FooterMain;