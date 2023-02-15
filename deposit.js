document.getElementById("deposit_field_btn").addEventListener("click",function(){
    //  input deposit ammount
    const depositAmmount= document.getElementById("deposit_field");
    const previousAmmountString=depositAmmount.value;
    const previousAmmount=  parseFloat(previousAmmountString);

    // deposit ammount shows
    const totalDeposit=document.getElementById("ammount");
    const newDepositString=totalDeposit.innerText;
    const newDeposit=  parseFloat(newDepositString);

    const currentTotaldeposit= previousAmmount + newDeposit;

    totalDeposit.innerText= currentTotaldeposit;

    const balance= document.getElementById("balance_ammount");
    const previousBalanceString= balance.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const currentBalance= previousBalance + previousAmmount;


    balance.innerText=currentBalance;

    depositAmmount.value='';
})