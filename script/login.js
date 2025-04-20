document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    // Account number and password validation

    const accountNumber = document.getElementById('Account-number').value;
    
    const pinNumber = document.getElementById('pin').value;
    const convertedPinNumber = parseInt(pinNumber);

    if(accountNumber.length === 11){
        if(convertedPinNumber === 1234){
            window.location.href = 'main.html';
            console.log('okay shob tik ase');
            
        }
        else{
            alert('tomar pin number tik nai');
        }
        
    }
    else{
        alert('tmr account tik nai')
    }
    
    
})