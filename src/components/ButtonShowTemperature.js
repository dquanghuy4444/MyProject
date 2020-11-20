import React, { useEffect, useState } from 'react';
import './ButtonShowTemperature.css';

function ButtonShowTemperature() {

    const [isLoading , setIsLoading] = useState(true);
    const [temper , setTemper] = useState(17);
    const [dayIcon , setDayIcon] = useState("01d");

    useEffect(()=>{
        const fetchWeatherData = () =>{
            setIsLoading(true);
            fetch("http://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=9b2d3466f6f0a2b130bb9a3865b1dab7")
            .then(res => { return res.json(); })
            .then(data => {
                setDayIcon(data.weather[0].icon);
                setTemper(data.main.temp - 273.15);
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
        <div className="temperature-button">
            { temper } ℃
            <img src={`http://openweathermap.org/img/wn/${dayIcon}.png`} width="35%"></img>
        </div>     
    );
}

export default ButtonShowTemperature;
