import React, { useEffect, useState } from "react";
import "./HomeRight.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Modal } from "@material-ui/core";

const API_KEY = "Your_Api_Key";

const HomeRight = () => {
	const [locationName, setLocationName] = useState("");
	const [locationCountryCode, setLocationCountryCode] = useState("");
	const [iconCode, setIconCode] = useState("");
	const [locationBriefInfo, setLocationBriefInfo] = useState("");
	const [locationDetailInfo, setLocationDetailInfo] = useState("");
	const [temperature, setTemperature] = useState(0);
	const [maxTemp, setMaxTemp] = useState(0);
	const [minTemp, setMinTemp] = useState(0);
	const [pressure, setPressure] = useState(0);
	const [humidity, setHumidity] = useState(0);
	const [wind, setWind] = useState({});
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const getCurrentLocation = () => {
		navigator.geolocation.getCurrentPosition(pos => {
			fetch(
				`http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&appid=${API_KEY}`
			)
				.then(response => response.json())
				.then(data => {
					setLocationName(data.name);
					setLocationCountryCode(data.sys.country);
					setIconCode(data.weather[0].icon);
					setLocationBriefInfo(data.weather[0].main);
					setLocationDetailInfo(data.weather[0].description);
					setTemperature(data.main.temp);
					setMaxTemp(data.main.temp_max);
					setMinTemp(data.main.temp_min);
					setPressure((data.main.pressure / 1000).toFixed(2));
					setHumidity(data.main.humidity);
					setWind(data.wind);
				})
				.catch(error => console.log(error));
		});
	};

	useEffect(() => {
		getCurrentLocation();
	}, []);

	return (
		<div className="home-right">
			<div className="home-right-header">
				<LocationOnIcon onClick={handleOpen} className="location-icon" />
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description">
					<div className="model-container"></div>
				</Modal>
				<div className="home-right-header-location">
					<h1>{locationName} ,</h1>
					<h2>{locationCountryCode}</h2>
				</div>
			</div>
			<div className="home-right-seperator" />
			<div className="home-right-body">
				<div className="home-right-body-weather-desc">
					<img
						src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
						alt="Loading"
					/>
					<div className="home-right-body-weather-info">
						<h2>{locationBriefInfo}</h2>
						<h4>{locationDetailInfo}</h4>
					</div>
				</div>
				<div className="home-right-body-temp">
					<div className="icon-container">
						<i class="fas fa-temperature-low fa-2x"></i>
					</div>
					<h2>{temperature} °C</h2>
					<div class="max-min-temp">
						<p>Max T°C</p>
						<h3>{maxTemp} °C</h3>
						<p>Min T°C</p>
						<h3>{minTemp} °C</h3>
					</div>
				</div>
				<div className="home-right-body-common">
					<div
						className="icon-container"
						style={{ backgroundColor: "#ff5260" }}>
						<i class="fas fa-tachometer-alt fa-2x"></i>
					</div>
					<div className="home-right-body-item-values">
						<p>Pressure</p>
						<h2>{pressure} bar</h2>
					</div>
				</div>
				<div className="home-right-body-common ">
					<div
						className="icon-container"
						style={{ backgroundColor: "#6b46bf" }}>
						<i class="fas fa-tint fa-2x"></i>
					</div>
					<div className="home-right-body-item-values">
						<p>Humidity</p>
						<h2>{humidity} %</h2>
					</div>
				</div>
				<div className="home-right-body-common">
					<div
						className="icon-container"
						style={{ backgroundColor: "#00ff7f" }}>
						<i class="fas fa-wind fa-2x"></i>
					</div>
					<div className="home-right-body-item-values">
						<p>Wind Speed</p>
						<h2>{wind.speed} m/s</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeRight;
