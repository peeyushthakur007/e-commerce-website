//------------------------------------------SHOWING THE CARD TYPE ONCE THE USER ENTERS CARD NO TYPING---------------------------


var typingTimer;                //timer identifier
var doneTypingInterval = 1000;  //time in ms, 5 seconds for example
var $input = $('.card-number-input');

alert(($input).val());
//on keyup, start the countdown
$input.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

//on keydown, clear the countdown 
$input.on('keydown', function () {
  clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping () {
  var photo=document.querySelector('.card-type');
  var $in = $('.card-number-input');
  var number=($in).val();
  if(number[0]=='5')
  photo.setAttribute("src","./Mastercard-logo.jpg");
  else if(number[0]=='3')
  photo.setAttribute("src","./RuPay-Logo.jpg");
//   alert("card badlo");
}


document.querySelector('.card-number-input').oninput= () =>{
    document.querySelector('.card-number-box').innerText=document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput=()=>{
    document.querySelector('.card-holder-name').innerText=document.querySelector('.card-holder-input').value;
}
document.querySelector('.month-input').oninput=()=>{
    document.querySelector('.exp-month').innerText=document.querySelector('.month-input').value;
}
document.querySelector('.year-input').oninput=()=>{
    document.querySelector('.exp-year').innerText=document.querySelector('.year-input').value;
}
document.querySelector('.cvv-input').onmouseenter=()=>{

    document.querySelector('.front').style.transform='perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform='perspective(1000px) rotateY(0deg)';
}
document.querySelector('.cvv-input').onmouseleave=()=>{

    document.querySelector('.front').style.transform='perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform='perspective(1000px) rotateY(180deg)';
}
document.querySelector('.cvv-input').oninput=()=>{

    document.querySelector('.cvv-box').innerText=document.querySelector('.cvv-input').value;
    
}