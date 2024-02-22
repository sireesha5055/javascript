// Dom Manipulation 



// getElementById()
const title = document.getElementById('main-heading');
console.log(title);

// GetElementByClassName()
const list = document.getElementsByClassName('list-items');
console.log(list);
// GetElementsByTagName()
const tag2 = document.getElementsByTagName("li");
console.log(tag2);
// querySelector()
const query = document.querySelectorAll('div');
console.log(query);
const query2 = document.querySelector('div');
console.log(query2);
// accessing the css properties ............

title.style.color = 'red';
for (i = 0; i < list.length; i++) { // for creating style in list 
    list[i].style.color = 'blue';
    list[i].style.fontSize = '1rem';
}
//  Creating elements 
const ul = document.querySelector('ul');
const li = document.querySelector('li');
// adding elements 
ul.append(li)

// Modifying the text 

const firstListItem = document.querySelector('list');
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);





