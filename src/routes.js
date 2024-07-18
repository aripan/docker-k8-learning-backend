const express = require("express");
const router = express.Router();
const {login, register} = require("./controllers/Auth.Controller");
const {getAllProducts, createNewProduct, findProductById, updateAProduct, deleteAProduct} = require("./controllers/Product.Controllers");

router.get('/', (req, res) => {
    res.send('Welcome to the API');
});
router.post('/login', login);
router.post('/register', register);
//Get a list of all products
router.get('/products', getAllProducts);

//Create a new product
router.post('/products', createNewProduct);

//Get a product by id
router.get('/products/:id', findProductById);

//Update a product by id
router.patch('/products/:id', updateAProduct);

//Delete a product by id
router.delete('/products/:id', deleteAProduct);

module.exports = router;