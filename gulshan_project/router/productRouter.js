import {Router} from  'express';
const router =  Router();

import {addproduct,getproduct,updateproduct,deleteproduct,getproductByUserId} from '../controllers/productController.js';

router.post('/', addproduct);

router.get('/', getproduct);

router.patch('/', updateproduct);

router.delete('/', deleteproduct);

router.get('userId/', getproductByUserId);

export default router;