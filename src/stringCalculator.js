function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = parts[0].substring(2);
        numbers = parts[1];
    }

    const numArray = numbers.split(new RegExp(delimiter)).map(Number);
    const negatives = numArray.filter(num => num < 0);

    const invalidInputs = numbers.split(new RegExp(delimiter)).filter(num => isNaN(num)).join(",");

    if (invalidInputs) {
        throw new Error(`Invalid input ${invalidInputs}`);
    }
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}
module.exports = { add };