let ar=new Array();

class Phone{
    constructor(no,name,price,description,quantity,model,image)
    {
        this.Sno=no;
        this.Name=name;
        this.Price=price;
        this.Description=description;
        this.Quantity=quantity;
        this.Model=model;
        this.Image=image;
        ar.push(this);
        // localStorage.setI///item()
        // this.create(x);
    }
    
}



                                                        // Putting in localStorage
let obj1=new Phone(1,"Galaxy S22 Ultra","₹100009","",1,"S 22 Ultra","./galaxy s22 yltra new.jpg");
let obj2=new Phone(2,"Honorx8","₹16000","",2,"Honorx8","./HONORx8.jpg");
let obj3=new Phone(3,"OPPO-Reno-8-2","₹70000","",2,"OPPO-Reno-8-2","./OPPO-Reno-8-2.webp");
let obj4=new Phone(4,"Honor XT","₹20000","",3,"Honor XT","./HONOR-X20-SE-5G-6-6-8-128.webp");
let obj5=new Phone(5,"Galaxy Z Fold","₹10009","",2,"Galaxy Z fold","./galaxy z fold news.jpg");
let obj6=new Phone(6,"Samsung Galaxy Z flip 3","₹69999","",2,"Z Flip 3","./Samsung-Galaxy-Z-Flip3-5G new.jpg");

// console.log(ar);

const jsonArr = JSON.stringify(ar);



// save to localStorage
localStorage.setItem("array", jsonArr); 
users = JSON.parse(localStorage.getItem("array") || "[]"); 
console.log(users);



//      creating search section----------------------------------------
// let searcharr=new Array();
var search=document.getElementById("searchbar");
if(search)
search.addEventListener("click",search_phone,false);
var ser=false;
function search_phone() {
    card_section.innerHTML="";
    // console.log(users);
    let input = document.getElementById('sach').value;
    let searcharr=new Array();
    input=input.toLowerCase();
    for(i=0;i<users.length;i++)
    {
        let {Sno,Name,Price,Description,Quantity,Model,Image}=users[i];
        
        if(`${Name}`.toLowerCase().match(input)) {
            searcharr.push(users[i]);
            console.log(`${Name}`);
            console.log("  & ");
            console.log(input);
        }
        // else
        // {
        //     users[i]={};
        // }
    }
    
    createCard(searcharr);
    
}






var card_section=document.createElement("div");
card_section.setAttribute("id","card_section");



function createCard(users)
{
    for(let x=0;x<users.length;x++)
{
    
    
    let {Sno,Name,Price,Description,Quantity,Model,Image}=users[x];

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


    // let quantity=document.createElement("div");
    // quantity.setAttribute("id","quant");
    // quantity.innerHTML=`${Quantity}`;
    // template.appendChild(quantity);

    let button=document.createElement("div");
    button.setAttribute("id","button");
    const bttn=document.createElement("button");
    bttn.setAttribute("id","cart_button");
    bttn.innerHTML = "Add to Cart!";
    bttn.myParam=`${Name}`;
    bttn.myno=1;
    bttn.cost=`${Price}`;
    bttn.imagg=`${Image}`;
    bttn.addEventListener("click",add_to_cart,false);
    bttn.setAttribute("onClick","window.location.reload(true)");
    button.appendChild(bttn);
    template.appendChild(button);

    cardNo.appendChild(template);
    card_section.appendChild(cardNo);
    document.body.appendChild(card_section);
}
}

createCard(users);





//---------------------------------------ADDING TO CART SECTION--------------------------------------------------------------------//
// var bttn=document.getElementById("cart_button");
// $('#cart_button').on('click',add_to_cart);
class Product{
    constructor(Product_name,Product_no,Rate,Image)
    {
      this.product_name=Product_name;
      this.product_no=Product_no;
      this.rate=Rate;
      this.image=Image;
    }
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
        // window.location.replace("./Login.html");
        window.location.href = "./Login.html";
        window.location.href = "www.google.co.in";
        window.location = "./Login.html";
        
        
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

        // let localStorage_users=new Array();
        // if(localStorage.users_database!=undefined)
        // {
        //     alert("the localStorage.users_database is defined");
        //     for(let i=0;i<(JSON.parse(localStorage.users_database)).length;i++)
        //     {
        //         alert("JSON.parse(localStorage.users_database) ka loop chal raha hai");
        //         localStorage_users.push(JSON.parse(localStorage.users_database)[i]);
        //     }

