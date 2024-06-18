function pegarPontuacao() {
  document.getElementById('pontuacao').textContent = "100";
}

const pesquisarAtt = () => {
  const inputPesquisar = document.getElementById("barra-de-pesquisa");
  const termoPesquisa = inputPesquisar.value;
  console.log(`Pesquisando = ${termoPesquisa}`);
  inputPesquisar.value = ""; // Limpa o campo de input após a pesquisa
};

const cliqueComTelclaEnter = (event) => {
    pesquisarAtt();
};
