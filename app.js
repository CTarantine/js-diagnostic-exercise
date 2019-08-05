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


let savingDeposit = document.querySelector("#depositS");

//deposit click listener
savingDeposit.addEventListener("click", (event) => {
    event.preventDefault();
    //grabs numeric value of typed input
    let savingInput = parseFloat(document.querySelector("#inputS").value);
    //grabs numeric value of displayed balance
    let savingBalance = parseFloat(document.querySelector("#balS").innerHTML);
    let newBalance = savingInput + savingBalance;
    //console.log(newBalance);

    //replace text in balance box w/ updated balance
    document.querySelector("#balS").innerHTML = newBalance
})




//withdraw button for checking
let checkWithdraw = document.querySelector("#withdrawC")

checkWithdraw.addEventListener("click", (event) => {
    event.preventDefault();
    let checkInput = parseFloat(document.querySelector("#inputC").value);
    let checkBalance = parseFloat(document.querySelector("#balC").innerHTML);
    let newBalance = checkBalance - checkInput;

    if (newBalance > 0){
        document.querySelector("#balC").innerHTML = newBalance;
        // document.querySelector(".account").style.backgroundColor = "#6C9A74";
    }

    if (newBalance === 0){
        //display zero balance
        document.querySelector("#balC").innerHTML = 0;
        //change display
        document.querySelector(".account").className = "zero";
    }
})

let savingWithdraw = document.querySelector("#withdrawS")

savingWithdraw.addEventListener("click", (event) => {
    event.preventDefault();
    let savingInput = parseFloat(document.querySelector("#inputS").value);
    let savingBalance = parseFloat(document.querySelector("#balS").innerHTML);
    let newBalance = savingBalance - savingInput;

    if (newBalance > 0){
        document.querySelector("#balS").innerHTML = newBalance;
        // document.querySelector(".account").style.backgroundColor = "#6C9A74";
    }

    if (newBalance === 0){
        //display zero balance
        document.querySelector("#balS").innerHTML = 0;
        //change display
        document.querySelector(".account").className = "zero";
    }
})


//javascript works
document.body.style.backgroundColor = "red";
