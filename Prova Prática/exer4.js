const fs = require('fs');

const data = fs.rename('aquivoAntigo', 'aquivoNovo', (err, data) => {
    if (err);
    console.log('Renomear completo!');
});

console.log(data);