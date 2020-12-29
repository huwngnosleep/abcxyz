// some character has special meaning
// so we must use escaped for them in RegEx

const str = "I have 1000$"
console.log(str.replace(/$/, ' dollars')) // no change because $ has special meaning

console.log(str.replace(/\$/, ' dollars'))
