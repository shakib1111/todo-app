const ul=document.querySelector('ul');
const button=document.querySelector('button');

button.addEventListener('click', () => {
//  ul.innerHTML += '<li> something is added</li>'
const li=document.createElement('li');
li.textContent='something new task added'
ul.append(li);
});



const items=document.querySelectorAll('li')

items.forEach(item =>{
    item.addEventListener('click', (e) =>{
       
        e.target.remove();
    });
});