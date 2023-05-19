let all = document.getElementById('all')
all.addEventListener('click',crearCarta());


async function crearCarta(){
    fetch('https://overfast-api.tekrop.fr/heroes?locale=en-us')
    .then(response => response.json())
    .then(data=>{
        const nombre = data.name;
        const role = data.role;
        const portrait = data.portrait;

        const card = document.createElement('div');
        card.classList.add('carta');

        const imagen = document.createElement('img');
        imagen.src = portrait;
        card.appendChild(imagen);

        const name = document.createElement('p');
        name.textContent = `${nombre}`;
        card.appendChild(name);

        const rol = document.createElement('p');
        rol.textContent = `${role}`;
        card.appendChild(rol);

        const contenedorcartas = document.getElementById('contenedorCartas');
        contenedorcartas.appendChild(card);
    })
    .catch(error =>{
        console.log('xd se me buggeo la api')
    })
}
