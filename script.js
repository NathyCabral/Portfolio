function downloadCV() {
    var link = document.createElement('a');
    link.href = './img/Currículo-Nathallia-Cabral.png';
    link.download = 'Curriculo.png';
    link.click();
}


/* Cards */

document.addEventListener("DOMContentLoaded", async function () {
    try {
      const jsonFile = "projetos.json";
      const projetosContainer = document.getElementById("projetoscards");
  
      const response = await fetch(jsonFile);
      const data = await response.json();
  
      data.forEach((projeto) => {
        const card = criarProjetoCard(projeto);
        projetosContainer.appendChild(card);
      });
    } catch (error) {
      console.error("Erro ao carregar dados do JSON: ", error);
    }
  });
  
  function criarProjetoCard(projeto) {
    const card = document.createElement("div");
    card.className = "projeto-card animate-left";
  
    card.innerHTML = `
      <h3>${projeto.titulo}</h3>
      <img src="${projeto.imagem}" alt="${projeto.titulo}" />
      <a href="${projeto.site}">Site do Projeto</a>
      <a href="${projeto.github}" target="_blank">Documentação no Github</a>
    `;
  
    return card;
  }
  



  // Cards das ferramentas
  
document.addEventListener("DOMContentLoaded", function () {
    fetch("ferramentas.json")
      .then((response) => response.json())
      .then((data) => {
        const ferramentasSection = document.querySelector(".ferramentas-section");
  
        data.forEach((ferramenta) => {
          const card = document.createElement("div");
          card.classList.add("col-md-4");
          card.innerHTML = `
            <div class="ferramentas-card" id="${ferramenta.id}">           
              <h3 class="ferramentas-titulo">${ferramenta.title}</h3>
              <img class="img-icon" src="${ferramenta.icon}" alt="${ferramenta.title}">
              <img class="img-icon">              
            </div>
          `;
          ferramentasSection.appendChild(card);
        });
      })
      .catch((error) => {
        console.error("Erro ao carregar os dados das ferramentas:", error);
      });
  });
  