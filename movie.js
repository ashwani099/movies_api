async function getmovie(){
    let section=document.getElementById("section");
    section.innerHTML=""
    try{
        let movie=document.getElementById("inputbox").value
        let omdb=await fetch(`http://www.omdbapi.com/?s=${movie}&apikey=28e6c3ad`)
        omdb=await omdb.json()
        omdb.Search.map(({Title,Year,Poster})=>{
            // console.log(Title);
            // let {Title,Year,Poster}=omdb
            section.innerHTML+=`
            <div>
            <h2>${Title}</h2>
            <img src=${Poster} alt="">
            <h3>${Year}</h3>
            </div>
            `
        }) 
    } 
    catch(err){
        console.log(err);
    }
}

// getmovie()