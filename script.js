const name = document.getElementById("name");
const pass = document.getElementById("password");
const form = document.getElementById("validTest");
const errorElement = document.getElementById("error");


form.addEventListener("submit", (e) => {
    let messages = [];
    if (name.value === "" || name.value == null) {
        messages.push("A name is required")
    }
    
    if(messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }
   
})