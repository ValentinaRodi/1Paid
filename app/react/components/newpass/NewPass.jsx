import {useState, useEffect} from 'react';
import './newPass.less';
import fetchFunc from "../../services/fetch";
import {checkName, checkPassword} from "../../validators/AuthorisationValidation";

function NewPass(props) {
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorPassword, setErrorPassword] = useState("hidden");
    const [errorPasswordConfirm, setErrorPasswordConfirm] = useState("hidden");
    console.log('props:',props);

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
                        className='input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-6'>
                        <input onChange={handlePassword} type="password" name="password" id='password' placeholder=" "
                               className={`${errorPassword}  input input-label family-bold h-full w-full outline-none text-black`}/>
                        <label htmlFor="password" className='label input-label text-grey'>Введите новый пароль</label>
                        <span className={`${errorPassword}  text-[14px] text-red-600`}>Пароль введен некорректно.</span>
                    </div>
                    <div
                        className='input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-8'>
                        <input onChange={handlePasswordConfirm} type="password" name="repeatPassword"
                               id='repeatPassword' placeholder=" "
                               className={`${errorPassword}  input input-label family-bold h-full w-full outline-none text-black`}/>
                        <label htmlFor="repeatPassword" className='label input-label text-grey'>Введите пароль еще
                            раз</label>
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

