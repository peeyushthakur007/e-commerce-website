//-----------------All About User Logins and their database --------------------
var Users_database=new Array();;
var Users_database_in_use=new Array();
// var login_name=document.getElementById("login_naam").value;
// var login_psw=document.getElementById("login_psw").value;
var current_user_name="";
var current_user_password="";
let stops_image=document.getElementById("login_id_icon");
// if(stops_image)
// stops_image.addEventListener("click",stop_img);
// function stop_img() {
//     console.log("ruki ki nai")
//     getElementById("card_section").innerHTML="";
// }
class UserId {
    constructor(name,pass)
    {
        this.UserName=name;
        this.Password=pass;
        this.individual_cart=new Array();
        this.cards=new Array(); //contains array of cards of the current user
        this.orders=new Array(); //contains array of order no that belong to the user (order nos are unique for each order) 
        this.transactions=new Array();//contains array of transaction nos 
    }
}
//Ek to banega tumahara transaction_no jo khula banega localStorage mein jo tab increment hoga jab payment meiin proceed click hoga
//Ek banega array of orders jisme unique order no ke sath orders aayenge
// class Orders {
//     constructor()
// }



let logging_in=document.getElementById("login");
logging_in.addEventListener("click",login);
function login() {
    alert("enter into registered");
    var login_name=document.getElementById("login_naam").value;
    alert(login_name);
    var login_psw=document.getElementById("login_psw").value;
    let localStorage_users=new Array();
    if(localStorage.users_database!=undefined)
    {
        alert("the localStorage.users_database is defined");
        for(let i=0;i<(JSON.parse(localStorage.users_database)).length;i++)
        {
            alert("JSON.parse(localStorage.users_database) ka loop chal raha hai");
            localStorage_users.push(JSON.parse(localStorage.users_database)[i]);
        }

    }
    // localStorage_users=(JSON.parse(localStorage.users_database));
    alert(localStorage_users);
   // var localStorage_users=new Array();
    // localStorage_users.push(JSON.parse(localStorage.users_database));
    // alert(localStorage_users);
    // console.log(localStorage_users);
    // for(var i=0;i<localStorage_users.length;i++)
    // {
        
    //     alert(localStorage_users[i].UserName);
    //     alert("and the login name");
    //     alert(login_name)
    //     if(localStorage_users[i].UserName==login_name && localStorage_users[i].Password==login_psw)
    //     {
    //         alert(login_name);
    //         console.log("You are logged in");
    //         current_user_name=login_name;
    //         current_user_password=login_psw;
    //         localStorage.setItem("current_user_name",JSON.stringify(current_user_name));
    //     }
    // }

    
    for(let i=0;i<localStorage_users.length;i++)
    {
        alert("iterating");
        
        if(localStorage_users[i]==null)
        {continue;}

        alert(localStorage_users[i].UserName);
        alert("login username is");
        alert(login_name);
        alert("localStorage_users[i].USernmane is: ")
        alert(localStorage_users[i].UserName);
        if(localStorage_users[i].UserName==login_name && localStorage_users[i].Password==login_psw)
        {
            alert(login_name + " you are now logged in");
            alert("logged in");
            userr_name=login_name;
            current_user_password=login_psw;
            localStorage.setItem("current_user_name",JSON.stringify(userr_name));
            // current_user_name=JSON.parse("current_user_name");
            alert(current_user_name);
            break;
        }
    }
    if(localStorage.current_user_name=="")
    {alert("current_user not logged in");
    alert("You are not registered, Register first");
    window.location.href = "./Login.html";

}
}

