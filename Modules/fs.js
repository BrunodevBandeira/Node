const fs = require("fs");
const path = require("path");

// =========> Criar uma pasta <============

fs.mkdir(path.join(__dirname, "/test"), (error) => {
    if (error) {
       return  console.log("Erro: ", error)
    }

    console.log("Pasta criada com sucesso!");
});


// =========> Criar um arquivo <===========
fs.writeFile(path.join(__dirname, "/test", "test.html"), ' Hello node!', (error) => { 
    if(error) {
       return console.log("Erro: ", error)
    }

    console.log("Arquivo criado com sucesso");

    // ===> Cria e add outra string já criada pela fs.writeFile
    fs.appendFile(path.join(__dirname, "/test", "test.html"), " Ola mundo", (error) => {
        if(error) {
            return console.log("Erro: ", error);
        }

        console.log("Arquivo modificado com sucesso");
    })

    //Ler arquivo
    fs.readFile(path.join(__dirname, "/test", "test.html"), "utf8", (error) => {
        if(error) {
            return console.log("Erro: ", error);
        }
    })
});