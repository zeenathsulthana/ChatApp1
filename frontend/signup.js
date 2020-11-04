const userId = document.getElementById("userId");
const password = document.getElementById("password");
const email = document.getElementById("email");
const phoneNo = document.getElementById("phoneNo");
const SignUp = document.getElementById("create-me");

SignUp.onclick = function() {
  console.log(userId.value);
  console.log(password.value);
  console.log(email.value);
  console.log(phoneNo.value);

  fetch("http://localhost:5000/users/newuser", {
    method: "POST",

    body: JSON.stringify({
      userId: userId.value,
      email: email.value,
      password: password.value,
      phoneNo: phoneNo.value
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
