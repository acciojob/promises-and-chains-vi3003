//your JS code here. If required.
//your JS code here. If required.
let Name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  //   if (Name === "" || isNaN(age)) {
  //     alert("inputs cannot be empty");
  //     return;
  //   }

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${Name}.You can vote. `);
      } else {
        reject(`ohh sorry ${Name}.You aren't old enough`);
      }
    }, 4000);
  });

  promise
    .then((message) => {
      alert(message);
    })
    .catch((message) => {
      alert(message);
    });
});