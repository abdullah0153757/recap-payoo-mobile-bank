document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amount = getInputValueByID('amount');
    const pin = getInputValueByID('pin');
    const account = document.getElementById('account-number').value;
    const mainBalance = getInnerTextByID('main-balance');
    console.log(mainBalance);

    const selectedBank = document.getElementById('allbank').value;
    
    


if(amount < 0){
    alert('Bhai eytah kuno kotha positive number dite hobe')
    return;

}



    
    

    if(account.length === 11){
        if(pin === 1234){
            const sum = mainBalance + amount;
            // document.getElementById('main-balance').innerText = sum;
            
            getInnerTextByIDandValue('main-balance', sum)
            const container = document.getElementById('transection-container');

            const div = document.createElement('div');


            div.classList.add('bg-red-400')

            div.innerHTML = `
            <h1 class= 'text-yellow-300' >ADDed Money from ${selectedBank}</h1>
            <h3>${amount}</h3>
            <p>account number: ${account}</p>

            
            `
            container.appendChild(div)
        

            
        }
        else{
            console.log('Pin tik nai');
            
        }
    }
    else{
        console.log('Account number tik nai');
        
    }

})