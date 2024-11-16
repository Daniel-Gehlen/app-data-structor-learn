function verificarPilha() {
  const codigo = document.getElementById("pilha-codigo").value;
  try {
    eval(codigo);
    document.getElementById("pilha-resultado").innerHTML = '<p class="text-success">Código válido!</p>';
  } catch (error) {
    document.getElementById("pilha-resultado").innerHTML = '<p class="text-danger">Erro no código: ' + error.message + '</p>';
  }
}

function verificarFila() {
  const codigo = document.getElementById("fila-codigo").value;
  try {
    eval(codigo);
    document.getElementById("fila-resultado").innerHTML = '<p class="text-success">Código válido!</p>';
  } catch (error) {
    document.getElementById("fila-resultado").innerHTML = '<p class="text-danger">Erro no código: ' + error.message + '</p>';
  }
}

function verificarListaEncadeada() {
  const codigo = document.getElementById("listaEncadeada-codigo").value;
  try {
    eval(codigo);
    document.getElementById("listaEncadeada-resultado").innerHTML = '<p class="text-success">Código válido!</p>';
  } catch (error) {
    document.getElementById("listaEncadeada-resultado").innerHTML = '<p class="text-danger">Erro no código: ' + error.message + '</p>';
  }
}

function verificarArvore() {
  const codigo = document.getElementById("arvore-codigo").value;
  try {
    eval(codigo);
    document.getElementById("arvore-resultado").innerHTML = '<p class="text-success">Código válido!</p>';
  } catch (error) {
    document.getElementById("arvore-resultado").innerHTML = '<p class="text-danger">Erro no código: ' + error.message + '</p>';
  }
}

function verificarGrafo() {
  const codigo = document.getElementById("grafo-codigo").value;
  try {
    eval(codigo);
    document.getElementById("grafo-resultado").innerHTML = '<p class="text-success">Código válido!</p>';
  } catch (error) {
    document.getElementById("grafo-resultado").innerHTML = '<p class="text-danger">Erro no código: ' + error.message + '</p>';
  }
}