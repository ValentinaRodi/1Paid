import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import { Link } from 'react-router-dom';

function MyNotifications() {
    // const [cardsView, setCardsView] = useState(true);
    // const [cardsViewImg, setCardsViewImg] = useState('/img/icon-cards-stroke.svg');
    // const [cardsViewDiv, setCardsViewDiv] = useState('');

    // const changeViewCards = () => {
    //     (cardsView) ? setCardsView(false) : setCardsView(true);
    //     (cardsViewImg === '/img/icon-card-tile.svg') ? setCardsViewImg('/img/icon-cards-stroke.svg') : setCardsViewImg('/img/icon-card-tile.svg');
    //     (cardsViewDiv === '') ? setCardsViewDiv('_view-list') : setCardsViewDiv(''); 
    // };

    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full">
              <div className="sntf mt-5">
                  <div className="sh flex justify-between items-center gap-x-3 mb-10">
                  <div className="flex flex-col justify-start">
                      <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Ваши уведомления</h2>
                      <div className="sh-title-line mt-2 rounded-full w-9 h-1 bg-gradient-primary">
                      </div>
                  </div>
                  <div className='flex justify-between items-center gap-2'>
                      {/* <button onClick={changeViewCards} className=" rounded-full bg-[#e8eaf7] hover:bg-[#dcdff1] w-11 h-11 flex justify-center items-center">
                          <div className="w-[50%] h-[50%] flex justify-center items-center">
                              <img src={cardsViewImg} alt="icon-card"/>
                          </div>
                      </button> */}
                      <div className="sh-bar flex items-center gap-2 2md:w-full 2md:flex-row-reverse">
                          <div className="sh-search rounded-full h-[45px] px-6 max-w-[270px] w-full flex items-center bg-[#E8EAF7] 2md:max-w-none 2md:flex-grow 2md:h-10 2md:px-3">
                              <button className="sh-search-icon cursor-pointer bg-inherit flex-shrink-0 w-4 h-full [&amp;_svg]:w-full flex justify-center items-center text-[#B8BACF] duration-100 hover:text-black">
                                  <img src="/img/icon-sh-search-icon.svg" alt="sh-search-icon"/>
                              </button>
                              <input className="sh-search-input flex-grow ml-2.5 w-full h-full bg-transparent font-primary-med text-base text-black 2md:text-sm" placeholder="Поиск"/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="sntf-grid mt-11 grid grid-cols-1 gap-3 ">
                <div className="nc rounded-xl p-6 bg-white ">
                  <div className="nc-icon rounded-full w-[50px] h-[50px] flex items-center justify-center text-white [&amp;_svg]:max-w-[50%] bg-gradient-secondary ">
                    <img src="/img/icon-btn-icon-2.svg" alt="btn-icon"/>
                  </div>
                  <div className="nc-text font-secondary-bold text-lg text-[#1D222C] [&amp;_a]:text-[#1E61EB] ">Вы получили бонус + 500 рублей.</div>
                  <div className="nc-date">
                    <div className="nc-date-label font-secondary-med text-xs text-[#969BA5] ">Дата</div>
                    <div className="nc-date-value font-secondary-bold text-base text-[#1D222C] ">27.02.2020 15:34</div>
                  </div>
                  <button className="nc-btn bg-inherit rounded-full w-11 h-11 border border-solid border-black/10 flex items-center justify-center " disabled="">
                    <div className="btn-icon [&amp;_svg]:w-4  [&amp;_svg]:text-black/10">
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.944329 5.62321L13.4 5.62321L11.1809 8.44201C11.0235 8.64128 10.9509 8.89608 10.9793 9.14987C11.0077 9.40366 11.1346 9.63547 11.3319 9.79388C11.7393 10.1202 12.3297 10.0517 12.654 9.64048L15.7514 5.71908C16.0829 5.29876 16.0829 4.70124 15.7514 4.28092L12.654 0.359522C12.3297 -0.0517052 11.7393 -0.120209 11.3319 0.206118C11.1346 0.364527 11.0077 0.596337 10.9793 0.85013C10.9509 1.10392 11.0235 1.35872 11.1809 1.55799L12.8806 3.70565L0.944329 3.70565C0.42279 3.70565 0 4.13491 0 4.66443C0 5.19395 0.42279 5.62321 0.944329 5.62321Z" fill="black" fill-opacity="0.1"/>
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="nc rounded-xl p-6 bg-white ">
                  <div className="nc-icon rounded-full w-[50px] h-[50px] flex items-center justify-center text-white [&amp;_svg]:max-w-[50%] bg-gradient-secondary ">
                    <img src="/img/icon-btn-icon-2.svg" alt="btn-icon"/>
                  </div>
                  <div className="nc-text font-secondary-bold text-lg text-[#1D222C] [&amp;_a]:text-[#1E61EB] overflow-hidden text-ellipsis whitespace-nowrap">
                      <a href="#">Lacoste17</a> ответил(а) в теме <a href="#">Бесплатная бесконечная</a>
                  </div>
                  <div className="nc-date">
                    <div className="nc-date-label font-secondary-med text-xs text-[#969BA5]">Дата</div>
                    <div className="nc-date-value font-secondary-bold text-base text-[#1D222C]">27.02.2020 15:34</div>
                  </div>
                  <button className="nc-btn bg-inherit rounded-full w-11 h-11 border border-solid border-black/10 flex items-center justify-center hover:bg-black/5">
                    <div className="btn-icon">
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.944329 5.62321L13.4 5.62321L11.1809 8.44201C11.0235 8.64128 10.9509 8.89608 10.9793 9.14987C11.0077 9.40366 11.1346 9.63547 11.3319 9.79388C11.7393 10.1202 12.3297 10.0517 12.654 9.64048L15.7514 5.71908C16.0829 5.29876 16.0829 4.70124 15.7514 4.28092L12.654 0.359522C12.3297 -0.0517052 11.7393 -0.120209 11.3319 0.206118C11.1346 0.364527 11.0077 0.596337 10.9793 0.85013C10.9509 1.10392 11.0235 1.35872 11.1809 1.55799L12.8806 3.70565L0.944329 3.70565C0.42279 3.70565 0 4.13491 0 4.66443C0 5.19395 0.42279 5.62321 0.944329 5.62321Z" fill="black" fill-opacity="1"/>
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="nc rounded-xl p-6 bg-white ">
                  <div className="nc-icon rounded-full w-[50px] h-[50px] flex items-center justify-center text-white [&amp;_svg]:max-w-[50%] bg-gradient-secondary ">
                    <img src="/img/icon-btn-icon-2.svg" alt="btn-icon"/>
                  </div>
                  <div className="nc-text font-secondary-bold text-lg text-[#1D222C] [&amp;_a]:text-[#1E61EB]  overflow-hidden text-ellipsis whitespace-nowrap">
                    <a href="#">Lacoste17</a> ответил(а) в теме <a href="#">Бесплатная бесконечная накрутка лайков на пост ВК. Подскажу как сделать накрутку легально</a>
                  </div>
                  <div className="nc-date">
                    <div className="nc-date-label font-secondary-med text-xs text-[#969BA5]">Дата</div>
                    <div className="nc-date-value font-secondary-bold text-base text-[#1D222C] ">27.02.2020 15:34</div>
                  </div>
                  <button className="nc-btn bg-inherit rounded-full w-11 h-11 border border-solid border-black/10 flex items-center justify-center hover:bg-black/5">
                    <div className="btn-icon">
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.944329 5.62321L13.4 5.62321L11.1809 8.44201C11.0235 8.64128 10.9509 8.89608 10.9793 9.14987C11.0077 9.40366 11.1346 9.63547 11.3319 9.79388C11.7393 10.1202 12.3297 10.0517 12.654 9.64048L15.7514 5.71908C16.0829 5.29876 16.0829 4.70124 15.7514 4.28092L12.654 0.359522C12.3297 -0.0517052 11.7393 -0.120209 11.3319 0.206118C11.1346 0.364527 11.0077 0.596337 10.9793 0.85013C10.9509 1.10392 11.0235 1.35872 11.1809 1.55799L12.8806 3.70565L0.944329 3.70565C0.42279 3.70565 0 4.13491 0 4.66443C0 5.19395 0.42279 5.62321 0.944329 5.62321Z" fill="black" fill-opacity="1"/>
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="nc rounded-xl p-6 bg-white ">
                  <div className="nc-icon rounded-full w-[50px] h-[50px] flex items-center justify-center text-white [&amp;_svg]:max-w-[50%] bg-gradient-secondary ">
                    <img src="/img/icon-btn-icon-2.svg" alt="btn-icon"/>
                  </div>
                  <div className="nc-text font-secondary-bold text-lg text-[#1D222C] [&amp;_a]:text-[#1E61EB] ">Вы получили бонус + 500 рублей.</div>
                  <div className="nc-date">
                    <div className="nc-date-label font-secondary-med text-xs text-[#969BA5]">Дата</div>
                    <div className="nc-date-value font-secondary-bold text-base text-[#1D222C] ">27.02.2020 15:34</div>
                  </div>
                  <button className="nc-btn bg-inherit rounded-full w-11 h-11 border border-solid border-black/10 flex items-center justify-center " disabled="">
                    <div className="btn-icon">
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.944329 5.62321L13.4 5.62321L11.1809 8.44201C11.0235 8.64128 10.9509 8.89608 10.9793 9.14987C11.0077 9.40366 11.1346 9.63547 11.3319 9.79388C11.7393 10.1202 12.3297 10.0517 12.654 9.64048L15.7514 5.71908C16.0829 5.29876 16.0829 4.70124 15.7514 4.28092L12.654 0.359522C12.3297 -0.0517052 11.7393 -0.120209 11.3319 0.206118C11.1346 0.364527 11.0077 0.596337 10.9793 0.85013C10.9509 1.10392 11.0235 1.35872 11.1809 1.55799L12.8806 3.70565L0.944329 3.70565C0.42279 3.70565 0 4.13491 0 4.66443C0 5.19395 0.42279 5.62321 0.944329 5.62321Z" fill="black" fill-opacity="0.1"/>
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="nc rounded-xl p-6 bg-white ">
                  <div className="nc-icon rounded-full w-[50px] h-[50px] flex items-center justify-center text-white [&amp;_svg]:max-w-[50%] bg-gradient-secondary ">
                    <img src="/img/icon-btn-icon-2.svg" alt="btn-icon"/>
                  </div>
                  <div className="nc-text font-secondary-bold text-lg text-[#1D222C] [&amp;_a]:text-[#1E61EB] ">Вы получили бонус + 500 рублей.</div>
                  <div className="nc-date">
                    <div className="nc-date-label font-secondary-med text-xs text-[#969BA5]">Дата</div>
                    <div className="nc-date-value font-secondary-bold text-base text-[#1D222C] ">27.02.2020 15:34</div>
                  </div>
                  <button className="nc-btn bg-inherit rounded-full w-11 h-11 border border-solid border-black/10 flex items-center justify-center " disabled="">
                    <div className="btn-icon">
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.944329 5.62321L13.4 5.62321L11.1809 8.44201C11.0235 8.64128 10.9509 8.89608 10.9793 9.14987C11.0077 9.40366 11.1346 9.63547 11.3319 9.79388C11.7393 10.1202 12.3297 10.0517 12.654 9.64048L15.7514 5.71908C16.0829 5.29876 16.0829 4.70124 15.7514 4.28092L12.654 0.359522C12.3297 -0.0517052 11.7393 -0.120209 11.3319 0.206118C11.1346 0.364527 11.0077 0.596337 10.9793 0.85013C10.9509 1.10392 11.0235 1.35872 11.1809 1.55799L12.8806 3.70565L0.944329 3.70565C0.42279 3.70565 0 4.13491 0 4.66443C0 5.19395 0.42279 5.62321 0.944329 5.62321Z" fill="black" fill-opacity="0.1"/>
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="nc rounded-xl p-6 bg-white ">
                  <div className="nc-icon rounded-full w-[50px] h-[50px] flex items-center justify-center text-white [&amp;_svg]:max-w-[50%] bg-gradient-secondary">
                    <img src="/img/icon-btn-icon-2.svg" alt="btn-icon"/>
                  </div>
                  <div className="nc-text font-secondary-bold text-lg text-[#1D222C] [&amp;_a]:text-[#1E61EB] ">Вы получили бонус + 500 рублей.</div>
                  <div className="nc-date">
                    <div className="nc-date-label font-secondary-med text-xs text-[#969BA5] ">Дата</div>
                    <div className="nc-date-value font-secondary-bold text-base text-[#1D222C] ">27.02.2020 15:34</div>
                  </div>
                  <button className="nc-btn bg-inherit rounded-full w-11 h-11 border border-solid border-black/10 flex items-center justify-center " disabled="">
                    <div className="btn-icon">
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.944329 5.62321L13.4 5.62321L11.1809 8.44201C11.0235 8.64128 10.9509 8.89608 10.9793 9.14987C11.0077 9.40366 11.1346 9.63547 11.3319 9.79388C11.7393 10.1202 12.3297 10.0517 12.654 9.64048L15.7514 5.71908C16.0829 5.29876 16.0829 4.70124 15.7514 4.28092L12.654 0.359522C12.3297 -0.0517052 11.7393 -0.120209 11.3319 0.206118C11.1346 0.364527 11.0077 0.596337 10.9793 0.85013C10.9509 1.10392 11.0235 1.35872 11.1809 1.55799L12.8806 3.70565L0.944329 3.70565C0.42279 3.70565 0 4.13491 0 4.66443C0 5.19395 0.42279 5.62321 0.944329 5.62321Z" fill="black" fill-opacity="0.1"/>
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="nc rounded-xl p-6 bg-white ">
                  <div className="nc-icon rounded-full w-[50px] h-[50px] flex items-center justify-center text-white [&amp;_svg]:max-w-[50%] bg-gradient-secondary">
                    <img src="/img/icon-btn-icon-2.svg" alt="btn-icon"/>
                  </div>
                  <div className="nc-text font-secondary-bold text-lg text-[#1D222C] [&amp;_a]:text-[#1E61EB] overflow-hidden text-ellipsis whitespace-nowrap">
                    <a href="#">Lacoste17</a> ответил(а) в теме <a href="#">Бесплатная бесконечная накрутка лайков на пост ВК.</a> 
                  </div>
                  <div className="nc-date">
                    <div className="nc-date-label font-secondary-med text-xs text-[#969BA5]">Дата</div>
                    <div className="nc-date-value font-secondary-bold text-base text-[#1D222C] ">27.02.2020 15:34</div>
                  </div>
                  <button className="nc-btn bg-inherit rounded-full w-11 h-11 border border-solid border-black/10 flex items-center justify-center hover:bg-black/5">
                    <div className="btn-icon ">
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.944329 5.62321L13.4 5.62321L11.1809 8.44201C11.0235 8.64128 10.9509 8.89608 10.9793 9.14987C11.0077 9.40366 11.1346 9.63547 11.3319 9.79388C11.7393 10.1202 12.3297 10.0517 12.654 9.64048L15.7514 5.71908C16.0829 5.29876 16.0829 4.70124 15.7514 4.28092L12.654 0.359522C12.3297 -0.0517052 11.7393 -0.120209 11.3319 0.206118C11.1346 0.364527 11.0077 0.596337 10.9793 0.85013C10.9509 1.10392 11.0235 1.35872 11.1809 1.55799L12.8806 3.70565L0.944329 3.70565C0.42279 3.70565 0 4.13491 0 4.66443C0 5.19395 0.42279 5.62321 0.944329 5.62321Z" fill="black" fill-opacity="1"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="pag mt-6 flex justify-center items-center gap-2 ">
                <a className="pag-arrow mr-4 2md:mr-1" href="#">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 6L9.70711 11.2929C9.31658 11.6834 9.31658 12.3166 9.70711 12.7071L15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  </svg>
                </a><a className="pag-item" href="#">1</a><a className="pag-item" href="#">2</a><a className="pag-item" href="#">3</a><a className="pag-item _active" href="#">443</a>
                <a className="pag-arrow ml-4 2md:ml-1" href="#">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L14.2929 11.2929C14.6834 11.6834 14.6834 12.3166 14.2929 12.7071L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  </svg>
                </a>
              </div>
              </div>
            </div>
            <LayoutBtn />
        </div>
    );
};

export default MyNotifications;