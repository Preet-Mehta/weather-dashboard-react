import React, { useEffect } from "react";
import BarChart from "../BarChart/BarChart";
import typeData from "../DataDirectory/NoOfDisasterPerType.json";
import AOS from "aos";
import "aos/dist/aos.css";
import "./NaturalCalamitiesType.css";

function NaturalCalamitiesType() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div className="NaturalCalamitiesType">
			<div className="Left" data-aos="zoom-in">
				<BarChart data={typeData} />
				<h4 className="yLabel">No. of Disaster</h4>
				<h4 className="xLabel">Disaster Type</h4>
				<h4>Numbers of disasters per type 1998-2017</h4>
			</div>
			<div className="Right" data-aos="zoom-in">
				<img src="/pic1.png" alt="natural calamities effects" />
				<h4>Number of people affected per disaster type 1998-2017 </h4>
			</div>
		</div>
	);
}

export default NaturalCalamitiesType;
