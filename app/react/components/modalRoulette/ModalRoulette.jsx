import {useState, useEffect} from 'react';

function ModalRoulette(props) {
    const [writeOff, setWriteOff] = useState(true);
    const [sum, setSum] = useState(props.sum ? props.sum + '₽' : '');
    const [bgColor, setBgColor] = useState(false);

    const addBalance = (e) => {
        e.preventDefault();
        if(sum.slice(0, -1) >= 10) {
            props.closeModal();
        };
    };
    
    const handleWriteOff = (e) => {
        setWriteOff(!writeOff);
    };

    const handleChangeSum = (e) => {
        const input = e.target.value;
        const newValue = input.replace(/\D/g, '').slice(0, 11);
        
        if(sum.length <= input.length) {
            (input === '0') ? setSum('') : setSum(newValue + '₽');
        } else {
            // (input.length === 0) ? setSum(newValue === '' ? '' : newValue.replace(/^0+(?=\d)/, '') + '₽') : setSum(newValue.slice(0, -1) + '₽'); 
            (input.length === 1) ? setSum('') : setSum(newValue.slice(0, -1) + '₽'); 
        };
    };

    useEffect(() => {
        (sum.slice(0, -1) > 10) ? setBgColor(true) : setBgColor(false);
    }, [sum]);

    return (
        <div className='fixed inset-x-0 inset-y-0 flex items-start md:items-center justify-center mt-[10%] md:mt-0'>
            <div className='shadow-[0px_25px_35px_0px_#E2E3F3A6] w-full sm:w-[310px] bg-white rounded-lg px-6 pb-6'>
                <div className='w-full flex justify-center'>
                    <div className='flex justify-center items-center px-6 h-[22px] rounded-b-[20px] btn-primary bg-[linear-gradient(90deg,#8CD23C_0%,#417A00_100%)]'>
                        <p className='family-bold font-bold text-xs text-white uppercase'>Ваш выигрыш</p>
                    </div>
                </div>
                <div className='flex justify-end mb-5'>
                    <button onClick={props.closeModal} className='p-0 bg-inherit hover:bg-[rgba(241,245,249,1)]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
                <div className='mt-[-10px]'>
                    <div className='w-full flex flex-col justify-center items-center mb-6'>
                        <div className='w-[262px] mb-2 h-[81px] sm:h-[101px] flex items-center justify-center rounded-xl bg-[linear-gradient(90deg,#F5C63B_0%,#ED502A_100%)]'>
                            <div className='w-[259px] h-[76px] sm:h-[97px] bg-white flex items-center justify-center rounded-[11px]'>
                                <img className="w-[60%] " src='/img/uzkon12_gold.png' alt='uzkon'/>
                            </div>
                        </div>
                        <div className='font-secondary-bold font-bold text-[13px] text-black'>Золотой Uzkon UNG-12</div>
                    </div>
                    <div className='w-full mb-2'>
                        <button onClick={props.closeModal} className='btn bg-[#8439FE40] font-primary-bold cursor-pointer px-0 text-base rounded-lg w-full h-[60px] flex justify-center items-center text-[#8439FE]'>Продать за 999 рублей</button>
                    </div>
                    <div className='w-full'>
                        <button onClick={props.closeModal} className='btn btn-primary cursor-pointer px-0 text-base rounded-lg w-full h-[60px] flex justify-center items-center text-white'>Получить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalRoulette;