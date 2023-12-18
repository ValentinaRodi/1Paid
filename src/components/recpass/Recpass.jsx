/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import  './recPass.css';
import { useState } from 'react';

function RecPass(props) {
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showMessage, setShowMessage] = useState('hidden');
   
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
          setErrorEmail('border-red-error border-[1px] border-solid');
          return;
        }
    
        const formData = {
          'email': email,
        };
        
        fetch('/recover', {
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
              setShowMessage('');
              setSuccessMessage(`Данные успешно высланы на ${email}`)
            } else {
              setErrorMessage(data.message);
              console.log(errorMessage);          }
          })
          .catch((error) => {
            console.log(error);
            setErrorMessage('An error occurred');
          }); 
      }; 

    return (
        <div className='z-20 absolute inset-0 flex items-start md:items-center justify-center mt-[10%] md:mt-0'>
            <div className=' w-screen min-[540px]:w-[540px] bg-[#F7F7FC] rounded-3xl px-10 pb-10 pt-5'>
                <div className='flex justify-end'>
                    <button onClick={props.closeRecPass} className='p-0 hover:bg-[rgba(241,245,249,1)] rounded-full'>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="38" height="38" rx="19" stroke="#DDE1F3" strokeWidth="2"/>
                            <path d="M13.2754 26.7246C12.9082 26.3551 12.9082 25.7584 13.2754 25.389L25.3333 13.3311C25.5648 13.0608 25.9283 12.9431 26.2743 13.0263C26.6203 13.1095 26.8905 13.3797 26.9737 13.7257C27.0569 14.0717 26.9392 14.4352 26.6689 14.6667L14.611 26.7246C14.2416 27.0918 13.6449 27.0918 13.2754 26.7246Z" fill="#DDE1F3"/>
                            <path d="M13.2754 13.2754C13.6449 12.9082 14.2416 12.9082 14.611 13.2754L26.6689 25.3333C26.9392 25.5648 27.0569 25.9283 26.9737 26.2743C26.8905 26.6203 26.6203 26.8905 26.2743 26.9737C25.9283 27.0569 25.5648 26.9392 25.3333 26.6689L13.2754 14.611C12.9082 14.2416 12.9082 13.6449 13.2754 13.2754Z" fill="#DDE1F3"/>
                        </svg>
                    </button>
                </div>
                <form className='md:mt-[-10px]'>
                    <h1 className='family-bold text-black fontt-bold text-[28px] mb-11'>Восстановление пароля </h1>
                    <div className={`${errorEmail} input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-10`}>
                        <input onChange={handleEmailChange} value={email} type="email" name="email" id='email' placeholder='' className='input w-full input-label family-bold h-full w-full outline-none text-black'/>
                        <label htmlFor="email" className='label input-label text-grey'>Введите эл.почту от аккаунта</label>
                    </div>
                    <div className='flex justify-between gap-1 items-center'>
                        <button onClick={handleSubmit} className="p-btn px-0 text-base rounded-lg w-48 h-[70px] text-white uppercase">сохранить</button>
                    </div>
                </form>
                <div className={`${showMessage} mt-2 text-green`}>{successMessage}</div>
            </div>
        </div>
    );
}

export default RecPass;