function binarySearch(value: number, data: Array<number>): number | undefined {
	let low = 0;
	let high: number = data.length - 1;

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		if (data[mid] === value) {
			return mid;
		}

		if (data[mid] < value) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	return undefined;
}

const value: number = 50_500_000;
const values: Array<number> = Array.from(
	{ length: 200_000_000 },
	(_, index) => index,
);

console.log("Binary Search: O(log n)");
console.time("Data");
console.log(binarySearch(value, values));
console.timeEnd("Data");

console.log("Default Searh: O(n)");
console.time("Timing");
console.log(values.find((item) => item === value));
console.timeEnd("Timing");
