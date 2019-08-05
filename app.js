//deposit button for checking
let checkDeposit = document.querySelector("#depositC");

//deposit click listener
checkDeposit.addEventListener("click", (event) => {
    event.preventDefault();
    //grabs numeric value of typed input
    let checkInput = parseFloat(document.querySelector("#inputC").value);
    //grabs numeric value of displayed balance
    let checkBalance = parseFloat(document.querySelector("#balC").innerHTML);
    let newBalance = checkInput + checkBalance;
    //console.log(newBalance);

    //replace text in balance box w/ updated balance
    document.querySelector("#balC").innerHTML = newBalance
})
//withdraw button for checking
let checkWithdraw = document.querySelector("#withdrawC")

checkWithdraw.addEventListener("click", (event) => {
    event.preventDefault();
    let checkInput = parseFloat(document.querySelector("#inputC").value);
    let checkBalance = parseFloat(document.querySelector("#balC").innerHTML);
    let newBalance = checkBalance - checkInput;

    if (newBalance === 0){
        //display zero balance
        document.querySelector("#balC").innerHTML = 0;
        //change display
        document.querySelector(".account").className = "zero";
    }

    if (newBalance > 0){
        document.querySelector("#balC").innerHTML = newBalance
    }
})



//javascript works
document.body.style.backgroundColor = "red";
