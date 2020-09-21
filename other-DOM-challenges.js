

// DOM challenge 1: 
// Create a webpage with:
// A heading
// An input field
// A button
// When a user inputs some text into the input field and presses the button,
// the heading text should become what the user typed into the input field.

// submit.addEventListener("click", () =>{ 
//     placeholder.textContent = input.value;
// })

//    OR  ----- >>

//  submit.onClick = () => { 
//    placeholder.textContent = input.value;
//  })

//  #####################################################################################

// DOM challenge 2:
// Key code challenge
// Create a webpage that displays information about a pressed key. The app should function 
// similar to the one in these slides.
// You'll need to display:
// The key that was pressed
// The keycode of that key
// and the numeric keycode of the key (event.which)
// hint: The event listener should be attached to the document e.g. document.addEventListener...
// hint 2: Think about what event you're listening for


/*  ##  Found this on W3 Schools and used what I found to make the below ##  */
// keypress.addEventListener("click", () => { 
//     keypress.textContent = input.value;
// })

// function keyPress(event) {
//     let x = event.key;
//     let y = event.code;
//     let z = event.which;

//     document.getElementById("key1").textContent = `The key event is: ${x}`;
//     document.getElementById("key2").textContent = `The key code is: ${y}`;
//     document.getElementById("key3").textContent = `The key which is: ${z}`;
// }


/*  ##  manually typing out the above  ##  */
// keypress.addEventListener('click', () => {
//     keypress.textContent = input.value;
// })
// function keyPress(event) {
//     let x = event.key;
//     let y = event.code;
//     let z = event.which;
//     document.getElementById("key1").textContent = `The key event is: ${x}`;
//     document.getElementById("key2").textContent = `The key code is: ${y}`;
//     document.getElementById("key3").textContent = `The key which is: ${z}`;
// }

//  #####################################################################################


// DOM challenge 3:
// Create a key pad:
// Create a keypad with the numbers 0-9.
// Users should be able to press each button and have the number show up on a screen above the keypad
// Extension:
// Turn your keypad into a calculator with simple operations (+, -, *, /)
// Create functions for each operation.
// Have the result of the operation replace the sum on the screen when the user presses a calculate button.
// Hint:
// Don't forget about your loops


//  GUESS ------
// target.addEventListener("keypress", () => { 
//     placeholder.textContent = keypress.value;
// })



const padClick = document.addEventListener.click.target;  //  ??????

onclick.addEventListener("click", () => { 
    display.textContent = input.value;
})

alert(padClick);        //  Don' work - but to see if click is registered
alert(click.target);    //  Don' work - but to see if click is registered

























