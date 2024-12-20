import { loginSchema, signupSchema } from "../utils/schemas.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export async function handleSignup(req, res) {
  try {
    const data = req.body;
    const validatedData = signupSchema.safeParse(data);
    if (!validatedData.success) {
      return res
        .status(400)
        .json({ msg: "Invalid input", errors: validatedData.error.errors });
    }

    const { username, email, password } = validatedData.data;
    const isUserExists = await prisma.user.findUnique({
      where: { email: email },
    });
    if (isUserExists) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    if (!newUser)
      return res.status(400).json({ msg: "error in creating new user" });
    return res.status(200).json({ msg: "New user created" });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}
export async function handleLogin(req, res) {
  try {
    const data = req.body;
    const validatedData = loginSchema.safeParse(data);
    if (!validatedData.success) {
      return res
        .status(400)
        .json({ msg: "Invalid input", errors: validatedData.error.errors });
    }
    const { email, password } = validatedData.data;
    const isUserExists = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!isUserExists)
      return res.status(400).json({ msg: "First create your account" });
    await generateTokenAndSetCookie({email}, res);

    return res.status(200).json({ msg: "Logged In" });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}
export async function handleLogout(req, res) {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    return res.status(200).json({ msg: "Logout sucessfull" });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}
export async function handleGetMe(req,res){
    try {
      const user = req.user;
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ msg: "Internal Server Error" });
    }
}