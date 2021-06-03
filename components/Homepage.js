import { useEffect, useState } from 'React';

const Homepage = ({ geoData }) => {
	const [location, setlocation] = useState(geoData);

	return (
		<div className="flex h-screen bg-homepage bg-cover items-center justify-center">
			<div className="flex ">
				<h2 className="text-white font-roboto text-9xl">16° </h2>
				<div className="flex flex-col ml-6 w-60 pt-6">
					<p className="text-white font-robot text-6xl">London</p>
					<p className="text-white font-robot text-base font-light">
						06:09 - Monday, June 3, 2021
					</p>
				</div>
				<div className="flex flex-col ml-0 mb-4 w-40">
					<img src="./cloud.png" alt="Cloud" className="w-1/2" />
					<p className="text-white font-robot text-base font-light ml-2">
						Cloudy
					</p>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
