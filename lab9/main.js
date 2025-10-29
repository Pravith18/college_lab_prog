const { error } = require('console');
const arithmetics=require('./arithmetic')
const fs=require('fs')

const a=10;
const b=2;
const add1 = arithmetics.add(a, b);
const subs1 = arithmetics.subs(a, b);
const mul1 = arithmetics.mul(a, b);
const div1 = arithmetics.div(a, b);

console.log('sum is :',add1);
console.log('subtraction is :',subs1);
console.log('multiplication is :',mul1);
console.log('division is :',div1);

const results=`
sum:${add1},
substraction:${subs1},
multiplication:${mul1},
division:${div1}
`

fs.writeFile('results.txt',results,(err)=>{
    if(err){
        console.log("error writing the file ",err);
    }else{
        console.log("\n\nfile written successfully");
    }
});

fs.readFile("results.txt","utf-8", (err ,data)=>{
if(err){
    console.log("error reading the file ",err);
}else{
    console.log("\n\ncontent of results.txt :");
    console.log(data);
}
});