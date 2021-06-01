import Head from 'next/head';

const SEO = () => {
	return (
		<Head>
			<title>GeoWeather – One stop to get all weather information</title>
			<meta charSet="UTF-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta
				name="description"
				content="A weather web app that you can use to get weather information "
			/>
			<link rel="icon" href="/sun.png" />
			<meta name="keywords" content="weather, cloudy, thunder-storm" />
		</Head>
	);
};

export default SEO;
