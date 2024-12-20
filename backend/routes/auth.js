import express from 'express'
import { handleGetMe, handleLogin, handleLogout, handleSignup } from '../controllers/auth.js';
import { protectRoute } from '../utils/protectRoute.js';
const router = express.Router();

router.post("/signup", handleSignup)
router.post("/login", handleLogin)
router.post("/logout", handleLogout)
router.get("/me",protectRoute,handleGetMe)
export default router;