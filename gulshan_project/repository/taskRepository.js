import * as model from '../models/index.js'

export async function getTask() {
    try {
        const result = await model.taskModel.findAll({
            include:[
                {
                    model: model.productModel,
                    as:'product',
                    include:[
                        {
                            model: model.userModel,
                            as:'users'
                        }
                    ]
                },
                {
                    model: model.userModel,
                    as:'assignTo',
                },
                {
                    model: model.userModel,
                    as:'assignBy',
                }
            ]
        });
        return result;
    } catch (error) {
        console.error(`Error in getting all task:`, error);
        throw error;
    };
};

export async function addtask(data) {    
    try {
        const result = await model.taskModel.create(data);
        return result;
    } catch (error) {
        console.error("Error in add task:", error);
        throw error;
    }
};

export async function updateTask(taskId, info) {
    try {
        const result = await model.taskModel.update(info, {
            where: {
                taskId: taskId
            }
        });
     return result; 
    } catch (error) {
        console.error(`Error updating task ${taskId} :`, error);
        throw error; 
    }
};

export async function deleteTask (taskId) {
    try {
        const result = await model.taskModel.destroy({
            where: { taskId },
            individualHooks: true
        });
        return { message: 'task deleted successfully' };
    } catch (error) {
        console.error('Error during soft delete:', error);
        throw new Error('Unable to soft delete account');
    }
};

export async function gettaskAsignToUserId(AssignTo) {
    try {
        const result = await model.taskModel.findAll({
            include:[
                {
                    model: model.userModel,
                    as:'assignTo',
                }
            ],
            where: {
                assign_to: AssignTo
            }
        });
        return result;
    } catch (error) {
        console.error(`Error in getting assign to:`, error);
        throw error;
    };
};

export async function gettaskAssignByUserId(AssignBy) {
    try {
        const result = await model.taskModel.findAll({
            include:[
                {
                    model: model.userModel,
                    as:'assignTo',
                }
            ],
            where: {
                assign_by: AssignBy
            }
        });
        return result;
    } catch (error) {
        console.error(`Error in getting assign by :`, error);
        throw error;
    };
};