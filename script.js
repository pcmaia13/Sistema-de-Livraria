const biblioteca = [];

function cadastrarLivro(titulo, autor, anoPublicacao) {
  const livro = {
    titulo,
    autor,
    anoPublicacao,
    status: 'disponivel',
  };

  biblioteca.push(livro);
  console.log(`Livro "${titulo}" cadastrado com sucesso.`);
}

function listarLivros() {
  console.log('Lista de Livros:');
  biblioteca.forEach((livro) => {
    console.log(`${livro.titulo} - ${livro.status}`);
  });
}

function realizarEmprestimo(titulo) {
  const livro = biblioteca.find((livro) => livro.titulo === titulo);

  if (livro) {
    if (livro.status === 'disponivel') {
      livro.status = 'emprestado';
      console.log(`Livro "${titulo}" emprestado com sucesso.`);
    } else {
      console.log(`O livro "${titulo}" não está disponível no momento.`);
    }
  } else {
    console.log(`Livro "${titulo}" não encontrado.`);
  }
}

function realizarDevolucao(titulo) {
  const livro = biblioteca.find((livro) => livro.titulo === titulo);

  if (livro) {
    if (livro.status === 'emprestado') {
      livro.status = 'disponivel';
      console.log(`Devolução do livro "${titulo}" realizada com sucesso.`);
    } else {
      console.log(`O livro "${titulo}" não está emprestado no momento.`);
    }
  } else {
    console.log(`Livro "${titulo}" não encontrado.`);
  }
}

function menuPrincipal() {
  let opcao;
  do {
    console.log('\nMenu Principal:');
    console.log('1. Cadastrar Livro');
    console.log('2. Consultar Livros');
    console.log('3. Realizar Empréstimo');
    console.log('4. Realizar Devolução');
    console.log('5. Sair');
    
    opcao = prompt('Escolha uma opção (1-5): ');

    switch (opcao) {
      case '1':
        const titulo = prompt('Informe o título do livro: ');
        const autor = prompt('Informe o autor do livro: ');
        const anoPublicacao = prompt('Informe o ano de publicação do livro: ');
        cadastrarLivro(titulo, autor, anoPublicacao);
        break;

      case '2':
        listarLivros();
        break;

      case '3':
        const livroEmprestimo = prompt('Informe o título do livro para empréstimo: ');
        realizarEmprestimo(livroEmprestimo);
        break;

      case '4':
        const livroDevolucao = prompt('Informe o título do livro para devolução: ');
        realizarDevolucao(livroDevolucao);
        break;

      case '5':
        console.log('Saindo do sistema. Até mais!');
        break;

      default:
        console.log('Opção inválida. Tente novamente.');
    }
  } while (opcao !== '5');
}

menuPrincipal();
