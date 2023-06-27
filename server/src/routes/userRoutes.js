import express from 'express';
import {handleListUsers, handleAddUsers} from '../controllers/userController.js';

const userRoutes = express.Router();
userRoutes.get('/list', handleListUsers);
userRoutes.post('/add', handleAddUsers);
userRoutes.put('/edit', handleListUsers);
userRoutes.delete('/delete', handleListUsers);

export default userRoutes