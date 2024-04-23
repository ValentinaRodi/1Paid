import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { createRoot } from "react-dom/client";
import ModalChangeTovar from '../modalChangeTovar/ModalChangeTovar';
import { useNavigate  } from 'react-router-dom';
import ModalPay from '../modalPay/ModalPay';
import ModalFeedback from '../modalFeedback/ModalFeedback';

function CardGameChat(props) {
    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const body = document.querySelector('body');

    const [sumEdit, setSumEdit] = useState(false);
    const [sum, setSum] = useState(props.price);
    const [newSum, setNewSum] = useState('');
    const inputSumRef = useRef(null);

    const openModalBuy = () => {
        body.style.overflow = 'hidden';
        setModalEl(<ModalPay closeModal={closeModal} title='Подтверждение заказа' sum='3567'/>);
        setModalOpen(true);
    };

    const openFeedback = () => {
        body.style.overflow = 'hidden';
        setModalEl(<ModalFeedback openModalSubmit={props.openModalSubmit} closeModal={closeModal} title='Подтверждение заказа' sum='3567'/>);
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

    const clickEditSum = () => {
        setSumEdit(!sumEdit);
    };

    const clickNewEditSum = () => {
        (newSum === '') ? setSum(props.price) : setSum(newSum);
        setSumEdit(false);
    };

    const handleSumChange = (e) => {
        const input = e.target.value;
        const newValue = input.replace(/\D/g, '').slice(0, 11);
        
        if(newSum.length <= input.length) {
            (input === '0') ? setNewSum('') : setNewSum(newValue);
        } else {
            (input.length === 1) ? setNewSum('') : setNewSum(newValue); 
        };
    };

    const goTovar = () => {
        navigate('/tovars',  { state: {userName:props.name } });
    };

    useEffect(() => {
        (sumEdit) ? inputSumRef.current.focus() : null;
    }, [sumEdit]);
    return (
        <div className="relative flex flex-col px-6 pt-8 pb-6 rounded-lg bg-white min-w-[270px] w-full md:w-auto">
            <div className='pc-plate-container h-[22px] flex items-center justify-center'>
                {props.new === '1' ? 
                    <div className='pc-plate bg-gradient-primary  h-full w-[79px] flex items-center justify-center font-bold bg-gradient-primary uppercase'>new</div>
                    : null
                }
                {props.garant === '1' ?
                    <div className='pc-plate bg-gradient-secondary  h-full min-w-[120px] flex items-center justify-center font-bold text-xs font-primary-bold'>3 дня гарантия</div>
                    : null
                }
            </div>
            {/* <Link to={`${props.id}-${props.seoName}`} className='pc-link w-full'>
                <div className="pc-preview flex justify-center items-center mb-3">
                    <div className="pc-preview-inner max-w-[80px] h-[80px]">
                        <img className="pc-preview-pic w-full" src={`/img/${props.icon}`} alt="picture"/>
                    </div>
                </div>
                <div className="pc-info">
                    <div className="pc-subtitle mb-1 font-secondary-bold font-bold text-[13px] text-[#A6B1C7] uppercase">Название услуги:</div>
                    <div className="pc-title font-bold font-secondary-bold text-[13px] text-black">{props.description}</div>
                </div>
            </Link> */}
            <button onClick={goTovar} className='pc-link w-full bg-inherit'>
                <div className="pc-preview flex justify-center items-center mb-3">
                    <div className="pc-preview-inner max-w-[120px] h-[114px]">
                        <img className="pc-preview-pic w-full" src={`/img/${props.icon}`} alt="picture"/>
                    </div>
                </div>
                <div className="pc-info">
                    <div className="pc-subtitle mb-1 font-secondary-bold font-bold text-[13px] text-[#A6B1C7] uppercase text-start">Название услуги:</div>
                    <div className="pc-title font-bold font-secondary-bold text-[13px] text-black text-start">{props.description}</div>
                </div>
            </button>
            <div className="pc-subinfo text-[#A6B1C7] flex flex-col gap-0 sm:gap-1">
                <div className="pc-subinfo-value font-secondary-med text-[10px]">Тип: Оружие</div>
                <div className="pc-subinfo-value font-secondary-med text-[10px]">Кол: 33</div>
                <div className="pc-subinfo-value font-secondary-med text-[10px]">Продажа от: 33 шт</div>
                <div className="pc-subinfo-value font-secondary-med text-[10px]">Срок: Навсегда</div>
                {sumEdit ?
                    <div className='flex w-full justify-between items-center'>
                        <div className="w-full pc-subinfo-value font-secondary-med text-[10px] flex"> 
                        <div className='w-[61px] shrink-0'>Макс. цена:</div>
                            <input ref={inputSumRef} onChange={handleSumChange} value={newSum} type="text" name="sum" id="sum" placeholder='0' className="font-secondary-bold text-black w-full px-1 outline-none bg-[#EAEBF8] rounded-[4px] mr-2"/>
                        </div>
                        <button onClick={clickNewEditSum} className='bg-inherit self-start w-[15px] h-[12px] mr-[6px]'>
                            <img className="pc-preview-pic w-full" src='/img/icon-check-green.svg' alt="icon edit sum"/>
                        </button>
                        <button onClick={clickEditSum} className='bg-inherit self-start w-[12px] h-[12px]'>
                            <img src="/img/icon-del-card.svg" alt="icon close"/>
                        </button>
                    </div>
                    : 
                    <div className='flex w-full justify-between items-center'>
                        <div className="pc-subinfo-value font-secondary-med text-[10px] flex">
                            <div className='w-[65px]'>Макс. цена:</div>
                            <div className='font-secondary-bold text-black'>{sum}₽</div>
                        </div>
                        <button onClick={clickEditSum} className='bg-inherit self-start'>
                            <img className="pc-preview-pic w-full" src='/img/icon-edit-sum.svg' alt="icon edit sum"/>
                        </button>
                    </div>
                }
            </div>
            <div className="pc-tbar mb-6">
                <button onClick={openModalBuy} className='w-full mb-3 btn btn-secondary h-[41px] text-white text-sm font-primary-bold flex items-center justify-center rounded-[40px]'>Оплатить</button>
                <div className='w-full flex items-center justify-center'>
                    <div className="pc-subinfo-value max-w-40 text-center font-secondary-med text-[#A6B1C7] text-[10px]">После оплаты товара сумма спишется с вашего баланса</div>
                </div>
            </div>
            <div className="pc-tbar mb-3">
                <button onClick={openFeedback} className='w-full mb-3 btn btn-primary h-[41px] text-white text-sm font-primary-bold flex items-center justify-center rounded-[40px]'>Подтвердить</button>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className="pc-subinfo-value text-center font-secondary-med text-[#A6B1C7] text-[10px]">Осмотрите товар перед принятием.</div>
                    <div className="pc-subinfo-value text-center font-secondary-med text-[#A6B1C7] text-[10px]">В случае успеха нажмите “Подтвердить”</div>
                </div>
            </div>
            <button onClick={openFeedback} className="bg-inherit text-center font-secondary-med text-[#C5CFE4] underline text-xs">Оставить отзыв</button>
        </div>
    );
};

export default CardGameChat;