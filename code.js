let screen= document.querySelector('#display');
let buttens= document.querySelectorAll('.button');

let string='';
let buttonsarry= Array.from(buttens);

buttonsarry.forEach((btn)=>{

   btn.addEventListener('click',(env)=>{

    if(env.target.value =='DEL'){
string=string.substring(0,string.length-1)
    screen.value= string;
}
else if(env.target.value =='AC'){
string='';
    screen.value= string;
}
else if(env.target.value =='='){
    string= eval(string);
    screen.value= string;

}

 else{
     string += env.target.value;
    screen.value= string;
   }
   
   })
  
})






