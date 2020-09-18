
/* start of question 1 */

var newItem=document.getElementById("newItem")
var btn=document.getElementById("items")
var items=[]
btn.onclick=function(){
addItem()
displayItem()
}

function addItem()
{
var item={
"name":newItem.value
}
items.push(item)

}
function displayItem()
{
cartona="";
for(i=0;i<items.length;i++)
{
cartona+=`<div><span class="spanitem py-1 px-5 mt-1">`+items[i].name+`</span><button class="btn-sm ml-3 del btn-danger" onclick="deleteItem(`+i+`)">X</button></div>`;
}
document.getElementById("displayItem").innerHTML=cartona
}

function deleteItem(index)
{
items.splice(index,1)
displayItem()
}
/* end of question 1 */





/* start of question 2 */

var colorChanger = document.getElementById("div2");
var container2 = document.getElementById("container2")
const randNum = () => Math.floor(Math.random() * 256);
var interval = null
var audioElement=new Audio();
//audio takes 10 sec to work 
audioElement.src="./mp3/audio.mp3"
function changeColor() {
container2.style.backgroundColor = `rgb(${randNum()},${randNum()},${randNum()})`;
}

$("#div2").hover(function(){
interval = setInterval(changeColor,600)
audioElement.play()

},function(){
  clearInterval(interval)
  container2.style.backgroundColor="#fff"
  audioElement.pause()
})
  

/* end of question 2 */


/* start of question 3 */

let count=new Date("dec 1,2020 00:01:00").getTime();
let timer=setInterval(function(){
  let timeNow=new Date().getTime()
  let counter=count-timeNow;
  let days=Math.floor(counter/(1000*60*60*24))
  let houres=Math.floor((counter%(1000*60*60*24))/(1000*60*60))
  let minutes=Math.floor((counter%(1000*60*60))/(1000*60))
  let seconds=Math.floor((counter%(1000*60))/1000)

  document.getElementById("days").innerHTML=days
  document.getElementById("hours").innerHTML=houres

  document.getElementById("minutes").innerHTML=minutes
  document.getElementById("seconds").innerHTML=seconds

  if(counter<=0)
  {
    clearInterval(timer)
  }
},1000);


/* end of question 3 */

/* start of question 4 */

var red=document.getElementById("red")
var green=document.getElementById("green")
var blue=document.getElementById("blue")
var container4=document.getElementById("container4")


red.onmouseover=function()
{
  container4.style.backgroundColor="red"
red.style.cssText="text-shadow:-10px -3px white"
green.style.cssText="text-shadow:-10px -3px white"
blue.style.cssText="text-shadow:-10px -3px white"
  red.style.color="#000"
  green.style.color="#000"
  blue.style.color="#000"
}
red.onmouseout=function()
{
  container4.style.backgroundColor="#fff"
  red.style.color="#000"
  green.style.color="#000"
  blue.style.color="#000"
}


green.onmouseover=function()
{
  container4.style.backgroundColor="green"
green.style.cssText="text-shadow:-10px -3px white"
red.style.cssText="text-shadow:-10px -3px white"
blue.style.cssText="text-shadow:-10px -3px white"
  red.style.color="#000"
  green.style.color="#000"
  blue.style.color="#000"
}
green.onmouseout=function()
{
  container4.style.backgroundColor="#fff"
  red.style.color="#000"
  green.style.color="#000"
  blue.style.color="#000"
}

blue.onmouseover=function()
{
  container4.style.backgroundColor="blue"
green.style.cssText="text-shadow:-10px -3px white"
red.style.cssText="text-shadow:-10px -3px white"
blue.style.cssText="text-shadow:-10px -3px white"
  red.style.color="#000"
  green.style.color="#000"
  blue.style.color="#000"
}
blue.onmouseout=function()
{
  container4.style.backgroundColor="#fff"
  red.style.color="#000"
  green.style.color="#000"
  blue.style.color="#000"
}



/* end of question 4 */





/* start of section 5 */

var userName=document.getElementById("userName")
var userEmail=document.getElementById("userEmail")
var userPhone=document.getElementById("userPhone")
var alert1=document.querySelector(".alert1")
var alert2=document.querySelector(".alert2")
var alert3=document.querySelector(".alert3")
userName.addEventListener("keyup",function()
{
var rejexName=/^[A-Z][a-z]{2,9}$/;
rejexName.test(userName.value)
if(rejexName.test(userName.value))
{
userName.classList.add("is-valid")
userName.classList.remove("is-invalid")
alert1.style.display="none";
}
else{
  userName.classList.add("is-invalid")
  userName.classList.remove("is-valid")
  alert1.style.display="block";
}
})

userPhone.addEventListener("keyup",function()
{
var rejexPhone=/^(002)?(010|011|012|015)[0-9]{8}$/
rejexPhone.test(userPhone.value)
if(rejexPhone.test(userPhone.value))
{
userPhone.classList.add("is-valid")
userPhone.classList.remove("is-invalid")
alert2.style.display="none";
}
else{
  userPhone.classList.add("is-invalid")
  userPhone.classList.remove("is-valid")
  alert2.style.display="block";
}
})
userEmail.addEventListener("keyup",function()
{
var rejexEmail=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
rejexEmail.test(userEmail.value)
if(rejexEmail.test(userEmail.value))
{
userEmail.classList.add("is-valid")
userEmail.classList.remove("is-invalid")
alert3.style.display="none";
}
else{
  userEmail.classList.add("is-invalid")
  userEmail.classList.remove("is-valid")
  alert3.style.display="block";
}
})

/* end of section 5 */













