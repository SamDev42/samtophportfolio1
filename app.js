

// MENU Code

const OpenMenUBtn = document.querySelector('.menu-open')
const CloseMenuBtn = document.querySelector('.menu-close')
const linksContainer = document.querySelector('.links-container')
const AllLinks = document.querySelectorAll('.links > li > a') 
const Layer = document.querySelector('.layer')
const body = document.querySelector('body')

console.log(body);
//Events
OpenMenUBtn.addEventListener('click', openmenuFunction);
CloseMenuBtn.addEventListener('click', closeMenuFunction);
AllLinks.forEach(link => link.addEventListener('click', closeMenuFunction))
Layer.addEventListener('click', closeMenuFunction)


//Functions
function openmenuFunction() {
    linksContainer.classList.add('active')
    Layer.classList.add('active')
    body.classList.add('active')
}

function closeMenuFunction() {
    linksContainer.classList.remove('active')
    Layer.classList.remove('active')
    body.classList.remove('active')
}

// // // // // // // // // // // // // // // // // // // // // // // // // //


// Background Changer

const BackgoundArray = [
    {
        bkImg:'./img/home1.jpg',
        Id:1,
    },
    {
        bkImg:'./img/home2.jpg',
        Id:2,
    },
    {
        bkImg:'./img/home3.jpg',
        Id:3,
    },
    {
        bkImg:'./img/home4.jpg',
        Id:4,
    },
    {
        bkImg:'./img/home5.jpg',
        Id:5,
    },
]


const AllSwitchBtn = document.querySelectorAll('.switchBKBtn');
const backgroundDiv = document.querySelector('.background-div')

console.log(backgroundDiv);

AllSwitchBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        remouveAllClasses()
        addclassListBtn(btn.id)
    })
})


function remouveAllClasses() {
    AllSwitchBtn.forEach(btn => btn.classList.remove('active'))
}


function addclassListBtn(id){
    let chosenSpan = Array.from(AllSwitchBtn).find(btn => btn.id == id)
    chosenSpan.classList.add('active')
    let backgroundImgurl = BackgoundArray.find(img => img.Id == id).bkImg
    backgroundDiv.style['background-image'] = `url(${backgroundImgurl})`
}

// // // // // // // // // // // // // // // // // // // // // // // // // //

// menu nav fixed

const navHeader = document.querySelector('.header');

console.log();

window.addEventListener('scroll', () => {
    let windowtopPoint = document.documentElement.scrollTop

    if(windowtopPoint > 10){
        navHeader.classList.add('active')
    }else{
        navHeader.classList.remove('active')
    }
})

// // // // // // // // // // // // // // // // // // // // // // // // // //


// services logic

const ServicesBk = [
    {
        bkImg:'./img/services1.jpg',
        Id:1,
    },
    {
        bkImg:'./img/services2.jpg',
        Id:2,
    },
    {
        bkImg:'./img/services3.jpg',
        Id:3,
    },
    {
        bkImg:'./img/services4.jpg',
        Id:4,
    },
    {
        bkImg:'./img/services5.jpg',
        Id:5,
    },
]

const bkservicesSection = document.querySelector('.services-background')
const AllservicesTitle  = document.querySelectorAll('.service-title')
console.log(bkservicesSection);


AllservicesTitle.forEach(title => title.addEventListener('mouseenter', servicesFun))


function servicesFun() {
    let chosenImgUrl = ServicesBk.find(img => img.Id == this.id).bkImg
    console.log(chosenImgUrl);
    bkservicesSection.style['background-image'] = `url(${chosenImgUrl}) `

}