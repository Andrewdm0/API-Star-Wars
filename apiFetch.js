const nameTxt = window.document.querySelector("h2#name")
const genderTxt = document.querySelector("h2#gender")
const divInfo = document.querySelector("div#info")
const getPersonUrl = id => `https://swapi.dev/api/people/${id}/`
const personsPromises = []

for(let i=1;i<82;i++){

  personsPromises.push(fetch(getPersonUrl(i)).then(response => response.json()))
  
}

Promise.all(personsPromises)
  .then(persons => {
    console.log(persons);

    const lisPersons = persons.reduce((accumulator,person,index) =>{
      accumulator += `<div>
                        <img class="imagens" src= https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg>
                        <h3 class= "card"> Name: ${person.name}</h3>
                        <p class="card-subtitle"> Gender: ${person.gender}</p>
                        <p>${person.url}</p>
                      </div>`
                      
      return divInfo.innerHTML = accumulator
    },'')
    console.log(lisPersons);
  })
  // nameTxt.innerHTML = `Name: ${json.name}`
  // genderTxt.innerHTML = `Gender: ${json.gender}`