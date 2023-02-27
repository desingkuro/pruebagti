const player = document.getElementById("player");
const reproductor = document.querySelector(".reproductor");
const contenedor = document.getElementById("reproductor");
const btn= document.getElementById("select-music");
const btnMusic = document.getElementById("btn");
const boton = document.getElementById("btn-file");
const listmusic = [];

player.addEventListener("click", ()=>{
    
    if(btn.attributes.class.value=="ocultar" && reproductor.attributes.class.value=="reproductor ocultar"){
        //alert("if");
        document.querySelector(".text").classList.remove("ocultar");
        btn.classList.add("select-music");
        btn.classList.remove("ocultar");
        reproductor.classList.add("ocultar");
        
    }else{
        //alert("else");
        btn.classList.add("ocultar");
        reproductor.classList.remove("ocultar");
    }
});


btnMusic.addEventListener("click",()=>{
    document.querySelector(".text").classList.add("ocultar");
    btnMusic.classList.add("ocultar");
    btn.classList.remove("select-music");
    btn.classList.add("ocultar");
    reproductor.classList.remove("ocultar");
    cargar();
});


/*creo la forma del reproductor*/
const sonarLista=()=>{
    let reader = new FileReader();
    reader.addEventListener('load', function() {
        // Crear una instancia de WaveSurfer
        const wavesurfer = WaveSurfer.create({
            container: '#reproductor',
            waveColor: 'red',
            progressColor: 'purple'
        });
        wavesurfer.loadBlob(reader.result);
    });

    //eader.readAsDataURL(file);
}

  /**aqui cargo la musica */
function cargar(){
    //alert("entro");
    boton.addEventListener("change",()=>{
        const file = this.files;
        for (let i = 0; i < boton.files.length; i++) {
            listmusic.push(boton.files[i]);
        }
    });
    setTimeout(cargarlista, 4000);

}

const cargarlista = () => {
    //alert("entro a cargar las listas");
    let contenido = '';
    for (let i = 0; i < listmusic.length; i++) {
      contenido += `
        <div class="music">
          <div class="icon-music">
            <img src="img/musica.png" alt="">
          </div>
          <h1 class="Title-music">${listmusic[i].name}</h1>
          <h3 class="time-music">10:00</h3>
        </div>
      `;
    }
    contenedor.innerHTML = contenido;
  };
  

  