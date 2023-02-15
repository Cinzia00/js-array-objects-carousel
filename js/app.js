// let slideElement = [
//     './img1.jpg',
//     './img2.jpg',
//     './img3.jpg',
//     './img4.jpg'
// ]

let slideElement = [
    {
        title: 'winter',
        description:'',
        image:'./img1.jpg',
        
    },
    {
        title: '',
        description: '',
        image:'./img2.jpg',
        
    },
    {
        title: '',
        description: '',
        image:'./img3.jpg',
        
    },
    {
        title: '',
        description: '',
        image:'./img4.jpg',
        
    },
]



let slideAttiva = 0;

let elementJs = ''


for (let i = 0; i < slideElement.length; i++) {
    const currentSlide = slideElement[i]
    const title = slideElement.title
    const description = slideElement.description
    const image = slideElement.image
    
    let activeClass = ''
    if (i === 0) {
        activeClass = 'active'
    }
    // let img = `
    // <div class="slide ${activeClass}">
    //     <img src="${slideElement[i]}" alt="">
    // </div>
    // `
    for (let chiave in slideElement){
        let value = slideElement[chiave]
        // console.log('slideElement.title:', slideElement.title)
        // console.log('slideElement.description:', slideElement.description)
        // console.log('slideElement.image:', slideElement.image)    
        // console.log(value)
        
        let img = `
        <div class="slide ${activeClass}">
        <img src="${slideElement[i]}" alt="">
        </div>
        `
    }
    console.log(title, description, image, currentSlide)
    // elementJs += img
}
console.log('elemento', elementJs)
document.getElementById('carosello').innerHTML += elementJs


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


