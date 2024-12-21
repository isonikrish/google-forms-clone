import express from 'express'
import { protectRoute } from '../utils/protectRoute.js';
import { handleCreateForm, handleGetForm, handlePublishForm } from '../controllers/form.js';
const router = express.Router();

router.post("/create", protectRoute, handleCreateForm)
router.get("/get-form/:id", protectRoute,handleGetForm);
router.put("/publish-form/:id", protectRoute, handlePublishForm)
export default router; 