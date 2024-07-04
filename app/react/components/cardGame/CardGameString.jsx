import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";
import ModalChangeTovar from '../modalChangeTovar/ModalChangeTovar';

function CardGameString(props) {
    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const body = document.querySelector('body');
    const [checked, setChecked] = useState(props.like ? true : false);
    const navigate = useNavigate();

    const openChangeModalTovar = () => {
        body.style.overflow = 'hidden';
        setModalEl(<ModalChangeTovar
            closeModal={closeModal} name={props.name} description={props.description} price={props.price} clickDelTovar={clickDelTovar}
        />);
        setModalOpen(true);
    };

    const closeModal = () =>{
        body.style.overflow = 'auto';
        setModalOpen(false);
        setModalEl('');
    };

    useEffect(() => {
        const modal = document.getElementById('modal');

        if(modalOpen) {
            modal.classList.add('modal');
            modal.textContent = '';
            
            const containerModal = document.createElement("div");
            const root = createRoot(containerModal);
            root.render(modalEl);
            modal.appendChild(containerModal);   
        };

        if(!modalOpen) {
            modal.classList.remove('modal');
            modal.textContent = '';
        };
        
    }, [modalEl]);

    const clickDelTovar = () => {
        console.log(props.seoName);
        props.cliclShowDelModal();
    };

    const changeCheck = () => {
        setChecked(!checked);
    };

    const openChat = () => {
        navigate('/chat',  { state: {name:props.name, description:props.description, price:props.price, newCard:props.new, rank: props.rank } });
    };

    const goProfile = () => {
        navigate('/profile',  { state: {userName:props.name } });
    };

    const goTovar = () => {
        navigate('/tovars',  { state: {userName:props.name } });
    };
    
    return (
        <div className="pc rounded-lg bg-white w-full md:w-auto">
            <div className='pc-plate-container h-5 sm:h-[22px]  flex items-center justify-start'>
                {(props.new === '1') ? 
                    <div className='pc-plate bg-gradient-primary h-full w-[70px] sm:w-20 flex items-center justify-center font-bold bg-gradient-primary uppercase'>new</div>
                    : null
                }
                {(props.guarantees === '1') ? 
                    <div className='pc-plate bg-gradient-primary h-full min-w-[120px] flex items-center justify-center font-bold bg-gradient-primary'>3 дня гарантия</div>
                    : null
                }
            </div>
            <div className="pc-supinfo mt-1 font-secondary-bold text-[13px] text-black ">
                <div className="pc-rating flex gap-1 items-center">
                    <div className="pc-rating-icon flex-shrink-0 w-[22px] h-[22px] [&amp;_svg]:w-full 3sm:w-4 3sm:h-4">
                        <img src="/img/icon-pc-rating.svg" alt="icon-pc-rating"/>
                    </div>
                    <span>{props.rank}</span>
                </div>
            </div>
            {/* <Link to={`${props.id}-${props.seo_name}`} className="pc-preview flex justify-center items-center">
                <div className="pc-preview-inner max-w-[120px] w-full h-[120px]">
                    <img className="pc-preview-pic w-full" src={`/img/${props.icon}`} alt="picture"/>
                </div>
            </Link>
            <Link to={`${props.id}-${props.seo_name}`} className="pc-info">
                <div className="pc-title font-bold font-secondary-bold text-[13px] text-black">{props.name}</div>
                <div className="pc-subtitle mt-1 font-secondary-bold font-bold text-xs text-[#A6B1C7]">{props.description}</div>
            </Link> */}
            <div onClick={openChat} className="pc-preview flex justify-center items-center cursor-pointer">
                <div className="w-[50px] h-[50px]">
                    <img className={`${props.private ? 'opacity-40' : null} pc-preview-pic w-full`} src={`/img/${props.icon}`} alt="picture"/>
                </div>
            </div>
            <div onClick={openChat} className="pc-info cursor-pointer">
                <div className={`${props.private ? 'opacity-40' : null} pc-title font-secondary-bold font-bold text-[13px] text-black`}>{props.name}</div>
                <div className="pc-subtitle font-secondary-bold font-bold text-[10px] leading-3 text-[#A6B1C7]">{props.description}</div>
            </div>
            <div className="pc-subinfo text-[#A6B1C7] flex flex-col gap-1 sm:gap-2">
                <div className="pc-subinfo-value font-secondary-med text-[10px]">Тип: Оружие</div>
                <div className="pc-subinfo-value font-secondary-med text-[10px]">Кол: 33</div>
                <div className="pc-subinfo-value font-secondary-med text-[10px]">Продажа от: 33 шт</div>
                <div className="pc-subinfo-value font-secondary-med text-[10px]">Срок: Навсегда</div>
            </div>
            <div className="pc-tbar">
                <div className="pc-tbar-inner flex items-center gap-3 justify-end">
                    <button onClick={goProfile} className="pc-source flex-shrink-0 w-11 h-11">
                        <div className="pc-source-user w-full h-full relative">
                            <div className="pc-source-status _green"></div>
                            <img className="w-full h-full object-cover object-center" src="/img/avatar-example-3.347bde69.png" alt="picture"/>
                        </div>
                    </button>
                    <div className="pc-total min-h-11 rounded-full border border-solid border-[#F3F7FF] flex items-center justify-end gap-4">
                        {props.notSale ?
                            <div className="pc-total-inf flex flex-wrap gap-x-[5px] font-secondary-bold text-xs 3sm:text-[10px]">
                                <span className="text-gradient-green">Куплен</span>
                                <span className="text-[#417a00] font-secondary-bold font-bold">{props.price}<b> ₽</b></span>
                            </div>
                            :
                            <div className="pc-total-inf flex flex-nowrap md:flex-wrap gap-x-[5px] flex">
                                <div className="text-[#BEC1DB] font-secondary-bold text-xs">Цена</div>
                                {props.priceDouble === 'true' 
                                    ?   <div className='font-secondary-bold font-bold text-xs w-max md:w-auto flex flex-col min-[1835px]:flex-row gap-x-2'>
                                            <div className='flex-shrink-0'>от {props.price1} ₽</div>
                                            <div className='flex-shrink-0'>до {props.price2} ₽</div>
                                        </div>
                                    : <div className="text-black font-bold font-secondary-bold text-xs">{props.price} ₽</div>
                                }
                            </div>
                        }
                        <div className="pc-total-btn-wrap flex-shrink-0 w-9 sm:w-11 h-9 sm:h-11 ">
                            <button onClick={openChat} className="btn btn-secondary pc-total-btn rounded-full w-full h-full justify-center" href="#">
                                <div className="btn-icon w-1/2 [&amp;_svg]:w-full text-white">
                                    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.7671 8.36089H13.0736C13.4234 8.36089 13.6981 8.07175 13.6981 7.72307C13.6981 7.3659 13.4234 7.08526 13.0736 7.08526H10.7671C10.4174 7.08526 10.1426 7.3659 10.1426 7.72307C10.1426 8.07175 10.4174 8.36089 10.7671 8.36089ZM15.8132 3.93954C16.3211 3.93954 16.6542 4.11813 16.9872 4.50932C17.3203 4.90052 17.3786 5.4618 17.3037 5.9712L16.5126 11.55C16.3627 12.6224 15.4634 13.4124 14.4059 13.4124H5.32134C4.21387 13.4124 3.29792 12.5458 3.20632 11.4233L2.44025 2.1528L1.1829 1.93169C0.849824 1.87216 0.616673 1.54049 0.67496 1.20032C0.733248 0.852497 1.058 0.622032 1.3994 0.673908L3.38535 0.97921C3.66846 1.03109 3.87663 1.26835 3.90161 1.5575L4.05982 3.46245C4.0848 3.73544 4.3013 3.93954 4.56776 3.93954H15.8132ZM5.18794 14.7565C4.48849 14.7565 3.92226 15.3348 3.92226 16.0492C3.92226 16.755 4.48849 17.3333 5.18794 17.3333C5.87907 17.3333 6.4453 16.755 6.4453 16.0492C6.4453 15.3348 5.87907 14.7565 5.18794 14.7565ZM14.5556 14.7565C13.8562 14.7565 13.29 15.3348 13.29 16.0492C13.29 16.755 13.8562 17.3333 14.5556 17.3333C15.2468 17.3333 15.813 16.755 15.813 16.0492C15.813 15.3348 15.2468 14.7565 14.5556 14.7565Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pc-ibar flex justify-end h-full items-end min-[768px]:items-center flex-wrap gap-3">
                <div className='flex flex-col gap-5 justify-center h-full pt-3 md:pt-0'>
                    {(props.change === 'true') ?
                        (
                            <button onClick={openChangeModalTovar} className='bg-inherit w-4 h-4 md:w-[19px] md:h-[18px]'>
                                <img src="/img/icon-change-card.svg" alt="icon change card"/>
                            </button>
                        )
                        : null
                    }
                    <label className="pc-btn-like">
                        <input name="like" type="checkbox" checked={checked} onChange={changeCheck}/>
                        <div className="btn-icon btn-icon-none-shadow">
                            <svg className="_default" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.00689 10.4136L11.0819 15.0674V15.0674L16.1568 10.4136V10.4136L19.0394 7.77019C20.4408 6.48508 20.4408 4.4015 19.0394 3.11639C17.638 1.83128 15.3659 1.83128 13.9644 3.11639L11.0819 5.77836L8.19927 3.135C6.79786 1.84989 4.52572 1.84989 3.1243 3.135C1.72289 4.42012 1.72289 6.50369 3.1243 7.78881L6.00689 10.4136ZM12.5024 1.82265C14.6914 -0.184698 18.2405 -0.184698 20.4295 1.82265C22.6185 3.82999 22.6185 7.08454 20.4295 9.09189L18.9882 10.4136V10.4136L11.0814 17.6828V17.6828L3.15434 10.4136V10.4136L1.71305 9.09189C-0.475963 7.08454 -0.475963 3.82999 1.71305 1.82265C3.90205 -0.184698 7.45114 -0.184698 9.64015 1.82265L11.0814 3.14433L12.5024 1.82265Z" fill="currentColor"></path>
                            </svg>
                            <svg className="_checked" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.5717 1.5605C14.7284 -0.520167 18.2251 -0.520167 20.3817 1.5605C22.5384 3.64117 22.5384 7.0146 20.3817 9.09527L18.9617 10.4652L11.1717 18L3.36172 10.4652L1.94172 9.09527C-0.214949 7.0146 -0.214949 3.64117 1.94172 1.5605C4.09839 -0.520167 7.59505 -0.520167 9.75172 1.5605L11.1717 2.93046L12.5717 1.5605Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </label>
                    {(props.change === 'true') ?
                        (
                            <button onClick={clickDelTovar} className='bg-inherit w-3.5 h-3.5 md:w-[18px] md:h-[18px]'>
                                <img src="/img/icon-del-card.svg" alt="icon delete card"/>
                            </button>
                        )
                        : null
                    }
                </div>
            </div>
        </div>
    );
};

export default CardGameString;