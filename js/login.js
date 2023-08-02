let username = "";
let password = "";

const login = () => {
  if (!username || !password) {
    alert("Please enter username and password");
  } else {
    cdApi.setCustomerSessionId("jgh875wdwlv0skue70");
    window.location.replace("./overview.html");
  }
};

window.onload = function () {
  cdApi.changeContext("login");
  document.getElementById("username").addEventListener("input", (e) => {
    username = e.target.value;
  });

  document.getElementById("password").addEventListener("input", (e) => {
    password = e.target.value;
  });

  document.getElementById("login-btn").addEventListener("click", login);
};
