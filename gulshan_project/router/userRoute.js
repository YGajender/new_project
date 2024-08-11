import {Router} from  'express';
const router =  Router();

import {addUser,getUser,updateUser,deleteUser} from '../controllers/userController.js';

router.post('/', addUser);

router.get('/', getUser);

router.patch('/', updateUser);

router.delete('/', deleteUser);

export default router;