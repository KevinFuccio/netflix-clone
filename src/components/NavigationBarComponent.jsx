import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const NavigationBar = () =>{
    return (
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{backgroundColor: "#221f1f"}}
        >
          <Link className="navbar-brand" to="/">
            <img src={logo} style={{width: "100px", height: "55px"}} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link font-weight-bold" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link font-weight-bold" to="/tv-shows">
                  TV Shows
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold" href="#">
                  Recently Added
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold" href="#">
                  My List
                </a>
              </li>
            </ul>
            <i className="fa fa-search icons"></i>
            <div id="kids">KIDS</div>
            <i className="fa fa-bell icons"></i>
            <i className="fa fa-user icons"></i>
          </div>
        </nav>
    );
  }


export default NavigationBar;
