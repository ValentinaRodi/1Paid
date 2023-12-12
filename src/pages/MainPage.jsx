import "./main.css";
import logo from "../assets/images/link-pin-plate.6d928d3b.svg"
import logoPic from "../assets/images/logo.7fb09570.svg";
import dots from "../assets/images/dots-1.82560447.svg";
import cases from "../assets/images/avatar-example-1.efb6cc72.png";
import cases2 from "../assets/images/case-blue.6568b466.png";
import cases3 from "../assets/images/case-violet.2050f5bf.png";
import cases4 from "../assets/images/case-pink.17c520f2.png";
import cases5 from "../assets/images/case-gold.dea4179e.png";
import avatar from "../assets/images/avatar-example-2.9f0c98b7.png";
import picture from "../assets/images/icon-plus-blue.a12eb4f0.svg";
import raffle from "../assets/images/raffle.161f3412.png";
import award from "../assets/images/icon-game-rank-1.476389b0.svg";
import picture2 from "../assets/images/game-card-bg-warface.9e636275.png";
import Warface from "../assets/images/icon-warface.75063d1d.png";
import picture3 from "../assets/images/game-card-bg-dota2.badc2a3f.png";
import dota2 from "../assets/images/icon-dota2.c7d69ebf.png";
import picture4 from "../assets/images/game-card-bg-csgo.6235c5a2.png";
import csgo from "../assets/images/icon-csgo.b5c3b06d.png";
import picture5 from "../assets/images/game-card-bg-gta5.99ca99e5.png";
import gta5 from "../assets/images/icon-gta5.a916b090.png";
import picture6 from "../assets/images/game-card-bg-fortnite.6a6e51b5.png";
import fortnite from "../assets/images/icon-fortnite.2e93362c.png";
import picture7 from "../assets/images/game-card-bg-wot.f2291c2b.png";
import wot from "../assets/images/icon-wot.78a9639e.png";
import user from "../assets/images/avatar-example-bot.1e9be783.png";
import user2 from "../assets/images/avatar-example-1.efb6cc72.png";
import instagram from "../assets/images/game-card-bg-gta5.99ca99e5.png";
import discrod from "../assets/images/icon-discord-grey.c77ff220.svg";
import vk from "../assets/images/icon-vk-grey.349c1aa3.svg";
import youtube from "../assets/images/icon-yt-grey.4134affa.svg";


