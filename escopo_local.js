// Escopo Local - Uma variável se torna local quando ela é declarada dentro de uma função, de tal maneira a qual ela somente estará acessível dentro dessa função.

var nome = "Diogo";

// (ESCOPO
function myName() {
  var myLastName = "Polesso";
  console.log('Meu Nome é ' + nome + ' ' + myLastName);
}
// LOCAL)

console.log('Meu nome é ' + nome + ' ' + myLastName);
myName();


// O Escopo local se delimita a chave de abertura e fechamento da função myName.
