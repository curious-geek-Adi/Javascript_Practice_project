var counter=0;
var task_list={};
var single_task={};
var global_task_list=[];
var dt=new Date();
function todo() {
var work=document.getElementById('task').value;
//
// single_task.unique_id=dt.getMilliseconds();
// single_task.task_id=counter;
// single_task.task_name=work;
// task_list[single_task.unique_id];
// single_task={};


task_list[counter]={"task_id":counter,"task_name":work};
counter++;
work.value="";
console.log(task_list);
const container = document.querySelector('#todo_body');
removeAllChildNodes(container);
listing();

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}




function listing()
{
var column;
var sino;
var task;
var edit;
var del;
var ed_txt;
var del_txt;
var row;
  var tbody=document.getElementById("todo_body");
  let container = document.querySelector('#todo_body');
  removeAllChildNodes(container);
  for(let key in task_list)
  {
      row=document.createElement("tr");
      column1=document.createElement("td");
      sino=document.createTextNode(task_list[key].task_id);
      column2=document.createElement("td");
      task=document.createTextNode(task_list[key].task_name);
      column3=document.createElement("td");
      column4=document.createElement("td");
      ed_txt=document.createTextNode("Edit");
      del_txt=document.createTextNode("Delete");
      edit=document.createElement("button");
      del=document.createElement("button");
      edit.setAttribute("onclick",`todo_edited(${key})`);
      del.setAttribute("onclick",`todo_delete(${key})`);
      column1.appendChild(sino);
      column2.appendChild(task);
      column3.appendChild(edit).appendChild(ed_txt);
      column4.appendChild(del).appendChild(del_txt);
      row.appendChild(column1);
      row.appendChild(column2);
      row.appendChild(column3);
      row.appendChild(column4);
      tbody.appendChild(row);
      row=column1=column2=column3=undefined;
      edit=del=ed_txt=del_txt=undefined;

  }
document.getElementById('task').value="";




}

function todo_edited(sid)
{
  let target=document.getElementById("btn-add");
  target.removeChild(target.firstChild);
  target.removeAttribute("onclick");
  target.setAttribute("onclick",`update(${sid})`);
  let upd_txt=document.createTextNode("update");
  target.appendChild(upd_txt);
  document.getElementById("task").value=task_list[sid].task_name;


}

function update(sid)
{
  let input_target=document.getElementById("task");
  let new_value=input_target.value;
  task_list[sid].task_name=new_value;
  let target=document.getElementById("btn-add");
  target.removeChild(target.firstChild);
  target.onclick="todo(sid)"
  let add_txt=document.createTextNode("Add");
  target.appendChild(add_txt);
  target.removeAttribute("onclick");
  target.setAttribute("onclick",`todo(${sid})`);
   listing();
}

function todo_delete(sid_key)
{
  console.log("hello",sid_key);
  delete task_list[sid_key];
  console.log(task_list);
  const container = document.querySelector('#todo_body');
  removeAllChildNodes(container);
  listing();
}
