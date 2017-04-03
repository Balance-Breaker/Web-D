var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'mozi.png') {
      myImage.setAttribute ('src','mozi2.png');
    } else {
      myImage.setAttribute ('src','mozi.png');
    }
}

var myHead =document.querySelector('h1');
myHead.textContent="Hello World";
var myButton =document.querySelector('button');

function setUserName(){
var myName =prompt('Please enter your name.');
localStorage.setItem('name',myName);
myHead.innerHTML='Hello '+myName;
}

if(!localStorage.getItem('name')){
setUserName();
}
else
{
var storedName = localStorage.getItem('name');
myHead.innerHTML ='Hello '+ storedName;
}
myButton.onclick = function() {
setUserName();
}
