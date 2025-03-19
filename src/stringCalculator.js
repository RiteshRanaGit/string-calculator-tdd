function add(numbers) {
    if (numbers === "") return 0;
  
    // let arr = numbers.split(",");
    // console.lof()
    

    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = parts[0].substring(2);
      numbers = parts[1];
    }
  
    
     
   

    const numArray = numbers.split(new RegExp(delimiter)).map(Number);
    const negatives = numArray.filter(num => num < 0);
    
    const numArray1 = numbers.split(new RegExp(delimiter));
 
    let str = ""
    if(numArray.map((num, index)=>{
      
      if(isNaN(num)){
        str = str != ""? str +"," + numArray1[index] : str + numArray1[index];
      }
    } ));

    if(str != ""){
      throw new Error(`Invalid input ${str}`)
    }
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }
  
    return numArray.reduce((sum, num) => sum + num, 0);
  }
module.exports = { add };