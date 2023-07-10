import React from 'react';

const ThankYouPage = () => {


  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You Page</title>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n.ty {\n  position: relative;\n  text-align: center;\n  color: black;\n    background-image:\n    linear-gradient(to top, rgba(243, 255, 255, 1), rgba(244, 167, 16, 0.6)),\n    url('https://i.imgur.com/NE1JKtJ.jpg');\n    width: 100%;\n    background-size: cover;\n    padding: 50px !important;\n    border-radius: 20px !important;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px !important;\n    outline:none;\n\n}\n.bgbg{\n      background-color: #f0f0f0 !important;\n      padding: 100px !important;    \n      padding-bottom: 200px !important;     \n  height:100%;}\n\n    .container {\n      max-width: 1000px;\n      margin: 0 auto;\n      padding: 130px !important;\n      background-color: #f0f0f0 !important;\n      border: 1px solid #dee2e6;\n      border-radius: 5px;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n      text-align: center;\n      margin-top: 50px;  height:100%;\n    }\n\n    h1 {\n      font-size: 55px;\n      font-weight: bold;\n      margin-bottom: 20px;\n    }\n\n    p {\n      font-size: 18px;\n      margin-bottom: 30px;\n    }\n\n    .btn-outline-primary {\n      color: #007bff;\n      background-color: transparent;\n      background-image: none;\n      border-color: #007bff;\n      border-width: 2px;\n      padding: 8px 20px;\n      font-size: 16px;\n      line-height: 1.5;\n      border-radius: 5px;\n      transition: all 0.3s ease-in-out;\n    }\n\n    .btn-outline-primary:hover {\n      color: #fff;\n      background-color: #007bff;\n      border-color: #007bff;\n    }\n  "
    }}
  />
  <div className="bgbg">
    <div className="container p-5 mt-0 ty">
      <h1>Thank You for Donating!</h1>
      <p>
        Thank you for your generous donation. Your support means a lot to us.
      </p>
      <a href="/Dashboard" className="btn btn-dark p-4 btn-lg">
        Back to Dashboard
      </a>
    </div>
  </div>
</>



  );
};

export default ThankYouPage;
