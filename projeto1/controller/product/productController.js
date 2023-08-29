//products
exports.getAll = (req, res) => {
    //buscar em bd (repositorio)
    res.json(products);
};

//recebe o paramentro id
exports.getId = (req, res) => {
    //exibe o paramentro id
    res.send('ID =' + req.params.id)
    //res.json(products[req.params.id]) //retorna em forma de json
};

exports.updateProduct = (req, res) => {
    const id = Number(req.params.id)// problema que pode acontecer: falta de converter em number

    const product = products.find(p => p.id === id);

    //if(!product) return res.status(404).send('Product not found'); //Retorna em forma de status
    if(!product) return res.status(404).json(
        {
            message: "Product not found"
        }
    );

    res.json(product);
};

exports.deleteproduct = (req, res) => {
    let {name} = req.body;
    let id = req.params.id;

    const product = products.find(p => p.id === id);

    if(!product) return res.status(404).json(
        {
            message: "Product not found"
        }
    );

    products[req.params.id] = name

    return res.json(products[id]);

};

app.post('/api', (req, res) => {
    let name = req.body.name
    console.log(`name is ${name}`)

    products.push({ id: products.length + 1, name: name})

    return res.json(products)
})