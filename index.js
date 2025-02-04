const searchInput = document.getElementById('search-input');
const resultArttist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');

function requestApi(serchTerm){    
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayRecults(result));
}

function displayRecults(result){
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.foreach(element =>{
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
    
    resultArttist.classList.remove('hidden');
}

document.addEventListener('input', function (){
    const searchTerm = searchInput.ariaValueMax.toLocaleLowerCase();
    if (searchTerm === ''){
        resultPlaylist.classList.add('hidden');
        resultArttist.classList.remove('hidden');
        return
    }

    requestApi(searchTerm);
});