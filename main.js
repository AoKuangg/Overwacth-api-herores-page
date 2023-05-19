document.addEventListener("DOMContentLoaded", function(){
  crearCarta();
});

const options = {
  'all': url = './dataapi/heroes.json',
  'Tank' : url='./dataapi/tank.json',
  'Damage' : url='./dataapi/damage.json',
  'Support' : url='./dataapi/support.json',
}

// let btn = document.querySelector('category-selector');
// btn.addEventListener("click",(e)=>{
//   let valor= 
// })

async function crearCarta(){
  try {
    const response = await fetch(url);
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