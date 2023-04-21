let review = [
    {
       id : 1,
       Name : "sara james" ,
       job : "web desinger",
       img : "https://thumbs.dreamstime.com/b/hispanic-man-smiling-square-9383237.jpg",
       text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus pariatur minus nesciunt? Impedit error fugiat odio, sint pariatur reiciendis sit repudiandae amet sequi tempore commodi cumque quibusdam, obcaecati eum."

    },
    {
        id : 2,
        Name : "Tommy" ,
        job : "C A",
        img : "https://pbs.twimg.com/profile_images/1338625691345170436/x3j1QVme_400x400.jpg",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibusm, obcaecati eum."
 
     },
     {
        id : 3,
        Name : "james" ,
        job : "desinger",
        img : "https://www.digicatapult.org.uk/wp-content/uploads/2021/11/DC_square_People_juergen-600x600-c-default.jpg",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus pariatur minus nesciunt? Impedit error fugiat odio, sint pariatur reiciendis sit repudiandae amet sequi tempore commodi c"
 
     },
     {
        id : 4,
        Name : "michel" ,
        job : "Engener",
        img : "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3021752-inline-i-1-why-square-designed-its-new-offices-to-work-like-a-city.jpg",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus pariatur minus nesciunt? Impedit error fugiat odio, quibusdam, obcaecati eum."
 
     },
]

const image = document.querySelector('#main-image')
const job = document.querySelector('#job')
const dep = document.querySelector('#dep')
const author = document.querySelector('#Name')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const random = document.querySelector('#random')

console.log(image.src)
let x = 0

window.addEventListener('DOMContentLoaded',()=>{
   cards(x)
})



function cards(number){
    let y = review[number]
   image.src = y.img
   author.textContent = y.Name
   dep.textContent = y.text
   job.textContent = y.job
}
console.log(review.length)
left.addEventListener("click",()=>{
    x++
    if(x>review.length - 1){
       x = 0
       
    }
    cards(x)
})
right.addEventListener("click",()=>{
    x--
    if(x< 0){
        x = review.length - 1
    }
    cards(x)
  })


random.addEventListener('click',()=>{
    cards(number())
})
function number(){
    return Math.floor(Math.random()*review.length)
}
console.log(number())
// console.log(review[1].job)