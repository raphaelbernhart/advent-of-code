import instructions from './instructions.mjs'

let gammaR = 0;
let epsilonR = 0;
let trueBit = 0;
let falseBit = 0;

for (let i1=0; i1 < instructions[0].length; i1++) {
    trueBit = 0;
    falseBit = 0;

    for (let i=0; i < instructions.length; i++) {
        const inst = instructions[i]
    
        if (inst[i1] === '1') trueBit++;
        else if (inst[i1] === '0') falseBit++;
    }

    if (trueBit > falseBit) {
        gammaR += '1'
        epsilonR += '0'
    }
    else if (trueBit < falseBit) {
        gammaR += '0'
        epsilonR += '1'
    }
}

gammaR = parseInt(gammaR, 2)
epsilonR = parseInt(epsilonR, 2)

const result = gammaR * epsilonR
console.log(result)