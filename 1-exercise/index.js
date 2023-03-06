//could read data and write data

const fs = require('fs')

//Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is that we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File Written!');

//Non-blocking, asynchronous way
//callback function open the file backend, while loading data, run "will read file"
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {

    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {



    });

});


console.log('will read file');