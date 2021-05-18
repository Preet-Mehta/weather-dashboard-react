import React, { useEffect } from "react";
import LineChart from "../LineChart/LineChart";
import RadialCircle from "../LineChart/RadialCircle/RadialCircle";
import "./WeatherMap.css";
import AOS from "aos";
import "aos/dist/aos.css";

function WeatherMap({ temperature, humidity }) {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div className="weathermap">
			<div className="left" data-aos="zoom-in">
				<LineChart />
				<h3>Date v/s Temperature</h3>
			</div>
			<div className="right" data-aos="zoom-in">
				<RadialCircle
					className="first"
					data={temperature}
					name="Temperature (℃)"
				/>
				<RadialCircle className="second" data={humidity} name="Humidity (%)" />
			</div>
		</div>
	);
}

export default WeatherMap;
