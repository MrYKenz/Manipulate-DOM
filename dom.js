// DOM Manipulation Exercise //

// console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log("before:", document.title);
document.title = "New Title";
console.log("after:", document.title);
console.log(document.all);
console.log("before:",document.all[10].textContent); // element 10 is header in this case
document.all[10].textContent = "New Header";
console.log("after:", document.all[10].textContent);
console.log("number of forms:", document.forms.length); // length as property
console.log(document.links); // empty array = no links
console.log(document.images); // empty array = no images

