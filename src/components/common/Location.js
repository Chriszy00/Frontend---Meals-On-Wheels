import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../assets/css/sb-admin-2.min.css';
import '../../assets/css/all.css';

function Location() {
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState(null);

  const calculateDistance = (e) => {
    e.preventDefault();
    try {
      const geocoder = new window.google.maps.Geocoder();
      const service = new window.google.maps.DistanceMatrixService();

      geocoder.geocode(
        { address: "6000 Gov. M. Cuenco Ave, Cebu City, 6000 Cebu" },
        (results, status) => {
          if (status === "OK" && results.length > 0) {
            const fixedLocation = results[0].geometry.location;

            geocoder.geocode({ address: location }, (results, status) => {
              if (status === "OK" && results.length > 0) {
                const userLocation = results[0].geometry.location;

                service.getDistanceMatrix(
                  {
                    origins: [userLocation],
                    destinations: [fixedLocation],
                    travelMode: "DRIVING",
                    unitSystem: window.google.maps.UnitSystem.METRIC,
                  },
                  (response, status) => {
                    if (
                      status === "OK" &&
                      response.rows.length > 0 &&
                      response.rows[0].elements.length > 0
                    ) {
                      const distanceResult = response.rows[0].elements[0];
                      if (distanceResult.status === "OK") {
                        const distanceInMeters = distanceResult.distance.value;
                        const distanceInKm = distanceInMeters / 1000;
                        setDistance(distanceInKm);

                        // Save the address to the backend
                        saveAddressToBackend(location);
                      } else {
                        console.log(
                          "Distance calculation failed:",
                          distanceResult.status
                        );
                      }
                    } else {
                      console.log("Distance calculation failed:", status);
                    }
                  }
                );
              }
            });
          }
        }
      );
    } catch (error) {
      console.log("Error occurred during distance calculation:", error);
    }
  };
  const saveAddressToBackend = (address) => {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    axios
      .post("http://localhost:8081/api/users", { headers, address })
      .then((response) => {
        console.log("Address saved to the backend:", response.data);
      })
      .catch((error) => {
        console.log("Error saving address to the backend:", error);
      });
  };

  const handleAutocomplete = () => {
    const input = document.getElementById("location");
    const autocomplete = new window.google.maps.places.Autocomplete(input);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        setLocation(place.formatted_address);
      }
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      calculateDistance(e);
    }
  };

  useEffect(() => {
    const input = document.getElementById("location");
    input.addEventListener("keypress", handleKeyPress);
    return () => {
      input.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <div className="satoshi">
      <div className="container mt-5" >
        <div className="d-flex justify-content-center">
          <div
            className="card shadow"
            style={{ width: "800px", borderRadius: "4%", padding: "10px" }}
          >
            <div className="card-body">
              <h5
                className="card-title mb-4"
                style={{
                  fontSize: "30px",
                  color: "black",
                }}
              >
                Location
              </h5>
              <form onSubmit={calculateDistance}>
                <div className="form-group">
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onFocus={handleAutocomplete}
                    className="form-control"
                    placeholder="Enter your address..... Only within the Philippines"
                  />
                </div>
                <div className="map-container">
                  {/* Replace "YOUR_API_KEY" with your actual Google Maps API key */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.04280196614!2d123.90935737450371!3d10.338459889784923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a998e133925eeb%3A0xfeda037a6ba9d730!2sUniversity%20of%20Cebu%20-%20Banilad%20Campus!5e0!3m2!1sen!2sph!4v1688033971842!5m2!1sen!2sph"
                    width="100%"
                    height="300"
                    className="rounded"
                    allowFullScreen
                    loading="lazy"
                    title="Map"
                  ></iframe>
                </div>
                <button
                  type="submit"
                  className="btn btn-warning"
                  onClick={() => saveAddressToBackend(location)}
                >
                  Send Address
                </button>
                {distance !== null && (
                  <p>
                    Distance: {distance.toFixed(2)} km (
                    {distance <= 10 ? "Within 10 km" : "Not within 10 km"})
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
