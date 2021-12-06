import instructions from './instructions.mjs'

let oxygenRating = 0;
let co2Rating = 0;
let remainingBytesOxygen = [...instructions];
let remainingBytesCo2 = [...instructions];

// Loop over single bits
for (let i1=0; i1 < instructions[0].length; i1++) {
    let trueBitO = 0;
    let falseBitO = 0;
    let trueBitC = 0;
    let falseBitC = 0;

    // Loop over entire byte (string) of remainingBytesOxygen
    for (let i=0; i < remainingBytesOxygen.length; i++) {
        const inst = remainingBytesOxygen[i]

        if (inst[i1] === '1') trueBitO++;
        else if (inst[i1] === '0') falseBitO++;
    }

    // Loop over entire byte (string) of remainingBytesCo2
    for (let i=0; i < remainingBytesCo2.length; i++) {
        const inst = remainingBytesCo2[i]

        if (inst[i1] === '1') trueBitC++;
        else if (inst[i1] === '0') falseBitC++;
    }

    if (remainingBytesOxygen.length !== 1) {
        if (trueBitO >= falseBitO) {
            // Remove falseBit Numbers for oxygenRating
            remainingBytesOxygen = remainingBytesOxygen.filter((_) => {
                return _.charAt(i1) === '1'
            })
        }
        else {
            // Remove trueBit Numbers for oxygenRating
            remainingBytesOxygen = remainingBytesOxygen.filter((_) => {
                return _.charAt(i1) === '0'
            })
        }
    }

    if (remainingBytesCo2.length !== 1) {
        if (trueBitC >= falseBitC) {
            // Remove trueBit Numbers for CO2Rating
            remainingBytesCo2 = remainingBytesCo2.filter((_) => {
                return _.charAt(i1) === '0'
            })
        }
        else {
            // Remove falseBit Numbers for CO2Rating
            remainingBytesCo2 = remainingBytesCo2.filter((_) => {
                return _.charAt(i1) === '1'
            })
        }
    }

}

oxygenRating = parseInt(remainingBytesOxygen[0], 2)
co2Rating = parseInt(remainingBytesCo2[0], 2)

const result = oxygenRating * co2Rating
console.log(result)