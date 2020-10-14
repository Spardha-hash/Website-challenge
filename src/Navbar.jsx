import React from "react";
import { NavLink } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";
const Navbar = () => {
    return(
        <>
    <div className="container-fluid nav_bg">
        <div className = 'row'>
            <div className = "col-12 mx-auto" >
                <nav className="navbar navbar-inverse navbar-static-top navbar-expand-lg navbar-light bg-light">
            <img src={process.env.PUBLIC_URL + "images/on-juno@2x.png"} alt="" width="160px" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="#" style={{ color : "#f79eec"}}>Home</ NavLink>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Company <FaAngleDown />
                    </ NavLink>
                    
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" to="#">Action</NavLink>
                    <NavLink className="dropdown-item" to="#">Another action</NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                    </div>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Learn <FaAngleDown />
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" to="#">Action </ NavLink>
                    <NavLink className="dropdown-item" to="#">Another action</NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                    </div>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Legal <FaAngleDown />
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" to="#">Action</ NavLink>
                    <NavLink className="dropdown-item" to="#">Another action</ NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                    </div>
                </li>
                </ul>
                <button type="button" className="btn btn-primary" style={ {width : "120px", fontWeight : "bold", borderRadius : "12px",background:"white",color:"blue", border:"2px solid"} }>Login</button>
                &nbsp;&nbsp;
                &nbsp;&nbsp;
                <button type="button" className="btn btn-primary" style={ {width : "120px", fontWeight : "bold", borderRadius : "12px"} }>Sign up</button>
                
            </div>
            </nav>
            </div>
        </div>
    </div>
        </>
    );
};

export default Navbar;