//Dom Manipulation
let tn =document.getElementById('click');
// tn.style.background = "red";
// tn.classList.add ('success');//from css
// tn .classList.remove('success');

let elem = document.getElementsByClassName('container');
let elemid =document.getElementById('click');
// console.log(elemid.innerHTML);
// console.log(elemid.innerText);

// //Create a elements through js 
// tag = document.getElementsByTagName('div');
// console.log(tag);
// let created =document.createElement('h2')
// created.innerText ="Created h2 element through javascript";
// tag[0].appendChild(created);

// let created2 =document.createElement('p')
// created.innerText ="Created p element through javascript";
// tag[0].replaceChild(created2,created);
// document.images;
// document.links;

// //Selecting using query //help select the css
// let sel =document.querySelector('.container');
// console.log(sel);
// let sel2 =document.querySelector('.container');
// console.log(sel2);

function clicked() {
    console.log("btn is clicked");
}

window.onload =function load() {
    console.log("page is loaded");
}

// //Events
// let prevHtml =document.querySelectorAll('.container')[1].innerHTML
// firstCont.addEventListener('click',function () {
//     document.querySelectorAll('.container')[1].innerHTML = prevHtml
//     console.log("Its Clicked");
// });
// firstCont.addEventListener('mouseover',function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have bold</b>"
//     console.log("Mouse Hover");
// });

// function sum(a,b) {
//     return a+b;
// }
//arrow function
// sum=(a,b)=>{return a+b}

//settimeout and set time iterval
// setTimeout(() => { 
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Time out</b>";
//     console.log("SetTime out");
// }, 2000);

// setInterval(() => {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Time out</b>";
//     console.log("setinterval out")
// }, 2000);

// localStorage.setItem('name','bhagyashree');

//json
 obj ={name:"ABC",a:{this:'tha"t'}}
//  console.log(typeof obj);
//  jso = JSON.stringify(obj);
//  console.log(jso);
//  console.log(typeof jso);
//  parsed = JSON.parse(`{"name":"ABC","a":{"this":"that"}}`)
//  console.log(typeof parsed);

//backtick ---- template letral
// a=34;
// console.log(`this is a ${a}`);
