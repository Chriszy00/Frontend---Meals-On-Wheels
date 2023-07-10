import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../assets/images/merryOnwheels (2).png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, // Initially assume user is not logged in
      roleName: "", // Initially set role as an empty string
    };
  }

  componentDidMount() {
    // Check if user is logged in by checking localStorage or session storage
    const isLoggedIn = localStorage.getItem("auth") !== null;
    const roleName = localStorage.getItem("roleName") || ""; // Get the role from localStorage
    this.setState({ isLoggedIn, roleName });
  }

  handleLogout = () => {
    localStorage.removeItem("auth"); // Remove the 'auth' key from localStorage
    localStorage.removeItem("accessToken"); // Remove the 'accessToken' key from localStorage
    localStorage.removeItem("roleName"); // Remove the 'role' key from localStorage
    window.location.href = "/";
  };

  render() {
    const { isLoggedIn, roleName } = this.state;

    return (
      <nav className="navbar navbar-expand-lg fixed-top text-uppercase custom-font-header " id="mainNav">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={companyLogo}
              alt="Know Your Neighborhood Logo"
              className="me-2"
              style={{ width: "150px", height: "auto" }}
            />
          </Link>
          <button
            className="navbar-toggler text-uppercase font-weight-bold bg-white text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              {!isLoggedIn && (
                <>
                  <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/login" className="nav-link py-3 px-0 px-lg-3 rounded text-white">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/register" className="nav-link py-3 px-0 px-lg-3 rounded text-white">
                      Register
                    </Link>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <>
                  {roleName === "MEMBER" && (
                    <>
                      <li className="nav-item mx-0 mx-lg-1">
                        <Link to="/member/dashboard" className="nav-link py-3 px-0 px-lg-3 rounded text-white">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item mx-0 mx-lg-1">
                        <Link to="/member/search" className="nav-link py-3 px-0 px-lg-3 rounded text-white">
                          Search
                        </Link>
                      </li>
                      <li className="nav-item mx-0 mx-lg-1">
                        <Link to="/donor/funds" className="nav-link py-3 px-0 px-lg-3 rounded text-white">
                          Donate
                        </Link>
                      </li>
                    </>
                  )}
                  <li className="nav-item mx-0 mx-lg-1">
                    <button
                      className="nav-link btn border-0 mt-2 px-0 px-lg-3 rounded text-uppercase text-white"
                      onClick={this.handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
