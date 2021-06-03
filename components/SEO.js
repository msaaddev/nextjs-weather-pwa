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

			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
				rel="stylesheet"
			/>
		</Head>
	);
};

export default SEO;
