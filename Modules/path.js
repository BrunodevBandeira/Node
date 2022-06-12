const path = require("path");

// basename: Lê apenas o nome do arquivo atual(path.js)
console.log(path.basename(__filename));

// dirname: Pega o Diretório Atual
console.log(path.dirname(__filename));

// extname:Extenção do arquivo
console.log(path.extname(__filename));

// parse:Criar objeto Path
console.log(path.parse(__filename));

// join:Juntar caminhos de arquivos
console.log(path.join(__filename, "test", "test.html"));






