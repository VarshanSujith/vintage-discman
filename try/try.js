let  jazz =document.getElementById('Jazz')
let  pop =document.getElementById('Pop')
let  classical =document.getElementById('Classical')
let  blues =document.getElementById('Blues')

let  jazzIntro =document.getElementsByTagName('audio')[0]
let  popIntro =document.getElementsByTagName('audio')[1]
let  classicalIntro =document.getElementsByTagName('audio')[2]
let  bluesIntro =document.getElementsByTagName('audio')[3]

jazz.addEventListener('mouseenter',()=>{
    jazzIntro.play()
})
pop.addEventListener('mouseenter',()=>{
    popIntro.play()
})
classical.addEventListener('mouseenter',()=>{
    classicalIntro.play()
})
blues.addEventListener('mouseenter',()=>{
    bluesIntro.play()
})