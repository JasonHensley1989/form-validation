const name = document.getElementById("name");
const pass = document.getElementById("password");
const form = document.getElementById("validTest");
const errorElement = document.getElementById("error");


form.addEventListener("submit", (e) => {
    let messages = [];
    if (name.value === "" || name.value == null) {
        messages.push("A name is required")
    }
    if (pass.value.length <= 3) {
        messages.push("Password  must contain at least 4 characters")
    }

    // This example would be where REGEX would be needed

    if (pass.value !== '!') {
        messages.push("Your password must contain at least one exclamation mark")
    }
    
    if(messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }
   
})