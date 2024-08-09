// Aula 1 - criando uma função
function minhaFuncao() {
    console.log("Testando.");
}

minhaFuncao(); // aqui você declara a função para se tornar vísivel.
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável.");
}

minhaFuncaoEmVariavel();


function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Imprimindo algo.");
funcaoComParametro("Outra função.");