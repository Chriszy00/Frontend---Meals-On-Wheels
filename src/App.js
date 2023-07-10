import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";

import Menu from "./components/meal/Menu";
import Partner from "./components/users/Partner";
import Home from "./components/common/Home";
import Rider from "./components/users/Rider";
import Location from "./components/common/Location";
import Donor from "./components/users/Donor";
import Funds from "./components/donation/Dashboard";
import DonationForm from "./components/donation/Donate";
import MealDetails from "./components/meal/MealDetails";
import AddMeal from "./components/meal/AddMeal";
import Login from "./components/common/Login";
import Registration from "./components/common/register";
import Search from "./components/common/Search";
import TC from "./components/common/Terms&Conditions";
import Admin from "./components/users/Admin";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import About from "./components/common/About";
import Contact from "./components/common/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      order: [],
      partnerId: null,
    };
  }

  handleLogin = (partnerId) => {
    this.setState({ partnerId });
  };

  // componentDidMount() {
  // this.fetchMenu();
  // }

  // fetchMenu = async () => {
  // try {
  // const response = await axios.get("http://localhost:8080/api/menu");
  // const menu = response.data;
  // this.setState({ menu });
  // } catch (error) {
  // console.error("Failed to fetch menu:", error);
  // }
  // };

  render() {
    const { partnerId, menu, order } = this.state;

    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route
            path="/member/dashboard"
            element={
              <div>
                <Header />
                <Home />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route
            path="/preparation/partner/:partnerId"
            element={
              <div>
                <Header />
                <Partner partnerId={partnerId} />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route
            path="/partner/dashboard"
            element={
              <div>
                <Header />
                <Partner />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route
            path="/member/menu"
            element={
              <div>
                <Header />
                <Menu menu={menu} />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route
            path="/member/mealdetails/:id"
            element={
              <div>
                <Header />
                <MealDetails />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route
            path="/rider/dashboard"
            element={
              <div>
                <Header />
                <Rider />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route
            path="/donor/donate"
            element={
              <div>
                <Header />
                <DonationForm />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route
            path="/admin/donors"
            element={
              <div>
                <Header />
                <Donor />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route
            path="/donor/funds"
            element={
              <div>
                <Header />
                <Funds />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route
            path="/member/search"
            element={
              <div>
                <Header />
                <Search />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route
            path="/member/location"
            element={
              <div>
                <Header />
                <Location />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route
            path="/member/tc"
            element={
              <div>
                <Header />
                <TC />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route
            path="/aboutus"
            element={
              <div>
                <Header />
                <About />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route
            path="/contactus"
            element={
              <div>
                <Header />
                <Contact/>
                {/* <Footer /> */}
              </div>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <div>
                <Header />
                <Admin menuData={menu} orderData={order} />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route
            path="/admin/add-meal"
            element={
              <div>
                <Header />
                <AddMeal />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route path="/login" element={<Login onLogin={this.handleLogin} />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
