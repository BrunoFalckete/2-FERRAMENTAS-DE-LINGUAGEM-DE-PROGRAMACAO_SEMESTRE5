//configuracao do express
const express = require('express')
const app = express()
const port = 3000

//deconding / enconding
app.use(express.urlencoded({extended: true}))

/*
-Configuracao de rotas
-GET, PUT, DELETE, POST
*/
app.get('/', (req, res) => {
    res.send('Meu express esta rodando...')
})

/*
-Configuracao da porta
*/
app.listen(port, () => {
    console.log(`Express is runnig on port ${port}`)
})