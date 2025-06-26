const jokes = [
  "Por que o jacaré tirou o jacarezinho da escola? Porque ele réptil de ano.",
  "Qual é o peixe que caiu do décimo andar? Aaaaaa-tum!",
  "O que o pato falou para a pata? Vem quá!",
  "Por que o computador foi ao médico? Porque estava com um vírus!",
  "Você conhece o site de piadas? É o MozengoMax, ué! 😄",
  "O que o zero disse para o oito? Belo cinto!",
  "Por que a vaca foi para o espaço? Para visitar o vácuo!"
];

function showJoke() {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  document.getElementById("joke").textContent = joke;
}

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});