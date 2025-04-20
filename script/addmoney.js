document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amount = getInputValueByID('amount');
    const pin = getInputValueByID('pin');
    const account = document.getElementById('account-number').value;
    const mainBalance = getInnerTextByID('main-balance');
    console.log(mainBalance);
    
    

    if(account.length === 11){
        if(pin === 1234){
            const sum = mainBalance + amount;
            // document.getElementById('main-balance').innerText = sum;
            
            getInnerTextByIDandValue('main-balance', sum);
            
        }
        else{
            console.log('Pin tik nai');
            
        }
    }
    else{
        console.log('Account number tik nai');
        
    }

})