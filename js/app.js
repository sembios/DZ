// for (var i = 0; i < 1000000000; i++) {
    
// }
// console.log(i);

// let i = 0;
// const id = setInterval (() => {
//     console.log(`Im count <i> - ${++i}`);
// }, 1000);

// setTimeout (() => {
//     clearInterval(id)
// }, 5000);



//promise
// let age = 2
// const newPromise = new Promise(function(resolve, rejec) {
//   if (age > 19) {
//     resolve({age, statBol: true, status: 200})
//   } else {
//     rejec({age, statBol: false, status: 400})
//   }
// })

// newPromise
//       .then(result => console.log(result)) //положительный ответ
//       .catch(err => console.log(err)) //отрицательный. ошибка
//       .finally(() => alert('d')) //в любом случае




// let h = new XMLHttpRequest()
// h.open ('GET', 'https://pokeapi.co/api/v2/pokemon/')
// h.send()
// h.onload = function () {
//     console.log(JSON.parse(h.response));
// }

// const URL = 'https://pokeapi.co/api/v2/pokemon/'
// fetch(URL)
// .then(result => result.json())
// .then(data => console.log(data))

const City = document.querySelector('.container')

const URL = 'https://restcountries.eu/rest/v2/all'
fetch(URL)
.then(result => result.json())
.then(data => {
    data.forEach((item) =>{
        console.log(item);
        City.innerHTML += `
        <div class="citylist">
        <div class="title">
            <p>Страна:${item.name}</p>
            <p>Столица:${item.capital}</p>
            <p>Префикс:${item.alpha2Code}</p>
            <p>Регион:${item.region}</p>
        </div>
        <div class="photoimg">
        <div class="block">
            <img src="${item.flag}" alt="">
        </div>
    </div>
    </div>
        `
        console.log(item.name);
    })

    

})










