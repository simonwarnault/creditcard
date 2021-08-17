document.addEventListener("DOMContentLoaded",()=>{
    let cardNumber = document.getElementById("cardNumber");
    let cardName = document.getElementById("cardName");
    let expirationDate = document.getElementById("expirationDate");
    let cryptogram = document.getElementById("Crypto");
    let flip = document.getElementById("flip-card-inner");
    let point = document.getElementById('point');
    let fullName = document.getElementById('fullName');
    let date = document.getElementById('date');
    let CVC = document.getElementById('cryptoBack');

cryptogram.onfocus = function () {
    flip.style.transform = "rotateY(180deg)";
}
cryptogram.onblur = function () {
    flip.style.transform = "rotateY(0deg)";
}

function space(){
    if (cardNumber.value.length===4 ||cardNumber.value.length===9 || cardNumber.value.length===14) {
        cardNumber.value += " ";
        point.innerHTML += " ";
    }
}

cardNumber.addEventListener('input',function(){
    if (cardNumber.value===''){
        point.innerHTML = '•••• &nbsp; •••• &nbsp; •••• &nbsp; ••••'
    }
    else { point.innerHTML = cardNumber.value
    }
    space();
})
cardName.addEventListener('input',function(){
    if (cardName.value===''){
        fullName.innerHTML = 'FULL NAME'
    }
    else {
        fullName.innerHTML = cardName.value
    }
})
expirationDate.addEventListener('input',function(){
    if (expirationDate.value===''){
        date.innerHTML = 'MM/YY'
    }
    else {
        date.innerHTML = expirationDate.value
    }
})
cryptogram.addEventListener('input',function(){
    if (cryptogram.value===''){
        CVC.innerHTML = '123'
    }
    else {
        CVC.innerHTML = cryptogram.value
    }
})

})
