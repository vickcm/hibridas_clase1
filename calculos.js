function suma (num1, num2) {
    return num1 + num2
}

function dividir (num1, num2) {
    return num1/num2
}

function encontrarMayor(arr) {
    let mayor = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > mayor) {
        mayor = arr[i];
      }
    }
    return mayor;
  }

let array = [5, 2, 9, 1, 75];
let array2 = [2,8,9,7,5,6]


console.log(suma(4,2))
console.log(dividir(4,2))
console.log(encontrarMayor(array)); 
console.log(suma(5,10))
console.log(dividir(20,2))
console.log(dividir(20,0))
console.log(encontrarMayor(array2)); 






