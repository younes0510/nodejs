// HELLO WORLD

console.log("HELLO WORLD");


// créer un serveur  

const http = require('http');

const server = http.createServer((req, res) => {
  res.write("Hello world ");
  res.end()

});

server.listen(3000);
// Créer un fichier
const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    return console.error('Error creating file:', err);
  }
  console.log('File "welcome.txt" has been created with the content: "Hello Node"');
});

// afficher le contenu de welcome.txt

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    return console.error('Error reading file:', err);
  }
  console.log('Content of "welcome.txt":', data);
});

// Créer un fichier nommé "password-generator"

let generateor = require('password-generator');
console.log(generateor(20, false))
