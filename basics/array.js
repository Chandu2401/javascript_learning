const crickter_heros = ["Rohit", "Virat", "Dhoni"]
const bolling_heros = ["Bumrah", "Jadeja", "Chakravarti"]

// crickter_heros.push(bolling_heros)

// console.log(crickter_heros);


// crickter_heros.concat(bolling_heros)
// console.log(crickter_heros);


//concat
// const allteam = crickter_heros.concat(bolling_heros)
// console.log(allteam);

//spread method
const allteam = [...crickter_heros, ...bolling_heros]

console.log(allteam);

//push method
let arr = [10, 20];

arr.push(30);

console.log(arr); 


//pop 
arr.pop();

console.log(arr); 

//Loop with array
let arry = [10, 20, 30];

for(let i = 0; i < arry.length; i++){
  console.log(arry[i]);
}

