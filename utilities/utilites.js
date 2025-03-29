function getInputValueById(id){
const amount = document.getElementById(id).value;
const convertedAmount = parseFloat(amount)
return(convertedAmount);

}

function getInputValueById2(id){
const value = document.getElementById(id).innerText;
const convertedValue = parseInt(value);
return(convertedValue);
}