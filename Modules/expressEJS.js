const express = require("express");
const UserModel = require('../src/models/user.model');

const app = express();
app.use(express.json()); //Reconhece que vamos sempre usar JS nas requisições 


app.set('view engine', 'ejs');
app.set('views', 'src/views');


//Middlewares: esta uma fase antes da requisição
//ou seja, ela é requisitada antes de qualquer reqsição
app.use((req, res, next) => {
    //console.log(req.body);
    console.log(`Request Type: ${req.method}`);
    console.log(`Content Type: ${req.headers['Content-Type']}`);
    console.log(`Date: ${new Date()}`);
    next();
})

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

app.get("/users/:id", async (req, res) => {
    try {

        const id = req.params.id;
        const user = await UserModel.findById(id);
        return res.status(200).json(user);

    } catch(error) {
         return res.status(500).send(error.message)
    }
 });



app.post("/users", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
    res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(users);
    } catch(error) {
        res.status(500).send(error.message);
    }
})

app.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndRemove(id);
        res.status(200).json(user);
    } catch(error) {
        res.status(500).send(error.message);
    }
});


app.get("/views/users", async(req, res) => {
    res.render("index");
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