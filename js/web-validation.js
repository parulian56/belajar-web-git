// Constraint Validation DOM Methods
// Property	Description
// checkValidity()	Returns true if an input element contains valid data.
// setCustomValidity()	Sets the validationMessage property of an input element.
// If an input field contains invalid data, display a message:

// The checkValidity() Method
// <input id="id1" type="number" min="100" max="300" required>
// <button onclick="myFunction()">OK</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
//   const inpObj = document.getElementById("id1");
//   if (!inpObj.checkValidity()) {
//     document.getElementById("demo").innerHTML = inpObj.validationMessage;
//   }
// }
// </script>
// Constraint Validation DOM Properties
// Property	Description
// validity	Contains boolean properties related to the validity of an input element.
// validationMessage	Contains the message a browser will display when the validity is false.
// willValidate	Indicates if an input element will be validated.
// ADVERTISEMENT

// Validity Properties
// The validity property of an input element contains a number of properties related to the validity of data:

// Property	Description
// customError	Set to true, if a custom validity message is set.
// patternMismatch	Set to true, if an element's value does not match its pattern attribute.
// rangeOverflow	Set to true, if an element's value is greater than its max attribute.
// rangeUnderflow	Set to true, if an element's value is less than its min attribute.
// stepMismatch	Set to true, if an element's value is invalid per its step attribute.
// tooLong	Set to true, if an element's value exceeds its maxLength attribute.
// typeMismatch	Set to true, if an element's value is invalid per its type attribute.
// valueMissing	Set to true, if an element (with a required attribute) has no value.
// valid	Set to true, if an element's value is valid.
// Examples
// If the number in an input field is greater than 100 (the input's max attribute), display a message:

// The rangeOverflow Property
// <input id="id1" type="number" max="100">
// <button onclick="myFunction()">OK</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
//   let text = "Value OK";
//   if (document.getElementById("id1").validity.rangeOverflow) {
//     text = "Value too large";
//   }
// }
// </script>
// If the number in an input field is less than 100 (the input's min attribute), display a message:

// The rangeUnderflow Property
// <input id="id1" type="number" min="100">
// <button onclick="myFunction()">OK</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
//   let text = "Value OK";
//   if (document.getElementById("id1").validity.rangeUnderflow) {
//     text = "Value too small";
//   }
// }
// </script>
