let arr=['aqua','blue','coral','crimson','green','red','yellow','yellowgreen','skyblue','purple'];
let divContainer=document.getElementById('rectangular-container');


//When clicked on changeColor button, the color of the container should be changed.
let colorbtn=document.getElementById('colorChange');
colorbtn.addEventListener('click',function(){
    let random=Math.floor(Math.random() * 10);
    divContainer.style.backgroundColor=arr[random];
})


//When clicked on addChild button, a new square box should be added inside the parent container (rectangular box which is created earlier).

let addDiv=document.getElementById('addDiv');
addDiv.addEventListener('click',function(){
  let doc=divContainer.appendChild(
            document.createElement('div')
    )
    doc.className="rectangle";
})

//When clicked on the removeChild button, the last added square box child should be removed/disappeared.
let remChild=document.getElementById('remChild');
remChild.addEventListener('click',function(){
    divContainer.removeChild(divContainer.lastElementChild);
})