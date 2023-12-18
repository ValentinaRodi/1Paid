import  './returnFunds.css';
import product from '../../assets/images/product.svg';

function ReturnFunds() {
 
  return (
    <div className='overflow-hidden shadow-[0px_25px_35px_0px_#E2E3F3A6] w-[349px] bg-white rounded-lg px-6 pb-6'>
        <div className='mb-2.5 w-full flex justify-center'>
            <div className='flex justify-center items-center px-6 h-[22px] rounded-b-[20px] shadow-[0px_4px_32px_0px_#9D3FFC6B] bg-[linear-gradient(90deg,#8CD23C_0%,#417A00_100%)]'>
                <p className='family-bold font-bold text-xs text-white'>3 дня гарантия</p>
            </div>
        </div>
        <div>
            <div className="flex justify-center w-full mb-3">
                <div className="max-w-[120px] h-[114px] 3sm:max-w-[80px] 3sm:max-h-[80px]">
                    <img className="pc-preview-pic w-full" src={product} alt="picture"/>
                </div>
            </div>
            <h2 className='mb-2 family-acrom-bold text-[13px] font-bold text-[#BEC5DF] uppercase'>Название услуги:</h2>
            <h1 className='mb-2 family-acrom-bold text-[13px] font-bold text-bold'>100 первых мест в быстром варианте своими руками</h1>
            <p className='mb-2 family-acrom-bold font-medium text-[10px] text-[#BEC5DF]'>Тип: <span>Оружие</span></p>
            <p className='mb-2 family-acrom-bold font-medium text-[10px] text-[#BEC5DF]'>Кол: <span>33</span></p>
            <p className='mb-2 family-acrom-bold font-medium text-[10px] text-[#BEC5DF]'>Продажа от: <span>33</span> шт</p>
            <p className='mb-2 family-acrom-bold font-medium text-[10px] text-[#BEC5DF]'>Срок: <span>Навсегда</span></p>
            <p className='mb-6 family-acrom-bold font-medium text-[10px] text-[#BEC5DF]'>Макс. цена: <span className='text-black'>12000</span><span className='text-black'> ₽</span></p>
            <div>
                <button className="p-btn mb-3 tracking-wide family-bold font-bold px-0 text-sm rounded-[40px] w-full h-10 text-white">Вернуть деньги</button>
            </div>
            <p className='text-center family-acrom-bold font-medium text-sm text-[#BEC5DF] leading-4'>Для отмены сделки нажмите <br/>“Вернуть деньги”</p>
        </div>
    </div>
  );
}

export default ReturnFunds;