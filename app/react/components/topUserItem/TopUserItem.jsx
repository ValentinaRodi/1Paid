import { useNavigate  } from 'react-router-dom';

function TopUserItem(props) {
    const navigate = useNavigate();

    const goProfile = () => {
        navigate('/profile',  { state: {userName: 'Sansa' } });
    };
    
    return (
        <div className={`${props.colorBg ? 'bg-[#E7EAF2]' : 'bg-white'} tuc rounded-xl py-2 px-4 sm:px-6 sm:py-6 flex items-center gap-4  lustify-between`}>
            <div className='flex  justify-between gap-2 sm:gap-4 flex-col-reverse items-start sm:flex-row sm:items-center'>
                {/* <div className="hidden min-[430px]:block tuc-avatar font-secondary-bold text-[#1D222C] pr-0 md:pr-6 text-xs sm:text-lg">#{props.idUser}</div> */}
                {/* <div className='flex items-center justify-between gap-2 sm:gap-4 flex-wrap min-[370px]:flex-nowrap'>
                    <div className="tuc-avatar flex-shrink-0 rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] overflow-hidden ">
                        <img className="tuc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user"/>
                    </div>
                    <div className="tuc-username font-secondary-bold text-[#1D222C] text-[10px] sm:text-lg">{props.name}</div>
                </div> */}
                <div className="fbc-info flex-shrink-0 flex gap-3 ">
                    <div className="fbc-avatar flex-shrink-0 rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] overflow-hidden ">
                        <img className="fbc-avatar-pic w-full h-full object-cover" src="/img/avatar-example-4.6cd623f4.png" alt="user"/>
                    </div>
                    <div className="fbc-info-inner">
                        <button onClick={goProfile} className="mt-2.5 fbc-username user-link bg-inherit font-secondary-bold text-sm sm:text-lg text-[#1D222C]">{props.name}</button>
                    </div>
                </div>
            </div>
            <div className="tuc-info flex items-center ml-auto text-lg font-secondary-bold text-[#969BA5] gap-4 flex-wrap sm:flex-nowrap justify-end sm:justify-between">
                <div className="tuc-info-bought flex items-center border-r-solid border-r-0 sm:border-r border-r-[#DBE0ED] gap-1 pr-0 sm:pr-4 flex-wrap">
                    <div className="tuc-info-bought-text text-[10px] sm:text-lg">Купленные товары:</div>
                    <div className="tuc-info-bought-count text-[#1D222C] text-[10px] sm:text-lg">{props.tovars}</div>
                </div>
                <div className="tuc-info-earned flex items-center gap-1 flex-wrap">
                    <div className="tuc-info-earned-text text-[10px] sm:text-lg">Заработано:</div>
                    <div className="tuc-info-earned-count text-[#1D222C] text-[10px] sm:text-lg">{props.earn}</div>
                </div>
            </div>
        </div>
    );
}

export default TopUserItem;