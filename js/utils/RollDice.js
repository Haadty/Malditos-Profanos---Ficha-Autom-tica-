function Roll(faces) {
    return Math.floor(Math.random() * faces) + 1;
}

function DiceRoll(quant, faces) {
    let result = [];
    for (let i = 0; i < quant; i++) {
        result.push(Roll(faces));
    }
    return result;
}
















