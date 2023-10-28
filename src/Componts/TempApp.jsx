import React, { useEffect, useState } from "react";

function TempApp() {
  const [Search, setSearch] = useState("Mumbai");
  const [city, setCity] = useState('null');

  // const SearchName = (e) => {
  //   setSearch(e.target.value);
  // };

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=f00100fb875d4e5630014b102cc5c421`;
      const response = await fetch(url);
      const JsonResponse = await response.json();
      // console.log(JsonResponse);
      setCity(JsonResponse.main);
    };

    fetchApi();
  }, [Search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input type="search" className="input_Filed" onChange={(e)=>{setSearch(e.target.value)}}
          value={Search} />
        </div>

        {!city ? (
          <p>Data Was Not Found !!!!</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"> </i>
                 {Search}
              </h2>
              <h1 className="temp">{city.temp} Cel </h1>
              <h3 className="temp_min_max"> Min :{city.temp_min} cel || Max: {city.temp_max} cel</h3>
            </div>

            <div className="wave"></div>
            <div className="wave two"></div>
            <div className="wave three"></div>
          </div>
          
        )}
      </div>
    </>
  );
}

export default TempApp;

// f00100fb875d4e5630014b102cc5c421
