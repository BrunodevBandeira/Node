const express = require("express");
const UserModel = require('../src/models/user.model');

const app = express();
app.use(express.json());

app.get("./home", (req, res) => {
    res.contentType("application/html");
    res.status(200).send("<h1> Ola mundo!!! </h1>");
});


app.get("/users", async (req, res) => {
   try {
        const users = await UserModel.find({});
        res.status(200).json(users);
   } catch(error) {
        return res.status(500).send(error.message)
   }
});

//app.get("/users", async (req, res))


app.post("/users", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
    res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

const port = 8080;
app.listen(port, () => console.log(`Rodando com express na porta ${port}!`));

/*
const users = [
    {
        name: "John Doe",
        email: "john@doe.com",
    },
    {
        name: "Jane Doe",
        email: "Jane@doe.com",
    },
];

    res.status(200).json(users);
*/