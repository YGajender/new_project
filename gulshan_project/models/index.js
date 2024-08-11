import userModel from './userModel.js';
import productModel from './productModel.js';
import taskModel from './taskModel.js';

productModel.belongsTo(userModel, { foreignKey: 'product_id', as: 'users' });
userModel.hasMany(productModel, { foreignKey: 'product_id', as: 'users' });
  
taskModel.belongsTo(productModel, { foreignKey: 'task_id', as: 'product' });
productModel.hasMany(taskModel, { foreignKey: 'task_id', as: 'product' });

taskModel.belongsTo(userModel, { foreignKey: 'assign_to', as: 'assignTo' });
userModel.hasMany(taskModel, { foreignKey: 'assign_to', as: 'assignTo' });

taskModel.belongsTo(userModel, { foreignKey: 'assign_by', as: 'assignBy' });
userModel.hasMany(taskModel, { foreignKey: 'assign_by', as: 'assignBy' });

export {
    userModel,
    productModel,
    taskModel
  };