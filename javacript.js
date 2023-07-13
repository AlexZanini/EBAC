// A função 'submeter' é chamada quando o botão 'Verificar' é clicado
function submeter() {
    
    // A função 'getElementById' é usada para obter o elemento HTML com o ID fornecido
    // '.value' é usado para obter o valor atual do elemento de entrada
    // 'parseInt' é usado para converter a string obtida para um número
    var campoA = parseInt(document.getElementById('campoA').value);
    var campoB = parseInt(document.getElementById('campoB').value);
    
    // Obtemos o elemento de textarea onde as mensagens são exibidas
    var messageBox = document.getElementById('messageBox');

    // Removemos todas as classes existentes da textarea
    messageBox.className = '';

    // Verificamos se o valor no campo B é maior que o valor no campo A
    if (campoA < campoB) {
        // Se for, adicionamos a classe 'invalid' à textarea e exibimos uma mensagem de erro
        messageBox.classList.add('invalid');
        messageBox.value = "Formulário inválido: O número B é maior do que o número A";
    } else if (campoA > campoB){
        // Se o valor no campo A é maior que o valor no campo B, adicionamos a classe 'valid' à textarea e exibimos uma mensagem de sucesso
        messageBox.classList.add('valid');
        messageBox.value = "Formulário válido";
    }else{
        // Se os valores no campo A e campo B são iguais, adicionamos a classe 'equal' à textarea e exibimos uma mensagem de igualdade
        messageBox.classList.add('equal');
        messageBox.value = "Os valores são iguais";
    }
}
