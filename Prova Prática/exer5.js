const os = require('os');

const retorne = os.cpus('retornar/documento', () => {
    const retorne = [
        {
            model:'Intel(R) Core(TM) i3-10110U CPU 2.10GHz',
            speed: 2099,
            times: {
                user: 6590810,
                nice: 80870,
                sys: 1818490,
                idle: 38671490,
                irq: 0,
            }
        },
    ]
});

retorne.liste('Está retornado com sucesso!')
console.log(retorne);