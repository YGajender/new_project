import * as model from '../models/index.js'

export async function getUser() {
    try {
        const result = await model.userModel.findAll({
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        return result;
    } catch (error) {
        console.error(`Error in getting all user:`, error);
        throw error;
    };
};

export async function addUser(data) {
    try {
        const result = await model.userModel.create(data);
        return result;
    } catch (error) {
        console.error("Error in add user:", error);
        throw error;
    }
};

export async function updateUser(userId, info) {
    try {
        const result = await model.userModel.update(info, {
            where: {
                userId: userId
            }
        });
     return result; 
    } catch (error) {
        console.error(`Error updating user ${userId} :`, error);
        throw error; 
    }
};

export async function deleteUser (userId) {
    try {
        const result = await model.userModel.destroy({
            where: { userId },
            individualHooks: true
        });
        return { message: 'user deleted successfully' };
    } catch (error) {
        console.error('Error during soft delete:', error);
        throw new Error('Unable to soft delete account');
    }
};