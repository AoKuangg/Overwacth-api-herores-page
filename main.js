document.addEventListener("DOMContentLoaded", function(){
  crearCarta();
});

async function crearCarta(){
  try {
    const response = await fetch('./heroes.json');
    const data = await response.json();
    const contenedorCartas = document.querySelector('.contenedorCartas')
    data.forEach(objeto =>{
      const nombre = objeto.name;
      const portrait = objeto.portrait;
      const role = objeto.role;

     const card=`
     <div class="cartita">
      <img src=${portrait} alt="">
      <h3>${nombre}</h3>
      <p>${role}</p>
     </div>
     `;

     contenedorCartas.innerHTML += card;

    })

  }
  catch (error){
    console.log('EL API ME FUNO')
  }
};