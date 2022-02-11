
// input_function
function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // ----clear---
    depositInput.value = ' ';
    return depositAmount;
}

// button
document.getElementById('deposit-button').addEventListener('click',
    function () {
        // Input_Connnet(input)
        // const depositInput = document.getElementById('deposit-input');
        // const depositAmountText = depositInput.value;
        // const depositAmount = parseFloat(depositAmountText);
        const depositAmount = getInputValue();

        // Current_Site (text)
        const depositTotal = document.getElementById('deposit-total')
        const depositTotalText = depositTotal.innerText;
        const previousdepositTotal = parseFloat(depositTotalText);

        // connecton
        depositTotal.innerText = previousdepositTotal + depositAmount;


        // Total_connection(page && Text)
        const depositeBalance = document.getElementById("balance-total");
        const depositeBalanceText = depositeBalance.innerText;
        const depositTotalBalance = parseFloat(depositeBalanceText);

        depositeBalance.innerText = depositTotalBalance + depositAmount;

    })

//------------------------------------------ withdrow-------------------------------------------------------------- 

document.getElementById('withdraw-button').addEventListener('click',
    function () {
        // input
        const withdrowInput = document.getElementById('withdraw-input')
        const withdrowInputText = withdrowInput.value;
        const withdrawRecent = parseFloat(withdrowInputText);

        // Text
        const withdrowPrevious = document.getElementById('withdraw-total');
        const withdrowPreviousText = withdrowPrevious.innerText;
        const withdrawAmount = parseFloat(withdrowPreviousText);

        // connection
        withdrowPrevious.innerText = withdrawRecent + withdrawAmount;
        withdrowInput.value = ' ';


        // total_balance && updateTotal-------
        const balanceTotal = document.getElementById('balance-total')
        const balanceTotalText = balanceTotal.innerText;
        const balanceTotalAmount = parseFloat(balanceTotalText);

        balanceTotal.innerText = balanceTotalAmount - withdrawRecent;
    })

