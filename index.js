document.getElementById("submit").onclick = function (e) {
    const primeiraNota = parseFloat(document.getElementById("nota1").value);
    const segundaNota = parseFloat(document.getElementById("nota2").value);
    const terceiraNota = parseFloat(document.getElementById("nota3").value);
    const quartaNota = parseFloat(document.getElementById("nota4").value);
  
    const notaFinal = ((primeiraNota + segundaNota + terceiraNota + quartaNota) / 4).toFixed(1);
    const nomeAluno = document.getElementById("entradaNome").value;
  
    let resultado;
  
    if (notaFinal >= 6){
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado"
    }
    
    document.getElementById("resultado").innerHTML = `${nomeAluno} ficou com uma nota média de <em>${notaFinal}</em>`
  }