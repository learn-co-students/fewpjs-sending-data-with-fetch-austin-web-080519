// Add your code here
const body = document.querySelector("body");

function submitData(name, email) {
    
    let formData = {
        name: name,
        email: email
    };
       
    console.log("formData = ", formData)
    
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    console.log("configObj = ", configObj)


    //MAKE SURE TO RETURN FETCH!!!!!!!!!!!!!!!!!!!!!!!!!!
    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            console.log("response return= ", response)
            return response.json();
        })
        .then(function(object) {
            console.log("fetch object= ", object);
            const ptag = document.createElement("p"); 
            ptag.innerHTML = object.id;
            body.appendChild(ptag);
        })
        .catch(function(error) {
            body.append(error.message);
            console.log(error.message);
        });

}