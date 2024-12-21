import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function handleCreateForm(req, res) {
  try {
    const userId = req.user.id;
    const { title } = req.body;
    if (!title || !userId) {
      return res.status(400).json({ msg: "Not correct inputs" });
    }
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(400).json({ msg: "Unauthorized" });
    const newForm = await prisma.form.create({
      data: {
        title,
        userId,
        status: "UNPUBLISHED",
      },
    });
    res.status(200).json(newForm);
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}