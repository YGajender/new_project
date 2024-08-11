import * as productService  from '../services/productService.js';

export const getproduct = async (req,res) => {
    try {
        const result = await productService.getProduct();
        res.status(200).send(result);
    } catch (error) {
        console.error("Error in getting product:", error);
        res.status(500).send("Internal Server Error");
    }
};

export const addproduct = async (req,res) => {
    try {
        const data = req.body
        const result = await productService.addProduct(data);
        res.status(200).send(result);
    } catch (error) {
        console.error("Error in adding product:", error);
        res.status(500).send("Internal Server Error");
    }
};

export const updateproduct = async (req,res) => {
    const {productId} = req.body;
    const info = req.body;
    try {
        if (!(productId)){
            res.status(400).send("product Id is required");
        }
        const result = await productService.updateProduct(productId,info);
        res.status(200).send(result);
    } catch (error) {
        console.error(`Error in updating product ${productId}:`, error);
        res.status(500).send("Internal Server Error");
    }
};

export const deleteproduct = async (req,res) => {    
    const {productId} = req.query;
    try {
        if (!productId){
            res.status(400).send("product Id is required");
        }else{
            const result = await productService.deleteProduct(productId);
            res.status(200).send(result);
        }
    } catch (error) {
        console.error(`Error in deleting product Id ${productId}:`, error);
        res.status(500).send("Internal Server Error");
    }
};

export const getproductByUserId = async (req,res) => {
    const {userId} = req.body;
    const info = req.body;
    try {
        if (!(userId)){
            res.status(400).send("product Id is required");
        }
        const result = await productService.getproductByUserId(userId,info);
        res.status(200).send(result);
    } catch (error) {
        console.error(`Error in updating product ${userId}:`, error);
        res.status(500).send("Internal Server Error");
    }
};