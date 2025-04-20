document.getElementById('cashout').style.display = 'none';

document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('addmoney').style.display = 'block';
    document.getElementById('cashout').style.display = 'none';
})


document.getElementById('cashout-box').addEventListener('click', function(){
    document.getElementById('addmoney').style.display = 'none';
    document.getElementById('cashout').style.display = 'block';
})

document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const acountNumber = document.getElementById('account-number').value;
    const pinNumber = document.getElementById('pin').value;
    conveertedPinNumber = parseInt(pinNumber);

    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);

    const mainBalance = document.getElementById('main-balance').innerText;
    const converteMainBalance = parseFloat(mainBalance);

    if(acountNumber.length === 11){
        if(conveertedPinNumber === 1234){
            const sum = converteMainBalance + convertedAmount;
            document.getElementById('main-balance').innerText = sum;
            
            
        }
        else{
            alert('tmr account tik nai')
        }

    }
    
    
})
