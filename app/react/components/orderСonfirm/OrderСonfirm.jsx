import  './orderСonfirm.less'; 

function OrderСonfirm() {
 
  return (
    <div className='absolute inset-0 bg-[rgba(6,9,18,0.8)] w-full h-full'>
        <div className='shadow-[0px_25px_35px_0px_#E2E3F3A6] absolute inset-x-2/4 translate-x-[-50%] translate-y-[40%] w-full sm:w-[443px] bg-white rounded-lg px-6 pb-6'>
            <div className='w-full flex justify-center'>
                <div className='flex justify-center items-center px-6 h-[22px] rounded-b-[20px] shadow-[0px_4px_32px_0px_#9D3FFC6B] bg-[linear-gradient(90deg,#8CD23C_0%,#417A00_100%)]'>
                    <p className='family-bold font-bold text-xs text-white uppercase'>Подтверждение заказа</p>
                </div>
            </div>
            <div className='flex justify-end mb-5'>
                <button className='p-0 bg-inherit hover:bg-[rgba(241,245,249,1)]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </button>
            </div>
            <form className='mt-[-10px]'>
                <label htmlFor="sum" className='block family-bold text-black font-bold text-xs mb-4'>Сумма</label>
                <input type="text" name="sum" id='sum' placeholder=" " className='family-bold text-[13px] rounded px-4 mb-2 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                <p className='text-[10px] text-[#BEC1DB] mb-5'>Минимальная сумма для пополнения от 10 рублей.</p>
                <div className='flex items-center mb-6'>
                    <input type="checkbox" id="checkSum" className="toggleCheckbox"/>
                    <label htmlFor="checkSum"></label>
                    <p className='family-bold text-xs font-bold ml-2'>Списать 3567 DG</p>
                </div>
                <div className='flex justify-between gap-1 items-center'>
                    <button className="p-btn px-0 text-base rounded-lg w-full h-[60px] text-white">Оплатить</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default OrderСonfirm;