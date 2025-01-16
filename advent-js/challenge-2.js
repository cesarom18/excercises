function challenge_2(names) {
    const maxLength = Math.max(...names.map(name => name.length));
    const width = maxLength + 2 + 2;

    const sup = '*'.repeat(width);

    const content = names.map(name => {
        const spaces = maxLength - name.length;
        return `* ${name}${' '.repeat(spaces)} *`;
    });

    const inf = '*'.repeat(width);

    return [sup, ...content, inf].join('\n');
}

const test1 = ['midu', 'madeval', 'educalvolpz'];

challenge_2(test1);