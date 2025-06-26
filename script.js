const jokes = [
  "Por que o jacaré tirou o jacarezinho da escola? Porque ele réptil de ano.",
  "Qual é o peixe que caiu do décimo andar? Aaaaaa-tum!",
  "O que o pato falou para a pata? Vem quá!",
  "Por que o computador foi ao médico? Porque estava com um vírus!",
  "Você conhece o site de piadas? É o MozengoMax, ué! 😄",
  "O que o zero disse para o oito? Belo cinto!",
  "Por que a vaca foi para o espaço? Para visitar o vácuo!"
];

let lastIndex = -1;
let usedIndexes = [];

function showJoke() {
  if (usedIndexes.length === jokes.length) usedIndexes = [];
  let index;
  do {
    index = Math.floor(Math.random() * jokes.length);
  } while (usedIndexes.includes(index) || index === lastIndex);
  usedIndexes.push(index);
  lastIndex = index;
  document.getElementById("joke").textContent = jokes[index];
}

function tellJoke() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const response = document.getElementById("aiResponse");

  if (input.includes("escola")) {
    response.textContent = "Por que o livro de matemática se suicidou? Porque tinha muitos problemas!";
  } else if (input.includes("médico")) {
    response.textContent = "Doutor, tenho medo de biscoito! – Isso é bolachofobia!";
  } else if (input.includes("animal")) {
    response.textContent = "Qual é o peixe mais engraçado? O peixe-cômico!";
  } else if (input.includes("computador")) {
    response.textContent = "Por que o computador foi preso? Porque ele cometeu um byte-crime!";
  } else {
    response.textContent = "Mozengo IA não entendeu... tente algo como 'piada de escola', 'médico' ou 'animal'!";
  }
}

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});