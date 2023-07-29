const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer();

server.listen(port, hostname, () => {
    new ProvaTesteComponent()
	/*Nesta primeira etapa, implementei a função criarUmNovoLivro e buscarLivro. Detalhes:
	criarUmNovoLivro:	incluiu implementar mensagem de livros já cadastrados e correção
						da cláusula de condição do 'if' de acordo com o retorno da função buscarLivro;
	buscarLivro:		incluiu implementar	a validação para livros já cadastrados;
	Por fim, exibimos os dados do array em uma tabela dentro do console.*/
});

export class ProvaTesteComponent {
	listLivros: Array<Livro> = []
	constructor() { 
		this.initLivros()
		this.criarUmNovoLivro("Arquitetura Limpa", "Tecnologia");
		this.criarUmNovoLivro("Harry Potter e a Camara secreta", "Fantasia");
		this.criarUmNovoLivro("WildCards", "Esportes");
		this.criarUmNovoLivro("O Trono do Sol", "Fantasia")
		//console.log(this.listarLivrosFantasia())
		console.table(this.listLivros)
	}

	initLivros(){
		this.listLivros.push({ id: 0, nome: 'Código Limpo', genero: "Tecnologia" })
		this.listLivros.push({ id: 1, nome: 'Senhor do Anéis', genero: "Fantasia" })
		this.listLivros.push({ id: 2, nome: 'WildCards', genero: "Fantasia" })
		this.listLivros.push({ id: 3, nome: 'Harry Potter e o Prisioneiro de Azkaban', genero: "Fantasia" })
		this.listLivros.push({ id: 4, nome: 'Javascript de alto desempenho', genero: "Tecnologia" })
		this.listLivros.push({ id: 5, nome: 'O poder da ação', genero: "Administração" })
	}

	criarUmNovoLivro(nome: string, genero: string){
		if (this.buscarLivro(nome, genero) === -1){//erro
			const novoLivro: Livro = {
				id: this.listLivros.length,
				nome: nome,
				genero: genero
			}
			this.listLivros.push(novoLivro)
		}
		else {
			console.log('Já existe um Livro cadastrado com esse nome e gênero!')
		}
	}

	buscarLivro(livro: string, genero: string): number{
		let indiceLivro: number = -1
		for (let index = 0; index < this.listLivros.length; index++) {
			const livrox = this.listLivros[index]
			if(livrox.nome==livro && livrox.genero==genero){
				return livrox.id
			}
		}
		return indiceLivro
	}

	/**listarLivrosFantasia(): string{
		
		 * Retorne uma String contendo o nome de todos os Livros que são de fantasia.
		 
	}*/
}

export interface Livro{
	id: number,
	nome: string,
	genero: string,
}

