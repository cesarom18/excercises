function myLanguageSkills(results) {
    return Object.entries(obj)
        .filter(([language, score]) => score >= 60)
        .sort((a, b) => b[1] - a[1])
        .map(([language]) => language);
}

const test1 = { "Java": 10, "Ruby": 80, "Python": 65 };

myLanguageSkills(test1);