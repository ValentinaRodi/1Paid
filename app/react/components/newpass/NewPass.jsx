import {useState, useEffect} from 'react';
import './newPass.less';
import fetchFunc from "../../services/fetch";
import {checkName, checkPassword} from "../../validators/AuthorisationValidation";

function NewPass(props) {
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorPassword, setErrorPassword] = useState("hidden");
    const [errorPasswordConfirm, setErrorPasswordConfirm] = useState("hidden");
    const [passwordShown, setPasswordShown] = useState(false);
    const [notVisible, setNotVisible] = useState('hidden');
    const [visible, setVisible] = useState('');


    const saveNewPass = () => {
        let body = {
            'password': password,
            'password_confirmation': passwordConfirm
        };
        let isChanged = false;
        let isError = false;
        setErrorPassword('hidden');
        setErrorPasswordConfirm('hidden');

        if (password && passwordConfirm) {
            if (checkPassword(password)) {
                if (password === passwordConfirm) {
                    isChanged = true;
                    isError = false;
                } else {
                    isChanged = false;
                    isError = true;
                    setErrorPasswordConfirm(' ');
                }
            } else {
                isChanged = false;
                isError = true;
                setErrorPassword(' ');
            }
        }

        if (isChanged && !isError) {

            fetchFunc('/profile/edit-password', 'POST', body)
                .then((data) => {
                    props.closeModal();
                    props.openSaveCompletePopup();

                })
                .catch((error) => {
                    console.log(error)
                })
            setErrorPassword("");
        }
    }
    const togglePasswordVisiblity = (e) => {
        // e.preventDefault();
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

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handlePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value);
    }

    return (
        <div
            className='fixed inset-x-0 inset-y-0 flex items-start md:items-center justify-center mt-[10%] md:mt-0 fixed z-20 inset-0 bg-[rgba(6,9,18,0.8)] items-start md:items-center justify-center mt-[10%] md:mt-0'>
            <div className=' bg-[#F7F7FC] w-screen min-[540px]:w-[540px] rounded-3xl px-10 pb-10 pt-5'>
                <div className='flex justify-end'>
                    <button onClick={props.closeModal} className='p-0 hover:bg-[rgba(241,245,249,1)] rounded-full'>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="38" height="38" rx="19" stroke="#DDE1F3" strokeWidth="2"/>
                            <path
                                d="M13.2754 26.7246C12.9082 26.3551 12.9082 25.7584 13.2754 25.389L25.3333 13.3311C25.5648 13.0608 25.9283 12.9431 26.2743 13.0263C26.6203 13.1095 26.8905 13.3797 26.9737 13.7257C27.0569 14.0717 26.9392 14.4352 26.6689 14.6667L14.611 26.7246C14.2416 27.0918 13.6449 27.0918 13.2754 26.7246Z"
                                fill="#DDE1F3"/>
                            <path
                                d="M13.2754 13.2754C13.6449 12.9082 14.2416 12.9082 14.611 13.2754L26.6689 25.3333C26.9392 25.5648 27.0569 25.9283 26.9737 26.2743C26.8905 26.6203 26.6203 26.8905 26.2743 26.9737C25.9283 27.0569 25.5648 26.9392 25.3333 26.6689L13.2754 14.611C12.9082 14.2416 12.9082 13.6449 13.2754 13.2754Z"
                                fill="#DDE1F3"/>
                        </svg>
                    </button>
                </div>
                <div className='mt-[-10px]'>
                    <h1 className='family-bold text-black fontt-bold text-[28px] mb-11'>Изменение пароля</h1>
                    <div
                        className='flex items-center justify-between input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-6'>
                        <input onChange={handlePassword} type={passwordShown ? "text" : "password"} name="password" id='password' placeholder=" "
                               className={`${errorPassword}  input input-label family-bold h-full w-full outline-none text-black`}/>
                        <label htmlFor="password" className='label input-label text-grey'>Введите новый пароль</label>
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
                        <span className={`${errorPassword}  text-[14px] text-red-600`}>Пароль введен некорректно.</span>
                    </div>
                    <div
                        className='flex items-center justify-between input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-8'>
                        <input onChange={handlePasswordConfirm} type={passwordShown ? "text" : "password"} name="repeatPassword"
                               id='repeatPassword' placeholder=" "
                               className={`${errorPassword}  input input-label family-bold h-full w-full outline-none text-black`}/>
                        <label htmlFor="repeatPassword" className='label input-label text-grey'>Введите пароль еще
                            раз
                        </label>
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
                        <span
                            className={`${errorPasswordConfirm}  text-[14px] text-red-600`}>Пароли не совпадают.</span>
                    </div>
                    <div className='flex justify-between gap-1 items-center'>
                        <button onClick={saveNewPass}
                                className="p-btn px-0 text-xs md:text-base rounded-xl xs:rounded-lg w-48 h-14 sm:h-[70px] text-white uppercase">сохранить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewPass;

