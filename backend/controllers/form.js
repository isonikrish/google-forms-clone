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

export async function handleGetForm(req, res) {
  try {
    const id = req.params.id;

    const userId = req.user.id;

    if (!id) return res.status(400).json({ msg: "No id provided" });
    const form = await prisma.form.findFirst({
      where: {
        id: parseInt(id),
        userId: userId,
      },
    });
    if (!form) return res.status(400).json({ msg: "Id is incorrect" });
    return res.status(200).json(form);
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

export async function handlePublishForm(req, res) {
  try {
    const { questions } = req.body;
    const userId = req.user.id;
    const id = req.params.id;
    const result = await prisma.form.update({
      where: { id: parseInt(id) },
      data: {
        questions,
        status: "PUBLISHED",
      },
    });

    return res.status(200).json({ msg: "Form Published" });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}
