const containerCards = document.querySelector('.row');
const apiUrl = 'https://api.themoviedb.org/3';
const apikey = '498471c1265532fcf424d77fb7084399';
const urlPoster = 'https://image.tmdb.org/t/p/original'

const recuperarPopulares = () => {
    const url = `${apiUrl}/movie/popular?api_key=${apikey}&language=es-MX&region=MX&page=1`;

    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((body) => {
            const peliculas = body.results;
            console.log(peliculas);
            
            peliculas.forEach(pelicula => {

                const card = `
<div class="col-sm-4 my-2" ondblclick="detallesPelicula(${pelicula.id})">
<div class="card card-body text-white bg-secondary">

<img src="${urlPoster}${pelicula.backdrop_path}" class="card-img-top" alt="${pelicula.original_title}">
<h4 class="card-title text-center mt-2">${pelicula.original_title}</h4>
<p class="card-text">${pelicula.overview}</p>
</div>
</div>

            `
            containerCards.insertAdjacentHTML('beforeend', card);

            });
            
    });
}

recuperarPopulares(); 

const detallesPelicula = (id) => {
    window.location.assign(`/pelicula.html?id=${id}`);
};