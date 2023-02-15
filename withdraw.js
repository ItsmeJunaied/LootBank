document.getElementById("Widthdraw_field_btn").addEventListener("click",function(){
    const withdrwMoney= document.getElementById("Widthdraw_field");
    const inputwithdrwMoneyString=withdrwMoney.value;
    const inputwithdrwMoney=parseFloat(inputwithdrwMoneyString);

    const newWithdrwMoney= document.getElementById("withdraw_ammount");
    const getnewWithdrwMoneyString= newWithdrwMoney.innerText;
    const getnewWithdrwMoney=parseFloat(getnewWithdrwMoneyString);

    const totBalance= document.getElementById("balance_ammount");
    const gettotBalanceString= totBalance.innerText;
    const gettotBalance= parseFloat(gettotBalanceString);

    withdrwMoney.value='';
    if (inputwithdrwMoney>gettotBalance){
        alert("Tomar eto Taka nai Vai !!!")
        return;
    }

    const currentWithdrwMoney= inputwithdrwMoney + getnewWithdrwMoney;
    newWithdrwMoney.innerText=currentWithdrwMoney;

    const newBalance= gettotBalance - inputwithdrwMoney;

    totBalance.innerText=newBalance;


})