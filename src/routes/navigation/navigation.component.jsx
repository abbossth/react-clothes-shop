import "./navigation.styles.scss";
import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useState } from "react";


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const [showCartDropdown, setShowCardDropdown] = useState(false)

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          {
            currentUser ? <span className="nav-link" onClick={signOutUser} >SING OUT</span> : <Link to="/auth" className="nav-link">
            Sign In 
          </Link>
          }
          <CartIcon onClick={() => setShowCardDropdown(!showCartDropdown)}></CartIcon>
        </div>
        {
          showCartDropdown ? <CartDropdown></CartDropdown> : null 
        }
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
