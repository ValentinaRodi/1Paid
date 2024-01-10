/* eslint-disable react/prop-types */
import  './registration.less';
import { useState } from 'react';

function Registration(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [secretWord, setSecretWord] = useState('');
    const [remember, setRemember] = useState(false);
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorSecretWord, setErrorSecretWord] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const [notVisible, setNotVisible] = useState('hidden');
    const [visible, setVisible] = useState('');

    const togglePasswordVisiblity = (e) => {
        e.preventDefault();
        setVisible('hidden');
        setNotVisible('');
        setPasswordShown(true);
    };

    const togglePasswordNotVisiblity = (e) => {
        e.preventDefault();
        setVisible('');
        setNotVisible('hidden');
        setPasswordShown(false);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePassword2Change = (e) => {
        setPassword2(e.target.value);
    };

    const handleSecretWordChange = (e) => {
        setSecretWord(e.target.value);
    };

    const handleRememberChange = (e) => {
        setRemember(e.target.checked);
    };

    const validateEmail = (email) => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");
        return regex.test(password);
    };

    const validateSecretWord = (secretWord) => {
        const regex = new RegExp("^[a-zA-Z]{8,}$");
        return regex.test(secretWord);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrorName('');
        setErrorEmail('');
        setErrorPassword('');
        setErrorSecretWord('');

        if (name.length === 0 && !validateEmail(email) && !validatePassword(password) && !validateSecretWord(secretWord)) {
            setErrorName('border-[#FF5343] border-[1px] border-solid');
            setErrorEmail('border-[#FF5343] border-[1px] border-solid');
            setErrorPassword('border-[#FF5343] border-[1px] border-solid');
            setErrorSecretWord('border-[#FF5343] border-[1px] border-solid');
            return;
        };

        if (password !== password2) {
            setErrorPassword('border-[#FF5343] border-[1px] border-solid');
            return;
        };

        if (name.length === 0) {
            setErrorName('border-[#FF5343] border-[1px] border-solid');
            return;
        };

        if (!validateEmail(email)) {
            setErrorEmail('border-[#FF5343] border-[1px] border-solid');
            return;
        };

        if (!validatePassword(password)) {
            setErrorPassword('border-[#FF5343] border-[1px] border-solid');
            return;
        };

        if (!validateSecretWord(secretWord)) {
            setErrorSecretWord('border-[#FF5343] border-[1px] border-solid');
            return;
        };

        const formData = {
            name,
            email,
            password,
            remember: remember ? 1 : 0
        };

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success === 1) {
            setSuccessMessage(data.message);
            console.log(successMessage);
            // Redirect to the main page using window.location or react-router
            window.location.href = '/';
            } else {
            setErrorMessage(data.message);
            console.log(errorMessage);          }
        })
        .catch((error) => {
            console.log(error);
            setErrorMessage('An error occurred');
        });
    };

    console.log(props)

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
                <div className={`${errorName} input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-6`}>
                    <input onChange={handleNameChange} value={name}  type="text" name="name" id='name' placeholder=" " className='input input-label family-bold h-full w-full outline-none text-black'/>
                    <label htmlFor="name" className='label input-label text-[#CFD2EA]'>Имя пользователя</label>
                </div>
                <div className={`${errorEmail} input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-6`}>
                    <input onChange={handleEmailChange} value={email} type="email" name="email" id='email'  placeholder=" " className='input input-label family-bold h-full w-full outline-none text-black'/>
                    <label htmlFor="email" className='label input-label text-[#CFD2EA]'>Эл. почта</label>
                </div>
                <div className={`${errorPassword} input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-6 flex items-center justify-between`}>
                    <div className='w-full'>
                        <input onChange={handlePasswordChange} value={password} type={passwordShown ? "text" : "new-password"} name="password" id='password'  placeholder=" " className='input w-full input-label family-bold h-full w-full outline-none text-black'/>
                        <label htmlFor="password" className='label input-label text-[#CFD2EA]'>Придумайте пароль</label>
                    </div>
                    <button onClick={togglePasswordVisiblity} className={`${visible} p-0 bg-inherit mb-4`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1507_21688)">
                            <path d="M6.2272 12.5214L4.93987 12.1761L5.46454 10.2167C4.67918 9.92709 3.94928 9.50498 3.30654 8.96874L1.8712 10.4047L0.92787 9.46141L2.36387 8.02607C1.55325 7.05524 1.00859 5.89058 0.783203 4.64607L2.0952 4.40674C2.6012 7.20807 5.05187 9.33341 7.9992 9.33341C10.9459 9.33341 13.3972 7.20807 13.9032 4.40674L15.2152 4.6454C14.9901 5.89008 14.4457 7.05498 13.6352 8.02607L15.0705 9.46141L14.1272 10.4047L12.6919 8.96874C12.0491 9.50498 11.3192 9.92709 10.5339 10.2167L11.0585 12.1767L9.7712 12.5214L9.24587 10.5614C8.42077 10.7028 7.57764 10.7028 6.75254 10.5614L6.2272 12.5214Z" fill="#CFD2EA"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1507_21688">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <button onClick={togglePasswordNotVisiblity} className={`${notVisible} p-0 bg-inherit mb-4`}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_160_2460)">
                        <path d="M14.2872 8.87019L14.6162 8.81033C14.3648 7.83509 13.8993 6.92569 13.2513 6.14929L12.9585 5.79847L13.2816 5.47536L14.3634 4.39358L14.1273 4.15743L13.0455 5.23971L12.7225 5.56292L12.3716 5.27017C11.7727 4.77053 11.0926 4.37723 10.3609 4.10735L9.93294 3.94953L10.0509 3.50895L10.4463 2.03192L10.1247 1.94584L9.72882 3.42302L9.61079 3.86339L9.16142 3.78639C8.39222 3.65458 7.60619 3.65458 6.83698 3.78639L6.38762 3.86339L6.26958 3.42302L5.87372 1.94608L5.55213 2.03235L5.94752 3.50891L6.06551 3.94952L5.63755 4.10735C4.9058 4.37723 4.22572 4.77053 3.62685 5.27017L3.27596 5.56292L2.9529 5.23971L1.87112 4.15743L1.63506 4.39349L2.71734 5.47527L3.04068 5.79846L2.74767 6.14937C2.09955 6.92559 1.63394 7.83482 1.38224 8.80993L1.7113 8.86996C2.44227 6.08017 4.97971 4.02158 7.9992 4.02158C11.0181 4.02158 13.5562 6.08026 14.2872 8.87019Z" stroke="#9595AE"/>
                        <path d="M8 10.9268C9.10457 10.9268 10 10.0313 10 8.92676C10 7.82219 9.10457 6.92676 8 6.92676C6.89543 6.92676 6 7.82219 6 8.92676C6 10.0313 6.89543 10.9268 8 10.9268Z" stroke="#9595AE" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_160_2460">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                    </button>
                </div>
                <div className={`${errorPassword} input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-6 flex items-center justify-between`}>
                    <div className='w-full'>
                        <input onChange={handlePassword2Change} value={password2} type={passwordShown ? "text" : "new-password"} name="password_confirmation " id='password2'  placeholder=" " className='input w-full input-label family-bold h-full w-full outline-none text-black'/>
                        <label htmlFor="password2" className='label input-label text-[#CFD2EA]'>Повторите пароль</label>
                    </div>
                    <button onClick={togglePasswordVisiblity} className={`${visible} p-0 bg-inherit mb-4`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1507_21688)">
                            <path d="M6.2272 12.5214L4.93987 12.1761L5.46454 10.2167C4.67918 9.92709 3.94928 9.50498 3.30654 8.96874L1.8712 10.4047L0.92787 9.46141L2.36387 8.02607C1.55325 7.05524 1.00859 5.89058 0.783203 4.64607L2.0952 4.40674C2.6012 7.20807 5.05187 9.33341 7.9992 9.33341C10.9459 9.33341 13.3972 7.20807 13.9032 4.40674L15.2152 4.6454C14.9901 5.89008 14.4457 7.05498 13.6352 8.02607L15.0705 9.46141L14.1272 10.4047L12.6919 8.96874C12.0491 9.50498 11.3192 9.92709 10.5339 10.2167L11.0585 12.1767L9.7712 12.5214L9.24587 10.5614C8.42077 10.7028 7.57764 10.7028 6.75254 10.5614L6.2272 12.5214Z" fill="#CFD2EA"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1507_21688">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <button onClick={togglePasswordNotVisiblity} className={`${notVisible} p-0 bg-inherit mb-4`}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_160_2460)">
                        <path d="M14.2872 8.87019L14.6162 8.81033C14.3648 7.83509 13.8993 6.92569 13.2513 6.14929L12.9585 5.79847L13.2816 5.47536L14.3634 4.39358L14.1273 4.15743L13.0455 5.23971L12.7225 5.56292L12.3716 5.27017C11.7727 4.77053 11.0926 4.37723 10.3609 4.10735L9.93294 3.94953L10.0509 3.50895L10.4463 2.03192L10.1247 1.94584L9.72882 3.42302L9.61079 3.86339L9.16142 3.78639C8.39222 3.65458 7.60619 3.65458 6.83698 3.78639L6.38762 3.86339L6.26958 3.42302L5.87372 1.94608L5.55213 2.03235L5.94752 3.50891L6.06551 3.94952L5.63755 4.10735C4.9058 4.37723 4.22572 4.77053 3.62685 5.27017L3.27596 5.56292L2.9529 5.23971L1.87112 4.15743L1.63506 4.39349L2.71734 5.47527L3.04068 5.79846L2.74767 6.14937C2.09955 6.92559 1.63394 7.83482 1.38224 8.80993L1.7113 8.86996C2.44227 6.08017 4.97971 4.02158 7.9992 4.02158C11.0181 4.02158 13.5562 6.08026 14.2872 8.87019Z" stroke="#9595AE"/>
                        <path d="M8 10.9268C9.10457 10.9268 10 10.0313 10 8.92676C10 7.82219 9.10457 6.92676 8 6.92676C6.89543 6.92676 6 7.82219 6 8.92676C6 10.0313 6.89543 10.9268 8 10.9268Z" stroke="#9595AE" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_160_2460">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                    </button>
                </div>
                <div className={`${errorSecretWord} input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-6`}>
                    <input onChange={handleSecretWordChange} value={secretWord} type="text" name="secret_word" id="secretWorld" placeholder=" " className='input input-label family-bold h-full w-full outline-none text-black'/>
                    <label htmlFor="secretWorld" className='label input-label text-[#CFD2EA]'>Секретное слово (мин. 8 букв)</label>
                </div>
                <div className='flex gap-2 mb-8'>
                    <input onChange={handleRememberChange} value={remember} type="checkbox" id="assent" name="assent" className='custom-checkbox'/>
                    <label htmlFor="assent" className='check text-sm sm:text-base text-[#9595AE]'>Я подтверждаю, что ознакомлен справилами сайта и пользовательским соглашением</label>
                </div>
                <div className='flex justify-between gap-1 items-center'>
                    <button onClick={handleSubmit} className="main_btn px-0 text-xs md:text-base rounded-xl xs:rounded-lg w-[230px] h-14 sm:h-[70px] text-white uppercase">Создать аккаунт</button>
                    <p className='family-bold text-xs sm:text-sm font-bold text-[#CFD2EA] uppercase'>или</p>
                    <div className='flex'>
                        <button className='inst shadow-[0px_4px_15px_2px_rgba(249,181,68,0.45)] bg-no-repeat bg-cover bg-center p-0 rounded-full w-12 h-12 mr-1'></button>
                        <button className='gmail shadow-[0px_4px_15px_2px_rgba(255,138,128,0.45)] bg-no-repeat bg-cover bg-center p-0 rounded-full w-12 h-12 mr-1'></button>
                        <button className='p-vk shadow-[0px_4px_15px_2px_rgba(100,122,232,0.45)] bg-no-repeat bg-cover bg-center p-0 rounded-full w-12 h-12 mr-1'></button>
                    </div>
                </div>
            </form>
            <div className='h-px w-full bg-[#E1E1EF] mb-3.5'></div>
            <p className='text-[#CFD2EA] text-center mb-2.5'>Уже есть аккаунт?</p>
            <button onClick={props.transAuth} className='w-full flex justify-center items-center gap-3 h-[70px] bg-[#ECECF7] hover:bg-[rgba(208,216,243,1)] rounded-xl text-base text-[#9595AE] uppercase'>войти
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
