
function Title(props) {

    return (

        <div className="sh w-full flex justify-between gap-x-3 items-center mb-0 sm:mb-6">
            <div className="min-h-[85px] flex items-center justify-between w-full sm:w-auto ">
                <div>
                    <h2 className="sh-title-text font-secondary-bold text-bold text-lg sm:text-2xl text-black">{props.title}</h2>
                    <div className={`${props.green ? 'bg-gradient-secondary' : 'bg-gradient-primary'} sh-title-line mt-2 rounded-full w-9 h-1 2md:mt-2`}></div>
                </div>
                <div>
                    {props.viewCards ?
                        <button onClick={props.changeViewCards} className="flex sm:hidden rounded-full bg-[#e8eaf7] hover:bg-[#dcdff1] w-11 h-11 justify-center items-center">
                            <div className="w-[50%] h-[50%] flex justify-center items-center">
                                <img src={props.cardsViewImg} alt="icon-card"/>
                            </div>
                        </button>
                        :null
                    }
                </div>
            </div>
            <div className='flex w-full sm:w-auto justify-between items-center gap-2'>
                {props.viewCards ?
                    <button onClick={props.changeViewCards} className="hidden sm:flex rounded-full bg-[#e8eaf7] hover:bg-[#dcdff1] w-11 h-11 justify-center items-center">
                        <div className="w-[50%] h-[50%] flex justify-center items-center">
                            <img src={props.cardsViewImg} alt="icon-card"/>
                        </div>
                    </button>
                    :null
                }
                {props.search ?
                    <div className="mt-6 sm:mt-0 sh-bar flex items-center gap-2 2md:w-full 2md:flex-row-reverse">
                        <div className="sh-search rounded-full h-[50px] px-6 max-w-[270px] w-full flex items-center bg-[#E8EAF7] 2md:max-w-none 2md:flex-grow 2md:h-10 2md:px-3">
                            <button className="sh-search-icon bg-inherit flex-shrink-0 w-4 h-full [&amp;_svg]:w-full flex justify-center items-center text-[#B8BACF] duration-100 hover:text-black">
                                <img src="/img/icon-sh-search-icon.svg" alt="sh-search-icon"/>
                            </button>
                            <input maxLength="80" name="search" className="sh-search-input flex-grow ml-2.5 w-full h-full bg-transparent font-primary-med text-base text-black 2md:text-sm" placeholder="Поиск"/>
                        </div>
                    </div>
                    : null
                }
            </div>
        </div>
    );
}

export default Title;    