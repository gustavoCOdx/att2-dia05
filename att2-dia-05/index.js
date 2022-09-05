function media(){
    var nota1 = Number(document.getElementsByTagName('input')[0].value)
    var nota2 = Number(document.getElementsByTagName("input")[1].value)
    var media = (nota1 + nota2) / 2;
    if (media >= 7 && media < 10){
      document.querySelector('p').innerHTML = `O aluno esta aprovado`;
    } else if (media >= 10) {
      document.querySelector('p'),innerHTML `O aluno tirou nota ${media} e esta aprovado com distinção`; 
    } else {
      document.querySelector('p').innerHTML = `O aluno esta reprovado`;
    }
    }