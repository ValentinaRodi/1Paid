import spsAvatar from "../../../img/avatar-example-5.00d4721a.png";
import puicImage from "../../../img/achievements-example.7996faae.png";
import puicImage2 from "../../../img/icon-shopping-card-gradient.ff3dca76.svg";
import spfRating from "../../../img/icon-spf-rating-icon.svg";
import fbcAvatar from "../../../img/avatar-example-4.6cd623f4.png";
import btnIcon from "../../../img/icon-btn-icon-pr.svg";
import btnIcon2 from "../../../img/icon-btn-icon-pr2.svg";


function Profile() {

    return (
        <div className="layout-b pb-4 px-9 3xl:px-4 min-w-0 sm:px-3">
            <div className="spf mt-11 2md:mt-5">
                <div className="sh flex justify-between items-center gap-x-3 2md:flex-col-reverse 2md:items-start 2md:gap-y-5 spf-title">
                <div className="sh-title">
                    <h2 className="sh-title-text font-secondary-bold text-2xl text-black 2md:text-xl">Личный профиль</h2>
                    <div className="sh-title-line mt-3 rounded-full w-9 h-1 2md:mt-2 bg-gradient-primary"></div>
                </div>
                </div>
                <div className="spf-main flex w-full mt-[44px]">
                <div className="spf-bar flex flex-col items-start max-w-[242px] mr-[80px]">
                    <div className="sps-bar flex flex-col items-start font-secondary-bold py-[16px]">
                    <div className="sps-avatar flex-shrink-0 w-[258px] h-[258px] mb-[12px] overflow-hidden rounded-[12px] relative">
                        <img className="sps-avatar-pic w-full h-full object-cover" src={spsAvatar} alt="user" />
                    </div>
                    <div className="sps-user flex flex-col w-full font-secondary-bold">
                        <div className="sps-user-info flex justify-between items-center mb-[8px] w-full">
                        <div className="sps-user-username text-lg text-black">Cool Designer</div>
                        <button className="sps-user-link flex justify-center items-center bg-gradient-primary w-[20px] h-[20px] rounded-full">
                            <div className="sps-user-link-icon flex-shrink-0 w-[10px] h-[5px] [&amp;_svg]:w-full flex justify-center items-center">
                                <img className="sps-avatar-pic w-full h-full object-cover" src={spsAvatar} alt="user" />
                            </div>
                        </button>
                        </div>
                    </div><span className="sps-user-status block text-[12px] max-w-max py-[2px] px-[8px] mb-[12px] text-[#8CD23C] text-center border border-[#8CD23C] rounded-full">В сети</span>
                    <div className="sps-user-actions w-full pt-[12px] border-t border-[#DBE0ED]">
                        <button className="sps-user-action self-start text-[#ACB6CC] text-[14px] border-b border-[#ACB6CC]">Выйти из аккаунта</button>
                    </div>
                    </div>
                    <div className="puic flex flex-col font-secondary-bold text-black py-[24px] mb-[12px] last:mb-0">
                    <div className="puic-head flex justify-between mb-[16px]">
                        <div className="puic-title text-[14px]">Достижения</div>
                        <div className="puic-action text-[#ACB6CC] text-[12px] border-b border-[#ACB6CC] cursor-pointer">Показать всё</div>
                    </div>
                    <div className="puic-list"></div>
                    <div className="puic-item flex items-start mb-[12px] last:mb-0">
                        <div className="puic-image flex-shrink-0 flex justify-center items-center w-[45px] h-[45px] p-[12px] mr-[12px] border border-[#E2E6F4] rounded-full">
                            <img className="puic-image-pic w-full h-full object-contain" src={puicImage} alt="puic-image" />
                        </div>
                        <div className="puic-item-info flex flex-col">
                        <div className="puic-item-label text-[14px]">Very rare global gold</div>
                        <div className="puic-item-text font-secondary-med text-[12px] text-[#CDCFE5]">Золотой глобус WF с шоколадным акцентом, для лучшего покупаца</div>
                        </div>
                    </div>
                    <div className="puic-item flex items-start mb-[12px] last:mb-0">
                        <div className="puic-image flex-shrink-0 flex justify-center items-center w-[45px] h-[45px] p-[12px] mr-[12px] border border-[#E2E6F4] rounded-full">
                            <img className="puic-image-pic w-full h-full object-contain" src={puicImage} alt="puic-image" />
                        </div>
                        <div className="puic-item-info flex flex-col">
                        <div className="puic-item-label text-[14px]">Global Gold</div>
                        <div className="puic-item-text font-secondary-med text-[12px] text-[#CDCFE5]">Золотой глобус WF</div>
                        </div>
                    </div>
                    <div className="puic-item flex items-start mb-[12px] last:mb-0">
                        <div className="puic-image flex-shrink-0 flex justify-center items-center w-[45px] h-[45px] p-[12px] mr-[12px] border border-[#E2E6F4] rounded-full">
                            <img className="puic-image-pic w-full h-full object-contain" src={puicImage} alt="puic-image" />
                        </div>
                        <div className="puic-item-info flex flex-col">
                        <div className="puic-item-label text-[14px]">Global Gold</div>
                        <div className="puic-item-text font-secondary-med text-[12px] text-[#CDCFE5]">Золотой глобус WF</div>
                        </div>
                    </div>
                    </div>
                    <div className="puic flex flex-col font-secondary-bold text-black py-[24px] mb-[12px] last:mb-0">
                    <div className="puic-head flex justify-between mb-[16px]">
                        <div className="puic-title text-[14px]">В продаже</div>
                        <div className="puic-action text-[#ACB6CC] text-[12px] border-b border-[#ACB6CC] cursor-pointer">Показать всё</div>
                    </div>
                    <div className="puic-list"></div>
                    <div className="puic-item flex items-start mb-[12px] last:mb-0">
                        <div className="puic-image flex-shrink-0 flex justify-center items-center w-[45px] h-[45px] p-[12px] mr-[12px] border border-[#E2E6F4] rounded-full">
                            <img className="puic-image-pic w-full h-full object-contain" src={puicImage2} alt="puic-image" />
                        </div>
                        <div className="puic-item-info flex flex-col">
                        <div className="puic-item-label text-[14px]">Аккаунт Warface за хорошие деньги, плюс бонус</div>
                        <div className="puic-item-text font-secondary-med text-[12px] text-[#CDCFE5]">525 000₽</div>
                        </div>
                    </div>
                    <div className="puic-item flex items-start mb-[12px] last:mb-0">
                        <div className="puic-image flex-shrink-0 flex justify-center items-center w-[45px] h-[45px] p-[12px] mr-[12px] border border-[#E2E6F4] rounded-full">
                            <img className="puic-image-pic w-full h-full object-contain" src={puicImage2} alt="puic-image" />
                        </div>
                        <div className="puic-item-info flex flex-col">
                        <div className="puic-item-label text-[14px]">Аккаунт Warface</div>
                        <div className="puic-item-text font-secondary-med text-[12px] text-[#CDCFE5]">500₽</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="spf-block flex flex-col w-full">
                    <div className="spf-user flex justify-between font-secondary-bold text-[14px] text-[#C1CCE0] py-[24px] mb-[20px]">
                    <div className="spf-info-wrapper flex flex-col w-full">
                        <div className="spf-info flex w-full mb-[20px]">
                        <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                            <div className="spf-info-label">Имя</div>
                            <div className="spf-info-value text-[16px] text-black">Никита</div>
                        </div>
                        <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                            <div className="spf-info-label">Группа</div>
                            <div className="spf-info-value text-[16px] text-black">Легенда</div>
                        </div>
                        <div className="spf-info-block flex flex-col">
                            <div className="spf-info-label">Кол-во лайков</div>
                            <div className="spf-info-value text-[16px] text-black">452</div>
                        </div>
                        </div>
                        <div className="spf-info flex w-full">
                        <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                            <div className="spf-info-label">Создано тем на форуме</div>
                            <div className="spf-info-value text-[16px] text-black">2,938</div>
                        </div>
                        <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                            <div className="spf-info-label">Покупок</div>
                            <div className="spf-info-value text-[16px] text-black">344</div>
                        </div>
                        <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                            <div className="spf-info-label">Продаж </div>
                            <div className="spf-info-value text-[16px] text-black">104</div>
                        </div>
                        <div className="spf-info-block flex flex-col">
                            <div className="spf-info-label">Дата регистрации</div>
                            <div className="spf-info-value text-[16px] text-black">22:12 27.12.2019</div>
                        </div>
                        </div>
                    </div>
                    <div className="spf-rating flex flex-col min-w-[316px]">
                        <div className="spf-rating-title font-secodary-bold mb-[12px]">Рейтинг продавца <span className="text-black">1555 отзывов</span></div>
                        <div className="spf-rating-info flex items-start">
                        <div className="spf-rating-count font-secodary-bold text-black text-right text-[40px] mr-[24px]">4.8 <span className="block text-[14px]">из 5</span></div>
                        <div className="spf-rating-rats" clas="flex flex-col">
                            <div className="spf-rating-rat flex items-center h-[16px] mb-[4px]">
                                <span className="block bg-[#D9DFF3] w-[120px] h-[3px] mr-[12px] rounded-full overflow-hidden">
                                    <span className="block h-full w-full bg-[#164CFF]"></span></span><span className="flex">
                                        <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                            <img src={spfRating} alt="rating-image" />
                                        </div>
                                        <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                            <img src={spfRating} alt="rating-image" />
                                        </div>
                                        <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                            <img src={spfRating} alt="rating-image" />
                                        </div>
                                        <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                            <img src={spfRating} alt="rating-image" />
                                        </div>
                                        <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full">
                                            <img src={spfRating} alt="rating-image" />
                                        </div>
                                    </span>
                                    </div>
                                    <div className="spf-rating-rat flex items-center h-[16px] mb-[4px]"><span className="block bg-[#D9DFF3] w-[120px] h-[3px] mr-[12px] rounded-full overflow-hidden">
                                    <span className="block h-full w-1/3 bg-[#164CFF]"></span>
                                </span>
                                <span className="flex"><div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                    <img src={spfRating} alt="rating-image" />
                                </div>
                                <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                    <img src={spfRating} alt="rating-image" />
                                </div>
                                <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                    <img src={spfRating} alt="rating-image" />
                                </div>
                                <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full">
                                    <img src={spfRating} alt="rating-image" />
                                </div>
                                </span>
                                </div>
                            <div className="spf-rating-rat flex items-center h-[16px] mb-[4px]">
                                <span className="block bg-[#D9DFF3] w-[120px] h-[3px] mr-[12px] rounded-full"></span>
                                <span className="flex"><div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                    <img src={spfRating} alt="rating-image" />
                                </div>
                                <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                    <img src={spfRating} alt="rating-image" />
                                </div>
                                <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full">
                                    <img src={spfRating} alt="rating-image" />
                                </div>
                                </span>
                            </div>
                            <div className="spf-rating-rat flex items-center h-[16px] mb-[4px]">
                                <span className="block bg-[#D9DFF3] w-[120px] h-[3px] mr-[12px] rounded-full"></span>
                            <span className="flex"><div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                <img src={spfRating} alt="rating-image" />
                            </div>
                            <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full">
                                <img src={spfRating} alt="rating-image" />
                            </div>
                            </span>
                            </div>
                            <div className="spf-rating-rat flex items-center h-[16px]">
                                <span className="block bg-[#D9DFF3] w-[120px] h-[3px] mr-[12px] rounded-full"></span>
                                <span className="flex">
                                    <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full">
                                        <img src={spfRating} alt="rating-image" />
                                    </div>
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="tabs flex items-center font-primary-bold text-[14px] h-[54px] overflow-hidden flex-wrap text-[#8A98B3] p-[24px]">
                    <button className="tabs-tab block uppercase mr-4 last:mr-0">
                        <div className="tabs-tab-text text-black/90">Отзывы о продажах</div>
                        <div className="tabs-tab-line mt-1 mx-auto rounded-full w-full h-1 bg-gradient-primary"></div>
                    </button>
                    <button className="tabs-tab block uppercase mr-4 last:mr-0">
                        <div className="tabs-tab-text text-[#8A98B3]">Созданные темы на форуме</div>
                        <div className="tabs-tab-line mt-1 mx-auto rounded-full w-full h-1 false"></div>
                    </button>
                    <button className="tabs-tab block uppercase mr-4 last:mr-0">
                        <div className="tabs-tab-text text-[#8A98B3]">Список покупок</div>
                        <div className="tabs-tab-line mt-1 mx-auto rounded-full w-full h-1 false"></div>
                    </button>
                    </div>
                    <div className="spf-feedbacks grid grid-cols-1 gap-y-[12px]">
                    <div className="fbc rounded-xl p-6 flex items-start gap-4 bg-white md:block">
                        <div className="fbc-info flex-shrink-0 flex gap-3 md:float-left md:mr-3 md:gap-1">
                        <div className="fbc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden xl:w-10 xl:h-10 md:w-8 md:h-8">
                            <img className="fbc-avatar-pic w-full h-full object-cover" src={fbcAvatar} alt="user" />
                        </div>
                        <div className="fbc-info-inner">
                            <div className="fbc-username font-secondary-bold text-lg text-[#1D222C] xl:text-base md:text-sm">Sansa</div>
                            <div className="fbc-date font-secondary-med text-xs text-[#CDCFE5] xl:text-[10px]">01:05 27.12.2019</div>
                        </div>
                        </div>
                        <div className="fbc-text flex-grow border-l border-solid border-[#E7EAF3] pl-4 font-secondary-med text-[10px] text-[#595E72] md:border-l-0 md:pl-0 ">Потрясный сайт! Без обманов, с реальным процентом полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги! Сделано потрясающе! Спасибо ребятам.важно обращать внимание на отзывы покупателей, репутацию продавца, а также наличие гарантий и защиты покупателя. Также стоит убедиться, что сайт не продает пиратские копии игр и что покупка осуществляется в безопасной среде.</div>
                    </div>
                    <div className="fbc rounded-xl p-6 flex items-start gap-4 bg-white md:block">
                        <div className="fbc-info flex-shrink-0 flex gap-3 md:float-left md:mr-3 md:gap-1">
                        <div className="fbc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden xl:w-10 xl:h-10 md:w-8 md:h-8">
                            <img className="fbc-avatar-pic w-full h-full object-cover" src={fbcAvatar} alt="user" />
                        </div>
                        <div className="fbc-info-inner">
                            <div className="fbc-username font-secondary-bold text-lg text-[#1D222C] xl:text-base md:text-sm">Sansa</div>
                            <div className="fbc-date font-secondary-med text-xs text-[#CDCFE5] xl:text-[10px]">01:05 27.12.2019</div>
                        </div>
                        </div>
                        <div className="fbc-text flex-grow border-l border-solid border-[#E7EAF3] pl-4 font-secondary-med text-[10px] text-[#595E72] md:border-l-0 md:pl-0 ">Потрясный сайт! Без обманов, с реальным процентом полезных выигрышей</div>
                    </div>
                    <div className="fbc rounded-xl p-6 flex items-start gap-4 bg-white md:block">
                        <div className="fbc-info flex-shrink-0 flex gap-3 md:float-left md:mr-3 md:gap-1">
                        <div className="fbc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden xl:w-10 xl:h-10 md:w-8 md:h-8">
                            <img className="fbc-avatar-pic w-full h-full object-cover" src={fbcAvatar} alt="user" />
                        </div>
                        <div className="fbc-info-inner">
                            <div className="fbc-username font-secondary-bold text-lg text-[#1D222C] xl:text-base md:text-sm">Sansa</div>
                            <div className="fbc-date font-secondary-med text-xs text-[#CDCFE5] xl:text-[10px]">01:05 27.12.2019</div>
                        </div>
                        </div>
                        <div className="fbc-text flex-grow border-l border-solid border-[#E7EAF3] pl-4 font-secondary-med text-[10px] text-[#595E72] md:border-l-0 md:pl-0 ">Потрясный сайт! Без обманов, с реальным процентом полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги! Сделано потрясающе! Спасибо ребятам.важно обращать внимание на отзывы покупателей, репутацию продавца, а также наличие гарантий и защиты покупателя. Также стоит убедиться, что сайт не продает пиратские копии игр и что покупка осуществляется в безопасной среде.</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
