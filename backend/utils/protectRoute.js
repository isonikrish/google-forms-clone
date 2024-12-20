import jwt from 'jsonwebtoken'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function protectRoute(req, res, next) {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized: no token provided" });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await prisma.user.findUnique({where: {email: decoded.email}});
  if (!user) {
    return res.status(401).json({ msg: "Unauthorized: user not found" });
  }
  req.user = user;
  next()
}
