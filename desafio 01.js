let nivel = prompt("Digite o nivel atual do personagem: "); 
let personal1 = {
    'nome' : "Besouro",
    'nivel' : 8050,
    'classificacao' : nivel
};

if (nivel < 1000){
    classificacao = "Ferro";
} else if ((nivel > 1000) || (nivel <= 2000)){
    classificacao = "Bronze"
}  else if ((nivel > 2000) || (nivel <= 5000)){
    classificacao = "Prata"
} else if ((nivel > 5000) || (nivel <= 7000)){
    classificacao = "Ouro"
} else if ((nivel > 7000) || (nivel <= 8000)){
    classificacao = "Platina"
} else if ((nivel > 8000) || (nivel <= 9000)){
    classificacao = "Ascendente"
} else if ((nivel > 9000) || (nivel <= 10000)){
    classificacao = "Imortal"
} else {
    classificacao = "Radiante"
}

console.log(
     `O Herói de nome ${personal1['nome']} 
    está no nível de ${personal1['classificacao']}`
);
