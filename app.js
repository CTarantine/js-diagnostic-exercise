const checkDeposit = document.querySelector("#depositC")
const checkInput = document.querySelector("#inputC")
//deposit click listener
checkDeposit.addEventListener("click", (event) => {
event.preventDefault();
console.log(checkInput.value)
    //console.log("Hello from app.js")
})

//javascript works
document.body.style.backgroundColor = "red";
