import { useState, useEffect } from 'react';
import uuid from 'react-uuid';

function Navigation(props) {
    const [link, setLink] = useState(['nav-link-prim', 'nav-link', 'nav-link', 'nav-link', 'nav-link']);
    
    const clickLink = (index) => {
        props.clickNav(index);
        const newLink = link.map((item, i) => {
            if(i === index) {
                return 'nav-link-prim';
            } else {
                return 'nav-link';
            }
        });

        setLink(newLink);
    };

    useEffect(() => {
    }, [link]);

    return (
        <div className="flex items-start w-full py-4 justify-between rounded-lg bg-white px-4 sm:px-6 mb-3 sm:mb-5">
            <div className='nav-show pt-2 h-full w-full flex items-center justify-start'>
                <nav className='nav-item pb-2.5 flex gap-4 sm:gap-6 flex-wrap'>
                    {
                        (props.navArr.length !== 0) ? (
                            props.navArr.map((item, index) => (
                                <button  onClick={() => clickLink(index)} key={uuid()} className={`${link[index]} bg-inherit nav-link-tab font-primary-bold text-xs sm:text-sm text-[#8A98B3] uppercase`}>{item}</button> 
                                ))
                        ) : null
                    }
                </nav>
            </div>
        </div>               
    );
};

export default Navigation;