import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const generateTokenAndSetCookie = async (payload, res) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  if (!token) return res.status(400).json({ msg: "Error in creating a token" });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "production",
    path: "/", 
  });
};
