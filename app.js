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

/* 
	? Forms
	* inherent behavior of forms: they send stuff
	* action attribute defines where to send data
	* method attribute defines which http method to use (GET default)
	* the values get retrieved from inputs
	* their properties or keys are defined using the name attribute
	* the button becomes a submit-type button and sends the form
	
	? Query Params
	* a way to send data via the URL
	* defined using key=value pairs
	* start with ?
	* each kvp separated using &
	* ex: https://google.com/search?q=somevalue&sca_esv=somevalue
	
	? Stop Form Submission
	* you can disable inherent form event doing either of the three:
		* e.preventDefault()
		* button type:button
		* form onsubmit="return false" attribute
*/

// ? Accessing query parameters
console.log(document.location.href);

// ? URLSearchParams interface - helps parse that data
let params = new URLSearchParams(document.location.search);
// creates location object sanitizing query params

let fullName = params.get("fullName");
let email = params.get("email");
console.log(fullName, email);

let loginBtn = document.querySelector(".auth-form > button");

loginBtn.addEventListener("click", (evt) => {
  // prevents default behavior (submitting the form)
  evt.preventDefault();
  console.log(
    evt.target.form[0].value,
    evt.target.form[1].value,
    evt.target.form[2].value,
  );
  console.dir(evt.target.form);
});

/* 
	? Auth Challenge
	* We already built authentication business logic
	* bring in the code from our array/object lesson logic
	* tweak it so that it incorporates event listeners and inputs from the DOM
	* feel free to use our output element to output the "logged in", "forbidden", etc
	! Spicey Mode
	* we have login and register logic
	* if you login, you shouldn't need full name, but you do when you register
	* build a button which shows/hides whether you login or register
	* it should also change the name of the 'go' button to say Register or Login respectively
*/
let db = [
  { email: "jackson@gmail.com", password: "pass1234" },
  { email: "paul@codecademy.com", password: "ilovepizza777" },
  { email: "hamza@gmail.com", password: "alialiali" },
  { email: "nader@gmail.com", password: "laskjflk9834834" },
  { email: "rachel@gmail.com", password: "superCool22" },
  { email: "andrew@gmail.com", password: "pikeFIsH90" },
];

function validateEmail(email) {
  if (typeof email !== "string" || email.trim() === "") return null;
  return email.trim().toLowerCase();
}

function validatePassword(password) {
  if (typeof password !== "string" || password.trim() === "") return null;
  return password;
}

function findUserByEmail(email) {
  return db.find((usr) => usr.email === email); // already normalized when saved
}

function login(req) {
  let email = validateEmail(req.email);
  let password = validatePassword(req.password);
  if (!email || !password) return "Email and password required";

  let user = findUserByEmail(email);
  if (!user) return "User not found";
  if (user.password !== password) return "Incorrect password";

  return "Logged in";
}

function register(req) {
  let email = validateEmail(req.email);
  let password = validatePassword(req.password);
  if (!email || !password || !req.fullName?.trim())
    return "All fields required";

  if (findUserByEmail(email)) return "User already exists";

  db.push({ fullName: req.fullName.trim(), email, password });
  return "Account created";
}

let form = document.querySelector(".auth-form");
let toggleBtn = document.querySelector(".toggle");
let goBtn = document.querySelector(".auth-form > button");
let nameInput = form.elements.fullName; // grab inputs by name, not by index

let mode = "login";

toggleBtn.addEventListener("click", () => {
  mode = mode === "login" ? "register" : "login";
  nameInput.hidden = mode === "login"; // show/hide full name
  goBtn.textContent = mode === "login" ? "Login" : "Register";
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let req = {
    fullName: form.elements.fullName.value,
    email: form.elements.email.value,
    password: form.elements.password.value,
  };
  output.textContent = mode === "login" ? login(req) : register(req);
});
