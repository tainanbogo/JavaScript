function parImp(n) {
    if (n % 2  == 0) {
        return "Par"
    } else {
        return "Impar"
    }
}

let res = parImp(9)

console.log(res)
console.log(parImp(2))