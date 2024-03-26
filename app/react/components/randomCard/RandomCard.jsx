function RandomCard(props) {

    return (
        <div className="csc rounded-lg min-h-[235px] flex md:min-h-[200px]">
            <div className="csc-bg">
                <img className="csc-bg-pic" src={`/img/${props.iconBg}`} alt="picture"/>
            </div>
            <div className="csc-case">
                <img className="csc-case-pic" src={`/img/${props.icon}`} alt="picture"/>
            </div>
            <div className="csc-inner p-6 inline-flex flex-col items-start">
                <div className="csc-type font-secondary-bold text-base text-white ">Рулетка</div>
                <div className="csc-title font-primary-bold italic text-[45px] tracking-wider uppercase leading-none ">{props.name}</div>
                <div className="csc-value mt-3 mb-5 rounded-full h-10 min-w-[100px] px-8 inline-flex justify-center items-center bg-gradient-primary">
                    <div className="csc-value-text font-primary-bold text-base text-white ">{props.price}₽</div>
                    {props.pricePD ?
                        <div className="csc-value-attach-bottom bg-gradient-secondary rounded-full h-5 justify-center flex items-center font-primary-bold text-[11px] text-white  px-1.5">{props.pricePD}PD</div>
                        : null
                    }
                    {props.discount ?
                        <div className="csc-value-attach-top rounded-full h-5 px-1 py-[1px] flex items-center font-primary-bold text-sm text-white leading-[0] ">{props.discount}%</div>
                        : null
                    }
                </div>
                <button onClick={props.clickRoulette} className="btn btn-secondary csc-btn mt-auto rounded-full h-[45px] px-6 justify-center " href="#">
                    <div className="btn-text font-primary-bold text-xs text-white uppercase">Крутить рулетку</div>
                </button>
            </div>
        </div>
    );
};

export default RandomCard;