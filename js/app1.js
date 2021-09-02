// -----------------API
const list = document.querySelector('.galleryapi')

URL = 'https://api.unsplash.com/search/photos?query=coffee&per_page=28&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k'


fetch(URL)
.then(resp => resp.json())
// .then(data => console.log(data.results))
.then(data => {
    // const mediaUrl = data.data._embedded.media
    data.results.forEach((item) => {
        console.log(item.urls.regular);
        list.innerHTML += `
        <div class="row">
        <div class="col-md-3 col-sm-4 col-xs-6 thumb">
            <a data-fancybox="gallery" href="${item.urls.regular}">
                <img class="img-responsive" src="${item.urls.regular}" alt="">
            </a>
        </div>
        </div>
        `
    })
})