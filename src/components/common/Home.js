import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/home.css";
import home1 from "../../assets/images/home2 (1).png";
import home2 from "../../assets/images/home3 (1).png";
import home3 from "../../assets/images/home1.png";
import { notification } from "antd";

class Home extends Component {
  handleDonateClick = () => {
    const isLoggedIn = false; // Check if the user is logged in
    if (!isLoggedIn) {
      notification.warning({
        message: "Donate",
        description: "Register or Login to donate.",
      });
    } else {
      // Proceed to the assigned link when the user is logged in
      this.props.history.push("/donor/funds");
    }
  };

  handleOrderClick = () => {
    const isLoggedIn = false; // Check if the user is logged in
    if (!isLoggedIn) {
      notification.warning({
        message: "Order",
        description: "Register or Login to order.",
      });
    } else {
      // Proceed to the assigned link when the user is logged in
      this.props.history.push("/member/menu");
    }
  };

  handleVolunteerClick = () => {
    const isLoggedIn = false; // Check if the user is logged in
    if (!isLoggedIn) {
      notification.warning({
        message: "Volunteer",
        description: "Register or Login to be a volunteer.",
      });
    } else {
      // Proceed to the assigned link when the user is logged in
      this.props.history.push("/register");
    }
  };

  render() {
    return (
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <div className="homebanner">
          <div className="container bannerdivouter">
            <div className="bannerdiv">
              <h1 className="bannerMaintext">
                Nourishing Hearts, One MerryMeal At A Time
              </h1>
              {/* <div>
                <button className='btn'>Donate</button>
                <button className='btn'>Order</button>
              </div> */}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="bannerbelow">
            <div className="bannerbelow1 bannerbelowchild shadow">
              <p className="bannerbelowhead">Total Funds Raised</p>
              <h3 className="bannerbelowtext">$400,000</h3>
            </div>
            <div className="bannerbelow2  bannerbelowchild shadow">
              <p className="bannerbelowhead">With over Donors</p>
              <h3 className="bannerbelowtext">1,200+</h3>
            </div>
            <div className="bannerbelow3 bannerbelowchild shadow">
              <p className="bannerbelowhead">Fed Adults</p>
              <h3 className="bannerbelowtext">10,000+</h3>
            </div>
          </div>
        </div>

        <div className="container choicesCont">
          <div className="row">
            <div className="col-4">
              <div
                className="choice1 shadow-lg"
                onClick={this.handleDonateClick}
              >
                <Link to="/register">
                  <h3 className="choiceName choiceName1">Donate Now</h3>
                </Link>
              </div>
            </div>

            <div className="col-4">
              <div
                className="choice2 shadow-lg"
                onClick={this.handleOrderClick}
              >
                <Link to="/register">
                  <h3 className="choiceName choiceName2">Order Now</h3>
                </Link>
              </div>
            </div>

            <div className="col-4">
              <div
                className="choice3 shadow-lg"
                onClick={this.handleVolunteerClick}
              >
                <Link to="/register">
                  <h3 className="choiceName choiceName3">Be a Volunteer</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mealsonwheelscont">
          <div className="mealsonwheels">
            <div className="mealsonwheels1">
              <img src={home3} className="homeimg1 shadow" alt="Home 3" />
              <div>
                <h1 className="mealsonwheelsHead">MerryMeals</h1>
                <p className="mealsonwheelsDesc mb-4">
                  Welcome to MerryMeal, a compassionate organization dedicated
                  to nourishing the lives of adults in need. Our mission is to
                  deliver hot, nutritious meals to those unable to cook or
                  maintain their nutrition due to age, disease, or disability.
                  We understand the challenges they face and are committed to
                  making a positive impact.
                </p>
                <button className="btn readmorebtn">Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container homerow2">
          <div className="row">
            <div className="col-6">
              <h1 className="text-right nourish2">
                Nourishing Communities with Every Penny
              </h1>
            </div>
            <div className="col-3 piccol1 piccol11">
              <img src={home1} className="homepic1" alt="Home 1" />
            </div>
            <div className="col-3 piccol1 piccol12">
              <img src={home2} className="homepic2" alt="Home 2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
