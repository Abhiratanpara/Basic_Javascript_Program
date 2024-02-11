let randomcolor = function(){
    let hex = "0123456789ABCDEF"
    let color ='#'
    for(let i=0; i<6; i++){
       color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
let interalid
let startChangingColor=function(){
    
    if( interalid == null){
        interalid =setInterval(Chengcolor,1000)
    }
     function Chengcolor(){
        document.body.style.backgroundColor=randomcolor();
     }     
}
let stopChangingColor=function(){
    clearInterval(interalid)
    interalid = null
}
document.getElementById('start').addEventListener('click',startChangingColor)
document.getElementById('stop').addEventListener('click',stopChangingColor)