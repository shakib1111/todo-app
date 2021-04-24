const addform=document.querySelector('.add');
const list=document.querySelector('.todos')
const search=document.querySelector('.search input');

const generateTemplate=todo=>{

    const html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fas fa-trash delete"></i>
</li>
    `;
    list.innerHTML +=html;
};



addform.addEventListener('submit' , e=>{
    e.preventDefault();
    const todo=addform.add.value.trim();
   if(todo.length)
   {
    generateTemplate(todo);
    addform.reset();
   }
});

list.addEventListener('click', e=>{
    if(e.target.classList.contains('delete'))
    {
            e.target.parentElement.remove();
    }
});


const filtertodos=(term)=>{
    console.log(term)
};

search.addEventListener('keyup',()=>{
    const term=search.value.trim();
    filtertodos(term);
});