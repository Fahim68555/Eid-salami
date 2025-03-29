document.getElementById('section-2').style.display = 'none';
document.getElementById('btn-1').addEventListener('click', function () {
    document.getElementById('section-1').style.display = "block";
    document.getElementById('section-2').style.display = 'none';
})
document.getElementById('btn-2').addEventListener('click', function () {
    document.getElementById('section-2').style.display = 'block';
    document.getElementById('section-1').style.display = 'none';
})
document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin)
    const menAmount = document.getElementById('men-amount').innerText;
    const convertedMenAmount = parseInt(menAmount);
    const accountNumber = document.getElementById('acount-number').value;
    if (convertedPin === 1234) {
        if (accountNumber.length === 11) {
            const sum = convertedAmount + convertedMenAmount;
            document.getElementById('men-amount').innerText = sum;
        }
        else {
            alert('Invalid Mobile Number')
        }
    }
    else {
        alert('Invalid Pin')
    }
})