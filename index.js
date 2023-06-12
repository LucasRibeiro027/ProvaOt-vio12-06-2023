//1-Primeira questão
function numeroPrimo(numero) {
    var numero = [];
    if (numero < 2) {
        return false;
    }
    for (let numero = 2; numero <= Math.sqrt(numero); numero++) {
        if (numero % numero === 0) {
            return false;
        }
    }
    return true;
}

function listarPrimos() {
    const primos = [];
    for (let numero = 1; numero <= 1000; numero++) {
        if (isPrime(numero)) {
            primos.push(numero);
        }
    }
    return primos;
}

const numeroPrimo = listarPrimos();
console.log(numeroPrimo);

//2-segunda questão
function verificarSenha() {
    let senha = prompt("Insira a senha:"); 
  
    let mensagemTamanho = "A senha deve ter pelo menos 8 caracteres.";
    let mensagemMaiuscula = "A senha deve conter pelo menos uma letra maiúscula.";
    let mensagemMinuscula = "A senha deve conter pelo menos uma letra minúscula.";
    let mensagemNumero = "A senha deve conter pelo menos um número.";
  
    if (senha.length < 8) {
      alert(mensagemTamanho); 
    } else if (!/[A-Z]/.test(senha)) {
      alert(mensagemMaiuscula); 
    } else if (!/[a-z]/.test(senha)) {
      alert(mensagemMinuscula); 
    } else if (!senha.match(/[0-9]/)) {
      alert(mensagemNumero); 
    } else {
      alert("A senha é válida!"); 
    }
  }


//3-Terceira questão
function fatorial(n) {
    if (n < 0) {
      return -1;
    } 
    else if (n == 0) {
      return 1;
    } 
    else if (n > 10) {
      return "Números maiores que 10 não são permitidos.";
    } 
    else {
      return n * fatorial(n - 1);
    }
  }


//4-Quarta questão

function RaizQuadrada() {
    let numero = prompt("Insira um número:");
  
    let raiz = Math.sqrt(numero);
    if (raiz == Math.floor(raiz)) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
  
  RaizQuadrada();

  //