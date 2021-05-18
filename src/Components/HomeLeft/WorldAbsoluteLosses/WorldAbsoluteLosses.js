import React, { useEffect } from "react";
import { Chart } from "react-google-charts";
import "./WorldAbsoluteLosses.css";
import AOS from "aos";
import "aos/dist/aos.css";

function WorldAbsoluteLosses() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div className="WorldAbsoluteLosses">
			<h3 data-aos="fade-up">
				Top 10 countries/territories in terms of absolute losses (billion US$)
				1998-2017
			</h3>
			<div data-aos="fade-up">
				<Chart
					data-aos="fade-up"
					width={"500px"}
					height={"300px"}
					chartType="GeoChart"
					data={[
						["Country", "Popularity"],
						["United States", 944.8],
						["Mexico", 46.5],
						["Puerto Rico", 71.7],
						["France", 43.3],
						["Germany", 57.9],
						["Italy", 56.6],
						["India ", 79.5],
						["Thailand", 52.4],
						["China", 492.2],
						["Japan", 376.3],
					]}
					options={{
						colorAxis: {
							colors: ["red", "orange"],
						},
						backgroundColor: "#81d4fa",
						datalessRegionColor: "#f8bbd0",
						defaultColor: "#f5f5f5",
					}}
					mapsApiKey="YOUR_KEY_HERE"
					rootProps={{ "data-testid": "1" }}
				/>
			</div>
			<h4 data-aos="fade-up">
				Between 1998 and 2017 climate-related and geophysical disasters killed
				1.3 million people and left a further 4.4 billion injured, homeless,
				displaced or in need of emergency assistance. While the majority of
				fatalities were due to geophysical events, mostly earthquakes and
				tsunamis, 91% of all disasters were caused by floods, storms, droughts,
				heatwaves and other extreme weather events.{" "}
			</h4>
			{/* <img
				data-aos="zoom-in"
				className="Top10absoluteloss"
				src="world.png"
				alt="absolute looses"
			/> */}
		</div>
	);
}

export default WorldAbsoluteLosses;
