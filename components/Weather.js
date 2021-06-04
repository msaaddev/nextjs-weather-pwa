import { useState, useEffect } from 'react';
import currentDate from '../utils/getCurrentDate';
import axios from 'axios';

const Weather = ({ geoData }) => {
	const [city, setCity] = useState(geoData.city);
	const [currentTemp, setCurrentTemp] = useState(0);
	const [date, setDate] = useState(currentDate());

	useEffect(() => {
		console.log(city);
		weather();
	}, []);

	const weather = async () => {
		try {
			const { data } = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
			);
			const temp = Math.ceil(data.main.temp - 273.15);
			setCurrentTemp(temp);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex h-screen bg-homepage bg-cover items-center justify-center">
			<div className="flex md:flex-col md:items-center">
				<h2 className="text-white font-roboto text-9xl md:text-7xl">
					{currentTemp}°
					<span className="text-8xl md:text-7xl">C</span>
				</h2>
				<div className="flex flex-col ml-6 pt-6 md:ml-0 ">
					<p className="text-white font-robot text-6xl">{city}</p>
					<p className="text-white font-robot text-base font-light">
						{date}
					</p>
				</div>
				<div className="flex flex-col ml-8 mb-4 w-40 md:items-center md:mt-6 md:ml-0">
					<img src="./cloud.png" alt="Cloud" className="w-1/2" />
					<p className="text-white font-robot text-base font-light ml-2">
						Cloudy
					</p>
				</div>
			</div>
		</div>
	);
};

export default Weather;
