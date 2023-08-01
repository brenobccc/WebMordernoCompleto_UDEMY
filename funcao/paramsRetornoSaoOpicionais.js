function area(l, a) {
    const area = a * l;

    if (a > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area;
    }
}
    

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 2, 2))
console.log(area(5,5))