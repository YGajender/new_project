import * as taskService  from '../services/taskServices.js';

export const gettask = async (req,res) => {
    try {
        const result = await taskService.gettask();
        res.status(200).send(result);
    } catch (error) {
        console.error("Error in getting task:", error);
        res.status(500).send("Internal Server Error");
    }
};

export const addtask = async (req,res) => {
    const {AssignTo,AssignBy,productId} = req.body;
    const data = req.body
    try {
        if (!(AssignTo,AssignBy,productId)){
           return res.status(400).send("AssignTo,AssignBy and task Id is required");
        }
        const result = await taskService.addtask(data);
        res.status(200).send(result);
    } catch (error) {
        console.error("Error in adding task:", error);
        res.status(500).send("Internal Server Error");
    }
};

export const updatetask = async (req,res) => {
    const {taskId,AssignTo,AssignBy,productId} = req.body;
    const info = req.body;
    try {
        if (!(taskId,AssignTo,AssignBy,productId)){
            res.status(400).send("taskId,AssignTo,AssignBy and product Id  is required");
        }
        const result = await taskService.updatetask(taskId,info);
        res.status(200).send(result);
    } catch (error) {
        console.error(`Error in updating task ${taskId}:`, error);
        res.status(500).send("Internal Server Error");
    }
};

export const deletetask = async (req,res) => {    
    const {taskId} = req.query;
    try {
        if (!taskId){
            res.status(400).send("task Id is required");
        }else{
            const result = await taskService.deletetask(taskId);
            res.status(200).send(result);
        }
    } catch (error) {
        console.error(`Error in deleting task Id ${taskId}:`, error);
        res.status(500).send("Internal Server Error");
    }
};

export const gettaskAssignToUserId = async (req,res) => {
    const {AssignTo} = req.body;
    try {
        if (!(AssignTo)){
            res.status(400).send("task Id is required");
        }
        const result = await taskService.gettaskAssignToUserId(AssignTo);
        res.status(200).send(result);
    } catch (error) {
        console.error(`Error in getting Assign To ${userId}:`, error);
        res.status(500).send("Internal Server Error");
    }
};

export const gettaskAssignByUserId = async (req,res) => {
    const {AssignBy} = req.body;
    try {
        if (!(AssignBy)){
            res.status(400).send("task Id is required");
        }
        const result = await taskService.gettaskAssignByUserId(AssignBy);
        res.status(200).send(result);
    } catch (error) {
        console.error(`Error in getting Assign By task ${AssignBy}:`, error);
        res.status(500).send("Internal Server Error");
    }
};