
import {useState, useEffect} from 'react';
import {createRoot} from "react-dom/client";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import PropTypes from 'prop-types';
//import Content from '../content/Content';
import ProfileEdit from '../../components/profileEdit/ProfileEdit';
import fetchFunc from '../../services/fetch';
import NewPass from "../../components/newpass/NewPass";
import Upload from "../../components/upload/Upload";
import AlertPopup from "../../components/alertPopup/AlertPopup";
import {
    checkEmail,
    checkName,
    checkPassword,
    checkSecretWord
} from "../../validators/AuthorisationValidation";


function Settings() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [orient, setOrient] = useState('');
    const [balance, setBalance] = useState('');
    const [bonus, setBonus] = useState('');
    const [avatar, setAvatar] = useState('');
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [secretWord, setSecretWord] = useState('');
    const [file, setFile] = useState('');
    // const [isChanged, setIsChanged] = useState(false);
    // const [isError, setIsError] = useState(false);

    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [errorName, setErrorName] = useState("hidden");
    const [errorEmail, setErrorEmail] = useState("hidden");
    const [errorSecretWord, setErrorSecretWord] = useState("hidden");
    const location = useLocation();

    // const saveNewPass = (e) => {
    //     // e.preventDefault();
    //
    //     let body = {
    //         'password': password,
    //         'password_confirmation': passwordConfirm
    //     };
    //     fetchFunc('/profile/edit-password', 'POST', body)
    //         .then((data) => {
    //             console.log(data)
    //
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    //
    //     console.log(password)
    //     console.log(passwordConfirm)
    //     setErrorPassword("");
    //     // if (password !== passwordConfirm) {
    //     //     setErrorPassword('border-[#FF5343] border-[1px] border-solid');
    //     //     return;
    //     // };
    // }


    const changeOrient = () => {
        if (orient === '') {
            setOrient('_lf-row');
        } else {
            setOrient('');
        }
    }

    useEffect(() => {

        fetchFunc('/profile/edit', 'GET')
            .then((data) => {
                if (data.success === true) {
                    console.log('dataFromFetchFunc:', data);
                    //пришедшие данные из промиса
                    console.log('data:', data);
                    data.password = '********'
                    data.avatar = 'http://1paid.local/js/00d4721a6417b9c4833a61c762672a7c.png'
                    setUser(data);
                }
            }).catch((error) => {
            console.log('ERRR:', error);
        });

        let loggedInUser = localStorage.getItem('logged');

        if (loggedInUser === null) {
            window.location = '/';
        }

        if (loggedInUser) {
            setLoggedIn(true);
            // setName(localStorage.getItem('name'));
            setBalance(localStorage.getItem('balance'));
            setBonus(localStorage.getItem('bonus'));
            // setEmail(localStorage.getItem('email'));
            // setSecretWord(localStorage.getItem('secret_word'));

            if (localStorage.getItem('avatar') !== 'null') {
                setAvatar(localStorage.getItem('avatar'))
            }
        }
        const modal = document.getElementById('modal');

        if (modalOpen) {
            modal.classList.add('modal');
            modal.textContent = '';

            const authorizationContainer = document.createElement("div");
            const root = createRoot(authorizationContainer);
            root.render(modalEl);
            modal.appendChild(authorizationContainer);
        }
        if (!modalOpen) {

            modal.classList.remove('modal');
            modal.textContent = '';
        }

    }, [loggedIn, modalEl]);

    const openUploadModal = () => {
        console.log('Upload_mod');
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';
        setModalEl(<Upload
            closeModal={closeModal}
            img_upload_id={'profile_img'}
            handleFile={handleFile}
            url={'/profile/upload-image'}
        />);

        setModalOpen(true);
    }
    const openPasswordEditPopup = () => {
        console.log('mod');
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';
        setModalEl(<NewPass
            closeModal={closeModal}
            openSaveCompletePopup={openSaveCompletePopup}
        />);
        setModalOpen(true);
    };

    const openSaveCompletePopup = () => {
        console.log('mod SAVE');
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';
        setModalEl(<AlertPopup
            closeModal={closeModal}
        />);
        setModalOpen(true);
    }

    const closeModal = () => {
        const body = document.querySelector('body');
        body.style.overflow = 'auto';
        setModalOpen(false);
        setModalEl('');
    };
    const handleFile = (file) => {
        console.log(file);
        setFile(file);
        console.log(file)

    }
    const handleName = (e) => {
        setName(e.target.value);
        console.log('HandleSetName:', name)

    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(email)

    }
    const handleSecretWord = (e) => {
        setSecretWord(e.target.value);
        console.log(secretWord)

    }
    // const handlePassword = (e) => {
    //     console.log(e.target.value);
    //     setPassword(e.target.value);
    //     console.log(password)
    // }
    //
    // const handlePasswordConfirm = (e) => {
    //     console.log(e.target.value);
    //     setPasswordConfirm(e.target.value);
    //     console.log(passwordConfirm)
    // }
    const onSubmit = () => {
        let body = {
            'name': '',
            'email': '',
            'secret_word': ''
        };
        setErrorName('hidden');
        setErrorEmail('hidden');
        setErrorSecretWord('hidden');
        let isChanged = false;
        let isError = false;

        if (name) {
            if (checkName(name)) {
                body.name = name;
                isChanged = true;
                isError = false;
            } else {
                isChanged = false;
                isError = true;
                setErrorName(' ');
             }
        }
        if (email) {
            if (checkEmail(email)) {
                body.email = email;
                isChanged = true;
                isError = false;
            } else {
                isChanged = false;
                isError = true;
                setErrorEmail(' ')
            }
        }
        if (secretWord) {
            if (checkSecretWord(secretWord)) {
               body.secret_word = secretWord;
                isChanged = true;
                isError = false;
            } else {
                isChanged = false;
                isError = true;
                setErrorSecretWord(' ')
            }
        }
        if (isChanged && !isError) {
            fetchFunc('/profile/edit', 'POST', body)
                .then((data) => {
                    if (data.success === true) {
                        openSaveCompletePopup();
                    } else {
                        console.log(data.errors)
                    }
                }).catch((error) => {
                console.log('ERRR:', error);
            });
        }
    }
    return (
                <ProfileEdit
                    user={user}
                    openUploadModal={openUploadModal}
                    handleName={handleName}
                    handleEmail={handleEmail}
                    errorName={errorName}
                    errorEmail={errorEmail}
                    errorSecretWord={errorSecretWord}
                    onSubmit={onSubmit}
                    handleSecretWord={handleSecretWord}
                    openPasswordEditPopup={openPasswordEditPopup}
                />
    );
}

/*
        <div className={`layout-grid ${orient}`}>
            <LeftMenu/>
            <div id='layout-page' className={`layout-page ${orient}`}>
                <LayoutColRow changeOrient={changeOrient} orient={orient}/>
                <HeaderMain/>
                <div className="layout-b pb-4 px-9 3xl:px-4 min-w-0 sm:px-3">

                </div>
            </div>
        </div>

*/
export default Settings;
