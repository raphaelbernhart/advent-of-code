import instructions from './instructions.mjs'

let horizontalP = 0;
let depth = 0;

// Main loop to execute instruction
for (let i = 0; i < instructions.length; i++) {
    const instr = instructions[i]
    // Get the instruction integer value
    const unit = parseInt(instr[instr.length-1])

    // Figure out the instruction
    // const type = instr.split('\x20')[0]
    const type = instr[0]
    // Add the value to depth or horizontal Position
    if (type === 'f') horizontalP += unit
    else if (type === 'u') depth -= unit
    else if (type === 'd') depth += unit
}

// Multiply the depth and horizontal position
const product = horizontalP * depth
console.log(product)