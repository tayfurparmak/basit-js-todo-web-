let addToDoButton = document.getElementById('inputAdd');
let toDoContainer =document.getElementById('toDoContainer');
let inputText  =document.getElementById('inputText');
let inputClear = document.getElementById('inputClear')

addToDoButton.addEventListener('click',function(){

   let paragraf = document.createElement('p');
   paragraf.classList.add('paragraf-style');
    toDoContainer.appendChild(paragraf);
    paragraf.innerHTML=inputText.value;
    inputText.value="";

paragraf.addEventListener('click' ,function(){
    paragraf.style.textDecoration ='line-through';
});

paragraf.addEventListener('dbclick',function(){
    toDoContainer.removeChild(paragraf);
});
inputClear.addEventListener('click',function(){
    paragraf.remove();
});

});