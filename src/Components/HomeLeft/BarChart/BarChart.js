import React, { Component } from "react";
import * as d3 from "d3";
// import tip from "d3-tip";
// import dataJson from "./menu.json";
import "./BarChart.css";
var dataJson;
class BarChart extends Component {
	drawBarChart() {
		const svg = d3
			.select(this.refs.barChartCanvas)
			.append("svg")
			.attr("width", 480)
			.attr("height", 340);

		// Create margins and dimensions
		const margin = { top: 20, right: 20, bottom: 60, left: 72 };
		const graphWidth = 480 - margin.left - margin.right;
		const graphHeight = 320 - margin.top - margin.bottom;

		const graph = svg
			.append("g")
			.attr("width", graphWidth)
			.attr("height", graphHeight)
			.attr("transform", `translate(${margin.left}, ${margin.right})`);

		const xAxisGroup = graph
			.append("g")
			.attr("transform", `translate(0, ${graphHeight})`);

		const yAxisGroup = graph.append("g");

		const max = d3.max(dataJson, d => d.value);

		const y = d3.scaleLinear().domain([0, max]).range([graphHeight, 0]);

		const x = d3
			.scaleBand()
			.domain(dataJson.map(item => item.name))
			.range([0, 400])
			.paddingInner(0.1)
			.paddingOuter(0.1);
		// var tipp = tip()
		// 	.attr("class", "d3-tip")
		// 	.html(function (d) {
		// 		console.log(d);
		// 		return d;
		// 	});

		// join the data to rects
		const rects = graph.selectAll("rect").data(dataJson);
		rects
			.attr("width", x.bandwidth())
			.attr("height", d => graphHeight - y(d.value))
			.attr("fill", "orange")
			.attr("x", d => x(d.name))
			.attr("y", d => y(0));

		// // append the enter selection to the DOM
		rects
			.enter()
			.append("rect")
			.attr("width", x.bandwidth)
			.attr("height", d => graphHeight - y(0))
			.attr("fill", "hsla(240, 100%, 64%, 0.7)")
			.attr("x", d => x(d.name))
			.attr("y", d => y(0));

		console.log(rects);
		// // Create and call the axis

		const xAxis = d3.axisBottom(x);
		const yAxis = d3.axisLeft(y);

		xAxisGroup.call(xAxis);
		yAxisGroup.call(yAxis);

		xAxisGroup
			.selectAll("text")
			.attr("transform", "rotate(-18)")
			.attr("text-anchor", "end");

		// const MouseOver = d => {
		// 	alert(d);
		// };

		// const MouseOut = d => {
		// 	alert(d);
		// };

		graph
			.selectAll("rect")
			.on("mouseover", mouseover)
			.on("mouseout", mouseout)
			.transition()
			.duration(800)
			.attr("y", d => y(d.value))
			.attr("height", d => graphHeight - y(d.value))

			.delay((d, i) => i * 100);

		// tooltips
		var div = d3
			.select(this.refs.barChartCanvas)
			.append("div")
			.attr("class", "tooltip")
			.style("display", "none");
		function mouseover() {
			div.style("display", "inline");
			var d = d3.select(this).data()[0];
			div.html(d.name + "<hr />" + d.value);
		}

		function mouseout() {
			div.style("display", "none");
		}
	}

	componentDidMount() {
		dataJson = this.props.data;
		this.drawBarChart();
	}

	render() {
		return <div className="bar-chart-canvas" ref="barChartCanvas"></div>;
	}
}

export default BarChart;
