export function formatPrice(cents) {
	return (cents / 100).toLocaleString("en-US", {
		style: "currency",
		currency: "USD"
	});
}

export function rando(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

export function getFunName() {
	const adjectives = [
		"adorable",
		"beautiful",
		"clean",
		"elegant"
	];

	const nouns = [
		"pub",
		"hut",
		"house",
		"bistro",
		"terrace"
	];

	return `${rando(adjectives)} - ${rando(nouns)}`
}