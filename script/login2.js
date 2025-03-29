document.getElementById('login-btn').addEventListener('click',function(event){
   event.preventDefault();
   const number = document.getElementById('acount-number').value;
   const pin = document.getElementById('pin').value;
   const convertedPin = parseInt(pin);
   if( number.length === 11 ){
if(convertedPin === 1234){
    window.location.href='./main.html'
}
else{
    alert('Invalid Pin')
}

  }
  else{
    alert('Invalid Mobile Number')
  }
})