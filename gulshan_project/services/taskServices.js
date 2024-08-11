import * as task from '../repository/taskRepository.js';

export async function gettask(){
    return await task.getTask()
};

export async function addtask(data) {
    return await task.addtask(data)
}

export async function updatetask(taskId,info){    
    return await task.updateTask(taskId,info)
};

export async function deletetask(taskId){
    return await task.deleteTask(taskId)
};

export async function gettaskAssignToUserId (AssignTo){
    return await task.gettaskAsignToUserId(AssignTo)
}

export async function gettaskAssignByUserId (AssignBy){
    return await task.gettaskAssignByUserId(AssignBy)
}