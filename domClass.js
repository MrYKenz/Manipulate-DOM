// GETELEMENTSBYCLASS //

var items = document.getElementsByClassName('list-group-item');
// var li = documtent.getElementsByTagName('li'); // GETELEMENTSBYTAG
console.log(items);
for(i = 0; i < items.length; i++){
    items[i].textContent = 'changed ' + (i+1);
    items[i].style.fontWeight = 'bold';
    items[i].style.backgroundColor = 'lightgreen';
}

// QUERYSELECTOR //

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 2px #c4c4c4';
var input = document.querySelector('input');
var submit = document.querySelector('input[type="submit"]');
input.value = 'Enter text here...'
submit.value = "Click Here"

var odd = document.querySelectorAll('li:nth-child(odd)');
for(i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#85DD75';
}

var itemList = document.querySelector('#items');
itemList.parentElement.style.backgroundColor = '#f4f4f4';
itemList.previousElementSibling.textContent = 'Previous';

// Create a Div

var newDiv = document.createElement('div');
newDiv.className = 'new'
newDiv.id = 'new1'
newDiv.setAttribute('title', 'The Div')
console.log(newDiv);
var text = document.createTextNode('inserted text');
newDiv.appendChild(text)
var container = document.querySelector('#main');
var h2 = document.querySelector('#main h2')
container.insertBefore(newDiv, h2);

// EVENTS //

// var button = document.getElementById('button').addEventListener('click', function(){
//     console.log(123)
//     alert(123)
// });

var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e){
    console.log('button clicked')
    document.querySelector('#main-header').textContent = 'new title'
    document.querySelector('#main-header').style.fontSize = '40px'
    document.querySelector('#main-header').style.textAlign = 'center'
    console.log(e.clientX, e.clientY) // client = window
    console.log(e.offsetX, e.offsetY) // offset = element
    console.log(e.ctrlKey, e.altKey)
};
