import React, {useEffect} from 'react';
import {FiCrosshair} from "react-icons/fi";
import Card from "components/ui/card/index.jsx";
import {useFetchOpenWeatherMap} from "hooks/useFetch.jsx";
import {useGeolocation} from "@uidotdev/usehooks";

function Weather(props) {

    const state = useGeolocation();
    const [weather, fetchWeather] = useFetchOpenWeatherMap();

    useEffect(() => {
        if (state?.latitude && state?.longitude) {
            fetchWeather(state?.latitude, state?.longitude)
        }
    }, [state?.latitude, state?.longitude]);

    if (!weather) return false

    return (
        <Card
            title={weather?.name}
            rightRender={<FiCrosshair className="text-[18px]" />}
        >
            <div className="flex justify-between">
                <div>
                    <p className="text-[15px]">{weather?.type?.name}</p>
                    <p className="text-[26px] font-bold">{weather?.temp}<sup>o</sup> c</p>
                </div>
                <div className="text-[52px] size-[52px] inline-flex items-center justify-center text-[#FFCF26]">
                    {weather?.type?.icon}
                </div>
            </div>
        </Card>
    );
}

export default Weather;