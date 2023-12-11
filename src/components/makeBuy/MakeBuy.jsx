import  './makeBuy.css';
import product from '../../assets/images/product.svg';

function MakeBuy() {
 
  return (
    <div className='overflow-hidden shadow-[0px_25px_35px_0px_#E2E3F3A6] w-[349px] bg-white rounded-lg p-6'>
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
                <button className="p-btn mb-3 tracking-wide family-bold font-bold px-0 text-sm rounded-[40px] w-full h-10 text-white">Оплатить товар</button>
            </div>
            <p className='mb-6 text-center family-acrom-bold font-medium text-sm text-[#BEC5DF] leading-4'>После оплаты товара сумма <br/>спишется с вашего баланса”</p>
            <div>
                <button className="bg-[linear-gradient(36.87deg,#339CFC_18.57%,#0046D6_80.26%)] hover:bg-[linear-gradient(36.87deg,#1c70be_18.57%,#013294_80.26%)] mb-3 tracking-wide family-bold font-bold px-0 text-sm rounded-[40px] w-full h-10 text-white">Подтвердить</button>
            </div>
            <p className='mb-3 text-center family-acrom-bold font-medium text-sm text-[#BEC5DF] leading-4'>Осмотрите товар перед принятием. <br/>В случае успеха нажмите “Подтвердить”</p>
            <div className='flex justify-center'>
                    <a href='#' className='underline family-acrom-bold font-bold text-sm text-[#C5CFE4] hover:text-[#0046D6]'>Оставить отзыв</a>
            </div>
        </div>
    </div>
  );
}

export default MakeBuy;