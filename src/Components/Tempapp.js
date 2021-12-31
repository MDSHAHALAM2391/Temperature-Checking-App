import React, { useState, useEffect } from "react";
import "../Components/Tempapp.css";

function  Tempapp() {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai"); 

    useEffect( () => {
        const fetchApi = async () => {
            const url =  `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a7e51c7ad4be0612314e8be04a53ffb1`
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        }

        fetchApi();
    },[search] )



  return (
<div className="Parent-div">
    <div className="box">

      <div className='inputdata'>
            <input type="search" 
            value={search}
            className='inputfeild'
            onChange={ (event) =>{ setSearch(event.target.value) }}/>
      </div>

    </div>

    {!city ? (
        <p className="No_data">No Data Found</p>
    ) : (

        <div>
                <div className="info">

                <h2 className="location">
                <i className="fas fa-street-view"> </i>{search}
                </h2>

                <h1 className="temp">{city.temp}°Cel</h1>
                <h3 className="temp_min_max"> Min : {city.temp}°Cel | Max : {city.temp}°Cel</h3>
        </div>

            <div className="wave_first"> </div>
            <div className="wave_Second"> </div>
            <div className="wave_Thired"> </div>
        </div>

    )}
</div>
  );
}
export default Tempapp;