        // }
        // // localStorage_users=(JSON.parse(localStorage.users_database));
        // alert(localStorage_users);
        
        // let index=-1;
        // for(let i=0;i<localStorage_users.length;i++)
        // {
        //     if(localStorage_users[i].UserName==localStorage.current_user_name)
        //     {
        //         alert("hi");
        //         alert(i+"th is the current user");
        //         index=i;

        //         break;
        //     }
        // }
        // let ith_cart=new Array();
        // for(let i=0;i<localStorage_users[index].individual_cart.length;i++)
        // {
        //     item=JSON.parse(localStorage_users[index].individual_cart);
        //     // if(item.item_name==evt.currentTarget.myParam)
        //     // {
        //     //     ith_cart.push({item.item_name,item.item_no+1});
        //     //     ith_cart.push(JSON.parse(localStorage_users[index].individual_cart[i]))
        //     // }
        //     // ith_cart.push(JSON.parse(localStorage_users[index].individual_cart[i]))
        // }
        // ith_cart.push({evt.currentTarget.myParam,1});
    }
}







// ----------------Creating link of index and login-------------------
// var login_icon=document.getElementById("login_id_icon");
// var icon=createElement('i');
// icon.setAttribute("class","fa-solid fa-user");
// var link=document.createElement("a");
// link.setAttribute('href',"./Login.html");
// link.appendChild(login_icon);
// login_icon.appendChild(icon);

{/* <i class="fa-solid fa-user"></i> */}

// var createA = document.createElement('a');
//         var createAText = document.createTextNode(theCounter);
//         createA.setAttribute('href', "http://google.com");
//         createA.appendChild(createAText);
//         getTheTableTag.appendChild(createA);


// //-----------------All About User Logins and their database --------------------
// var Users_database=new Array();;
// var login_name=(document.getElementById("login_naam"))?document.getElementById("login_naam").value:"";
// var login_psw=document.getElementById("login_psw").value;
// var current_user_name="";
// var current_user_password="";
// let stops_image=document.getElementById("login_id_icon");
// if(stops_image)
// stops_image.addEventListener("click",stop_img);
// function stop_img() {
//     console.log("ruki ki nai")
//     getElementById("card_section").innerHTML="";
// }
// class UserId {
//     constructor()
//     {
//         this.UserName=document.getElementById("login_name");
//         this.Password=document.getElementById("login_psw");
//         this.individual_cart=new Array();
//     }

// }
// let logging_in=document.getElementById("login");
// logging_in.addEventListener("click",login);
// function login() {
//     for(let i=0;i<Users_database.length;i++)
//     {
//         if(Users_database[i].UserName==login_name && Users_database[i].Password==login_psw)
//         {
//             console.log("You are logged in");
//             current_user_name=login_name;
//             current_user_password=login_psw;
//         }
//     }
//     if(current_user_name=="")
//     console.log("You are not registered");
// }

// let register_in=document.getElementById("register");
// logging_in.addEventListener("click",register);
// let already_existing_user=false;
// function register() {
//     for(let i=0;i<Users_database.length;i++)
//     {
//         if(Users_database[i].UserName==login_name)
//         {
//             console.log("This UserName already taken. Try another one");
//             already_existing_user=true;
//         }
//     }
//     if(!already_existing_user)
//     {
//         let new_user=new UserId(login_name,login_psw);
//         Users_database.push(new_user);
//         const json_Users_database=JSON.stringify(Users_database);
//         localStorage.setItem("users_database",json_Users_database);
//         Users_database_in_use=JSON.parse(localStorage.getItem("users_database") || "[]");
//     }
// }




// var cart_event=document.getElementById("button");
// cart_event.addEventListener("click",add_to_cart);
// function add_to_cart() {
//     let 
// }

// -----------------Cart mein daal lo no of objects---------------------------
let no_of_objects_in_cart=document.querySelector(".cartAmount");;
if(localStorage.current_user_name!=undefined && localStorage.current_user_name!="")
{
    let userrr_cart=JSON.parse(localStorage.getItem(localStorage.current_user_name));
    let count=0;
    for(let i=0;i<userrr_cart.length;i++)
    {
        count+=userrr_cart[i].product_no;
    }

    let userr_cart=JSON.parse(localStorage.getItem(localStorage.current_user_name)).length;

no_of_objects_in_cart.innerHTML=count;
}


