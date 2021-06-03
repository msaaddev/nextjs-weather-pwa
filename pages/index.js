import axios from 'axios';
import Homepage from '../components/Homepage';
import SEO from '../components/SEO';

export async function getStaticProps() {
	const res = await axios.get(`https://ipwhois.app/json/`);
	const data = res.data;

	if (!data) {
		return {
			notFound: true
		};
	}

	return {
		props: { data } // will be passed to the page component as props
	};
}

export default function Home({ data }) {
	return (
		<>
			<SEO />
			<Homepage geoData={data} />
		</>
	);
}
