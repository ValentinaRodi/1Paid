/* eslint-disable react/prop-types */
import  './registration.less';

function Registration(props) {
    return (
    <div>
        <div className='absolute z-20 inset-x-2/4 translate-x-[-50%] top-[8%] w-full sm:w-[540px] bg-[#F7F7FC] rounded-3xl px-10 pb-10 pt-5'>
            <div className='flex justify-end'>
                <button onClick={props.closeRegistration} className='p-0 hover:bg-[rgba(241,245,249,1)] rounded-full'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="38" height="38" rx="19" stroke="#DDE1F3" strokeWidth="2"/>
                        <path d="M13.2754 26.7246C12.9082 26.3551 12.9082 25.7584 13.2754 25.389L25.3333 13.3311C25.5648 13.0608 25.9283 12.9431 26.2743 13.0263C26.6203 13.1095 26.8905 13.3797 26.9737 13.7257C27.0569 14.0717 26.9392 14.4352 26.6689 14.6667L14.611 26.7246C14.2416 27.0918 13.6449 27.0918 13.2754 26.7246Z" fill="#DDE1F3"/>
                        <path d="M13.2754 13.2754C13.6449 12.9082 14.2416 12.9082 14.611 13.2754L26.6689 25.3333C26.9392 25.5648 27.0569 25.9283 26.9737 26.2743C26.8905 26.6203 26.6203 26.8905 26.2743 26.9737C25.9283 27.0569 25.5648 26.9392 25.3333 26.6689L13.2754 14.611C12.9082 14.2416 12.9082 13.6449 13.2754 13.2754Z" fill="#DDE1F3"/>
                    </svg>
                </button>
            </div>
            <form className='mt-[-10px] mb-6'>
                <h1 className='family-bold text-black font-bold text-[28px] mb-11'>Регистрация</h1>
                <div className='input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-6'>
                    <input type="text" name="name" id='name' placeholder=" " className='input input-label family-bold h-full w-full outline-none text-black'/>
                    <label htmlFor="name" className='label input-label text-grey'>Имя пользователя</label>
                </div>
                <div className='input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-6'>
                    <input type="email" name="email" id='email'  placeholder=" " className='input input-label family-bold h-full w-full outline-none text-black'/>
                    <label htmlFor="email" className='label input-label text-grey'>Эл. почта</label>
                </div>
                <div className='input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-6'>
                    <input type="password" name="password" id='password'  placeholder=" " className='input input-label family-bold h-full w-full outline-none text-black'/>
                    <label htmlFor="password" className='label input-label text-grey'>Придумайте пароль</label>
                </div>
                <div className='input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-6'>
                    <input type="password" name="repeatPassword" id='repeatPassword'  placeholder=" " className='input input-label family-bold h-full w-full outline-none text-black'/>
                    <label htmlFor="repeatPassword" className='label input-label text-grey'>Повторите пароль</label>
                </div>
                <div className="input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-6">
                    <input type="text" name="secretWorld" id="secretWorld" placeholder=" " className='input input-label family-bold h-full w-full outline-none text-black'/>
                    <label htmlFor="secretWorld" className='label input-label text-grey'>Секретное слово (мин. 8 букв)</label>  
                </div>
                <div className='flex gap-2 mb-8'>
                    <input type="checkbox" id="assent" name="assent" className='custom-checkbox'/>
                    <label htmlFor="assent" className='check text-sm sm:text-base text-check'>Я подтверждаю, что ознакомлен справилами сайта и пользовательским соглашением</label>
                </div>
                <div className='flex justify-between gap-1 items-center'>
                    <button className="main_btn px-0 text-xs md:text-base rounded-xl xs:rounded-lg w-[230px] h-14 sm:h-[70px] text-white uppercase">Создать аккаунт</button>
                    <p className='family-bold text-xs sm:text-sm font-bold text-grey uppercase'>или</p>
                    <div className='flex'>
                        <button className='inst shadow-[0px_4px_15px_2px_rgba(249,181,68,0.45)] bg-no-repeat bg-cover bg-center p-0 rounded-full w-12 h-12 mr-1'></button>
                        <button className='gmail shadow-[0px_4px_15px_2px_rgba(255,138,128,0.45)] bg-no-repeat bg-cover bg-center p-0 rounded-full w-12 h-12 mr-1'></button>
                        <button className='p-vk shadow-[0px_4px_15px_2px_rgba(100,122,232,0.45)] bg-no-repeat bg-cover bg-center p-0 rounded-full w-12 h-12 mr-1'></button>
                    </div>
                </div>
            </form>
            <div className='h-px w-full bg-[#E1E1EF] mb-3.5'></div>
            <p className='text-[#CFD2EA] text-center mb-2.5'>Уже есть аккаунт?</p>
            <button className='w-full flex justify-center items-center gap-3 h-[70px] bg-[#ECECF7] hover:bg-[rgba(208,216,243,1)] rounded-xl text-base text-[#9595AE] uppercase'>войти
                <svg className='mb-2' width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.5 5.72727H7.5V2.86364C7.5 1.28209 6.15685 0 4.5 0H1.5C0.947715 0 0.5 0.427365 0.5 0.954545C0.5 1.48173 0.947715 1.90909 1.5 1.90909H4.5C5.05228 1.90909 5.5 2.33646 5.5 2.86364V5.72727H3.5C1.84315 5.72727 0.5 7.00937 0.5 8.59091V18.1364C0.5 19.7179 1.84315 21 3.5 21H19.5C21.1569 21 22.5 19.7179 22.5 18.1364V8.59091C22.5 7.00937 21.1569 5.72727 19.5 5.72727ZM20.5 18.1364C20.5 18.6636 20.0523 19.091 19.5 19.091H3.5C2.94772 19.091 2.5 18.6636 2.5 18.1364V8.59095C2.5 8.06377 2.94772 7.63641 3.5 7.63641H19.5C20.0523 7.63641 20.5 8.06377 20.5 8.59095V18.1364Z" fill="#9595AE"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.4436 9C10.2734 9.01026 9.28114 9.86309 9.09516 11.0185C8.90918 12.1739 9.58369 13.295 10.6916 13.672C10.6871 13.7145 10.6871 13.7575 10.6916 13.8V17.2004C10.6916 17.6422 11.0498 18 11.4916 18C11.9334 18 12.2916 17.6422 12.2916 17.2004V13.8C12.2962 13.7494 12.2962 13.6986 12.2916 13.648C13.3722 13.2445 14.0128 12.1293 13.8172 10.9926C13.6215 9.85584 12.6449 9.01906 11.4916 9H11.4436ZM11.4437 10.6C11.8855 10.6 12.2437 10.9582 12.2437 11.4C12.2437 11.8418 11.8855 12.2 11.4437 12.2C11.0018 12.2 10.6437 11.8418 10.6437 11.4C10.6437 10.9582 11.0018 10.6 11.4437 10.6Z" fill="#9595AE"/>
                </svg>
            </button>
        </div>
    </div>
  );
}

export default Registration;