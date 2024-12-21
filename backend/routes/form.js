import express from 'express'
import { protectRoute } from '../utils/protectRoute.js';
import { handleCreateForm } from '../controllers/form.js';
const router = express.Router();

router.post("/create", protectRoute, handleCreateForm)

export default router; 