import express from 'express'
import { protectRoute } from '../utils/protectRoute.js';
import { handleCreateForm, handleCreateResponse, handleGetAllForms, handleGetEditForm, handleGetForm, handleGetResonses, handlePublishForm } from '../controllers/form.js';
const router = express.Router();

router.post("/create", protectRoute, handleCreateForm)
router.get("/get-form/:id", protectRoute,handleGetEditForm);
router.put("/publish-form/:id", protectRoute, handlePublishForm)
router.get("/getAllForms", protectRoute, handleGetAllForms)
router.get("/view-form/:id", protectRoute, handleGetForm);
router.post("/create-response", protectRoute, handleCreateResponse);
router.get("/get-responses/:id", protectRoute, handleGetResonses)
export default router; 