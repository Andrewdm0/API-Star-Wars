const nameTxt = window.document.querySelector("h2#name")
const genderTxt = document.querySelector("h2#gender")
const divInfo = document.querySelector("#info")
const getPersonUrl = (id) => `https://swapi.dev/api/people/?page=${id}`
const pokemons = []

function fecthPokemon(id = 1){

  let num = (id - 1) * 10
  fetch(getPersonUrl(id))
  .then(response => response.json())
  .catch(console.log('Erro'))
  .then(pokemon => {
  
      for (let i = 0; i <= 10; i++) {
  
          pokemons.push(pokemon.results[i])

      }
      
      pokemons.reduce((accumulator,pokemon,index) => {
          
          accumulator += `<div>
                    <img class="imagens" src= https://starwars-visualguide.com/assets/img/characters/${index + 12}.jpg>
                    <h3 class= "card">${pokemon.name}</h3>
                    <p class="card-subtitle">${pokemon.gender}</p>
                    <p>${pokemon.url}</p>
                    </div>`

                      return divInfo.innerHTML = accumulator
      },'')
      
  })
      
}

fecthPokemon(2)

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