function calcular() {
    n1 = parseFloat(document.getElementById("nota1").value);
    n2 = parseFloat(document.getElementById("nota2").value);
    n3 = parseFloat(document.getElementById("nota3").value);
    n4 = parseFloat(document.getElementById("nota4").value);


let soma = (n1 + n2 + n3 + n4);

let media = soma / 4;

let mediaFinal = media.toFixed(2);

document.getElementById ("resultado").innerHTML = `<br/><span class="black">Sua média é: ${mediaFinal}</span><br/>`;

    if (mediaFinal >=6.0) {
        document.getElementById("passou").innerHTML = `<span class="green">Você foi aprovado</span>`;
    } else {
    document.getElementById("passou").innerHTML = `<span class="red">Você foi reprovado</span>`;
    }
}