const checkDeposit = document.querySelector("#depositC")
const checkInput = document.querySelector("#inputC")
const checkBalance = document.querySelector("#balC")


//deposit click listener
checkDeposit.addEventListener("click", (event) => {
event.preventDefault();
checkBalance.innerHTML = `$${checkInput.value}`;
//console.log(checkInput.value)
    //console.log("Hello from app.js")
})

//javascript works
document.body.style.backgroundColor = "red";
