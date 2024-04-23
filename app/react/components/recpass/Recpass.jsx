/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import  './recPass.less';
import close from "../../../../web/img/close_round.svg";
import { useState } from 'react';

function RecPass(props) {
const [email, setEmail] = useState('');
const [errorEmail, setErrorEmail] = useState('');
const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const [showMessage, setShowMessage] = useState('hidden');
const [submit, setSubmit] = useState(false);

const handleEmailChange = (e) => {
    setEmail(e.target.value);
};

const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email);
};

const handleSubmit = (e) => {
    e.preventDefault();

    setErrorEmail('');

    if (!validateEmail(email)) {
        setErrorEmail('border-[#FF5343] border-[1px] border-solid');
        return;
    }

    setSubmit(true);

    const formData = {
        email,
    };

    const getCSRFToken = async () => {
    const response = await fetch("/csrf");

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    let csrfJson = await response.json();

    fetch("/recover", {
        method: "POST",
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json",
            "X-CSRF-Token": decodeURIComponent(csrfJson._csrf),
        },
        body: JSON.stringify(formData)
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        //console.log('data', data);

        if (data.success === true) {
            setSuccessMessage(data.message);
            setSuccessMessage(`Данные успешно высланы на ${email}`)
            
        } else {
            setErrorMessage(data.message);
            console.log(errorMessage);
        }
    })
    .catch((error) => {
        console.log(error);
        setErrorMessage("An error occurred");
        });
    };

    getCSRFToken();

};

    return (
        <div className='z-20 fixed inset-0 flex items-start md:items-center justify-center mt-[10%] md:mt-0'>
            <div className='w-screen min-[540px]:w-[540px] bg-[#F7F7FC] rounded-3xl px-4 sm:px-10 pb-8 sm:pb-10 pt-5'>
                <div className='flex justify-end'>
                    <button onClick={props.closeModal} className='p-0 hover:bg-[rgba(241,245,249,1)] rounded-full'>
                        <img src={close} alt='close'/>
                    </button>
                </div>
                <form className='md:mt-[-10px]'>
                    <h1 className='family-bold text-black fontt-bold text-[26px] sm:text-[28px] mb-9 sm:mb-11'>Восстановление пароля </h1>
                    <div className={`${errorEmail} input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-10`}>
                        <input onChange={handleEmailChange} value={email} type="email" name="email" id='email' placeholder='' className='input w-full input-label family-bold h-full w-full outline-none text-black'/>
                        <label htmlFor="email" className='label input-label text-[#CFD2EA]'>Введите эл.почту от аккаунта</label>
                    </div>
                    {submit ?
                        <div className='h-[70px] text-xl flex items-center text-gradient-green'>Письмо отправлено на почту</div>
                        :
                        <div className='flex justify-between gap-1 items-center'>
                            <button onClick={handleSubmit} className="p-btn px-0 text-base rounded-lg w-48 h-[70px] text-white uppercase">отправить</button>
                        </div>
                    }
                </form>
                <div className={`${showMessage} mt-2 text-[#5CA514]`}>{successMessage}</div>
            </div>
        </div>
    );
}

export default RecPass;

