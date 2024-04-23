

function ModalUpTop(props) {
 
  return (
    <div className='fixed inset-x-0 inset-y-0 flex items-start md:items-center justify-center mt-[10%] md:mt-0 z-[100]'>
        <div className='shadow-[0px_25px_35px_0px_#E2E3F3A6] w-full sm:w-[310px] bg-white rounded-lg px-6 pb-6'>
            <div className='w-full flex justify-center'>
                <div className='flex justify-center items-center px-6 h-[22px] rounded-b-[20px] shadow-[0px_4px_32px_0px_#9D3FFC6B] bg-[linear-gradient(90deg,#8CD23C_0%,#417A00_100%)]'>
                    <p className='family-bold font-primary-bold font-bold text-xs text-white uppercase'>Успешно добавлен</p>
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
                <div className="flex w-full justify-center mb-5">
                    <div className="w-[100px] h-[100px]">
                        <img src="/img/icon-upTop.svg" alt="success"/>
                    </div>
                </div>
                <div className="mb-6">
                    <p className="font-secondary-bold text-[13px] text-black mb-2">Ваш товар успешно добавлен</p>
                    <p className="font-primary-med text-[#738099] leading-6 text-[14px]">Ваш товар успешно создан, чтобы ваш товар отображался в публичном доступе, вам надо Поднять в топ.</p>
                </div>
                <div className='flex justify-between gap-1 items-center'>
                    <button onClick={props.clickUpTop} className="p-btn px-0 text-base rounded-lg w-full h-[60px] text-white shadow-[0px_4px_24px_0px_#A63DFD40]">Поднять в топ</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ModalUpTop;