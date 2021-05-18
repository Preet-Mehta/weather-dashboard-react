import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Earthquake.css";

const demos = {
	pinmap:
		'<iframe scrolling="no" class="iframe" frameborder="no" allow="autoplay" src="http://localhost:5500/index.html"></iframe>',
	heatmap:
		'<iframe scrolling="no" class="iframe" frameborder="no" allow="autoplay" src="http://127.0.0.1:5500/GeoHeatmap.html"></iframe>',
};

function Iframe(props) {
	return (
		<div
			className="map"
			dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
		/>
	);
}

function Earthquake() {
	useEffect(() => {
		AOS.init({
			duration: 700,
		});
		AOS.refresh();
	}, []);
	return (
		<div>
			<div data-aos="fade-up" className="earthquake-container">
				<Iframe iframe={demos["pinmap"]} />
				<Iframe iframe={demos["heatmap"]} />
			</div>
			<div className="earthquake-container-heading" data-aos="fade-up">
				<h3 className="left">Pin Map of Earthquake</h3>
				<h3 className="right">Heat Map of Earthquake</h3>
			</div>
		</div>
	);
}

export default Earthquake;
