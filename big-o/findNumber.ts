const data = Array.from({ length: 1_000_000 }, (_, index) => index);

let operationCounter = 0;

data.find((item) => {
	const condition = item === 200_000;

	if (condition) {
		console.log(operationCounter);
	} else {
		operationCounter++;
	}

	return condition;
});
