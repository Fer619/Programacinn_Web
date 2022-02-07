//primera función greeting de la práctica

function greeting(){
   console.log(`Hola`);

}
greeting(); 

// segunda función en donde greeting se pasa como un parametro y es invocado por fn

function logGreeting(fn){
   fn();
};

logGreeting (greeting);

// función v2 logGreeting con mayor arreglo
logGreeting(function(){console.log(`Hola`)});


// función número 3 donde greetMe es una función que regresa una oración

let greetMe = function(){
   console.log('Hello from the function expression');
}

greetMe();

// Llamado de greetMe para regresar la misma oración
logGreeting(greetMe);


// Ejemplos de función de flecha gorda


let x= 2;
let cuadrado =(x)=> x + x ;

console.log (`${cuadrado(10)}`);


// función greeting con la función flecha gorda

greeting(()=>{console.log(`Hola`);})


// función logGreeting con la función flecha gorda
logGreeting(()=>{console.log(`Hola`);})

// función flecha gorda de la función greetMe

greetMe(()=>{console.log(`Hello from the function expression`);})



