
//extensao do chrome JSON FORMATTER

//import
const http = require('http'); 

//array com 3 objetos
const products = [
    {
        id: 1,
        name: 'Project 1'
    },
    {
        id: 2,
        name: 'Project 2'
    },
    {
        id: 3,
        name: 'Project 3'
    }
]

//criacao do servidor
const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'aplication/jason'});

    //Resquisao tipo GET
    if(req.url === '/products'){
        res.end(
            JSON.stringify({
                data: products
            })
        ) 
    }

    //res.end(JSON.stringify({
    //    data: 'Meu primeiro backend Node'
    //}))
})

//porta do servidor
server.listen(8000, () => {
    console.log('Server is running on port 8000')
})