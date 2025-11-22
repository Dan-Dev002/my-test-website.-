let balance = 10000;

function updateBalance() {
  document.getElementById("balance").innerText = balance;
  localStorage.setItem("balance", balance);
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    localStorage.setItem("bankUser", username);
    if (!localStorage.getItem("balance")) {
      localStorage.setItem("balance", balance);
    } else {
      balance = parseInt(localStorage.getItem("balance"));
    }
    showDashboard();
  } else {
    alert("Please enter both username and password!");
  }
}

function showDashboard() {
  const savedUser = localStorage.getItem("bankUser");
  balance = parseInt(localStorage.getItem("balance")) || 10000;
  if (savedUser) {
    document.getElementById("displayName").innerText = savedUser;
    document.getElementById("balance").innerText = balance;
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
  }
}

function logout() {
  localStorage.removeItem("bankUser");
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
}

// Services
function payBills() {
  if (balance >= 2000) {
    balance -= 2000;
    updateBalance();
    alert("You have successfully paid your bills (₦2000).");
  } else {
    alert("Insufficient balance!");
  }
}

function buyAirtime() {
  if (balance >= 500) {
    balance -= 500;
    updateBalance();
    alert("You have successfully bought airtime (₦500).");
  } else {
    alert("Insufficient balance!");
  }
}

function transfer() {
  let amount = prompt("Enter amount to transfer:");
  amount = parseInt(amount);
  if (amount && amount > 0) {
    if (balance >= amount) {
      balance -= amount;
      updateBalance();
      alert("You transferred ₦" + amount);
    } else {
      alert("Insufficient balance!");
    }
  }
}

function deposit() {
  let amount = prompt("Enter amount to deposit:");
  amount = parseInt(amount);
  if (amount && amount > 0) {
    balance += amount;
    updateBalance();
    alert("You deposited ₦" + amount);
  }
}

// Auto-login if user already exists
window.onload = showDashboard;

// service worker registeration
if ('serviceworker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(function(reg) {
      console.log('registerd successfully', reg)

    })
    .catch(function(err) {
      console.log('serviceworker faild', err)
    });
}
