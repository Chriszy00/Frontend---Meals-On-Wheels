import React, { useEffect, useState } from 'react';

import '../../assets/css/sb-admin-2.min.css';
import '../../assets/css/partner2.css';
import '../../assets/css/rider.css';

import '../../assets/vendor/fontawesome-free/css/all.min.css';

const Rider = () => {
    const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    fetchDeliveries();
  }, []);

  const fetchDeliveries = () => {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    fetch('/preparation/deliveries', { headers }) // Replace with your backend API URL
      .then(response => response.json())
      .then(data => setDeliveries(data))
      .catch(error => console.log(error));
  };


  return (
    <div id="page-top">
      <div id="wrapper">
        <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar" style={{ backgroundColor: '#F24C3D' }}>
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">R name</div>
          </a>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading">Addons</div>

          <li className="nav-item">
            <a className="nav-link" href="#projects">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Orders</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="tables.html">
              <i className="fas fa-fw fa-table"></i>
              <span>Riders</span>
            </a>
          </li>

          <hr className="sidebar-divider d-none d-md-block" />

          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
        </ul>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-left mb-4 mt-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                  className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-dark">Pending Delivery</h6>
                    </div>
                    <div className="card-body tableorder">
                      <div className="chart-area">
                        <div className='table-responsive'>
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Recipient</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Meal name</th>
                                <th scope="col">Location</th>
                                <th scope="col">Status</th>
                              </tr>
                            </thead>
                            <tbody className="table-group-divider">
                              <tr>
                                <th scope="row">1</th>
                                <td>Jeanne Dominique Paloma</td>
                                <td>+63 918 567 8901</td>
                                <td>Jollibee Chicken</td>
                                <td>Purok Okra, Calero, Liloan, Cebu</td>
                                <td>
                                  <button className='confirmdeliverybtn' type='button'>Confirm Delivery</button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-9 col-lg-7">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-dark">Delivery History</h6>
                    </div>
                    <div className="card-body tableorder">
                      <div className="chart-area">
                        <div className='table-responsive'>
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Recipient</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Meal name</th>
                                <th scope="col">Location</th>
                              </tr>
                            </thead>
                            <tbody className="table-group-divider">
                              <tr>
                                <td>Jeanne Dominique Paloma</td>
                                <td>+63 918 567 8901</td>
                                <td>Jollibee Chicken</td>
                                <td>Purok Okra, Calero, Liloan, Cebu</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-5">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-dark">Total Delivered</h6>
                    </div>
                    <div className="card-body card-bodyrider">
                      <div className="chart-pie totaldelivered pb-4">
                        <h1 className='totaldeliverednum'>48</h1>
                      </div>
                      <div className="mt-4 text-center small">
                        <span className="mr-2">
                          <i className="fas fa-circle text-primary"></i>
                        </span>
                        <span className="mr-2">
                          <i className="fas fa-circle text-success"></i>
                        </span>
                        <span className="mr-2">
                          <i className="fas fa-circle text-info"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Meals on Wheels 2023</span>
              </div>
            </div>
          </footer>
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div class="modal-footer">
                                <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a class="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        )
    }


    export default Rider;