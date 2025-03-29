document.getElementById('add-money').addEventListener('click',function(event){
event.preventDefault();
const amount= document.getElementById('amount').value;
const convertedAmount= parseFloat(amount);
const pin = document.getElementById('pin').value;
const convertedPin = parseInt(pin);
const addAmount = document.getElementById('men-amount').innerText;
const convertedAmount2=parseFloat(addAmount)
if(convertedPin === 1234){
const sum = convertedAmount2+convertedAmount;
document.getElementById('men-amount').innerText=sum;


}
else{
    alert('Invalid Pin Number')
}
})