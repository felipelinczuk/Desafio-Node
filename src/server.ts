const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer();

server.listen(port, hostname, () => {
    new ProvaTesteComponent()
	/*Neste passo 2, implementei a função listarLivrosFantasia. Utilizei 2 arrays, o primeiro,
	para filtrar os livros do gênero fantasia, e o segunda para filtrar apenas o nome desses livros.
	Para finalizar, converti o array para texto com o método join, acrescentando vírgula entre os livros.	
	*/
});

export class ProvaTesteComponent {
	listLivros: Array<Livro> = []
	constructor() { 
		this.initLivros()
		this.criarUmNovoLivro("Arquitetura Limpa", "Tecnologia");
		this.criarUmNovoLivro("Harry Potter e a Camara secreta", "Fantasia");
		this.criarUmNovoLivro("WildCards", "Esportes");
		this.criarUmNovoLivro("O Trono do Sol", "Fantasia")
		console.table(this.listLivros)
		console.log(this.listarLivrosFantasia())
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

	listarLivrosFantasia(): String{
		
		let nomesLivros = []
		let livrosFantasia = this.listLivros.map((livro) => {
			if(livro.genero == "Fantasia"){
				nomesLivros.push(livro['nome'])
			}
		})
		return nomesLivros.join(', ')
	}
}

export interface Livro{
	id: number,
	nome: string,
	genero: string,
}

