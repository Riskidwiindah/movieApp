//https://api.themoviedb.org/3/discover/movie?api_key=6fa3bf2f89aac75d922f34b5b9e20f26&sort_by=popularity.desc
//https://api.themoviedb.org/3/discover/movie?api_key=6fa3bf2f89aac75d922f34b5b9e20f26&sort_by=popularity.desc&page=1 (membatasi list movie)
//search/movie?api_key=your_api_key&query=${search_key}&page=1

let cardFilm = document.querySelector(".row")
let formSearch = document.querySelector(".d-flex")
let searchFilm = document.querySelector(".form-control")
// let btnSearch = document.querySelector(".btn")



async function getAPIFilm () {
    let response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=6fa3bf2f89aac75d922f34b5b9e20f26&sort_by=popularity.desc")
    let movie = await response.json()

    // console.log(movie);

    let movieData = movie.results
    movieData.forEach((item, index) => {
        cardFilm.innerHTML +=
        `<div class="col">
            <div class="card m-5" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="poster film ${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.original_title}</h5>
                    <h5 class="card-title">${item.vote_average}</h5>
                    <p class="card-text">${item.release_date}</p>
                </div>
            </div>
        </div>
        `
    });
}

async function searchShow (query){
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6fa3bf2f89aac75d922f34b5b9e20f26&query=${query}&page=1`)
    let movie = await response.json()

    // console.log(movie);

    let movieData = movie.results
    movieData.forEach((item, index) => {
        if (item.poster_path == null){
            cardFilm.innerHTML +=
            `<div class="col">
                <div class="card m-5" style="width: 18rem;">
                    <img src="/pexels-eberhard-grossgasteiger-1287142.jpg" class="card-img-top" alt="poster film ${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.original_title}</h5>
                        <h5 class="card-title">${item.vote_average}</h5>
                        <p class="card-text">${item.release_date}</p>
                    </div>
                </div>
            </div>`
        }else{
           cardFilm.innerHTML +=
            `<div class="col">
                <div class="card m-5" style="width: 18rem;">
                    <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="poster film ${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.original_title}</h5>
                        <h5 class="card-title">${item.vote_average}</h5>
                        <p class="card-text">${item.release_date}</p>
                    </div>
                </div>
            </div>` 
        }   
    });
}

function show (cari = null){
    if (cari != null) {
        formSearch.addEventListener("submit", (event) => {
        event.preventDefault()
        
        cardFilm.innerHTML = " "
        let query = searchFilm.value
        searchShow(query)
        // getAPIFilmSearch(query)
        })
    }
    getAPIFilm()
} 

show(searchFilm)

// let getAPIFilmSearch = async(query) => {
//         let response = await fetch(`https://api.themoviedb.org/3search/movie?api_key=6fa3bf2f89aac75d922f34b5b9e20f26&query=${query}&page=1`)
//         let movie = await response.json()

//         console.log(movie);

//         let movieData = movie.results
//         movieData.forEach((item, index) => {
//         cardFilm.innerHTML +=
//         `<div class="col">
//             <div class="card m-5" style="width: 18rem;">
//                 <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="poster film ${item.title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${item.original_title}</h5>
//                     <h5 class="card-title">${item.vote_average}</h5>
//                     <p class="card-text">${item.release_date}</p>
//                 </div>
//             </div>
//         </div>
//         `
//     });
//}


// getAPIFilm .then(result => {
//     return result.json()
// }) 
// .then(result => {
//     console.log(result);
// })
// .catch(error => {
//     console.log(error);
// })