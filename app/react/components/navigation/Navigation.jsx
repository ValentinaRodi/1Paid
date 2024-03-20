import { useState, useEffect } from 'react';
import uuid from 'react-uuid';

function Navigation(props) {
    const [link, setLink] = useState(['nav-link-prim', 'nav-link', 'nav-link', 'nav-link', 'nav-link']);
    
    const clickLink = (index) => {
        const newLink = link.map((item, i) => {
            if(i === index) {
                return 'nav-link-prim';
            } else {
                return 'nav-link';
            }
        });

        setLink(newLink);

        props.clickRoulette(index);
    };

    useEffect(() => {
    }, [link]);

    return (
        <div className="flex items-start py-4 justify-between rounded-lg bg-white px-6 mb-5">
            <div className='nav-show pt-2 h-full w-full flex items-center justify-start'>
                <nav className='nav-item pb-2.5 flex gap-x-6 flex-wrap gap-y-6'>
                    {
                        (props.navArr.length !== 0) ? (
                            props.navArr.map((item, index) => (
                                <button  onClick={() => clickLink(index)} key={uuid()} className={`${link[index]} bg-inherit nav-link-tab font-primary-bold text-sm text-[#8A98B3] uppercase`}>{item}</button> 
                                ))
                        ) : (<div className='text-[#FF5343]'>not found</div>)
                    }
                </nav>
            </div>
        </div>               
    );
};

export default Navigation;