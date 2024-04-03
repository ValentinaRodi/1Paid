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
    <footer className="footer flex justify-between items-center gap-8 text-sm z-[50] relative">
      <div className="footer-copy max-w-sm ">1paid.ru — Маркетплейс по продажам цифровых товаров. © 2023, Все права защищены.</div>
      <div className="footer-list flex  gap-x-8 gap-y-2.5 flex-wrap">
        <button className="hover:text-white duration-200 bg-inherit">Пользовательское соглашение</button>
        <button onClick={goContacts} className="hover:text-white duration-200 bg-inherit">Контакты</button>
        <button onClick={goFaq} className="hover:text-white duration-200 bg-inherit">Частые вопросы</button>
      </div>
      <div className="footer-soc flex flex-wrap">
        <button className="shrink-0 leading-none duration-200 bg-inherit">
            <img className="footer-soc-icon" src="/img/icon-inst-grey.62109207.svg" alt="instagram"/>
        </button>
        <button className="shrink-0 leading-none duration-200 bg-inherit">
            <img className="footer-soc-icon" src="/img/icon-discord-grey.c77ff220.svg" alt="discrod"/>
        </button>
        <button className="shrink-0 leading-none duration-200 bg-inherit">
            <img className="footer-soc-icon" src="/img/icon-vk-grey.349c1aa3.svg" alt="vk"/>
        </button>
        <button className="shrink-0 leading-none duration-200 bg-inherit">
            <img className="footer-soc-icon" src="/img/icon-yt-grey.4134affa.svg" alt="youtube"/>
        </button>
      </div>
  </footer>
  )  
}

export default FooterMain;