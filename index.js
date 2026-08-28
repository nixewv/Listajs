const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout  	
});

 const arr = [];
 
 function adicionarTarefa() { 
   rl.question("Qual é o item? (digite fim pra parar) ", (item) => {
      console.log(item);

      if (item === "fim") {
            // pare aqui

      for (let i = 0; i < arr.length; i++) {
         console.log(arr[i]);
    rl.close()
   }
    }  else {
         arr.push(item);
         adicionarTarefa();     
    }
 });
}

      adicionarTarefa();
