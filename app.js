    const ul=document.querySelector('ul');

    const button=document.querySelector('button');


    button.addEventListener('click', () => {
    const li=document.createElement('li');
    li.textContent='something new task added'
    ul.append(li);
});


    // const items=document.querySelectorAll('li')

    // items.forEach(item =>{
    // item.addEventListener('click', (e) =>{
    //     console.log('event in li')
    //     e.stopPropagation();
    //     e.target.remove();
    // });
    //    });


    ul.addEventListener('click',e => {
        // console.log('event in ul')
        if(e.target.tagName === 'LI') 
        {
            e.target.remove()
        }
    });
