import React, { useEffect, useState } from 'react';
import './ButtonShowTemperature.css';

const WEATHER_API = "https://api.weatherbit.io/v2.0/current?city=hanoi,VN&key=eb6545051ffa4d90b3e878e145117497";

function ButtonShowTemperature() {

    const [isLoading , setIsLoading] = useState(true);
    const [temper , setTemper] = useState(17);
    const [dayIcon , setDayIcon] = useState("a03d");

    useEffect(()=>{
        const fetchWeatherData = () =>{
            setIsLoading(true);
            fetch(WEATHER_API)
            .then(res => { return res.json(); })
            .then(data => {
                setDayIcon(data.data[0].weather.icon);
                setTemper(data.data[0].app_temp);
                setIsLoading(false);
            })
            .catch(err => setIsLoading(true))
            ;
        }
  
        fetchWeatherData();
    },[])
    if(isLoading){
        return <></>;
    }
    return (
        <div className="temperature-button ani-temper">
            { temper } ℃
            <img src={`https://www.weatherbit.io/static/img/icons/${dayIcon}.png`} width="25%"></img>
        </div>     
    );
}

export default ButtonShowTemperature;
