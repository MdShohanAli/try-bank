// deposit 
let depositValue = document.getElementById("deposit-input");
let depositOutput = document.getElementById("deposit-total");

// withdraw
let withdrawValue = document.getElementById('withdraw-input');
let withdrawOutput = document.getElementById('withdraw-total');

// balance update
let balanceOutput = document.getElementById('balance-total');

function addMoney(curreentAmount, newAmount) {
    return Number(curreentAmount) + Number(newAmount);
}

function deposit() {

    const totalBalance = addMoney(depositOutput.innerText, depositValue.value);
    depositOutput.innerText = totalBalance;

    balanceOutput.innerText = totalBalance;

    depositValue.value = '';


}

function getMoney(curreentAmount, newAmount) {
    return Number(curreentAmount) - Number(newAmount);
}
function withdraw() {
    const totalWithdraw = addMoney(withdrawOutput.innerText, withdrawValue.value);

    withdrawOutput.innerText = totalWithdraw;

    // withdrawOutput.innerText = Number(withdrawValue.value) + parseFloat(withdrawOutput.innerText);

    const totalBalance = getMoney(balanceOutput.innerText, withdrawValue.value);

    balanceOutput.innerText = totalBalance;

    withdrawValue.value = '';



}
