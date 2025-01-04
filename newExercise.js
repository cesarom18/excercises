const fs = require("fs");

const content = `function ${process.argv[2]}() {
    
}

const test1 = null;

${process.argv[2]}(test1);`;

fs.writeFile(`./codewars/${process.argv[2]}.js`, content, err => {
    if (err) {
        console.error(`Error Al Crear Archivo`);
    } else {
        console.error("Archivo Creado Exitosamente");
    }
});