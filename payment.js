class Kard{
    
    constructor(No,Month,Year,CVV,Name,Type)
    {
        this.no=No;
        this.month=Month;
        this.year=Year;
        this.cvv=CVV;
        this.name=Name;
        this.type=Type;
        
    }
};
var cards=new Array();
var card1=new Kard(1234123412341234,10,2027,1234,"Peeyush","Rupay");
cards.push(card1);
localStorage.setItem("cards",JSON.stringify(cards));

var $input_cvv=$('.cvv-input');
$input_cvv.on('keyup',function () {
    var cvv_no=(($input_cvv).val());
    var $in = $('.card-number-input');
    var number=($in).val();
    alert("cvv no is:");
    alert(cvv_no);
    alert("card no is");
    alert(number);
    var localStorage_cards=JSON.parse(localStorage.getItem("cards"));


    $.each(localStorage_cards, function (index, value) {
        if(cvv_no==value.cvv && number==value.no)
        {
            alert("chal pada");
            $('.month-input').val(value.month);
            alert($('.month-input').val());
            $('.year-input').val(value.year);
            alert($('.year-input').val());
            $('.card-holder-input').val(value.name);
            alert($('.card-holder-input').val());
        }
    })

    // for(let i=0;i<localStorage_cards.length;i++)
    // {
    //     alert("loop chal raha hai");
    //     alert("localStorage_cards[i].CVV is");
    //     alert(localStorage_cards[i].CVV);
    //     alert("localStorage_cards[i].no is");
    //     alert(localStorage_cards[i].no);
    //     if(cvv_no==localStorage_cards[i].cvv && number==localStorage_cards[i].no)
    //     {
    //         alert("chal pada");
    //         $('.month-input').val()=localStorage_cards[i].month;
    //         alert()


    //     }
    // }
})




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