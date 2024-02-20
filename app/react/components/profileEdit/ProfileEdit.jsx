import "./profileEdit.less";

function ProfileEdit(props) {

    return (
        <div className="layout-b pb-4 px-9 3xl:px-4 min-w-0 px-5 ">
            <div className="sps mt-11 2md:mt-5 ">
                <div
                    className="sh flex justify-between items-center gap-x-3 2md:flex-col-reverse 2md:items-start 2md:gap-y-5 sps-title">
                    <div className="flex-col items-baseline flex-1 h-[85px]">
                        <h2 className="sh-title-text font-secondary-bold text-2xl text-black 2md:text-xl">
                            Настройки профиля</h2>
                        <div className="sh-title-line mt-3 rounded-full w-9 h-1 2md:mt-2 bg-gradient-primary">
                        </div>
                    </div>
                </div>
                <div className="sps-main flex w-full rounded-xl  bg-white pr-[24px] pl-[16px]">
                    <div className="sps-bar flex flex-col items-start mr-[27px] pt-[26px]">
                        <div className="sps-bar flex flex-col items-start font-secondary-bold py-[16px]">
                            <div
                                className="sps-avatar flex-shrink-0 w-[258px] h-[258px] mb-[12px] overflow-hidden rounded-[12px] relative">
                                <img id="img_user_avatar" className="sps-avatar-pic w-full h-full object-cover"
                                     src={props.user.avatar} alt="user"/>
                                <div onClick={props.openUploadModal}
                                    className="sps-avatar-action flex justify-center items-center bg-black/40 top-0 left-0 w-full h-full absolute cursor-pointer">

                                    <div
                                        className="sps-avatar-icon flex justify-center items-center flex-shrink-0 w-[56px] h-[56px] [&amp;_svg]:w-full">
                                        <svg width="56" height="49" viewBox="0 0 56 49" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M7.63636 7.63623H48.3636C52.5811 7.63623 56 11.0551 56 15.2726V40.7271C56 44.9446 52.5811 48.3635 48.3636 48.3635H7.63636C3.41892 48.3635 0 44.9446 0 40.7271V15.2726C0 11.0551 3.41892 7.63623 7.63636 7.63623ZM48.3647 43.2717C49.7706 43.2717 50.9102 42.132 50.9102 40.7262V15.2717C50.9102 13.8659 49.7706 12.7262 48.3647 12.7262H7.63747C6.23165 12.7262 5.09201 13.8659 5.09201 15.2717V40.7262C5.09201 42.132 6.23165 43.2717 7.63747 43.2717H48.3647Z"
                                                  fill="#D7D7D7"></path>
                                            <path
                                                d="M44.0083 21.9669C45.4142 21.9669 46.5538 20.8272 46.5538 19.4214C46.5538 18.0156 45.4142 16.876 44.0083 16.876C42.6025 16.876 41.4629 18.0156 41.4629 19.4214C41.4629 20.8272 42.6025 21.9669 44.0083 21.9669Z"
                                                fill="#D7D7D7"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M18.5537 27.0583C18.5537 21.435 23.1123 16.8765 28.7355 16.8765C34.3588 16.8765 38.9173 21.435 38.9173 27.0583C38.9173 32.6815 34.3588 37.2401 28.7355 37.2401C23.1123 37.2401 18.5537 32.6815 18.5537 27.0583ZM23.6457 27.0584C23.6457 29.87 25.925 32.1493 28.7366 32.1493C31.5483 32.1493 33.8275 29.87 33.8275 27.0584C33.8275 24.2467 31.5483 21.9675 28.7366 21.9675C25.925 21.9675 23.6457 24.2467 23.6457 27.0584Z"
                                                  fill="#D7D7D7"></path>
                                            <path
                                                d="M8.3726 0C6.96679 0 5.82715 1.13964 5.82715 2.54545C5.82715 3.95127 6.96679 5.09091 8.3726 5.09091H18.5544C19.9602 5.09091 21.0999 3.95127 21.0999 2.54545C21.0999 1.13964 19.9602 0 18.5544 0H8.3726Z"
                                                fill="#D7D7D7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="sps-user flex flex-col w-full font-secondary-bold">
                                <div className="sps-user-info flex justify-between items-center mb-[8px] w-full">
                                    <div className="sps-user-username text-lg text-black">{props.user.name}</div>
                                    <button
                                        className="sps-user-link flex justify-center items-center bg-gradient-primary w-[20px] h-[20px] rounded-full">
                                        <div
                                            className="sps-user-link-icon flex-shrink-0 w-[10px] h-[5px] [&amp;_svg]:w-full flex justify-center items-center">
                                            <svg width="18" height="10" viewBox="0 0 18 10" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M9.88275 9.90579C9.88275 9.90579 10.2076 9.87083 10.374 9.69771C10.5263 9.53908 10.521 9.23975 10.521 9.23975C10.521 9.23975 10.5008 7.842 11.1707 7.63562C11.831 7.43265 12.6788 8.98732 13.5786 9.58514C14.2582 10.0371 14.7741 9.9382 14.7741 9.9382L17.1785 9.90579C17.1785 9.90579 18.4356 9.83074 17.8396 8.87304C17.7903 8.79458 17.4919 8.16436 16.0525 6.8698C14.5444 5.51468 14.7469 5.73386 16.5622 3.38949C17.668 1.96189 18.1099 1.09032 17.9717 0.71764C17.8405 0.361166 17.027 0.455828 17.027 0.455828L14.3207 0.472031C14.3207 0.472031 14.12 0.445594 13.9712 0.531727C13.826 0.616155 13.7318 0.813154 13.7318 0.813154C13.7318 0.813154 13.3039 1.91754 12.7325 2.85733C11.5273 4.83926 11.0457 4.94416 10.8485 4.82135C10.3898 4.53395 10.5043 3.66835 10.5043 3.05348C10.5043 1.1321 10.8054 0.331318 9.91884 0.124085C9.62479 0.0550078 9.40822 0.00980903 8.6555 0.00213375C7.68972 -0.00724713 6.87273 0.00554498 6.40965 0.224717C6.10151 0.370547 5.86381 0.696319 6.00907 0.715081C6.18779 0.738107 6.59276 0.820829 6.80758 1.10396C7.0849 1.46982 7.07521 2.29022 7.07521 2.29022C7.07521 2.29022 7.23456 4.55186 6.70281 4.83244C6.33833 5.02517 5.83828 4.63203 4.76333 2.83346C4.2131 1.91242 3.79756 0.894171 3.79756 0.894171C3.79756 0.894171 3.71744 0.703995 3.57394 0.601658C3.4005 0.478001 3.1584 0.439624 3.1584 0.439624L0.586807 0.455828C0.586807 0.455828 0.20032 0.466061 0.0585791 0.628947C-0.0673154 0.773072 0.0488949 1.07241 0.0488949 1.07241C0.0488949 1.07241 2.06233 5.63578 4.34251 7.9358C6.43342 10.0439 8.80692 9.90579 8.80692 9.90579H9.88275Z"
                                                      fill="white"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <span
                                className="sps-user-status block text-[14px] max-w-max py-[2px] px-[8px] mb-[12px] text-[#8CD23C] text-center border border-[#8CD23C] rounded-full">В сети</span>
                            <div className="sps-user-actions w-full pt-[12px] border-t border-[#DBE0ED]">
                                <button
                                    className="sps-user-action self-start text-[#ACB6CC] text-[14px] border-b border-[#ACB6CC]">Выйти
                                    из аккаунта
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="sps-form flex flex-col w-full pl-[56px] border-l border-[#DBE0ED] pt-[26px]">
                            <div className="sps-fields grid grid-cols-2 gap-[24px] mb-[64px]">
                                <div className="input-wrapper flex flex-col font-secondary-bold text-black">
                                    <label className="input-label mb-[16px] text-[14px]">Имя пользователя</label>
                                    <input onChange={props.handleName} id="input_user_name"
                                           className="bg-[#EAEBF8] p-[12px] text-sm border border-[#CED0E8] rounded-[4px]"
                                           type="text" placeholder={props.user.name}/>
                                    <span className={ `${props.errorName}  text-[14px] text-red-600`}>Количество символов должно соответсвовать диапазону от 8 до 40.</span>
                                </div>
                                <div className="input-wrapper flex flex-col font-secondary-bold text-black">
                                    <label className="input-label mb-[16px] text-[14px]">Секретное слово</label>
                                    <input onChange={props.handleSecretWord} id="input_user_secret_word"
                                           className={` bg-[#EAEBF8] p-[12px] text-sm border border-[#CED0E8] rounded-[4px]`}
                                           type="text" placeholder={props.user.secret_word}/>
                                    <span className={ `${props.errorSecretWord}  text-[14px] text-red-600`}>Секретное слово введено некорректно.</span>
                                </div>
                                <div id='pass_edit' className="input-wrapper flex flex-col font-secondary-bold text-black">
                                    <label className="input-label mb-[16px] text-[14px]">Пароль</label>
                                    <input id="input_user_password"
                                           className="bg-[#EAEBF8] p-[12px] text-sm border border-[#CED0E8] rounded-[4px]"
                                           type="password" value={props.user.password} disabled/>
                                    <button onClick={props.openPasswordEditPopup} className="text-[14px]">Изменить
                                    </button>
                                </div>
                                <div className="input-wrapper flex flex-col font-secondary-bold text-black">
                                    <label className="input-label mb-[16px] text-[14px]">Почта</label>
                                    <input onChange={props.handleEmail} id="input_user_email"
                                           className={`bg-[#EAEBF8] p-[12px] text-sm border border-[#CED0E8] rounded-[4px]`}
                                           type="text" placeholder={props.user.email}/>
                                    <span className={ `${props.errorEmail}  text-[14px] text-red-600`}>Email введен некорректно</span>
                                </div>
                                <div className="switch-wrapper flex flex-col font-secondary-bold text-black">
                                    <span className="switch-label mb-[16px] text-[14px]">Звуки уведомления</span>
                                    <div className="switch flex items-center">
                                        <input id="switch1" type="checkbox" value="1"/>
                                        <label htmlFor="switch1">toggle</label>
                                        <span className="inline-block switch-text ml-[8px] text-[14px]">Включено</span>
                                    </div>
                                </div>
                                <div className="switch-wrapper flex flex-col font-secondary-bold text-black">
                                    <span className="switch-label mb-[16px] text-[14px]">Рассылка на почту</span>
                                    <div className="switch flex items-center">
                                        <input id="switch2" type="checkbox" value="1"/>
                                        <label htmlFor="switch2">toggle</label>
                                        <span className="inline-block switch-text ml-[8px] text-[14px]">Включено</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sps-form-actions flex w-full">
                                <button onClick={props.onSubmit}
                                        className="sm-filter-btn btn flex justify-center items-center bg-gradient-primary rounded-[4px] py-4 w-full mb-[12px]">
                                    <div
                                        className="sm-filter-btn-icon flex-shrink-0 w-[14px] h-[14px] [&amp;_svg]:w-full flex justify-center items-center mr-[8px]">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M12.9872 0.8L12.9872 7.2L12.9872 7.272C11.9195 7.5396 11.1707 8.49924 11.1707 9.6C11.1707 10.7008 11.9195 11.6604 12.9872 11.928L12.9872 12L12.9872 15.2C12.9872 15.6418 13.3454 16 13.7872 16C14.2291 16 14.5872 15.6418 14.5872 15.2L14.5872 12C14.5949 11.9282 14.5949 11.8558 14.5872 11.784C15.443 11.3941 15.9922 10.5404 15.9922 9.6C15.9922 8.65963 15.443 7.80589 14.5872 7.416C14.5949 7.3442 14.5949 7.2718 14.5872 7.2L14.5872 0.8C14.5872 0.358172 14.2291 -7.70681e-08 13.7872 -9.6381e-08C13.3454 -1.15694e-07 12.9872 0.358172 12.9872 0.8ZM14.3633 9.6C14.3633 10.0418 14.0051 10.4 13.5633 10.4C13.1215 10.4 12.7633 10.0418 12.7633 9.6C12.7633 9.15817 13.1215 8.8 13.5633 8.8C14.0051 8.8 14.3633 9.15817 14.3633 9.6Z"
                                                  fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M7.38818 0.8L7.38818 2.4L7.38818 2.472C6.32813 2.74531 5.58736 3.70129 5.58736 4.796C5.58736 5.89071 6.32813 6.84669 7.38817 7.12L7.38817 15.2C7.38817 15.6418 7.74635 16 8.18817 16C8.63 16 8.98817 15.6418 8.98817 15.2L8.98817 6.96C9.82986 6.56435 10.3672 5.71804 10.3672 4.788C10.3672 3.85796 9.82986 3.01165 8.98818 2.616C8.99579 2.5442 8.99579 2.4718 8.98818 2.4L8.98818 0.8C8.98818 0.358172 8.63 -7.59347e-08 8.18818 -9.52477e-08C7.74635 -1.14561e-07 7.38818 0.358172 7.38818 0.8ZM8.76388 4.8C8.76388 5.24183 8.40571 5.6 7.96388 5.6C7.52205 5.6 7.16388 5.24183 7.16388 4.8C7.16388 4.35817 7.52205 4 7.96388 4C8.40571 4 8.76388 4.35817 8.76388 4.8Z"
                                                  fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M1.78832 0.8L1.78832 8.08C0.735795 8.35878 0.00281436 9.31118 0.00281432 10.4C0.00281427 11.4888 0.735795 12.4412 1.78832 12.72L1.78832 15.2C1.78832 15.6418 2.14649 16 2.58832 16C3.03015 16 3.38832 15.6418 3.38832 15.2L3.38832 12.56C4.2163 12.159 4.74219 11.32 4.74219 10.4C4.74219 9.48003 4.2163 8.64101 3.38832 8.24L3.38832 0.8C3.38832 0.358172 3.03015 -7.48355e-08 2.58832 -9.41484e-08C2.1465 -1.13461e-07 1.78832 0.358172 1.78832 0.8ZM3.16448 10.4C3.16448 10.8418 2.80631 11.2 2.36448 11.2C1.92265 11.2 1.56448 10.8418 1.56448 10.4C1.56448 9.95817 1.92265 9.6 2.36448 9.6C2.80631 9.6 3.16448 9.95817 3.16448 10.4Z"
                                                  fill="white"></path>
                                        </svg>
                                    </div>
                                    <div
                                        className="sm-filter-btn-text font-secondary-bold text-[14px] text-white">Применить
                                        изменения
                                    </div>
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileEdit;