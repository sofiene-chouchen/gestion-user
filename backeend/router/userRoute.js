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
module.exports = route;
