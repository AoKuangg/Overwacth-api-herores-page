document.addEventListener("DOMContentLoaded", function(){
  crearCarta();
});

async function crearCarta(){
  try {
    const response = await fetch('./heroes.json');
    const data = await response.json();

    data.forEach(objeto =>{
      const nombre = objeto.name;
      const portrait = objeto.portrait;
      const role = objeto.role;

      let card = document.createElement('div');
      card.classList.add('cartita')
      card.innerHTML = `
      
      `

    })

  }
  catch (error){
    console.log('EL API ME FUNO')
  }
};