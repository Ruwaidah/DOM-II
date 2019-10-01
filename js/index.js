// Your code goes here

// =============== 1- Mouseover/Mouseleave ===========
const anchor = document.querySelectorAll("a");
console.log(anchor);
let anchorArray = Array.from(anchor);
console.log(anchorArray);
anchorArray[0].addEventListener("mouseover", function(){
    anchorArray[0].textContent = "Press Me";
    anchorArray[0].style.color = "seagreen";
})

anchorArray[0].addEventListener("mouseleave", function(){
    anchorArray[0].textContent = "Home";
    anchorArray[0].style.color = "black";
})


//  ==================== 2- Drag/Drop =================
var dragged;

document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
  }, false);
  

  document.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);

  document.addEventListener("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "newzone") {
      event.target.style.background = "";
    //   dragged.parentNode.removeChild( dragged );
      event.target.appendChild( dragged );
    }
  }, false);


//   ================ 3- Scroll ==========

const btnLoad = document.querySelector("button");

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
}

window.addEventListener('scroll', function(e) {

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.querySelector('body').style.background = "lightgray";
    }

    else 
    document.querySelector('.main-navigation').style.background = "";

});



// ============== 4- Mouseover ================

const para = document.querySelectorAll("p");
    para.forEach( ele => {
        ele.addEventListener("mouseover", (e) => {
        e.target.style.color = "red";
    });
})


// ================ 5- KeyDown =============

const bletter = document.querySelectorAll("span");

window.addEventListener("keydown", (e) => {
    if (e.key == "b" || e.key == "B"){
        bletter.forEach(ele => {
            ele.style.color = "pink";
            ele.style.fontSize = "10rem";
            ele.style.transition = "all 1s";
        })
    }
})

window.addEventListener("keyup", (e) => {
    if (e.key == "b" || e.key == "B"){
        bletter.forEach(ele => {
            ele.style.color = "";
            ele.style.fontSize = "";
        })
    }
})



//  ============ 6- Copy ==========
window.addEventListener("copy", (e) => {
    const selection = document.getSelection();
    selection.textContent = "No Copy are Allowed !"
    e.clipboardData.setData('text/plain', selection.textContent = "No Copy are Allowed !");
    e.preventDefault();
})


//  ============= 7- Focus ===========

const input = document.querySelector("input");
input.addEventListener("focus", (event) => {
    event.target.style.background = "lightpink";
    event.target.style.border = "black 2px solid";
})

input.addEventListener("blur", (event) => {
    event.target.style.background = "";
    event.target.style.border = "";
})

//  ================= 8- Resize ========
const displayno = document.querySelector("body");
window.addEventListener("resize", () => {
    displayno.style.display = "none";
})



//  ============== 9- chargingchange ===============

navigator.getBattery().then(function(battery) {

    console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
  
    battery.addEventListener('chargingchange', function() {
      console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
    });
  
  });

  navigator.getBattery().then(function(battery) {

    console.log("Battery level: " + battery.level * 100 + " %");
  
    battery.addEventListener('levelchange', function() {
      console.log("Battery level: " + battery.level * 100 + " %");
    });
  
  });



// =============== 10- DblClick ==============


  const images = document.querySelectorAll('img');
  images.forEach(ele => ele.addEventListener('dblclick', (event) => {
    console.log('Pointer moved in',event.target);
    ele.style.transform = "scale(1.2)" ;
    ele.style.opacity = "0.4" ;
  })
 )


 document.addEventListener("click", () => {
  images.forEach(ele => {
    console.log('Pointer moved in',event.target);
    ele.style.transform = "scale(1)" ;
    ele.style.opacity = "1" ;
  })
 })

