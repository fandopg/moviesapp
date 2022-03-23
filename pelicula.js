const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');

const containerCards = document.querySelector('.row');

const apiUrl = 'https://api.themoviedb.org/3';
const apikey = '498471c1265532fcf424d77fb7084399';
const urlPoster = 'https://image.tmdb.org/t/p/original'

const recuperarDetalles = (id) => {
    const url = `${apiUrl}/movie/${id}?api_key=${apikey}&language=es-MX&region=MX`;

    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((body) => {
            const pelicula = body;
                const card = `
               <div class="card my-3 text-white bg-secondary">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${urlPoster}${pelicula.poster_path}" class="img-fluid p-2" alt="${pelicula.original_title}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title">${pelicula.title}</h1>
        <h4 class="card-title">${pelicula.tagline}</h4>
        
        <p class="card-text fs-5">${pelicula.overview}</p>
        <p class="card-text"><small class="text-ligth">Fecha de estreno: ${pelicula.release_date}</small></p>
      </div>
    </div>
  </div>
</div>
            `
            containerCards.insertAdjacentHTML('beforeend', card); 
    });
}

recuperarDetalles(id);

const recuperarActores = (id) => {
    const url = `${apiUrl}/movie/${id}/credits?api_key=${apikey}&language=es-MX&region=MX`;

    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((body) => {
            const actores = body.cast;
            
            actores.forEach(actor => {
                const cardActores = `            
            <div class="col-sm-2 my-2">
<div class="card card-body text-white bg-secondary">
<img src="${urlPoster}${actor.profile_path}" class="card-img-top" alt="${actor.name}">
<h4 class="card-title text-center mt-2">${actor.name}</h4>
<h4 class="card-title text-center mt-2">${actor.character}</h4>
</div>
</div>
            
            `

            containerCards.insertAdjacentHTML('beforeend', cardActores); 
            });
            
            
        });
    
};

recuperarActores(id);

