const complements = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
}

function dnaStrand(dna) {
    let newDna = "";

    for (const letter of dna) {
        newDna += complements[letter]
    }

    return newDna;
}

const test1 = "ATTGC";

dnaStrand(test1);