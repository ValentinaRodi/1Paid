import "./leftBar.css";
import cases from "../../assets/images/avatar-example-1.efb6cc72.png";
import cases2 from "../../assets/images/case-blue.6568b466.png";
import cases3 from "../../assets/images/case-violet.2050f5bf.png";
import cases4 from "../../assets/images/case-pink.17c520f2.png";
import cases5 from "../../assets/images/case-gold.dea4179e.png";

function LeftBar() {
    return (
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
    )
    
}

export default LeftBar;