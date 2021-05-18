import React, { useEffect, useState } from "react";
import HomeRight from "./HomeRight/HomeRight";
import HomeLeft from "./HomeLeft/HomeLeft";
import "./Home.css";

const API_KEY = "Your_Api_Key";
const Home = () => {
	const [temperature, setTemperature] = useState(0);
	const [humidity, setHumidity] = useState(0);

	const getCurrentLocation = () => {
		navigator.geolocation.getCurrentPosition(pos => {
			fetch(
				`http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&appid=${API_KEY}`
			)
				.then(response => response.json())
				.then(data => {
					setTemperature(data.main.temp);
					setHumidity(data.main.humidity);
				})
				.catch(error => console.log(error));
		});
	};

	useEffect(() => {
		getCurrentLocation();
	}, []);
	// console.log(temperature);
	return (
		<div className="home">
			<div className="home-left">
				<HomeLeft temperature={temperature} humidity={humidity} />
			</div>
			<div className="home-right">
				<HomeRight />
			</div>
		</div>
	);
};

export default Home;
