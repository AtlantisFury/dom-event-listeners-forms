console.log("Intro to DOM");

/* 
	? Document Object Model (DOM)
	* structure of our HTML file in an object format
	* contains all of elements (html, body, head, h1's, div's, and so on)
	* contains all of element attributes (href, class, id, aria)
	* and all whitespace and text within
	* document-specific methods
	* helps us achieve interactivity

*/

// ? DOM object
console.dir(document);

console.log(window, navigation, navigator, history);

// window.alert("Hello everyone")

// ? Accessing elements
console.dir(document.body.childNodes[1].textContent);

// ? Access elements using DOM methods

/* 
	? getElementsByTagName
	* HTMLCollection
	* gives us array-like object of all element type
	* cannot use array methods on it
	* can use indexes
*/

let allAnchorTags = document.getElementsByTagName("a");
console.log(allAnchorTags);

// allAnchorTags.forEach(i => console.log(i)) // TypeError cannot use array methods on array-like object

// for (i of allAnchorTags) { console.log(i) }

// ? Affecting element by modifying its DOM properties
allAnchorTags[0].style.color = "black";

/* 
	? getElementById()
	* grabs an element by its id
	* only single instance
*/

let navBar = document.getElementById("nav-bar");
console.dir(navBar);

navBar.classList.add("flex-row", "j-center");

/* 
	? getElementsByClassName()
	* HTMLCollection
	* Array like
	* gets all elements by class name
*/

let navLinks = document.getElementsByClassName("nav-links");
console.log(navLinks);

/* 
	? .querySelector()
	* accesses first instance of anything
	* can even do compound selectors
	! MUST declare the type of element you access
		* element
		* .class
		* #id
*/

let linkedINUsingCompound = document.querySelector(
  "body > #nav-bar .nav-links:nth-child(4)",
);
console.log(linkedINUsingCompound);

/* 
	? .querySelectorAll()
	* NodeList
	* an array
	* can use array methods on it
*/

let navLinksUsingQSA = document.querySelectorAll(".nav-links");
console.log(navLinksUsingQSA);

navLinksUsingQSA.forEach((l) => (l.style.fontWeight = "bold"));

/* 
	? Challenge
	* use my loop on nav links
	* modify all of them to display bold text
*/

navLinksUsingQSA[2].innerHTML = "<em>Forms Lesson</em>";

/* 
	? HTMLCollection vs NodeList
	* HTMLCollection is a live list (shows new elements)
	* HTMLCollection does not allow array methods be used
	* NodeList is a static list (does not show new elements)
	* NodeList allows array methods to be used
*/

/* 
	? Creating New Elements Dynamically
	* use .createElement() to create the element
	* adjust its properties to suit your mood
	* utilize .appendChild() method to add it to the parent element
*/

let toDoList = document.querySelector(".todo-list");

let htmlCollection = document.getElementsByClassName("todo-item");
// ? actively updates
let nodeList = document.querySelectorAll(".todo-item");
// ? will update actively but only if it's AFTER all dynamically created elements

let li = document.createElement("li");
li.textContent = "buy groceries";
li.classList.add("todo-item");
console.dir(li);
toDoList.appendChild(li);

// ? HTMLCollection picks up dynamically created element; NodeList doesn't
console.log(htmlCollection, htmlCollection.length, nodeList, nodeList.length);

// for (i of htmlCollection) {
// 	i.style.color = "red"
// }

for (i of nodeList) {
  i.style.color = "blue";
}

console.log("-------------------------------------------------------");

/* 
	? Event Listeners
	* methods which listen for an event
	* once an event occurs, a callback fx is triggered
	* the method is called .addEventListener(evt, callback)
	
	? Callback
	* function called by another function
	* passed by reference (we don't invoke it)
	* it's invoked by the event
*/

/* 
	? Challenge
	* create an input element and a button
	* the input element needs to have the following:
		* class of input
		* placeholder of Enter Item
	* the button needs to have the following
		* class of addBtn
		* text of Add
	* both need hardcoded
	* once they're added, pick up the button and the input
	* make sure you can read the input being passed into the input
*/

console.log(toDoList);
let input = document.querySelector(".input");
// ? the input of input lives in the .value property
let output = document.querySelector(".output");
let addBtn = document.querySelector(".addBtn");
console.dir(input, addBtn);

// input.addEventListener("keyup", (evt) => {
// 	console.log(evt.target.value)
// 	output.textContent = evt.target.value
// })

let addItem = () => {
  let li = document.createElement("li");
  li.className = "todo-item";
  li.textContent = input.value;
  toDoList.appendChild(li);
  input.value = "";
};

addBtn.addEventListener("click", addItem);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});
