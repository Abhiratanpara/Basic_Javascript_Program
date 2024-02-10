let buttons=document.querySelectorAll(".button")
let body=document.querySelector("body")

buttons.forEach(function(items){
    items.addEventListener('click',function(e){
        if(e.target.id==='grey'){
            body.style.backgroundColor='grey'
            document.getElementById('color').innerText='color : grey'
        }
        if(e.target.id==='white'){
            body.style.backgroundColor='white'
            document.getElementById('color').innerText='color : white'
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor='blue'
            document.getElementById('color').innerText='color : blue'
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor='yellow'
            document.getElementById('color').innerText='color : yellow'
        }
    })
})