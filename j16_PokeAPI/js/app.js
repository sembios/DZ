next = document.querySelector('.next')
prev = document.querySelector('.prev')
pokeList = document.querySelector('.about')
boxInfo = document.querySelector('.pokeBox')
URL = 'https://pokeapi.co/api/v2/pokemon/?offset=${count}&limit=20'


fetch(URL)
.then(result => result.json())
.then(data => render(data))



function render (list) {
    list.results.forEach((item, index) => {
        let name = document.createElement('div.')
        name.classList.add('sliding-button')
        name.innerHTML = item.name
        pokeList.append(name)

        name.addEventListener('click', () => {
            boxInfo.classList.add('active')
            fetch(item.url)
            .then(response => response.json())
            .then(dat => {
                let imgInfo = document.createElement('img')
                imgInfo.src = `${dat.sprites.front_default}`
                boxInfo.append(imgInfo)
                console.log(imgInfo);

                let nameInfo = document.createElement('p')
                nameInfo.innerHTML = `Имя: ${dat.name}`
                boxInfo.append(nameInfo)

                let typeInfo = document.createElement('p')
                typeInfo.innerHTML = `Тип: ${dat.types[0].type.name}`
                boxInfo.append(typeInfo)

                let heightInfo = document.createElement('p')
                heightInfo.innerHTML = `Рост: ${dat.height}m`
                boxInfo.append(heightInfo)

                let weightInfo = document.createElement('p')
                weightInfo.innerHTML = `Вес: ${dat.weight}kg`
                boxInfo.append(weightInfo)

            })
            boxInfo.innerHTML = ''
            
        })
    }
    )}


let count = 0
next.addEventListener('click', () => {
    console.log(next);
    count += 20;
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${count}&limit=20`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        pokeList.innerHTML = ''
        render(data) 
    }) 
})

prev.addEventListener('click', () => {
    if (count > 20) {
        count -=20;
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${count}&limit=20`)
        .then(resp => resp.json())
        .then(data => {
        console.log(data);
        pokeList.innerHTML = ''
        render(data) 
    })
    }
})
