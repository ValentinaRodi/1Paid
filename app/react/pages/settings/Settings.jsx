import spsAvatar from "../../../../web/img/avatar-example-5.00d4721a.png";
import puicImage from "../../../../web/img/achievements-example.7996faae.png";
import puicImage2 from "../../../../web/img/icon-shopping-card-gradient.ff3dca76.svg";
import spfRating from "../../../../web/img/icon-spf-rating-icon.svg";
import fbcAvatar from "../../../../web/img/avatar-example-4.6cd623f4.png";
import { useState, useEffect } from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom";

import LeftMenu from '../../components/leftMenu/LeftMenu';
import LayoutColRow from '../../components/LayoutColRow';
import Content from '../content/Content';
import Registration from '../../components/registration/Registration';
import Authorization from "../../components/authorization/Authorization";
import RecPass from '../../components/recpass/Recpass';
import HeaderMain from '../../components/headerMain/HeaderMain';

function Settings() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [orient, setOrient] = useState('');
    const [name, setName] = useState('');
    const [balance, setBalance] = useState('');
    const [bonus, setBonus] = useState('');
    const [avatar, setAvatar] = useState('');
    const location = useLocation();

    const changeOrient = () => {
        if(orient === '') {
            setOrient('_lf-row');
        } else {
            setOrient('');
        }
    }
    
    useEffect(() => {

        fetch("/profile/edit", {
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
        })
        .catch((error) => {
            console.log(error);
        });

        let loggedInUser = localStorage.getItem('logged');

        if (loggedInUser === null) {
            window.location = '/';  
        }

        if (loggedInUser) {
            setLoggedIn(true);
            setName(localStorage.getItem('name'));
            setBalance(localStorage.getItem('balance'));
            setBonus(localStorage.getItem('bonus'));
            
            if(localStorage.getItem('avatar') !== 'null') {
                setAvatar(localStorage.getItem('avatar'))
            };
        }

    }, [loggedIn]);
    
    return (
        <div className={`layout-grid ${orient}`}>
           <LeftMenu /> 
           <div id='layout-page' className={`layout-page ${orient}`}>
                <LayoutColRow changeOrient={changeOrient} orient={orient}/>
                <HeaderMain />
                <div className="layout-b pb-4 px-9 3xl:px-4 min-w-0 sm:px-3">
                    
                </div>
           </div>
        </div>
    )
}

export default Settings;
