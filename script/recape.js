document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
   const amount = document.getElementById('amount').value;
   const convertedAmount = parseFloat(amount);
   const addAmount = document.getElementById('men-amount').innerText;
   const convertedAddAmount = parseInt(addAmount);
   if(convertedPin === 1234){
    const sum = convertedAddAmount + convertedAmount;
    document.getElementById('men-amount').innerText=sum;
   }
   else{
    console.log('Invalid Pin ')
   }
})
document.getElementById('section-2').style.display='none';
document.getElementById('section-1').style.display='block';


document.getElementById('btn-1').addEventListener('click',function(){
    document.getElementById('section-2').style.display='none';
    document.getElementById('section-1').style.display='block';
})
document.getElementById('btn-2').addEventListener('click',function(){
    document.getElementById('section-1').style.display='none';
    document.getElementById('section-2').style.display='block';
})

document.getElementById('Cashout').addEventListener('click',function(event){
    event.preventDefault();
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
   const amount2 = document.getElementById('amount2').value;
   const convertedAmount = parseFloat(amount2);
   const addAmount = document.getElementById('men-amount').innerText;
   const accountNumber=document.getElementById("acount-number").value
   const convertedAddAmount = parseInt(addAmount);
   if(convertedPin === 1234){
    if(accountNumber.length === 11 && accountNumber[0]===0 && accountNumber[1]===1){
        const sum = convertedAddAmount - convertedAmount;
        document.getElementById('men-amount').innerText=sum;
    }
    else{
        alert("Invalid Account Number")
    }
    
    
    
   }
   else{
    alert('Invalid Pin ')
   }
})
   
