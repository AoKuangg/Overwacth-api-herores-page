document.addEventListener("DOMContentLoaded", function(){
  let url = "./dataapi/heroes.json";
  crearCarta(url);
  const category = document.getElementById("category-selector");

  category.addEventListener('click', (e)=>{
    if (e.target.tagName === "BUTTON"){
      const url = e.target.dataset.url;
      crearCarta(url);
    }
  })
});
// const url = './dataapi/heroes.json'


async function crearCarta(url){
  try {
    const response = await fetch(url);
    const data = await response.json();
    const contenedorCartas = document.querySelector('.contenedorCartas')
    contenedorCartas.innerHTML = ''
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