let register_in=document.getElementById("register");
register_in.addEventListener("click",register);
let already_existing_user=false;
function register() {

    alert("enter into registered");
    var login_name=document.getElementById("login_naam").value;
    alert(login_name);
    var login_psw=document.getElementById("login_psw").value;
    let localStorage_users=new Array();



    if(localStorage.users_database!=undefined)
    {
        alert("the localStorage.users_database is defined");
        for(let i=0;i<(JSON.parse(localStorage.users_database)).length;i++)
        {
            alert("JSON.parse(localStorage.users_database) ka loop chal raha hai");
            localStorage_users.push(JSON.parse(localStorage.users_database)[i]);
        }

    }



    // if(localStorage.users_database!=undefined)
    // {alert("localStorage.users is defined");
    // localStorage_users.push(JSON.parse(localStorage.users_database));
    alert(localStorage_users);
    for(let i=0;i<localStorage_users.length;i++)
    {
        alert("iterating");
        if(localStorage_users[i]==null)
        {continue;}

        alert(localStorage_users[i].UserName);
        alert("login username is");
        alert(login_name);

        if(localStorage_users[i].UserName==login_name)
        {
            alert("This UserName already taken. Try another one");
            already_existing_user=true;
        }
    }
    alert(already_existing_user);

    if(!already_existing_user)
    {
        alert("registeres");
        let new_user=new UserId(login_name,login_psw);
        alert("new user created");
        Users_database.push(new_user);
        alert("new user pushed into Users_database")
        let json_user=JSON.stringify(new_user);
        alert("new user stringified");
        alert("registeres");

        
        if(localStorage.users_database==undefined)
        {
            alert("localStorage.users_database is undefined");
            localStorage.setItem("users_database",json_user);
            alert("the json object created is pushed into localStorage using setitem");
            localStorage.setItem("current_user_name",JSON.stringify(login_name));
        }
        else
        {
            localStorage_users.push(new_user);
            localStorage.setItem('users_database',JSON.stringify(localStorage_users));
            alert("again pushed into local storage using setitem hoping it would remove the previous ones");
            localStorage.setItem("current_user_name",JSON.stringify(login_name));
            // localStorage.users_database+=json_user;
        }
        
    }

}

    // if(!already_existing_user)
    // {
    //     alert("registered");
    //     alert(login_name);
    //     let new_user=new UserId(login_name,login_psw);
    //     Users_database.push(JSON.parse(localStorage.getItem("users_database")));
    //     Users_database.push(new_user);
    //     let json_Users_database=JSON.stringify(Users_database);
    //     localStorage.setItem("users_database",json_Users_database);
    //     // Users_database_in_use=JSON.parse(localStorage.getItem("users_database") || "[]");

    //     localStorage.setItem("current_user_name",current_user_name);
    // }


localStorage.setItem("current_user_name",current_user_name);


// Users_database.push(new_user);
// VM6801:1 Uncaught ReferenceError: new_user is not defined
//     at <anonymous>:1:21
// (anonymous) @ VM6801:1
// let new_user=new UserId(jojo,j);
// VM6889:1 Uncaught ReferenceError: jojo is not defined
//     at <anonymous>:1:25
// (anonymous) @ VM6889:1
// let new_user=new UserId("jojo","j");
// undefined
// Users_database.push(new_user);
// VM6929:1 Uncaught TypeError: Users_database.push is not a function
//     at <anonymous>:1:16
// (anonymous) @ VM6929:1
// typeof(Users_database);
// 'object'
// let arrd=new Array();
// undefined
// arrd.push(Users_database);
// 1
// arrd
// [{…}]0: {UserName: 'peeyush', Password: 'p', individual_cart: Array(0)}length: 1[[Prototype]]: Array(0)
// arrd.push(new_user);
// 2
// arrd;
// (2) [{…}, UserId]0: {UserName: 'peeyush', Password: 'p', individual_cart: Array(0)}Password: "p"UserName: "peeyush"individual_cart: [][[Prototype]]: Object1: UserIdPassword: "j"UserName: "jojo"individual_cart: Array(0)length: 0[[Prototype]]: Array(0)[[Prototype]]: Objectlength: 2[[Prototype]]: Array(0)
// arrd[1].UserName
// 'jojo'
