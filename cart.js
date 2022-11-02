// class cart{
//   constructor(UserName,Product)
//   {
//     this.username=UserName;
//     this.product=Product;
//   }
// }
class Product{
  constructor(Product_name,Product_no)
  {
    this.product_name=Product_name;
    this.product_no=Product_no;
  }
}


// -------------------------------------------CREATING CARDS FOR CART PAGE----------------------------------------------------------//
let userr_cart=JSON.parse(localStorage.getItem(localStorage.current_user_name));



let card_section=document.createElement("div");
card_section.setAttribute("id","card_section");
createCard(userr_cart);

function createCard(users)
{
  

    let not_cart_items=0;
    for(let x=0;x<users.length;x++)
{
    
    //users length is not zero
    Name=users[x].product_name;
    Quantity=users[x].product_no;
    Price=users[x].rate;
    Image=users[x].image;
    // let {Name,Quantity,Price,Image}=users[x];


    if(`${Quantity}`<=0)
    {
      not_cart_items++;
      continue;
    }



    alert(`${Name}`);alert(Quantity);
    // console.log(users[x]);
    var cardNo = document.createElement("div");
    let str=`card${x+1}`;
    // let p=x+1;
    // let str="card"+p;
    cardNo.setAttribute("id",str);
    let template=document.createElement("div");
    template.setAttribute("id","template");
    


    let image=document.createElement("div");
    image.setAttribute("id","image");
    const imge = document.createElement("img");
    imge.src = `${Image}`;
    imge.classList.add("img-margin");
    
    image.appendChild(imge);
    
    template.appendChild(image);

    let name=document.createElement("div");
    name.setAttribute("id","name");
    name.innerHTML = `${Name}`;
    template.appendChild(name);

    let price=document.createElement("div");
    price.setAttribute("id","price");
    price.innerHTML = `${Price}`;
    template.appendChild(price);


    

    let button=document.createElement("div");
    button.setAttribute("id","button");
    const bttn=document.createElement("button");
    bttn.setAttribute("id","cart_button");
    bttn.innerHTML = "-";
    bttn.myParam=`${Name}`;
    bttn.myno=1;
    bttn.cost=`${price}`;
    bttn.addEventListener("click",remove_from_cart,false);
    bttn.onClick="history.go(0);"
    button.appendChild(bttn);
    template.appendChild(button);


    let quantity=document.createElement("div");
    quantity.setAttribute("id","quant");
    quantity.innerHTML=`${Quantity}`;
    quantity.style.margin="0 auto";
    template.appendChild(quantity);

    let button1=document.createElement("div");
    button1.setAttribute("id","button");
    const _bttn_for_increasing_cart_0bject=document.createElement("button");
    _bttn_for_increasing_cart_0bject.setAttribute("id","cart_button");
    _bttn_for_increasing_cart_0bject.innerHTML = "+";
    _bttn_for_increasing_cart_0bject.myParam=`${Name}`;
    _bttn_for_increasing_cart_0bject.myno=1;
    _bttn_for_increasing_cart_0bject.cost=`${price}`;
    _bttn_for_increasing_cart_0bject.addEventListener("click",add_to_cart,false);
    _bttn_for_increasing_cart_0bject.setAttribute("onClick","window.location.reload(true)");
    // onClick="window.location.reload(true)
    // _bttn_for_increasing_cart_0bject.onClick="history.go(0);"
    button1.appendChild(_bttn_for_increasing_cart_0bject);
    template.appendChild(button1);



    cardNo.appendChild(template);
    card_section.appendChild(cardNo);
    document.body.appendChild(card_section);
}
  function myMessage(){
    if(users.length==not_cart_items)
      {
        alert("Your bag looks empty.Shop now! Cause your money don't jiggle jiggle, it folds");

        let empty_card_section=document.createElement("div");
        empty_card_section.setAttribute("id","empty_card");
        let text="Your bag looks empty.Shop now! Cause your money don't jiggle jiggle, it folds";
        empty_card_section.innerHTML=text;
        // empty_card_section.innerHTML="Your bag looks empty.Shop now! Cause your money don't jiggle jiggle, it folds";
        card_section.append(empty_card_section);




      }

    }
    setTimeout(myMessage, 1000);
}







  

// // --------------------------removing from cart--------------------------------------------------------------------//
function remove_from_cart(evt){
  let new_item_name=evt.currentTarget.myParam;
  let new_item_no=evt.currentTarget.myno;
  let userr_cart=JSON.parse(localStorage.getItem(localStorage.current_user_name));
  alert("userr_cart"+ userr_cart);
  let usercart=new Array();
  let delete_from_cart=false;
  if(userr_cart!=null)
  {
      alert("userr_cart is not null");
      for(let d=0;d<userr_cart.length;d++)
      {
          alert("userr__cart[d] product_name is"+userr_cart[d].product_name);
          alert("userr__cart[d] product_no is"+userr_cart[d].product_no);
          if(userr_cart[d].product_name==new_item_name)
          {userr_cart[d].product_no-=1;}
          if(userr_cart[d].product_no<=0)
          {
            delete_from_cart=true;
          }
          usercart.push(userr_cart[d]);

      }
  }
  if(delete_from_cart==true)
  alert("cur is getting popped from usercart");
  localStorage.setItem(localStorage.current_user_name,JSON.stringify(usercart));
  alert("localStorage mein setItem kar rahe hain with current_user_name");
  window.location.reload(true);

  
}

function add_to_cart(evt){
  // alert(evt.currentTarget.innerHTML);
  alert(evt.currentTarget.myParam);
  let new_item_name=evt.currentTarget.myParam;
  let new_item_no=evt.currentTarget.myno;
  let new_tem_cost=evt.currentTarget.cost;
  let new_item_image=evt.currentTarget.imagg;
  // current_user_name_parsed=JSON.parse(localStorage.current_user_name);
  if(localStorage.current_user_name==undefined || localStorage.current_user_name=="" )
  {

      var forced_login=alert("Login first");
      window.location.href="./Login.html";
  }
  else
  {
      let userr_cart=JSON.parse(localStorage.getItem(localStorage.current_user_name));
      alert("userr_cart"+ userr_cart);
      let usercart=new Array();
      let already_in_cart=false;
      if(userr_cart!=null)
      {
          alert("userr_cart is not null");
          for(let d=0;d<userr_cart.length;d++)
          {
              alert("userr__cart[d] product_name is"+userr_cart[d].product_name);
              alert("userr__cart[d] product_no is"+userr_cart[d].product_no);
              if(userr_cart[d].product_name==new_item_name)
              {userr_cart[d].product_no+=1;already_in_cart=true;}
              
              usercart.push(userr_cart[d]);

          }
          
      }
      let cur=new Product(new_item_name,new_item_no,new_tem_cost,new_item_image);
      alert("new item to be added is"+cur);
      if(!already_in_cart)
      usercart.push(cur);
      alert("cur is getting pushed to usercart");
      localStorage.setItem(localStorage.current_user_name,JSON.stringify(usercart));
      alert("localStorage mein setItem kar rahe hain with current_user_name");


  }
}