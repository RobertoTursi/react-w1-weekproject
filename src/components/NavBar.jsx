import { Component } from "react";
import { Nav } from "react-bootstrap";

class NavBar extends Component {
    render() {
        return(
            <>
                <Nav className="navbar navbar-expand-lg navbar-dark" style= {{backgroundColor: "#221f1f"}}>
        <a className="navbar-brand" href="#top">
          <img src="assets/logo.png" style= {{width: "100px", height: "55px"}} alt="" />
        </a>
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#top"
                >Home <span className="sr-only">(current)</span></a
              >
            </li>
            <li className="nav-item active">
              <a className="nav-link font-weight-bold" href="#top">TV Shows</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#top">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#top">Recently Added</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#top">My List</a>
            </li>
          </ul>
          <i className="fa fa-search icons"></i>
          <div id="kids">KIDS</div>
          <i className="fa fa-bell icons"></i>
          <i className="fa fa-user icons"></i>
        </div>
      </Nav>
            </>
        )
    }
}

export default NavBar