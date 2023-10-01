import { API_KEY } from "../../../secrets";
import "./filme-detalhes.css";

export class DetalhesFilme {
  listaDeFilmes: any;
  constructor() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=pt-BR",
      this.obterHeaderAutorizacao()
    )
      .then((res) => res.json())
      .then((obj) => {
        console.log("RESULTADO:");
        console.log(obj);
        console.log(obj.results[0].overview);

        if (obj && obj.results && obj.results.length > 0) {
          console.log(obj.results[0].overview);
          this.listaDeFilmes = obj;
    
          // Agora você pode acessar this.listaDeFilmes[0].overview aqui
          console.log(this.listaDeFilmes[0].overview);
          this.criarElementos();
        } else {
          console.error("Dados inválidos ou vazios.");
        }
        
      });
  }

  private obterHeaderAutorizacao() {
    return {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };
  }
  criarElementos() {
    console.log("foi00");
    /*
    let nav1 = document.createElement("nav");
    nav1.classList.add("navbar");
    document.body.appendChild(nav1);

    let div1 = document.createElement("div");
    div1.classList.add("container");
    nav1.appendChild(div1);

    let a1 = document.createElement("a");
    a1.classList.add("navbar-brand", "text-light", "fs-4", "fw-bold");
    a1.textContent = "APMDb";
    a1.href = "index.html";
    div1.appendChild(a1);

    let a2 = document.createElement("a");
    a2.classList.add("btn", "btn-outline-light");
    a2.textContent = "Página Inicial";
    a2.href = "index.html";
    div1.appendChild(a2);

    
    let nav2 = document.createElement("nav");
    nav2.classList.add("navbar");
    document.body.appendChild(nav2);

    let div2 = document.createElement("div");
    div2.classList.add("container", "d-grid", "gap-3", "my-4");
    div2.textContent = "Cabecalho";
    nav2.appendChild(div2);

    let div3 = document.createElement("div");
    div3.classList.add("row");
    div2.appendChild(div3);
    
    let div4 = document.createElement("div");
    div4.classList.add("d-flex", "align-items-center");
    div3.appendChild(div4);

    let h1a = document.createElement("h1");
    h1a.classList.add("text-light");
    div4.appendChild(h1a);

*/
    // Crie o elemento body

    // Crie o elemento nav
    const nav = document.createElement("nav");
    nav.classList.add("navbar");

    // Crie o elemento div dentro do nav
    const navContainer = document.createElement("div");
    navContainer.classList.add("container");
    nav.appendChild(navContainer);

    // Crie o elemento "a" para o logotipo
    const logoLink = document.createElement("a");
    logoLink.classList.add("navbar-brand", "text-light", "fs-4", "fw-bold");
    logoLink.href = "index.html";
    logoLink.textContent = "APMDb";
    navContainer.appendChild(logoLink);

    // Crie o botão "Página Inicial"
    const pageLink = document.createElement("a");
    pageLink.classList.add("btn", "btn-outline-light");
    pageLink.href = "index.html";
    pageLink.textContent = "Página Inicial";
    navContainer.appendChild(pageLink);

    // Crie o container principal
    const containerMain = document.createElement("div");
    containerMain.classList.add("container", "d-grid", "gap-3", "my-4");
    document.body.appendChild(containerMain);

    // Crie o cabeçalho
    const headerRow = document.createElement("div");
    headerRow.classList.add("row");
    containerMain.appendChild(headerRow);

    const headerContent = document.createElement("div");
    headerContent.classList.add("d-flex", "align-items-center");
    headerRow.appendChild(headerContent);

    const headerTitle = document.createElement("h1");
    headerTitle.classList.add("text-light");
    headerTitle.textContent = "Indiana Jones e a Relíquia do Destino";
    headerContent.appendChild(headerTitle);

    const headerRight = document.createElement("div");
    headerRight.classList.add("ms-auto", "text-end");
    headerContent.appendChild(headerRight);

    const headerVotes = document.createElement("p");
    headerVotes.classList.add("text-light");
    headerVotes.textContent = "12.200 Votos";
    headerRight.appendChild(headerVotes);

    const heartIcon = document.createElement("i");
    heartIcon.classList.add("bi", "bi-heart", "fs-2", "text-warning");
    headerRight.appendChild(heartIcon);

    const releaseDate = document.createElement("small");
    releaseDate.id = "dataLancamento";
    releaseDate.textContent = "12/12/2012";
    headerRow.appendChild(releaseDate);

    // Crie o elemento div para o Poster e Trailer
    const posterTrailerRow = document.createElement("div");
    posterTrailerRow.classList.add("row", "gap-3");
    containerMain.appendChild(posterTrailerRow);

    const posterColumn = document.createElement("div");
    posterColumn.classList.add("col-lg-3");
    posterTrailerRow.appendChild(posterColumn);

    const posterImage = document.createElement("img");
    posterImage.src =
      "https://image.tmdb.org/t/p/original/9EnfMH0nTPCna87Mh3G8Q6W2wze.jpg";
    posterImage.classList.add("img-fluid", "rounded-3");
    posterImage.alt = "";
    posterColumn.appendChild(posterImage);

    const trailerColumn = document.createElement("div");
    trailerColumn.classList.add("col-lg");
    posterTrailerRow.appendChild(trailerColumn);

    const trailerRatio = document.createElement("div");
    trailerRatio.classList.add("ratio", "ratio-21x9", "h-100");
    trailerColumn.appendChild(trailerRatio);

    const trailerIframe = document.createElement("iframe");
    trailerIframe.id = "iframeTrailer";
    trailerIframe.src =
      "https://www.youtube.com/embed/R7zJ896KLSk?si=IaFskl1A5pV1uf6Z&amp;controls=0";
    trailerIframe.frameBorder = "0";
    trailerIframe.allowFullscreen = true;
    trailerRatio.appendChild(trailerIframe);

    // Crie o elemento div para as tags de gênero
    const genreDiv = document.createElement("div");
    genreDiv.classList.add("d-flex", "gap-3");
    containerMain.appendChild(genreDiv);

    // Crie as tags de gênero
    const genres = ["Aventura", "Ação", "Ficção"];

    genres.forEach((genre) => {
      const genreTag = document.createElement("span");
      genreTag.classList.add(
        "badge",
        "rounded-pill",
        "fs-5",
        "px-4",
        "py-2",
        "bg-warning",
        "text-dark"
      );
      genreTag.textContent = genre;
      genreDiv.appendChild(genreTag);
    });

    // Crie o elemento div para a descrição
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("row");
    containerMain.appendChild(descriptionDiv);

    // Crie a descrição
    const description = document.createElement("p");
    description.classList.add("fs-5", "text-light");
    description.textContent =
      "Encontrando-se em uma nova era, aproximando-se da aposentadoria, Indy " +
      "luta para se encaixar em um mundo que parece tê-lo superado. Mas " +
      "quando os tentáculos de um mal muito familiar retornam na forma de um " +
      "antigo rival, Indy deve colocar seu chapéu e pegar seu chicote mais " +
      "uma vez para garantir que um antigo e poderoso artefato não caia nas " +
      "mãos erradas.";
    descriptionDiv.appendChild(description);
  }
}

window.addEventListener("load", () => new DetalhesFilme());
