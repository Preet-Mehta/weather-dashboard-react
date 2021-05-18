import React, { useState } from "react";
import BarChart from "./BarChart/BarChart";
import "./HomeLeft.css";
import TabNav from "./TabNav/TabNav";

const HomeLeft = ({ temperature, humidity }) => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	const updateTime = () => setTime(new Date().toLocaleTimeString());
	setInterval(updateTime, 1000);
	// console.log(temperature);
	return (
		<div className="home-left">
			<h1 className="time">{time}</h1>
			<TabNav temperature={temperature} humidity={humidity} />
		</div>
	);
};

export default HomeLeft;
