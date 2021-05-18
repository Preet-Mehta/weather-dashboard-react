import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./LineChart.css";
class LineChart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					data: [
						[1619848800000, 31],
						[1619913600000, 30.12],
						[1620000000000, 33.21],
						[1620086400000, 31],
						[1620172800000, 34.31],
						[1620259200000, 32.12],
					],
				},
			],
			options: {
				chart: {
					id: "area-datetime",
					type: "area",
					height: 350,
					zoom: {
						autoScaleYaxis: true,
					},
				},
				annotations: {
					yaxis: [
						{
							y: 30,
							borderColor: "whitesmoke",
							label: {
								show: true,
								text: "Date",
								style: {
									color: "white",
									background: "transparent",
								},
							},
						},
					],
					xaxis: [
						{
							x: new Date("2 May 2021").getTime(),
							borderColor: "#999",
							yAxisIndex: 0,
							label: {
								show: true,
								text: "Temperature",
								style: {
									color: "white",
									background: "transparent",
								},
							},
						},
					],
				},
				dataLabels: {
					enabled: false,
				},
				markers: {
					size: 0,
					style: "hollow",
				},
				xaxis: {
					type: "datetime",
					min: new Date("2 May 2021").getTime(),
					tickAmount: 6,
				},
				tooltip: {
					enabled: true,
					followCursor: false,
					theme: "dark",
					x: {
						format: "dd MMM yyyy",
						style: {
							color: "black",
						},
					},
					style: {
						color: "white",
					},
				},
				fill: {
					type: "gradient",
					gradient: {
						shade: "dark",
						shadeIntensity: 1,
						opacityFrom: 1,
						opacityTo: 1,
						colors: ["blue", "purple"],
						stops: [0, 100],
					},
				},
			},

			selection: "one_year",
		};
	}
	render() {
		return (
			<Chart
				options={this.state.options}
				series={this.state.series}
				type="area"
				width={500}
				height={320}
			/>
		);
	}
}

export default LineChart;
