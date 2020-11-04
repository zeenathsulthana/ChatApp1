const userId = document.getElementById("userId");
const password = document.getElementById("password");
const login = document.getElementById("log-me-in");
login.onclick = function() {
  console.log(userId.value);
  console.log(password.value);

  fetch("http://localhost:5000/users/login", {
    method: "POST",

    body: JSON.stringify({
      userId: userId.value,
      password: password.value
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