function MainPage() {

  return (
    <>
  <div className="layout">
    <div className="layout-grid">
      <div className="layout-sidebar menu">
        <div className="cm">
          <div className="cm-inner">
            <div className="cm-h px-10 pt-8 3xl:px-5 3xl:pt-5">
              <div className="cm-h-inner flex justify-between items-center">
                <div className="logo w-[180px] 3xl:w-[150px] xl:w-[120px] lg:w-auto lg:flex-shrink-1 lg:basis-[130px]">
                  <img
                    className="logo__dots lg:h-[100%] xl:w-1/2"
                    src={logo}
                    alt="1paid.ru"
                  />
                  <img className="logo-pic" src={logoPic} alt="1paid.ru" />
                </div>
              </div>
            </div>
            <div className="cm-b py-10 3xl:py-5">
              <div className="cm-container">
                <div className="tsc flex gap-2.5 p-3 flex-wrap xl:p-1.5">
                  <div className="tsc-item flex gap-x-2.5 items-center">
                    <button
                      className="btn btn-secondary tsc-item-btn flex-shrink-0 w-[50px] h-[50px] [&_svg]:w-1/3 3xl:w-10 3xl:h-10 xl:w-8 xl:h-8"
                      disabled=""
                    >
                      <svg
                        className="tsc-item-btn-icon"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.5455 0H2.45455C1.09894 0 0 1.09894 0 2.45455V15.5455C0 16.9011 1.09894 18 2.45455 18H15.5455C16.9011 18 18 16.9011 18 15.5455V2.45455C18 1.09894 16.9011 0 15.5455 0ZM16.3638 15.5455C16.3638 15.9973 15.9975 16.3636 15.5456 16.3636H2.45471C2.00284 16.3636 1.63652 15.9973 1.63652 15.5455V2.45455C1.63652 2.00268 2.00284 1.63636 2.45471 1.63636H8.23925C8.20409 1.72504 8.1847 1.81919 8.18198 1.91455V5.18727C8.18198 5.63914 8.54829 6.00545 9.00016 6.00545C9.45203 6.00545 9.81834 5.63914 9.81834 5.18727V1.91455C9.81561 1.81919 9.79623 1.72504 9.76107 1.63636H15.5456C15.9975 1.63636 16.3638 2.00268 16.3638 2.45455V15.5455Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.5877 12.2727H12.2241C12.6759 12.2727 13.0423 11.9064 13.0423 11.4545C13.0423 11.0027 12.6759 10.6364 12.2241 10.6364H10.5877C10.1358 10.6364 9.76953 11.0027 9.76953 11.4545C9.76953 11.9064 10.1358 12.2727 10.5877 12.2727Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.8604 13.0909H10.5877C10.1358 13.0909 9.76953 13.4572 9.76953 13.9091C9.76953 14.3609 10.1358 14.7272 10.5877 14.7272H13.8604C14.3123 14.7272 14.6786 14.3609 14.6786 13.9091C14.6786 13.4572 14.3123 13.0909 13.8604 13.0909Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <div className="tsc-item-info">
                      <div className="tsc-item-value text-black text-sm xl:text-xs">
                        181 924 365
                      </div>
                      <div className="tsc-item-label mt-0.5 text-xs xl:text-[10px]">
                        Куплено товаров
                      </div>
                    </div>
                  </div>
                  <div className="tsc-item flex gap-x-2.5 items-center">
                    <button
                      className="btn btn-primary tsc-item-btn flex-shrink-0 w-[50px] h-[50px] [&_svg]:w-1/3 3xl:w-10 3xl:h-10 xl:w-8 xl:h-8"
                      disabled=""
                    >
                      <svg
                        viewBox="0 0 17 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.645 9.11485C13.3576 7.77329 14.0307 5.49305 13.3211 3.43653C12.6115 1.38 10.6755 0 8.5 0C6.3245 0 4.3885 1.38 3.67892 3.43653C2.96933 5.49305 3.64239 7.77329 5.355 9.11485C2.12463 10.4014 0.00358828 13.5257 0 17.0028V17.8528C0 18.3223 0.380558 18.7028 0.85 18.7028C1.31944 18.7028 1.7 18.3223 1.7 17.8528V17.0028C1.7 13.2473 4.74446 10.2028 8.5 10.2028C12.2555 10.2028 15.3 13.2473 15.3 17.0028V17.8528C15.3 18.3223 15.6806 18.7028 16.15 18.7028C16.6194 18.7028 17 18.3223 17 17.8528V17.0028C16.9964 13.5257 14.8754 10.4014 11.645 9.11485ZM5.09991 5.10285C5.09991 3.22508 6.62214 1.70285 8.49991 1.70285C10.3777 1.70285 11.8999 3.22508 11.8999 5.10285C11.8999 6.98062 10.3777 8.50285 8.49991 8.50285C7.59817 8.50285 6.73337 8.14464 6.09575 7.50701C5.45812 6.86939 5.09991 6.00458 5.09991 5.10285Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <div className="tsc-item-info">
                      <div className="tsc-item-value text-black text-sm xl:text-xs">
                        486 532
                      </div>
                      <div className="tsc-item-label mt-0.5 text-xs xl:text-[10px]">
                        Пользователей
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cm-nav mt-10 3xl:mt-8 xl:mt-6">
                  <div className="navpin">
                    <a
                      className="navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4"
                      href="#"
                    >
                      <div className="navpin-plate">
                        <img
                          className="navpin-plate-pic"
                          src={dots}
                          alt="dots1"
                        />
                        <img
                          className="navpin-plate__dots-1"
                          src={dots}
                          alt="dots"
                        />
                        <img
                          className="navpin-plate__dots-2"
                          src={dots}
                          alt="dots"
                        />
                        <div className="navpin-plate-icon">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M22.0161 24.9999C23.5605 24.9999 24.8125 23.728 24.8125 22.159C24.8125 20.59 23.5605 19.3181 22.0161 19.3181C20.4717 19.3181 19.2197 20.59 19.2197 22.159C19.2197 23.728 20.4717 24.9999 22.0161 24.9999ZM22.016 22.7272C21.7096 22.7211 21.4627 22.4702 21.4568 22.159C21.4568 21.8452 21.7071 21.5908 22.016 21.5908C22.3249 21.5908 22.5753 21.8452 22.5753 22.159C22.5753 22.4728 22.3249 22.7272 22.016 22.7272Z"
                              fill="currentColor"
                            />
                            <path
                              d="M24.8111 16.3636C25.4289 16.3636 25.9297 16.8724 25.9297 17.5C25.9297 18.1276 25.4289 18.6364 24.8111 18.6364H14.5092L13.0327 24.1591C12.869 24.7647 12.2531 25.1209 11.6569 24.9545C11.0608 24.7882 10.7102 24.1625 10.8739 23.5568L12.1938 18.6364H10.4489C9.83296 18.6382 9.29627 18.2104 9.15135 17.6023L6.60105 7.27273H4.11785C3.50009 7.27273 2.9993 6.76396 2.9993 6.13636C2.9993 5.50877 3.50009 5 4.11785 5H7.30574C7.92026 5.00231 8.45475 5.42829 8.60326 6.03409L11.1424 16.3636H24.8111Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M24.0735 15.2273C24.7097 15.2307 25.2608 14.7799 25.3934 14.1477L26.9705 6.64773C27.0548 6.24596 26.9562 5.82701 26.7023 5.50732C26.4484 5.18763 26.0662 5.00126 25.6618 5H11.6463C11.2459 5.00801 10.8699 5.19724 10.6211 5.51602C10.3722 5.83479 10.2765 6.24981 10.36 6.64773L11.9371 14.1477C12.0697 14.7799 12.6208 15.2307 13.257 15.2273H24.0735ZM13.9618 12.9545L12.7649 7.27268H24.5545L23.3577 12.9545H13.9618Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="navpin-text text-sm uppercase ml-7 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs">
                        Продать товар
                      </div>
                    </a>
                    <a
                      className="navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4"
                      href="#"
                    >
                      <div className="navpin-plate">
                        <img
                          className="navpin-plate-pic"
                          src={logo}
                          alt="dots"
                        />
                        <img
                          className="navpin-plate__dots-1"
                          src={dots}
                          alt="dots"
                        />
                        <img
                          className="navpin-plate__dots-2"
                          src={dots}
                          alt="dots"
                        />
                        <div className="navpin-plate-icon">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M20.1525 16.8475L15.1525 21.8475L10.1525 16.8475L7.3125 14.0075C5.93178 12.6268 5.93178 10.3882 7.3125 9.0075C8.69321 7.62679 10.9318 7.62679 12.3125 9.0075L15.1525 11.8675L17.9925 9.0275C19.3732 7.64679 21.6118 7.64679 22.9925 9.0275C24.3732 10.4082 24.3732 12.6468 22.9925 14.0275L20.1525 16.8475ZM13.7525 7.6175C11.5958 5.46083 8.09917 5.46083 5.9425 7.6175C3.78582 9.77418 3.78582 13.2708 5.9425 15.4275L7.3625 16.8475L15.1525 24.6575L22.9625 16.8475L24.3825 15.4275C26.5392 13.2708 26.5392 9.77418 24.3825 7.6175C22.2258 5.46083 18.7292 5.46083 16.5725 7.6175L15.1525 9.0375L13.7525 7.6175Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="navpin-text text-sm uppercase ml-7 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs">
                        Закладки
                      </div>
                    </a>
                    <a
                      className="navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4"
                      href="#"
                    >
                      <div className="navpin-plate">
                        <img
                          className="navpin-plate-pic"
                          src={logo}
                          alt="dots"
                        />
                        <img
                          className="navpin-plate__dots-1"
                          src={dots}
                          alt="dots"
                        />
                        <img
                          className="navpin-plate__dots-2"
                          src={dots}
                          alt="dots"
                        />
                        <div className="navpin-plate-icon">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M23 16C24.6569 16 26 14.6569 26 13V9C26 7.34315 24.6569 6 23 6H19C17.3431 6 16 7.34315 16 9V13C16 14.6569 17.3431 16 19 16H23ZM24 13C24 13.5523 23.5523 14 23 14H19C18.4477 14 18 13.5523 18 13V9C18 8.44772 18.4477 8 19 8H23C23.5523 8 24 8.44772 24 9V13Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11 16C12.6569 16 14 14.6569 14 13V9C14 7.34315 12.6569 6 11 6H7C5.34315 6 4 7.34315 4 9V13C4 14.6569 5.34315 16 7 16H11ZM12 13C12 13.5523 11.5523 14 11 14H7C6.44772 14 6 13.5523 6 13V9C6 8.44772 6.44772 8 7 8H11C11.5523 8 12 8.44772 12 9V13Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M25 19C25 18.4477 24.5523 18 24 18H18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20H24C24.5523 20 25 19.5523 25 19Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M25 23C25 22.4477 24.5523 22 24 22H20C19.4477 22 19 22.4477 19 23C19 23.5523 19.4477 24 20 24H24C24.5523 24 25 23.5523 25 23Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13 19C13 18.4477 12.5523 18 12 18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H12C12.5523 20 13 19.5523 13 19Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13 23C13 22.4477 12.5523 22 12 22H8C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24H12C12.5523 24 13 23.5523 13 23Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="navpin-text text-sm uppercase ml-7 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs">
                        История просмотра
                      </div>
                    </a>
                    <a
                      className="navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4"
                      href="#"
                    >
                      <div className="navpin-plate">
                        <img
                          className="navpin-plate-pic"
                          src={logo}
                          alt="dots"
                        />
                        <img
                          className="navpin-plate__dots-1"
                          src={dots}
                          alt="dots"
                        />
                        <img
                          className="navpin-plate__dots-2"
                          src={dots}
                          alt="dots"
                        />
                        <div className="navpin-plate-icon">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M20 4H9C8.20435 4 7.44129 4.31607 6.87868 4.87868C6.31607 5.44129 6 6.20435 6 7V24.8C6.00064 25.2303 6.25209 25.6207 6.64357 25.7992C7.03506 25.9777 7.4947 25.9116 7.82 25.63L10.5 23.33L13.29 25.72C13.6649 26.0427 14.2091 26.0754 14.62 25.8L18.42 23.26L21.18 25.63C21.5053 25.9116 21.9649 25.9777 22.3564 25.7992C22.7479 25.6207 22.9994 25.2303 23 24.8V7C23 5.34315 21.6569 4 20 4ZM9.78 21.3L8 22.83V7C8 6.44772 8.44771 6 9 6H20C20.5523 6 21 6.44772 21 7V22.84L19.21 21.29C18.8337 20.9706 18.2918 20.938 17.88 21.21L14.08 23.75L11.22 21.3C10.8036 20.9505 10.1964 20.9505 9.78 21.3Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M20 4H9C8.20435 4 7.44129 4.31607 6.87868 4.87868C6.31607 5.44129 6 6.20435 6 7V24.8C6.00064 25.2303 6.25209 25.6207 6.64357 25.7992C7.03506 25.9777 7.4947 25.9116 7.82 25.63L10.5 23.33L13.29 25.72C13.6649 26.0427 14.2091 26.0754 14.62 25.8L18.42 23.26L21.18 25.63C21.5053 25.9116 21.9649 25.9777 22.3564 25.7992C22.7479 25.6207 22.9994 25.2303 23 24.8V7C23 5.34315 21.6569 4 20 4ZM9.78 21.3L8 22.83V7C8 6.44772 8.44771 6 9 6H20C20.5523 6 21 6.44772 21 7V22.84L19.21 21.29C18.8337 20.9706 18.2918 20.938 17.88 21.21L14.08 23.75L11.22 21.3C10.8036 20.9505 10.1964 20.9505 9.78 21.3Z"
                              fill="currentColor"
                            />
                            <path
                              d="M19 10H12C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10Z"
                              fill="currentColor"
                            />
                            <path
                              d="M19 10H12C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10Z"
                              fill="currentColor"
                            />
                            <path
                              d="M19 14H15C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14Z"
                              fill="currentColor"
                            />
                            <path
                              d="M19 14H15C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14Z"
                              fill="currentColor"
                            />
                            <path
                              d="M11 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H11C10.4477 18 10 17.5523 10 17C10 16.4477 10.4477 16 11 16Z"
                              fill="currentColor"
                            />
                            <path
                              d="M11 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H11C10.4477 18 10 17.5523 10 17C10 16.4477 10.4477 16 11 16Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="navpin-text text-sm uppercase ml-7 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs">
                        История покупок и продаж
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="cm-f pb-10">
              <div className="cm-container flex flex-col items-center">
                <a
                  className="rounded-full border-[1px] border-solid border-[#C0C2DC59] max-w-[160px] w-full h-12 px-3 flex justify-center items-center hover:bg-slate-100 xl:max-w-none xl:h-10"
                  href="#"
                >
                  <div className="btn-text font-secondary-bold text-sm text-[#A1AEC8]">
                    Выбор игры
                  </div>
                </a>
                <div className="cm-f-bar mt-3 overflow-hidden flex w-full h-16 rounded-full border-[1px] border-solid border-[#C0C2DC59] 3xl:h-12 xl:flex-col xl:h-auto xl:rounded-xl">
                  <a
                    className="cm-f-bar-item h-full flex items-center gap-x-2 px-4 text-[#A1AEC8] hover:bg-slate-100 3xl:px-2 xl:h-10"
                    href="#"
                  >
                    <div className="cm-f-bar-item-icon flex-shrink-0">
                      <svg
                        width={20}
                        height={18}
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.2727 5.10197H14.5455V3.28379C14.5455 1.77756 13.3244 0.556519 11.8182 0.556519H2.72727C1.22104 0.556519 0 1.77756 0 3.28379V8.73834C0 10.2446 1.22104 11.4656 2.72727 11.4656H4.13636L5.45455 12.9292V13.2565C5.45455 14.7628 6.67559 15.9838 8.18182 15.9838H11.4091L12.7818 17.5383C13.0407 17.8319 13.4132 18 13.8045 18C14.1959 18 14.5684 17.8319 14.8273 17.5383L16.2 15.9838H17.2727C18.779 15.9838 20 14.7628 20 13.2565V7.80197C19.985 6.3064 18.7684 5.1019 17.2727 5.10197ZM2.72727 9.64743C2.2252 9.64743 1.81818 9.24041 1.81818 8.73834V3.28379C1.81818 2.78171 2.2252 2.3747 2.72727 2.3747H11.8182C12.3203 2.3747 12.7273 2.78171 12.7273 3.28379V8.73834C12.7273 9.24041 12.3203 9.64743 11.8182 9.64743H8.11818L6.53636 11.4656L4.95455 9.64743H2.72727ZM17.2727 14.1929C17.7748 14.1929 18.1818 13.7859 18.1818 13.2838V7.84742C18.1818 7.34534 17.7748 6.93833 17.2727 6.93833H14.5455V8.75651C14.5455 10.2627 13.3244 11.4838 11.8182 11.4838H8.92727L7.55455 13.0383C7.4717 13.1321 7.37696 13.2146 7.27273 13.2838C7.27273 13.7859 7.67974 14.1929 8.18182 14.1929H12.2273L13.8091 16.0838L15.3909 14.1929H17.2727Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="cm-f-bar-item-label font-secondary-bold text-sm 3xl:text-xs">
                      Мои Сообщения
                    </div>
                  </a>
                  <div className="cm-f-bar-sep w-[1px] h-full flex-shrink-0 bg-[#C0C2DC59] xl:h-[1px] xl:w-full" />
                  <a
                    className="cm-f-bar-item h-full flex items-center gap-x-2 px-4 text-[#A1AEC8] hover:bg-slate-100 3xl:px-2 xl:h-10"
                    href="#"
                  >
                    <div className="cm-f-bar-item-icon flex-shrink-0">
                      <svg
                        width={20}
                        height={14}
                        viewBox="0 0 20 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.2727 4.33194H16.3636C16.1681 4.33414 15.9732 4.35545 15.7818 4.39557C14.7435 2.13731 12.4855 0.690216 10 0.690216C7.51449 0.690216 5.25645 2.13731 4.21818 4.39557C4.02678 4.35545 3.83191 4.33414 3.63636 4.33194H2.72727C1.22104 4.33194 0 5.55298 0 7.05921V10.6956C0 12.2018 1.22104 13.4228 2.72727 13.4228H3.63636C5.14259 13.4228 6.36364 12.2018 6.36364 10.6956V7.05921C6.35858 6.45136 6.15061 5.86263 5.77273 5.38648C6.45841 3.65157 8.13451 2.51175 10 2.51175C11.8655 2.51175 13.5416 3.65157 14.2273 5.38648C13.8494 5.86263 13.6414 6.45136 13.6364 7.05921V10.6956C13.6364 12.2018 14.8574 13.4228 16.3636 13.4228H17.2727C18.779 13.4228 20 12.2018 20 10.6956V7.05921C20 5.55298 18.779 4.33194 17.2727 4.33194ZM4.54545 10.6956C4.54545 11.1977 4.13844 11.6047 3.63636 11.6047H2.72727C2.2252 11.6047 1.81818 11.1977 1.81818 10.6956V7.05923C1.81818 6.55716 2.2252 6.15014 2.72727 6.15014H3.63636C4.13844 6.15014 4.54545 6.55716 4.54545 7.05923V10.6956ZM17.2727 11.6047C17.7748 11.6047 18.1818 11.1977 18.1818 10.6956V7.05923C18.1818 6.55716 17.7748 6.15014 17.2727 6.15014H16.3636C15.8616 6.15014 15.4545 6.55716 15.4545 7.05923V10.6956C15.4545 11.1977 15.8616 11.6047 16.3636 11.6047H17.2727Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="cm-f-bar-item-label font-secondary-bold text-sm 3xl:text-xs">
                      Тех. Поддержка
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="layout-page">
        <div className="layout-lf">
          <div className="lf">
            <div className="lf-h">
              <div className="lf-bar">
                <div className="lf-inf">
                  <div className="lf-inf-ind">
                    <div className="lf-inf-ind-point" />
                  </div>
                  <div className="lf-inf-inner">
                    <div className="lf-inf-ind-value">2 381</div>
                    <div className="lf-inf-ind-label">Online</div>
                  </div>
                </div>
                <div className="lf-toggle" title="Переключить вид">
                  <svg
                    width={4}
                    height={22}
                    viewBox="0 0 4 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx={2}
                      cy={20}
                      r={2}
                      transform="rotate(-90 2 20)"
                      fill="currentColor"
                    />
                    <circle
                      cx={2}
                      cy={11}
                      r={2}
                      transform="rotate(-90 2 11)"
                      fill="currentColor"
                    />
                    <circle
                      cx={2}
                      cy={2}
                      r={2}
                      transform="rotate(-90 2 2)"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="lf-change">
                <label className="lf-change-item">
                  <input
                    type="radio"
                    name="lf_type"
                    defaultValue={1}
                    defaultChecked=""
                  />
                  <div className="lf-change-btn">
                    <div className="lf-change-icon">
                      <svg
                        width={17}
                        height={19}
                        viewBox="0 0 17 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.645 9.11485C13.3576 7.77329 14.0307 5.49305 13.3211 3.43653C12.6115 1.38 10.6755 0 8.5 0C6.3245 0 4.3885 1.38 3.67892 3.43653C2.96933 5.49305 3.64239 7.77329 5.355 9.11485C2.12463 10.4014 0.00358828 13.5257 0 17.0028V17.8528C0 18.3223 0.380558 18.7028 0.85 18.7028C1.31944 18.7028 1.7 18.3223 1.7 17.8528V17.0028C1.7 13.2473 4.74446 10.2028 8.5 10.2028C12.2555 10.2028 15.3 13.2473 15.3 17.0028V17.8528C15.3 18.3223 15.6806 18.7028 16.15 18.7028C16.6194 18.7028 17 18.3223 17 17.8528V17.0028C16.9964 13.5257 14.8754 10.4014 11.645 9.11485ZM5.09991 5.10285C5.09991 3.22508 6.62214 1.70285 8.49991 1.70285C10.3777 1.70285 11.8999 3.22508 11.8999 5.10285C11.8999 6.98062 10.3777 8.50285 8.49991 8.50285C7.59817 8.50285 6.73337 8.14464 6.09575 7.50701C5.45812 6.86939 5.09991 6.00458 5.09991 5.10285Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </label>
                <label className="lf-change-item">
                  <input type="radio" name="lf_type" defaultValue={1} />
                  <div className="lf-change-btn">
                    <div className="lf-change-icon">
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.98 3.24842H14.8835C14.9276 3.12599 14.9589 2.99925 14.977 2.87025C15.1372 1.84138 14.6456 0.820701 13.7457 0.313902C12.8458 -0.192898 11.7287 -0.0781714 10.948 0.601242L8.262 2.92182L5.5845 0.601242C4.80375 -0.0781714 3.68672 -0.192898 2.78682 0.313902C1.88691 0.820701 1.39528 1.84138 1.5555 2.87025C1.57358 2.99925 1.60491 3.12599 1.649 3.24842H1.02C0.45667 3.24842 0 3.71018 0 4.27979V7.3739C0 7.9435 0.45667 8.40526 1.02 8.40526H1.7V14.4216C1.7 15.8456 2.84167 17 4.25 17H12.75C14.1583 17 15.3 15.8456 15.3 14.4216V8.40526H15.98C16.5433 8.40526 17 7.9435 17 7.3739V4.27979C17 3.71018 16.5433 3.24842 15.98 3.24842ZM12.0529 1.90764C12.3064 1.68352 12.6759 1.65582 12.9593 1.83968C13.2428 2.02354 13.3719 2.37469 13.2761 2.70112C13.1803 3.02754 12.8826 3.25064 12.5459 3.24842H10.4974L12.0529 1.90764ZM3.67281 1.79177C3.40454 1.91541 3.23174 2.18537 3.23007 2.48348C3.23007 2.90594 3.56877 3.24841 3.98657 3.24841H6.03507L4.47957 1.90763C4.25596 1.71335 3.94109 1.66813 3.67281 1.79177ZM13.6003 14.4216C13.6003 14.8962 13.2198 15.281 12.7503 15.281H4.25032C3.78088 15.281 3.40032 14.8962 3.40032 14.4216V8.40524H13.6003V14.4216ZM1.70016 6.68629H15.3002V4.96735H1.70016V6.68629Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="lf-feed">
              <div className="lf-feed-track">
                <div className="lf-item">
                  <img className="lf-item-pic" src={cases2} alt="case" />
                  <div className="lf-item-plate">
                    <div className="lf-item-avatar">
                      <img src={cases} alt="case" />
                    </div>
                    <div className="lf-item-name" title="Santcese">
                      Santcese
                    </div>
                  </div>
                </div>
                <div className="lf-item">
                  <img className="lf-item-pic" src={cases3} alt="case" />
                  <div className="lf-item-plate">
                    <div className="lf-item-avatar">
                      <img src={cases} alt="case" />
                    </div>
                    <div className="lf-item-name" title="Santcese">
                      Santcese
                    </div>
                  </div>
                </div>
                <div className="lf-item">
                  <img className="lf-item-pic" src={cases4} alt="case" />
                  <div className="lf-item-plate">
                    <div className="lf-item-avatar">
                      <img src={cases} alt="case" />
                    </div>
                    <div className="lf-item-name" title="Santcese">
                      Santcese
                    </div>
                  </div>
                </div>
                <div className="lf-item">
                  <img className="lf-item-pic" src={cases5} alt="case" />
                  <div className="lf-item-plate">
                    <div className="lf-item-avatar">
                      <img src={cases} alt="case" />
                    </div>
                    <div className="lf-item-name" title="Santcese">
                      Santcese
                    </div>
                  </div>
                </div>
                <div className="lf-item">
                  <img className="lf-item-pic" src={cases2} alt="case" />
                  <div className="lf-item-plate">
                    <div className="lf-item-avatar">
                      <img src={cases} alt="case" />
                    </div>
                    <div className="lf-item-name" title="Santcese">
                      Santcese
                    </div>
                  </div>
                </div>
                <div className="lf-item">
                  <img className="lf-item-pic" src={cases3} alt="case" />
                  <div className="lf-item-plate">
                    <div className="lf-item-avatar">
                      <img src={cases} alt="case" />
                    </div>
                    <div className="lf-item-name" title="Santcese">
                      Santcese
                    </div>
                  </div>
                </div>
                <div className="lf-item">
                  <img className="lf-item-pic" src={cases4} alt="case" />
                  <div className="lf-item-plate">
                    <div className="lf-item-avatar">
                      <img src={cases} alt="case" />
                    </div>
                    <div className="lf-item-name" title="Santcese">
                      Santcese
                    </div>
                  </div>
                </div>
                <div className="lf-item">
                  <img className="lf-item-pic" src={cases5} alt="case" />
                  <div className="lf-item-plate">
                    <div className="lf-item-avatar">
                      <img src={cases} alt="case" />
                    </div>
                    <div className="lf-item-name" title="Santcese">
                      Santcese
                    </div>
                  </div>
                </div>
                <div className="lf-item">
                  <img className="lf-item-pic" src={cases2} alt="case" />
                  <div className="lf-item-plate">
                    <div className="lf-item-avatar">
                      <img src={cases} alt="case" />
                    </div>
                    <div className="lf-item-name" title="Santcese">
                      Santcese
                    </div>
                  </div>
                </div>
                <div className="lf-item">
                  <img className="lf-item-pic" src={cases3} alt="case" />
                  <div className="lf-item-plate">
                    <div className="lf-item-avatar">
                      <img src={cases} alt="case" />
                    </div>
                    <div className="lf-item-name" title="Santcese">
                      Santcese
                    </div>
                  </div>
                </div>
                <div className="lf-item">
                  <img className="lf-item-pic" src={cases4} alt="case" />
                  <div className="lf-item-plate">
                    <div className="lf-item-avatar">
                      <img src={cases} alt="case" />
                    </div>
                    <div className="lf-item-name" title="Santcese">
                      Santcese
                    </div>
                  </div>
                </div>
                <div className="lf-item">
                  <img className="lf-item-pic" src={cases5} alt="case" />
                  <div className="lf-item-plate">
                    <div className="lf-item-avatar">
                      <img src={cases} alt="case" />
                    </div>
                    <div className="lf-item-name" title="Santcese">
                      Santcese
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="layout-h px-9 pt-6 3xl:px-4 3xl:pt-4 lg:p-0">
          <div className="h-wrapper">
            <header className="h">
              <a className="h-backlink" href="#">
                <svg
                  viewBox="0 0 26 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.469669 5.96967C0.176777 6.26257 0.176777 6.73744 0.469669 7.03033L5.24264 11.8033C5.53553 12.0962 6.01041 12.0962 6.3033 11.8033C6.59619 11.5104 6.59619 11.0355 6.3033 10.7426L2.06066 6.5L6.3033 2.25736C6.59619 1.96447 6.59619 1.48959 6.3033 1.1967C6.01041 0.903807 5.53553 0.903808 5.24264 1.1967L0.469669 5.96967ZM26 5.75L1 5.75L1 7.25L26 7.25L26 5.75Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <nav className="nav flex gap-x-5 gap-y-5 flex-wrap mx-4 3xl:gap-x-2.5 lg:flex-col lg:items-start lg:gap-y-8">
                <a
                  className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30"
                  href="#"
                >
                  Главная
                </a>
                <a
                  className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30"
                  href="#"
                >
                  Каталог
                </a>
                <a
                  className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30"
                  href="#"
                >
                  Топ юзеров
                </a>
                <a
                  className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30"
                  href="#"
                >
                  Отзывы
                </a>
                <a
                  className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30"
                  href="#"
                >
                  Гарантии
                </a>
                <a
                  className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30"
                  href="#"
                >
                  Случайные предметы
                </a>
                <a
                  className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30"
                  href="#"
                >
                  Форум
                </a>
              </nav>
              <div className="h-bar ml-auto flex items-center gap-x-3">
                <button className="h-openmenu menu-open">
                  <span />
                  <span />
                </button>
                <div className="h-notif flex-shrink-0">
                  <div className="notif">
                    <button className="btn btn-secondary notif-btn rounded-full w-11 h-11 justify-center cursor-pointer lg:w-[50px] lg:h-[50px]">
                      <div className="btn-icon text-white">
                        <svg
                          width={16}
                          height={17}
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.1339 15.0561C15.1164 13.6921 14.3309 12.4579 13.1111 11.8778V8.0122C13.1541 5.35225 11.2421 3.07229 8.6421 2.68307C7.17902 2.49536 5.70713 2.95641 4.60455 3.9478C3.50197 4.93918 2.87616 6.36427 2.88786 7.85698V11.7522C1.46861 12.2353 0.509251 13.5775 0.5 15.0931C0.505439 15.3331 0.607572 15.5604 0.782704 15.7223C0.957837 15.8842 1.19075 15.9667 1.4274 15.9505H14.2649C14.4973 15.9485 14.7194 15.8532 14.8824 15.6855C15.0454 15.5177 15.1358 15.2913 15.1339 15.0561ZM7.26932 4.19823C8.3437 3.97626 9.45975 4.25478 10.309 4.95682C11.1583 5.65886 11.6509 6.71009 11.6507 7.81997V11.5156H4.34839V7.97519C4.30883 6.17267 5.5311 4.59219 7.26932 4.19823ZM2.07756 14.4722C2.33643 13.5933 3.13585 12.9917 4.04189 12.9939H11.6509C12.5562 12.9941 13.3543 13.5948 13.6153 14.4722H2.07756Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.73 1.47826V0.73913C8.73 0.33092 8.40306 0 7.99976 0C7.59647 0 7.26953 0.33092 7.26953 0.73913V1.47826C7.26953 1.88647 7.59647 2.21739 7.99976 2.21739C8.40306 2.21739 8.73 1.88647 8.73 1.47826Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.73 16.2609V15.5217C8.73 15.1135 8.40306 14.7826 7.99976 14.7826C7.59647 14.7826 7.26953 15.1135 7.26953 15.5217V16.2609C7.26953 16.6691 7.59647 17 7.99976 17C8.40306 17 8.73 16.6691 8.73 16.2609Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.28745 2.80134C2.42457 2.94126 2.61121 3.01997 2.80592 3.01997C3.00063 3.01997 3.18727 2.94126 3.32438 2.80134C3.60751 2.51305 3.60751 2.04745 3.32438 1.75916L2.80592 1.23438C2.6688 1.09445 2.48216 1.01575 2.28745 1.01575C2.09275 1.01575 1.9061 1.09445 1.76899 1.23438C1.48586 1.52267 1.48586 1.98827 1.76899 2.27655L2.28745 2.80134Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.535709 6.05348L1.26594 6.24565C1.64923 6.33604 2.03434 6.10272 2.13672 5.71808C2.23911 5.33345 2.02193 4.93588 1.64566 4.81913L0.91543 4.62695C0.526359 4.52368 0.128036 4.75831 0.0245458 5.15174C-0.0779904 5.54331 0.149977 5.94547 0.535709 6.05348Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.7535 6.29742L15.4837 6.10525C15.86 5.98849 16.0772 5.59093 15.9748 5.20629C15.8724 4.82166 15.4873 4.58834 15.104 4.67873L14.3738 4.8709C13.9975 4.98766 13.7803 5.38523 13.8827 5.76986C13.9851 6.15449 14.3702 6.38781 14.7535 6.29742Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.0305 2.80134L13.549 2.27655C13.8321 1.98827 13.8321 1.52267 13.549 1.23438C13.4119 1.09445 13.2252 1.01575 13.0305 1.01575C12.8358 1.01575 12.6492 1.09445 12.5121 1.23438L11.9936 1.75916C11.7105 2.04745 11.7105 2.51305 11.9936 2.80134C12.1307 2.94126 12.3174 3.01997 12.5121 3.01997C12.7068 3.01997 12.8934 2.94126 13.0305 2.80134Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </button>
                    <div className="notif-content rounded-xl bg-white w-[290px] py-6">
                      <div className="notif-h px-3 flex items-center justify-between flex-wrap gap-2.5 font-secondary-bold text-sm">
                        <div className="notif-heading text-black">
                          <span>
                            Уведомления{" "}
                            <span className="extra text-[color:var(--color-green-main)]">
                              (+4)
                            </span>
                          </span>
                        </div>
                        <div className="notif-total text-[#C8D5ED]">(43)</div>
                      </div>
                      <div className="notif-b mt-6">
                        <div className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                          <div className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                            <div className="btn-icon">
                              <svg
                                width={16}
                                height={13}
                                viewBox="0 0 16 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.20975 3.40829H15.1159C15.3645 3.40497 15.6027 3.50787 15.7707 3.69114C15.9387 3.87442 16.0205 4.12066 15.9956 4.36803L15.2685 11.3479C15.2277 11.7888 14.8606 12.1276 14.4179 12.1332H5.21312C4.7899 12.1315 4.43001 11.8239 4.36244 11.4061L2.90829 4.29532L2.34845 1.95415H0.727073C0.325522 1.95415 0 1.62863 0 1.22707C0 0.825522 0.325522 0.5 0.727073 0.5H2.79923C3.19507 0.507287 3.53728 0.778079 3.63537 1.16164L4.20975 3.40829ZM5.69289 10.679H13.8943L14.4759 4.86244H4.52958L5.69289 10.679Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="notif-item-inf flex-grow">
                            <div className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                              <div className="notif-item-title font-secondary-bold text-black">
                                Стол заказа!
                              </div>
                              <div className="notif-item-time font-secondary-med text-[#C5CFE4]">
                                22:15
                              </div>
                            </div>
                            <div className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">
                              Товар по вашему запросу был выставлен на продажу!
                            </div>
                          </div>
                        </div>
                        <div className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                          <div className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                            <div className="btn-icon">
                              <svg
                                width={16}
                                height={13}
                                viewBox="0 0 16 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.20975 3.40829H15.1159C15.3645 3.40497 15.6027 3.50787 15.7707 3.69114C15.9387 3.87442 16.0205 4.12066 15.9956 4.36803L15.2685 11.3479C15.2277 11.7888 14.8606 12.1276 14.4179 12.1332H5.21312C4.7899 12.1315 4.43001 11.8239 4.36244 11.4061L2.90829 4.29532L2.34845 1.95415H0.727073C0.325522 1.95415 0 1.62863 0 1.22707C0 0.825522 0.325522 0.5 0.727073 0.5H2.79923C3.19507 0.507287 3.53728 0.778079 3.63537 1.16164L4.20975 3.40829ZM5.69289 10.679H13.8943L14.4759 4.86244H4.52958L5.69289 10.679Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="notif-item-inf flex-grow">
                            <div className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                              <div className="notif-item-title font-secondary-bold text-black">
                                Стол заказа!
                              </div>
                              <div className="notif-item-time font-secondary-med text-[#C5CFE4]">
                                22:15
                              </div>
                            </div>
                            <div className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">
                              Товар по вашему запросу был выставлен на продажу!
                            </div>
                          </div>
                        </div>
                        <div className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                          <div className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                            <div className="btn-icon">
                              <svg
                                width={16}
                                height={13}
                                viewBox="0 0 16 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.20975 3.40829H15.1159C15.3645 3.40497 15.6027 3.50787 15.7707 3.69114C15.9387 3.87442 16.0205 4.12066 15.9956 4.36803L15.2685 11.3479C15.2277 11.7888 14.8606 12.1276 14.4179 12.1332H5.21312C4.7899 12.1315 4.43001 11.8239 4.36244 11.4061L2.90829 4.29532L2.34845 1.95415H0.727073C0.325522 1.95415 0 1.62863 0 1.22707C0 0.825522 0.325522 0.5 0.727073 0.5H2.79923C3.19507 0.507287 3.53728 0.778079 3.63537 1.16164L4.20975 3.40829ZM5.69289 10.679H13.8943L14.4759 4.86244H4.52958L5.69289 10.679Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="notif-item-inf flex-grow">
                            <div className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                              <div className="notif-item-title font-secondary-bold text-black">
                                Стол заказа!
                              </div>
                              <div className="notif-item-time font-secondary-med text-[#C5CFE4]">
                                22:15
                              </div>
                            </div>
                            <div className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">
                              Товар по вашему запросу был выставлен на продажу!
                            </div>
                          </div>
                        </div>
                        <div className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                          <div className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                            <div className="btn-icon">
                              <svg
                                width={16}
                                height={13}
                                viewBox="0 0 16 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.20975 3.40829H15.1159C15.3645 3.40497 15.6027 3.50787 15.7707 3.69114C15.9387 3.87442 16.0205 4.12066 15.9956 4.36803L15.2685 11.3479C15.2277 11.7888 14.8606 12.1276 14.4179 12.1332H5.21312C4.7899 12.1315 4.43001 11.8239 4.36244 11.4061L2.90829 4.29532L2.34845 1.95415H0.727073C0.325522 1.95415 0 1.62863 0 1.22707C0 0.825522 0.325522 0.5 0.727073 0.5H2.79923C3.19507 0.507287 3.53728 0.778079 3.63537 1.16164L4.20975 3.40829ZM5.69289 10.679H13.8943L14.4759 4.86244H4.52958L5.69289 10.679Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="notif-item-inf flex-grow">
                            <div className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                              <div className="notif-item-title font-secondary-bold text-black">
                                Стол заказа!
                              </div>
                              <div className="notif-item-time font-secondary-med text-[#C5CFE4]">
                                22:15
                              </div>
                            </div>
                            <div className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">
                              Товар по вашему запросу был выставлен на продажу!
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        className="notif-btnall mt-5 w-full border-b border-[#ECEDF7] py-1 flex justify-center duration-200 hover:bg-[#F6F9FF]"
                        href="#"
                      >
                        <div className="btn-text font-primary-bold text-sm text-[#C5CFE4]">
                          Показать все
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="h-profile min-w-[300px]">
                  <div className="pmc h-14 rounded-full px-3 flex items-center gap-x-3 bg-white lg:mx-3 lg:bg-[#f6f9ff] lg:h-auto lg:min-h-[50px] lg:py-2">
                    <div className="pmc-avatar flex-shrink-0 rounded-full w-8 h-8 lg:w-10 lg:h-10">
                      <img
                        className="w-full h-full object-cover"
                        src={avatar}
                        alt="user avatar"
                      />
                    </div>
                    <div className="pmc-chip-bar flex gap-x-3 gap-y-2 items-center lg:flex-wrap lg:ml-auto">
                      <a
                        className="pmc-chip border rounded-full border-[#DCF1C4] px-2 py-1 flex items-center gap-x-2 duration-200 hover:bg-[#DCF1C4]"
                        href="#"
                      >
                        <span className="font-primary-bold text-xs text-black whitespace-nowrap">
                          1 521 100PD
                        </span>
                      </a>
                      <a
                        className="pmc-chip border rounded-full border-[#D2DFFB] px-2 py-1 flex items-center gap-x-2 duration-200 hover:bg-[#D2DFFB]"
                        href="#"
                      >
                        <span className="font-primary-bold text-xs text-black whitespace-nowrap">
                          533 100₽
                        </span>
                        <img
                          className="pmc-chip-icon w-4 h-4"
                          src={picture}
                          alt="picture"
                        />
                      </a>
                    </div>
                    <div className="pmc-card-arrow h-profile-btn-open ml-auto text-[#D6D9EA] cursor-pointer hover:text-black lg:hidden">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 9L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L6 9"
                          stroke="currentColor"
                              strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="h-profile-content rounded-[22px] min-w-[290px] py-3 bg-white shadow-sm overflow-hidden">
                    <div className="np">
                      <nav className="np-nav">
                        <a
                          className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]"
                          href="#"
                        >
                          <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&_svg]:max-w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={17}
                              viewBox="0 0 16 17"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.96 8.28496C12.5719 7.06555 13.2053 4.99292 12.5375 3.12364C11.8696 1.25436 10.0475 0 8 0C5.95247 0 4.13036 1.25436 3.46251 3.12364C2.79466 4.99292 3.42813 7.06555 5.04 8.28496C1.99965 9.45436 0.00337721 12.2942 0 15.4548V16.2274C0 16.6541 0.358172 17 0.8 17C1.24183 17 1.6 16.6541 1.6 16.2274V15.4548C1.6 12.0412 4.46538 9.2739 8 9.2739C11.5346 9.2739 14.4 12.0412 14.4 15.4548V16.2274C14.4 16.6541 14.7582 17 15.2 17C15.6418 17 16 16.6541 16 16.2274V15.4548C15.9966 12.2942 14.0003 9.45436 10.96 8.28496ZM4.7998 4.6382C4.7998 2.9314 6.23249 1.54776 7.9998 1.54776C9.76712 1.54776 11.1998 2.9314 11.1998 4.6382C11.1998 6.345 9.76712 7.72864 7.9998 7.72864C7.15111 7.72864 6.33718 7.40304 5.73706 6.82347C5.13695 6.2439 4.7998 5.45783 4.7998 4.6382Z"
                                className="_to-gradient"
                              />
                              <defs>
                                <linearGradient
                                  id="icon_primary_gradient"
                                  x1="3.18182"
                                  y1="16.0636"
                                  x2="13.4359"
                                  y2="5.98946"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">
                            Мои профиль
                          </div>
                        </a>
                        <a
                          className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]"
                          href="#"
                        >
                          <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&_svg]:max-w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={17}
                              viewBox="0 0 16 17"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.6 0H2.296C1.02978 0.0042394 0.00438903 0.994671 0 2.21773V14.6818C0 15.9621 1.07452 17 2.4 17H13.6C14.9255 17 16 15.9621 16 14.6818V2.31818C16 1.03789 14.9255 0 13.6 0ZM12.7199 1.54546C13.5004 1.50959 14.2007 2.00562 14.3999 2.73546C14.5531 3.27168 14.3961 3.84607 13.9889 4.23941C13.5817 4.63275 12.987 4.78436 12.4319 4.63637C11.6763 4.44397 11.1627 3.76757 11.1999 3.01364V1.54546H12.7199ZM9.60004 1.54546V3.09091C9.60226 3.59138 9.35344 4.06191 8.93235 4.35353C8.51127 4.64515 7.97005 4.72176 7.48004 4.5591C6.80262 4.33535 6.36153 3.70417 6.40004 3.01364V1.54546H9.60004ZM4.79995 1.54546V3.09091C4.80217 3.59138 4.55335 4.06191 4.13226 4.35353C3.71117 4.64515 3.16996 4.72176 2.67995 4.5591C2.00845 4.33694 1.56875 3.71403 1.59995 3.0291V2.31819C1.59995 1.89142 1.95812 1.54546 2.39995 1.54546H4.79995ZM5.6001 15.4545V11.5909C5.59945 10.8999 5.91794 10.2447 6.46877 9.80382C7.01959 9.36294 7.74531 9.18238 8.4481 9.31136C9.61048 9.55255 10.4305 10.5588 10.4001 11.7068V15.4545H5.6001ZM13.6001 15.4545H12.0001V11.5909C12.0003 10.4306 11.4607 9.33157 10.5302 8.59761C9.5998 7.86366 8.37712 7.57248 7.2001 7.80455C5.30355 8.21795 3.96757 9.86003 4.0001 11.7377V15.4545H2.4001C1.95827 15.4545 1.6001 15.1086 1.6001 14.6818V5.76455C2.5154 6.2662 3.62304 6.31783 4.5841 5.90364C4.988 5.72727 5.34401 5.46275 5.6241 5.13091C6.38601 5.95434 7.54488 6.32255 8.6641 6.09682C9.34408 5.96213 9.95634 5.60784 10.4001 5.09228C10.8557 5.63462 11.4969 6.00185 12.2081 6.12773C12.9602 6.2637 13.7379 6.13486 14.4001 5.76455V14.6818C14.4001 15.1086 14.0419 15.4545 13.6001 15.4545Z"
                                fill="#CDD6E6"
                                className="_to-gradient"
                              />
                              <defs>
                                <linearGradient
                                  id="icon_primary_gradient"
                                  x1="3.18182"
                                  y1="16.0636"
                                  x2="13.4359"
                                  y2="5.98946"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">
                            Мои товары
                          </div>
                        </a>
                        <a
                          className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]"
                          href="#"
                        >
                          <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&_svg]:max-w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={13}
                              viewBox="0 0 16 13"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.989 2.89044C13.2737 2.88234 13.5446 3.01157 13.7163 3.23729L15.8254 6.03379C15.9406 6.18286 16.0021 6.3661 15.9999 6.55407V10.6946C15.9999 11.1735 15.6092 11.5617 15.1272 11.5617H13.0909C13.0497 11.5652 13.0084 11.5652 12.9672 11.5617C12.657 12.4243 11.8346 13 10.9127 13C9.99081 13 9.16841 12.4243 8.85815 11.5617H6.41452C6.10134 12.4191 5.28157 12.99 4.36362 12.99C3.44567 12.99 2.6259 12.4191 2.31272 11.5617H2.18181C0.97683 11.5617 0 10.5912 0 9.39392V2.16783C0 0.97057 0.97683 0 2.18181 0H9.45451C10.6595 0 11.6363 0.97057 11.6363 2.16783V2.89044H12.989ZM3.63623 10.8391C3.63623 11.2382 3.96184 11.5618 4.3635 11.5618C4.76516 11.5618 5.09077 11.2382 5.09077 10.8391C5.09077 10.4401 4.76516 10.1165 4.3635 10.1165C3.96184 10.1165 3.63623 10.4401 3.63623 10.8391ZM10.9092 11.5618C10.5075 11.5618 10.1819 11.2382 10.1819 10.8391C10.1819 10.4401 10.5075 10.1165 10.9092 10.1165C11.3108 10.1165 11.6364 10.4401 11.6364 10.8391C11.6364 11.2382 11.3108 11.5618 10.9092 11.5618ZM13.0909 10.1165H14.5455V6.74195L12.7273 4.33566H11.6364V7.2261C11.6364 7.62518 11.3108 7.94871 10.9091 7.94871C10.5074 7.94871 10.1818 7.62518 10.1818 7.2261V2.16783C10.1818 1.76875 9.85622 1.44522 9.45456 1.44522H2.18186C1.7802 1.44522 1.45459 1.76875 1.45459 2.16783V9.39392C1.45459 9.79301 1.7802 10.1165 2.18186 10.1165H2.31277C2.62595 9.25919 3.44572 8.68831 4.36367 8.68831C5.28162 8.68831 6.10139 9.25919 6.41457 10.1165H8.8582C9.16846 9.25399 9.99086 8.67828 10.9127 8.67828C11.8346 8.67828 12.657 9.25399 12.9673 10.1165C13.0084 10.113 13.0498 10.113 13.0909 10.1165Z"
                                fill="#CDD6E6"
                                className="_to-gradient"
                              />
                              <defs>
                                <linearGradient
                                  id="icon_primary_gradient"
                                  x1="3.18182"
                                  y1="16.0636"
                                  x2="13.4359"
                                  y2="5.98946"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">
                            Стол заказов
                          </div>
                        </a>
                        <a
                          className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]"
                          href="#"
                        >
                          <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&_svg]:max-w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={19}
                              viewBox="0 0 14 19"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.58303 6.72918L2.32083 6.28808L0.887514 3.9442C0.394953 3.14351 0.377094 2.14215 0.840797 1.32476C1.3045 0.507366 2.17766 0.00103732 3.12489 0.000256734H10.6149C11.9081 -0.0176245 13.0213 0.900436 13.2368 2.16251C13.3605 2.83867 13.1995 3.5355 12.7911 4.09123L11.1218 6.40917C11.1193 6.42638 11.1193 6.44385 11.1218 6.46106C12.9857 7.78693 14.063 9.94193 13.9971 12.2126C13.9983 14.0572 13.2223 15.8188 11.8559 17.0734C9.11913 19.6721 4.78771 19.6376 2.0936 16.9955C0.649219 15.6401 -0.112735 13.7201 0.0135385 11.7542C0.0968235 9.79068 1.03364 7.95857 2.58303 6.72918ZM1.76172 12.0916C1.76172 14.9576 4.10947 17.281 7.00557 17.281C9.90167 17.281 12.2494 14.9576 12.2494 12.0916C12.2494 9.22553 9.90167 6.90216 7.00557 6.90216C4.10947 6.90216 1.76172 9.22553 1.76172 12.0916ZM9.4088 5.62211C7.67355 4.98337 5.75314 5.0518 4.06881 5.81239C3.94995 5.62211 3.83668 5.43183 3.72341 5.24155C3.55351 4.95613 3.38361 4.67072 3.19483 4.3853L2.37329 3.04471C2.1385 2.66519 2.23302 2.1713 2.59179 1.90304C2.7502 1.78528 2.94435 1.72429 3.14239 1.73006H10.5712C10.9117 1.71369 11.2307 1.89476 11.3884 2.19387C11.5461 2.49297 11.5137 2.85552 11.3053 3.12255L9.55737 5.57021C9.52241 5.62211 9.48745 5.62211 9.4088 5.62211Z"
                                className="_to-gradient"
                              />
                              <path
                                d="M6.48944 11.6937C6.36053 11.7407 6.22926 11.7811 6.09616 11.8148C5.73506 11.854 5.38712 11.668 5.22218 11.3477C5.05608 11.021 5.11557 10.6262 5.37076 10.3617C5.79026 9.94658 6.24473 9.49683 6.63802 9.11627C6.81114 8.92992 7.04153 8.80527 7.2935 8.76166C7.52416 8.73745 7.75508 8.80498 7.9354 8.94936C8.11572 9.09374 8.23065 9.30314 8.25487 9.53142C8.25487 9.59197 8.25487 9.64386 8.25487 9.7044V14.7208C8.27546 15.025 8.13268 15.3175 7.87907 15.4906C7.61936 15.6992 7.26215 15.7428 6.95902 15.6029C6.65588 15.463 6.46 15.1642 6.45449 14.8333C6.45449 13.8213 6.45449 12.818 6.45449 11.8148L6.48944 11.6937Z"
                                className="_to-gradient"
                              />
                              <defs>
                                <linearGradient
                                  id="icon_primary_gradient"
                                  x1="3.18182"
                                  y1="16.0636"
                                  x2="13.4359"
                                  y2="5.98946"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                                <linearGradient
                                  id="paint1_linear_437_28722"
                                  x1="5.8398"
                                  y1="14.6134"
                                  x2="9.14429"
                                  y2="12.6238"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">
                            Достижения
                          </div>
                        </a>
                        <a
                          className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]"
                          href="#"
                        >
                          <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&_svg]:max-w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={15}
                              viewBox="0 0 16 15"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.95904 4.75549C6.3604 4.75549 5.06445 5.9721 5.06445 7.47286C5.06445 8.97362 6.3604 10.1902 7.95904 10.1902C9.55768 10.1902 10.8536 8.97362 10.8536 7.47286C10.8536 6.75217 10.5487 6.061 10.0058 5.55139C9.46299 5.04179 8.72674 4.75549 7.95904 4.75549ZM7.95926 8.83155C7.15994 8.83155 6.51196 8.22325 6.51196 7.47287C6.51196 6.72249 7.15994 6.11419 7.95926 6.11419C8.75858 6.11419 9.40655 6.72249 9.40655 7.47287C9.40655 8.22325 8.75858 8.83155 7.95926 8.83155Z"
                                className="_to-gradient"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.0316 5.11551C14.6956 4.30361 14.6151 3.15531 13.8435 2.43212L13.3297 1.94978C12.5544 1.20562 11.3064 1.12947 10.4351 1.77315C10.2955 0.772508 9.39685 0.0184441 8.32202 7.44375e-05H7.59838C6.50149 -0.00865932 5.57 0.752121 5.42743 1.77315C4.56258 1.14981 3.33939 1.2254 2.56903 1.94978L2.05524 2.43212C1.28361 3.15531 1.20309 4.30361 1.86709 5.11551C0.796311 5.25764 0.000243134 6.11794 7.92922e-05 7.13316V7.8125C-0.00922407 8.84223 0.801174 9.71669 1.8888 9.85052C1.20313 10.6685 1.28425 11.8401 2.07695 12.5679L2.59074 13.0502C3.36109 13.7746 4.58429 13.8502 5.44914 13.2268C5.5917 14.2479 6.5232 15.0087 7.62009 14.9999H8.34373C9.44062 15.0087 10.3721 14.2479 10.5147 13.2268C11.386 13.8705 12.634 13.7944 13.4093 13.0502L13.9231 12.5679C14.7157 11.8401 14.7969 10.6685 14.1112 9.85052C15.1988 9.71669 16.0092 8.84223 15.9999 7.8125V7.13316C15.9936 6.08568 15.1425 5.21326 14.0316 5.11551ZM14.4732 7.83287C14.4732 8.20806 14.1492 8.51221 13.7495 8.51221C13.2165 8.50934 12.7348 8.81 12.5313 9.27252C12.3279 9.73505 12.4433 10.2672 12.8232 10.6182C13.1038 10.8831 13.1038 11.3111 12.8232 11.576L12.3095 12.0584C12.0272 12.3218 11.5714 12.3218 11.2891 12.0584C10.918 11.7043 10.3564 11.5947 9.86571 11.7804C9.37499 11.9662 9.05152 12.4109 9.04581 12.9076C9.04581 13.2827 8.72182 13.5869 8.32216 13.5869H7.59851C7.19885 13.5869 6.87487 13.2827 6.87487 12.9076C6.87792 12.4072 6.55766 11.9549 6.06497 11.764C5.57228 11.573 5.00545 11.6813 4.63156 12.038C4.34931 12.3014 3.89347 12.3014 3.61122 12.038L3.09743 11.5489C2.81685 11.2839 2.81685 10.856 3.09743 10.591C3.47211 10.2393 3.58421 9.71039 3.38144 9.25087C3.17868 8.79134 2.70098 8.49176 2.17116 8.49183C1.7715 8.49183 1.44751 8.18768 1.44751 7.81249V7.13315C1.44751 6.75796 1.7715 6.45381 2.17116 6.45381C2.70418 6.45668 3.1859 6.15603 3.38933 5.6935C3.59276 5.23098 3.47733 4.69886 3.09743 4.34785C2.82161 4.0837 2.82161 3.66093 3.09743 3.39678L3.61845 2.90765C3.9007 2.64425 4.35654 2.64425 4.63879 2.90765C5.0134 3.25939 5.57684 3.36463 6.06633 3.17428C6.55582 2.98393 6.87495 2.53548 6.87487 2.03809C6.87487 1.6629 7.19885 1.35875 7.59851 1.35875H8.32216C8.72182 1.35875 9.04581 1.6629 9.04581 2.03809C9.04275 2.53848 9.36301 2.99071 9.8557 3.18168C10.3484 3.37266 10.9152 3.2643 11.2891 2.90765C11.5714 2.64425 12.0272 2.64425 12.3095 2.90765L12.8232 3.38998C13.1038 3.65495 13.1038 4.08288 12.8232 4.34785C12.4433 4.69886 12.3279 5.23098 12.5313 5.6935C12.7348 6.15603 13.2165 6.45668 13.7495 6.45381C14.1492 6.45381 14.4732 6.75796 14.4732 7.13315V7.83287Z"
                                className="_to-gradient"
                              />
                              <defs>
                                <linearGradient
                                  id="icon_primary_gradient"
                                  x1="3.18182"
                                  y1="16.0636"
                                  x2="13.4359"
                                  y2="5.98946"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">
                            Настройки
                          </div>
                        </a>
                        <a
                          className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]"
                          href="#"
                        >
                          <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&_svg]:max-w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={13}
                              viewBox="0 0 14 13"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.0909 2.15375H11.4545V1.80426C11.4534 1.23808 11.1722 0.705122 10.6947 0.364283C10.2173 0.0234431 9.59879 -0.0859001 9.02364 0.0688552L1.73727 2.03926C1.62982 2.07106 1.5332 2.12928 1.45727 2.20798C0.603057 2.405 0.00139898 3.12895 0 3.96146V11.1923C0 12.1907 0.854729 13 1.90909 13H12.0909C13.1453 13 14 12.1907 14 11.1923V3.96146C14 2.96309 13.1453 2.15375 12.0909 2.15375ZM9.37357 1.22578C9.56938 1.17365 9.77971 1.21328 9.93951 1.33243C10.0993 1.45158 10.1893 1.63589 10.1818 1.82835V2.17784H5.9563L9.37357 1.22578ZM12.7271 8.17945H10.818C10.4665 8.17945 10.1816 7.90967 10.1816 7.57688C10.1816 7.24409 10.4665 6.97431 10.818 6.97431H12.7271V8.17945ZM12.7273 5.76917H10.9136C9.96821 5.74629 9.13951 6.36392 8.94089 7.23944C8.83467 7.76878 8.98336 8.31541 9.34644 8.73029C9.70952 9.14518 10.2491 9.38507 10.8182 9.38458H12.7273V11.1923C12.7273 11.5251 12.4423 11.7949 12.0909 11.7949H1.90907C1.55761 11.7949 1.27271 11.5251 1.27271 11.1923V3.96146C1.27271 3.62867 1.55761 3.35889 1.90907 3.35889H12.0909C12.4423 3.35889 12.7273 3.62867 12.7273 3.96146V5.76917Z"
                                className="_to-gradient"
                              />
                              <defs>
                                <linearGradient
                                  id="icon_primary_gradient"
                                  x1="3.18182"
                                  y1="16.0636"
                                  x2="13.4359"
                                  y2="5.98946"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">
                            Пополение и вывод
                          </div>
                        </a>
                        <a
                          className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]"
                          href="#"
                        >
                          <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&_svg]:max-w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={15}
                              viewBox="0 0 16 15"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.81449 7.15236H8.70567C8.70567 7.13139 8.69116 7.08945 8.69116 7.08945V6.05484C8.69116 5.98494 8.72018 5.98494 8.75645 5.98494C8.9717 5.91019 9.18242 5.82384 9.3876 5.72629C10.4614 5.15071 11.0426 3.98582 10.8385 2.81822C10.6134 1.58131 9.56016 0.64073 8.26314 0.518331C7.33684 0.41438 6.41688 0.756942 5.80383 1.43409C5.20517 2.05016 4.94894 2.90524 5.11464 3.73398C5.25533 4.83342 6.07739 5.73911 7.18946 6.01989C7.23178 6.03013 7.2597 6.06899 7.25475 6.11077V7.08246V7.15935H5.12189C4.9661 7.15913 4.81063 7.17317 4.6576 7.20129C3.70661 7.37776 2.99104 8.13851 2.90198 9.06777V9.60604H2.80767H1.93712C0.861975 9.72009 0.0369038 10.5777 0.000133194 11.6193V12.4023C-0.00412177 12.7654 0.0936406 13.1229 0.283063 13.4369C0.67848 14.1092 1.42555 14.5175 2.2273 14.4994H5.07836C5.2322 14.4863 5.38491 14.4629 5.5354 14.4295C6.43695 14.2484 7.1226 13.5401 7.24749 12.6609C7.26562 12.3582 7.26562 12.0548 7.24749 11.7521C7.25013 11.5976 7.23799 11.4432 7.21122 11.2908C7.02924 10.3885 6.25876 9.70558 5.31051 9.60604H4.44721H4.3529V9.20758C4.37962 8.84074 4.69672 8.55656 5.07836 8.55746H10.8966C11.1275 8.56073 11.343 8.66976 11.4769 8.85106C11.6041 9.08246 11.65 9.3474 11.6075 9.60604H11.4987H10.6427C9.70185 9.68248 8.91949 10.3347 8.70567 11.2209C8.62586 11.6978 8.62586 12.184 8.70567 12.6609C8.84187 13.7171 9.77754 14.5075 10.8821 14.4994H13.7839C14.7852 14.5067 15.6625 13.8547 15.9095 12.9196C16.0097 12.4268 16.0268 11.9216 15.9603 11.4236C15.8441 10.5922 15.2248 9.90753 14.386 9.68294C14.1882 9.63929 13.9867 9.61355 13.7839 9.60604H13.0584V9.46623C13.0695 9.27997 13.0695 9.09325 13.0584 8.90699C12.8874 7.91012 12.003 7.1725 10.9546 7.15236H8.81449ZM5.07828 13.1013H3.62736H2.22722C2.01566 13.1163 1.80789 13.0414 1.65859 12.8961C1.50929 12.7509 1.43343 12.55 1.45097 12.3463V11.7032C1.45097 11.3171 1.77577 11.0041 2.17644 11.0041H5.07828C5.47894 11.0041 5.80374 11.3171 5.80374 11.7032V12.4023C5.80374 12.7883 5.47894 13.1013 5.07828 13.1013ZM12.3328 13.1013H13.8273C14.2109 13.0791 14.5099 12.7725 14.5092 12.4023V11.7032C14.5092 11.3171 14.1844 11.0042 13.7838 11.0042H10.8819C10.5272 10.9986 10.2203 11.2411 10.1565 11.5774C10.1493 11.6751 10.1493 11.7732 10.1565 11.871V12.3673C10.1465 12.5587 10.2185 12.7456 10.3557 12.8844C10.4928 13.0231 10.6831 13.1016 10.8819 13.1013H12.3328ZM7.97998 1.91643C8.7813 1.91643 9.4309 2.54239 9.4309 3.31454C9.4309 4.0867 8.7813 4.71265 7.97998 4.71265C7.17865 4.71265 6.52905 4.0867 6.52905 3.31454C6.52905 2.54239 7.17865 1.91643 7.97998 1.91643Z"
                                className="_to-gradient"
                              />
                              <defs>
                                <linearGradient
                                  id="icon_primary_gradient"
                                  x1="3.18182"
                                  y1="16.0636"
                                  x2="13.4359"
                                  y2="5.98946"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">
                            Реферальная система
                          </div>
                        </a>
                        <a
                          className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]"
                          href="#"
                        >
                          <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&_svg]:max-w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={13}
                              viewBox="0 0 14 13"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.88308 11.5556H1.55323V1.44444H3.88308C4.08905 1.44444 4.28657 1.36834 4.43222 1.2329C4.57786 1.09746 4.65969 0.913767 4.65969 0.722222C4.65969 0.530677 4.57786 0.346987 4.43222 0.211544C4.28657 0.0761015 4.08905 0 3.88308 0H0.776616C0.570644 0 0.37312 0.0761015 0.227477 0.211544C0.081833 0.346987 0 0.530677 0 0.722222V12.2778C0 12.4693 0.081833 12.6531 0.227477 12.7885C0.37312 12.9239 0.570644 13 0.776616 13H3.88308C4.08905 13 4.28657 12.9239 4.43222 12.7885C4.57786 12.6531 4.65969 12.4693 4.65969 12.2778C4.65969 12.0862 4.57786 11.9025 4.43222 11.7671C4.28657 11.6316 4.08905 11.5556 3.88308 11.5556ZM13.7539 5.98721L9.09416 1.65387C8.94586 1.52075 8.74677 1.44789 8.54069 1.45128C8.3346 1.45466 8.13842 1.53403 7.99527 1.67195C7.85212 1.80986 7.77373 1.99498 7.77737 2.18664C7.78101 2.37829 7.86638 2.56075 8.01468 2.69387L11.3463 5.79224H3.88308C3.67711 5.79224 3.47958 5.86829 3.33394 6.00374C3.1883 6.13918 3.10646 6.32291 3.10646 6.51446C3.10646 6.706 3.1883 6.88965 3.33394 7.02509C3.47958 7.16053 3.67711 7.23668 3.88308 7.23668H13.2025C13.36 7.24063 13.5151 7.19993 13.6472 7.11995C13.7792 7.03998 13.882 6.92449 13.9419 6.78891C14.0017 6.65332 14.0157 6.50403 13.9822 6.36084C13.9486 6.21764 13.869 6.08732 13.7539 5.98721ZM10.3756 8.47165L8.04573 10.2772C7.89022 10.4036 7.79509 10.5823 7.78126 10.774C7.76742 10.9657 7.83603 11.1546 7.97197 11.2992C8.10791 11.4438 8.30005 11.5323 8.50613 11.5452C8.71222 11.558 8.91536 11.4942 9.07087 11.3678L11.4007 9.56221C11.5562 9.43579 11.6514 9.25707 11.6652 9.06542C11.679 8.87377 11.6104 8.68486 11.4745 8.54024C11.3386 8.39563 11.1464 8.30723 10.9403 8.29436C10.7342 8.28149 10.5311 8.34523 10.3756 8.47165Z"
                                className="_to-gradient"
                              />
                              <defs>
                                <linearGradient
                                  id="icon_primary_gradient"
                                  x1="3.18182"
                                  y1="16.0636"
                                  x2="13.4359"
                                  y2="5.98946"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">
                            Выйти из аккаунта
                          </div>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div className="hm">
            <div className="hm-inner px-5 flex items-center justify-between">
              <div className="hm-logo">
                <div className="logo w-[180px] 3xl:w-[150px] xl:w-[120px] lg:w-auto lg:flex-shrink-1 lg:basis-[130px]">
                  <img
                    className="logo__dots lg:h-[100%] xl:w-1/2"
                    src={dots}
                    alt="1paid.ru"
                  />
                  <img className="logo-pic" src={logoPic} alt="1paid.ru" />
                </div>
              </div>
              <div className="hm-bar flex items-center gap-2.5">
                <div className="hm-notif flex-shrink-0">
                  <div className="notif">
                    <button className="btn btn-secondary notif-btn rounded-full w-11 h-11 justify-center cursor-pointer lg:w-[50px] lg:h-[50px]">
                      <div className="btn-icon text-white">
                        <svg
                          width={16}
                          height={17}
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.1339 15.0561C15.1164 13.6921 14.3309 12.4579 13.1111 11.8778V8.0122C13.1541 5.35225 11.2421 3.07229 8.6421 2.68307C7.17902 2.49536 5.70713 2.95641 4.60455 3.9478C3.50197 4.93918 2.87616 6.36427 2.88786 7.85698V11.7522C1.46861 12.2353 0.509251 13.5775 0.5 15.0931C0.505439 15.3331 0.607572 15.5604 0.782704 15.7223C0.957837 15.8842 1.19075 15.9667 1.4274 15.9505H14.2649C14.4973 15.9485 14.7194 15.8532 14.8824 15.6855C15.0454 15.5177 15.1358 15.2913 15.1339 15.0561ZM7.26932 4.19823C8.3437 3.97626 9.45975 4.25478 10.309 4.95682C11.1583 5.65886 11.6509 6.71009 11.6507 7.81997V11.5156H4.34839V7.97519C4.30883 6.17267 5.5311 4.59219 7.26932 4.19823ZM2.07756 14.4722C2.33643 13.5933 3.13585 12.9917 4.04189 12.9939H11.6509C12.5562 12.9941 13.3543 13.5948 13.6153 14.4722H2.07756Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.73 1.47826V0.73913C8.73 0.33092 8.40306 0 7.99976 0C7.59647 0 7.26953 0.33092 7.26953 0.73913V1.47826C7.26953 1.88647 7.59647 2.21739 7.99976 2.21739C8.40306 2.21739 8.73 1.88647 8.73 1.47826Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.73 16.2609V15.5217C8.73 15.1135 8.40306 14.7826 7.99976 14.7826C7.59647 14.7826 7.26953 15.1135 7.26953 15.5217V16.2609C7.26953 16.6691 7.59647 17 7.99976 17C8.40306 17 8.73 16.6691 8.73 16.2609Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.28745 2.80134C2.42457 2.94126 2.61121 3.01997 2.80592 3.01997C3.00063 3.01997 3.18727 2.94126 3.32438 2.80134C3.60751 2.51305 3.60751 2.04745 3.32438 1.75916L2.80592 1.23438C2.6688 1.09445 2.48216 1.01575 2.28745 1.01575C2.09275 1.01575 1.9061 1.09445 1.76899 1.23438C1.48586 1.52267 1.48586 1.98827 1.76899 2.27655L2.28745 2.80134Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.535709 6.05348L1.26594 6.24565C1.64923 6.33604 2.03434 6.10272 2.13672 5.71808C2.23911 5.33345 2.02193 4.93588 1.64566 4.81913L0.91543 4.62695C0.526359 4.52368 0.128036 4.75831 0.0245458 5.15174C-0.0779904 5.54331 0.149977 5.94547 0.535709 6.05348Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.7535 6.29742L15.4837 6.10525C15.86 5.98849 16.0772 5.59093 15.9748 5.20629C15.8724 4.82166 15.4873 4.58834 15.104 4.67873L14.3738 4.8709C13.9975 4.98766 13.7803 5.38523 13.8827 5.76986C13.9851 6.15449 14.3702 6.38781 14.7535 6.29742Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.0305 2.80134L13.549 2.27655C13.8321 1.98827 13.8321 1.52267 13.549 1.23438C13.4119 1.09445 13.2252 1.01575 13.0305 1.01575C12.8358 1.01575 12.6492 1.09445 12.5121 1.23438L11.9936 1.75916C11.7105 2.04745 11.7105 2.51305 11.9936 2.80134C12.1307 2.94126 12.3174 3.01997 12.5121 3.01997C12.7068 3.01997 12.8934 2.94126 13.0305 2.80134Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </button>
                    <div className="notif-content rounded-xl bg-white w-[290px] py-6">
                      <div className="notif-h px-3 flex items-center justify-between flex-wrap gap-2.5 font-secondary-bold text-sm">
                        <div className="notif-heading text-black">
                          <span>
                            Уведомления{" "}
                            <span className="extra text-[color:var(--color-green-main)]">
                              (+4)
                            </span>
                          </span>
                        </div>
                        <div className="notif-total text-[#C8D5ED]">(43)</div>
                      </div>
                      <div className="notif-b mt-6">
                        <div className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                          <div className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                            <div className="btn-icon">
                              <svg
                                width={16}
                                height={13}
                                viewBox="0 0 16 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.20975 3.40829H15.1159C15.3645 3.40497 15.6027 3.50787 15.7707 3.69114C15.9387 3.87442 16.0205 4.12066 15.9956 4.36803L15.2685 11.3479C15.2277 11.7888 14.8606 12.1276 14.4179 12.1332H5.21312C4.7899 12.1315 4.43001 11.8239 4.36244 11.4061L2.90829 4.29532L2.34845 1.95415H0.727073C0.325522 1.95415 0 1.62863 0 1.22707C0 0.825522 0.325522 0.5 0.727073 0.5H2.79923C3.19507 0.507287 3.53728 0.778079 3.63537 1.16164L4.20975 3.40829ZM5.69289 10.679H13.8943L14.4759 4.86244H4.52958L5.69289 10.679Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="notif-item-inf flex-grow">
                            <div className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                              <div className="notif-item-title font-secondary-bold text-black">
                                Стол заказа!
                              </div>
                              <div className="notif-item-time font-secondary-med text-[#C5CFE4]">
                                22:15
                              </div>
                            </div>
                            <div className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">
                              Товар по вашему запросу был выставлен на продажу!
                            </div>
                          </div>
                        </div>
                        <div className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                          <div className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                            <div className="btn-icon">
                              <svg
                                width={16}
                                height={13}
                                viewBox="0 0 16 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.20975 3.40829H15.1159C15.3645 3.40497 15.6027 3.50787 15.7707 3.69114C15.9387 3.87442 16.0205 4.12066 15.9956 4.36803L15.2685 11.3479C15.2277 11.7888 14.8606 12.1276 14.4179 12.1332H5.21312C4.7899 12.1315 4.43001 11.8239 4.36244 11.4061L2.90829 4.29532L2.34845 1.95415H0.727073C0.325522 1.95415 0 1.62863 0 1.22707C0 0.825522 0.325522 0.5 0.727073 0.5H2.79923C3.19507 0.507287 3.53728 0.778079 3.63537 1.16164L4.20975 3.40829ZM5.69289 10.679H13.8943L14.4759 4.86244H4.52958L5.69289 10.679Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="notif-item-inf flex-grow">
                            <div className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                              <div className="notif-item-title font-secondary-bold text-black">
                                Стол заказа!
                              </div>
                              <div className="notif-item-time font-secondary-med text-[#C5CFE4]">
                                22:15
                              </div>
                            </div>
                            <div className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">
                              Товар по вашему запросу был выставлен на продажу!
                            </div>
                          </div>
                        </div>
                        <div className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                          <div className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                            <div className="btn-icon">
                              <svg
                                width={16}
                                height={13}
                                viewBox="0 0 16 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.20975 3.40829H15.1159C15.3645 3.40497 15.6027 3.50787 15.7707 3.69114C15.9387 3.87442 16.0205 4.12066 15.9956 4.36803L15.2685 11.3479C15.2277 11.7888 14.8606 12.1276 14.4179 12.1332H5.21312C4.7899 12.1315 4.43001 11.8239 4.36244 11.4061L2.90829 4.29532L2.34845 1.95415H0.727073C0.325522 1.95415 0 1.62863 0 1.22707C0 0.825522 0.325522 0.5 0.727073 0.5H2.79923C3.19507 0.507287 3.53728 0.778079 3.63537 1.16164L4.20975 3.40829ZM5.69289 10.679H13.8943L14.4759 4.86244H4.52958L5.69289 10.679Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="notif-item-inf flex-grow">
                            <div className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                              <div className="notif-item-title font-secondary-bold text-black">
                                Стол заказа!
                              </div>
                              <div className="notif-item-time font-secondary-med text-[#C5CFE4]">
                                22:15
                              </div>
                            </div>
                            <div className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">
                              Товар по вашему запросу был выставлен на продажу!
                            </div>
                          </div>
                        </div>
                        <div className="notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]">
                          <div className="notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white">
                            <div className="btn-icon">
                              <svg
                                width={16}
                                height={13}
                                viewBox="0 0 16 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.20975 3.40829H15.1159C15.3645 3.40497 15.6027 3.50787 15.7707 3.69114C15.9387 3.87442 16.0205 4.12066 15.9956 4.36803L15.2685 11.3479C15.2277 11.7888 14.8606 12.1276 14.4179 12.1332H5.21312C4.7899 12.1315 4.43001 11.8239 4.36244 11.4061L2.90829 4.29532L2.34845 1.95415H0.727073C0.325522 1.95415 0 1.62863 0 1.22707C0 0.825522 0.325522 0.5 0.727073 0.5H2.79923C3.19507 0.507287 3.53728 0.778079 3.63537 1.16164L4.20975 3.40829ZM5.69289 10.679H13.8943L14.4759 4.86244H4.52958L5.69289 10.679Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="notif-item-inf flex-grow">
                            <div className="notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs">
                              <div className="notif-item-title font-secondary-bold text-black">
                                Стол заказа!
                              </div>
                              <div className="notif-item-time font-secondary-med text-[#C5CFE4]">
                                22:15
                              </div>
                            </div>
                            <div className="notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]">
                              Товар по вашему запросу был выставлен на продажу!
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        className="notif-btnall mt-5 w-full border-b border-[#ECEDF7] py-1 flex justify-center duration-200 hover:bg-[#F6F9FF]"
                        href="#"
                      >
                        <div className="btn-text font-primary-bold text-sm text-[#C5CFE4]">
                          Показать все
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hm-profile flex-shrink-0">
                  <button className="btn btn-orange hm-profile-btn flex-shrink-0 rounded-full w-[50px] h-[50px] flex items-center justify-center text-white">
                    <svg
                      width={17}
                      height={19}
                      viewBox="0 0 17 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.645 9.11485C13.3576 7.77329 14.0307 5.49305 13.3211 3.43653C12.6115 1.38 10.6755 0 8.5 0C6.3245 0 4.3885 1.38 3.67892 3.43653C2.96933 5.49305 3.64239 7.77329 5.355 9.11485C2.12463 10.4014 0.00358828 13.5257 0 17.0028V17.8528C0 18.3223 0.380558 18.7028 0.85 18.7028C1.31944 18.7028 1.7 18.3223 1.7 17.8528V17.0028C1.7 13.2473 4.74446 10.2028 8.5 10.2028C12.2555 10.2028 15.3 13.2473 15.3 17.0028V17.8528C15.3 18.3223 15.6806 18.7028 16.15 18.7028C16.6194 18.7028 17 18.3223 17 17.8528V17.0028C16.9964 13.5257 14.8754 10.4014 11.645 9.11485ZM5.09991 5.10285C5.09991 3.22508 6.62214 1.70285 8.49991 1.70285C10.3777 1.70285 11.8999 3.22508 11.8999 5.10285C11.8999 6.98062 10.3777 8.50285 8.49991 8.50285C7.59817 8.50285 6.73337 8.14464 6.09575 7.50701C5.45812 6.86939 5.09991 6.00458 5.09991 5.10285Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <div className="hm-profile-content rounded-xl bg-white w-[290px] py-3 lg:w-[320px]">
                    <div className="pmc h-14 rounded-full px-3 flex items-center gap-x-3 bg-white lg:mx-3 lg:bg-[#f6f9ff] lg:h-auto lg:min-h-[50px] lg:py-2">
                      <div className="pmc-avatar flex-shrink-0 rounded-full w-8 h-8 lg:w-10 lg:h-10">
                        <img
                          className="w-full h-full object-cover"
                          src={avatar}
                          alt="user avatar"
                        />
                      </div>
                      <div className="pmc-chip-bar flex gap-x-3 gap-y-2 items-center lg:flex-wrap lg:ml-auto">
                        <a
                          className="pmc-chip border rounded-full border-[#DCF1C4] px-2 py-1 flex items-center gap-x-2 duration-200 hover:bg-[#DCF1C4]"
                          href="#"
                        >
                          <span className="font-primary-bold text-xs text-black whitespace-nowrap">
                            1 521 100PD
                          </span>
                        </a>
                        <a
                          className="pmc-chip border rounded-full border-[#D2DFFB] px-2 py-1 flex items-center gap-x-2 duration-200 hover:bg-[#D2DFFB]"
                          href="#"
                        >
                          <span className="font-primary-bold text-xs text-black whitespace-nowrap">
                            533 100₽
                          </span>
                          <img
                            className="pmc-chip-icon w-4 h-4"
                            src={picture}
                            alt="picture"
                          />
                        </a>
                      </div>
                      <div className="pmc-card-arrow h-profile-btn-open ml-auto text-[#D6D9EA] cursor-pointer hover:text-black lg:hidden">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 9L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L6 9"
                            stroke="currentColor"
                                strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-3" />
                    <div className="np">
                      <nav className="np-nav">
                        <a
                          className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]"
                          href="#"
                        >
                          <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&_svg]:max-w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={17}
                              viewBox="0 0 16 17"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.96 8.28496C12.5719 7.06555 13.2053 4.99292 12.5375 3.12364C11.8696 1.25436 10.0475 0 8 0C5.95247 0 4.13036 1.25436 3.46251 3.12364C2.79466 4.99292 3.42813 7.06555 5.04 8.28496C1.99965 9.45436 0.00337721 12.2942 0 15.4548V16.2274C0 16.6541 0.358172 17 0.8 17C1.24183 17 1.6 16.6541 1.6 16.2274V15.4548C1.6 12.0412 4.46538 9.2739 8 9.2739C11.5346 9.2739 14.4 12.0412 14.4 15.4548V16.2274C14.4 16.6541 14.7582 17 15.2 17C15.6418 17 16 16.6541 16 16.2274V15.4548C15.9966 12.2942 14.0003 9.45436 10.96 8.28496ZM4.7998 4.6382C4.7998 2.9314 6.23249 1.54776 7.9998 1.54776C9.76712 1.54776 11.1998 2.9314 11.1998 4.6382C11.1998 6.345 9.76712 7.72864 7.9998 7.72864C7.15111 7.72864 6.33718 7.40304 5.73706 6.82347C5.13695 6.2439 4.7998 5.45783 4.7998 4.6382Z"
                                className="_to-gradient"
                              />
                              <defs>
                                <linearGradient
                                  id="icon_primary_gradient"
                                  x1="3.18182"
                                  y1="16.0636"
                                  x2="13.4359"
                                  y2="5.98946"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">
                            Мои профиль
                          </div>
                        </a>
                        <a
                          className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]"
                          href="#"
                        >
                          <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&_svg]:max-w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={17}
                              viewBox="0 0 16 17"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.6 0H2.296C1.02978 0.0042394 0.00438903 0.994671 0 2.21773V14.6818C0 15.9621 1.07452 17 2.4 17H13.6C14.9255 17 16 15.9621 16 14.6818V2.31818C16 1.03789 14.9255 0 13.6 0ZM12.7199 1.54546C13.5004 1.50959 14.2007 2.00562 14.3999 2.73546C14.5531 3.27168 14.3961 3.84607 13.9889 4.23941C13.5817 4.63275 12.987 4.78436 12.4319 4.63637C11.6763 4.44397 11.1627 3.76757 11.1999 3.01364V1.54546H12.7199ZM9.60004 1.54546V3.09091C9.60226 3.59138 9.35344 4.06191 8.93235 4.35353C8.51127 4.64515 7.97005 4.72176 7.48004 4.5591C6.80262 4.33535 6.36153 3.70417 6.40004 3.01364V1.54546H9.60004ZM4.79995 1.54546V3.09091C4.80217 3.59138 4.55335 4.06191 4.13226 4.35353C3.71117 4.64515 3.16996 4.72176 2.67995 4.5591C2.00845 4.33694 1.56875 3.71403 1.59995 3.0291V2.31819C1.59995 1.89142 1.95812 1.54546 2.39995 1.54546H4.79995ZM5.6001 15.4545V11.5909C5.59945 10.8999 5.91794 10.2447 6.46877 9.80382C7.01959 9.36294 7.74531 9.18238 8.4481 9.31136C9.61048 9.55255 10.4305 10.5588 10.4001 11.7068V15.4545H5.6001ZM13.6001 15.4545H12.0001V11.5909C12.0003 10.4306 11.4607 9.33157 10.5302 8.59761C9.5998 7.86366 8.37712 7.57248 7.2001 7.80455C5.30355 8.21795 3.96757 9.86003 4.0001 11.7377V15.4545H2.4001C1.95827 15.4545 1.6001 15.1086 1.6001 14.6818V5.76455C2.5154 6.2662 3.62304 6.31783 4.5841 5.90364C4.988 5.72727 5.34401 5.46275 5.6241 5.13091C6.38601 5.95434 7.54488 6.32255 8.6641 6.09682C9.34408 5.96213 9.95634 5.60784 10.4001 5.09228C10.8557 5.63462 11.4969 6.00185 12.2081 6.12773C12.9602 6.2637 13.7379 6.13486 14.4001 5.76455V14.6818C14.4001 15.1086 14.0419 15.4545 13.6001 15.4545Z"
                                fill="#CDD6E6"
                                className="_to-gradient"
                              />
                              <defs>
                                <linearGradient
                                  id="icon_primary_gradient"
                                  x1="3.18182"
                                  y1="16.0636"
                                  x2="13.4359"
                                  y2="5.98946"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">
                            Мои товары
                          </div>
                        </a>
                        <a
                          className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]"
                          href="#"
                        >
                          <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&_svg]:max-w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={13}
                              viewBox="0 0 16 13"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.989 2.89044C13.2737 2.88234 13.5446 3.01157 13.7163 3.23729L15.8254 6.03379C15.9406 6.18286 16.0021 6.3661 15.9999 6.55407V10.6946C15.9999 11.1735 15.6092 11.5617 15.1272 11.5617H13.0909C13.0497 11.5652 13.0084 11.5652 12.9672 11.5617C12.657 12.4243 11.8346 13 10.9127 13C9.99081 13 9.16841 12.4243 8.85815 11.5617H6.41452C6.10134 12.4191 5.28157 12.99 4.36362 12.99C3.44567 12.99 2.6259 12.4191 2.31272 11.5617H2.18181C0.97683 11.5617 0 10.5912 0 9.39392V2.16783C0 0.97057 0.97683 0 2.18181 0H9.45451C10.6595 0 11.6363 0.97057 11.6363 2.16783V2.89044H12.989ZM3.63623 10.8391C3.63623 11.2382 3.96184 11.5618 4.3635 11.5618C4.76516 11.5618 5.09077 11.2382 5.09077 10.8391C5.09077 10.4401 4.76516 10.1165 4.3635 10.1165C3.96184 10.1165 3.63623 10.4401 3.63623 10.8391ZM10.9092 11.5618C10.5075 11.5618 10.1819 11.2382 10.1819 10.8391C10.1819 10.4401 10.5075 10.1165 10.9092 10.1165C11.3108 10.1165 11.6364 10.4401 11.6364 10.8391C11.6364 11.2382 11.3108 11.5618 10.9092 11.5618ZM13.0909 10.1165H14.5455V6.74195L12.7273 4.33566H11.6364V7.2261C11.6364 7.62518 11.3108 7.94871 10.9091 7.94871C10.5074 7.94871 10.1818 7.62518 10.1818 7.2261V2.16783C10.1818 1.76875 9.85622 1.44522 9.45456 1.44522H2.18186C1.7802 1.44522 1.45459 1.76875 1.45459 2.16783V9.39392C1.45459 9.79301 1.7802 10.1165 2.18186 10.1165H2.31277C2.62595 9.25919 3.44572 8.68831 4.36367 8.68831C5.28162 8.68831 6.10139 9.25919 6.41457 10.1165H8.8582C9.16846 9.25399 9.99086 8.67828 10.9127 8.67828C11.8346 8.67828 12.657 9.25399 12.9673 10.1165C13.0084 10.113 13.0498 10.113 13.0909 10.1165Z"
                                fill="#CDD6E6"
                                className="_to-gradient"
                              />
                              <defs>
                                <linearGradient
                                  id="icon_primary_gradient"
                                  x1="3.18182"
                                  y1="16.0636"
                                  x2="13.4359"
                                  y2="5.98946"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">
                            Стол заказов
                          </div>
                        </a>
                        <a
                          className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]"
                          href="#"
                        >
                          <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&_svg]:max-w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={19}
                              viewBox="0 0 14 19"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.58303 6.72918L2.32083 6.28808L0.887514 3.9442C0.394953 3.14351 0.377094 2.14215 0.840797 1.32476C1.3045 0.507366 2.17766 0.00103732 3.12489 0.000256734H10.6149C11.9081 -0.0176245 13.0213 0.900436 13.2368 2.16251C13.3605 2.83867 13.1995 3.5355 12.7911 4.09123L11.1218 6.40917C11.1193 6.42638 11.1193 6.44385 11.1218 6.46106C12.9857 7.78693 14.063 9.94193 13.9971 12.2126C13.9983 14.0572 13.2223 15.8188 11.8559 17.0734C9.11913 19.6721 4.78771 19.6376 2.0936 16.9955C0.649219 15.6401 -0.112735 13.7201 0.0135385 11.7542C0.0968235 9.79068 1.03364 7.95857 2.58303 6.72918ZM1.76172 12.0916C1.76172 14.9576 4.10947 17.281 7.00557 17.281C9.90167 17.281 12.2494 14.9576 12.2494 12.0916C12.2494 9.22553 9.90167 6.90216 7.00557 6.90216C4.10947 6.90216 1.76172 9.22553 1.76172 12.0916ZM9.4088 5.62211C7.67355 4.98337 5.75314 5.0518 4.06881 5.81239C3.94995 5.62211 3.83668 5.43183 3.72341 5.24155C3.55351 4.95613 3.38361 4.67072 3.19483 4.3853L2.37329 3.04471C2.1385 2.66519 2.23302 2.1713 2.59179 1.90304C2.7502 1.78528 2.94435 1.72429 3.14239 1.73006H10.5712C10.9117 1.71369 11.2307 1.89476 11.3884 2.19387C11.5461 2.49297 11.5137 2.85552 11.3053 3.12255L9.55737 5.57021C9.52241 5.62211 9.48745 5.62211 9.4088 5.62211Z"
                                className="_to-gradient"
                              />
                              <path
                                d="M6.48944 11.6937C6.36053 11.7407 6.22926 11.7811 6.09616 11.8148C5.73506 11.854 5.38712 11.668 5.22218 11.3477C5.05608 11.021 5.11557 10.6262 5.37076 10.3617C5.79026 9.94658 6.24473 9.49683 6.63802 9.11627C6.81114 8.92992 7.04153 8.80527 7.2935 8.76166C7.52416 8.73745 7.75508 8.80498 7.9354 8.94936C8.11572 9.09374 8.23065 9.30314 8.25487 9.53142C8.25487 9.59197 8.25487 9.64386 8.25487 9.7044V14.7208C8.27546 15.025 8.13268 15.3175 7.87907 15.4906C7.61936 15.6992 7.26215 15.7428 6.95902 15.6029C6.65588 15.463 6.46 15.1642 6.45449 14.8333C6.45449 13.8213 6.45449 12.818 6.45449 11.8148L6.48944 11.6937Z"
                                className="_to-gradient"
                              />
                              <defs>
                                <linearGradient
                                  id="icon_primary_gradient"
                                  x1="3.18182"
                                  y1="16.0636"
                                  x2="13.4359"
                                  y2="5.98946"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                                <linearGradient
                                  id="paint1_linear_437_28722"
                                  x1="5.8398"
                                  y1="14.6134"
                                  x2="9.14429"
                                  y2="12.6238"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">
                            Достижения
                          </div>
                        </a>
                        <a
                          className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]"
                          href="#"
                        >
                          <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&_svg]:max-w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={15}
                              viewBox="0 0 16 15"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.95904 4.75549C6.3604 4.75549 5.06445 5.9721 5.06445 7.47286C5.06445 8.97362 6.3604 10.1902 7.95904 10.1902C9.55768 10.1902 10.8536 8.97362 10.8536 7.47286C10.8536 6.75217 10.5487 6.061 10.0058 5.55139C9.46299 5.04179 8.72674 4.75549 7.95904 4.75549ZM7.95926 8.83155C7.15994 8.83155 6.51196 8.22325 6.51196 7.47287C6.51196 6.72249 7.15994 6.11419 7.95926 6.11419C8.75858 6.11419 9.40655 6.72249 9.40655 7.47287C9.40655 8.22325 8.75858 8.83155 7.95926 8.83155Z"
                                className="_to-gradient"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.0316 5.11551C14.6956 4.30361 14.6151 3.15531 13.8435 2.43212L13.3297 1.94978C12.5544 1.20562 11.3064 1.12947 10.4351 1.77315C10.2955 0.772508 9.39685 0.0184441 8.32202 7.44375e-05H7.59838C6.50149 -0.00865932 5.57 0.752121 5.42743 1.77315C4.56258 1.14981 3.33939 1.2254 2.56903 1.94978L2.05524 2.43212C1.28361 3.15531 1.20309 4.30361 1.86709 5.11551C0.796311 5.25764 0.000243134 6.11794 7.92922e-05 7.13316V7.8125C-0.00922407 8.84223 0.801174 9.71669 1.8888 9.85052C1.20313 10.6685 1.28425 11.8401 2.07695 12.5679L2.59074 13.0502C3.36109 13.7746 4.58429 13.8502 5.44914 13.2268C5.5917 14.2479 6.5232 15.0087 7.62009 14.9999H8.34373C9.44062 15.0087 10.3721 14.2479 10.5147 13.2268C11.386 13.8705 12.634 13.7944 13.4093 13.0502L13.9231 12.5679C14.7157 11.8401 14.7969 10.6685 14.1112 9.85052C15.1988 9.71669 16.0092 8.84223 15.9999 7.8125V7.13316C15.9936 6.08568 15.1425 5.21326 14.0316 5.11551ZM14.4732 7.83287C14.4732 8.20806 14.1492 8.51221 13.7495 8.51221C13.2165 8.50934 12.7348 8.81 12.5313 9.27252C12.3279 9.73505 12.4433 10.2672 12.8232 10.6182C13.1038 10.8831 13.1038 11.3111 12.8232 11.576L12.3095 12.0584C12.0272 12.3218 11.5714 12.3218 11.2891 12.0584C10.918 11.7043 10.3564 11.5947 9.86571 11.7804C9.37499 11.9662 9.05152 12.4109 9.04581 12.9076C9.04581 13.2827 8.72182 13.5869 8.32216 13.5869H7.59851C7.19885 13.5869 6.87487 13.2827 6.87487 12.9076C6.87792 12.4072 6.55766 11.9549 6.06497 11.764C5.57228 11.573 5.00545 11.6813 4.63156 12.038C4.34931 12.3014 3.89347 12.3014 3.61122 12.038L3.09743 11.5489C2.81685 11.2839 2.81685 10.856 3.09743 10.591C3.47211 10.2393 3.58421 9.71039 3.38144 9.25087C3.17868 8.79134 2.70098 8.49176 2.17116 8.49183C1.7715 8.49183 1.44751 8.18768 1.44751 7.81249V7.13315C1.44751 6.75796 1.7715 6.45381 2.17116 6.45381C2.70418 6.45668 3.1859 6.15603 3.38933 5.6935C3.59276 5.23098 3.47733 4.69886 3.09743 4.34785C2.82161 4.0837 2.82161 3.66093 3.09743 3.39678L3.61845 2.90765C3.9007 2.64425 4.35654 2.64425 4.63879 2.90765C5.0134 3.25939 5.57684 3.36463 6.06633 3.17428C6.55582 2.98393 6.87495 2.53548 6.87487 2.03809C6.87487 1.6629 7.19885 1.35875 7.59851 1.35875H8.32216C8.72182 1.35875 9.04581 1.6629 9.04581 2.03809C9.04275 2.53848 9.36301 2.99071 9.8557 3.18168C10.3484 3.37266 10.9152 3.2643 11.2891 2.90765C11.5714 2.64425 12.0272 2.64425 12.3095 2.90765L12.8232 3.38998C13.1038 3.65495 13.1038 4.08288 12.8232 4.34785C12.4433 4.69886 12.3279 5.23098 12.5313 5.6935C12.7348 6.15603 13.2165 6.45668 13.7495 6.45381C14.1492 6.45381 14.4732 6.75796 14.4732 7.13315V7.83287Z"
                                className="_to-gradient"
                              />
                              <defs>
                                <linearGradient
                                  id="icon_primary_gradient"
                                  x1="3.18182"
                                  y1="16.0636"
                                  x2="13.4359"
                                  y2="5.98946"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">
                            Настройки
                          </div>
                        </a>
                        <a
                          className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]"
                          href="#"
                        >
                          <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&_svg]:max-w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={13}
                              viewBox="0 0 14 13"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.0909 2.15375H11.4545V1.80426C11.4534 1.23808 11.1722 0.705122 10.6947 0.364283C10.2173 0.0234431 9.59879 -0.0859001 9.02364 0.0688552L1.73727 2.03926C1.62982 2.07106 1.5332 2.12928 1.45727 2.20798C0.603057 2.405 0.00139898 3.12895 0 3.96146V11.1923C0 12.1907 0.854729 13 1.90909 13H12.0909C13.1453 13 14 12.1907 14 11.1923V3.96146C14 2.96309 13.1453 2.15375 12.0909 2.15375ZM9.37357 1.22578C9.56938 1.17365 9.77971 1.21328 9.93951 1.33243C10.0993 1.45158 10.1893 1.63589 10.1818 1.82835V2.17784H5.9563L9.37357 1.22578ZM12.7271 8.17945H10.818C10.4665 8.17945 10.1816 7.90967 10.1816 7.57688C10.1816 7.24409 10.4665 6.97431 10.818 6.97431H12.7271V8.17945ZM12.7273 5.76917H10.9136C9.96821 5.74629 9.13951 6.36392 8.94089 7.23944C8.83467 7.76878 8.98336 8.31541 9.34644 8.73029C9.70952 9.14518 10.2491 9.38507 10.8182 9.38458H12.7273V11.1923C12.7273 11.5251 12.4423 11.7949 12.0909 11.7949H1.90907C1.55761 11.7949 1.27271 11.5251 1.27271 11.1923V3.96146C1.27271 3.62867 1.55761 3.35889 1.90907 3.35889H12.0909C12.4423 3.35889 12.7273 3.62867 12.7273 3.96146V5.76917Z"
                                className="_to-gradient"
                              />
                              <defs>
                                <linearGradient
                                  id="icon_primary_gradient"
                                  x1="3.18182"
                                  y1="16.0636"
                                  x2="13.4359"
                                  y2="5.98946"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">
                            Пополение и вывод
                          </div>
                        </a>
                        <a
                          className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]"
                          href="#"
                        >
                          <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&_svg]:max-w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={15}
                              viewBox="0 0 16 15"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.81449 7.15236H8.70567C8.70567 7.13139 8.69116 7.08945 8.69116 7.08945V6.05484C8.69116 5.98494 8.72018 5.98494 8.75645 5.98494C8.9717 5.91019 9.18242 5.82384 9.3876 5.72629C10.4614 5.15071 11.0426 3.98582 10.8385 2.81822C10.6134 1.58131 9.56016 0.64073 8.26314 0.518331C7.33684 0.41438 6.41688 0.756942 5.80383 1.43409C5.20517 2.05016 4.94894 2.90524 5.11464 3.73398C5.25533 4.83342 6.07739 5.73911 7.18946 6.01989C7.23178 6.03013 7.2597 6.06899 7.25475 6.11077V7.08246V7.15935H5.12189C4.9661 7.15913 4.81063 7.17317 4.6576 7.20129C3.70661 7.37776 2.99104 8.13851 2.90198 9.06777V9.60604H2.80767H1.93712C0.861975 9.72009 0.0369038 10.5777 0.000133194 11.6193V12.4023C-0.00412177 12.7654 0.0936406 13.1229 0.283063 13.4369C0.67848 14.1092 1.42555 14.5175 2.2273 14.4994H5.07836C5.2322 14.4863 5.38491 14.4629 5.5354 14.4295C6.43695 14.2484 7.1226 13.5401 7.24749 12.6609C7.26562 12.3582 7.26562 12.0548 7.24749 11.7521C7.25013 11.5976 7.23799 11.4432 7.21122 11.2908C7.02924 10.3885 6.25876 9.70558 5.31051 9.60604H4.44721H4.3529V9.20758C4.37962 8.84074 4.69672 8.55656 5.07836 8.55746H10.8966C11.1275 8.56073 11.343 8.66976 11.4769 8.85106C11.6041 9.08246 11.65 9.3474 11.6075 9.60604H11.4987H10.6427C9.70185 9.68248 8.91949 10.3347 8.70567 11.2209C8.62586 11.6978 8.62586 12.184 8.70567 12.6609C8.84187 13.7171 9.77754 14.5075 10.8821 14.4994H13.7839C14.7852 14.5067 15.6625 13.8547 15.9095 12.9196C16.0097 12.4268 16.0268 11.9216 15.9603 11.4236C15.8441 10.5922 15.2248 9.90753 14.386 9.68294C14.1882 9.63929 13.9867 9.61355 13.7839 9.60604H13.0584V9.46623C13.0695 9.27997 13.0695 9.09325 13.0584 8.90699C12.8874 7.91012 12.003 7.1725 10.9546 7.15236H8.81449ZM5.07828 13.1013H3.62736H2.22722C2.01566 13.1163 1.80789 13.0414 1.65859 12.8961C1.50929 12.7509 1.43343 12.55 1.45097 12.3463V11.7032C1.45097 11.3171 1.77577 11.0041 2.17644 11.0041H5.07828C5.47894 11.0041 5.80374 11.3171 5.80374 11.7032V12.4023C5.80374 12.7883 5.47894 13.1013 5.07828 13.1013ZM12.3328 13.1013H13.8273C14.2109 13.0791 14.5099 12.7725 14.5092 12.4023V11.7032C14.5092 11.3171 14.1844 11.0042 13.7838 11.0042H10.8819C10.5272 10.9986 10.2203 11.2411 10.1565 11.5774C10.1493 11.6751 10.1493 11.7732 10.1565 11.871V12.3673C10.1465 12.5587 10.2185 12.7456 10.3557 12.8844C10.4928 13.0231 10.6831 13.1016 10.8819 13.1013H12.3328ZM7.97998 1.91643C8.7813 1.91643 9.4309 2.54239 9.4309 3.31454C9.4309 4.0867 8.7813 4.71265 7.97998 4.71265C7.17865 4.71265 6.52905 4.0867 6.52905 3.31454C6.52905 2.54239 7.17865 1.91643 7.97998 1.91643Z"
                                className="_to-gradient"
                              />
                              <defs>
                                <linearGradient
                                  id="icon_primary_gradient"
                                  x1="3.18182"
                                  y1="16.0636"
                                  x2="13.4359"
                                  y2="5.98946"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">
                            Реферальная система
                          </div>
                        </a>
                        <a
                          className="np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]"
                          href="#"
                        >
                          <div className="np-nav-icon flex-shrink-0 w-4 flex justify-center [&_svg]:max-w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={13}
                              viewBox="0 0 14 13"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.88308 11.5556H1.55323V1.44444H3.88308C4.08905 1.44444 4.28657 1.36834 4.43222 1.2329C4.57786 1.09746 4.65969 0.913767 4.65969 0.722222C4.65969 0.530677 4.57786 0.346987 4.43222 0.211544C4.28657 0.0761015 4.08905 0 3.88308 0H0.776616C0.570644 0 0.37312 0.0761015 0.227477 0.211544C0.081833 0.346987 0 0.530677 0 0.722222V12.2778C0 12.4693 0.081833 12.6531 0.227477 12.7885C0.37312 12.9239 0.570644 13 0.776616 13H3.88308C4.08905 13 4.28657 12.9239 4.43222 12.7885C4.57786 12.6531 4.65969 12.4693 4.65969 12.2778C4.65969 12.0862 4.57786 11.9025 4.43222 11.7671C4.28657 11.6316 4.08905 11.5556 3.88308 11.5556ZM13.7539 5.98721L9.09416 1.65387C8.94586 1.52075 8.74677 1.44789 8.54069 1.45128C8.3346 1.45466 8.13842 1.53403 7.99527 1.67195C7.85212 1.80986 7.77373 1.99498 7.77737 2.18664C7.78101 2.37829 7.86638 2.56075 8.01468 2.69387L11.3463 5.79224H3.88308C3.67711 5.79224 3.47958 5.86829 3.33394 6.00374C3.1883 6.13918 3.10646 6.32291 3.10646 6.51446C3.10646 6.706 3.1883 6.88965 3.33394 7.02509C3.47958 7.16053 3.67711 7.23668 3.88308 7.23668H13.2025C13.36 7.24063 13.5151 7.19993 13.6472 7.11995C13.7792 7.03998 13.882 6.92449 13.9419 6.78891C14.0017 6.65332 14.0157 6.50403 13.9822 6.36084C13.9486 6.21764 13.869 6.08732 13.7539 5.98721ZM10.3756 8.47165L8.04573 10.2772C7.89022 10.4036 7.79509 10.5823 7.78126 10.774C7.76742 10.9657 7.83603 11.1546 7.97197 11.2992C8.10791 11.4438 8.30005 11.5323 8.50613 11.5452C8.71222 11.558 8.91536 11.4942 9.07087 11.3678L11.4007 9.56221C11.5562 9.43579 11.6514 9.25707 11.6652 9.06542C11.679 8.87377 11.6104 8.68486 11.4745 8.54024C11.3386 8.39563 11.1464 8.30723 10.9403 8.29436C10.7342 8.28149 10.5311 8.34523 10.3756 8.47165Z"
                                className="_to-gradient"
                              />
                              <defs>
                                <linearGradient
                                  id="icon_primary_gradient"
                                  x1="3.18182"
                                  y1="16.0636"
                                  x2="13.4359"
                                  y2="5.98946"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#1E61EB" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]">
                            Выйти из аккаунта
                          </div>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="hm-btn-menu mmenu-open flex-shrink-0 w-[50px] h-[50px] flex justify-center items-center flex-col gap-4 cursor-pointer">
                  <span className="w-[30px] h-[3px] bg-white rounded-full" />
                  <span className="w-[30px] h-[3px] bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="layout-b pb-4 px-9 3xl:px-4 min-w-0 sm:px-3">
          <div className="prsl my-6 rounded-md min-h-[100px] py-3 3sm:pb-6 sm:my-3">
            <div className="swiper prsl-slider w-full h-full">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="prsl-item flex items-center justify-between gap-4 flex-wrap 2md:flex-col 2md:gap-2">
                    <div className="prsl-item-inf flex justify-center items-center gap-4 xl:gap-2 2md:flex-wrap">
                      <div className="prsl-item-pic w-[180px] flex justify-center items-center 3xl:w-[140px] xl:w-[120px] sm:w-[100px]">
                        <img
                          className="w-full"
                          src={raffle}
                          alt="raffle"
                        />
                      </div>
                      <div className="prsl-item-award flex items-center gap-2 sm:gap-1">
                        <div className="prsl-item-award-pic flex-shrink-0 w-16 h-16 flex justify-center items-center 3md:w-12 3md:h-12">
                          <img
                            className="max-w-full max-h-full"
                            src={award}
                            alt="award"
                          />
                        </div>
                        <div className="prsl-item-award-inf">
                          <div className="prsl-item-award-title font-secondary-bold text-base text-white 3md:text-sm sm:text-xs">
                            Аккаунт Warface
                          </div>
                          <div className="prsl-item-award-subtitle mt-1.5 font-secondary-bold text-sm text-white/40 3md:mt-0 3md:text-xs sm:text-[10px]">
                            25 Ранг
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="prsl-item-bar flex justify-center items-center gap-6 3xl:gap-3 2md:flex-row-reverse 3sm:gap-1">
                      <a
                        className="prsl-item-btn btn btn-primary rounded w-[180px] h-10 justify-center px-1 3xl:w-[150px] sm:max-w-[130px] sm:w-full sm:h-8 sm:px-2"
                        href="#"
                      >
                        <div className="btn-text font-secondary-med text-[15px] text-white 3xl:text-sm 3sm:text-xs">
                          Присоединиться
                        </div>
                      </a>
                      <div className="timer flex items-center gap-1">
                        <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px] 3sm:w-11 3sm:h-11">
                          <div
                            className="circle-progress"
                            data-percent={80}
                            data-measure={67}
                            data-measure-640={44}
                          >
                            <svg
                              className="svg"
                              width={50}
                              height={50}
                              viewBox="0 0 50 50"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ transform: "rotate(-90deg)" }}
                            >
                              <circle
                                className="placeholder"
                                r={15}
                                cx={25}
                                cy={25}
                                fill="transparent"
                                stroke="#ffffff"
                                opacity="0.25"
                                    strokeWidth={3}
                                strokeDasharray="94.2"
                                strokeDashoffset={0}
                              />
                              <circle
                                className="progress"
                                r={15}
                                cx={25}
                                cy={25}
                                stroke="url(#primary)"
                                    strokeWidth={4}
                                strokeLinecap="round"
                                strokeDashoffset={70}
                                fill="transparent"
                                strokeDasharray="94.2"
                              />
                              <defs>
                                <linearGradient
                                  id="primary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#0046D6" />
                                </linearGradient>
                                <linearGradient
                                  id="secondary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#8CD23C" />
                                  <stop offset={1} stopColor="#417A00" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="timer-item-inf absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full z-[1]">
                            <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">
                              24
                            </div>
                            <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">
                              часа
                            </div>
                          </div>
                        </div>
                        <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px] 3sm:w-11 3sm:h-11">
                          <div
                            className="circle-progress"
                            data-percent={60}
                            data-measure={67}
                            data-measure-640={44}
                          >
                            <svg
                              className="svg"
                              width={50}
                              height={50}
                              viewBox="0 0 50 50"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ transform: "rotate(-90deg)" }}
                            >
                              <circle
                                className="placeholder"
                                r={15}
                                cx={25}
                                cy={25}
                                fill="transparent"
                                stroke="#ffffff"
                                opacity="0.25"
                                    strokeWidth={3}
                                strokeDasharray="94.2"
                                strokeDashoffset={0}
                              />
                              <circle
                                className="progress"
                                r={15}
                                cx={25}
                                cy={25}
                                stroke="url(#primary)"
                                    strokeWidth={4}
                                strokeLinecap="round"
                                strokeDashoffset={70}
                                fill="transparent"
                                strokeDasharray="94.2"
                              />
                              <defs>
                                <linearGradient
                                  id="primary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#0046D6" />
                                </linearGradient>
                                <linearGradient
                                  id="secondary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#8CD23C" />
                                  <stop offset={1} stopColor="#417A00" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="timer-item-inf absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full z-[1]">
                            <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">
                              44
                            </div>
                            <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">
                              минуты
                            </div>
                          </div>
                        </div>
                        <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px] 3sm:w-11 3sm:h-11">
                          <div
                            className="circle-progress"
                            data-percent={5}
                            data-measure={67}
                            data-measure-640={44}
                          >
                            <svg
                              className="svg"
                              width={50}
                              height={50}
                              viewBox="0 0 50 50"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ transform: "rotate(-90deg)" }}
                            >
                              <circle
                                className="placeholder"
                                r={15}
                                cx={25}
                                cy={25}
                                fill="transparent"
                                stroke="#ffffff"
                                opacity="0.25"
                                    strokeWidth={3}
                                strokeDasharray="94.2"
                                strokeDashoffset={0}
                              />
                              <circle
                                className="progress"
                                r={15}
                                cx={25}
                                cy={25}
                                stroke="url(#primary)"
                                    strokeWidth={4}
                                strokeLinecap="round"
                                strokeDashoffset={70}
                                fill="transparent"
                                strokeDasharray="94.2"
                              />
                              <defs>
                                <linearGradient
                                  id="primary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#0046D6" />
                                </linearGradient>
                                <linearGradient
                                  id="secondary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#8CD23C" />
                                  <stop offset={1} stopColor="#417A00" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="timer-item-inf absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full z-[1]">
                            <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">
                              05
                            </div>
                            <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">
                              секунд
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="prsl-item flex items-center justify-between gap-4 flex-wrap 2md:flex-col 2md:gap-2">
                    <div className="prsl-item-inf flex justify-center items-center gap-4 xl:gap-2 2md:flex-wrap">
                      <div className="prsl-item-pic w-[180px] flex justify-center items-center 3xl:w-[140px] xl:w-[120px] sm:w-[100px]">
                        <img
                          className="w-full"
                          src={raffle}
                          alt="raffle"
                        />
                      </div>
                      <div className="prsl-item-award flex items-center gap-2 sm:gap-1">
                        <div className="prsl-item-award-pic flex-shrink-0 w-16 h-16 flex justify-center items-center 3md:w-12 3md:h-12">
                          <img
                            className="max-w-full max-h-full"
                            src={award}
                            alt="award"
                          />
                        </div>
                        <div className="prsl-item-award-inf">
                          <div className="prsl-item-award-title font-secondary-bold text-base text-white 3md:text-sm sm:text-xs">
                            Аккаунт Warface
                          </div>
                          <div className="prsl-item-award-subtitle mt-1.5 font-secondary-bold text-sm text-white/40 3md:mt-0 3md:text-xs sm:text-[10px]">
                            25 Ранг
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="prsl-item-bar flex justify-center items-center gap-6 3xl:gap-3 2md:flex-row-reverse 3sm:gap-1">
                      <a
                        className="prsl-item-btn btn btn-primary rounded w-[180px] h-10 justify-center px-1 3xl:w-[150px] sm:max-w-[130px] sm:w-full sm:h-8 sm:px-2"
                        href="#"
                      >
                        <div className="btn-text font-secondary-med text-[15px] text-white 3xl:text-sm 3sm:text-xs">
                          Присоединиться
                        </div>
                      </a>
                      <div className="timer flex items-center gap-1">
                        <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px] 3sm:w-11 3sm:h-11">
                          <div
                            className="circle-progress"
                            data-percent={80}
                            data-measure={67}
                            data-measure-640={44}
                          >
                            <svg
                              className="svg"
                              width={50}
                              height={50}
                              viewBox="0 0 50 50"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ transform: "rotate(-90deg)" }}
                            >
                              <circle
                                className="placeholder"
                                r={15}
                                cx={25}
                                cy={25}
                                fill="transparent"
                                stroke="#ffffff"
                                opacity="0.25"
                                    strokeWidth={3}
                                strokeDasharray="94.2"
                                strokeDashoffset={0}
                              />
                              <circle
                                className="progress"
                                r={15}
                                cx={25}
                                cy={25}
                                stroke="url(#primary)"
                                    strokeWidth={4}
                                strokeLinecap="round"
                                strokeDashoffset={70}
                                fill="transparent"
                                strokeDasharray="94.2"
                              />
                              <defs>
                                <linearGradient
                                  id="primary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#0046D6" />
                                </linearGradient>
                                <linearGradient
                                  id="secondary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#8CD23C" />
                                  <stop offset={1} stopColor="#417A00" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="timer-item-inf absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full z-[1]">
                            <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">
                              24
                            </div>
                            <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">
                              часа
                            </div>
                          </div>
                        </div>
                        <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px] 3sm:w-11 3sm:h-11">
                          <div
                            className="circle-progress"
                            data-percent={60}
                            data-measure={67}
                            data-measure-640={44}
                          >
                            <svg
                              className="svg"
                              width={50}
                              height={50}
                              viewBox="0 0 50 50"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ transform: "rotate(-90deg)" }}
                            >
                              <circle
                                className="placeholder"
                                r={15}
                                cx={25}
                                cy={25}
                                fill="transparent"
                                stroke="#ffffff"
                                opacity="0.25"
                                    strokeWidth={3}
                                strokeDasharray="94.2"
                                strokeDashoffset={0}
                              />
                              <circle
                                className="progress"
                                r={15}
                                cx={25}
                                cy={25}
                                stroke="url(#primary)"
                                     strokeWidth={4}
                                strokeLinecap="round"
                                strokeDashoffset={70}
                                fill="transparent"
                                strokeDasharray="94.2"
                              />
                              <defs>
                                <linearGradient
                                  id="primary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#0046D6" />
                                </linearGradient>
                                <linearGradient
                                  id="secondary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#8CD23C" />
                                  <stop offset={1} stopColor="#417A00" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="timer-item-inf absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full z-[1]">
                            <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">
                              44
                            </div>
                            <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">
                              минуты
                            </div>
                          </div>
                        </div>
                        <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px] 3sm:w-11 3sm:h-11">
                          <div
                            className="circle-progress"
                            data-percent={5}
                            data-measure={67}
                            data-measure-640={44}
                          >
                            <svg
                              className="svg"
                              width={50}
                              height={50}
                              viewBox="0 0 50 50"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ transform: "rotate(-90deg)" }}
                            >
                              <circle
                                className="placeholder"
                                r={15}
                                cx={25}
                                cy={25}
                                fill="transparent"
                                stroke="#ffffff"
                                opacity="0.25"
                                     strokeWidth={3}
                                strokeDasharray="94.2"
                                strokeDashoffset={0}
                              />
                              <circle
                                className="progress"
                                r={15}
                                cx={25}
                                cy={25}
                                stroke="url(#primary)"
                                     strokeWidth={4}
                                strokeLinecap="round"
                                strokeDashoffset={70}
                                fill="transparent"
                                strokedasharray="94.2"
                              />
                              <defs>
                                <linearGradient
                                  id="primary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#0046D6" />
                                </linearGradient>
                                <linearGradient
                                  id="secondary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#8CD23C" />
                                  <stop offset={1} stopColor="#417A00" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="timer-item-inf absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full z-[1]">
                            <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">
                              05
                            </div>
                            <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">
                              секунд
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="prsl-item flex items-center justify-between gap-4 flex-wrap 2md:flex-col 2md:gap-2">
                    <div className="prsl-item-inf flex justify-center items-center gap-4 xl:gap-2 2md:flex-wrap">
                      <div className="prsl-item-pic w-[180px] flex justify-center items-center 3xl:w-[140px] xl:w-[120px] sm:w-[100px]">
                        <img
                          className="w-full"
                          src={raffle}
                          alt="raffle"
                        />
                      </div>
                      <div className="prsl-item-award flex items-center gap-2 sm:gap-1">
                        <div className="prsl-item-award-pic flex-shrink-0 w-16 h-16 flex justify-center items-center 3md:w-12 3md:h-12">
                          <img
                            className="max-w-full max-h-full"
                            src={award}
                            alt="award"
                          />
                        </div>
                        <div className="prsl-item-award-inf">
                          <div className="prsl-item-award-title font-secondary-bold text-base text-white 3md:text-sm sm:text-xs">
                            Аккаунт Warface
                          </div>
                          <div className="prsl-item-award-subtitle mt-1.5 font-secondary-bold text-sm text-white/40 3md:mt-0 3md:text-xs sm:text-[10px]">
                            25 Ранг
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="prsl-item-bar flex justify-center items-center gap-6 3xl:gap-3 2md:flex-row-reverse 3sm:gap-1">
                      <a
                        className="prsl-item-btn btn btn-primary rounded w-[180px] h-10 justify-center px-1 3xl:w-[150px] sm:max-w-[130px] sm:w-full sm:h-8 sm:px-2"
                        href="#"
                      >
                        <div className="btn-text font-secondary-med text-[15px] text-white 3xl:text-sm 3sm:text-xs">
                          Присоединиться
                        </div>
                      </a>
                      <div className="timer flex items-center gap-1">
                        <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px] 3sm:w-11 3sm:h-11">
                          <div
                            className="circle-progress"
                            data-percent={80}
                            data-measure={67}
                            data-measure-640={44}
                          >
                            <svg
                              className="svg"
                              width={50}
                              height={50}
                              viewBox="0 0 50 50"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ transform: "rotate(-90deg)" }}
                            >
                              <circle
                                className="placeholder"
                                r={15}
                                cx={25}
                                cy={25}
                                fill="transparent"
                                stroke="#ffffff"
                                opacity="0.25"
                                     strokeWidth={3}
                                strokeDasharray="94.2"
                                strokeDashoffset={0}
                              />
                              <circle
                                className="progress"
                                r={15}
                                cx={25}
                                cy={25}
                                stroke="url(#primary)"
                                     strokeWidth={4}
                                strokeLinecap="round"
                                strokeDashoffset={70}
                                fill="transparent"
                                strokeDasharray="94.2"
                              />
                              <defs>
                                <linearGradient
                                  id="primary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#0046D6" />
                                </linearGradient>
                                <linearGradient
                                  id="secondary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#8CD23C" />
                                  <stop offset={1} stopColor="#417A00" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="timer-item-inf absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full z-[1]">
                            <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">
                              24
                            </div>
                            <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">
                              часа
                            </div>
                          </div>
                        </div>
                        <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px] 3sm:w-11 3sm:h-11">
                          <div
                            className="circle-progress"
                            data-percent={60}
                            data-measure={67}
                            data-measure-640={44}
                          >
                            <svg
                              className="svg"
                              width={50}
                              height={50}
                              viewBox="0 0 50 50"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ transform: "rotate(-90deg)" }}
                            >
                              <circle
                                className="placeholder"
                                r={15}
                                cx={25}
                                cy={25}
                                fill="transparent"
                                stroke="#ffffff"
                                opacity="0.25"
                                    strokeWidth={3}
                                strokeDasharray="94.2"
                                strokeDashoffset={0}
                              />
                              <circle
                                className="progress"
                                r={15}
                                cx={25}
                                cy={25}
                                stroke="url(#primary)"
                                    strokeWidth={4}
                                strokeLinecap="round"
                                strokeDashoffset={70}
                                fill="transparent"
                                strokeDasharray="94.2"
                              />
                              <defs>
                                <linearGradient
                                  id="primary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#0046D6" />
                                </linearGradient>
                                <linearGradient
                                  id="secondary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#8CD23C" />
                                  <stop offset={1} stopColor="#417A00" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="timer-item-inf absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full z-[1]">
                            <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">
                              44
                            </div>
                            <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">
                              минуты
                            </div>
                          </div>
                        </div>
                        <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px] 3sm:w-11 3sm:h-11">
                          <div
                            className="circle-progress"
                            data-percent={5}
                            data-measure={67}
                            data-measure-640={44}
                          >
                            <svg
                              className="svg"
                              width={50}
                              height={50}
                              viewBox="0 0 50 50"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ transform: "rotate(-90deg)" }}
                            >
                              <circle
                                className="placeholder"
                                r={15}
                                cx={25}
                                cy={25}
                                fill="transparent"
                                stroke="#ffffff"
                                opacity="0.25"
                                    strokeWidth={3}
                                strokeDasharray="94.2"
                                strokeDashoffset={0}
                              />
                              <circle
                                className="progress"
                                r={15}
                                cx={25}
                                cy={25}
                                stroke="url(#primary)"
                                    strokeWidth={4}
                                strokeLinecap="round"
                                strokeDashoffset={70}
                                fill="transparent"
                                strokeDasharray="94.2"
                              />
                              <defs>
                                <linearGradient
                                  id="primary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#0046D6" />
                                </linearGradient>
                                <linearGradient
                                  id="secondary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#8CD23C" />
                                  <stop offset={1} stopColor="#417A00" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="timer-item-inf absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full z-[1]">
                            <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">
                              05
                            </div>
                            <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">
                              секунд
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="prsl-item flex items-center justify-between gap-4 flex-wrap 2md:flex-col 2md:gap-2">
                    <div className="prsl-item-inf flex justify-center items-center gap-4 xl:gap-2 2md:flex-wrap">
                      <div className="prsl-item-pic w-[180px] flex justify-center items-center 3xl:w-[140px] xl:w-[120px] sm:w-[100px]">
                        <img
                          className="w-full"
                          src={raffle}
                          alt="raffle"
                        />
                      </div>
                      <div className="prsl-item-award flex items-center gap-2 sm:gap-1">
                        <div className="prsl-item-award-pic flex-shrink-0 w-16 h-16 flex justify-center items-center 3md:w-12 3md:h-12">
                          <img
                            className="max-w-full max-h-full"
                            src={award}
                            alt="award"
                          />
                        </div>
                        <div className="prsl-item-award-inf">
                          <div className="prsl-item-award-title font-secondary-bold text-base text-white 3md:text-sm sm:text-xs">
                            Аккаунт Warface
                          </div>
                          <div className="prsl-item-award-subtitle mt-1.5 font-secondary-bold text-sm text-white/40 3md:mt-0 3md:text-xs sm:text-[10px]">
                            25 Ранг
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="prsl-item-bar flex justify-center items-center gap-6 3xl:gap-3 2md:flex-row-reverse 3sm:gap-1">
                      <a
                        className="prsl-item-btn btn btn-primary rounded w-[180px] h-10 justify-center px-1 3xl:w-[150px] sm:max-w-[130px] sm:w-full sm:h-8 sm:px-2"
                        href="#"
                      >
                        <div className="btn-text font-secondary-med text-[15px] text-white 3xl:text-sm 3sm:text-xs">
                          Присоединиться
                        </div>
                      </a>
                      <div className="timer flex items-center gap-1">
                        <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px] 3sm:w-11 3sm:h-11">
                          <div
                            className="circle-progress"
                            data-percent={80}
                            data-measure={67}
                            data-measure-640={44}
                          >
                            <svg
                              className="svg"
                              width={50}
                              height={50}
                              viewBox="0 0 50 50"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ transform: "rotate(-90deg)" }}
                            >
                              <circle
                                className="placeholder"
                                r={15}
                                cx={25}
                                cy={25}
                                fill="transparent"
                                stroke="#ffffff"
                                opacity="0.25"
                                    strokeWidth={3}
                                strokeDasharray="94.2"
                                strokeDashoffset={0}
                              />
                              <circle
                                className="progress"
                                r={15}
                                cx={25}
                                cy={25}
                                stroke="url(#primary)"
                                    strokeWidth={4}
                                strokeLinecap="round"
                                strokeDashoffset={70}
                                fill="transparent"
                                strokeDasharray="94.2"
                              />
                              <defs>
                                <linearGradient
                                  id="primary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#0046D6" />
                                </linearGradient>
                                <linearGradient
                                  id="secondary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#8CD23C" />
                                  <stop offset={1} stopColor="#417A00" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="timer-item-inf absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full z-[1]">
                            <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">
                              24
                            </div>
                            <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">
                              часа
                            </div>
                          </div>
                        </div>
                        <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px] 3sm:w-11 3sm:h-11">
                          <div
                            className="circle-progress"
                            data-percent={60}
                            data-measure={67}
                            data-measure-640={44}
                          >
                            <svg
                              className="svg"
                              width={50}
                              height={50}
                              viewBox="0 0 50 50"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ transform: "rotate(-90deg)" }}
                            >
                              <circle
                                className="placeholder"
                                r={15}
                                cx={25}
                                cy={25}
                                fill="transparent"
                                stroke="#ffffff"
                                opacity="0.25"
                                    strokeWidth={3}
                                strokeDasharray="94.2"
                                strokeDashoffset={0}
                              />
                              <circle
                                className="progress"
                                r={15}
                                cx={25}
                                cy={25}
                                stroke="url(#primary)"
                                    strokeWidth={4}
                                strokeLinecap="round"
                                strokeDashoffset={70}
                                fill="transparent"
                                strokeDasharray="94.2"
                              />
                              <defs>
                                <linearGradient
                                  id="primary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#0046D6" />
                                </linearGradient>
                                <linearGradient
                                  id="secondary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#8CD23C" />
                                  <stop offset={1} stopColor="#417A00" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="timer-item-inf absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full z-[1]">
                            <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">
                              44
                            </div>
                            <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">
                              минуты
                            </div>
                          </div>
                        </div>
                        <div className="timer-item relative flex-shrink-0 flex justify-center items-center w-[67px] h-[67px] 3sm:w-11 3sm:h-11">
                          <div
                            className="circle-progress"
                            data-percent={5}
                            data-measure={67}
                            data-measure-640={44}
                          >
                            <svg
                              className="svg"
                              width={50}
                              height={50}
                              viewBox="0 0 50 50"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ transform: "rotate(-90deg)" }}
                            >
                              <circle
                                className="placeholder"
                                r={15}
                                cx={25}
                                cy={25}
                                fill="transparent"
                                stroke="#ffffff"
                                opacity="0.25"
                                    strokeWidth={3}
                                strokeDasharray="94.2"
                                strokeDashoffset={0}
                              />
                              <circle
                                className="progress"
                                r={15}
                                cx={25}
                                cy={25}
                                stroke="url(#primary)"
                                    strokeWidth={4}
                                strokeLinecap="round"
                                strokeDashoffset={70}
                                fill="transparent"
                                strokeDasharray="94.2"
                              />
                              <defs>
                                <linearGradient
                                  id="primary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#339CFC" />
                                  <stop offset={1} stopColor="#0046D6" />
                                </linearGradient>
                                <linearGradient
                                  id="secondary"
                                  x1={0}
                                  y1={0}
                                  x2={1}
                                  y2={1}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop stopColor="#8CD23C" />
                                  <stop offset={1} stopColor="#417A00" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="timer-item-inf absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full z-[1]">
                            <div className="timer-value font-primary-med text-center text-lg text-white leading-none 3sm:text-xs">
                              05
                            </div>
                            <div className="timer-value font-primary-bold text-center text-[11px] text-white/60 leading-none 3sm:hidden">
                              секунд
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination prsl-pag" />
            <div className="prsl-btn prsl-btn-prev">
              <div className="btn-icon">
                <svg
                  viewBox="0 0 26 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.469669 5.96967C0.176777 6.26257 0.176777 6.73744 0.469669 7.03033L5.24264 11.8033C5.53553 12.0962 6.01041 12.0962 6.3033 11.8033C6.59619 11.5104 6.59619 11.0355 6.3033 10.7426L2.06066 6.5L6.3033 2.25736C6.59619 1.96447 6.59619 1.48959 6.3033 1.1967C6.01041 0.903807 5.53553 0.903808 5.24264 1.1967L0.469669 5.96967ZM26 5.75L1 5.75L1 7.25L26 7.25L26 5.75Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="prsl-btn prsl-btn-next">
              <div className="btn-icon">
                <svg
                  viewBox="0 0 26 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.5303 6.53033C25.8232 6.23743 25.8232 5.76256 25.5303 5.46967L20.7574 0.696697C20.4645 0.403804 19.9896 0.403804 19.6967 0.696697C19.4038 0.989591 19.4038 1.46446 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM6.55671e-08 6.75L25 6.75L25 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="sh flex justify-between items-center gap-x-3 2md:flex-col-reverse 2md:items-start 2md:gap-y-5">
            <div className="sh-title">
              <h2 className="sh-title-text font-secondary-bold text-2xl text-black 2md:text-xl">
                Выбор игр
              </h2>
              <div className="sh-title-line mt-3 rounded-full w-9 h-1 2md:mt-2 bg-gradient-primary" />
            </div>
            <div className="sh-bar flex items-center gap-2 2md:w-full 2md:flex-row-reverse">
              <div className="sh-search rounded-full h-[50px] px-6 max-w-[270px] w-full flex items-center bg-[#E8EAF7] 2md:max-w-none 2md:flex-grow 2md:h-10 2md:px-3">
                <button className="sh-search-icon flex-shrink-0 w-4 h-full [&_svg]:w-full flex justify-center items-center text-[#B8BACF] duration-100 hover:text-black">
                  <svg
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M-3.93136e-07 7.5061C9.71105e-05 10.2352 1.58105 12.7172 4.05425 13.8709C6.52745 15.0247 9.4451 14.6414 11.5364 12.888L14.8814 16.2418C15.1041 16.4645 15.4287 16.5515 15.7329 16.4699C16.0371 16.3884 16.2747 16.1508 16.3562 15.8466C16.4378 15.5424 16.3508 15.2178 16.1281 14.9951L12.7216 11.6149C13.5853 10.4258 14.0495 8.99334 14.0473 7.52366C14.0473 3.6446 10.9027 0.5 7.02366 0.5C3.1446 0.5 -5.61927e-07 3.6446 -3.92368e-07 7.52366L-3.93136e-07 7.5061ZM12.2914 7.50608C12.2914 10.4154 9.93296 12.7738 7.02366 12.7738C4.11436 12.7738 1.75592 10.4154 1.75591 7.50608C1.75591 4.59678 4.11436 2.23833 7.02366 2.23833C8.42075 2.23833 9.76062 2.79333 10.7485 3.78122C11.7364 4.76911 12.2914 6.10899 12.2914 7.50608Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <input
                  className="sh-search-input flex-grow ml-2.5 w-full h-full bg-transparent font-primary-med text-base text-black 2md:text-sm"
                  placeholder="Поиск"
                />
              </div>
            </div>
          </div>
          <div className="sgc mt-10 md:mt-5">
            <div className="sgc-grid grid grid-cols-2 gap-[30px] 3xl:gap-5 2sm:grid-cols-1">
              <div className="gc relative overflow-hidden rounded-lg p-5 md:p-3">
                <div className="gc-bg absolute z-[1] top-0 left-0 w-full h-full">
                  <img
                    className="relative z-[1] w-full h-full object-cover object-center"
                    src={picture2}
                    alt="picture"
                  />
                </div>
                <div className="gc-icon">
                  <div className="gc-icon-pic overflow-hidden rounded-full w-16 h16 xl:w-12 xl:h-12 md:w-10 md:h-10">
                    <img
                      className="w-full h-full object-cover"
                      src={Warface}
                      alt="Warface"
                    />
                  </div>
                </div>
                <div className="gc-title">
                  <h3 className="font-secondary-bold text-2xl text-white xl:text-xl md:text-lg">
                    Warface
                  </h3>
                </div>
                <div className="gc-badges" />
                <div className="gc-vplay cursor-pointer flex flex-col items-center">
                  <div className="gc-vplay-icon w-[42px] h-[42px] [&_svg]:w-full md:w-[44px] md:h-[44px]">
                    <svg
                      viewBox="0 0 42 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.4121 13.3373C33.9099 13.0602 34.5544 13.2306 34.8115 13.7376C36.436 16.9415 36.8127 20.6155 35.8492 24.0822C34.794 27.8791 32.2175 31.1163 28.6865 33.0817C25.1556 35.0471 20.9594 35.5797 17.0211 34.5624C13.4253 33.6335 10.3135 31.4819 8.24776 28.5236C7.92085 28.0554 8.09008 27.4322 8.58791 27.1551V27.1551C9.08573 26.878 9.72321 27.0524 10.0553 27.5171C11.8412 30.0159 14.4975 31.8327 17.5599 32.6238C20.9649 33.5034 24.5929 33.0429 27.6457 31.3437C30.6985 29.6444 32.9261 26.8455 33.8385 23.5628C34.659 20.6103 34.3553 17.484 33.0036 14.7436C32.7522 14.2339 32.9142 13.6144 33.4121 13.3373V13.3373Z"
                        fill="#E2E3F3"
                        fillOpacity="0.65"
                      />
                      <path
                        d="M33.4121 13.3373C33.9099 13.0602 34.5544 13.2306 34.8115 13.7376C36.436 16.9415 36.8127 20.6155 35.8492 24.0822C34.794 27.8791 32.2175 31.1163 28.6865 33.0817C25.1556 35.0471 20.9594 35.5797 17.0211 34.5624C13.4253 33.6335 10.3135 31.4819 8.24776 28.5236C7.92085 28.0554 8.09008 27.4322 8.58791 27.1551V27.1551C9.08573 26.878 9.72321 27.0524 10.0553 27.5171C11.8412 30.0159 14.4975 31.8327 17.5599 32.6238C20.9649 33.5034 24.5929 33.0429 27.6457 31.3437C30.6985 29.6444 32.9261 26.8455 33.8385 23.5628C34.659 20.6103 34.3553 17.484 33.0036 14.7436C32.7522 14.2339 32.9142 13.6144 33.4121 13.3373V13.3373Z"
                        fill="#E2E3F3"
                        fillOpacity="0.65"
                      />
                      <path
                        d="M6.1969 19.8531C5.60318 19.8531 5.11757 19.3711 5.1632 18.7791C5.43732 15.2227 7.06586 11.8625 9.77245 9.3244C12.7502 6.53201 16.7888 4.96326 20.9999 4.96326C25.2111 4.96326 29.2497 6.53201 32.2274 9.3244C34.934 11.8625 36.5626 15.2227 36.8367 18.7791C36.8823 19.3711 36.3967 19.8531 35.803 19.8531V19.8531C35.2093 19.8531 34.7329 19.3708 34.6801 18.7794C34.4106 15.7584 33.0104 12.91 30.7071 10.7501C28.1326 8.33583 24.6408 6.97951 20.9999 6.97951C17.359 6.97951 13.8673 8.33583 11.2928 10.7501C8.98952 12.91 7.58923 15.7584 7.31973 18.7794C7.26697 19.3708 6.79063 19.8531 6.1969 19.8531V19.8531Z"
                        fill="url(#paint0_linear_157_7320)"
                      />
                      <path
                        d="M21 33.7349C21 34.2917 20.5481 34.7462 19.9923 34.7131C16.149 34.484 12.5118 32.9507 9.77247 30.3819C6.79475 27.5895 5.12189 23.8022 5.12189 19.8532C5.12189 15.9041 6.79475 12.1168 9.77246 9.32444C12.5118 6.75561 16.149 5.22233 19.9923 4.99329C20.5481 4.96016 20.9999 5.41465 20.9999 5.97142V5.97142C20.9999 6.52819 20.548 6.97592 19.9926 7.01423C16.72 7.23991 13.6288 8.55952 11.2928 10.7501C8.71828 13.1644 7.27195 16.4389 7.27195 19.8532C7.27195 23.2675 8.71829 26.5419 11.2928 28.9562C13.6288 31.1468 16.72 32.4664 19.9926 32.6921C20.548 32.7304 21 33.1781 21 33.7349V33.7349Z"
                        fill="url(#paint1_linear_157_7320)"
                      />
                      <path
                        d="M28 20L17.5 26.0622L17.5 13.9378L28 20Z"
                        stroke="#D9D9D9"
                            strokeWidth={2}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_157_7320"
                          x1="29.6607"
                          y1="30.1407"
                          x2="14.533"
                          y2="8.63175"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#339CFC" />
                          <stop offset={1} stopColor="#0046D6" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_157_7320"
                          x1="12.3392"
                          y1="9.56562"
                          x2="27.4669"
                          y2="31.0745"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#339CFC" />
                          <stop offset={1} stopColor="#0046D6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="gc-vplay-label font-secondary-bold text-center text-[10px] text-white md:hidden">
                    Video
                  </div>
                </div>
                <div className="gc-tags-wrap">
                  <div className="gc-tags">
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Аккаунты
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Пин-коды
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Буст РМ
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Спецоперации
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Статистика
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Кредиты
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Достижения
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Прочее
                    </a>
                  </div>
                </div>
                <div className="gc-btn rounded-full border border-solid border-white w-[160px] h-11 flex items-center justify-between bg-transparent cursor-pointer md:w-full md:h-9">
                  <div className="gc-btn-label flex-grow px-2 font-secondary-bold text-center text-xs text-white">
                    Перейти
                  </div>
                  <button className="gc-btn-subbtn btn btn-secondary flex-shrink-0 relative right-[-2px] rounded-full w-11 h-11 justify-center md:w-9 md:h-9">
                    <div className="btn-icon text-white w-1/2 [&_svg]:w-full">
                      <svg
                        viewBox="0 0 20 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 0.871826C0.895431 0.871826 0 1.76726 0 2.87183C0 3.9764 0.895431 4.87183 2 4.87183C3.10457 4.87183 4 3.9764 4 2.87183C4 1.76726 3.10457 0.871826 2 0.871826Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 0.871826C8.89543 0.871826 8 1.76726 8 2.87183C8 3.9764 8.89543 4.87183 10 4.87183C11.1046 4.87183 12 3.9764 12 2.87183C12 1.76726 11.1046 0.871826 10 0.871826Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18 0.871826C16.8954 0.871826 16 1.76726 16 2.87183C16 3.9764 16.8954 4.87183 18 4.87183C19.1046 4.87183 20 3.9764 20 2.87183C20 1.76726 19.1046 0.871826 18 0.871826Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="gc relative overflow-hidden rounded-lg p-5 md:p-3">
                <div className="gc-bg absolute z-[1] top-0 left-0 w-full h-full">
                  <img
                    className="relative z-[1] w-full h-full object-cover object-center"
                    src={picture3}
                    alt="picture"
                  />
                </div>
                <div className="gc-icon">
                  <div className="gc-icon-pic overflow-hidden rounded-full w-16 h16 xl:w-12 xl:h-12 md:w-10 md:h-10">
                    <img
                      className="w-full h-full object-cover"
                      src={dota2}
                      alt="Dota 2"
                    />
                  </div>
                </div>
                <div className="gc-title">
                  <h3 className="font-secondary-bold text-2xl text-white xl:text-xl md:text-lg">
                    Dota 2
                  </h3>
                </div>
                <div className="gc-badges">
                  <div className="gc-badge-bar flex justify-end items-start flex-wrap gap-2">
                    <div className="gc-badge rounded-full py-2 px-5 h-auto inline-flex justify-center items-center font-secondary-bold text-xs text-white md:py-1 md:px-2 md:text-[10px] bg-gradient-primary">
                      new
                    </div>
                  </div>
                </div>
                <div className="gc-vplay cursor-pointer flex flex-col items-center">
                  <div className="gc-vplay-icon w-[42px] h-[42px] [&_svg]:w-full md:w-[44px] md:h-[44px]">
                    <svg
                      viewBox="0 0 42 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.4121 13.3373C33.9099 13.0602 34.5544 13.2306 34.8115 13.7376C36.436 16.9415 36.8127 20.6155 35.8492 24.0822C34.794 27.8791 32.2175 31.1163 28.6865 33.0817C25.1556 35.0471 20.9594 35.5797 17.0211 34.5624C13.4253 33.6335 10.3135 31.4819 8.24776 28.5236C7.92085 28.0554 8.09008 27.4322 8.58791 27.1551V27.1551C9.08573 26.878 9.72321 27.0524 10.0553 27.5171C11.8412 30.0159 14.4975 31.8327 17.5599 32.6238C20.9649 33.5034 24.5929 33.0429 27.6457 31.3437C30.6985 29.6444 32.9261 26.8455 33.8385 23.5628C34.659 20.6103 34.3553 17.484 33.0036 14.7436C32.7522 14.2339 32.9142 13.6144 33.4121 13.3373V13.3373Z"
                        fill="#E2E3F3"
                        fillOpacity="0.65"
                      />
                      <path
                        d="M33.4121 13.3373C33.9099 13.0602 34.5544 13.2306 34.8115 13.7376C36.436 16.9415 36.8127 20.6155 35.8492 24.0822C34.794 27.8791 32.2175 31.1163 28.6865 33.0817C25.1556 35.0471 20.9594 35.5797 17.0211 34.5624C13.4253 33.6335 10.3135 31.4819 8.24776 28.5236C7.92085 28.0554 8.09008 27.4322 8.58791 27.1551V27.1551C9.08573 26.878 9.72321 27.0524 10.0553 27.5171C11.8412 30.0159 14.4975 31.8327 17.5599 32.6238C20.9649 33.5034 24.5929 33.0429 27.6457 31.3437C30.6985 29.6444 32.9261 26.8455 33.8385 23.5628C34.659 20.6103 34.3553 17.484 33.0036 14.7436C32.7522 14.2339 32.9142 13.6144 33.4121 13.3373V13.3373Z"
                        fill="#E2E3F3"
                        fillOpacity="0.65"
                      />
                      <path
                        d="M6.1969 19.8531C5.60318 19.8531 5.11757 19.3711 5.1632 18.7791C5.43732 15.2227 7.06586 11.8625 9.77245 9.3244C12.7502 6.53201 16.7888 4.96326 20.9999 4.96326C25.2111 4.96326 29.2497 6.53201 32.2274 9.3244C34.934 11.8625 36.5626 15.2227 36.8367 18.7791C36.8823 19.3711 36.3967 19.8531 35.803 19.8531V19.8531C35.2093 19.8531 34.7329 19.3708 34.6801 18.7794C34.4106 15.7584 33.0104 12.91 30.7071 10.7501C28.1326 8.33583 24.6408 6.97951 20.9999 6.97951C17.359 6.97951 13.8673 8.33583 11.2928 10.7501C8.98952 12.91 7.58923 15.7584 7.31973 18.7794C7.26697 19.3708 6.79063 19.8531 6.1969 19.8531V19.8531Z"
                        fill="url(#paint0_linear_157_7320)"
                      />
                      <path
                        d="M21 33.7349C21 34.2917 20.5481 34.7462 19.9923 34.7131C16.149 34.484 12.5118 32.9507 9.77247 30.3819C6.79475 27.5895 5.12189 23.8022 5.12189 19.8532C5.12189 15.9041 6.79475 12.1168 9.77246 9.32444C12.5118 6.75561 16.149 5.22233 19.9923 4.99329C20.5481 4.96016 20.9999 5.41465 20.9999 5.97142V5.97142C20.9999 6.52819 20.548 6.97592 19.9926 7.01423C16.72 7.23991 13.6288 8.55952 11.2928 10.7501C8.71828 13.1644 7.27195 16.4389 7.27195 19.8532C7.27195 23.2675 8.71829 26.5419 11.2928 28.9562C13.6288 31.1468 16.72 32.4664 19.9926 32.6921C20.548 32.7304 21 33.1781 21 33.7349V33.7349Z"
                        fill="url(#paint1_linear_157_7320)"
                      />
                      <path
                        d="M28 20L17.5 26.0622L17.5 13.9378L28 20Z"
                        stroke="#D9D9D9"
                            strokeWidth={2}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_157_7320"
                          x1="29.6607"
                          y1="30.1407"
                          x2="14.533"
                          y2="8.63175"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#339CFC" />
                          <stop offset={1} stopColor="#0046D6" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_157_7320"
                          x1="12.3392"
                          y1="9.56562"
                          x2="27.4669"
                          y2="31.0745"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#339CFC" />
                          <stop offset={1} stopColor="#0046D6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="gc-vplay-label font-secondary-bold text-center text-[10px] text-white md:hidden">
                    Video
                  </div>
                </div>
                <div className="gc-tags-wrap">
                  <div className="gc-tags">
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Аккаунты
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Привязки VHS
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Предметы
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Буст MMR
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Калибровка
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Отмыв ЛП
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Обучение
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Услуги Dota+
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Боевой пропуск
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Прочее
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Отмыв ЛП
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Обучение
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Ещё...
                    </a>
                  </div>
                </div>
                <div className="gc-btn rounded-full border border-solid border-white w-[160px] h-11 flex items-center justify-between bg-transparent cursor-pointer md:w-full md:h-9">
                  <div className="gc-btn-label flex-grow px-2 font-secondary-bold text-center text-xs text-white">
                    Перейти
                  </div>
                  <button className="gc-btn-subbtn btn btn-secondary flex-shrink-0 relative right-[-2px] rounded-full w-11 h-11 justify-center md:w-9 md:h-9">
                    <div className="btn-icon text-white w-1/2 [&_svg]:w-full">
                      <svg
                        viewBox="0 0 20 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 0.871826C0.895431 0.871826 0 1.76726 0 2.87183C0 3.9764 0.895431 4.87183 2 4.87183C3.10457 4.87183 4 3.9764 4 2.87183C4 1.76726 3.10457 0.871826 2 0.871826Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 0.871826C8.89543 0.871826 8 1.76726 8 2.87183C8 3.9764 8.89543 4.87183 10 4.87183C11.1046 4.87183 12 3.9764 12 2.87183C12 1.76726 11.1046 0.871826 10 0.871826Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18 0.871826C16.8954 0.871826 16 1.76726 16 2.87183C16 3.9764 16.8954 4.87183 18 4.87183C19.1046 4.87183 20 3.9764 20 2.87183C20 1.76726 19.1046 0.871826 18 0.871826Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="gc relative overflow-hidden rounded-lg p-5 md:p-3">
                <div className="gc-bg absolute z-[1] top-0 left-0 w-full h-full">
                  <img
                    className="relative z-[1] w-full h-full object-cover object-center"
                    src={picture4}
                    alt="picture"
                  />
                </div>
                <div className="gc-icon">
                  <div className="gc-icon-pic overflow-hidden rounded-full w-16 h16 xl:w-12 xl:h-12 md:w-10 md:h-10">
                    <img
                      className="w-full h-full object-cover"
                      src={csgo}
                      alt="Counter-Strike GO"
                    />
                  </div>
                </div>
                <div className="gc-title">
                  <h3 className="font-secondary-bold text-2xl text-white xl:text-xl md:text-lg">
                    Counter-Strike GO
                  </h3>
                </div>
                <div className="gc-badges">
                  <div className="gc-badge-bar flex justify-end items-start flex-wrap gap-2">
                    <div className="gc-badge rounded-full py-2 px-5 h-auto inline-flex justify-center items-center font-secondary-bold text-xs text-white md:py-1 md:px-2 md:text-[10px] bg-gradient-primary">
                      new
                    </div>
                  </div>
                </div>
                <div className="gc-vplay cursor-pointer flex flex-col items-center">
                  <div className="gc-vplay-icon w-[42px] h-[42px] [&_svg]:w-full md:w-[44px] md:h-[44px]">
                    <svg
                      viewBox="0 0 42 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.4121 13.3373C33.9099 13.0602 34.5544 13.2306 34.8115 13.7376C36.436 16.9415 36.8127 20.6155 35.8492 24.0822C34.794 27.8791 32.2175 31.1163 28.6865 33.0817C25.1556 35.0471 20.9594 35.5797 17.0211 34.5624C13.4253 33.6335 10.3135 31.4819 8.24776 28.5236C7.92085 28.0554 8.09008 27.4322 8.58791 27.1551V27.1551C9.08573 26.878 9.72321 27.0524 10.0553 27.5171C11.8412 30.0159 14.4975 31.8327 17.5599 32.6238C20.9649 33.5034 24.5929 33.0429 27.6457 31.3437C30.6985 29.6444 32.9261 26.8455 33.8385 23.5628C34.659 20.6103 34.3553 17.484 33.0036 14.7436C32.7522 14.2339 32.9142 13.6144 33.4121 13.3373V13.3373Z"
                        fill="#E2E3F3"
                        fillOpacity="0.65"
                      />
                      <path
                        d="M33.4121 13.3373C33.9099 13.0602 34.5544 13.2306 34.8115 13.7376C36.436 16.9415 36.8127 20.6155 35.8492 24.0822C34.794 27.8791 32.2175 31.1163 28.6865 33.0817C25.1556 35.0471 20.9594 35.5797 17.0211 34.5624C13.4253 33.6335 10.3135 31.4819 8.24776 28.5236C7.92085 28.0554 8.09008 27.4322 8.58791 27.1551V27.1551C9.08573 26.878 9.72321 27.0524 10.0553 27.5171C11.8412 30.0159 14.4975 31.8327 17.5599 32.6238C20.9649 33.5034 24.5929 33.0429 27.6457 31.3437C30.6985 29.6444 32.9261 26.8455 33.8385 23.5628C34.659 20.6103 34.3553 17.484 33.0036 14.7436C32.7522 14.2339 32.9142 13.6144 33.4121 13.3373V13.3373Z"
                        fill="#E2E3F3"
                        fillOpacity="0.65"
                      />
                      <path
                        d="M6.1969 19.8531C5.60318 19.8531 5.11757 19.3711 5.1632 18.7791C5.43732 15.2227 7.06586 11.8625 9.77245 9.3244C12.7502 6.53201 16.7888 4.96326 20.9999 4.96326C25.2111 4.96326 29.2497 6.53201 32.2274 9.3244C34.934 11.8625 36.5626 15.2227 36.8367 18.7791C36.8823 19.3711 36.3967 19.8531 35.803 19.8531V19.8531C35.2093 19.8531 34.7329 19.3708 34.6801 18.7794C34.4106 15.7584 33.0104 12.91 30.7071 10.7501C28.1326 8.33583 24.6408 6.97951 20.9999 6.97951C17.359 6.97951 13.8673 8.33583 11.2928 10.7501C8.98952 12.91 7.58923 15.7584 7.31973 18.7794C7.26697 19.3708 6.79063 19.8531 6.1969 19.8531V19.8531Z"
                        fill="url(#paint0_linear_157_7320)"
                      />
                      <path
                        d="M21 33.7349C21 34.2917 20.5481 34.7462 19.9923 34.7131C16.149 34.484 12.5118 32.9507 9.77247 30.3819C6.79475 27.5895 5.12189 23.8022 5.12189 19.8532C5.12189 15.9041 6.79475 12.1168 9.77246 9.32444C12.5118 6.75561 16.149 5.22233 19.9923 4.99329C20.5481 4.96016 20.9999 5.41465 20.9999 5.97142V5.97142C20.9999 6.52819 20.548 6.97592 19.9926 7.01423C16.72 7.23991 13.6288 8.55952 11.2928 10.7501C8.71828 13.1644 7.27195 16.4389 7.27195 19.8532C7.27195 23.2675 8.71829 26.5419 11.2928 28.9562C13.6288 31.1468 16.72 32.4664 19.9926 32.6921C20.548 32.7304 21 33.1781 21 33.7349V33.7349Z"
                        fill="url(#paint1_linear_157_7320)"
                      />
                      <path
                        d="M28 20L17.5 26.0622L17.5 13.9378L28 20Z"
                        stroke="#D9D9D9"
                            strokeWidth={2}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_157_7320"
                          x1="29.6607"
                          y1="30.1407"
                          x2="14.533"
                          y2="8.63175"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#339CFC" />
                          <stop offset={1} stopColor="#0046D6" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_157_7320"
                          x1="12.3392"
                          y1="9.56562"
                          x2="27.4669"
                          y2="31.0745"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#339CFC" />
                          <stop offset={1} stopColor="#0046D6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="gc-vplay-label font-secondary-bold text-center text-[10px] text-white md:hidden">
                    Video
                  </div>
                </div>
                <div className="gc-tags-wrap">
                  <div className="gc-tags">
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Аккаунты
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Prime
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Скины
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Буст
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Обучение
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Прочее
                    </a>
                  </div>
                </div>
                <div className="gc-btn rounded-full border border-solid border-white w-[160px] h-11 flex items-center justify-between bg-transparent cursor-pointer md:w-full md:h-9">
                  <div className="gc-btn-label flex-grow px-2 font-secondary-bold text-center text-xs text-white">
                    Перейти
                  </div>
                  <button className="gc-btn-subbtn btn btn-secondary flex-shrink-0 relative right-[-2px] rounded-full w-11 h-11 justify-center md:w-9 md:h-9">
                    <div className="btn-icon text-white w-1/2 [&_svg]:w-full">
                      <svg
                        viewBox="0 0 20 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 0.871826C0.895431 0.871826 0 1.76726 0 2.87183C0 3.9764 0.895431 4.87183 2 4.87183C3.10457 4.87183 4 3.9764 4 2.87183C4 1.76726 3.10457 0.871826 2 0.871826Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 0.871826C8.89543 0.871826 8 1.76726 8 2.87183C8 3.9764 8.89543 4.87183 10 4.87183C11.1046 4.87183 12 3.9764 12 2.87183C12 1.76726 11.1046 0.871826 10 0.871826Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18 0.871826C16.8954 0.871826 16 1.76726 16 2.87183C16 3.9764 16.8954 4.87183 18 4.87183C19.1046 4.87183 20 3.9764 20 2.87183C20 1.76726 19.1046 0.871826 18 0.871826Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="gc relative overflow-hidden rounded-lg p-5 md:p-3">
                <div className="gc-bg absolute z-[1] top-0 left-0 w-full h-full">
                  <img
                    className="relative z-[1] w-full h-full object-cover object-center"
                    src={picture5}
                    alt="picture"
                  />
                </div>
                <div className="gc-icon">
                  <div className="gc-icon-pic overflow-hidden rounded-full w-16 h16 xl:w-12 xl:h-12 md:w-10 md:h-10">
                    <img
                      className="w-full h-full object-cover"
                      src={gta5}
                      alt="GTA V RP"
                    />
                  </div>
                </div>
                <div className="gc-title">
                  <h3 className="font-secondary-bold text-2xl text-white xl:text-xl md:text-lg">
                    GTA V RP
                  </h3>
                </div>
                <div className="gc-badges">
                  <div className="gc-badge-bar flex justify-end items-start flex-wrap gap-2">
                    <div className="gc-badge rounded-full py-2 px-5 h-auto inline-flex justify-center items-center font-secondary-bold text-xs text-white md:py-1 md:px-2 md:text-[10px] bg-gradient-primary">
                      new
                    </div>
                  </div>
                </div>
                <div className="gc-vplay cursor-pointer flex flex-col items-center">
                  <div className="gc-vplay-icon w-[42px] h-[42px] [&_svg]:w-full md:w-[44px] md:h-[44px]">
                    <svg
                      viewBox="0 0 42 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.4121 13.3373C33.9099 13.0602 34.5544 13.2306 34.8115 13.7376C36.436 16.9415 36.8127 20.6155 35.8492 24.0822C34.794 27.8791 32.2175 31.1163 28.6865 33.0817C25.1556 35.0471 20.9594 35.5797 17.0211 34.5624C13.4253 33.6335 10.3135 31.4819 8.24776 28.5236C7.92085 28.0554 8.09008 27.4322 8.58791 27.1551V27.1551C9.08573 26.878 9.72321 27.0524 10.0553 27.5171C11.8412 30.0159 14.4975 31.8327 17.5599 32.6238C20.9649 33.5034 24.5929 33.0429 27.6457 31.3437C30.6985 29.6444 32.9261 26.8455 33.8385 23.5628C34.659 20.6103 34.3553 17.484 33.0036 14.7436C32.7522 14.2339 32.9142 13.6144 33.4121 13.3373V13.3373Z"
                        fill="#E2E3F3"
                        fillOpacity="0.65"
                      />
                      <path
                        d="M33.4121 13.3373C33.9099 13.0602 34.5544 13.2306 34.8115 13.7376C36.436 16.9415 36.8127 20.6155 35.8492 24.0822C34.794 27.8791 32.2175 31.1163 28.6865 33.0817C25.1556 35.0471 20.9594 35.5797 17.0211 34.5624C13.4253 33.6335 10.3135 31.4819 8.24776 28.5236C7.92085 28.0554 8.09008 27.4322 8.58791 27.1551V27.1551C9.08573 26.878 9.72321 27.0524 10.0553 27.5171C11.8412 30.0159 14.4975 31.8327 17.5599 32.6238C20.9649 33.5034 24.5929 33.0429 27.6457 31.3437C30.6985 29.6444 32.9261 26.8455 33.8385 23.5628C34.659 20.6103 34.3553 17.484 33.0036 14.7436C32.7522 14.2339 32.9142 13.6144 33.4121 13.3373V13.3373Z"
                        fill="#E2E3F3"
                        fillOpacity="0.65"
                      />
                      <path
                        d="M6.1969 19.8531C5.60318 19.8531 5.11757 19.3711 5.1632 18.7791C5.43732 15.2227 7.06586 11.8625 9.77245 9.3244C12.7502 6.53201 16.7888 4.96326 20.9999 4.96326C25.2111 4.96326 29.2497 6.53201 32.2274 9.3244C34.934 11.8625 36.5626 15.2227 36.8367 18.7791C36.8823 19.3711 36.3967 19.8531 35.803 19.8531V19.8531C35.2093 19.8531 34.7329 19.3708 34.6801 18.7794C34.4106 15.7584 33.0104 12.91 30.7071 10.7501C28.1326 8.33583 24.6408 6.97951 20.9999 6.97951C17.359 6.97951 13.8673 8.33583 11.2928 10.7501C8.98952 12.91 7.58923 15.7584 7.31973 18.7794C7.26697 19.3708 6.79063 19.8531 6.1969 19.8531V19.8531Z"
                        fill="url(#paint0_linear_157_7320)"
                      />
                      <path
                        d="M21 33.7349C21 34.2917 20.5481 34.7462 19.9923 34.7131C16.149 34.484 12.5118 32.9507 9.77247 30.3819C6.79475 27.5895 5.12189 23.8022 5.12189 19.8532C5.12189 15.9041 6.79475 12.1168 9.77246 9.32444C12.5118 6.75561 16.149 5.22233 19.9923 4.99329C20.5481 4.96016 20.9999 5.41465 20.9999 5.97142V5.97142C20.9999 6.52819 20.548 6.97592 19.9926 7.01423C16.72 7.23991 13.6288 8.55952 11.2928 10.7501C8.71828 13.1644 7.27195 16.4389 7.27195 19.8532C7.27195 23.2675 8.71829 26.5419 11.2928 28.9562C13.6288 31.1468 16.72 32.4664 19.9926 32.6921C20.548 32.7304 21 33.1781 21 33.7349V33.7349Z"
                        fill="url(#paint1_linear_157_7320)"
                      />
                      <path
                        d="M28 20L17.5 26.0622L17.5 13.9378L28 20Z"
                        stroke="#D9D9D9"
                            strokeWidth={2}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_157_7320"
                          x1="29.6607"
                          y1="30.1407"
                          x2="14.533"
                          y2="8.63175"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#339CFC" />
                          <stop offset={1} stopColor="#0046D6" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_157_7320"
                          x1="12.3392"
                          y1="9.56562"
                          x2="27.4669"
                          y2="31.0745"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#339CFC" />
                          <stop offset={1} stopColor="#0046D6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="gc-vplay-label font-secondary-bold text-center text-[10px] text-white md:hidden">
                    Video
                  </div>
                </div>
                <div className="gc-tags-wrap">
                  <div className="gc-tags">
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Аккаунты
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Деньги
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Ключи
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Услуги
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Прочее
                    </a>
                  </div>
                </div>
                <div className="gc-btn rounded-full border border-solid border-white w-[160px] h-11 flex items-center justify-between bg-transparent cursor-pointer md:w-full md:h-9">
                  <div className="gc-btn-label flex-grow px-2 font-secondary-bold text-center text-xs text-white">
                    Перейти
                  </div>
                  <button className="gc-btn-subbtn btn btn-secondary flex-shrink-0 relative right-[-2px] rounded-full w-11 h-11 justify-center md:w-9 md:h-9">
                    <div className="btn-icon text-white w-1/2 [&_svg]:w-full">
                      <svg
                        viewBox="0 0 20 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 0.871826C0.895431 0.871826 0 1.76726 0 2.87183C0 3.9764 0.895431 4.87183 2 4.87183C3.10457 4.87183 4 3.9764 4 2.87183C4 1.76726 3.10457 0.871826 2 0.871826Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 0.871826C8.89543 0.871826 8 1.76726 8 2.87183C8 3.9764 8.89543 4.87183 10 4.87183C11.1046 4.87183 12 3.9764 12 2.87183C12 1.76726 11.1046 0.871826 10 0.871826Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18 0.871826C16.8954 0.871826 16 1.76726 16 2.87183C16 3.9764 16.8954 4.87183 18 4.87183C19.1046 4.87183 20 3.9764 20 2.87183C20 1.76726 19.1046 0.871826 18 0.871826Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="gc relative overflow-hidden rounded-lg p-5 md:p-3">
                <div className="gc-bg absolute z-[1] top-0 left-0 w-full h-full">
                  <img
                    className="relative z-[1] w-full h-full object-cover object-center"
                    src={picture6}
                    alt="picture"
                  />
                </div>
                <div className="gc-icon">
                  <div className="gc-icon-pic overflow-hidden rounded-full w-16 h16 xl:w-12 xl:h-12 md:w-10 md:h-10">
                    <img
                      className="w-full h-full object-cover"
                      src={fortnite}
                      alt="Fortnite"
                    />
                  </div>
                </div>
                <div className="gc-title">
                  <h3 className="font-secondary-bold text-2xl text-white xl:text-xl md:text-lg">
                    Fortnite
                  </h3>
                </div>
                <div className="gc-badges">
                  <div className="gc-badge-bar flex justify-end items-start flex-wrap gap-2">
                    <div className="gc-badge rounded-full py-2 px-5 h-auto inline-flex justify-center items-center font-secondary-bold text-xs text-white md:py-1 md:px-2 md:text-[10px] bg-gradient-primary">
                      new
                    </div>
                  </div>
                </div>
                <div className="gc-vplay cursor-pointer flex flex-col items-center">
                  <div className="gc-vplay-icon w-[42px] h-[42px] [&_svg]:w-full md:w-[44px] md:h-[44px]">
                    <svg
                      viewBox="0 0 42 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.4121 13.3373C33.9099 13.0602 34.5544 13.2306 34.8115 13.7376C36.436 16.9415 36.8127 20.6155 35.8492 24.0822C34.794 27.8791 32.2175 31.1163 28.6865 33.0817C25.1556 35.0471 20.9594 35.5797 17.0211 34.5624C13.4253 33.6335 10.3135 31.4819 8.24776 28.5236C7.92085 28.0554 8.09008 27.4322 8.58791 27.1551V27.1551C9.08573 26.878 9.72321 27.0524 10.0553 27.5171C11.8412 30.0159 14.4975 31.8327 17.5599 32.6238C20.9649 33.5034 24.5929 33.0429 27.6457 31.3437C30.6985 29.6444 32.9261 26.8455 33.8385 23.5628C34.659 20.6103 34.3553 17.484 33.0036 14.7436C32.7522 14.2339 32.9142 13.6144 33.4121 13.3373V13.3373Z"
                        fill="#E2E3F3"
                        fillOpacity="0.65"
                      />
                      <path
                        d="M33.4121 13.3373C33.9099 13.0602 34.5544 13.2306 34.8115 13.7376C36.436 16.9415 36.8127 20.6155 35.8492 24.0822C34.794 27.8791 32.2175 31.1163 28.6865 33.0817C25.1556 35.0471 20.9594 35.5797 17.0211 34.5624C13.4253 33.6335 10.3135 31.4819 8.24776 28.5236C7.92085 28.0554 8.09008 27.4322 8.58791 27.1551V27.1551C9.08573 26.878 9.72321 27.0524 10.0553 27.5171C11.8412 30.0159 14.4975 31.8327 17.5599 32.6238C20.9649 33.5034 24.5929 33.0429 27.6457 31.3437C30.6985 29.6444 32.9261 26.8455 33.8385 23.5628C34.659 20.6103 34.3553 17.484 33.0036 14.7436C32.7522 14.2339 32.9142 13.6144 33.4121 13.3373V13.3373Z"
                        fill="#E2E3F3"
                        fillOpacity="0.65"
                      />
                      <path
                        d="M6.1969 19.8531C5.60318 19.8531 5.11757 19.3711 5.1632 18.7791C5.43732 15.2227 7.06586 11.8625 9.77245 9.3244C12.7502 6.53201 16.7888 4.96326 20.9999 4.96326C25.2111 4.96326 29.2497 6.53201 32.2274 9.3244C34.934 11.8625 36.5626 15.2227 36.8367 18.7791C36.8823 19.3711 36.3967 19.8531 35.803 19.8531V19.8531C35.2093 19.8531 34.7329 19.3708 34.6801 18.7794C34.4106 15.7584 33.0104 12.91 30.7071 10.7501C28.1326 8.33583 24.6408 6.97951 20.9999 6.97951C17.359 6.97951 13.8673 8.33583 11.2928 10.7501C8.98952 12.91 7.58923 15.7584 7.31973 18.7794C7.26697 19.3708 6.79063 19.8531 6.1969 19.8531V19.8531Z"
                        fill="url(#paint0_linear_157_7320)"
                      />
                      <path
                        d="M21 33.7349C21 34.2917 20.5481 34.7462 19.9923 34.7131C16.149 34.484 12.5118 32.9507 9.77247 30.3819C6.79475 27.5895 5.12189 23.8022 5.12189 19.8532C5.12189 15.9041 6.79475 12.1168 9.77246 9.32444C12.5118 6.75561 16.149 5.22233 19.9923 4.99329C20.5481 4.96016 20.9999 5.41465 20.9999 5.97142V5.97142C20.9999 6.52819 20.548 6.97592 19.9926 7.01423C16.72 7.23991 13.6288 8.55952 11.2928 10.7501C8.71828 13.1644 7.27195 16.4389 7.27195 19.8532C7.27195 23.2675 8.71829 26.5419 11.2928 28.9562C13.6288 31.1468 16.72 32.4664 19.9926 32.6921C20.548 32.7304 21 33.1781 21 33.7349V33.7349Z"
                        fill="url(#paint1_linear_157_7320)"
                      />
                      <path
                        d="M28 20L17.5 26.0622L17.5 13.9378L28 20Z"
                        stroke="#D9D9D9"
                            strokeWidth={2}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_157_7320"
                          x1="29.6607"
                          y1="30.1407"
                          x2="14.533"
                          y2="8.63175"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#339CFC" />
                          <stop offset={1} stopColor="#0046D6" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_157_7320"
                          x1="12.3392"
                          y1="9.56562"
                          x2="27.4669"
                          y2="31.0745"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#339CFC" />
                          <stop offset={1} stopColor="#0046D6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="gc-vplay-label font-secondary-bold text-center text-[10px] text-white md:hidden">
                    Video
                  </div>
                </div>
                <div className="gc-tags-wrap">
                  <div className="gc-tags">
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Аккаунты
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Предметы
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Услуги
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      B-баксы
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Донат
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Прочее
                    </a>
                  </div>
                </div>
                <div className="gc-btn rounded-full border border-solid border-white w-[160px] h-11 flex items-center justify-between bg-transparent cursor-pointer md:w-full md:h-9">
                  <div className="gc-btn-label flex-grow px-2 font-secondary-bold text-center text-xs text-white">
                    Перейти
                  </div>
                  <button className="gc-btn-subbtn btn btn-secondary flex-shrink-0 relative right-[-2px] rounded-full w-11 h-11 justify-center md:w-9 md:h-9">
                    <div className="btn-icon text-white w-1/2 [&_svg]:w-full">
                      <svg
                        viewBox="0 0 20 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 0.871826C0.895431 0.871826 0 1.76726 0 2.87183C0 3.9764 0.895431 4.87183 2 4.87183C3.10457 4.87183 4 3.9764 4 2.87183C4 1.76726 3.10457 0.871826 2 0.871826Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 0.871826C8.89543 0.871826 8 1.76726 8 2.87183C8 3.9764 8.89543 4.87183 10 4.87183C11.1046 4.87183 12 3.9764 12 2.87183C12 1.76726 11.1046 0.871826 10 0.871826Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18 0.871826C16.8954 0.871826 16 1.76726 16 2.87183C16 3.9764 16.8954 4.87183 18 4.87183C19.1046 4.87183 20 3.9764 20 2.87183C20 1.76726 19.1046 0.871826 18 0.871826Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="gc relative overflow-hidden rounded-lg p-5 md:p-3">
                <div className="gc-bg absolute z-[1] top-0 left-0 w-full h-full">
                  <img
                    className="relative z-[1] w-full h-full object-cover object-center"
                    src={picture7}
                    alt="picture"
                  />
                </div>
                <div className="gc-icon">
                  <div className="gc-icon-pic overflow-hidden rounded-full w-16 h16 xl:w-12 xl:h-12 md:w-10 md:h-10">
                    <img
                      className="w-full h-full object-cover"
                      src={wot}
                      alt="World of Tanks"
                    />
                  </div>
                </div>
                <div className="gc-title">
                  <h3 className="font-secondary-bold text-2xl text-white xl:text-xl md:text-lg">
                    World of Tanks
                  </h3>
                </div>
                <div className="gc-badges">
                  <div className="gc-badge-bar flex justify-end items-start flex-wrap gap-2">
                    <div className="gc-badge rounded-full py-2 px-5 h-auto inline-flex justify-center items-center font-secondary-bold text-xs text-white md:py-1 md:px-2 md:text-[10px] bg-gradient-primary">
                      new
                    </div>
                  </div>
                </div>
                <div className="gc-vplay cursor-pointer flex flex-col items-center">
                  <div className="gc-vplay-icon w-[42px] h-[42px] [&_svg]:w-full md:w-[44px] md:h-[44px]">
                    <svg
                      viewBox="0 0 42 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.4121 13.3373C33.9099 13.0602 34.5544 13.2306 34.8115 13.7376C36.436 16.9415 36.8127 20.6155 35.8492 24.0822C34.794 27.8791 32.2175 31.1163 28.6865 33.0817C25.1556 35.0471 20.9594 35.5797 17.0211 34.5624C13.4253 33.6335 10.3135 31.4819 8.24776 28.5236C7.92085 28.0554 8.09008 27.4322 8.58791 27.1551V27.1551C9.08573 26.878 9.72321 27.0524 10.0553 27.5171C11.8412 30.0159 14.4975 31.8327 17.5599 32.6238C20.9649 33.5034 24.5929 33.0429 27.6457 31.3437C30.6985 29.6444 32.9261 26.8455 33.8385 23.5628C34.659 20.6103 34.3553 17.484 33.0036 14.7436C32.7522 14.2339 32.9142 13.6144 33.4121 13.3373V13.3373Z"
                        fill="#E2E3F3"
                        fillOpacity="0.65"
                      />
                      <path
                        d="M33.4121 13.3373C33.9099 13.0602 34.5544 13.2306 34.8115 13.7376C36.436 16.9415 36.8127 20.6155 35.8492 24.0822C34.794 27.8791 32.2175 31.1163 28.6865 33.0817C25.1556 35.0471 20.9594 35.5797 17.0211 34.5624C13.4253 33.6335 10.3135 31.4819 8.24776 28.5236C7.92085 28.0554 8.09008 27.4322 8.58791 27.1551V27.1551C9.08573 26.878 9.72321 27.0524 10.0553 27.5171C11.8412 30.0159 14.4975 31.8327 17.5599 32.6238C20.9649 33.5034 24.5929 33.0429 27.6457 31.3437C30.6985 29.6444 32.9261 26.8455 33.8385 23.5628C34.659 20.6103 34.3553 17.484 33.0036 14.7436C32.7522 14.2339 32.9142 13.6144 33.4121 13.3373V13.3373Z"
                        fill="#E2E3F3"
                        fillOpacity="0.65"
                      />
                      <path
                        d="M6.1969 19.8531C5.60318 19.8531 5.11757 19.3711 5.1632 18.7791C5.43732 15.2227 7.06586 11.8625 9.77245 9.3244C12.7502 6.53201 16.7888 4.96326 20.9999 4.96326C25.2111 4.96326 29.2497 6.53201 32.2274 9.3244C34.934 11.8625 36.5626 15.2227 36.8367 18.7791C36.8823 19.3711 36.3967 19.8531 35.803 19.8531V19.8531C35.2093 19.8531 34.7329 19.3708 34.6801 18.7794C34.4106 15.7584 33.0104 12.91 30.7071 10.7501C28.1326 8.33583 24.6408 6.97951 20.9999 6.97951C17.359 6.97951 13.8673 8.33583 11.2928 10.7501C8.98952 12.91 7.58923 15.7584 7.31973 18.7794C7.26697 19.3708 6.79063 19.8531 6.1969 19.8531V19.8531Z"
                        fill="url(#paint0_linear_157_7320)"
                      />
                      <path
                        d="M21 33.7349C21 34.2917 20.5481 34.7462 19.9923 34.7131C16.149 34.484 12.5118 32.9507 9.77247 30.3819C6.79475 27.5895 5.12189 23.8022 5.12189 19.8532C5.12189 15.9041 6.79475 12.1168 9.77246 9.32444C12.5118 6.75561 16.149 5.22233 19.9923 4.99329C20.5481 4.96016 20.9999 5.41465 20.9999 5.97142V5.97142C20.9999 6.52819 20.548 6.97592 19.9926 7.01423C16.72 7.23991 13.6288 8.55952 11.2928 10.7501C8.71828 13.1644 7.27195 16.4389 7.27195 19.8532C7.27195 23.2675 8.71829 26.5419 11.2928 28.9562C13.6288 31.1468 16.72 32.4664 19.9926 32.6921C20.548 32.7304 21 33.1781 21 33.7349V33.7349Z"
                        fill="url(#paint1_linear_157_7320)"
                      />
                      <path
                        d="M28 20L17.5 26.0622L17.5 13.9378L28 20Z"
                        stroke="#D9D9D9"
                            strokeWidth={2}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_157_7320"
                          x1="29.6607"
                          y1="30.1407"
                          x2="14.533"
                          y2="8.63175"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#339CFC" />
                          <stop offset={1} stopColor="#0046D6" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_157_7320"
                          x1="12.3392"
                          y1="9.56562"
                          x2="27.4669"
                          y2="31.0745"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#339CFC" />
                          <stop offset={1} stopColor="#0046D6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="gc-vplay-label font-secondary-bold text-center text-[10px] text-white md:hidden">
                    Video
                  </div>
                </div>
                <div className="gc-tags-wrap">
                  <div className="gc-tags">
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Аккаунты
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Бонус-коды
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Буст
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Фарм серебра
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Выполнение ЛБЗ
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Обучение
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Золото
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Кланы
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Донат
                    </a>
                    <a
                      className="gc-tags-item font-secondary-med text-sm text-white hover:text-white/75 md:text-xs"
                      href="#"
                    >
                      Прочее
                    </a>
                  </div>
                </div>
                <div className="gc-btn rounded-full border border-solid border-white w-[160px] h-11 flex items-center justify-between bg-transparent cursor-pointer md:w-full md:h-9">
                  <div className="gc-btn-label flex-grow px-2 font-secondary-bold text-center text-xs text-white">
                    Перейти
                  </div>
                  <button className="gc-btn-subbtn btn btn-secondary flex-shrink-0 relative right-[-2px] rounded-full w-11 h-11 justify-center md:w-9 md:h-9">
                    <div className="btn-icon text-white w-1/2 [&_svg]:w-full">
                      <svg
                        viewBox="0 0 20 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 0.871826C0.895431 0.871826 0 1.76726 0 2.87183C0 3.9764 0.895431 4.87183 2 4.87183C3.10457 4.87183 4 3.9764 4 2.87183C4 1.76726 3.10457 0.871826 2 0.871826Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 0.871826C8.89543 0.871826 8 1.76726 8 2.87183C8 3.9764 8.89543 4.87183 10 4.87183C11.1046 4.87183 12 3.9764 12 2.87183C12 1.76726 11.1046 0.871826 10 0.871826Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18 0.871826C16.8954 0.871826 16 1.76726 16 2.87183C16 3.9764 16.8954 4.87183 18 4.87183C19.1046 4.87183 20 3.9764 20 2.87183C20 1.76726 19.1046 0.871826 18 0.871826Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="sgc-f flex justify-center mt-10 lg:mt-5">
              <button className="sgc-btn-more rounded-full h-[60px] flex items-center justify-center px-12 bg-[#E3E9F5] duration-200 hover:bg-[#d3d7e0] lg:h-10 lg:px-5">
                <div className="btn-text font-secondary-bold text-base text-[#B9C3D6] lg:text-sm">
                  Показать еще 25
                </div>
              </button>
            </div>
          </div>
          <div className="layout-b-f flex justify-between mt-6 3sm:mt-3">
            <button className="layout-btn-totop scroll-to-top rounded-full w-16 h-16 flex items-center justify-center bg-[#D7DFF5] hover:bg-[#d0d8f3] shadow-2xl 3sm:w-11 3sm:h-11">
              <div className="btn-icon text-[#BDC6E0] w-1/2 h-1/2 [&_svg]:w-full [&_svg]:h-full">
                <svg
                  viewBox="0 0 16 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.70711 0.292648C8.31658 -0.0978756 7.68342 -0.0978756 7.29289 0.292648L0.928931 6.65661C0.538407 7.04713 0.538407 7.6803 0.928931 8.07082C1.31946 8.46135 1.95262 8.46135 2.34315 8.07082L8 2.41397L13.6569 8.07082C14.0474 8.46135 14.6805 8.46135 15.0711 8.07082C15.4616 7.6803 15.4616 7.04713 15.0711 6.65661L8.70711 0.292648ZM9 25.9998L9 0.999756L7 0.999756L7 25.9998L9 25.9998Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
            <button className="layout-btn-openchat open-fast-chat rounded-full rounded-br-none w-[65px] h-[65px] flex items-center justify-center bg-gradient-primary shadow-2xl 3sm:w-11 3sm:h-11">
              <div className="btn-icon text-[#BDC6E0] w-[22px] h-[19px] [&_svg]:w-full [&_svg]:h-full text-white">
                <svg
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.25657 0H17.802C19.3083 0 20.5293 1.4396 20.5293 3.21543V12.8617C20.5293 14.6376 19.3083 16.0772 17.802 16.0772H10.9838L8.89293 19.3569C8.6354 19.7617 8.23124 20 7.80202 20C7.37281 20 6.96864 19.7617 6.71112 19.3569L4.62021 16.0772H3.25657C1.75034 16.0772 0.529297 14.6376 0.529297 12.8617V3.21543C0.529297 1.4396 1.75034 0 3.25657 0ZM17.8022 13.9336C18.3043 13.9336 18.7113 13.4538 18.7113 12.8618V3.21551C18.7113 2.62356 18.3043 2.1437 17.8022 2.1437H3.25675C2.75467 2.1437 2.34766 2.62356 2.34766 3.21551V12.8618C2.34766 13.4538 2.75467 13.9336 3.25675 13.9336H5.52947L7.8022 17.5028L10.0749 13.9336H17.8022Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5.07511 6.43085H9.62056C10.1226 6.43085 10.5297 5.95099 10.5297 5.35904C10.5297 4.7671 10.1226 4.28723 9.62056 4.28723H5.07511C4.57303 4.28723 4.16602 4.7671 4.16602 5.35904C4.16602 5.95099 4.57303 6.43085 5.07511 6.43085Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15.0751 8.57446H5.07511C4.57303 8.57446 4.16602 9.05433 4.16602 9.64627C4.16602 10.2382 4.57303 10.7181 5.07511 10.7181H15.0751C15.5772 10.7181 15.9842 10.2382 15.9842 9.64627C15.9842 9.05433 15.5772 8.57446 15.0751 8.57446Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="fa-wrapper bg-white/30 top-0 left-0 min-h-screen h-full w-full absolute z-20">
          <div className="fa flex flex-col items-center bg-white h-full w-full max-w-[440px] float-right right-0 relative">
            <div className="fa-head relative w-full mb-[12px]">
              <div className="pc-plate-container">
                <div className="pc-plate bg-gradient-primary _shadow-primary py-1 px-6 3sm:px-2 3sm:py-[1px] rounded-b-[22px]">
                  Быстрый доступ
                </div>
              </div>
              <div className="fa-btn-close flex-shrink-0 w-4 h-4 [&_svg]:w-[100%] [&_svg]:h-[100%] text-[#D6D9EA] cursor-pointer float-right mr-[30px] mt-[30px] 2md:block">
                <svg
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.424023 17.576C-0.0462888 17.1028 -0.0462888 16.3387 0.424023 15.8656L15.8656 0.424038C16.1621 0.0778742 16.6275 -0.0729097 17.0706 0.0336795C17.5137 0.140269 17.8597 0.486241 17.9663 0.929353C18.0729 1.37247 17.9221 1.83793 17.5759 2.13438L2.13436 17.576C1.66124 18.0463 0.897141 18.0463 0.424023 17.576Z"
                    fill="currentColor"
                  />
                  <path
                    d="M0.424023 0.424023C0.897141 -0.0462888 1.66124 -0.0462888 2.13436 0.424023L17.5759 15.8656C17.9221 16.1621 18.0729 16.6275 17.9663 17.0706C17.8597 17.5137 17.5137 17.8597 17.0706 17.9663C16.6275 18.0729 16.1621 17.9221 15.8656 17.5759L0.424023 2.13436C-0.0462888 1.66124 -0.0462888 0.897141 0.424023 0.424023Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="tabs flex items-center font-primary-bold text-[14px] h-[54px] overflow-hidden flex-wrap text-[#8A98B3] p-[24px]">
              <button className="tabs-tab block uppercase mr-4 last:mr-0">
                <div className="tabs-tab-text text-black/90">
                  Чат с поддержкой
                </div>
                <div className="tabs-tab-line mt-1 mx-auto rounded-full w-full h-1 bg-gradient-primary" />
              </button>
              <button className="tabs-tab block uppercase mr-4 last:mr-0">
                <div className="tabs-tab-text text-[#8A98B3]">мои диалоги</div>
                <div className="tabs-tab-line mt-1 mx-auto rounded-full w-full h-1 false" />
              </button>
            </div>
            <div className="fa-content flex-grow w-full overflow-hidden">
              <div className="chat flex flex-col bg-white font-primary-med px-[22px] text-[#8FA0C3] w-full">
                <div className="chat-head-wrapper flex justify-between items-center text-[14px] mb-[22px]">
                  <div className="chat-head flex items-center">
                    <div className="chat-head-avatars flex">
                      <div className="fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative bg-white rounded-full p-[6px]">
                        <div className="fm-message-avatar flex-shrink-0 w-[40px] h-[40px] overflow-hidden rounded-full">
                          <img
                            className="sps-avatar-pic w-full h-full object-cover"
                            src={user}
                            alt="user"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="chat-head-user flex flex-col">
                      <div className="chat-head-username flex font-secondary-bold text-md text-black">
                        Support
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-messages flex flex-col flex-grow justify-end text-[12px]">
                  <div className="chat-message flex items-center max-w-[364px] chat-message-last false">
                    <div className="chat-message-user flex self-end">
                      <a
                        className="fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative bg-white rounded-full p-[6px]"
                        href="#"
                      >
                        <div className="fm-message-avatar flex-shrink-0 w-[40px] h-[40px] overflow-hidden rounded-full">
                          <img
                            className="sps-avatar-pic w-full h-full object-cover"
                            src={user}
                            alt="user"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="chat-message-content block items-end text-black p-[8px] text-[14px] break-words whitespace-pre-wrap rounded-[12px] relative">
                      Привет, как дела ?
                      <div className="chat-message-info flex items-center float-right bottom-0 ml-[4px] mr-[-4px] mt-[6px]">
                        <span className="chat-message-time text-[#8A959F] text-[12px] mr-[4px]">
                          22:03
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="chat-message flex items-center max-w-[364px] chat-message-first false">
                    <div className="chat-message-content block items-end text-black p-[8px] text-[14px] break-words whitespace-pre-wrap rounded-[12px] relative">
                      Привет, как дела ? ты когда решил покупать товар этот
                      будешь. Давай завтра вечером в 19:00 я готов продать дома
                      буду как раз и мы все сделаем с тобой
                      <div className="chat-message-info flex items-center float-right bottom-0 ml-[4px] mr-[-4px] mt-[6px]">
                        <span className="chat-message-time text-[#8A959F] text-[12px] mr-[4px]">
                          22:03
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="chat-message flex items-center max-w-[364px] chat-message-last false">
                    <div className="chat-message-user flex self-end">
                      <a
                        className="fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative bg-white rounded-full p-[6px]"
                        href="#"
                      >
                        <div className="fm-message-avatar flex-shrink-0 w-[40px] h-[40px] overflow-hidden rounded-full">
                          <img
                            className="sps-avatar-pic w-full h-full object-cover"
                            src={user}
                            alt="user"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="chat-message-content block items-end text-black p-[8px] text-[14px] break-words whitespace-pre-wrap rounded-[12px] relative">
                      Привет, как дела ?
                      <div className="chat-message-info flex items-center float-right bottom-0 ml-[4px] mr-[-4px] mt-[6px]">
                        <span className="chat-message-time text-[#8A959F] text-[12px] mr-[4px]">
                          22:03
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="chat-message flex items-center max-w-[364px] chat-message-last false">
                    <div className="chat-message-user flex self-end">
                      <a
                        className="fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative bg-white rounded-full p-[6px]"
                        href="#"
                      >
                        <div className="fm-message-avatar flex-shrink-0 w-[40px] h-[40px] overflow-hidden rounded-full">
                          <img
                            className="sps-avatar-pic w-full h-full object-cover"
                            src={user}
                            alt="user"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="chat-message-content block items-end text-black p-[8px] text-[14px] break-words whitespace-pre-wrap rounded-[12px] relative">
                      Привет, как дела ?
                      <div className="chat-message-info flex items-center float-right bottom-0 ml-[4px] mr-[-4px] mt-[6px]">
                        <span className="chat-message-time text-[#8A959F] text-[12px] mr-[4px]">
                          22:03
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="chat-message flex items-center max-w-[364px] chat-message-first chat-message-out">
                    <div className="chat-message-content block items-end text-black p-[8px] text-[14px] break-words whitespace-pre-wrap rounded-[12px] relative">
                      Привет, как дела ? ты когда решил покупать товар этот
                      будешь. Давай завтра вечером в 19:00 я готов продать дома
                      буду как раз и мы все сделаем с тобой
                      <div className="chat-message-info flex items-center float-right bottom-0 ml-[4px] mr-[-4px] mt-[6px]">
                        <span className="chat-message-time text-white text-[12px] mr-[4px]">
                          22:03
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={8}
                          viewBox="0 0 17 8"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.0616 0.284467C13.1937 0.440295 13.259 0.642692 13.2432 0.847126C13.2274 1.05156 13.1318 1.24129 12.9774 1.37456L5.63181 7.73729C5.25296 8.06325 4.68587 8.02555 4.35265 7.65225L1.14327 4.08819C0.958555 3.8838 0.895905 3.59546 0.97892 3.33181C1.06193 3.06815 1.278 2.86922 1.54573 2.80995C1.81346 2.75069 2.09218 2.84009 2.27689 3.04449L5.08797 6.13694L11.9816 0.176231C12.1389 0.0456458 12.3412 -0.0163417 12.5439 0.00396851C12.7466 0.0242787 12.9329 0.125214 13.0616 0.284467Z"
                            fill="#E7E7E7"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.7598 0.284467C16.8919 0.440295 16.9572 0.642692 16.9414 0.847126C16.9256 1.05156 16.8299 1.24129 16.6755 1.37456L9.32996 7.73729C8.95111 8.06325 8.07399 8.1106 7.74078 7.7373L6.40994 6.16377C6.22523 5.95938 6.32694 5.65431 6.40995 5.39065C6.49297 5.127 6.52521 5.06336 6.79294 5.0041C7.06067 4.94483 7.37418 4.7997 7.5589 5.0041L8.78613 6.13694L15.6798 0.176231C15.8371 0.0456458 16.0394 -0.0163417 16.2421 0.00396851C16.4447 0.0242787 16.631 0.125214 16.7598 0.284467Z"
                            fill="#E7E7E7"
                          />
                        </svg>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={19}
                        viewBox="0 0 15 19"
                        fill="none"
                      >
                        <path
                          d="M8.44287 0C8.44287 15 12.1095 17.3333 14.4429 19C6.44287 19 2.94287 14 0.942871 11.5L3.44287 7C3.44287 6.83333 6.44287 2.4 8.44287 0Z"
                          fill="#1F62EC"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="chat-message flex items-center max-w-[364px] chat-message-last chat-message-out">
                    <div className="chat-message-user flex self-end">
                      <a
                        className="fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative bg-white rounded-full p-[6px]"
                        href="#"
                      >
                        <div className="fm-message-avatar flex-shrink-0 w-[40px] h-[40px] overflow-hidden rounded-full">
                          <img
                            className="sps-avatar-pic w-full h-full object-cover"
                            src={user2}
                            alt="user"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="chat-message-content block items-end text-black p-[8px] text-[14px] break-words whitespace-pre-wrap rounded-[12px] relative">
                      Привет, как дела ?
                      <div className="chat-message-info flex items-center float-right bottom-0 ml-[4px] mr-[-4px] mt-[6px]">
                        <span className="chat-message-time text-white text-[12px] mr-[4px]">
                          22:03
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={8}
                          viewBox="0 0 17 8"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.0616 0.284467C13.1937 0.440295 13.259 0.642692 13.2432 0.847126C13.2274 1.05156 13.1318 1.24129 12.9774 1.37456L5.63181 7.73729C5.25296 8.06325 4.68587 8.02555 4.35265 7.65225L1.14327 4.08819C0.958555 3.8838 0.895905 3.59546 0.97892 3.33181C1.06193 3.06815 1.278 2.86922 1.54573 2.80995C1.81346 2.75069 2.09218 2.84009 2.27689 3.04449L5.08797 6.13694L11.9816 0.176231C12.1389 0.0456458 12.3412 -0.0163417 12.5439 0.00396851C12.7466 0.0242787 12.9329 0.125214 13.0616 0.284467Z"
                            fill="#E7E7E7"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.7598 0.284467C16.8919 0.440295 16.9572 0.642692 16.9414 0.847126C16.9256 1.05156 16.8299 1.24129 16.6755 1.37456L9.32996 7.73729C8.95111 8.06325 8.07399 8.1106 7.74078 7.7373L6.40994 6.16377C6.22523 5.95938 6.32694 5.65431 6.40995 5.39065C6.49297 5.127 6.52521 5.06336 6.79294 5.0041C7.06067 4.94483 7.37418 4.7997 7.5589 5.0041L8.78613 6.13694L15.6798 0.176231C15.8371 0.0456458 16.0394 -0.0163417 16.2421 0.00396851C16.4447 0.0242787 16.631 0.125214 16.7598 0.284467Z"
                            fill="#E7E7E7"
                          />
                        </svg>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={19}
                        viewBox="0 0 15 19"
                        fill="none"
                      >
                        <path
                          d="M8.44287 0C8.44287 15 12.1095 17.3333 14.4429 19C6.44287 19 2.94287 14 0.942871 11.5L3.44287 7C3.44287 6.83333 6.44287 2.4 8.44287 0Z"
                          fill="#1F62EC"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="chat-form flex flex-col mt-[24px]">
                  <div className="rating flex justify-center items-center w-full mx-auto mb-[24px]">
                    <span className="rating-star flex cursor-pointer mr-[5px] last:mr-0 rating-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={23}
                        height={22}
                        viewBox="0 0 23 22"
                        fill="none"
                      >
                        <path
                          d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z"
                          fill="#ECECEC"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_33_44806"
                            x1="-0.5"
                            y1="12.4138"
                            x2="23.5"
                            y2="12.4138"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FB9B41" />
                            <stop offset={1} stopColor="#F2B96D" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="rating-star flex cursor-pointer mr-[5px] last:mr-0 rating-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={23}
                        height={22}
                        viewBox="0 0 23 22"
                        fill="none"
                      >
                        <path
                          d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z"
                          fill="#ECECEC"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_33_44806"
                            x1="-0.5"
                            y1="12.4138"
                            x2="23.5"
                            y2="12.4138"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FB9B41" />
                            <stop offset={1} stopColor="#F2B96D" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="rating-star flex cursor-pointer mr-[5px] last:mr-0 rating-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={23}
                        height={22}
                        viewBox="0 0 23 22"
                        fill="none"
                      >
                        <path
                          d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z"
                          fill="#ECECEC"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_33_44806"
                            x1="-0.5"
                            y1="12.4138"
                            x2="23.5"
                            y2="12.4138"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FB9B41" />
                            <stop offset={1} stopColor="#F2B96D" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="rating-star flex cursor-pointer mr-[5px] last:mr-0 rating-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={23}
                        height={22}
                        viewBox="0 0 23 22"
                        fill="none"
                      >
                        <path
                          d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z"
                          fill="#ECECEC"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_33_44806"
                            x1="-0.5"
                            y1="12.4138"
                            x2="23.5"
                            y2="12.4138"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FB9B41" />
                            <stop offset={1} stopColor="#F2B96D" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="rating-star flex cursor-pointer mr-[5px] last:mr-0 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={23}
                        height={22}
                        viewBox="0 0 23 22"
                        fill="none"
                      >
                        <path
                          d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z"
                          fill="#ECECEC"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_33_44806"
                            x1="-0.5"
                            y1="12.4138"
                            x2="23.5"
                            y2="12.4138"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FB9B41" />
                            <stop offset={1} stopColor="#F2B96D" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="chat-tech-types no-scrollbar flex items-center mx-auto mb-[24px] px-[12px] max-w-[100%] font-secondary-med text-[14px] overflow-x-scroll">
                    <div className="chat-tech-types flex items-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black mr-[12px] py-[8px] px-[16px] rounded-full cursor-pointer">
                      Финансы
                    </div>
                    <div className="chat-tech-types flex items-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black mr-[12px] py-[8px] px-[16px] rounded-full cursor-pointer">
                      Сделка
                    </div>
                    <div className="chat-tech-types flex items-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black mr-[12px] py-[8px] px-[16px] rounded-full cursor-pointer">
                      Форум
                    </div>
                    <div className="chat-tech-types flex items-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black mr-[12px] py-[8px] px-[16px] rounded-full whitespace-nowrap cursor-pointer">
                      Нашел ошибку
                    </div>
                    <div className="chat-tech-types flex items-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black py-[8px] px-[16px] rounded-full cursor-pointer">
                      Другое
                    </div>
                  </div>
                  <div className="chat-input flex items-center bg-white font-secondary-med p-[16px] border border-[#E4E9F4] rounded-[12px] w-full">
                    <input
                      className="chat-input-input text-black w-full h-full outline-none placeholder:text-[#BAC9E5] text-[14px]"
                      placeholder="Вставьте содержимое товара..."
                    />
                    <button className="chat-input-btn flex-shrink-0 flex justify-center items-center w-[26px] h-[20px] mr-[24px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={26}
                        height={20}
                        viewBox="0 0 26 20"
                        fill="none"
                      >
                        <path
                          opacity="0.45"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M24.7514 3.62722L20.5503 3.53974L18.4953 0.562867C18.3774 0.390809 18.2172 0.249349 18.0289 0.151157C17.8406 0.0529645 17.6299 0.00106581 17.4157 0H8.6363C8.42208 0.00106581 8.21146 0.0529645 8.02313 0.151157C7.8348 0.249349 7.6746 0.390809 7.55678 0.562867L5.50177 3.53974L1.30065 3.62722C0.955697 3.62722 0.62485 3.75902 0.380931 3.99359C0.137012 4.22815 0 4.54628 0 4.87801V18.7492C0 19.0809 0.137012 19.3991 0.380931 19.6336C0.62485 19.8682 0.955697 20 1.30065 20H13.0065C13.3515 20 13.6823 19.8682 13.9262 19.6336C14.1701 19.3991 14.3072 19.0809 14.3072 18.7492V16.085C15.5332 15.7806 16.6018 15.0566 17.3125 14.0488C18.0231 13.0409 18.3272 11.8184 18.1676 10.6104C18.0081 9.40233 17.3959 8.29174 16.4457 7.48675C15.4956 6.68177 14.2728 6.23765 13.0065 6.23765C11.7402 6.23765 10.5174 6.68177 9.56729 7.48675C8.61716 8.29174 8.00494 9.40233 7.84538 10.6104C7.68583 11.8184 7.98987 13.0409 8.70056 14.0488C9.41126 15.0566 10.4798 15.7806 11.7059 16.085V17.4984H2.6013V6.07878L6.20409 6.00374C6.41389 5.99862 6.61928 5.94479 6.80274 5.84678C6.98619 5.74877 7.14226 5.60947 7.25762 5.44087L9.31267 2.48904H16.7004L18.7424 5.44087C18.8577 5.60947 19.0138 5.74877 19.1973 5.84678C19.3807 5.94479 19.5861 5.99862 19.7959 6.00374L23.3987 6.07878V17.4984H18.1961C17.8511 17.4984 17.5203 17.6302 17.2764 17.8648C17.0325 18.0994 16.8954 18.4175 16.8954 18.7492C16.8954 19.0809 17.0325 19.3991 17.2764 19.6336C17.5203 19.8682 17.8511 20 18.1961 20H24.6993C25.0443 20 25.3751 19.8682 25.6191 19.6336C25.863 19.3991 26 19.0809 26 18.7492V4.86556C25.9969 4.54449 25.8656 4.23684 25.6332 4.00634C25.4007 3.77583 25.085 3.64005 24.7514 3.62722ZM10.4442 11.2445C10.4442 10.7498 10.5968 10.2661 10.8826 9.85472C11.1685 9.44334 11.5747 9.12269 12.05 8.93335C12.5254 8.74402 13.0484 8.69453 13.553 8.79105C14.0576 8.88758 14.5211 9.12583 14.8849 9.47569C15.2487 9.82553 15.4965 10.2712 15.5969 10.7565C15.6972 11.2417 15.6457 11.7447 15.4488 12.2018C15.2519 12.6589 14.9185 13.0497 14.4907 13.3245C14.063 13.5994 13.56 13.7461 13.0455 13.7461C12.3556 13.7461 11.694 13.4825 11.2061 13.0134C10.7183 12.5442 10.4442 11.908 10.4442 11.2445Z"
                          fill="#AFB8CC"
                        />
                      </svg>
                    </button>
                    <button className="chat-input-btn flex-shrink-0 flex justify-center items-center w-[w-22px] h-[20px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={20}
                        viewBox="0 0 22 20"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21.2954 8.88263L1.88775 0.115735C1.66621 0.0165446 1.42026 -0.019988 1.1782 0.0103992C0.936147 0.0407864 0.707896 0.136965 0.519832 0.287575C0.331769 0.438186 0.191524 0.637181 0.115349 0.861649C0.0391743 1.08612 0.0302038 1.32682 0.0893681 1.55604L1.38321 6.5657C1.46728 6.88789 1.68012 7.16457 1.97493 7.33485C2.26974 7.50513 2.62233 7.55505 2.95518 7.47367C3.28803 7.39229 3.57386 7.18634 3.74977 6.90097C3.92569 6.6156 3.97725 6.27422 3.89318 5.95203L3.25921 3.4472L17.6985 9.97223L3.37569 16.4473L4.91537 11.2246H9.1074C9.45055 11.2246 9.77962 11.0927 10.0223 10.8579C10.2649 10.623 10.4012 10.3044 10.4012 9.97223C10.4012 9.64007 10.2649 9.3216 10.0223 9.08673C9.77962 8.85186 9.45055 8.71981 9.1074 8.71981H3.93204C3.64164 8.70942 3.35604 8.79398 3.12133 8.95984C2.88662 9.12569 2.71646 9.36315 2.6382 9.63405L0.050515 18.4009C-0.01842 18.6327 -0.0167635 18.8789 0.0552532 19.1097C0.12727 19.3406 0.266586 19.5462 0.456499 19.7023C0.646411 19.8583 0.878839 19.9581 1.12585 19.9894C1.37285 20.0207 1.62395 19.9823 1.84897 19.8789L21.2566 11.112C21.4789 11.0108 21.6668 10.8505 21.7985 10.6498C21.9301 10.4491 22 10.2162 22 9.97849C22 9.74075 21.9301 9.5079 21.7985 9.30719C21.6668 9.10648 21.4789 8.94632 21.2566 8.84518L21.2954 8.88263Z"
                          fill="url(#paint0_linear_94_50409)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_94_50409"
                            x1="-8.19564e-08"
                            y1={10}
                            x2={22}
                            y2={10}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#8CD23C" />
                            <stop offset={1} stopColor="#417A00" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer flex justify-between items-center flex-wrap gap-8 text-sm py-10 px-20 3xl:px-10 2md:flex-col 2md:p-5 2md:gap-4 2md:text-center">
      <div className="footer-copy max-w-sm 2md:max-w-none 2md:order-1 2md:text-xs ">
        1paid.ru — Маркетплейс по продажам цифровых товаров. © 2023, Все права
        защищены.
      </div>
      <div className="footer-list flex flex-wrap gap-x-8 gap-y-2.5 2md:flex-col">
        <a className="hover:text-white duration-200" href="#">
          Пользовательское соглашение
        </a>
        <a className="hover:text-white duration-200" href="#">
          Контакты
        </a>
        <a className="hover:text-white duration-200" href="#">
          Частые вопросы
        </a>
      </div>
      <div className="footer-soc flex gap-5 2md:flex-wrap 2md:justify-center">
        <a className="shrink-0 leading-none duration-200" href="#">
          <img
            className="footer-soc-icon"
            src={instagram}
            alt="instagram"
          />
        </a>
        <a className="shrink-0 leading-none duration-200" href="#">
          <img
            className="footer-soc-icon"
            src={discrod}
            alt="discrod"
          />
        </a>
        <a className="shrink-0 leading-none duration-200" href="#">
          <img
            className="footer-soc-icon"
            src={vk}
            alt="vk"
          />
        </a>
        <a className="shrink-0 leading-none duration-200" href="#">
          <img
            className="footer-soc-icon"
            src={youtube}
            alt="youtube"
          />
        </a>
      </div>
    </footer>
  </div>
  <div className="mmenu pt-8 pb-8 px-12">
    <div className="mmenu-close flex-shrink-0 w-[50px] h-[50px] flex justify-center items-center flex-col gap-4 cursor-pointer">
      <span className="w-[30px] h-[3px] bg-white rounded-full" />
      <span className="w-[30px] h-[3px] bg-white rounded-full" />
    </div>
    <div className="mmenu-nav flex gap-x-4">
      <nav className="nav flex gap-x-5 gap-y-5 flex-wrap mx-4 3xl:gap-x-2.5 lg:flex-col lg:items-start lg:gap-y-8">
        <a
          className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30"
          href="#"
        >
          Главная
        </a>
        <a
          className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30"
          href="#"
        >
          Каталог
        </a>
        <a
          className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30"
          href="#"
        >
          Топ юзеров
        </a>
        <a
          className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30"
          href="#"
        >
          Отзывы
        </a>
        <a
          className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30"
          href="#"
        >
          Гарантии
        </a>
        <a
          className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30"
          href="#"
        >
          Случайные предметы
        </a>
        <a
          className="nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white/30"
          href="#"
        >
          Форум
        </a>
      </nav>
    </div>
    <div className="mmenu-pnav pt-8 max-w-[400px]">
      <div className="navpin">
        <a
          className="navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4"
          href="#"
        >
          <div className="navpin-plate">
            <img
              className="navpin-plate-pic"
              src={logo}
              alt="dots"
            />
            <img
              className="navpin-plate__dots-1"
              src={dots}
              alt="dots"
            />
            <img
              className="navpin-plate__dots-2"
              src={dots}
              alt="dots"
            />
            <div className="navpin-plate-icon">
              <svg
                width={30}
                height={30}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.0161 24.9999C23.5605 24.9999 24.8125 23.728 24.8125 22.159C24.8125 20.59 23.5605 19.3181 22.0161 19.3181C20.4717 19.3181 19.2197 20.59 19.2197 22.159C19.2197 23.728 20.4717 24.9999 22.0161 24.9999ZM22.016 22.7272C21.7096 22.7211 21.4627 22.4702 21.4568 22.159C21.4568 21.8452 21.7071 21.5908 22.016 21.5908C22.3249 21.5908 22.5753 21.8452 22.5753 22.159C22.5753 22.4728 22.3249 22.7272 22.016 22.7272Z"
                  fill="currentColor"
                />
                <path
                  d="M24.8111 16.3636C25.4289 16.3636 25.9297 16.8724 25.9297 17.5C25.9297 18.1276 25.4289 18.6364 24.8111 18.6364H14.5092L13.0327 24.1591C12.869 24.7647 12.2531 25.1209 11.6569 24.9545C11.0608 24.7882 10.7102 24.1625 10.8739 23.5568L12.1938 18.6364H10.4489C9.83296 18.6382 9.29627 18.2104 9.15135 17.6023L6.60105 7.27273H4.11785C3.50009 7.27273 2.9993 6.76396 2.9993 6.13636C2.9993 5.50877 3.50009 5 4.11785 5H7.30574C7.92026 5.00231 8.45475 5.42829 8.60326 6.03409L11.1424 16.3636H24.8111Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.0735 15.2273C24.7097 15.2307 25.2608 14.7799 25.3934 14.1477L26.9705 6.64773C27.0548 6.24596 26.9562 5.82701 26.7023 5.50732C26.4484 5.18763 26.0662 5.00126 25.6618 5H11.6463C11.2459 5.00801 10.8699 5.19724 10.6211 5.51602C10.3722 5.83479 10.2765 6.24981 10.36 6.64773L11.9371 14.1477C12.0697 14.7799 12.6208 15.2307 13.257 15.2273H24.0735ZM13.9618 12.9545L12.7649 7.27268H24.5545L23.3577 12.9545H13.9618Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="navpin-text text-sm uppercase ml-7 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs">
            Продать товар
          </div>
        </a>
        <a
          className="navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4"
          href="#"
        >
          <div className="navpin-plate">
            <img
              className="navpin-plate-pic"
              src={logo}
              alt="dots"
            />
            <img
              className="navpin-plate__dots-1"
              src={dots}
              alt="dots"
            />
            <img
              className="navpin-plate__dots-2"
              src={dots}
              alt="dots"
            />
            <div className="navpin-plate-icon">
              <svg
                width={30}
                height={30}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.1525 16.8475L15.1525 21.8475L10.1525 16.8475L7.3125 14.0075C5.93178 12.6268 5.93178 10.3882 7.3125 9.0075C8.69321 7.62679 10.9318 7.62679 12.3125 9.0075L15.1525 11.8675L17.9925 9.0275C19.3732 7.64679 21.6118 7.64679 22.9925 9.0275C24.3732 10.4082 24.3732 12.6468 22.9925 14.0275L20.1525 16.8475ZM13.7525 7.6175C11.5958 5.46083 8.09917 5.46083 5.9425 7.6175C3.78582 9.77418 3.78582 13.2708 5.9425 15.4275L7.3625 16.8475L15.1525 24.6575L22.9625 16.8475L24.3825 15.4275C26.5392 13.2708 26.5392 9.77418 24.3825 7.6175C22.2258 5.46083 18.7292 5.46083 16.5725 7.6175L15.1525 9.0375L13.7525 7.6175Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="navpin-text text-sm uppercase ml-7 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs">
            Закладки
          </div>
        </a>
        <a
          className="navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4"
          href="#"
        >
          <div className="navpin-plate">
            <img
              className="navpin-plate-pic"
              src={logo}
              alt="dots"
            />
            <img
              className="navpin-plate__dots-1"
              src={dots}
              alt="dots"
            />
            <img
              className="navpin-plate__dots-2"
              src={dots}
              alt="dots"
            />
            <div className="navpin-plate-icon">
              <svg
                width={30}
                height={30}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23 16C24.6569 16 26 14.6569 26 13V9C26 7.34315 24.6569 6 23 6H19C17.3431 6 16 7.34315 16 9V13C16 14.6569 17.3431 16 19 16H23ZM24 13C24 13.5523 23.5523 14 23 14H19C18.4477 14 18 13.5523 18 13V9C18 8.44772 18.4477 8 19 8H23C23.5523 8 24 8.44772 24 9V13Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 16C12.6569 16 14 14.6569 14 13V9C14 7.34315 12.6569 6 11 6H7C5.34315 6 4 7.34315 4 9V13C4 14.6569 5.34315 16 7 16H11ZM12 13C12 13.5523 11.5523 14 11 14H7C6.44772 14 6 13.5523 6 13V9C6 8.44772 6.44772 8 7 8H11C11.5523 8 12 8.44772 12 9V13Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25 19C25 18.4477 24.5523 18 24 18H18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20H24C24.5523 20 25 19.5523 25 19Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25 23C25 22.4477 24.5523 22 24 22H20C19.4477 22 19 22.4477 19 23C19 23.5523 19.4477 24 20 24H24C24.5523 24 25 23.5523 25 23Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 19C13 18.4477 12.5523 18 12 18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H12C12.5523 20 13 19.5523 13 19Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 23C13 22.4477 12.5523 22 12 22H8C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24H12C12.5523 24 13 23.5523 13 23Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="navpin-text text-sm uppercase ml-7 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs">
            История просмотра
          </div>
        </a>
        <a
          className="navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4"
          href="#"
        >
          <div className="navpin-plate">
            <img
              className="navpin-plate-pic"
              src={logo}
              alt="dots"
            />
            <img
              className="navpin-plate__dots-1"
              src={dots}
              alt="dots"
            />
            <img
              className="navpin-plate__dots-2"
              src={dots}
              alt="dots"
            />
            <div className="navpin-plate-icon">
              <svg
                width={30}
                height={30}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 4H9C8.20435 4 7.44129 4.31607 6.87868 4.87868C6.31607 5.44129 6 6.20435 6 7V24.8C6.00064 25.2303 6.25209 25.6207 6.64357 25.7992C7.03506 25.9777 7.4947 25.9116 7.82 25.63L10.5 23.33L13.29 25.72C13.6649 26.0427 14.2091 26.0754 14.62 25.8L18.42 23.26L21.18 25.63C21.5053 25.9116 21.9649 25.9777 22.3564 25.7992C22.7479 25.6207 22.9994 25.2303 23 24.8V7C23 5.34315 21.6569 4 20 4ZM9.78 21.3L8 22.83V7C8 6.44772 8.44771 6 9 6H20C20.5523 6 21 6.44772 21 7V22.84L19.21 21.29C18.8337 20.9706 18.2918 20.938 17.88 21.21L14.08 23.75L11.22 21.3C10.8036 20.9505 10.1964 20.9505 9.78 21.3Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 4H9C8.20435 4 7.44129 4.31607 6.87868 4.87868C6.31607 5.44129 6 6.20435 6 7V24.8C6.00064 25.2303 6.25209 25.6207 6.64357 25.7992C7.03506 25.9777 7.4947 25.9116 7.82 25.63L10.5 23.33L13.29 25.72C13.6649 26.0427 14.2091 26.0754 14.62 25.8L18.42 23.26L21.18 25.63C21.5053 25.9116 21.9649 25.9777 22.3564 25.7992C22.7479 25.6207 22.9994 25.2303 23 24.8V7C23 5.34315 21.6569 4 20 4ZM9.78 21.3L8 22.83V7C8 6.44772 8.44771 6 9 6H20C20.5523 6 21 6.44772 21 7V22.84L19.21 21.29C18.8337 20.9706 18.2918 20.938 17.88 21.21L14.08 23.75L11.22 21.3C10.8036 20.9505 10.1964 20.9505 9.78 21.3Z"
                  fill="currentColor"
                />
                <path
                  d="M19 10H12C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10Z"
                  fill="currentColor"
                />
                <path
                  d="M19 10H12C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10Z"
                  fill="currentColor"
                />
                <path
                  d="M19 14H15C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14Z"
                  fill="currentColor"
                />
                <path
                  d="M19 14H15C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14Z"
                  fill="currentColor"
                />
                <path
                  d="M11 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H11C10.4477 18 10 17.5523 10 17C10 16.4477 10.4477 16 11 16Z"
                  fill="currentColor"
                />
                <path
                  d="M11 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H11C10.4477 18 10 17.5523 10 17C10 16.4477 10.4477 16 11 16Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="navpin-text text-sm uppercase ml-7 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs">
            История покупок и продаж
          </div>
        </a>
      </div>
    </div>
  </div>
</>

  );
}

export default MainPage;