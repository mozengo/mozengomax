const jokes = [
  "Por que o jacaré tirou o jacarezinho da escola? Porque ele réptil de ano.",
  "Qual é o peixe que caiu do décimo andar? Aaaaaa-tum!",
  "O que o pato falou para a pata? Vem quá!",
  "Por que o computador foi ao médico? Porque estava com um vírus!",
  "Você conhece o site de piadas? É o MozengoMax, ué! 😄"
];

function showJoke() {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  document.getElementById("joke").textContent = joke;
}