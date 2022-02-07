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

// función v1 logGreeting
logGreeting(function(){console.log(`Hola`)});


