const btn = document.querySelector('#btn')
const cardContainer = document.querySelector('.card')


const getdata = ()=>{
    const id =Math.floor( Math.random() * 150) + 1;
    // console.log(id);

    const url = ` https://pokeapi.co/api/v2/pokemon/`
    const fullUrl = (url+id)


        fetch(fullUrl)
        .then(res => res.json())
        .then((data)=>{
           generateCard(data,id)
        })
    
   
}

const generateCard = (data,id)=>{
    // console.log(data);
   cardContainer.innerHTML = `
   <p class="hp">HP ${data.stats[0].base_stat}</p>
            <div class="img">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" alt="Pokemon">
            </div>
            <div class="pokemonDetails">
                <div class="name">${data.name}</div>
                <div class="type">
                </div>
                <div class="details">
                    <div>
                        <span>${data.stats[1].base_stat}</span>
                        <p>Attack</p>
                    </div>
                    <div>
                        <span>${data.stats[2].base_stat}</span>
                        <p>Defence</p>
                    </div>
                    <div>
                        <span>${data.stats[5].base_stat}</span>
                        <p>Speed</p>
                    </div>
                </div>
            </div>
   `

   types(data.types);
}

const types = (types)=>{
    types.forEach(element => {
      let type1 = document.createElement('SPAN');
      type1.textContent = element.type.name
    //   console.log(type1);
    let typesOfPokemon =  document.querySelector('.type')
    typesOfPokemon.appendChild(type1)
    });
}

btn.addEventListener('click',getdata)
addEventListener('load',getdata)