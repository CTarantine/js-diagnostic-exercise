
let checkDeposit = document.querySelector("#depositC");

//deposit click listener
checkDeposit.addEventListener("click", (event) => {
    event.preventDefault();
    let checkInput = parseFloat(document.querySelector("#inputC").value);
    let checkBalance = parseFloat(document.querySelector("#balC").innerHTML);
    let newBalance = checkInput + checkBalance;
    //console.log(newBalance);

    //replace text in balance box w/ updated balance
    document.querySelector("#balC").innerHTML = newBalance
})

let checkWithdraw = document.querySelector("#withdrawC")
checkWithdraw.addEventListener("click", (event) => {
    event.preventDefault();
    let checkInput = parseFloat(document.querySelector("#inputC").value);
    let checkBalance = parseFloat(document.querySelector("#balC").innerHTML);
    let newBalance = checkBalance - checkInput;

    document.querySelector("#balC").innerHTML = newBalance
})



//javascript works
document.body.style.backgroundColor = "red";
