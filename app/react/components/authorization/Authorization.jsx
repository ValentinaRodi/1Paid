/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import "./authorization.less";
import {useState} from "react";
import arrow from "../../../../web/img/icon-arrow-round.svg";
import closeEye from "../../../../web/img/icon-close-eye.svg";
import openEye from "../../../../web/img/icon-open-eye.svg";
import lock from "../../../../web/img/icon-lock.svg";

function Authorization(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRemember] = useState(false);
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const [notVisible, setNotVisible] = useState("hidden");
    const [visible, setVisible] = useState("");

    const togglePasswordVisiblity = (e) => {
        e.preventDefault();
        setVisible("hidden");
        setNotVisible("");
        setPasswordShown(true);
    };

    const togglePasswordNotVisiblity = (e) => {
        e.preventDefault();
        setVisible("");
        setNotVisible("hidden");
        setPasswordShown(false);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberChange = (e) => {
        setRemember(e.target.checked);
    };

    const validateEmail = (email) => {
        const regex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const regex = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
        );
        return regex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrorEmail("");
        setErrorPassword("");

        if (!validateEmail(email) && !validatePassword(password)) {
            setErrorEmail("border-[#FF5343] border-[1px] border-solid");
            setErrorPassword("border-[#FF5343] border-[1px] border-solid");
            return;
        }

        if (!validateEmail(email)) {
            setErrorEmail("border-[#FF5343] border-[1px] border-solid");
            return;
        }

        if (!validatePassword(password)) {
            setErrorPassword("border-[#FF5343] border-[1px] border-solid");
            return;
        }

        const formData = {
            email,
            password,
            rememberMe: rememberMe ? 1 : 0
        };

        const getCSRFToken = async () => {
            const response = await fetch("/csrf");

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            let csrfJson = await response.json();

            fetch("/login", {
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
                    console.log('data', data);
            
                    if (data.success === true) {
                        setSuccessMessage(data.message);
                        console.log('data.success', data.name);
                        //console.log(successMessage);
                        // Redirect to the main page using window.location or react-router
                        props.changeLogged();
                        props.closeModal();
                        props.changeName(data.name);
                        localStorage.setItem('logged', true); // Запись в localStorage
                        localStorage.setItem('name', data.name);
                        // тут вписать остальную информацию.

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
        <div className="absolute inset-x-0 inset-y-0 flex items-start md:items-center justify-center mt-[10%] md:mt-0">
            <div className="z-20 bg-[#F7F7FC] w-screen min-[540px]:w-[540px] rounded-3xl px-10 pb-10 pt-5">
                <div className="flex justify-end">
                    <button
                        onClick={props.closeModal}
                        className="p-0 hover:bg-[rgba(241,245,249,1)] rounded-full"
                    >
                        <img src={arrow} alt="close" />
                    </button>
                </div>
                <form className="mt-[-10px] mb-6">
                    <h1 className="family-bold text-black font-bold text-[28px] mb-11">
                        Авторизация
                    </h1>
                    <div
                        className={`${errorEmail} input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-6`}
                    >
                        <input
                            onChange={handleEmailChange}
                            value={email}
                            type="email"
                            name="name"
                            id="name"
                            placeholder=" "
                            className="input input-label family-bold h-full w-full outline-none text-black"
                        />
                        <label
                            htmlFor="name"
                            className="label input-label text-[#CFD2EA]"
                        >
                            Email
                        </label>
                    </div>
                    <div
                        className={`${errorPassword} input-wrapper px-6 pt-5 bg-white rounded-xl h-[70px] shadow-[0px_25px_35px_0px_rgba(226,227,243,0.65)] mb-6 flex items-center justify-between`}
                    >
                        <div className="w-full">
                            <input
                                onChange={handlePasswordChange}
                                value={password}
                                type={passwordShown ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder=" "
                                className="input w-full input-label family-bold h-full w-full outline-none text-black"
                            />
                            <label
                                htmlFor="password"
                                className="label input-label text-[#CFD2EA]"
                            >
                                Пароль
                            </label>
                        </div>
                        <button
                            onClick={togglePasswordVisiblity}
                            className={`${visible} p-0 bg-inherit mb-4`}
                        >
                            <img src={closeEye} alt="open password" />
                        </button>
                        <button
                            onClick={togglePasswordNotVisiblity}
                            className={`${notVisible} p-0 bg-inherit mb-4`}
                        >
                            <img src={openEye} alt="close password" />
                        </button>
                    </div>
                    <div className="flex justify-between mb-8">
                        <div className="flex gap-2 ">
                            <input
                                onChange={handleRememberChange}
                                value={rememberMe}
                                type="checkbox"
                                id="assent"
                                name="rememberMe"
                                className="custom-checkbox"
                            />
                            <label
                                htmlFor="assent"
                                className="check text-sm sm:text-base text-[#9595AE]"
                            >
                                Запомнить меня
                            </label>
                        </div>
                        <button
                            onClick={() => {
                                props.openRecoveryPassword();
                            }}
                            className="text-[#9595AE] cursor-pointer hover:text-[#0046D6] text-center p-0 h-[20px] text-sm sm:text-base"
                        >
                            Забыли пароль?
                        </button>
                    </div>
                    <div className="flex justify-between gap-2 items-center">
                        <button
                            onClick={handleSubmit}
                            className="main_btn flex justify-center items-center gap-3 px-0 text-base rounded-xl xs:rounded-lg w-[230px] h-14 sm:h-[70px] text-white uppercase"
                        >
                            войти
                            <img src={lock} alt="open lock" className="mb-2" />
                        </button>
                        <p className="family-bold text-xs sm:text-sm font-bold text-[#CFD2EA] uppercase">
                            или
                        </p>
                        <div className="flex">
                            <button className="inst shadow-[0px_4px_15px_2px_rgba(249,181,68,0.45)] bg-no-repeat bg-cover bg-center p-0 rounded-full w-12 h-12 mr-1"></button>
                            <button className="gmail shadow-[0px_4px_15px_2px_rgba(255,138,128,0.45)] bg-no-repeat bg-cover bg-center p-0 rounded-full w-12 h-12 mr-1"></button>
                            <button className="p-vk shadow-[0px_4px_15px_2px_rgba(100,122,232,0.45)] bg-no-repeat bg-cover bg-center p-0 rounded-full w-12 h-12 mr-1"></button>
                        </div>
                    </div>
                </form>
                <div className="h-px w-full bg-[#E1E1EF] mb-3.5"></div>
                <p className="text-[#CFD2EA] text-center mb-2.5">
                    Еще нет аккаунта?
                </p>
                <button
                    onClick={() => {
                        props.openRegistration();
                    }}
                    className="w-full h-[70px] bg-[#ECECF7] hover:bg-[rgba(208,216,243,1)] rounded-xl text-base text-[#9595AE] uppercase"
                >
                    Создать аккаунт
                </button>
            </div>
        </div>
    );
}

export default Authorization;
