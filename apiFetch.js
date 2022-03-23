const nameTxt = window.document.querySelector("h2#name")
const genderTxt = document.querySelector("h2#gender")
const divInfo = document.querySelector("#info")
const getPersonUrl = id => `https://swapi.dev/api/people/${id}/`
const personsPromises = []

for(let i=1;i<82;i++){

  personsPromises.push(fetch(getPersonUrl(i)).then(response => response.json()))
  
}

Promise.all(personsPromises)
  .then(persons => {
    input = document.getElementById("pesquisa")
    const lisPersons = persons.reduce((accumulator,person,index) =>{
    accumulator += `<div>
                        <img class="imagens" src= https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg>
                        <h3 class= "card">${person.name}</h3>
                        <p class="card-subtitle">${person.gender}</p>
                        <p>${person.url}</p>
                        </div>`        
                      return divInfo.innerHTML = accumulator
                    },'')
  })
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