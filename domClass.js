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

