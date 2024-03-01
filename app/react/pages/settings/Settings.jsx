import spsAvatar from "../../../../web/img/avatar-example-5.00d4721a.png";
import puicImage from "../../../../web/img/achievements-example.7996faae.png";
import puicImage2 from "../../../../web/img/icon-shopping-card-gradient.ff3dca76.svg";
import spfRating from "../../../../web/img/icon-spf-rating-icon.svg";
import fbcAvatar from "../../../../web/img/avatar-example-4.6cd623f4.png";
import {useState, useEffect} from 'react';
import {createRoot} from "react-dom/client";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import PropTypes from 'prop-types';

import LeftMenu from '../../components/leftMenu/LeftMenu';
import LayoutColRow from '../../components/LayoutColRow';
import Content from '../content/Content';
import Registration from '../../components/registration/Registration';
import Authorisation from "../../components/authorisation/Authorisation";
import RecPass from '../../components/recpass/Recpass';
import HeaderMain from '../../components/headerMain/HeaderMain';
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
    const [avatar, setAvatar] = useState({});
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [secretWord, setSecretWord] = useState('');
    const [notifySound, setNotifySound] = useState('');
    const [mailing, setMailing] = useState('');
    const [file, setFile] = useState('');

    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [errorName, setErrorName] = useState("hidden");
    const [errorEmail, setErrorEmail] = useState("hidden");
    const [errorSecretWord, setErrorSecretWord] = useState("hidden");
    const location = useLocation();
    const avatarPath = 'http://1paid.local/uploads/avatars/';


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
                    //пришедшие данные из промиса

                    data.password = '********'
                    // data.avatar = 'http://1paid.local/js/00d4721a6417b9c4833a61c762672a7c.png'
                    data.avatarBig = avatarPath + 'big/' + data.avatar.big + '.png';
                    data.avatarMedium = avatarPath + 'medium/' + data.avatar.medium + '.png';
                    data.avatarSmall = avatarPath + 'small/' + data.avatar.small + '.png';

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
                // setAvatar(localStorage.getItem('avatar'))
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
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';
        setModalEl(<Upload
            closeModal={closeModal}
            openSaveCompletePopup={openSaveCompletePopup}
            img_upload_id={'profile_img'}
            handleFile={handleFile}
            url={'/profile/upload-image'}
        />);

        setModalOpen(true);
    }
    const openPasswordEditPopup = () => {
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';
        setModalEl(<NewPass
            closeModal={closeModal}
            openSaveCompletePopup={openSaveCompletePopup}
        />);
        setModalOpen(true);
    };

    const openSaveCompletePopup = () => {
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
        setFile(file);
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleSecretWord = (e) => {
        setSecretWord(e.target.value);
    }

    const handleNotifySound = (e) => {
        setNotifySound(!notifySound);
    }
    const handleMailing = (e) => {
        setMailing(!mailing);
    }
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

        if (typeof (user.notify_sound || user.notify_sound) =='boolean') {
            isChanged = true;
            body['notify_sound'] = Number(notifySound);
            body['mailing'] = Number(mailing);
        }

        if (isChanged && !isError) {
            fetchFunc('/profile/edit', 'POST', body)
                .then((data) => {
                    if (data.success === true) {
                        let data = user;
                        data.avatarBig = avatarPath + 'big/' + data.avatar.big + '.png';
                        data.avatarMedium = avatarPath + 'medium/' + data.avatar.medium + '.png';
                        data.avatarSmall = avatarPath + 'small/' + data.avatar.small + '.png';
                        setUser(data);

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
        <div className={`layout-grid ${orient}`}>
            <LeftMenu/>
            <div id='layout-page' className={`layout-page ${orient}`}>
                <LayoutColRow changeOrient={changeOrient} orient={orient}/>
                <HeaderMain/>
                <div className="layout-b pb-4 px-9 3xl:px-4 min-w-0 sm:px-3">

                </div>
                <ProfileEdit
                    user={user}
                    handleName={handleName}
                    handleEmail={handleEmail}
                    handleSecretWord={handleSecretWord}
                    handleNotifySound={handleNotifySound}
                    handleMailing={handleMailing}

                    errorName={errorName}
                    errorEmail={errorEmail}
                    errorSecretWord={errorSecretWord}

                    onSubmit={onSubmit}
                    openUploadModal={openUploadModal}
                    openPasswordEditPopup={openPasswordEditPopup}
                />
            </div>
        </div>
    );
}

export default Settings;
