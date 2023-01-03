// Escopo do bloco - variáveis ( let, const) declaradas em um bloco {}só podem ter acesso dentro dele.

function testBlock(){
   if(true) {
     let a = 7
   }
   console.log(a)
 }

 testBlock() // Lança um ReferenceError "a" não está definido
