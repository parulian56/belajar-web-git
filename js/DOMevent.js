// Reacting to Events
// A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.

// To execute code when a user clicks on an element, add JavaScript code to an HTML event attribute:

// onclick=JavaScript
// Examples of HTML events:

// When a user clicks the mouse
// When a web page has loaded
// When an image has been loaded
// When the mouse moves over an element
// When an input field is changed
// When an HTML form is submitted
// When a user strokes a key
// In this example, the content of the <h1> element is changed when a user clicks on it:

// Example
// <!DOCTYPE html>
// <html>
// <body>

// <h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>

// </body>
// </html>
// In this example, a function is called from the event handler:

// Example
// <!DOCTYPE html>
// <html>
// <body>

// <h1 onclick="changeText(this)">Click on this text!</h1>

// <script>
// function changeText(id) {
//   id.innerHTML = "Ooops!";
// }
// </script>

// </body>
// </html>
// ADVERTISEMENT

// HTML Event Attributes
// To assign events to HTML elements you can use event attributes.

// Example
// Assign an onclick event to a button element:

// <button onclick="displayDate()">Try it</button>
// In the example above, a function named displayDate will be executed when the button is clicked.

// Assign Events Using the HTML DOM
// The HTML DOM allows you to assign events to HTML elements using JavaScript:

// Example
// Assign an onclick event to a button element:

// <script>
// document.getElementById("myBtn").onclick = displayDate;
// </script>
// In the example above, a function named displayDate is assigned to an HTML element with the id="myBtn".

// The function will be executed when the button is clicked.

// The onload and onunload Events
// The onload and onunload events are triggered when the user enters or leaves the page.

// The onload event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.

// The onload and onunload events can be used to deal with cookies.

// Example
// <body onload="checkCookies()">
// The oninput Event
// The oninput event is often to some action while the user input data.

// Below is an example of how to use the oninput to change the content of an input field.

// Example
// <input type="text" id="fname" oninput="upperCase()">
// The onchange Event
// The onchange event is often used in combination with validation of input fields.

// Below is an example of how to use the onchange. The upperCase() function will be called when a user changes the content of an input field.

// Example
// <input type="text" id="fname" onchange="upperCase()">
// The onmouseover and onmouseout Events
// The onmouseover and onmouseout events can be used to trigger a function when the user mouses over, or out of, an HTML element:

// Mouse Over Me

// The onmousedown, onmouseup and onclick Events
// The onmousedown, onmouseup, and onclick events are all parts of a mouse-click. First when a mouse-button is clicked, the onmousedown event is triggered, then, when the mouse-button is released, the onmouseup event is triggered, finally, when the mouse-click is completed, the onclick event is triggered.

// Click Me

// More Examples
// onmousedown and onmouseup
// Change an image when a user holds down the mouse button.

// onload
// Display an alert box when the page has finished loading.

// onfocus
// Change the background-color of an input field when it gets focus.

// Mouse Events
// Change the color of an element when the cursor moves over it.

// HTML DOM Event Object Reference
// For a list of all HTML DOM events, look at our complete HTML DOM Event Object Reference.