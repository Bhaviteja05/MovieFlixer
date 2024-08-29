//  https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7a31ef8faf51733740c3af33cdc42c4a
// https://api.themoviedb.org/3/movie/550?api_key={api_key}&callback=test
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>

const API_KEY='api_key=d0b1232003bfcb21364dedd6b483b96e';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/movie/popular?language=en-US&page=1&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;
const APIS_URL = BASE_URL + '/movie/popular?language=en-US&page=1&'+API_KEY;




const main = document.getElementById('main');
const formSearch =  document.getElementById('formSearch');
const search = document.getElementById('search');

getMovies(API_URL);
console.log(API_URL)

function getMovies(url) 
{ 
    fetch(url)
    .then(res => res.json())
    .then(data => {console.log(data.results)
    console.log(typeof(data.results)); //object fixx

/*
        localStorage.setItem("locdata",data.results);
        const locdata = data.results;
        console.log(locdata); 
*/  
    showMovies(data.results);
    }) 
}

function showMovies(data) {
   main.innerHTML = '';

    data.forEach(movie => {
        const {id,title, poster_path} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('box');
        movieEl.innerHTML = `
            
            <img src="${IMG_URL+poster_path}" alt="${title}">
            <div class="in-box">
            <center><span>${title}</span> <br> 
            <button class="btndl" id="${id}"onclick="clickfun(${id})" <a href="" > <i class="fa fa-download"></i> Download </a> </button>
            </center>
            </div>       
                                                `
        main.appendChild(movieEl);
                    })
}

function clickfun(id){
    const mvid = id;
    localStorage.setItem("locmvid",mvid);
    console.log(mvid+'in-function-click');
    const mvurl =' https://api.themoviedb.org/3/movie/'+mvid+'?api_key=api_key=7a31ef8faf51733740c3af33cdc42c4a'

    localStorage.setItem("locmvurl",mvurl);
    console.log(mvurl);
    getmvinfo(mvurl);
}

function getmvinfo(url) 
    {
        const mvid = localStorage.getItem("locid")
        console.log(mvid);
        
        fetch(url)
        .then(response => response.json())
        .then(data => {console.log(data) })
        
        window.location = 'dload.html';
        
    }
   
let searchheading=document.getElementById('searchheading')

formSearch.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm) { 
        searchheading.innerHTML="YOUR SEARCH RESULTS"
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(API_URL);
        searchheading.innerHTML="NO RESULTS FOUND"
    }

})





