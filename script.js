//API-KEY: a406d1f88865ea67ab9a1324171dc96e
let apiTrendRef ="https://api.themoviedb.org/3/trending/movie/day?api_key=a406d1f88865ea67ab9a1324171dc96e";
let apiPopRef = "https://api.themoviedb.org/3/movie/popular?api_key=a406d1f88865ea67ab9a1324171dc96e&language=en-US&page=1";
let containerPopRef = document.querySelector('.popmovie');
console.log(containerPopRef);
let containerTrendRef = document.querySelector('.containerSlider');
let heroRef = document.querySelector("main");


function truncateText (text) {
    if (text <= 161) {
        return text
    } else {
        return text.slice(0,150) + '...';
    }
}

fetch(apiTrendRef)
.then (response => response.json())
.then(data => {
    if(data.results.length ===0){
        console.log("Det finns ingen data!");

    }else {
        for (let i = 0; i < data.results.length; i++) {
            containerTrendRef.innerHTML += "<article class='card'><img class='card-thumb' src='https://image.tmdb.org/t/p/original"+data.results[i].poster_path+"'/><div class='card-image'> <div class='overlay-gradient'></div><img src='https://image.tmdb.org/t/p/original"+data.results[i].backdrop_path+"' /></div><div class='card-content'><h2 class='contentheading'>"+data.results[i].title+"</h2><p>"+truncateText(data.results[i].overview)+"</p><div class='card-content__badges'><span>"+data.results[i].original_language+"</span><span>"+data.results[i].release_date+"</span><span class='badge'>+15</span><img src='img/mvdb.svg' /><span>"+data.results[i].vote_average+"</span></div></div></article>"; 
            
        }
    }
})
.catch(error =>console.log("Detta är fel: " + error));

fetch(apiPopRef)
.then (response => response.json())
.then(data => {
    if(data.results.length ===0){
        console.log("Det finns ingen data!");

    }else {
      heroRef.innerHTML += "<main><div class='mainmovie'><h3>Filmtips: "+data.results[1].title+"</h3><h1>"+data.results[1].title+"</h1><p>"+data.results[1].overview+"</p></div><img src='https://image.tmdb.org/t/p/original"+data.results[1].backdrop_path+"'/></main>";
        for (let i = 0; i < data.results.length; i++) {
            containerPopRef.innerHTML += "<article class='card'><img class='card-thumb' src='https://image.tmdb.org/t/p/original"+data.results[i].poster_path+"'/><div class='card-image'> <div class='overlay-gradient'></div><img src='https://image.tmdb.org/t/p/original"+data.results[i].backdrop_path+"'/></div><div class='card-content'><h2 class='contentheading'>"+data.results[i].title+"</h2><p>"+truncateText(data.results[i].overview)+"</p><div class='card-content__badges'><span>"+data.results[i].original_language+"</span><span>"+data.results[i].release_date+"</span><span class='badge'>+15</span><img src='img/mvdb.svg' /><span>"+data.results[i].vote_average+"</span></div></div></article>"; 
            
        }
    }
})
.catch(error =>console.log("Detta är fel: " + error));