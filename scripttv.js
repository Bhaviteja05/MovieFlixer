//  https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7a31ef8faf51733740c3af33cdc42c4a
// https://api.themoviedb.org/3/movie/550?api_key={api_key}&callback=test
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>
//https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>

const API_KEY = 'api_key=7a31ef8faf51733740c3af33cdc42c4a';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchtvURL = BASE_URL + '/search/tv?'+API_KEY;
const APIS_URL = BASE_URL + '/discover/tv?sort_by=popularity.desc&'+API_KEY;



const main = document.getElementById('main');
const formSearch =  document.getElementById('formSearch');
const search = document.getElementById('search');

getSeries(APIS_URL);

function getSeries(url) 
{
    fetch(url).then(res => res.json())
    .then(data => {console.log(data.results)
    console.log(typeof(data.results)); //object fixx

/*
        localStorage.setItem("locdata",data.results);
        const locdata = data.results;
        console.log(locdata); 
*/  
    showSeries(data.results);
    }) 
}

function showSeries(data) {
   main.innerHTML = '';

    data.forEach(movie => {
        const {id,name, poster_path} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('box');
        movieEl.innerHTML = `
            
            <img src="${IMG_URL+poster_path}" alt="${name}">
            <div class="in-box">
            <center><span>${name}</span> <br> 
            <button class="btndl" id="${id}"onclick="clickfun(${id})" <a href="" > <i class="fa fa-download"></i> Download </a> </button>
            </center>
            </div>       
                                                `
        main.appendChild(movieEl);
                    })
}

function clickfun(id){
    const tvid = id;
    localStorage.setItem("loctvid",tvid);
    console.log(tvid+' in-function-click');
    const tvurl =' https://api.themoviedb.org/3/tv/'+tvid+'?api_key=7a31ef8faf51733740c3af33cdc42c4a'

    localStorage.setItem("loctvurl",tvurl);
    console.log(tvurl);
    gettvinfo(tvurl);
}

function gettvinfo(url) 
    {
        const tvid = localStorage.getItem("loctvid")
        console.log(tvid);
        
        fetch(url)
        .then(response => response.json())
        .then(data => {console.log(data) })
        
        window.location = 'tvdload.html';
        
    }
   

let searchheading=document.getElementById('searchheading')
formSearch.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm) { 
        searchheading.innerHTML="YOUR SEARCH RESULTS"
        getSeries(searchtvURL+'&query='+searchTerm)
    }else{
        getSeries(APIS_URL);
    }

})








