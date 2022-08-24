function checkEvenOrOdd(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            break;
        }
        if (numbers[i] % 2) {
            console.log("odd");
        }else {
        console.log("even");
        }
    }
}