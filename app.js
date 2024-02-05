const fs = require("fs") // file system
const http = require("http") // http server
const url = require("url") // http server


///////////////////////////////////////////////
//Server

const replaceTemplate =(temp , product)=>{
 let output = temp.replace(/{%PRODUCTNAME%}/g ,product.productName)
     output = output.replace(/{%IMAGE%}/g, product.image)
     output = output.replace(/{%PRICE%}/g, product.image)
     output = output.replace(/{%FROM%}/g, product.image)
     output = output.replace(/{%NUTRIENTS%}/g, product.image)
     output = output.replace(/{%QUANTITY%}/g, product.image)
     output = output.replace(/{%DESCRIPTION%}/g, product.image)
     output = output.replace(/{%ID%}/g, product.image)
      
     if(!product.organic){
        output = output.replace(/{%NOTORGANIC%}/g, 'not-organic')


     }
      return output

    }  

const temp0overview =fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
const tempCard =fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')
const tempProduct =fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')


const data =fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObject = JSON.parse(data) ;
const server = http.createServer((req,res)=>{
    console.log(req.url)

    const pathName = req.url

    // overview

    if(pathName =='/' || pathName === '/overview'){
       res.writeHead(200,{'content-type':"text/html"})
       const cardsHtml =  dataObject.map(el => replaceTemplate(tempCard , el)).join('')
       const output = temp0overview.replace('{%PRODUCT_CARDS%}', cardsHtml)
       console.log(dataObject)
       res.end(output)
    }

    // products
    else if(pathName==='/products'){
        res.end('this is product page')
    }

    // api
    else if(pathName ==='/api'){
        res.writeHead(200 ,{
            'content-type':'application/json',
    
        })
        res.end(data)
    }

    // notfound
    else{
        res.writeHead(404 ,{
            'content-type':'text/html',
            'my-own-header':'hello-world'

        })
        res.end('<h1>age is not found</h1>')
    }
    // res.end('hello frpm server ')
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