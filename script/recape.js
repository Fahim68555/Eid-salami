document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    const addAmount = document.getElementById('men-amount').innerText;
    const accountNumber =document.getElementById("account-number").value;
    const convertedAddAmount = parseInt(addAmount);
    if (convertedPin === 1234) {
        
        if(accountNumber.length === 11){
            const AAccountNumber = [...accountNumber]
            console.log(AAccountNumber)
            if(AAccountNumber[0] === '0' && AAccountNumber[1] === '1' ){
                const sum = convertedAddAmount + convertedAmount;
                document.getElementById('men-amount').innerText = sum;
            }
            else{
                alert("Invalid AccountNumber (Please start with 01)")
            }
           
        }
       
        else{
            alert("Please give 11 digit account number")
        }
       
    }
    else {
        alert('Invalid Pin ')
    }
})
document.getElementById('section-2').style.display = 'none';
document.getElementById('section-1').style.display = 'block';


document.getElementById('btn-1').addEventListener('click', function () {
    document.getElementById('section-2').style.display = 'none';
    document.getElementById('section-1').style.display = 'block';
})
document.getElementById('btn-2').addEventListener('click', function () {
    document.getElementById('section-1').style.display = 'none';
    document.getElementById('section-2').style.display = 'block';
})

document.getElementById('Cashout').addEventListener('click', function (event) {
    event.preventDefault();
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    const amount2 = document.getElementById('amount2').value;
    const convertedAmount = parseFloat(amount2);
    const addAmount = document.getElementById('men-amount').innerText;
    const accountNumber2 =document.getElementById("account-number2").value;
    const convertedAddAmount = parseInt(addAmount);



    if (convertedPin === 1234) {
    if(accountNumber2.length === 11){
            const AAccountNumber2 = [...accountNumber2]
            console.log(AAccountNumber2)
            if(AAccountNumber2[0] === '0' && AAccountNumber2[1] === '1' ){
                const sum3 = convertedAddAmount - convertedAmount;
                    document.getElementById('men-amount').innerText = sum3
                
                }
            else{
                alert("Invalid AccountNumber (Please start with 01)")
            }
          
           
        }
        else{
            alert("Please give 11 digit account number")
        }
}

    else {
        alert('Invalid Pin ')
    }



})

