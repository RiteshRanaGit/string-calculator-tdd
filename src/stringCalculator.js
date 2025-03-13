function add(numbers) {
    if (numbers === "") return 0;
  
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = parts[0].substring(2);
      numbers = parts[1];
    }
  
    return numbers
      .split(new RegExp(delimiter))
      .reduce((sum, num) => sum + parseInt(num), 0);
  }
module.exports = { add };