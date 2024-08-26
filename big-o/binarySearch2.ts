function binarySearch(value: number, data: Array<number>): number | undefined {
	let low = 0;
	let high: number = data.length - 1;
	let numbersPerOperation = 0;

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		numbersPerOperation++;

		if (data[mid] === value) {
			console.log(`Number of operations counter: ${numbersPerOperation}`);
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

const value: number = 200_000;
const values: Array<number> = Array.from(
	{ length: 1_000_000 },
	(_, index) => index,
);

console.log("Binary Search: O(log n)");
console.time("Data");
console.log(binarySearch(value, values));
console.timeEnd("Data");
