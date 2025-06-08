const fs = require('fs');
const path = require('path');

const pasta = '.'; // pasta atual

fs.readdir(pasta, (err, arquivos) => {
  if (err) {
    console.error('Erro ao ler a pasta:', err);
    return;
  }

  console.log('Arquivos na pasta atual:');
  arquivos.forEach(arquivo => {
    console.log(arquivo);
  });
});

