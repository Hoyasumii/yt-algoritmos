function sum(...numbers: Array<number>): number {
	return numbers.reduce(
		(accumulate, currentValue) => accumulate + currentValue,
		0,
	);
}

console.log(sum(1, 2, 3, 4));
