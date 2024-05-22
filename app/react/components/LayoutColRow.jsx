import { useState, useEffect, useRef } from 'react';
import LifeFeedItem from './lifeFeedItem/LifeFeedItem';
import uuid from 'react-uuid';

function LayoutColRow(props) {
    const [components, setComponents] = useState([]);
    const [shifted, setShifted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const tape = document.getElementById("tape");
    const parentBlock = useRef();
    const [checked, setChecked] = useState(true);

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
        },
        {
            "id": 17,
            "img_card": "case-blue.6568b466.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 18,
            "img_card": "case-violet.2050f5bf.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 19,
            "img_card": "case-pink.17c520f2.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 20,
            "img_card": "case-gold.dea4179e.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 21,
            "img_card": "case-blue.6568b466.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 22,
            "img_card": "case-violet.2050f5bf.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 23,
            "img_card": "case-pink.17c520f2.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 24,
            "img_card": "case-gold.dea4179e.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 25,
            "img_card": "case-blue.6568b466.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 26,
            "img_card": "case-violet.2050f5bf.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 27,
            "img_card": "case-pink.17c520f2.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 28,
            "img_card": "case-gold.dea4179e.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 29,
            "img_card": "case-blue.6568b466.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 30,
            "img_card": "case-violet.2050f5bf.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 31,
            "img_card": "case-pink.17c520f2.png",
            "img_avatar": "avatar-example-1.efb6cc72.png",
            "name": "Santcese"
        },
        {
            "id": 32,
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
            //смещаем ленту
            tape.firstChild.classList.add("slider-transform");
            setShifted(true); 

            setTimeout(() => {
                //перемещаем последний элемент на первое место
                const shiftedItem = components.pop();
                setComponents([shiftedItem, ...components]);
            }, 500); 
        }, Math.floor(Math.random() * 3000 + 3000));

        return () => clearTimeout(timer); // очищаем таймер при размонтировании компонента
    }, [components]);

    //высчитываем высоту ленты по высоте контента
    useEffect(() => {
        const headerHeight = document.querySelector('.layout-h').getBoundingClientRect().height;
        const mainHeight = document.querySelector('.layout-main').getBoundingClientRect().height;
        const totalHeight = headerHeight + mainHeight;
        document.querySelector('.lf-feed').style.height = totalHeight + "px";
    }, []);

    const deleteHeightBlock = () => {
        document.querySelector('.lf-feed').style.height = 100 + '%';
    };

    const changeCheck = () => {
        setChecked(!checked);
    };

    return (
        <div className='layout-lf'>
            <div className={`lf ${props.orient}`}>
                <div className="lf-h">
                    <div className="lf-bar">
                        <div className="lf-inf">
                            <div className="lf-inf-ind relative z-10">
                                <div className="lf-inf-ind-point pulse z-20"></div>
                            </div>
                            <div className="lf-inf-inner">
                                <div className="lf-inf-ind-value">2 381</div>
                                <div className="lf-inf-ind-label">Online</div>
                            </div>
                        </div>
                        <button onClick={() => {props.changeOrient(); deleteHeightBlock()}} className="lf-toggle bg-inherit" title="Переключить вид">
                            <svg width="4" height="22" viewBox="0 0 4 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2" cy="20" r="2" transform="rotate(-90 2 20)" fill="currentColor"></circle>
                                <circle cx="2" cy="11" r="2" transform="rotate(-90 2 11)" fill="currentColor"></circle>
                                <circle cx="2" cy="2" r="2" transform="rotate(-90 2 2)" fill="currentColor"></circle>
                            </svg>
                        </button>
                    </div>
                    <div className="lf-change">
                        <label className="lf-change-item">
                            <input type="radio" name="lf_type" value="1" onChange={changeCheck} checked={(checked) ? "checked" : ""} />
                            <div className="lf-change-btn">
                                <div className="lf-change-icon">
                                    <img src="/img/icon-tsc-item-btn-2.svg" alt="lf-change-icon"/>
                                </div>
                            </div>
                        </label>
                        <label className="lf-change-item">
                            <input type="radio" name="lf_type" value="1" onChange={changeCheck} checked={(checked) ? "" : "checked"}/>
                            <div className="lf-change-btn">
                                <div className="lf-change-icon">
                                    <img src="/img/icon-lf-change-icon-2.svg" alt="lf-change-icon"/>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="lf-feed">
                    <div id="tape" ref={parentBlock} className="lf-feed-track slider-lite">
                        {checked ?
                            (components.length !== 0) ? (
                                components.map(component => (
                                    <LifeFeedItem key={uuid()} id={component.id} tovar='true' imgCard='product-preview-1.fcb96f91.png' imgAvatar={component.img_avatar} name={component.name}/>  
                                ))
                            ) : (<div></div>)
                            :
                            (components.length !== 0) ? (
                                components.map(component => (
                                    <LifeFeedItem key={uuid()} id={component.id}  imgCard={component.img_card} imgAvatar={component.img_avatar} name={component.name}/>  
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
