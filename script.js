let screen = document.querySelector("input")

function input(string){
     screen.value = screen.value + string
     
}

function allclear(){
     screen.value = ""
}
function back(){
     screen.value = screen.value.slice(0,-1)
}
function calc(){
     if(screen.value.includes("%")){
          screen.value = screen.value.slice(0,-1)
          screen.value = eval(screen.value)/100
     }
     else{
     screen.value = eval(screen.value)
}
}