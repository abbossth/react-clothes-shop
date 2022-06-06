import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom'

import "./navigation.styles.scss"

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link to='/' className="logo-container">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link to='/home' className="nav-link">
                        HOME
                    </Link>
                    <Link to='/shop' className="nav-link">
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );  
};

export default Navigation;