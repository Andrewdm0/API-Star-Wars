const nameTxt = window.document.querySelector("h2#name")
const genderTxt = document.querySelector("h2#gender")
const divInfo = document.querySelector("#info")
const getPersonUrl = (id) => `https://swapi.dev/api/people/?page=${id}`
const pokemons = []
const personsPromises = []
const paginaAtual = document.getElementById("paginaAtual")


//Estado da pagina
const state = {
  page: 1,
  maxPage:8,
  minPage:2,
}

//Correção do index das imagens
function indexFunc(id,index,num){

  if(id == 2){

    if (index >= 7) {

      return index = index + num + id
      
    }else{

    return index = index + num + 1

    }

  }else if(id == 1){

    return index = index + num + 1

  }else{

    return index = index + num + 2

  }

}

//Função fetch All
function fetchAll(){

  for(let i=1;i<82;i++){

    personsPromises.push(fetch(`https://swapi.dev/api/people/${i}`).then(response => response.json()))

  }

  Promise.all(personsPromises)
    .then(persons => {
      console.log(persons);

      const lisPersons = persons.reduce((accumulator,person,index) =>{
        accumulator += `<div>
                          <img class="imagens" src= https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg>
                          <h3 class= "card">${person.name}</h3>
                          <p class="card-subtitle">${person.gender}</p>
                          <p>${person.url}</p>
                        </div>`

        return divInfo.innerHTML = accumulator
      },'')
      console.log(lisPersons);
    })
}

//Função fetch
function fecthPokemon(id){
  const pokemons = []
  id = state.page
  let num = (id - 1) * 10

  fetch(getPersonUrl(id))
  .then(response => response.json())

  //Guardando a resposta das promises dentro de uma lista
  .then(pokemon => {
  
      for (let i = 0; i <= 10; i++) {
  
          pokemons.push(pokemon.results[i])

      }

      //Usando reduce para transformar cada item da lista em um html e jogar no index.html
      pokemons.reduce((accumulator,pokemon,index) => {
          accumulator += `<div>
                    <img class="imagens" src= https://starwars-visualguide.com/assets/img/characters/${indexFunc(id,index,num)}.jpg>
                    <h3 class= "card">${pokemon.name}</h3>
                    <p class="card-subtitle">${pokemon.gender}</p>
                    <p>${pokemon.url}</p>
                    </div>`
                    console.log(accumulator);
                    return divInfo.innerHTML = accumulator
                  },'')
                  
  })
  paginaAtual.innerHTML = state.page
}

//Função de pesquisa
function pesquisa() {

  var input, filter,divs

  input = document.getElementById("pesquisa")
  divs = document.getElementsByTagName("div")
  filter = input.value.toUpperCase();

  for (let i = 0; i < divs.length; i++) {

    div = divs[i].getElementsByTagName("h3")[0]

    textValue = div.textContent || div.innerText;
    textValue = textValue.toUpperCase()

    console.log(filter);

    if(textValue.indexOf(filter) > -1){

      divs[i].style.display = ""
      console.log(textValue + " Deu boa");

    }else{

      divs[i].style.display = "none"
      console.log(textValue + " Deu ruim");

    }
    
  }

}

//Função de filtro por gênero
function filter_gender(gender){

    var input, divs
  
    input = document.getElementById("gender")
    divs = document.getElementsByTagName("div")
  
    for (let i = 0; i < divs.length; i++) {
  
      div = divs[i].getElementsByTagName("p")[0]
  
      textValue = div.textContent || div.innerText;
  
      if(textValue == gender){
  
        divs[i].style.display = ""
        console.log(textValue + " Deu boa");
  
      }else if(gender == "all"){
        divs[i].style.display = ""
        console.log(textValue + " Deu boa");
      }else{
  
        divs[i].style.display = "none"
        console.log(textValue + " Deu ruim");
  
      }
      
    }
}

//Botoes para troca de página
function nextPage() {

  if (state.page <= state.maxPage){
    return fecthPokemon(state.page++)
  }else {
    return fecthPokemon(state.page)
  }

}

function prevPage() {
  if (state.page >= state.minPage){
    return fecthPokemon(state.page--)
  }else {
    return fecthPokemon(state.page)
  }
}

fecthPokemon()