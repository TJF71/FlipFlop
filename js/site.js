// get the users message to reverse
function getValues(){
    // get the text input from the page
    let message = document.getElementById('userInput').value;

    // validate the input: make sure its not empty
    if(message.length == 0) {
        Swal.fire({
            icon: 'error',
            backdrop: false,
            text: 'Please enter a string to reverse'
        });
    } else {
     
    // past the input to resverseMessage and assign it return value to a variable
    let revMsg = reverseMessage(message);
    // give the reversed message to displayMessage
    displayMessage(revMsg); 
}
}

// reverse the string
function reverseMessage(input){  // example input = 'hello'
    
    // LONGER METHOD

    // let inputArray = input.split('');  // turns string to array ie. = ['h', 'e', 'l', 'l', 'o' ]
    // let outputArray = [];

    // for (let i = inputArray.length - 1; i >= 0; i -- ){
    //     let letter = inputArray[i];
    //     outputArray.push(letter);
    // }

    // let output = outputArray.join(''); // [o, l, l, e, h ] = 'ollleh'
    // return output; 

    //  OR BELOW

    let output = '';

        for (let i = input.length - 1; i >= 0; i -- ){
            output += input [i];
    }

    return output;

}

// display the reverse message
function displayMessage(message){

    document.getElementById('msg').textContent = `Your message reversed is: ${message}`; 

    document.getElementById('alert').classList.remove('invisible');

}