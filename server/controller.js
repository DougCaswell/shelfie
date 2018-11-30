

module.exports = {

    getProducts: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory().then((products) => {
            res.status(200).send(products)
        }).catch(error => {
            console.log(error)
            res.sendStatus(500)
        });
    },

    addProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const { name, price, image_url } = req.body
        dbInstance.add_inventory([name, price, image_url]).then(() => res.sendStatus(201)).catch(error => {
            console.log(error)
            res.sendStatus(500)
        });
    },

    deleteProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        dbInstance.delete_item(id).then(() => res.sendStatus(200)).catch(error => {
            console.log(error)
            res.sendStatus(500)
        });
    },

    updateProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, price, image_url} = req.body;
        const { id } = req.params;
        dbInstance.update_item([name, price, image_url, id]).then(() => res.sendStatus(200)).catch(error => {
            console.log(error)
            res.sendStatus(500)
        });
    }

}