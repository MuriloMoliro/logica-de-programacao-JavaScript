const pessoaUm = {
    primeiroNome : "Murilo",
    ultimoNome : "Fagundes",
    idade : "20",
    corDosOlhos : "Marrom"
};

const pessoaDois = {
    primeiroNome : "Davi",
    ultimoNome : "Ribeiro",
    idade : "21",
    corDosOlhos : "Azul"
};

const pessoaTres = {
    primeiroNome : "Faberson",
    ultimoNome : "Reis",
    idade : "21",
    corDosOlhos : "Castanho"
};

document.getElementById("demoUm").innerHTML = pessoaUm.primeiroNome + " tem " + pessoaUm.idade + " anos de idade"

document.getElementById("demoDois").innerHTML = pessoaDois.primeiroNome + " tem " + pessoaDois.idade + " anos de idade"

document.getElementById("demoTres").innerHTML = pessoaTres.primeiroNome + " tem " + pessoaTres.idade + " anos de idade"