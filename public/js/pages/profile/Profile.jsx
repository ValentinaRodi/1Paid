import spsAvatar from "../../../img/avatar-example-5.00d4721a.png";
import puicImage from "../../../img/achievements-example.7996faae.png";
import puicImage2 from "../../../img/icon-shopping-card-gradient.ff3dca76.svg";
import spfRating from "../../../img/icon-spf-rating-icon.svg";
import fbcAvatar from "../../../img/avatar-example-4.6cd623f4.png";
import btnIcon from "../../../img/icon-btn-icon-pr.svg";
import btnIcon2 from "../../../img/icon-btn-icon-pr2.svg";


function Profile() {

    return (

        <div class="layout-b pb-4 px-9 3xl:px-4 min-w-0 sm:px-3">
            <div class="spf mt-11 2md:mt-5">
                <div class="sh flex justify-between items-center gap-x-3 2md:flex-col-reverse 2md:items-start 2md:gap-y-5 spf-title">
                <div class="sh-title">
                    <h2 class="sh-title-text font-secondary-bold text-2xl text-black 2md:text-xl">Личный профиль</h2>
                    <div class="sh-title-line mt-3 rounded-full w-9 h-1 2md:mt-2 bg-gradient-primary"></div>
                </div>
                </div>
                <div class="spf-main flex w-full mt-[44px]">
                <div class="spf-bar flex flex-col items-start max-w-[242px] mr-[80px]">
                    <div class="sps-bar flex flex-col items-start font-secondary-bold py-[16px]">
                    <div class="sps-avatar flex-shrink-0 w-[258px] h-[258px] mb-[12px] overflow-hidden rounded-[12px] relative">
                        <img class="sps-avatar-pic w-full h-full object-cover" src={spsAvatar} alt="user" />
                    </div>
                    <div class="sps-user flex flex-col w-full font-secondary-bold">
                        <div class="sps-user-info flex justify-between items-center mb-[8px] w-full">
                        <div class="sps-user-username text-lg text-black">Cool Designer</div>
                        <button class="sps-user-link flex justify-center items-center bg-gradient-primary w-[20px] h-[20px] rounded-full">
                            <div class="sps-user-link-icon flex-shrink-0 w-[10px] h-[5px] [&amp;_svg]:w-full flex justify-center items-center">
                                <img class="sps-avatar-pic w-full h-full object-cover" src={spsAvatar} alt="user" />
                            </div>
                        </button>
                        </div>
                    </div><span class="sps-user-status block text-[12px] max-w-max py-[2px] px-[8px] mb-[12px] text-[#8CD23C] text-center border border-[#8CD23C] rounded-full">В сети</span>
                    <div class="sps-user-actions w-full pt-[12px] border-t border-[#DBE0ED]">
                        <button class="sps-user-action self-start text-[#ACB6CC] text-[14px] border-b border-[#ACB6CC]">Выйти из аккаунта</button>
                    </div>
                    </div>
                    <div class="puic flex flex-col font-secondary-bold text-black py-[24px] mb-[12px] last:mb-0">
                    <div class="puic-head flex justify-between mb-[16px]">
                        <div class="puic-title text-[14px]">Достижения</div>
                        <div class="puic-action text-[#ACB6CC] text-[12px] border-b border-[#ACB6CC] cursor-pointer">Показать всё</div>
                    </div>
                    <div class="puic-list"></div>
                    <div class="puic-item flex items-start mb-[12px] last:mb-0">
                        <div class="puic-image flex-shrink-0 flex justify-center items-center w-[45px] h-[45px] p-[12px] mr-[12px] border border-[#E2E6F4] rounded-full">
                            <img class="puic-image-pic w-full h-full object-contain" src={puicImage} alt="puic-image" />
                        </div>
                        <div class="puic-item-info flex flex-col">
                        <div class="puic-item-label text-[14px]">Very rare global gold</div>
                        <div class="puic-item-text font-secondary-med text-[12px] text-[#CDCFE5]">Золотой глобус WF с шоколадным акцентом, для лучшего покупаца</div>
                        </div>
                    </div>
                    <div class="puic-item flex items-start mb-[12px] last:mb-0">
                        <div class="puic-image flex-shrink-0 flex justify-center items-center w-[45px] h-[45px] p-[12px] mr-[12px] border border-[#E2E6F4] rounded-full">
                            <img class="puic-image-pic w-full h-full object-contain" src={puicImage} alt="puic-image" />
                        </div>
                        <div class="puic-item-info flex flex-col">
                        <div class="puic-item-label text-[14px]">Global Gold</div>
                        <div class="puic-item-text font-secondary-med text-[12px] text-[#CDCFE5]">Золотой глобус WF</div>
                        </div>
                    </div>
                    <div class="puic-item flex items-start mb-[12px] last:mb-0">
                        <div class="puic-image flex-shrink-0 flex justify-center items-center w-[45px] h-[45px] p-[12px] mr-[12px] border border-[#E2E6F4] rounded-full">
                            <img class="puic-image-pic w-full h-full object-contain" src={puicImage} alt="puic-image" />
                        </div>
                        <div class="puic-item-info flex flex-col">
                        <div class="puic-item-label text-[14px]">Global Gold</div>
                        <div class="puic-item-text font-secondary-med text-[12px] text-[#CDCFE5]">Золотой глобус WF</div>
                        </div>
                    </div>
                    </div>
                    <div class="puic flex flex-col font-secondary-bold text-black py-[24px] mb-[12px] last:mb-0">
                    <div class="puic-head flex justify-between mb-[16px]">
                        <div class="puic-title text-[14px]">В продаже</div>
                        <div class="puic-action text-[#ACB6CC] text-[12px] border-b border-[#ACB6CC] cursor-pointer">Показать всё</div>
                    </div>
                    <div class="puic-list"></div>
                    <div class="puic-item flex items-start mb-[12px] last:mb-0">
                        <div class="puic-image flex-shrink-0 flex justify-center items-center w-[45px] h-[45px] p-[12px] mr-[12px] border border-[#E2E6F4] rounded-full">
                            <img class="puic-image-pic w-full h-full object-contain" src={puicImage2} alt="puic-image" />
                        </div>
                        <div class="puic-item-info flex flex-col">
                        <div class="puic-item-label text-[14px]">Аккаунт Warface за хорошие деньги, плюс бонус</div>
                        <div class="puic-item-text font-secondary-med text-[12px] text-[#CDCFE5]">525 000₽</div>
                        </div>
                    </div>
                    <div class="puic-item flex items-start mb-[12px] last:mb-0">
                        <div class="puic-image flex-shrink-0 flex justify-center items-center w-[45px] h-[45px] p-[12px] mr-[12px] border border-[#E2E6F4] rounded-full">
                            <img class="puic-image-pic w-full h-full object-contain" src={puicImage2} alt="puic-image" />
                        </div>
                        <div class="puic-item-info flex flex-col">
                        <div class="puic-item-label text-[14px]">Аккаунт Warface</div>
                        <div class="puic-item-text font-secondary-med text-[12px] text-[#CDCFE5]">500₽</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="spf-block flex flex-col w-full">
                    <div class="spf-user flex justify-between font-secondary-bold text-[14px] text-[#C1CCE0] py-[24px] mb-[20px]">
                    <div class="spf-info-wrapper flex flex-col w-full">
                        <div class="spf-info flex w-full mb-[20px]">
                        <div class="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                            <div class="spf-info-label">Имя</div>
                            <div class="spf-info-value text-[16px] text-black">Никита</div>
                        </div>
                        <div class="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                            <div class="spf-info-label">Группа</div>
                            <div class="spf-info-value text-[16px] text-black">Легенда</div>
                        </div>
                        <div class="spf-info-block flex flex-col">
                            <div class="spf-info-label">Кол-во лайков</div>
                            <div class="spf-info-value text-[16px] text-black">452</div>
                        </div>
                        </div>
                        <div class="spf-info flex w-full">
                        <div class="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                            <div class="spf-info-label">Создано тем на форуме</div>
                            <div class="spf-info-value text-[16px] text-black">2,938</div>
                        </div>
                        <div class="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                            <div class="spf-info-label">Покупок</div>
                            <div class="spf-info-value text-[16px] text-black">344</div>
                        </div>
                        <div class="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                            <div class="spf-info-label">Продаж </div>
                            <div class="spf-info-value text-[16px] text-black">104</div>
                        </div>
                        <div class="spf-info-block flex flex-col">
                            <div class="spf-info-label">Дата регистрации</div>
                            <div class="spf-info-value text-[16px] text-black">22:12 27.12.2019</div>
                        </div>
                        </div>
                    </div>
                    <div class="spf-rating flex flex-col min-w-[316px]">
                        <div class="spf-rating-title font-secodary-bold mb-[12px]">Рейтинг продавца <span class="text-black">1555 отзывов</span></div>
                        <div class="spf-rating-info flex items-start">
                        <div class="spf-rating-count font-secodary-bold text-black text-right text-[40px] mr-[24px]">4.8 <span class="block text-[14px]">из 5</span></div>
                        <div class="spf-rating-rats" clas="flex flex-col">
                            <div class="spf-rating-rat flex items-center h-[16px] mb-[4px]">
                                <span class="block bg-[#D9DFF3] w-[120px] h-[3px] mr-[12px] rounded-full overflow-hidden">
                                    <span class="block h-full w-full bg-[#164CFF]"></span></span><span class="flex">
                                        <div class="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                            <img src={spfRating} alt="rating-image" />
                                        </div>
                                        <div class="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                            <img src={spfRating} alt="rating-image" />
                                        </div>
                                        <div class="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                            <img src={spfRating} alt="rating-image" />
                                        </div>
                                        <div class="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                            <img src={spfRating} alt="rating-image" />
                                        </div>
                                        <div class="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full">
                                            <img src={spfRating} alt="rating-image" />
                                        </div>
                                    </span>
                                    </div>
                                    <div class="spf-rating-rat flex items-center h-[16px] mb-[4px]"><span class="block bg-[#D9DFF3] w-[120px] h-[3px] mr-[12px] rounded-full overflow-hidden">
                                    <span class="block h-full w-1/3 bg-[#164CFF]"></span>
                                </span>
                                <span class="flex"><div class="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                    <img src={spfRating} alt="rating-image" />
                                </div>
                                <div class="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                    <img src={spfRating} alt="rating-image" />
                                </div>
                                <div class="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                    <img src={spfRating} alt="rating-image" />
                                </div>
                                <div class="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full">
                                    <img src={spfRating} alt="rating-image" />
                                </div>
                                </span>
                                </div>
                            <div class="spf-rating-rat flex items-center h-[16px] mb-[4px]">
                                <span class="block bg-[#D9DFF3] w-[120px] h-[3px] mr-[12px] rounded-full"></span>
                                <span class="flex"><div class="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                    <img src={spfRating} alt="rating-image" />
                                </div>
                                <div class="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                    <img src={spfRating} alt="rating-image" />
                                </div>
                                <div class="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full">
                                    <img src={spfRating} alt="rating-image" />
                                </div>
                                </span>
                            </div>
                            <div class="spf-rating-rat flex items-center h-[16px] mb-[4px]">
                                <span class="block bg-[#D9DFF3] w-[120px] h-[3px] mr-[12px] rounded-full"></span>
                            <span class="flex"><div class="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                <img src={spfRating} alt="rating-image" />
                            </div>
                            <div class="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full">
                                <img src={spfRating} alt="rating-image" />
                            </div>
                            </span>
                            </div>
                            <div class="spf-rating-rat flex items-center h-[16px]">
                                <span class="block bg-[#D9DFF3] w-[120px] h-[3px] mr-[12px] rounded-full"></span>
                                <span class="flex">
                                    <div class="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full">
                                        <img src={spfRating} alt="rating-image" />
                                    </div>
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="tabs flex items-center font-primary-bold text-[14px] h-[54px] overflow-hidden flex-wrap text-[#8A98B3] p-[24px]">
                    <button class="tabs-tab block uppercase mr-4 last:mr-0">
                        <div class="tabs-tab-text text-black/90">Отзывы о продажах</div>
                        <div class="tabs-tab-line mt-1 mx-auto rounded-full w-full h-1 bg-gradient-primary"></div>
                    </button>
                    <button class="tabs-tab block uppercase mr-4 last:mr-0">
                        <div class="tabs-tab-text text-[#8A98B3]">Созданные темы на форуме</div>
                        <div class="tabs-tab-line mt-1 mx-auto rounded-full w-full h-1 false"></div>
                    </button>
                    <button class="tabs-tab block uppercase mr-4 last:mr-0">
                        <div class="tabs-tab-text text-[#8A98B3]">Список покупок</div>
                        <div class="tabs-tab-line mt-1 mx-auto rounded-full w-full h-1 false"></div>
                    </button>
                    </div>
                    <div class="spf-feedbacks grid grid-cols-1 gap-y-[12px]">
                    <div class="fbc rounded-xl p-6 flex items-start gap-4 bg-white md:block">
                        <div class="fbc-info flex-shrink-0 flex gap-3 md:float-left md:mr-3 md:gap-1">
                        <div class="fbc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden xl:w-10 xl:h-10 md:w-8 md:h-8">
                            <img class="fbc-avatar-pic w-full h-full object-cover" src={fbcAvatar} alt="user" />
                        </div>
                        <div class="fbc-info-inner">
                            <div class="fbc-username font-secondary-bold text-lg text-[#1D222C] xl:text-base md:text-sm">Sansa</div>
                            <div class="fbc-date font-secondary-med text-xs text-[#CDCFE5] xl:text-[10px]">01:05 27.12.2019</div>
                        </div>
                        </div>
                        <div class="fbc-text flex-grow border-l border-solid border-[#E7EAF3] pl-4 font-secondary-med text-[10px] text-[#595E72] md:border-l-0 md:pl-0 ">Потрясный сайт! Без обманов, с реальным процентом полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги! Сделано потрясающе! Спасибо ребятам.важно обращать внимание на отзывы покупателей, репутацию продавца, а также наличие гарантий и защиты покупателя. Также стоит убедиться, что сайт не продает пиратские копии игр и что покупка осуществляется в безопасной среде.</div>
                    </div>
                    <div class="fbc rounded-xl p-6 flex items-start gap-4 bg-white md:block">
                        <div class="fbc-info flex-shrink-0 flex gap-3 md:float-left md:mr-3 md:gap-1">
                        <div class="fbc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden xl:w-10 xl:h-10 md:w-8 md:h-8">
                            <img class="fbc-avatar-pic w-full h-full object-cover" src={fbcAvatar} alt="user" />
                        </div>
                        <div class="fbc-info-inner">
                            <div class="fbc-username font-secondary-bold text-lg text-[#1D222C] xl:text-base md:text-sm">Sansa</div>
                            <div class="fbc-date font-secondary-med text-xs text-[#CDCFE5] xl:text-[10px]">01:05 27.12.2019</div>
                        </div>
                        </div>
                        <div class="fbc-text flex-grow border-l border-solid border-[#E7EAF3] pl-4 font-secondary-med text-[10px] text-[#595E72] md:border-l-0 md:pl-0 ">Потрясный сайт! Без обманов, с реальным процентом полезных выигрышей</div>
                    </div>
                    <div class="fbc rounded-xl p-6 flex items-start gap-4 bg-white md:block">
                        <div class="fbc-info flex-shrink-0 flex gap-3 md:float-left md:mr-3 md:gap-1">
                        <div class="fbc-avatar flex-shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden xl:w-10 xl:h-10 md:w-8 md:h-8">
                            <img class="fbc-avatar-pic w-full h-full object-cover" src={fbcAvatar} alt="user" />
                        </div>
                        <div class="fbc-info-inner">
                            <div class="fbc-username font-secondary-bold text-lg text-[#1D222C] xl:text-base md:text-sm">Sansa</div>
                            <div class="fbc-date font-secondary-med text-xs text-[#CDCFE5] xl:text-[10px]">01:05 27.12.2019</div>
                        </div>
                        </div>
                        <div class="fbc-text flex-grow border-l border-solid border-[#E7EAF3] pl-4 font-secondary-med text-[10px] text-[#595E72] md:border-l-0 md:pl-0 ">Потрясный сайт! Без обманов, с реальным процентом полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги! Сделано потрясающе! Спасибо ребятам.важно обращать внимание на отзывы покупателей, репутацию продавца, а также наличие гарантий и защиты покупателя. Также стоит убедиться, что сайт не продает пиратские копии игр и что покупка осуществляется в безопасной среде.</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="layout-b-f flex justify-between mt-6 3sm:mt-3">
                <button class="layout-btn-totop scroll-to-top rounded-full w-16 h-16 flex items-center justify-center bg-[#D7DFF5] hover:bg-[#d0d8f3] shadow-2xl 3sm:w-11 3sm:h-11">
                <div class="btn-icon text-[#BDC6E0] w-1/2 h-1/2 [&amp;_svg]:w-full [&amp;_svg]:h-full">
                    <img class="fbc-avatar-pic w-full h-full object-cover" src={btnIcon} alt="btn-Icon" />
                </div>
                </button>
                <button class="layout-btn-openchat open-fast-chat rounded-full rounded-br-none w-[65px] h-[65px] flex items-center justify-center bg-gradient-primary shadow-2xl 3sm:w-11 3sm:h-11">
                <div class="btn-icon text-[#BDC6E0] w-[22px] h-[19px] [&amp;_svg]:w-full [&amp;_svg]:h-full text-white">
                    <img class="fbc-avatar-pic w-full h-full object-cover" src={btnIcon2} alt="btn-Icon" />
                </div>
                </button>
            </div>
        </div>
    )
}

export default Profile;
