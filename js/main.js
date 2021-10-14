//click on toggle menu
let ul = document.querySelector('nav ul')
let li = document.querySelector('nav ul li')
let toggle = document.querySelector('nav i')

toggle.onclick = function () {
    ul.classList.toggle('show')
}

//close ul when click on links
let a = document.querySelectorAll('nav li a ')

a.forEach(t => t.addEventListener('click', hidden))
function hidden () {
    ul.classList.remove('show')
}




//small-nav when scroll down
let header = document.querySelector('header')
let con = document.querySelector('header .container')
let images = document.querySelector('header .container .logo img')
var lan = document.querySelector('.landing')
// circle persent on skill
let circle = document.querySelectorAll('svg circle:nth-child(2)')




window.onscroll = function () {
    if (scrollY >= 45) {
        header.classList.add('small-nav')
        con.classList.add('small-nav')
        images.classList.add('small-nav')
    }else {
        header.classList.remove('small-nav')
        con.classList.remove('small-nav')
        images.classList.remove('small-nav')
    }
    if (scrollY >= 3430) {
        circle.forEach(cir => cir.classList.add('rotate'))
    } else {
        circle.forEach(cir => cir.classList.remove('rotate'))
    }
}

// make scroll at the top of section 
a.forEach(t => t.addEventListener('click', function (e) {
    let headerHeight = header.offsetHeight
    console.log(headerHeight)
    let secHeight = document.querySelector(e.target.dataset.hash).offsetTop
    window.scrollTo({
        top: secHeight - 55
    })
}))


//footer button

function move () {
    window.scrollTo({
        top:0
    })
}

// landing button to services section
let ourServ = document.querySelector('.our-services')
function specificMove() {
    window.scrollTo({
        top: ourServ.offsetTop -55
    })
}