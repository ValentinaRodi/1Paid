import spsAvatar from "../../../../web/img/avatar-example-5.00d4721a.png";
import puicImage from "../../../../web/img/achievements-example.7996faae.png";
import puicImage2 from "../../../../web/img/icon-shopping-card-gradient.ff3dca76.svg";
import spfRating from "../../../../web/img/icon-spf-rating-icon.svg";
import fbcAvatar from "../../../../web/img/avatar-example-4.6cd623f4.png";
import {useState, useEffect} from 'react';
import {createRoot} from "react-dom/client";
import {Navigate, Outlet, useLocation} from "react-router-dom";

import LeftMenu from '../../components/leftMenu/LeftMenu';
import LayoutColRow from '../../components/LayoutColRow';
import Content from '../content/Content';
import Registration from '../../components/registration/Registration';
import Authorization from "../../components/authorization/Authorization";
import RecPass from '../../components/recpass/Recpass';
import HeaderMain from '../../components/headerMain/HeaderMain';
import ProfileEdit from '../../components/profileEdit/ProfileEdit';
import fetchFunc from '../../services/fetch';
import NewPass from "../../components/newpass/Newpass";
import AutorisationValidation from "../../validators/AutorisationValidation";

function Settings() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [orient, setOrient] = useState('');
    const [name, setName] = useState('');
    const [balance, setBalance] = useState('');
    const [bonus, setBonus] = useState('');
    const [avatar, setAvatar] = useState('');
    const [secret_word, setSecretWord] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [modalEl, setModalEl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [errorEmail, setErrorEmail] = useState("");
    const [errorSecretWord, setErrorSecretWord] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const location = useLocation();


    const getCSRFToken = async () => {
        const response = await fetch("/csrf");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        let csrfJson = await response.json();

        fetch("/profile/edit", {
            method: "POST",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json",
                "X-CSRF-Token": decodeURIComponent(csrfJson._csrf),
            },
            body: JSON.stringify({
                'name': name,
                'email': email,
                'secret_word': secret_word
            })
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log('data', data);
                return data;
            })
            .catch((error) => {
                console.log(error);
                // setErrorMessage("An error occurred");
                return error;

            });
    };

    const saveNewPass = (e) => {
        e.preventDefault();


        console.log(password)
        console.log(passwordConfirm)
        setErrorPassword("");
        // if (password !== passwordConfirm) {
        //     setErrorPassword('border-[#FF5343] border-[1px] border-solid');
        //     return;
        // };
        let getCSRFToken3 = async () => {
            const response = await fetch("/csrf");

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            let csrfJson = await response.json();

            fetch("/profile/edit-password", {
                method: "POST",
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json",
                    "X-CSRF-Token": decodeURIComponent(csrfJson._csrf),
                },
                body: JSON.stringify({
                    'password': password,
                    'password_confirmation': passwordConfirm
                })
            })
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    console.log('data', data);
                    return data;
                })
                .catch((error) => {
                    console.log(error);
                    // setErrorMessage("An error occurred");
                    return error;

                });
        }
        getCSRFToken3();
    }
    const validateEmail = (email) => {
        console.log(email);
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");
        return regex.test(password);
    };

    const validatesecret_word = (secret_word) => {
        const regex = new RegExp("^[a-zA-Zа-яА-Я0-9]{8,}$");
        return regex.test(secret_word);
    };

    const onSubmit = () => {
        useEffect(() => {
            let getCSRFToken2 = async () => {
                const response = await fetch("/csrf");

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                let csrfJson = await response.json();

                fetch("/profile/edit", {
                    method: "POST",
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-Type": "application/json",
                        "X-CSRF-Token": decodeURIComponent(csrfJson._csrf),
                    },
                    body: JSON.stringify({
                        'name': name,
                        'email': email,
                        'secret_word': secret_word
                    })
                })
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        console.log('data', data);
                        return data;
                    })
                    .catch((error) => {
                        console.log(error);
                        // setErrorMessage("An error occurred");
                        return error;

                    });
            }
            getCSRFToken2();
        }, []);
    }

    const changeOrient = () => {
        if (orient === '') {
            setOrient('_lf-row');
        } else {
            setOrient('');
        }
    }

    useEffect(() => {

        fetch("/profile/edit", {
            method: "GET",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json",
            },

        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {

                // пришедшие данные из промиса
                console.log('data:', data);
                data.password = '********'
                data.avatar = 'http://1paid.local/js/00d4721a6417b9c4833a61c762672a7c.png'
                setUser(data);
            })
            .catch((error) => {
                console.log(error);
            });

        let loggedInUser = localStorage.getItem('logged');

        if (loggedInUser === null) {
            window.location = '/';
        }

        if (loggedInUser) {
            setLoggedIn(true);
            setName(localStorage.getItem('name'));
            setBalance(localStorage.getItem('balance'));
            setBonus(localStorage.getItem('bonus'));
            setEmail(localStorage.getItem('email'));
            setSecretWord(localStorage.getItem('secret_word'));

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

    const openPasswordEditPopup = () => {
        console.log('mod');
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';
        setModalEl(<NewPass
            closeModal={closeModal}
            saveNewPass={saveNewPass}
            errorPassword={errorPassword}
            handlePassword={handlePassword}
            handlePasswordConfirm={handlePasswordConfirm}
        />);
        setModalOpen(true);
    };

    const closeModal = () => {
        const body = document.querySelector('body');
        body.style.overflow = 'auto';
        setModalOpen(false);
        setModalEl('');
    };

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleSecretWord = (e) => {
        setSecretWord(e.target.value);
    }
    const handlePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
        console.log(password)
    }

    const handlePasswordConfirm = (e) => {
        console.log(e.target.value);


        setPasswordConfirm(e.target.value);
        console.log(passwordConfirm)

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
                    errorEmail={errorEmail}
                    errorSecretWord={errorSecretWord}
                    onSubmit={onSubmit}
                    handleSecretWord={handleSecretWord}
                    openPasswordEditPopup={openPasswordEditPopup}
                />
            </div>
        </div>
    )
}

export default Settings;
