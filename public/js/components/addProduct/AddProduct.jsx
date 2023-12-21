import  './addProduct.less'; 

function AddProduct() {
 
  return (
    <div className='absolute inset-0 bg-[rgba(6,9,18,0.8)] w-full h-full'>
        <div className='shadow-[0px_25px_35px_0px_#E2E3F3A6] absolute inset-x-2/4 translate-x-[-50%] translate-y-[0%] sm:translate-y-[5%] w-full md:w-[758px] bg-white rounded-lg px-6 pb-6'>
            <div className='w-full sm:hidden flex justify-center'>
                <div className='flex justify-center items-center px-6 h-[22px] rounded-b-[20px] shadow-[0px_4px_32px_0px_#9D3FFC6B] bg-[linear-gradient(90deg,#8CD23C_0%,#417A00_100%)]'>
                    <p className='family-bold font-bold text-xs text-white uppercase'>Добавление товара</p>
                </div>
            </div>
            <div className='flex justify-end mb-5 pt-0 sm:pt-6'>
                <button className='p-0 bg-inherit hover:bg-[rgba(241,245,249,1)]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </button>
            </div>
            <form className='mt-[-10px]'>
                <div className='flex justify-between flex-wrap mb-6 gap-y-5'>
                    <div className='w-full sm:w-[32%]'>
                        <label htmlFor="category" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Категория</label>
                        <div className='rounded border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full'>
                            <select name="category" id='category' className='appearance-none bg-inherit form-select family-acrom-bold text-[13px] px-4 h-12 w-full outline-none text-black'>
                                <option value="pinCode">Пин-коды</option>
                                <option value="">Пин-коды</option>
                                <option value="">Пин-коды</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-full sm:w-[32%]'>
                        <label htmlFor="exist" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Наличие</label>
                        <input type="text" name="exist" id='exist' value='1000шт' className='family-acrom-bold text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                    </div>
                    <div className='w-full sm:w-[32%]'>
                        <label htmlFor="server" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Сервер</label>
                        <div className='rounded border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full'>
                            <select name="server" id='server' className='appearance-none bg-inherit form-select family-acrom-bold text-[13px] px-4 h-12 w-full outline-none text-black'>
                                <option value="ru.warface.com">ru.warface.com</option>
                                <option value="">ru.warface.com</option>
                                <option value="">ru.warface.com</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between flex-wrap mb-6 gap-y-5'>
                    <div className='w-full sm:w-[32%]'>
                        <label htmlFor="period" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Срок</label>
                        <div className='rounded border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full'>
                            <select name="period" id='period' className='appearance-none bg-inherit form-select family-acrom-bold text-[13px] px-4 h-12 w-full outline-none text-black'>
                                <option value="none">Не выбрано</option>
                                <option value="">месяц</option>
                                <option value="">год</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-full sm:w-[32%]'>
                        <label htmlFor="typeProduct" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Тип</label>
                        <div className='rounded border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full'>
                            <select name="typeProduct" id='typeProduct' className='appearance-none bg-inherit form-select family-acrom-bold text-[13px] px-4 h-12 w-full outline-none text-black'>
                                <option value="arms">Оружие</option>
                                <option value="">Оружие</option>
                                <option value="">Оружие</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-full sm:w-[32%]'>
                        <label htmlFor="content" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Содержимое</label>
                        <input type="text" name="content" id='content' value='Makmilan Gr-23' className='family-acrom-bold text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                    </div>
                </div>
                <div className='rounded-xl border border-solid border-[#E9EAF4] px-3 pt-3 mb-3'>
                    <div className='flex justify-end'>
                        <button className='p-0'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#D2D5EA"/>
                                <path d="M6 12L18 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className='flex justify-between flex-wrap mb-6 gap-y-5 mt-[-15px]'>
                        <div className='w-full sm:w-[32%]'>
                            <label htmlFor="period" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Срок</label>
                            <div className='rounded border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full'>
                                <select name="period" id='period' className='appearance-none bg-inherit form-select family-acrom-bold text-[13px] px-4 h-12 w-full outline-none text-black'>
                                    <option value="none">Не выбрано</option>
                                    <option value="">месяц</option>
                                    <option value="">год</option>
                                </select>
                            </div>
                        </div>
                        <div className='w-full sm:w-[32%]'>
                            <label htmlFor="typeProduct" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Тип</label>
                            <div className='rounded border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full'>
                                <select name="typeProduct" id='typeProduct' className='appearance-none bg-inherit form-select family-acrom-bold text-[13px] px-4 h-12 w-full outline-none text-black'>
                                    <option value="arms">Оружие</option>
                                    <option value="">Оружие</option>
                                    <option value="">Оружие</option>
                                </select>
                            </div>
                        </div>
                        <div className='w-full sm:w-[32%]'>
                            <label htmlFor="content" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Содержимое</label>
                            <input type="text" name="content" id='content'value='Makmilan Gr-23' className='family-acrom-bold text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                        </div>
                    </div>
                </div>
                <div className='rounded-xl border border-solid border-[#E9EAF4] px-3 pt-3 mb-6'>
                    <div className='flex justify-end'>
                        <button className='p-0'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#D2D5EA"/>
                                <path d="M6 12L18 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className='flex justify-between flex-wrap mb-6 gap-y-5 mt-[-15px]'>
                        <div className='w-full sm:w-[32%]'>
                            <label htmlFor="period" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Срок</label>
                            <div className='rounded border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full'>
                                <select name="period" id='period' className='appearance-none bg-inherit form-select family-acrom-bold text-[13px] px-4 h-12 w-full outline-none text-black'>
                                    <option value="none">Не выбрано</option>
                                    <option value="">месяц</option>
                                    <option value="">год</option>
                                </select>
                            </div>
                        </div>
                        <div className='w-full sm:w-[32%]'>
                            <label htmlFor="typeProduct" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Тип</label>
                            <div className='rounded border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full'>
                                <select name="typeProduct" id='typeProduct' className='appearance-none bg-inherit form-select family-acrom-bold text-[13px] px-4 h-12 w-full outline-none text-black'>
                                    <option value="arms">Оружие</option>
                                    <option value="">Оружие</option>
                                    <option value="">Оружие</option>
                                </select>
                            </div>
                        </div>
                        <div className='w-full sm:w-[32%]'>
                            <label htmlFor="content" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Содержимое</label>
                            <input type="text" name="content" id='content' value='Makmilan Gr-23' className='family-acrom-bold text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-6'>
                    <button className='p-0'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#D2D5EA"/>
                            <path d="M12 18V6M6 12L18 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
                <div className='h-px w-full bg-[#E9EAF4] mb-6'></div>
                <div>
                    <label htmlFor="title" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Заголовок</label>
                    <input type="text" name="title" id='title' placeholder='Продам 5000 террабайт' className='mb-5 family-acrom-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 mb-2 border-solid border-red-error bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                </div>
                <div className='flex justify-between flex-wrap mb-6 gap-y-5'>
                    <div className='w-full sm:w-[48%]'>
                        <label htmlFor="about" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Описание (Не обязательно)</label>
                        <input type="text" name="about" id='about' placeholder="Описание" className='family-acrom-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                    </div>
                    <div className='w-full sm:w-[48%]'>
                        <label htmlFor="price" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Цена</label>
                        <input type="text" name="price" id='price' placeholder="20005 Рублей" className='family-acrom-bold placeholder:text-[#BAC9E5] text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
                    </div>
                </div>
                <div className='flex justify-between gap-1 items-center'>
                    <button className="p-btn px-0 text-base rounded-lg w-full h-[60px] text-white shadow-[0px_4px_24px_0px_#A63DFD40]">Вывести средства</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default AddProduct;