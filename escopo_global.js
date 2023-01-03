// Escopo Global - variáveis ou funções declaradas no espaço de nomes global estão no escopo global e, portanto, estão acessíveis em qualquer lugar em nosso código.

var name = "global"

function globalFunc(){
    function internaFunc(){
        console.log(name) // name é global, então é acessível aqui.
    }
    internaFunc()
}
