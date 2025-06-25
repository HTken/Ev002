const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pagoHora = 30;
const pagoExtra = 31;
const descuentoFalta = 30;

rl.question('Ingrese las horas que usted trabajo :v : ', (horasInput) => {
    rl.question('Ingrese las horas extras que hizo :v : ', (extrasInput) => {
        rl.question('Ingrese las faltas que cometio: ', (faltasInput) => {

            const horas = parseInt(horasInput);
            const extras = parseInt(extrasInput);
            const faltas = parseInt(faltasInput);

            if (isNaN(horas) || isNaN(extras) || isNaN(faltas)) {
                console.log('Por favor, ingrese solo números válidos.');
            } else {
                const sueldo = (horas * pagoHora) + (extras * pagoExtra) - (faltas * descuentoFalta);

                console.log('\n--- RESUMEN DE SUELDO ---');
                console.log(`Horas normales: ${horas} x S/ ${pagoHora} = S/ ${horas * pagoHora}`);
                console.log(`Horas extras:   ${extras} x S/ ${pagoExtra} = S/ ${extras * pagoExtra}`);
                console.log(`Descuento por faltas: ${faltas} x S/ ${descuentoFalta} = -S/ ${faltas * descuentoFalta}`);
                console.log(`\nSueldo total: S/ ${sueldo}`);
            }

            rl.close();
        });
    });
});


//  node sueldo.js para la ejecucion en terminal profe en nuevo terminal    XD-(----(