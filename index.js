const toggle = document.querySelector('.toggle-menu')
const bar = document.querySelector('.left-part')
let i = 0

toggle.addEventListener('click', () => {
    bar.classList.toggle('active')
    console.log('jk')

})



const icon = document.querySelectorAll('.icon')
const details = document.querySelector('.edu-details')

let j;
// icon.addEventListener("click", () => {
// details.style.display = "block";
// console.log("KK")
// })


// icon.forEach(e => {
//     e.addEventListener('click', () => {
//         if (document.querySelector('.edu-details').style.display = 'none') {
//             document.querySelector('.edu-details').style.display = 'block'
//         } else {
//             document.querySelector('.edu-details').style.display = 'none'
//         }
//     })
// })


for (i = 0; i < icon.length; i++) {
    icon[i].addEventListener('click', myfun)
}

function myfun() {
    if (j = 1) {
        details.style.display = 'block'
    } else {
        details.style.dispaly = 'none'
    }
}