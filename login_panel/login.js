var nameRegex=/^[a-zA-Z0-9]{2,10}$/;
var datab={"Aditya":"aditya123"};

function ftest()
{
let target=document.getElementById("uname").value;
if(nameRegex.test(target))
{
   return true;
}
else{
  alert("First-Name You have to use only a-z 0-9 charachter");
  document.getElementById("uname").value='';
  return false;
}
}

function ltest()
{
let target=document.getElementById("pass").value;
if(nameRegex.test(target))
{
  return true;
}
else{
  alert("First-Name You have to use only a-z charachter");
  document.getElementById("pass").value='';
  return false;
}
}




function pass_validate(event) {
  console.log("enter");
  this.event.preventDefault();
  let user=document.getElementById("uname").value;
  let pass=document.getElementById("pass").value;
  if(user in datab)
  {
    if(datab[user]==pass)
    {
     window.location.href="./welcome.html";
    }
    else {

          alert("username and password is incorrect");
    }
  }

}
