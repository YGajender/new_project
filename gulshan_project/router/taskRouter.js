import {Router} from  'express';
const router =  Router();

import {addtask,gettask,updatetask,deletetask,gettaskAssignByUserId,gettaskAssignToUserId} from '../controllers/taskController.js';

router.post('/', addtask);

router.get('/', gettask);

router.patch('/', updatetask);

router.delete('/', deletetask);

router.get('userId/', gettaskAssignToUserId);

router.get('userId/', gettaskAssignByUserId);

export default router;