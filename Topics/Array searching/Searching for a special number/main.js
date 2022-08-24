function search(numbers) {
    return numbers.find(number => number % 11 === 0);
}