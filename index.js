const color = document.querySelector('.color');
const btnClick = document.querySelector('.btn-click');
const bgBody=document.querySelector('.bg-body')
const backgroundEl=document.querySelector('.background-el')
const colors = ['red','blue', 'rgba(13,233,23)','f15025'];

//add event listener to the button

btnClick.addEventListener('click', function(){
    let randomNumber = getRandomNumber();
    bgBody.style.backgroundColor=colors[randomNumber];
    color.textContent = colors[randomNumber]
    backgroundEl.style.color= colors[randomNumber]
})

function getRandomNumber(){
    let randomColor = Math.floor(Math.random() * colors.length)
    return randomColor;
}