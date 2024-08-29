const genresurl='https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${}'
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

let genrecontainer=document.getElementById('genrecontainer')
console.log(genrecontainer)

let action=document.getElementById("action")
let adventure=document.getElementById("Adventure")
let thriller=document.getElementById("Thriller")
let drama=document.getElementById("Drama")
let scifi=document.getElementById("scifi")
let fiction=document.getElementById("Fiction")
let horror=document.getElementById("Horror")
let documentary=document.getElementById("Documentary")

action.addEventListener('click',()=>{
    fetchgenres(28)
})

adventure.addEventListener('click',()=>{
    fetchgenres(12)
})

thriller.addEventListener('click',()=>{
    fetchgenres(53)
})
drama.addEventListener('click',()=>{
    fetchgenres(18)
})

scifi.addEventListener('click',()=>{
    fetchgenres(878)
})

fiction.addEventListener('click',()=>{
    fetchgenres(878)
})
horror.addEventListener('click',()=>{
    fetchgenres(27)
})
documentary.addEventListener('click',()=>{
    fetchgenres(99)
})



function fetchgenres(a){
   fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${a}&api_key=7a31ef8faf51733740c3af33cdc42c4a`)
   .then(res=>res.json())
   .then(data=>{
                    console.log(data.results)
                    showMovies(data.results)
               })
   
}





function showMovies(data) {
   let removegenres=document.getElementById('removegenres')
   let classele=document.getElementsByClassName('classele')
   if(classele.length>0){
    classele[0].remove()
   }
   




    // let xxx = document.getElementById('ttt')
    // console.log(xxx)
    // xxx?delete(ttt):
     let abc=document.createElement('div')
     let h1=document.createElement('h1')
     h1.innerHTML="RESULTS..."
     main.appendChild(h1)

     abc.classList.add('classele')
     data.forEach(movie => {
        let xyz=document.createElement('div')
        xyz.classList.add('box')
        const {id,title, poster_path} = movie;
        console.log(id)
        xyz.innerHTML+=`
             
        <img src="${IMG_URL+poster_path}" alt="${title}">
        <div class="in-box">
        <center><span>${title}</span> <br> 
        </center>
        </div>       
                                          `
        abc.appendChild(xyz)                                  
        // main.append(abc)
        // removegenres.remove()

        //  const movieEl = document.createElement('div');
        //  console.log(movieEl)
        //  movieEl.classList.add('box');
        //  console.log(movieEl)
        //  movieEl.innerHTML = `
             
        //      <img src="${IMG_URL+poster_path}" alt="${title}">
        //      <div class="in-box">
        //      <center><span>${title}</span> <br> 
        //      </center>
        //      </div>       
        //                                          `
        //  main.appendChild(movieEl);
        //  console.log(main)
                     })
                     main.append(abc)
                     removegenres.remove()
 }
 

//  <button class="btndl" id="${id}"onclick="clickfun(${id})" <a href="" > <i class="fa fa-download"></i> Download </a> </button>