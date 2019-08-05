
let checkDeposit = document.querySelector("#depositC");

//deposit click listener
checkDeposit.addEventListener("click", (event) => {
    event.preventDefault();
    let checkInput = parseInt(document.querySelector("#inputC").value);
    let checkBalance = parseInt(document.querySelector("#balC").innerHTML);
    let newBalance = checkInput + checkBalance;
    //console.log(newBalance);

    //replace text in balance box w/ updated balance
    document.querySelector("#balC").innerHTML = newBalance
})



//javascript works
document.body.style.backgroundColor = "red";
