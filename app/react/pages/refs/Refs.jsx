import { useState, useEffect } from 'react';
import LayoutBtn from '../../components/LayoutBtn';
import { Link } from 'react-router-dom';


function Refs() {

    const [refs, setRefs] = useState('https://dealkgo.com/ref/38921');

    const handleCopy = () => {
        //Только по протоколу HTTPS
        if(window.isSecureContext) {
            navigator.clipboard.writeText(refs);
        };
    }
    
    return (
        <div className="flex flex-wrap content-between layout-b pb-4 min-w-0">
            <div className="w-full">
                <div className="sr mt-5">
                    <div className="sh flex justify-between items-center gap-x-3 mb-10">
                        <div className="flex flex-col justify-start">
                            <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Реферальная Система</h2>
                            <div className="sh-title-line mt-2 rounded-full w-9 h-1 bg-gradient-primary">
                            </div>
                        </div>
                    </div>
                    <div className="sr-main flex w-full gap-3">
                        <div className="sr-dashboard flex flex-col w-full max-w-[430px] gap-3 font-primary-med">
                            <div className='bg-white rounded-xl p-6'>
                                <div className="srd-user flex flex-col mb-[24px]">
                                    <div className="srd-user-username font-primary-bold text-[14px] mb-[12px]">Shenderro</div>
                                    <div className="srd-user-info flex items-center w-full">
                                        <div className="srd-user-income font-secondary-bold text-[12px] text-[#B4BAD2] pr-[12px] mr-[12px] border-r border-[#DBE0ED]">
                                        <div className="srd-user-count text-[16px] text-black">528</div>
                                        <div className="srd-user-label font-secondary-med">Приглашенных</div>
                                        </div>
                                        <div className="srd-user-earned font-secondary-bold text-[12px] text-[#B4BAD2]">
                                        <div className="srd-user-count text-[16px] text-black">118 523DG</div>
                                        <div className="srd-user-label font-secondary-med">Заработанно</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="srd-link mb-[20px]">
                                    <div className="srd-link-title font-primary-bold text-[#B9BCDD] text-[11px] mb-[12px] uppercase">Реферальная ссылка</div>
                                    <div className="srd-link-block flex items-center bg-[#EAEBF8] h-[48px] p-[16px] rounded-[4px]">
                                <div className="srd-link-text font-secondary-bold text-sm text-black">{refs}</div>
                                        <button onClick={handleCopy} className="srd-link-btn bg-inherit flex justify-center items-center ml-auto flex-shrink-0 w-[18px] h-[18px] [&amp;_svg]:w-full text-[#BEC1DE]">
                                            <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.89444 0.987331C9.49032 0.404796 8.82676 0.0568308 8.11778 0.0556641H2.16667C0.97005 0.0556641 0 1.02571 0 2.22233V13.7779C0 14.9745 0.97005 15.9446 2.16667 15.9446H10.8333C12.03 15.9446 13 14.9745 13 13.7779V6.12233C12.999 5.68053 12.8629 5.24961 12.61 4.88733L9.89444 0.987331ZM11.5548 13.7779C11.5548 14.1767 11.2314 14.5001 10.8325 14.5001H2.16586C1.76699 14.5001 1.44364 14.1767 1.44364 13.7779V2.22232C1.44364 1.82345 1.76699 1.5001 2.16586 1.5001H8.11697C8.3533 1.50048 8.57449 1.61647 8.7092 1.81065L11.4248 5.71065C11.509 5.83141 11.5544 5.97505 11.5548 6.12232V13.7779Z" fill="#BEC1DE"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <button className="svk flex justify-center items-center bg-gradient-primary rounded-[4px] py-4 px-12 w-full">
                                    <div className="svk-icon flex-shrink-0 w-[18px] h-[18px] [&amp;_svg]:w-full flex justify-center items-center mr-[8px]">
                                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.88275 9.90579C9.88275 9.90579 10.2076 9.87083 10.374 9.69771C10.5263 9.53908 10.521 9.23975 10.521 9.23975C10.521 9.23975 10.5008 7.842 11.1707 7.63562C11.831 7.43265 12.6788 8.98732 13.5786 9.58514C14.2582 10.0371 14.7741 9.9382 14.7741 9.9382L17.1785 9.90579C17.1785 9.90579 18.4356 9.83074 17.8396 8.87304C17.7903 8.79458 17.4919 8.16436 16.0525 6.8698C14.5444 5.51468 14.7469 5.73386 16.5622 3.38949C17.668 1.96189 18.1099 1.09032 17.9717 0.71764C17.8405 0.361166 17.027 0.455828 17.027 0.455828L14.3207 0.472031C14.3207 0.472031 14.12 0.445594 13.9712 0.531727C13.826 0.616155 13.7318 0.813154 13.7318 0.813154C13.7318 0.813154 13.3039 1.91754 12.7325 2.85733C11.5273 4.83926 11.0457 4.94416 10.8485 4.82135C10.3898 4.53395 10.5043 3.66835 10.5043 3.05348C10.5043 1.1321 10.8054 0.331318 9.91884 0.124085C9.62479 0.0550078 9.40822 0.00980903 8.6555 0.00213375C7.68972 -0.00724713 6.87273 0.00554498 6.40965 0.224717C6.10151 0.370547 5.86381 0.696319 6.00907 0.715081C6.18779 0.738107 6.59276 0.820829 6.80758 1.10396C7.0849 1.46982 7.07521 2.29022 7.07521 2.29022C7.07521 2.29022 7.23456 4.55186 6.70281 4.83244C6.33833 5.02517 5.83828 4.63203 4.76333 2.83346C4.2131 1.91242 3.79756 0.894171 3.79756 0.894171C3.79756 0.894171 3.71744 0.703995 3.57394 0.601658C3.4005 0.478001 3.1584 0.439624 3.1584 0.439624L0.586807 0.455828C0.586807 0.455828 0.20032 0.466061 0.0585791 0.628947C-0.0673154 0.773072 0.0488949 1.07241 0.0488949 1.07241C0.0488949 1.07241 2.06233 5.63578 4.34251 7.9358C6.43342 10.0439 8.80692 9.90579 8.80692 9.90579H9.88275Z" fill="white"></path>
                                        </svg>
                                    </div>
                                    <div className="svk-text font-secondary-bold text-[14px] text-white">Поделиться</div>
                                </button>
                            </div>
                            <div className="srd-block bg-white rounded-xl p-6">
                                <div className="srd-block-label font-primary-bold mb-[12px]">Ваш постоянный доход % </div>
                                <div className="srd-block-info grid grid-cols-2 gap-[8px]">
                                    <div className="srd-block-info block px-[20px] py-[16px] border border-[#E7EAF3] rounded-[4px] text-[13px]">
                                        <span className="srd-block-info-label inline-block mr-3 font-primary-bold text-[#1E61EB]">1%</span>
                                        <span className="srd-block-info-count inline-block">1-4999₽</span>
                                    </div>
                                    <div className="srd-block-info block px-[20px] py-[16px] border border-[#E7EAF3] rounded-[4px] text-[13px]">
                                        <span className="srd-block-info-label inline-block mr-3 font-primary-bold text-[#1E61EB]">3%</span>
                                        <span className="srd-block-info-count inline-block">5000 - 14999₽</span>
                                    </div>
                                    <div className="srd-block-info block px-[20px] py-[16px] border border-[#E7EAF3] rounded-[4px] text-[13px]">
                                        <span className="srd-block-info-label inline-block mr-3 font-primary-bold text-[#1E61EB]">5%</span>
                                        <span className="srd-block-info-count inline-block">15000 - 24999₽</span>
                                    </div>
                                    <div className="srd-block-info block px-[20px] py-[16px] border border-[#E7EAF3] rounded-[4px] text-[13px]">
                                        <span className="srd-block-info-label inline-block mr-3 font-primary-bold text-[#1E61EB]">7%</span>
                                        <span className="srd-block-info-count inline-block">от 25000₽</span>
                                    </div>
                                </div>
                            </div>
                            <div className="srd-text bg-white rounded-xl p-6 text-[13px]">Реферальная система - "Зарабатывай с каждой покупки своего реферала от 1 до 7% .Например если ваш реферал совершил покупку на 1000р то вы получите 1% с его покупки , это 10DG<span className="text-[#FF0000]">*</span>. Бонусами DG можно оплачивать покупки до 100%
                                <br />
                                <br />Оплаченные покупки реферала бонусами DG не учитываются.
                                <br />
                                <br /><span className="text-[#FF0000]">*</span>1DG = 1РУБ
                            </div>
                        </div>
                        <div className="sr-feed w-full flex flex-col gap-3">
                            <div className="srf-ref flex items-center font-secondary-bold rounded-lg text-sm bg-white w-full h-[56px] max-h-[56px] px-6">
                                <div className="srf-ref-username text-[#1F62EC]">Evhen_823</div>
                                <div className="srf-ref-info flex items-center ml-auto text-[#969BA5]">
                                    <div className="srf-ref-info-income flex items-center mr-[16px]">Ваш доход:
                                        <div className="srf-ref-info-income-count text-gradient pl-1">100DG</div>
                                    </div>
                                    <div className="srf-ref-info-spent flex items-center mr-[16px] border-x border-solid border-[#DBE0ED] px-3">Потрачено:
                                        <div className="srf-ref-info-spent-count text-[#1D222C] pl-1">10 000₽</div>
                                    </div>
                                    <div className="srf-ref-date text-[#1D222C]">15.02.2023, 16:30</div>
                                </div>
                            </div>
                            <div className="srf-ref flex items-center font-secondary-bold rounded-lg text-sm bg-white w-full h-[56px] max-h-[56px] px-6">
                                <div className="srf-ref-username text-[#1F62EC]">Evhen_823</div>
                                <div className="srf-ref-info flex items-center ml-auto text-[#969BA5]">
                                    <div className="srf-ref-info-income flex items-center mr-[16px]">Ваш доход:
                                        <div className="srf-ref-info-income-count text-gradient pl-1">100DG</div>
                                    </div>
                                    <div className="srf-ref-info-spent flex items-center mr-[16px] border-x border-solid border-[#DBE0ED] px-3">Потрачено:
                                        <div className="srf-ref-info-spent-count text-[#1D222C] pl-1">10 000₽</div>
                                    </div>
                                    <div className="srf-ref-date text-[#1D222C]">15.02.2023, 16:30</div>
                                </div>
                            </div>
                            <div className="srf-ref flex items-center font-secondary-bold rounded-lg text-sm bg-white w-full h-[56px] max-h-[56px] px-6">
                                <div className="srf-ref-username text-[#1F62EC]">Evhen_823</div>
                                <div className="srf-ref-info flex items-center ml-auto text-[#969BA5] gap-3">
                                    <div className="srf-ref-info-income flex items-center ">Ваш доход:
                                        <div className="srf-ref-info-income-count text-gradient pl-1">100DG</div>
                                    </div>
                                    <div className="srf-ref-info-spent flex items-center border-x border-solid border-[#DBE0ED] px-3">Потрачено:
                                        <div className="srf-ref-info-spent-count text-[#1D222C] pl-1">10 000₽</div>
                                    </div>
                                    <div className="srf-ref-date text-[#1D222C]">15.02.2023, 16:30</div>
                                </div>
                            </div>
                            <div className="pag mt-6 flex justify-center items-center gap-2">
                                <a className="pag-arrow mr-4" href="#">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 6L9.70711 11.2929C9.31658 11.6834 9.31658 12.3166 9.70711 12.7071L15 18" stroke="currentColor"  strokeWidth="1.5" strokeLinecap="round"></path>
                                    </svg>
                                </a><a className="pag-item" href="#">1</a><a className="pag-item" href="#">2</a><a className="pag-item" href="#">3</a><a className="pag-item _active" href="#">443</a>
                                <a className="pag-arrow ml-4" href="#">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 6L14.2929 11.2929C14.6834 11.6834 14.6834 12.3166 14.2929 12.7071L9 18" stroke="currentColor"  strokeWidth="1.5" strokeLinecap="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LayoutBtn toTop='true'/>
        </div>
    );
};

export default Refs;