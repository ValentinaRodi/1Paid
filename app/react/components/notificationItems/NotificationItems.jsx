import { useNavigate  } from 'react-router-dom';

function NotificationItems(props) {
  const navigate = useNavigate();

  const goForumTheme = () => {
    navigate('/forum');
  };

  const goProfile = () => {
    navigate('/profile',  { state: {userName:props.userName } });
  };

  return (
      <div >
          {props.bonus ?
              <div className="nc rounded-xl p-3 sm:p-6 bg-white ">
                  <div className="nc-icon rounded-full w-[50px] h-[50px] flex items-center justify-center text-white [&amp;_svg]:max-w-[50%] bg-gradient-secondary ">
                    <img src="/img/icon-btn-icon-2.svg" alt="btn-icon"/>
                  </div>
                  <div className="nc-text font-secondary-bold text-base sm:text-lg text-[#1D222C] [&amp;_a]:text-[#1E61EB] ">Вы получили бонус + {props.sum} рублей.</div>
                  <div className="nc-date">
                    <div className="nc-date-label font-secondary-med text-xs text-[#969BA5] ">Дата</div>
                    <div className="nc-date-value font-secondary-bold text-sm sm:text-base text-[#1D222C] ">{props.date}</div>
                  </div>
                  <button className="nc-btn bg-inherit rounded-full w-11 h-11 border border-solid border-black/10 flex items-center justify-center " disabled="">
                    <div className="btn-icon [&amp;_svg]:w-4  [&amp;_svg]:text-black/10">
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.944329 5.62321L13.4 5.62321L11.1809 8.44201C11.0235 8.64128 10.9509 8.89608 10.9793 9.14987C11.0077 9.40366 11.1346 9.63547 11.3319 9.79388C11.7393 10.1202 12.3297 10.0517 12.654 9.64048L15.7514 5.71908C16.0829 5.29876 16.0829 4.70124 15.7514 4.28092L12.654 0.359522C12.3297 -0.0517052 11.7393 -0.120209 11.3319 0.206118C11.1346 0.364527 11.0077 0.596337 10.9793 0.85013C10.9509 1.10392 11.0235 1.35872 11.1809 1.55799L12.8806 3.70565L0.944329 3.70565C0.42279 3.70565 0 4.13491 0 4.66443C0 5.19395 0.42279 5.62321 0.944329 5.62321Z" fill="black" fillOpacity="0.1"/>
                      </svg>
                    </div>
                  </button>
              </div>
              : null
          }
          {props.theme ?
              <div className="nc rounded-xl p-3 sm:p-6 bg-white ">
                  <div className="nc-icon rounded-full w-[50px] h-[50px] flex items-center justify-center text-white [&amp;_svg]:max-w-[50%] bg-gradient-secondary ">
                    <img src="/img/icon-btn-icon-2.svg" alt="btn-icon"/>
                  </div>
                  <div className="nc-text font-secondary-bold text-base sm:text-lg text-[#1D222C] [&amp;_a]:text-[#1E61EB] sm:overflow-hidden sm:text-ellipsis sm:whitespace-nowrap">
                      <button onClick={goProfile} className="bg-inherit text-[#1E61EB]">{props.userName}</button> ответил(а) в теме <button onClick={goForumTheme} className="bg-inherit text-[#1E61EB] text-start">{props.theme}</button>
                  </div>
                  <div className="nc-date">
                    <div className="nc-date-label font-secondary-med text-xs text-[#969BA5]">Дата</div>
                    <div className="nc-date-value font-secondary-bold text-sm sm:text-base text-[#1D222C]">{props.date}</div>
                  </div>
                  <button onClick={goForumTheme} className="nc-btn bg-inherit rounded-full w-11 h-11 border border-solid border-black/10 flex items-center justify-center hover:bg-black/5">
                    <div className="btn-icon">
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.944329 5.62321L13.4 5.62321L11.1809 8.44201C11.0235 8.64128 10.9509 8.89608 10.9793 9.14987C11.0077 9.40366 11.1346 9.63547 11.3319 9.79388C11.7393 10.1202 12.3297 10.0517 12.654 9.64048L15.7514 5.71908C16.0829 5.29876 16.0829 4.70124 15.7514 4.28092L12.654 0.359522C12.3297 -0.0517052 11.7393 -0.120209 11.3319 0.206118C11.1346 0.364527 11.0077 0.596337 10.9793 0.85013C10.9509 1.10392 11.0235 1.35872 11.1809 1.55799L12.8806 3.70565L0.944329 3.70565C0.42279 3.70565 0 4.13491 0 4.66443C0 5.19395 0.42279 5.62321 0.944329 5.62321Z" fill="black" fillOpacity="1"/>
                      </svg>
                    </div>
                  </button>
              </div>
              : null
          }
      </div>
  )
}

export default NotificationItems;
