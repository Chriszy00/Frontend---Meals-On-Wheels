import { Component, createRef, useState, useEffect, useRef} from "react";
// import meal from '../assets/images/potato-gratin-tarts.jpg';
// import 'bootstrap/dist/js/bootstrap.js';
// import 'boxicons/css/boxicons.min.css';
import '../../assets/css/menu.css';
import { Link, useParams, withRouter, useNavigate } from "react-router-dom";
import axios from 'axios';

function MealDetails() {
    const [meal, setMeal] = useState({
        meal_name: "",
        meal_desc: "",
        meal_nutri: ""
    });

    const history = useNavigate();
    const [menu, setMenu] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadMeal();
    }, []);


    const loadMeal = async () => {
        const token = localStorage.getItem("accessToken");
        const headers = {
          Authorization: "Bearer " + token,
        };
        
        const result = await axios.get(`/mealdetails/${id}`, { headers });
        setMeal(result.data);
    };

    

    return (
        <div className="menudivmain">
            <div className="tab">
               <button onClick={()=> history(-1)}  style={{marginTop: "40vh"}}><i class="bi bi-arrow-left-circle-fill"></i> Back</button>
              
            </div>
            <div className="container-fluid">
                <div className="row mb-5"> {/* Meal Details */}
                    <div className="col-xl-5 col-lg-5 mb-4 mt-5">
                        <div className="shadow " >
                        
                            <img src={`http://localhost:8080/api/images/${meal.meal_id}/${meal.meal_photo}`} style={{minHeight: "420px", maxHeight: "420px",  objectFit: "cover", objectPosition: "center"}} className="card-img-top rounded shadow h-100" alt="meal" />
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 mt-5">
                        <div className="card shadow cardmealdetails">
                            <div className="card-body">
                                <h5 className="card-title fw-bold mealdetailsname">{meal.meal_name}</h5>
                                <p className="card-text mt-3 mealdetailsdesc">{meal.meal_desc}</p>
                                <h6 className="card-subtitle text-muted mt-5 mealdetailsnutrihead">Nutritional Facts</h6>
                                <p className="card-text text-muted row mt-2">
                                    <span className="ps-4 mealdetailsnutri">
                                        {meal.meal_nutri}
                                    </span>
                                    {/* <div className="col-5 ps-4">
                                            • Calories 711 <br></br>
                                            • Fat 53g<br></br>
                                            • Carbs 56g<br></br>
                                        </div> */}
                                    {/* <div className="col-5">
                                            • Fiber 11g <br></br>
                                            • Sugar 2g <br></br>
                                            • Protein 9g
                                        </div> */}
                                </p>
                                <a href="add-meal" className="btn btn-block btn-warning mt-5 fw-bold fs-5 mealdetailsorder p-3">Order</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-5"> {/* Allergen Declaration */}
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item rounded-2 shadow">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button text-white rounded-top-2 fw-bold" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                                    aria-expanded="true" aria-controls="panelsStayOpen-collapseOne"
                                    style={{ backgroundColor: "#f24c3d" }}>
                                    Allergen Declaration
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    MerryMeals' manufacturing and kitchen operations involve the utilization of shared
                                    cooking equipment, preparation areas, tools, and utensils that may come into contact
                                    with or contain allergens. Consequently, we are unable to provide a guarantee that a
                                    food ingredient or product is completely free from a specific allergen, as there is
                                    a possibility of allergen cross-contact between different products.
                                    <br></br>
                                    <br></br>
                                    The allergen information presented in this document is based on data provided by our
                                    suppliers. MerryMeals, along with its directors, officers, employees, subsidiaries,
                                    and franchisees, cannot be held responsible for the accuracy and reliability of the
                                    provided allergen information.
                                    <br></br>
                                    <br></br>
                                    The listing is periodically updated in an effort to accurately represent the allergen content;
                                    however, variations may occur due to ongoing product improvements. Additionally, non-permanent
                                    products such as test items and limited-time offerings may not be included in this document.
                                    <br></br>
                                    <br></br>
                                    The allergen information provided in this document is meant to be a general guide and does
                                    not constitute legal or medical advice. Customers should seek separate medical or legal
                                    advice relevant to their specific circumstances. MerryMeals, along with its directors,
                                    employees, subsidiaries, and franchisees, disclaims any liability for any loss, costs,
                                    or damages incurred by users who rely on this document.
                                    <br></br>
                                    <br></br>

                                    This information is specific to MerryMeals stores operating within the Philippines and
                                    does not pertain to stores located outside the Philippines.
                                    <br></br>
                                    <br></br>
                                    Current as of: June 13, 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MealDetails;