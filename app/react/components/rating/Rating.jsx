import { useState, useEffect } from 'react';

function Rating(props) {

    return (
        <div className="spf-rating flex flex-col min-w-[316px]">
            <div className="spf-rating-title font-secodary-bold font-bold text-sm mb-[12px]">Рейтинг {props.seller} <span className="font-secodary-bold font-bold text-sm text-black">{props.name}</span>  <span className="font-secodary-bold font-bold text-[11px] text-black">{props.reviews} отзывов</span></div>
            <div className="spf-rating-info flex items-start">
                <div className="spf-rating-count font-secodary-bold font-bold text-black text-right text-[40px] mr-[24px]">{props.rank} <span className="block font-secodary-bold font-bold text-[14px]">из 5</span></div>
                <div className="spf-rating-rats" clas="flex flex-col">
                    <div className="spf-rating-rat flex items-center h-[16px] mb-[4px]">
                        <span className="block bg-[#D9DFF3] w-[120px] h-[3px] mr-[12px] rounded-full overflow-hidden">
                            <span className="block h-full w-full bg-[#164CFF]"></span>
                        </span>
                        <span className="flex">
                            <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                <img src='/img/icon-spf-rating-icon.svg' alt="rating-image" />
                            </div>
                            <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                <img src="/img/icon-spf-rating-icon.svg" alt="rating-image" />
                            </div>
                            <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                <img src="/img/icon-spf-rating-icon.svg" alt="rating-image" />
                            </div>
                            <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                <img src="/img/icon-spf-rating-icon.svg" alt="rating-image" />
                            </div>
                            <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full">
                                <img src="/img/icon-spf-rating-icon.svg" alt="rating-image" />
                            </div>
                        </span>
                    </div>
                    <div className="spf-rating-rat flex items-center h-[16px] mb-[4px]">
                        <span className="block bg-[#D9DFF3] w-[120px] h-[3px] mr-[12px] rounded-full overflow-hidden">
                            <span className="block h-full w-1/3 bg-[#164CFF]"></span>
                        </span>
                        <span className="flex">
                            <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                <img src="/img/icon-spf-rating-icon.svg" alt="rating-image" />
                            </div>
                            <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                <img src="/img/icon-spf-rating-icon.svg" alt="rating-image" />
                            </div>
                            <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                <img src="/img/icon-spf-rating-icon.svg" alt="rating-image" />
                            </div>
                            <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full">
                                <img src="/img/icon-spf-rating-icon.svg" alt="rating-image" />
                            </div>
                        </span>
                    </div>
                    <div className="spf-rating-rat flex items-center h-[16px] mb-[4px]">
                        <span className="block bg-[#D9DFF3] w-[120px] h-[3px] mr-[12px] rounded-full"></span>
                        <span className="flex">
                            <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                <img src="/img/icon-spf-rating-icon.svg" alt="rating-image" />
                            </div>
                            <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                <img src="/img/icon-spf-rating-icon.svg" alt="rating-image" />
                            </div>
                            <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full">
                                <img src="/img/icon-spf-rating-icon.svg" alt="rating-image" />
                            </div>
                        </span>
                    </div>
                    <div className="spf-rating-rat flex items-center h-[16px] mb-[4px]">
                        <span className="block bg-[#D9DFF3] w-[120px] h-[3px] mr-[12px] rounded-full"></span>
                        <span className="flex">
                            <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full mr-[5px]">
                                <img src="/img/icon-spf-rating-icon.svg" alt="rating-image" />
                            </div>
                            <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full">
                                <img src="/img/icon-spf-rating-icon.svg" alt="rating-image" />
                            </div>
                        </span>
                    </div>
                    <div className="spf-rating-rat flex items-center h-[16px]">
                        <span className="block bg-[#D9DFF3] w-[120px] h-[3px] mr-[12px] rounded-full"></span>
                        <span className="flex">
                            <div className="spf-rating-icon flex-shrink-0 w-[16px] h-[16px] [&amp;_svg]:w-full">
                                <img src="/img/icon-spf-rating-icon.svg" alt="rating-image" />
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>               
    )
}

export default Rating;