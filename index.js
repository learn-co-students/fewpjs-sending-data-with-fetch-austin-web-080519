// Add your code here
const body = document.querySelector("body");

function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail,
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        console.log(object)
        let para = document.createElement("p");
        para.innerHTML = object.id;
        body.appendChild(para);
    })
    .catch(function(error) {
        let para = document.createElement("p");
        para.innerHTML = error.message
        body.appendChild(para);
    });
 
}