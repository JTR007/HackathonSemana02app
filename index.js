/*

//Ejercicio #0
let john = { 
    
    name: "John", 
    surname: "Smith", 
    id: 1

};
    
let pete = { 
    
    name: "Pete", 
    surname: "Hunt", 
    id: 2

};

let mary = { 
    
    name: "Mary", 
    surname: "Key", 
    id: 3 

};

let users = [ john, pete, mary]

const usersMapped = users.map((user) => {

    return {

        //fullname: `${user.name} ${user.surname}`,
        fullname: user.name + " " + user.surname,
        id: user.id,

    }

});

console.log(usersMapped);
//----------------------------------------------------------------------------------//
//Ejercicio #1

//Ejercicio #1 ¿Se copia el arreglo? 
//¿Qué va a mostrar este código? --> Muestra una lista de frutas
let fruits = ["Apples", "Pear", "Orange"];

// insertar un nuevo valor en la "copia"

let shoppingCart = fruits;

shoppingCart.push("Banana", "Grapes", "Pineapple", "Tangerines");
alert( fruits.length ); // ?

console.log(shoppingCart);
console.log(fruits);

//----------------------------------------------------------------------------------//
//Ejercicio #2
// 1. Crea un arreglo styles con los items "Jazz" y "Blues"
let styles = ["Jazz", "Blues"];

console.log(styles);

// 2. Adjunta Rock-n-Roll al final
let lastWord = "Rock-n-Roll"//prompt("Inserte palabra")
let addEnd = styles.push(lastWord);

console.log(styles);

// 3. Reemplaza el valor en el medio por "Classics"


let position = prompt("Inserte posicion")//styles.indexOf("Jazz");

let deleteElement = styles.splice(position, 1);

//console.log(position);

if (position % 2 == 0) {
    
    let remplece = "Classics"//prompt("Inserte el nombre");
    styles[position - 1] = remplece;

    let array = styles.concat(lastWord);
    console.log(array);

} else {

    alert("Error");

}

// 4. Quita el primer valor del arreglo y muestralo
let arrayConct = styles.concat(lastWord);
let deleteFirst = arrayConct.shift();

console.log(arrayConct);

// 5. Anteponer Rap y Reggae en el arreglo

let arrLenght = arrayConct.unshift("Rap", "Reggae");

console.log(arrayConct);


//----------------------------------------------------------------------------------//
//Ejercicio #3

let numbers = [];

function sumarInput(addNumber, otherNumber){

    addNumber = prompt("inserte un numero");

    if (addNumber >= 0) {
        
        otherNumber = prompt("inserte otro numero");
        
        if (otherNumber >=0) {
         
            let add = numbers.push(addNumber, otherNumber);
            suma = Number(addNumber) + Number(otherNumber);

            alert("La suma de los numeros es " + suma);
            
        } else {

            alert("no ingreso un numero");
        
        }
    
    } else {
        
        alert("no ingreso un numero");
    
    }
}

sumarInput();
console.log(numbers);

//----------------------------------------------------------------------------------//
//Ejercicio #4

function filterRange(arr, a, b){

    arr = [5, 3, 8, 1];
    a = prompt("Ingrese el primer rango");
    b = prompt("Ingrese el segundo rango");

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] >= a && arr[i] <= b) {
            console.log(arr[i])
        }
    }

    alert(arr);

}
filterRange();

//----------------------------------------------------------------------------------//
//Ejercicio #5

let array = ["HTML", "JavaScript", "CSS"]

const copySortered = (arr) => {

    arr = array.sort();
    console.log(arr);

}

alert(array);
copySortered();

*/
//----------------------------------------------------------------------------------//
//Ejercicio #6

let methods;
let calculate;

const Calculator = () => {

        this.methods = {

            "-" : (a, b) => a - b,
            "+" : (a, b) => a + b,
            "*" : (a, b) => a * b,
            "/" : (a, b) => a / b
        };

        this.calculate = (str) =>{

            let split = str.split(" "),
                a = +split[0],
                op = split[1],
                b = +split[2];

                if (!this.methods[op] || isNaN(a) || isNaN(b)) {
                    return NaN;
                }
                return this.methods[op](a, b);
        };

        this.addMethod = (name, func) =>{
            this.methods[name] = func;
        };

    }

    Calculator();

//----------------------------------------------------------------------------------//
//Ejercicio #7
/*
let mensaje;
let login = prompt("Escriba si es Empleado o Director");

    login == "Empleado" ? 
    mensaje = "Hola": login == "Director"? 
    mensaje = "Saludos": login == ""? 
    mensaje = 'Sin inicio de sesión': mensaje = '';
    
console.log(mensaje);
*/