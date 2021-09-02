// -----------------API
const list = document.querySelector('#spinner')

// URL = 'https://photorankapi-a.akamaihd.net/customers/215757/media/recent?rights_given=0&include_tagged_galleries=0&auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2'
URL = 'https://api.unsplash.com/search/photos?query=coffee&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k'
// https://api.unsplash.com/search/photos?query=coffee&per_page=40&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k
// fetch(URL)
// .then(resp => resp.json())
// .then(data => {
//     const mediaUrl = data.data._embedded.media
//     mediaUrl.forEach((item) => {
//         console.log(item.images.normal);
//         list.innerHTML += `
//         <img src="${item.images.normal}" alt>
        
//         `
//     })
// })

var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}

fetch(URL)
.then(resp => resp.json())
// .then(data => console.log(data.results))
.then(data => {
    // const mediaUrl = data.data._embedded.media
    data.results.forEach((item) => {
        console.log(item.urls.regular);
        list.innerHTML += `
        <img src="${item.urls.regular}" alt>
        
        `
    })
})