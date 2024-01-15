function ProductAdd() {

return (
    <div className='flex justify-between flex-wrap mb-6 gap-y-5 mt-[-15px]'>
        <div className='w-full sm:w-[32%]'>
            <label htmlFor="period" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Срок</label>
            <div className='rounded border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full'>
                <select name="period" id='period' className='appearance-none bg-inherit form-select family-acrom-bold text-[13px] px-4 h-12 w-full outline-none text-black'>
                    <option defaultValue="none">Не выбрано</option>
                    <option defaultValue="">месяц</option>
                    <option defaultValue="">год</option>
                </select>
            </div>
        </div>
        <div className='w-full sm:w-[32%]'>
            <label htmlFor="typeProduct" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Тип</label>
            <div className='rounded border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full'>
                <select name="typeProduct" id='typeProduct' className='appearance-none bg-inherit form-select family-acrom-bold text-[13px] px-4 h-12 w-full outline-none text-black'>
                    <option defaultValue="arms">Оружие</option>
                    <option defaultValue="">Оружие</option>
                    <option defaultValue="">Оружие</option>
                </select>
            </div>
        </div>
        <div className='w-full sm:w-[32%]'>
            <label htmlFor="content" className='block family-acrom-bold text-black font-bold text-xs mb-4'>Содержимое</label>
            <input type="text" name="content" id='content' defaultValue='Makmilan Gr-23' className='family-acrom-bold text-[13px] rounded px-4 border-solid border-[#CED0E840] bg-[linear-gradient(0deg,rgba(206,208,232,0.25),rgba(206,208,232,0.25)),linear-gradient(0deg,#EAEBF8,#EAEBF8)] shadow-[0px_4px_35px_0px_#8E91B026] h-12 w-full outline-none text-black'/>
        </div>
    </div>
)}

export default ProductAdd;
