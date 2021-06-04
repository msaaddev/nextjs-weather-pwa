import React, { useState } from 'react';

const Weather = ({ geoData }) => {
	const [city, setCity] = useState(geoData.city);

	return (
		<div className="flex h-screen bg-homepage bg-cover items-center justify-center">
			<div className="flex md:flex-col md:items-center">
				<h2 className="text-white font-roboto text-9xl md:text-7xl">
					16°
				</h2>
				<div className="flex flex-col ml-5 pt-6 md:ml-0 ">
					<p className="text-white font-robot text-6xl">{city}</p>
					<p className="text-white font-robot text-base font-light">
						Monday, June 3, 2021
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
