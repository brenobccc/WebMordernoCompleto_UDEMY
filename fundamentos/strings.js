const escola = "Cod3r"

console.log(escola.charAt(4))

//valor dentro da tabela Unicode
console.log(escola.charCodeAt(3))

console.log(escola.indexOf('3'))


console.log(escola.substring(1));
console.log(escola.substring(0,3))


console.log('Escola '.concat(escola).concat("!"));

console.log(escola.replace(3,'e'))

//expressão regular.
//substitua todos os digitos pela letra E
console.log(escola.replace(/\d/,'e'))

console.log('Ana,Maria,Pedro'.split(','))   