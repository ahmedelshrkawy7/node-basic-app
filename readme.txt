const fs = require("fs") // file system
const http = require("http") // http server


///////////////////////////////////////////////
//Files
const server = http.createServer((req,res)=>{
    console.log(req)
    res.end('hello frpm server ')
})

server.listen(8000,'127.0.0.1',()=>{
    
    console.log('listenning to request on port 8000')
}) // listenning to incoming request

// node is javascript runtime environment

// v8 engine

// Blocking , synchronous way

//  const textIn = fs.readFileSync("./text.txt",'utf-8')

//   const textOut = `This iws what we know about avocado : ${textIn} created on ${Date.now()}`
  
//    fs.writeFileSync('./new.txt', textOut);

//  console.log('file written')


//  // NON-Blocking , Asynchronous way

// fs.readFile('./new.txt','utf-8',(err,data1)=>{
//     fs.readFile(`./new/${data1}.txt`,'utf-8',(err,data2)=>{
//         console.log(data2;;;)
//     });
    
// });


// console.log('will read file')


////////////////////////////////////
// Server