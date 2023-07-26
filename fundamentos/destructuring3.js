function rand({min=0, max=1000}){
    return Math.floor(Math.random() * (max - min) + min);
}

const obj = {max: 50, min: 40}
console.log(rand(obj))


