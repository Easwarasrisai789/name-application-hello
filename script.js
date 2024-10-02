const btnElement = document.querySelector('button');
const spanElement = document.querySelector('.updatecontent')

btnElement.onclick = function(){
    const yourname = prompt("PLEASE ENTER YOUR NAME: ");
    spanElement.textContent = yourname;
}