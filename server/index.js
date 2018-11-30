require('dotenv').config();

const express = require('express');
const massive = require('massive')
const bodyParser = require('body-parser');
const controller = require('./controller')

const app = express();

app.use(bodyParser.json())

app.get('/api/inventory', controller.getProducts)
app.post('/api/inventory', controller.addProduct)
app.delete('/api/inventory/:id', controller.deleteProduct)
app.put('/api/inventory/:id', controller.updateProduct)

const port = process.env.serverPort

massive(process.env.CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('The db is now connected')
    app.listen(port, () => console.log('The server is running on port ' + port))
}).catch(error => console.log(error)); 