// get current day and date

export default function getCurrentDate() {
	const today = new Date();

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];

	const date = `${days[today.getDay()]}, ${
		months[today.getMonth()]
	} ${today.getDate()}, ${today.getFullYear()}`;

	return date;
}
