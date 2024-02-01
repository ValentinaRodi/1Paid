import { useState, useEffect } from 'react';
import Cards from '../../components/cards/Cards';
import Catalog from '../../components/catalog/Catalog';
import Prsl from '../../components/prsl/Prsl';
import LayoutBtn from '../../components/LayoutBtn';

function Content(props) {
    const [catalog, setCatalog] = useState(false);

    // window.onpopstate = function() {
    //     setCatalog(false);
    // };

    const replaceCatalog = () => {
        
        fetch("/catalog/Warface", {
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
            console.log('data', data);
            //window.location.reload();
        })
        .catch((error) => {
            console.log(error);
            setErrorMessage("An error occurred");
        });
       
        // setCatalog(true);
        // history.pushState(null, null, '/catalog');
    }

    const clickCateg = (item) => {
        setCatalog(true);
        history.pushState(null, null, '/catalog');
        console.log(item.target.textContent)
    }

    // useEffect(() => {
        
    // }, [catalog]);

    return (
        <div className={`${props.orient} layout-b pb-4 min-w-0`}>
            {(!catalog && !props.profile)  ?
                <div>
                    <Prsl />
                    <div className="sh flex justify-between items-center gap-x-3 mt-8 xl:mt-16 mb-10">
                        <div className="w-[252px] hidden">
                            <img src="/img/icon-btn-13.svg" alt="btn-icon" className=""/>
                        </div>
                        <div className="sh-title ">
                            <div >
                                <h2 className="sh-title-text font-secondary-bold text-bold text-2xl text-black">Выбор игры</h2>
                                <div className="sh-title-line mt-2 rounded-full w-9 h-1 2md:mt-2 bg-gradient-primary">
                                </div>
                            </div>
                        </div>
                        <div className="sh-bar flex items-center gap-2 2md:w-full 2md:flex-row-reverse">
                            <div className="sh-search rounded-full h-[50px] px-6 max-w-[270px] w-full flex items-center bg-[#E8EAF7] 2md:max-w-none 2md:flex-grow 2md:h-10 2md:px-3">
                                <button className="sh-search-icon bg-inherit flex-shrink-0 w-4 h-full [&amp;_svg]:w-full flex justify-center items-center text-[#B8BACF] duration-100 hover:text-black">
                                    <img src="/img/icon-sh-search-icon.svg" alt="sh-search-icon"/>
                                </button>
                                <input className="sh-search-input flex-grow ml-2.5 w-full h-full bg-transparent font-primary-med text-base text-black 2md:text-sm" placeholder="Поиск"/>
                            </div>
                        </div>
                    </div>
                    <Cards replaceCatalog={replaceCatalog} clickCateg={clickCateg}/>
                    <LayoutBtn />
                </div>
            :
                <div>
                    <Catalog />
                </div>
            }       
        </div>  
    );
}

export default Content;

