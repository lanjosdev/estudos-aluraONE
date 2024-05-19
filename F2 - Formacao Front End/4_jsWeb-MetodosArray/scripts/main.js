const API_URL = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const elementoLivros = document.getElementById('livros');
let livros = [];


async function pegaLivrosApi() {
  try {
    const response = await fetch(API_URL);
    livros = await response.json();

    renderLivros(livros)
  }
  catch(error) {
    console.log('Deu erro:')
    console.log(error);
  }
  finally {
    console.table(livros);
  }
}
pegaLivrosApi();


function renderLivros(livros) {
  livros.forEach(livro => {
    elementoLivros.innerHTML += `
    <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `;        
  });
}
