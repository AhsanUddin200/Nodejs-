// console.log("Sub")

/*var a = 4;
var b = 10;
var c = 8;

console.log(a+b+c)*/
 
////LEC 4

/*var a = 4;
const b = 10;
let c = 8;

console.log(a+b+c)

var a = 4;
const d = 10;
let v = 8;
b =9
console.log(a+b+c)*/
 

//LEC 5
//if 
/*var a=90;
if(a===90)
{
    console.log("Right")
}

//In == just check value
var b=70;
if(b==90)
{
    console.log("No right")
}


//For loop

var c ='10';

for(i=0;i<=10;i++){
    console.log(i);
}
*/

//Array

/*const app = require('./app')


const arr=[2,4,6,7,8,9,10];
console.log(arr)
console.log(arr[2])
console.log(arr[6])
console.log(arr[4])
console.log(app)
console.log(app.z())
*/


//filter interview 

/*const arr1=[10,20,30,40,50,90,100];

arr1.filter((item)=>{
    console.log(item)
})

 //for match value 
const arr2=[10,20,30,40,50,90,100,10];

let result = arr2.filter((item)=>{
    return item===10
})
console.log(result)

 //for match value 
 const arr3=[10,20,30,40,50,90,100,10];

 let result1 = arr3.filter((item)=>{
     return item>40
 })
 console.log(result1)

 */

 //LEC 6
//  Core function
//Global (no need to import)
//Non global (need to import )
/*console.log(' Ahsan');

const fs=require('fs');

fs.writeFileSync("created.txt","This is new file and this is non global function")

console.log("This is our directry name:",__dirname)

console.log("This is our file name:",__filename)*/


//LEC 7
//Make basic Server

/*const http = require('http');



http.createServer((req,resp)=>{
    resp.write("<h1>This is backend class and making own server</h1>");
    resp.end();
}).listen(2000);
//createServer (function as a parameter)*/

//Arrow Function
/*function test(a)
{
    return a * 5;
}

const test1=(b)=>b*10
console.log(test1)*/


//Lec 8 Package.json

/*var colors = require('colors');

console.log("Hello:This is our backend class".white)
console.log("Hello:We are learning nodejs".blue)
console.log("Hello:WE install here color npm".green)
console.log("Hello:This is our backend class".black)*/

//Lec 9

/*import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));*/


//Lec 10 Nodeman package

//console.log("Nodemon is a tool used in Node.js development to automatically restart the server whenever changes are made in the cod")

//Lec 11 Make simple API

/*const http = require('http');

http.createServer((req, resp) => {
    const api = require('./api');
    resp.writeHead(200, {'Content-Type': 'application/json'});
    resp.write(JSON.stringify(api));
    resp.end();
}).listen(500);*/

//Lec 12 (Input from command)

//console.log(process.argv[3])
/*const fs = require('fs');

const Input = process.argv;

if (Input[2] == 'add') {
   
    fs.writeFileSync(Input[3], Input.slice(4).join(' '));
} else if (Input[2] == 'remove') {
    fs.unlinkSync(Input[3]);
} else {
    console.log("it's wrong");
}
*/


//Lec 13 Show file list 

/*const fs = require('fs');
//fs.writeFileSync('orange.txt', 'This is orange');
const path = require('path')
const dirPath = path.join(__dirname,'files') //from this line created files from path
//console.log(dirPath)

/*for (i=0;i<6;i++)
{
    fs.writeFileSync(dirPath+"/ahsan.txt",'Here all about ahsan data')
fs.writeFileSync(dirPath+"/abiha.txt",'Here all about abiha data');
fs.writeFileSync(dirPath+"/bilal.txt",'Here all about bilal a data');
fs.writeFileSync(dirPath+"/ali.txt",'Here all about alisgba data');
}*/

/*fs.readdir(dirPath,(error,files)=>{
  files.forEach((item)=>{
    console.log(item)
  })
})*/




