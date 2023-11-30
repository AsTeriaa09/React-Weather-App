import React, { useEffect, useState } from "react";

// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a4b01931bdac3e7ba220841a79c09c8f`

const Temp = () => {
  const apikey = process.env.REACT_APP_WEATHER_API;

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Dhaka");

  const getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apikey}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    setCity(data.main);
  };

  useEffect(() => {
    getWeather();
     // eslint-disable-next-line
  }, [search]);
 

  return (
    <div className="container py-5">
      <h1 className="pb-4 text-white">Weather App</h1>
      <div className="box">
        <div className="input-data">
          <input
            type="search"
            placeholder="Search here"
            className="input-field rounded-pill p-2 border-info mb-5"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {!city ? (
          <div className="text-white">"No Data Found"</div>
        ) : (
          <>
            <div className="info text-white">
              <h2 className="location">
                <i className="fa-solid fa-location-dot text-info"></i> {search}
              </h2>
              <p className="temp ">
                
                <span className="fw-bold">{city.temp}°</span> celsius
              </p>
              <div className="min-max">
                Max <span className="fw-bold">{city.temp_max}°</span> celsius  | 
                Min <span className="fw-bold">{city.temp_min}°</span>  celsius
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Temp;
