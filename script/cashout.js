document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;

    const amount = getInputValueByID('cashout-amount');
    const pinNumber = getInputValueByID('cashout-pin');
    const mainBalance = getInnerTextByID('main-balance');
    

    if(amount > mainBalance){
        alert('sufficient balance');
        return;
    }








if(accountNumber.length === 11){
    if(pinNumber === 1234){
        const sum = mainBalance - amount;
        getInnerTextByIDandValue('main-balance', sum)


        const container = document.getElementById('transection-container');

        const p = document.createElement('p');
        p.innerText = `
        cashout ${amount} from this ${accountNumber} account
        `
        container.appendChild(p)


    }
    else{
        alert('Pin not valid')
    }

}
else{
    alert('Account number not valid')
}
})