// Add your code here
let formData = {
    name: "Steve",
    email: "steve@steve.com"
};

let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
};

function submitData() {

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            let newElem = document.createElement("p")
            newElem.innerHTML = object.id;
            let newBody = document.querySelector("body");
            newBody.appendChild(newElem)
            console.log (object.id);
            console.log(object);
        })
        .catch(function(error) {
            let newError = document.createElement("p")
            newError.innerHTML = error.message;
            let newErrorBody = document.querySelector("body")
            newErrorBody.appendChild(newError)
            alert("Bad things! Ragnarok!");
            console.log(error.message);
        })

};