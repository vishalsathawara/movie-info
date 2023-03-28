import react from "react";

import Logo from "../../Logo.png"
import { Link } from "react-router-dom"
import { ImSearch } from "react-icons/im"
import LogoSec from "../../LogoSec.jpeg"
const Header = () => {
  return (
    <>
      

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  
             <img className="navbar-brand rounded-circle" width="70" height="70" src={LogoSec} alt="logo" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
            <Link className="nav-link h5"  to="/" >Home</Link>
      </li>
      <li className="nav-item">
              <Link className="nav-link h5" to="/recent" >Recently Added</Link>
      </li>
      <li className="nav-item">
           <Link className="nav-link h5" to="/serch"> Serch Movies <ImSearch/> </Link>
      </li>
    </ul>
    
  </div>
</nav>
    </>
  )
}

export default Header; 