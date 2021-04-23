const addform=document.querySelector('.add');

addform.addEventListener('submit' , e=>{
    e.preventDefault();
    const todo=addform.add.value;
    console.log(todo);
});