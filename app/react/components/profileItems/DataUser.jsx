
function DataUser(props) {

    return (
        <div className="spf-info-wrapper flex flex-col">
            <div className="spf-info gap-y-[10px] flex mb-[20px] flex-wrap min-[800px]:flex-nowrap">
                <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                    <div className="spf-info-label font-secondary-bold text-[#C1CCE0] text-xs sm:text-sm">Имя</div>
                    <div className="spf-info-value font-secondary-bold text-sm sm:text-base text-black">{props.name}</div>
                </div>
                <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                    <div className="spf-info-label font-secondary-bold text-[#C1CCE0] text-xs sm:text-sm">Группа</div>
                    <div className="spf-info-value font-secondary-bold text-sm sm:text-base text-black">{props.group}</div>
                </div>
                <div className="spf-info-block flex flex-col">
                    <div className="spf-info-label font-secondary-bold text-[#C1CCE0] text-xs sm:text-sm">Кол-во лайков</div>
                    <div className="spf-info-value font-secondary-bold text-sm sm:text-base text-black">{props.like}</div>
                </div>
            </div>
            <div className="spf-info gap-y-[10px] flex w-full flex-wrap min-[800px]:flex-nowrap">
                <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                    <div className="spf-info-label font-secondary-bold text-[#C1CCE0] text-xs sm:text-sm">Создано тем на форуме</div>
                    <div className="spf-info-value font-secondary-bold text-sm sm:text-base text-black">{props.theme}</div>
                </div>
                <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                    <div className="spf-info-label font-secondary-bold text-[#C1CCE0] text-xs sm:text-sm">Покупок</div>
                    <div className="spf-info-value font-secondary-bold text-sm sm:text-base text-black">{props.shopp}</div>
                </div>
                <div className="spf-info-block flex flex-col pr-[20px] mr-[20px] border-r border-[#DBE0ED]">
                    <div className="spf-info-label font-secondary-bold text-[#C1CCE0] text-xs sm:text-sm">Продаж </div>
                    <div className="spf-info-value font-secondary-bold text-sm sm:text-base text-black">{props.sale}</div>
                </div>
                <div className="spf-info-block flex flex-col">
                    <div className="spf-info-label font-secondary-bold text-[#C1CCE0] text-xs sm:text-sm">Дата регистрации</div>
                    <div className="spf-info-value font-secondary-bold text-sm sm:text-base text-black">{props.date}</div>
                </div>
            </div>
        </div>
    );
}

export default DataUser;    