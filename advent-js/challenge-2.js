function challenge_2(names) {
    const longitudMaxima = Math.max(...names.map(nombre => nombre.length));
    const anchoMarco = longitudMaxima + 2 + 2;

    const marcoSuperior = '*'.repeat(anchoMarco);

    const contenido = names.map(nombre => {
        const espaciosFaltantes = longitudMaxima - nombre.length;
        return `* ${nombre}${' '.repeat(espaciosFaltantes)} *`;
    });

    const marcoInferior = '*'.repeat(anchoMarco);

    return [marcoSuperior, ...contenido, marcoInferior].join('\n');
}

const test1 = ['midu', 'madeval', 'educalvolpz'];

challenge_2(test1);