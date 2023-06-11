const exprees = require("express");

const route = exprees.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
route.get("/users", async (req, res) => {
  try {
    const user = await prisma.user.findMany();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});
route.post("/user", async (req, res) => {
  const users = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        nom: users.name,
        prenom: users.prenom,
        numTel: users.tel,
        sex: users.sex,
      },
    });
    res.status(201).send({ message: "created " });
  } catch (error) {
    res.status(500).send({ message: "faild" });
  }
});

route.delete("/user", async (req, res) => {
  const { id } = req.body;

  try {
    const deletedUsers = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json(deletedUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete users" });
  }
});
module.exports = route;
