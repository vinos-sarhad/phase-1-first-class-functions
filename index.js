function callback(){
    console.log("I am callback function")
}


function receivesAFunction(callback){
    callback()
}

 

function returnsANamedFunction() {
    
    return function namedFunction() {
       
    };
  }
  


 
function returnsAnAnonymousFunction() {
     
    return function() {
      
    };
  }
  
  