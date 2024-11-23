import express from 'express';
import { createProduct, deleteProduct, getProduct, getProductByName } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/',getProduct);
productRouter.post('/',createProduct);
productRouter.delete("/",deleteProduct);
productRouter.get("/:name",getProductByName)
productRouter.delete("/:name",deleteProduct)
export default productRouter;