let arr=["one.jpg","two.jpg","three.jpg","four.jpg","five.jpg"];
var counter=0;
function image_changer()
{
    document.getElementById("myimage").src=`./images/${arr[counter]}`;
    console.log(`./images/${arr[counter]}`);
    counter++;

  if (counter==(arr.length)-1)
  {
    counter=0;
  }
}
image_changer();

setInterval(image_changer,3000);
