import express from 'express';
import { addcategory } from '../controller/category.controller.js';

const router = express.Router();

router.post('/add' , addcategory);

export default router;