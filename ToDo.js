const todoList=[{
  name:'journal',
  dueDate:'2025-04-24'
},{
   name:'dinner prep',
   dueDate:'2025-05-24'
}];
render();
function render(){
  let todoListHTML='';

for(let i=0;i<todoList.length;i++){
  const todoObject=todoList[i];
  //const name=todoObject.name;
  //const dueDate=todoObject.dueDate;
  const {name,dueDate}=todoObject;
  const html=`
  <p>
  ${name} ${dueDate} 
  <button onclick=
  "todoList.splice(${i},1);
  render();"
  >Delete</button>
  </p>
  `;
  todoListHTML+=html;
}
console.log(todoListHTML);
document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}
function addTodo(){
  const inputElement=document.querySelector('.js-name-input');
  const name=inputElement.value;
  const dateInputElement=document.querySelector('.js-due-date');
  const dueDate=dateInputElement.value;
  todoList.push({
   // name:name,
  //dueDate:dueDate
  name,
  dueDate
});
  console.log(todoList);
  inputElement.value='';
  render();
}