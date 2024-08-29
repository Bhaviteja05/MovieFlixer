const API_KEY = 'api_key=7a31ef8faf51733740c3af33cdc42c4a';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;
const APIS_URL = BASE_URL + '/discover/tv?sort_by=popularity.desc&'+API_KEY;

let mvObj = {} ;

const tvurl = localStorage.getItem("loctvurl");
gettvinfo(tvurl);
function gettvinfo(url) 
{
console.log(url);
//tryOne
fetch(url)
.then(function(response){
return response.json(); 
})
.then(function(data){
  console.log(data);
  // Setting-up  varibles
  
  mvObj = data;
  showtvinfo();
});
//tryOne ends
}

function showtvinfo(){
//for (let prop in mvObj){
// console.log(mvObj[prop]);
 //}

    main.innerHTML="";
    const movieEl = document.createElement('div');
    movieEl.classList.add('inmainbox');
    movieEl.innerHTML = ` 


      
    <div class="infobox" style="background-image: url(${IMG_URL+mvObj.backdrop_path});background-size: cover; background-repeat: no-repeat; ">
      <img src="${IMG_URL+mvObj.poster_path}" alt="img" id="poster" >
      <div class="infotextbox">
        <h1> ${mvObj.name}</h1> <br>
        <span><b>User Rating </b>: ${mvObj.vote_average} </span> <br> 

        <span><strong> Genre</strong>  : ${mvObj.genres[0].name} </span> <br>
        <h4>OVERVEIW</h4> 
        <span>${mvObj.overview}</span>
        <br> <br> 
        <center>
        <button class="btndl"> <a href=""> <i class="fa fa-download"></i> Download 720p  </a></button>
        <button class="btndl"> <a href=""> <i class="fa fa-download"></i> Download 1080p </a></button>
        <button class="btndl"> <a href=""> <i class="fa fa-download"></i> Download <span style="font-size: 12px;color: whitesmoke;">from fastest server</span>  </a></button>   
        </center>
        
      </div>
    </div>
    
  





    `
        main.appendChild(movieEl);
  }






  // Original
 /* 
 fetch(url)
  .then(response => response.json())
  .then(data => {console.log(data)
  console.log(typeof(data)); //object fixx
  thename=data.title;
  thetime=data.runtime;
  showmvinfo(data);                              
                          })
*/
  //


  // < class="bgbox">
  // <img src="${IMG_URL+mvObj.backdrop_path}" alt="imghor" id="backdrop">