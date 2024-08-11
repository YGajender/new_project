import * as user from '../repository/userRepository.js';

export async function getUser(){
    return await user.getUser()
};

export async function addUser(data){
    return await user.addUser(data)
};

export async function updateUser(userId,info){
    return await user.updateUser(userId,info)
};

export async function deleteUser(userId){
    return await user.deleteUser(userId)
};