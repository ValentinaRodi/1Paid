import { useState, useEffect } from 'react';
import LifeFeedItem from './lifeFeedItem/LifeFeedItem';
import uuid from 'react-uuid';

function LayoutColRow(props) {
    const [components, setComponents] = useState([]);
    const [shifted, setShifted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(1);
    const slider = document.getElementById("slider");

    const arr = [
        {
            "id": 1,
            "img_card": "case-blue.6568b466.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 2,
            "img_card": "case-violet.2050f5bf.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 3,
            "img_card": "case-pink.17c520f2.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 4,
            "img_card": "case-gold.dea4179e.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 5,
            "img_card": "case-blue.6568b466.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 6,
            "img_card": "case-violet.2050f5bf.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 7,
            "img_card": "case-pink.17c520f2.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 8,
            "img_card": "case-gold.dea4179e.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 9,
            "img_card": "case-blue.6568b466.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 10,
            "img_card": "case-violet.2050f5bf.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 11,
            "img_card": "case-pink.17c520f2.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 12,
            "img_card": "case-gold.dea4179e.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 13,
            "img_card": "case-blue.6568b466.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 14,
            "img_card": "case-violet.2050f5bf.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 15,
            "img_card": "case-pink.17c520f2.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 16,
            "img_card": "case-gold.dea4179e.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        }
    ];

    useEffect(() => {
        setComponents(arr);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            // перемещаем последний элемент на первое место
            const shiftedItem = components.pop();
            setComponents([shiftedItem, ...components]);
            setShifted(true);
        }, Math.floor(Math.random() * 3000 + 2000)); // через каждые 2-4 секунды

        return () => clearTimeout(timer); // очищаем таймер при размонтировании компонента
    }, [components]);

    const customStyle = {
        '--shifted': shifted ? '-100%' : '-',
        '--translate': components[components.length - 1] && components[components.length - 1].length * 200 + 'px'
    };
   
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
                    <div id="slider" className="lf-feed-track slider-lite">
                        {
                            (components.length !== 0) ? (
                                components.map((component) => (
                                    <LifeFeedItem key={uuid()} imgCard={component.img_card} imgAvatar={component.img_avatar} name={component.name}/>  
                                ))
                            ) : (<div></div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LayoutColRow;
