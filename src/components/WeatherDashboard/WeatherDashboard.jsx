import React from 'react'
import './WeatherDashboard.css'

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

const WeatherDashboard = () => {

        const apiKey = "30dafdc4cf9438c3e8babd4e9cba477e";
        const [inputCity, setInputCity] = useState("");
        const [data, setData] = useState({})
      
      
        const getWetherDetails = (cityName) => {
          if (!cityName) return
          const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
          axios.get(apiURL).then((res) => {
            console.log("response", res.data)
            setData(res.data)
          }).catch((err) => {
            console.log("err", err)
          })
        }
      
        const handleChangeInput = (e) => {
          console.log("value", e.target.value)
          setInputCity(e.target.value)
        }
      
        const handleSearch = () => {
          getWetherDetails(inputCity)
        }
      
      
        return (
          <div className="col-md-12">
            <div className="wetherBg">
              <h1 className="heading">Weather App</h1>
      
              <div className="d-grid gap-3 col-4 mt-4">
                <input type="text" className="form-control"
                  value={inputCity}
                  onChange={handleChangeInput} />
                <button className="btn btn-primary" type="button"
                  onClick={handleSearch}
                >Search</button>
              </div>
            </div>
      
            {Object.keys(data).length > 0 &&
              <div className="col-md-12 text-center mt-5">
      
                <div className="shadow rounded wetherResultBox">
                  <img className="weathorIcon"
                    src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
      
                  <h5 className="weathorCity">
                    {data?.name}
                  </h5>
                  <h6 className="weathorTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
                </div>
              </div>
            }
      
          </div>
        );
    
}