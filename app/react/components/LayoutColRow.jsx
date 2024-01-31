import { useState, useEffect } from 'react';

function LayoutColRow(props) {
    const [orient, setOrient] = useState('');
    const layoutPage = document.getElementById('layout-page');

    const changeOrient = () => {
        console.log('orient',orient)
        console.log('layoutPage',layoutPage)
        
        // if(orient === '') {
        //     layoutPage.classList.add('_lf-row');
        //     setOrient('_lf-row');
        // } else {
        //     layoutPage.classList.remove('_lf-row');
        //     setOrient('');
        // }
        
    }
    
    return (
        <div className='layout-lf'>
            <div className={`lf ${props.orient}`}>
                <div className="lf-h">
                    <div className="lf-bar">
                        <div className="lf-inf">
                            <div className="lf-inf-ind">
                                <div className="lf-inf-ind-point"></div>
                            </div>
                            <div className="lf-inf-inner">
                                <div className="lf-inf-ind-value">2 381</div>
                                <div className="lf-inf-ind-label">Online</div>
                            </div>
                        </div>
                        <button onClick={props.changeOrient} className="lf-toggle bg-inherit" title="Переключить вид">
                            <svg width="4" height="22" viewBox="0 0 4 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2" cy="20" r="2" transform="rotate(-90 2 20)" fill="currentColor"></circle>
                                <circle cx="2" cy="11" r="2" transform="rotate(-90 2 11)" fill="currentColor"></circle>
                                <circle cx="2" cy="2" r="2" transform="rotate(-90 2 2)" fill="currentColor"></circle>
                            </svg>
                        </button>
                    </div>
                    <div className="lf-change">
                        <label className="lf-change-item">
                            <input type="radio" name="lf_type" value="1" defaultChecked/>
                            <div className="lf-change-btn">
                                <div className="lf-change-icon">
                                    <img src="/img/icon-tsc-item-btn-2.svg" alt="lf-change-icon"/>
                                </div>
                            </div>
                        </label>
                        <label className="lf-change-item">
                            <input type="radio" name="lf_type" value="1"/>
                            <div className="lf-change-btn">
                                <div className="lf-change-icon">
                                    <img src="/img/icon-lf-change-icon-2.svg" alt="lf-change-icon"/>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="lf-feed">
                    <div className="lf-feed-track">
                        <div className="lf-item">
                            <img className="lf-item-pic" src="/img/case-blue.6568b466.png" alt="case"/>
                            <div className="lf-item-plate relative">
                                <div className="lf-item-avatar">
                                    <img src="/img/avatar-example-1.efb6cc72.png" alt="case"/>
                                </div>
                                <div className="lf-item-name" title="Santcese">Santcese</div>
                            </div>
                            <div className='lf-item-div absolute z-10 w-[20px] h-[20px] rounded-full bg-inherit bottom-[3px] left-[7.2px] shadow-[0px_5px_25px_0px_#74809A]'></div>
                        </div>
                        <div className="lf-item">
                            <img className="lf-item-pic" src="/img/case-violet.2050f5bf.png" alt="case"/>
                            <div className="lf-item-plate relative">
                                <div className="lf-item-avatar">
                                    <img src="/img/avatar-example-1.efb6cc72.png" alt="case"/>
                                </div>
                                <div className="lf-item-name" title="Santcese">Santcese</div>
                            </div>
                            <div className='lf-item-div absolute z-10 w-[20px] h-[20px] rounded-full bg-inherit bottom-[3px] left-[7.2px] shadow-[0px_5px_25px_0px_#74809A]'></div>
                        </div>
                        <div className="lf-item">
                            <img className="lf-item-pic" src="/img/case-pink.17c520f2.png" alt="case"/>
                            <div className="lf-item-plate relative">
                                <div className="lf-item-avatar">
                                    <img src="/img/avatar-example-1.efb6cc72.png" alt="case"/>
                                </div>
                                <div className="lf-item-name" title="Santcese">Santcese</div>
                            </div>
                            <div className='lf-item-div absolute z-10 w-[20px] h-[20px] rounded-full bg-inherit bottom-[3px] left-[7.2px] shadow-[0px_5px_25px_0px_#74809A]'></div>
                        </div>
                        <div className="lf-item">
                            <img className="lf-item-pic" src="/img/case-gold.dea4179e.png" alt="case"/>
                            <div className="lf-item-plate relative">
                                <div className="lf-item-avatar">
                                    <img src="/img/avatar-example-1.efb6cc72.png" alt="case"/>
                                </div>
                                <div className="lf-item-name" title="Santcese">Santcese</div>
                            </div>
                            <div className='lf-item-div absolute z-10 w-[20px] h-[20px] rounded-full bg-inherit bottom-[3px] left-[7.2px] shadow-[0px_5px_25px_0px_#74809A]'></div>
                        </div>
                        <div className="lf-item">
                            <img className="lf-item-pic" src="/img/case-blue.6568b466.png" alt="case"/>
                            <div className="lf-item-plate relative">
                                <div className="lf-item-avatar">
                                    <img src="/img/avatar-example-1.efb6cc72.png" alt="case"/>
                                </div>
                                <div className="lf-item-name" title="Santcese">Santcese</div>
                            </div>
                            <div className='lf-item-div absolute z-10 w-[20px] h-[20px] rounded-full bg-inherit bottom-[3px] left-[7.2px] shadow-[0px_5px_25px_0px_#74809A]'></div>
                        </div>
                        <div className="lf-item">
                            <img className="lf-item-pic" src="/img/case-violet.2050f5bf.png" alt="case"/>
                            <div className="lf-item-plate relative">
                                <div className="lf-item-avatar">
                                    <img src="/img/avatar-example-1.efb6cc72.png" alt="case"/>
                                </div>
                                <div className="lf-item-name" title="Santcese">Santcese</div>
                            </div>
                            <div className='lf-item-div absolute z-10 w-[20px] h-[20px] rounded-full bg-inherit bottom-[3px] left-[7.2px] shadow-[0px_5px_25px_0px_#74809A]'></div>
                        </div>
                        <div className="lf-item">
                            <img className="lf-item-pic" src="/img/case-pink.17c520f2.png" alt="case"/>
                            <div className="lf-item-plate relative">
                                <div className="lf-item-avatar">
                                    <img src="/img/avatar-example-1.efb6cc72.png" alt="case"/>
                                </div>
                                <div className="lf-item-name" title="Santcese">Santcese</div>
                            </div>
                            <div className='lf-item-div absolute z-10 w-[20px] h-[20px] rounded-full bg-inherit bottom-[3px] left-[7.2px] shadow-[0px_5px_25px_0px_#74809A]'></div>
                        </div>
                        <div className="lf-item">
                            <img className="lf-item-pic" src="/img/case-gold.dea4179e.png" alt="case"/>
                            <div className="lf-item-plate relative">
                                <div className="lf-item-avatar">
                                    <img src="/img/avatar-example-1.efb6cc72.png" alt="case"/>
                                </div>
                                <div className="lf-item-name" title="Santcese">Santcese</div>
                            </div>
                            <div className='lf-item-div absolute z-10 w-[20px] h-[20px] rounded-full bg-inherit bottom-[3px] left-[7.2px] shadow-[0px_5px_25px_0px_#74809A]'></div>
                        </div>
                        <div className="lf-item">
                            <img className="lf-item-pic" src="/img/case-blue.6568b466.png" alt="case"/>
                            <div className="lf-item-plate relative">
                                <div className="lf-item-avatar">
                                    <img src="/img/avatar-example-1.efb6cc72.png" alt="case"/>
                                </div>
                                <div className="lf-item-name" title="Santcese">Santcese</div>
                            </div>
                            <div className='lf-item-div absolute z-10 w-[20px] h-[20px] rounded-full bg-inherit bottom-[3px] left-[7.2px] shadow-[0px_5px_25px_0px_#74809A]'></div>
                        </div>
                        <div className="lf-item">
                            <img className="lf-item-pic" src="/img/case-violet.2050f5bf.png" alt="case"/>
                            <div className="lf-item-plate relative">
                                <div className="lf-item-avatar">
                                    <img src="/img/avatar-example-1.efb6cc72.png" alt="case"/>
                                </div>
                                <div className="lf-item-name" title="Santcese">Santcese</div>
                            </div>
                            <div className='lf-item-div absolute z-10 w-[20px] h-[20px] rounded-full bg-inherit bottom-[3px] left-[7.2px] shadow-[0px_5px_25px_0px_#74809A]'></div>
                        </div>
                        <div className="lf-item">
                            <img className="lf-item-pic" src="/img/case-pink.17c520f2.png" alt="case"/>
                            <div className="lf-item-plate relative">
                                <div className="lf-item-avatar">
                                    <img src="/img/avatar-example-1.efb6cc72.png" alt="case"/>
                                </div>
                                <div className="lf-item-name" title="Santcese">Santcese</div>
                            </div>
                            <div className='lf-item-div absolute z-10 w-[20px] h-[20px] rounded-full bg-inherit bottom-[3px] left-[7.2px] shadow-[0px_5px_25px_0px_#74809A]'></div>
                        </div>
                        <div className="lf-item">
                            <img className="lf-item-pic" src="/img/case-gold.dea4179e.png" alt="case"/>
                            <div className="lf-item-plate relative">
                                <div className="lf-item-avatar">
                                    <img src="/img/avatar-example-1.efb6cc72.png" alt="case"/>
                                </div>
                                <div className="lf-item-name" title="Santcese">Santcese</div>
                            </div>
                            <div className='lf-item-div absolute z-10 w-[20px] h-[20px] rounded-full bg-inherit bottom-[3px] left-[7.2px] shadow-[0px_5px_25px_0px_#74809A]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LayoutColRow;
