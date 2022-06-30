let onclickEvent = ()=>{
    let baseprice=1200;
    
    let amountInput = document.querySelector("input[name='amount-input']");
    let price = parseFloat(amountInput.value*baseprice);
 
    showProductPrice(price, amountInput);
 

}

function showProductPrice(price, amountInput)
{
    console.log(arguments);
    let showAmount=document.querySelector("span#to-pay");
    if ( typeof(parseInt(amountInput.value))=='number' && (parseInt(amountInput.value) > 0) && (parseInt(amountInput.value)<=10) )
    {
        document.querySelector("div#amountError").setAttribute('style',"display:none");
    }else{
        document.querySelector("div#amountError").innerHTML="Érvénytelen mennyiség:"+parseInt(amountInput.value);
        document.querySelector("div#amountError").setAttribute('style',"display:static");
        return;
    }
    console.log(price);
    showAmount.innerHTML=price;
}

