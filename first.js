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

//Lec 14  CRUD 

/*const fs = require('fs');
const path= require('path')
const dirpath = path.join(__dirname,'crud')
const filepath = `${dirpath}/createfile.txt`;
//fs.writeFileSync(filepath,'Here we are creating and read a file')

//fs.readFile(filepath,'utf8',(err,item)=>{
   // console.log(item)
//})

//fs.appendFile(filepath,'Here we are updating the file',(err,item)=>{
   // if (!err)console.log('file is update')
//})

fs.rename(filepath,`${dirpath}/new.txt`,(err)=>{
    if(!err)
    console.log("File name is update")
})
*/


//Lec 15 Asynchrous and synchrous

/* console.log("Start to run program")

 // 2sec 
 setTimeout(()=>{
        console.log("Start to run logic")
 },2000)
console.log("Complete program")*/

//Lec 16 Handle Asynchrous data

/*let a=20;
let b=40;


let wait = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve(70);
    },2000)

})

wait.then((data)=>{
    b=data;
    console.log(a+b)
})*/

//lec 17 How node js work

//call back
//nodeapi
//call backqueue

/*console.log('Stating here')

setTimeout(()=>{
    console.log("long here")
},2000)

setTimeout(()=>{
    console.log("Short here")
},0)

console.log('finish here')*/

//lec 18 Express Js

/*const express = require('express')

const web = express();

web.get('',(req,resp)=>{
     resp.send('Hello, This is first page')
})

web.get('/interface',(req,resp)=>{
    resp.send('Hello, This is our page interface')
});

web.get('/contact',(req,resp)=>{
    resp.send('Hello, <h4>This is our contact page</h4>')
});

web.listen(300);*/


//Lec 19

/*const express = require('express')

const web = express();

web.get('',(req,resp)=>{
    console.log('Here clint are requesting for data from  =====>>',req.query)
     resp.send('Hello, This is first page  ' +req.query.name)
})

web.get('/interface',(req,resp)=>{
    resp.send('Hello, This is our page interface')
});

web.get('/contact',(req,resp)=>{
    resp.send('Hello, <h4>This is our contact page</h4>')
});

web.listen(300);*/

//lec 20 (Render HTML and JSON)

/*const express = require('express')

const web = express();

web.get('',(req,resp)=>{
     resp.send('<h3>Welcome, This is first page</h3> <a href="/interface">Go to interface')
})

web.get('/interface',(req,resp)=>{

    resp.send(`
    <input type="text" placeholder="User Name" value="${req.query.name}"/>
    <button>Click here</button>
    <a href='/contact'>Go to Contact
`);
});

web.get('/contact',(req,resp)=>{
    resp.send([
        { 
            name: 'Ahsan',
            email: 'ahsanuddin160@gmail.com',
            designation: 'CEO',
            office: 'onboard'
        },
        { 
            name: 'Abiha',
            email: 'abihaahsan2003@gmail.com',
            designation: 'CFO',
            office: 'onboard'
        }
    ] );
});

web.listen(300);*/


//Lec 21 Make HTML File

const express = require('express')
const web = express()
const path = require('path')
const publicPath = path.join(__dirname,'public')

web.use(express.static(publicPath));

web.listen(200)