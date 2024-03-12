function  display(num){
    console.log(num)
    finale.value+=num
    
    
}

function clearALL(){
    finale.value=""
}

function back() {
    finale.value = finale.value.slice(0,-1)
}



function equal() {

   try{
    finale.value = eval(finale.value)
   }

   catch {
     finale.value="error"

     setTimeout(()=>{
        finale.value=""
     },1000)
   } 
}


