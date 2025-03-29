document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount = getInputValueById("amount");
   const pin = getInputValueById("pin");
   const account = document.getElementById('acount-number').value;
    const convertedAmount = getInputValueById2("men-amount");
    console.log(convertedAmount)
   if(pin === 1234){
if(account.length === 11){
    const sum = amount + convertedAmount;
document.getElementById("men-amount").innerText =sum;
}
else{
    alert('Invalid Mobile Number')
}
   }
   else{
    alert('Invalid Pin')
   }
})

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);  
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256);  
    return `rgb(${r}, ${g}, ${b})`;  
}
function changeRGBColor() {
document.body.style.backgroundColor = getRandomRGB();
}

document.getElementById('btn-1').addEventListener('click', function(){
    handleToggle('section-1','block')
    handleToggle('section-2','none')
    handleToggle('section-3','none');
    // document.getElementById('section-1').style.display='block';
    // document.getElementById('section-2').style.display='none';
})

document.getElementById('btn-2').addEventListener('click',function(){
    handleToggle('section-1','none');
    handleToggle('section-3','none');
    handleToggle('section-2','block')
})

function handleToggle(id,status){
    document.getElementById(id).style.display = status;

}

document.getElementById('Transactions-box').addEventListener('click',function(){
    handleToggle('section-3','block');
    handleToggle('section-2','none');
    handleToggle('section-1','none');
})