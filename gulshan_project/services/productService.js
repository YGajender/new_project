import * as product from '../repository/productRepository.js';

export async function getProduct(){
    return await product.getProduct()
};

export async function addProduct(data) {
    const { userId, products } = data;
    let results = [];
    for (const productData of products) {
        const productEntry = {
            userId,
            ...productData
        };
        try {
            const result = await product.addProduct(productEntry);
            results.push(result); 
        } catch (error) {
            console.error(`Error adding product: ${productData.productName}`, error);
            results.push({ error: `Failed to add product: ${productData.productName}`, details: error });
        }
    }
    return results;
}

export async function updateProduct(productId,info){    
    return await product.updateProduct(productId,info)
};

export async function deleteProduct(productId){
    return await product.deleteProduct(productId)
};

export async function getproductByUserId (UserId){
    return await product.getproductByUserId(UserId)
}