const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el alto: ', (alto) => {
    rl.question('Ingrese el ancho: ', (ancho) => {
        const Calto = parseInt(alto);
        const Cancho = parseInt(ancho);

        if (isNaN(Calto) || isNaN(Cancho) || Calto < 2 || Cancho < 2) {
            console.log('Porfa manito ingresa numeros mayores a 2 shi XD');
        } else {
            for (let i = 0; i < Calto; i++) {
                let fila = '';
                for (let j = 0; j < Cancho; j++) {
                    if (i === 0 || i === Calto - 1 || j === 0 || j === Cancho - 1) {
                        fila += '* ';
                    } else {
                        fila += '  ';
                    }
                }
                console.log(fila);
            }
        }

        rl.close();
    });
});


//  node cuadrilatero.js para la ejecucion en terminal profe en nuevo terminal    XD-(----(


