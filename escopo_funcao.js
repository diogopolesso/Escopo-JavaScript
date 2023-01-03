// Escopo da Função - variáveis, funções e parâmetros declarados em uma função são acessíveis dentro dessa função, mas não fora dela.

function myFavoriteFunc(name) {
    if (true) {
        var h = "Hello " + name
    }
    return h
}
myFavoriteFunc("Diogo")

console.log(name) // Lança um ReferenceError "name" não está definido
console.log(h) //não continua aqui
