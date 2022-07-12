export const shuffleArray = (array: string[]) => {
	let currentIndex = array.length,
		randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
};

export const getFinishType = (value: number, total: number) => {
	const percent = (value * 100) / total;

	if (percent > 70) {
		return 'high';
	}

	if (percent > 40) {
		return 'medium';
	}

	return 'low';
};
