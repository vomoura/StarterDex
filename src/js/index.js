/*
ao clicar no pokemon da listagem, esconde o pokemon aberto e mostra o pokemon selecionado

para isso serão utilizados dois elementos:
1 - listagem
2 - cartao pokemon

criar duas variáveis no js para utilizar os elementos da tela

criar um evento de clique na listagem para realizar ação

- obter o id do pokemon clicado na listagem
- remover classe aberto do cartão atual
- adicionar classe aberto no cartão correspondente ao id do clique
- remover classe ativo do item da listagem atual
- adicionar classe ativo no item da listagem clicado

*/

// criar duas variáveis no js para utilizar os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCards = document.querySelectorAll('.cartao-pokemon')

// criar um evento de clique na listagem para realizar ação
listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {

        // - obter o id do pokemon clicado na listagem
        const idPokemonSelecionado = pokemon.attributes.id.value

        // - remover classe aberto do cartão atual
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // - adicionar classe aberto no cartão correspondente ao id do clique
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')
        
        // - remover classe ativo do item da listagem atual
        const pokemonSelecionado = document.querySelector('.ativo')
        pokemonSelecionado.classList.remove('ativo')
        
        // - adicionar classe ativo no item da listagem clicado
        const pokemonParaSelecionar = document.getElementById(idPokemonSelecionado)
        pokemonParaSelecionar.classList.add('ativo')
    })
})
