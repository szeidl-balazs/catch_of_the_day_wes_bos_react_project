//function to format price from cents to USD
export function formatPrice(cents) {
	return (cents / 100).toLocaleString("en-US", {
		style: "currency",
		currency: "USD"
	});
}

//function to randomize numbers
export function rando(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

//function to make fantasy store name
export function getFunName() {
	const adjectives = [
		"adorable",
		"beautiful",
		"clean",
		"elegant"
	];


//function to make a noun forward to store name
	const nouns = [
		"pub",
		"hut",
		"house",
		"bistro",
		"terrace"
	];

	return `${rando(adjectives)} - ${rando(nouns)}`
}