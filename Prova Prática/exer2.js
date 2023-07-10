const path = require('path');

const extrair = path.extname('documento/extraido', () => {
    path.extname = {
        root:'',
        dir: 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf',
        base: 'planodecurso.pdf',
        ext: 'pdf',
        name: 'planodecurso',
    };
    return;
});

console.log(extrair);

