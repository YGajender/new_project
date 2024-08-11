import * as model from '../models/index.js'

export async function getProduct() {
    try {
        const result = await model.productModel.findAll({
            include:[
                {
                    model: model.userModel,
                    as:'users'
                }
            ]
        });
        return result;
    } catch (error) {
        console.error(`Error in getting all product:`, error);
        throw error;
    };
};

export async function addProduct(data) {    
    try {
        const result = await model.productModel.create(data);
        return result;
    } catch (error) {
        console.error("Error in add product:", error);
        throw error;
    }
};

export async function updateProduct(productId, info) {
    try {
        const result = await model.productModel.update(info, {
            where: {
                productId: productId
            }
        });
     return result; 
    } catch (error) {
        console.error(`Error updating product ${productId} :`, error);
        throw error; 
    }
};

export async function deleteProduct (productId) {
    try {
        const result = await model.productModel.destroy({
            where: { productId },
            individualHooks: true
        });
        return { message: 'product deleted successfully' };
    } catch (error) {
        console.error('Error during soft delete:', error);
        throw new Error('Unable to soft delete account');
    }
};

export async function getproductByUserId(UserId) {
    try {
        const result = await model.productModel.findAll({
            where: {
                user_id: UserId
            }
        });
        return result;
    } catch (error) {
        console.error(`Error in getting all product:`, error);
        throw error;
    };
};