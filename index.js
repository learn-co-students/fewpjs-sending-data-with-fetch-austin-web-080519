// Add your code here
function submitData(name, email) {
  let dataobj = {};
  dataobj.name = name;
  dataobj.email = email;
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(dataobj)
  }

  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    let header = document.createElement('h1');
    document.body.appendChild(header);
    header.append(`${object.id}`);

    console.log(object.id);
    console.log(header);
  })
  .catch(function(error) {
    alert("o no");
    document.body.append(error.message);
  });
};
