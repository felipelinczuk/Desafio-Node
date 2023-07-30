# Questões Código

* Finalize o código apresentado
    1. Codifique as áreas comentadas com o que é solicitado
    2. Ajuste os erros do código
    3. No final o programa deve conter os seguintes dados
        1. Dados finais:
            | id |                   nome                    |     genero      |
            |----|-------------------------------------------|-----------------|
            | 0  |              'Código Limpo'               |  'Tecnologia'   |
            | 1  |             'Senhor do Anéis'             |   'Fantasia'    |
            | 2  |                'WildCards'                |   'Fantasia'    |
            | 3  | 'Harry Potter e o Prisioneiro de Azkaban' |   'Fantasia'    |
            | 4  |      'Javascript de alto desempenho'      |  'Tecnologia'   |
            | 5  |             'O poder da ação'             | 'Administração' |
            | 6  |            'Arquitetura Limpa'            |  'Tecnologia'   |
            | 7  |     'Harry Potter e a Camara secreta'     |   'Fantasia'    |
            | 8  |                'WildCards'                |   'Esportes'    |
            | 9  |             'O Trono do Sol'              |   'Fantasia'    |

        2. Retorno da listagem de Livros do Tipo Fantasia:
        ```
        Senhor do Anéis, WildCards, Harry Potter e o Prisioneiro de Azkaban, Harry Potter e a Camara secreta, O Trono do Sol
        ```

    4. Utilize este exercicio para explicar os erros que encontrou e o que fez para ajusta-los. Caso ache interessante, explique tambem a implementação do que foi solicitado nos comentários.

    # Na primeira etapa, implementei as funções criarUmNovoLivro() e buscarLivro().
    # criarUmNovoLivro() - incluiu implementar mensagem de livros já cadastrados e correção
	#					da cláusula de condição do 'if' de acordo com o retorno da função buscarLivro;
	# buscarLivro() - incluiu implementar	a validação para livros já cadastrados;
	# Por fim, é exibido a lista de livros em uma tabela, pelo do console."
    #
    # No passo 2, final, implementei a função listarLivrosFantasia(). Utilizei 2 arrays, o primeiro,
	# para filtrar os livros do gênero fantasia, e o segunda para filtrar apenas o nome desses livros.
	# Para finalizar, converti o array para texto com o método join, acrescentando vírgula entre os livros.
    # Método é chamado dentro do construtor, assim que a classe é iniciada pelo server.

## Sugestões

A cada etapa do que codificar sugerimos que crie um `commit` e detalhe o que foi feito no `commit`. Isso nos ajuda a ver o progresso do que fez.