document.getElementById('login-btn').addEventListener('click',function(event){
   event.preventDefault();
   const number = document.getElementById('acount-number').value;
   const pin = document.getElementById('pin').value;
   const convertedPin = parseInt(pin);
   if( number.length === 11  ){
const ANumber = [...number];
if(ANumber[0]==="0" && ANumber[1]==="1"){
  if(convertedPin === 1234){
    window.location.href='./main.html'
  }
  else{
    alert('Invalid Pin')
  }
}
else{
  alert("Please start with 01")
}


  }
  else{
    alert('Invalid Mobile Number (Please give 11 digit account number)')
  }
})



