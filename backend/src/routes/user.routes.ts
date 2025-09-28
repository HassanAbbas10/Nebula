import express from 'express';
import getAllUsers from '../controller/user.controller.ts';

const router = express.Router();

router.get('/allusers', getAllUsers);

export default router;
