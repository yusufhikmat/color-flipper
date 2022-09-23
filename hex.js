const color = document.querySelector('.color');
const btnClick = document.querySelector('.btn-click');
const bgBody=document.querySelector('.bg-body')


const hex=[0,1,2,3,4,5,6,7,8,9,'A','B', 'C','D','E','F']

//add event listener to the button

btnClick.addEventListener('click', function(){
    let hexColor = '#';
    for(i =0; i< 6;i++){
        hexColor += hex[getRandomNumber()];
    }
    bgBody.style.backgroundColor=hexColor;
    color.textContent = hexColor;
})

function getRandomNumber(){
    let randomColor = Math.floor(Math.random() * hex.length)
    return randomColor;
}
