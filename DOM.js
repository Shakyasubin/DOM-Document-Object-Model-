// ================ Document Object Model (DOM) ================

// === The organized model of elements placed depending upon the heirarchy of those elements in called DOM (Document Object Model).

// === When JavaScript is used to access the DOM objects, the process is called DOM Manipulation.

// === The process of going through the heirarchy to access before using any element is called DOM Transversing.

// ================================================================

// ======= Accessing DOM Elements =======

// === document.getElementById()

// const elm = document.getElementById("first");
// console.log(elm);

// ================================================================

// === document.getElementsByTagName()

// const elm = document.getElementsByTagName("div");

// console.log(elm);
// console.log(elm[1]);

// ================================================================

// === document.getElemetsByClassName()

// const elm = document.getElementsByClassName("info");

// console.log(elm);
// console.log(elm[0]);

// ================================================================

// === document.querySelector()

// const elm = document.querySelector(".first"); // class selector
// const elm = document.querySelector("#first"); // id selector
// const elm = document.querySelector("div"); // tag selector
// const elm = document.querySelector(".info > div p");

// console.log(elm);

// ================================================================

// === document.querySelectorAll()

// const elm = document.querySelectorAll(".info"); // class selector
// const elm = document.querySelectorAll("#first"); // id selector
// const elm = document.querySelectorAll("div"); // tag selector

// console.log(elm);

// ================================================================

// ======= Changing HTML Elements =======

// === document.write()

// document.write("Adding more contents!");

// console.log(val);

// ================================================================

// === .innerHTML

// const elm = document.querySelector(".info");
// const value = elm.innerHTML;

// const elm = document.querySelector(".message");
// elm.innerHTML = "<h1>Just updating contents!</h1>";

// console.log(value);

// ================================================================

// === .innerText

// const elm = document.querySelector(".info");
// const value = elm.innerText;

// const elm = document.querySelector(".message");
// elm.innerText = "Just updating contents!";

// console.log(value);

// ================================================================
