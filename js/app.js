// let slideElement = [
//     './img1.jpg',
//     './img2.jpg',
//     './img3.jpg',
//     './img4.jpg'
// ]

let slideElement = [
    {
        title: 'Winter',
        description:'Lorem ipsum dolor sit amet elit. Obcaecati pariatur corrupti aspern ipsum ab libero, aperiam repudiandae modi nobis voluptas!',
        image:'./img1.jpg',
    },
    {
        title: 'Summer',
        description: 'Lorem ipsum dolor sit amet elit. Obcaecati pariatur corrupti aspern ipsum ab libero, aperiam repudiandae modi nobis voluptas!',
        image:'./img2.jpg',
    },
    {
        title: 'Drops',
        description: 'Lorem ipsum dolor sit amet  elit. Obcaecati pariatur corrupti aspern ipsum ab libero, aperiam repudiandae modi nobis voluptas!',
        image:'./img3.jpg',
        
    },
    {
        title: 'Spring',
        description: 'Lorem ipsum dolor sit amet  elit. Obcaecati pariatur corrupti aspern ipsum ab libero, aperiam repudiandae modi nobis voluptas!',
        image:'./img4.jpg',
    },
]

let slideAttiva = 0;

let elementJs = ''
let slide = ''

for (let i = 0; i < slideElement.length; i++) {
    elementJs = slideElement[i]
    const title = slideElement.title
    const description = slideElement.description
    const image = slideElement.image
    let activeClass = ''
    if (i === 0) {
        activeClass = 'active'
    }
    
    let img = `
    <div class="slide ${activeClass}">
    <img src="${elementJs.image}" alt="">
    <p class="text"> ${slideElement[i].title}</p>
    <p class="text description"> ${slideElement[i].description}</p>
    </div>
    `

    slide += img 
    console.log(title, description, image, elementJs)
}
console.log('elemento', elementJs)
document.getElementById('carosello').innerHTML += slide


const rightArrowElement = document.getElementById("arrow-right-element");
const leftArrowElement = document.getElementById("arrow-left-element");
console.log(rightArrowElement, 'right-arrow');
let slideList = document.getElementsByClassName('slide');
console.log(slideList);


rightArrowElement.addEventListener('click', function() {
    console.log(slideAttiva, 'slide attiva')
    if (slideAttiva < slideList.length - 1) {
        let slideCorrente = slideList[slideAttiva];
        console.log(slideCorrente);
        slideCorrente.classList.remove('active');
        slideAttiva += 1;

        let prossimaslide = slideList[slideAttiva]
        prossimaslide.classList.add('active')
        console.log(prossimaslide)
    }
})


console.log('left-arrow', slideAttiva)
leftArrowElement.addEventListener('click', function () {
    if (slideAttiva > 0) {
        let slideCorrente = slideList[slideAttiva];
        console.log(slideCorrente, 'ciaone');
        slideCorrente.classList.remove('active');
        slideAttiva -= 1;
        let prossimaslide = slideList[slideAttiva]
        prossimaslide.classList.add('active')
        console.log(prossimaslide)
    }
})


