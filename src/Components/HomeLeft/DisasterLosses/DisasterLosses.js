import React, { useEffect } from "react";
import { Chart } from "react-google-charts";
import "./DisasterLosses.css";
import AOS from "aos";
import "aos/dist/aos.css";

function DisasterLosses() {
	useEffect(() => {
		AOS.init({
			duration: 700,
		});
		AOS.refresh();
	}, []);

	return (
		<div className="DisasterLosses">
			<div className="container">
				<div className="Left" data-aos="fade-right">
					<Chart
						width={"500px"}
						height={"300px"}
						chartType="PieChart"
						loader={<div>Loading Chart</div>}
						data={[
							["Disaster Type", "Economic losses (US$billion)"],
							["Storm", 1330],
							["Earthquake", 661],
							["Flood", 656],
							["Drought", 124],
							["Wildfire", 68],
							["Extreme Temperature", 61],
							["Others : Landslide, Volcanic activity, Mass movement", 8],
						]}
						options={{
							legend: "true",
							pieSliceText: "label",
							title:
								"Breakdown of recorded economic losses (US$) per disaster type 1998-2017",
							backgroundColor: "#26292e",
							legendTextStyle: { color: "#FFF" },
							titleTextStyle: {
								color: "#FFF",
								opacity: "0.8",
								fontSize: "14",
							},
						}}
						rootProps={{ "data-testid": "7" }}
					/>
				</div>
				<div className="Right" data-aos="fade-left">
					<Chart
						width={"500px"}
						height={"300px"}
						chartType="BarChart"
						loader={<div>Loading Chart</div>}
						data={[
							["Disaster Type", "No. of Deaths"],
							["Earthquake", 747234],
							["Storm", 232680],
							["Extreme temperature", 166346],
							["Flood", 142088],
							["Drought", 21563],
							["Landslide", 18414],
							["Other", 2398],
						]}
						options={{
							title: "Number of deaths per disaster type 1998-2017 ",
							// animation: {
							// 	startup: true,
							// 	easing: "linear",
							// 	duration: 1000,
							// },
							legend: false,
							chartArea: { width: "50%" },
							hAxis: {
								title: "Number of deaths",
								minValue: 0,
								textStyle: { color: "#FFF" },
							},
							vAxis: {
								title: "Disaster Type",
								textStyle: { color: "#FFF" },
							},
							backgroundColor: "#26292e",
							legendTextStyle: { color: "#FFF" },
							titleTextStyle: {
								color: "#FFF",
								opacity: "0.8",
								fontSize: "14",
							},
						}}
						// For tests
						rootProps={{ "data-testid": "1" }}
					/>
				</div>
			</div>

			<h4 data-aos="zoom-in-up">
				In 1998-2017, storms, including tropical cyclones and hurricanes, were
				second only to earthquakes in terms of fatalities, killing 233,000
				people over the 20-year period
			</h4>
		</div>
	);
}

export default DisasterLosses;
